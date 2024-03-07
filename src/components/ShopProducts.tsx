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

export default function ShopProducts() {
    const starCount = [1, 2, 3, 4, 5];
    const product = useSelector((state: RootState) => state.product).product
    const  [isInfo, setInfo] = useState(false);
    const dispatch = useDispatch()


    const addViewProduct = (p:Product) => {
        dispatch(setViewProduct(p))

        setTimeout(() => {
            setInfo(true)
        },100)
    }
    return (
        <div className="w-full">
        <ul className="w-full grid grid-cols-3 max-sm:grid-cols-1 items-center gap-10 justify-center">
            {product.map((p, i) => {
                return (
                    <li key={i} className="flex flex-col items-center gap-3 w-full">
                        
                        <figure className="relative overflow-hidden group">
                            <img src={p.image} alt="Product" />
                            <div className="absolute flex  flex-col items-center   font-semibold bottom-8 gap-1.5 text-[1.2rem]">
                                <button onClick={() => addViewProduct(p)} className="bg-white rounded-sm p-2.5 group-hover:translate-x-4 transition-transform duration-[200ms] -translate-x-14 shadow-gray-500 shadow-sm"><AiFillEye /></button>
                                <button onClick={() => dispatch(addWishList(p))} className="bg-white rounded-sm p-2.5 group-hover:translate-x-4 transition-transform duration-[300ms] -translate-x-14 shadow-gray-500 shadow-sm"><CiHeart /></button>
                                <button className="bg-white rounded-sm p-2.5 group-hover:translate-x-4 transition-transform duration-[500ms] -translate-x-14 shadow-gray-500 shadow-sm"><VscDebugRestart /></button>
                                <button onClick={() => dispatch(addCart({ ...p, count: 1 }))} className="bg-white rounded-sm p-2.5 group-hover:translate-x-4 transition-transform duration-[700ms] -translate-x-14 shadow-gray-500 shadow-sm"><FaCartShopping /></button>
                            </div>
                        </figure>
                        <div className="flex items-center text-centerw-full pr-16 justify-between gap-5">
                            <div className="flex-1">
                                <h2 className="text-lg font-[300]">{p.name}</h2>
                                <hr />
                                <span className="text-2xl">{p.price}.00 $</span>
                            </div>
                            <div className="flex items-center mb-1  gap-1">
                                {starCount.map((_a, z) => {
                                    return (
                                        <FaStar key={z} size={11} />
                                    )
                                })}
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
