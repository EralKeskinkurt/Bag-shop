import { useEffect } from "react"
import { IoMdClose } from "react-icons/io";
import type { RootState } from '../store/store'
import { useSelector, useDispatch } from 'react-redux'
import { deleteCartProduct } from "../store/product.store";
export default function Cart({ isCart, setIsCart }: { isCart: boolean, setIsCart: (value: boolean) => void }) {
    const dispatch = useDispatch()
    const cartProducts = useSelector((state: RootState) => state.product).cart

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
                                        <li className="flex items-start w-full gap-5 border-b border-b-gray-300 py-5">
                                            <img src={p.image} alt="product" className="h-[4.4rem] w-[4.4rem]" />
                                            <div className="flex flex-col items-start gap-3 flex-grow">
                                                <h3 className="text-lg font-medium">{p.name}</h3>
                                                <span>1x ${p.price}</span>
                                            </div>
                                            <IoMdClose onClick={() => dispatch(deleteCartProduct(p.id))} className="text-gray-400 cursor-pointer hover:text-black" size={28} />
                                        </li>
                                    )
                                })}
                            </ul>
                            <div className="w-full flex flex-col items-start gap-4">
                                <div className="flex items-center h-auto justify-between w-full">
                                    <span className="text-[1.9rem]">Subtotal</span>
                                    <span className="text-[1.9rem]">$98.00</span>
                                </div>
                                <button className="font-semibold bg-[#562e48] border transition-all border-[#562e48] text-white rounded-full w-full py-2 hover:bg-white hover:text-[#562e48] px-12">VIEW CART</button>
                                <button className="font-semibold bg-[#562e48] border transition-all border-[#562e48] text-white rounded-full w-full py-2 hover:bg-white hover:text-[#562e48] px-12">CHECKOUT</button>
                            </div>
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}
