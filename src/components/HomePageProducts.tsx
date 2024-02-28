import { FaStar } from "react-icons/fa";
import { AiFillEye } from "react-icons/ai";
import { CiHeart } from "react-icons/ci";
import { VscDebugRestart } from "react-icons/vsc";
import { FaCartShopping } from "react-icons/fa6";
import type { RootState } from '../store/store'
import { useSelector, useDispatch } from 'react-redux'
import { addWishList } from "../store/product.store";
export default function HomePageProducts() {
    const starCount = [1, 2, 3, 4, 5];
    const product = useSelector((state: RootState) => state.product).product
    const dispatch = useDispatch()
    return (
        <section id="homepage-products" className="w-full">
            <div className="w-full container px-20 py-14 flex flex-col items-start justify-start gap-14">
                <div className="flex flex-col items-start gap-3 text-start px-24">
                    <h1 className="text-3xl font-semibold">NEW ARRIVALS</h1>
                    <p className="text-[0.9rem]">Neque porro quisquam est, qui dolorem ipsum quia  dolor <br /> ipisci velit, sed quia non numquam eius modi</p>
                </div>
                <ul className="w-full flex flex-wrap items-center gap-10 justify-center">
                    {product.map((p, i) => {
                        return (
                            <li key={i} className="flex flex-col items-center gap-3">
                                <figure className="relative overflow-hidden group">
                                    <img src={p.image} alt="Product" />
                                    <div className="absolute flex  flex-col items-center   font-semibold bottom-8 gap-1.5 text-[1.2rem]">
                                        <button className="bg-white rounded-sm p-2.5 group-hover:translate-x-4 transition-transform duration-[200ms] -translate-x-14 shadow-gray-500 shadow-sm"><AiFillEye /></button>
                                        <button className="bg-white rounded-sm p-2.5 group-hover:translate-x-4 transition-transform duration-[300ms] -translate-x-14 shadow-gray-500 shadow-sm"><CiHeart onClick={() => dispatch(addWishList(p))} /></button>
                                        <button className="bg-white rounded-sm p-2.5 group-hover:translate-x-4 transition-transform duration-[500ms] -translate-x-14 shadow-gray-500 shadow-sm"><VscDebugRestart /></button>
                                        <button className="bg-white rounded-sm p-2.5 group-hover:translate-x-4 transition-transform duration-[700ms] -translate-x-14 shadow-gray-500 shadow-sm"><FaCartShopping /></button>
                                    </div>
                                </figure>
                                <div className="w-full flex items-center justify-between gap-5">
                                    <div className="flex-1">
                                        <h2 className="text-lg font-[300]">{p.name}</h2>
                                        <hr />
                                        <span className="text-2xl">{p.price}.00 $</span>
                                    </div>
                                    <div className="flex items-center mb-1  gap-1">
                                        {starCount.map((a, z) => {
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
            </div>
        </section>
    )
}
