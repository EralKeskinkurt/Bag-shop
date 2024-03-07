import { FaStar } from "react-icons/fa";
import { AiFillEye } from "react-icons/ai";
import { CiHeart } from "react-icons/ci";
import { VscDebugRestart } from "react-icons/vsc";
import { FaCartShopping } from "react-icons/fa6";
import type { RootState } from '../store/store'
import { useSelector, useDispatch } from 'react-redux'
import { addWishList, addCart, setViewProduct } from "../store/product.store";
import ProductInfo from "./ProductInfo";
import { useState } from "react";

export default function ShopProducts2() {
    const starCount = [1, 2, 3, 4, 5];
    const product = useSelector((state: RootState) => state.product).product
    const [isInfo, setInfo] = useState(false);
    const dispatch = useDispatch()


    const addViewProduct = (p: Product) => {
        dispatch(setViewProduct(p))

        setTimeout(() => {
            setInfo(true)
        }, 100)
    }
    return (
        <div className="w-full">
            <ul className="w-full flex flex-col items-center gap-16 justify-between">
                {product.map((p, i) => {
                    return (
                        <li key={i} className="grid grid-cols-[0.3fr_0.6fr] max-sm:grid-cols-1 items-start gap-3 w-full">
                            <figure className="relative overflow-hidden group">
                                <img src={p.image} alt="Product" />
                                <button onClick={() => addViewProduct(p)} className="text-[1.2rem] absolute top-32 left-28 scale-0 group-hover:scale-100 bg-white rounded-sm p-2.5 transition-transform duration-[200ms] shadow-gray-500 shadow-sm"><AiFillEye /></button>
                            </figure>
                            <div className="flex items-center w-full pr-16 max-sm:pr-0 justify-between gap-5">
                                <div className="flex-1">
                                    <h2 className="text-3xl font-[300]">{p.name}</h2>
                                    <hr className="my-5" />
                                    <span className="text-2xl">{p.price}.00 $</span>
                                    <div className="flex items-center my-4 gap-1">
                                        {starCount.map((a, z) => {
                                            return (
                                                <FaStar key={z} size={12} />
                                            )
                                        })}
                                    </div>
                                    <p className="text-sm">
                                    Donec accumsan auctor iaculis. Sed suscipit arcu ligula, at egestas magna molestie a. Proin ac ex maximus, ultrices justo eget, sodales orci. Aliquam egestas libero ac turpis pharetra
                                    </p>
                                    <button onClick={() => dispatch(addCart({...p, count: 1}))} className="font-semibold bg-black border transition-all mt-5 rounded-md border-black text-white py-2 hover:bg-white hover:text-black px-12">Add Cart</button>
                                </div>
                            </div>
                        </li>
                    )
                })}
            </ul>
            <ProductInfo isInfo={isInfo} setInfo={setInfo} />
        </div>
    )
}
