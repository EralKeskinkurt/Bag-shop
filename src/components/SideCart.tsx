import { useEffect } from "react"
import { IoMdClose } from "react-icons/io";
import type { RootState } from '../store/store'
import { useSelector, useDispatch } from 'react-redux'
import { deleteCartProduct, addCart, fullDeleteCartProduct } from "../store/product.store";
import { NavLink } from "react-router-dom";
export default function SideCart({ isCart, setIsCart }: { isCart: boolean, setIsCart: (value: boolean) => void }) {
    const dispatch = useDispatch()
    const cartProducts = useSelector((state: RootState) => state.product).cart

    const increment = (p: Cart) => {
        if (p.count <= 99) {
            return dispatch(addCart({ id: p.id, name: p.name, image: p.image, price: p.price, count: p.count }))
        }
    }


    const decrement = (p: Cart) => {
        if (p.count >= 2) {
            return dispatch(deleteCartProduct(p.id))
        }
    }

    useEffect(() => {
        if (isCart) {
            document.body.style.overflow = "hidden"
        } else {
            document.body.style.overflow = "auto"
        }

    }, [isCart])

    return (
        <div className={`fixed max-h-screen flex justify-end w-full inset-0 transition-all duration-300 ${isCart ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
            <div onClick={() => setIsCart(false)} className="absolute h-full inset-0 bg-black/60">

            </div>
            <div className={`w-[27rem] z-10 h-full bg-white transition-all duration-500 p-4 ${isCart ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-96'}`}>
                <div className="flex flex-col h-full items-center w-full ">
                    <div className="w-full flex justify-end h-[5%]">
                        <IoMdClose onClick={() => setIsCart(false)} className="text-gray-400 cursor-pointer hover:text-black " size={33} />
                    </div>
                    {cartProducts.length <= 0 ?
                        <div className="w-full h-[95%] flex items-center justify-center">
                            <h3 className="text-lg underline underline-offset-4">No products added here yet!</h3>
                        </div>
                        :
                        <div className="flex flex-col flex-1 h-[95%] w-full items-start gap-5 px-10">
                            <h1 className="text-[1.6rem] font-medium">Shopping Cart</h1>
                            <ul className="flex flex-col h-full w-full items-start gap-5 overflow-y-auto cart-flow">
                                {cartProducts.map((p, i) => {
                                    return (
                                        <li key={i} className="flex items-start w-full gap-5 border-b border-b-gray-300 py-5">
                                            <img src={p.image} alt="product" className="h-[4.4rem] w-[4.4rem]" />
                                            <div className="flex flex-col items-start gap-3 flex-grow">
                                                <h3 className="text-lg font-medium">{p.name}</h3>
                                                <div className="flex items-center gap-4">
                                                    <div className="flex items-center w-auto gap-3 text-[1.05rem]">
                                                        <span onClick={() => decrement(p)} className="cursor-pointer text-[1.2rem] bg-gray-200  px-2">-</span>
                                                        <input type="number" value={p.count} className="outline-none border-none w-6" />
                                                        <span onClick={() => increment(p)} className="cursor-pointer text-[1.2rem] bg-gray-200  px-2">+</span>
                                                    </div> 
                                                    ${p.price * p.count}
                                                </div>
                                            </div>
                                            <IoMdClose onClick={() => dispatch(fullDeleteCartProduct(p.id))} className="text-gray-400 cursor-pointer hover:text-black" size={28} />
                                        </li>
                                    )
                                })}
                            </ul>
                            <div className="w-full flex flex-col items-start gap-4">
                                <div className="flex items-center h-auto justify-between w-full">
                                    <span className="text-[1.9rem]">Subtotal</span>
                                    <span className="text-[1.9rem]">${cartProducts.reduce((prev:number, current) => {
                                        return prev + current.price * current.count
                                    },0) + 20}.00</span>
                                </div>
                                <NavLink to="/cart" className="font-semibold bg-[#562e48] border transition-all border-[#562e48] text-white rounded-full w-full py-2 hover:bg-white hover:text-[#562e48] px-12">VIEW CART</NavLink>
                                <NavLink to="/checkout" className="font-semibold bg-[#562e48] border transition-all border-[#562e48] text-white rounded-full w-full py-2 hover:bg-white hover:text-[#562e48] px-12">CHECKOUT</NavLink>
                            </div>
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}
