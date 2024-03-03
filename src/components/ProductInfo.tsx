import { useEffect, useState } from "react"
import { useSelector, useDispatch } from 'react-redux'
import { IoMdClose } from "react-icons/io";
import type { RootState } from '../store/store'
import { deleteCartProduct, addCart } from "../store/product.store";
import { FaStar } from "react-icons/fa";
export default function ProductInfo({ isInfo, setInfo }: { isInfo: boolean, setInfo: (value: boolean) => void }) {
    const [count, setCount] = useState(1)
    const dispatch = useDispatch()
    const viewProduct = useSelector((state: RootState) => state.product).view
    const starCount = [1, 2, 3, 4, 5];

    const increment = () => {
        if (count <= 99) {
            setCount(count + 1)
        }
    }


    const decrement = () => {
        if (count >= 2) {
            setCount(count - 1)
        }
    }

    useEffect(() => {
        if (isInfo) {
            document.body.style.overflow = "hidden"
        } else {
            document.body.style.overflow = "auto"
        }

    }, [isInfo])

    return (
        <div className={`fixed max-h-screen flex justify-center items-center w-full inset-0 transition-all z-30 duration-300 ${isInfo ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
            <div onClick={() => setInfo(false)} className="absolute h-full inset-0 bg-black/60">
            </div>
            <div className="w-[65rem] h-[40rem] bg-white z-20 grid grid-cols-[0.8fr_1fr]">
                <img className="w-full h-full object-cover" src={viewProduct.image} alt="product" />
                <div className="w-full flex flex-col items-start gap-3">
                    <div className="w-full flex justify-end h-[5%]">
                        <IoMdClose onClick={() => setInfo(false)} className="text-white cursor-pointer p-2 bg-black" size={43} />
                    </div>
                    <div className="flex flex-col items-start gap-3 py-5 px-10">
                        <div className="flex items-center gap-1">
                            {starCount.map((a, z) => {
                                return (
                                    <FaStar key={z} size={16} />
                                )
                            })}
                        </div>
                        <h2 className="text-[2rem] font-meidum">{viewProduct.name}</h2>
                        <p>Donec accumsan auctor iaculis. Sed suscipit arcu ligula, at egestas magna molestie a. Proin ac ex maximus, ultrices justo eget, sodales orci. Aliquam egestas libero ac turpis pharetra, in vehicula lacus scelerisque. Vestibulum ut sem laoreet, feugiat tellus at, hendrerit arcu.</p>
                        <span className="text-[2rem] mt-4">${viewProduct.price}.00</span>
                        <div className="flex items-center justify-start gap-5 mt-2">
                            <span className="text-lg">Size :</span>
                            <div className="flex items-center gap-3">
                                <span className="border py-2 font-semibold px-6 border-black cursor-pointer">
                                    S
                                </span>
                                <span className="border py-2 font-semibold px-6 border-black cursor-pointer">
                                    M
                                </span>
                                <span className="border py-2 font-semibold px-6 border-black cursor-pointer">
                                    L
                                </span>
                                <span className="border py-2 font-semibold px-6 border-black cursor-pointer">
                                    XL
                                </span>
                            </div>
                        </div>
                        <div className="flex gap-2 items-center">
                            <span>Clear :</span>
                            <span className="text-red-400">X</span>
                        </div>
                        <div className="flex items-center gap-4">
                            <span>Quantity : </span>
                            <div className="flex items-center w-auto gap-3 text-[1.05rem] border border-black py-2 px-4">
                                <span onClick={() => decrement()} className="cursor-pointer text-[1.2rem] px-2">-</span>
                                <input type="number" value={count} className="outline-none border-none w-5" />
                                <span onClick={() => increment()} className="cursor-pointer text-[1.2rem] px-2">+</span>
                            </div>
                            <button onClick={() => dispatch(addCart({...viewProduct, count: count}))} className="font-semibold bg-black border transition-all border-black text-white py-3 hover:bg-white hover:text-black px-12">Add Cart</button>
                        </div>
                        <div className="flex items-center gap-4">
                            <span>Category :</span>
                            <span>...</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
