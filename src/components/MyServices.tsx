import { LiaShippingFastSolid } from "react-icons/lia";
import { FaSackDollar } from "react-icons/fa6";
import { BiSupport } from "react-icons/bi";

export default function MyServices() {
    return (
        <section className="w-full">
            <div className="container w-full px-20 py-20">
                <ul className="grid grid-cols-3 items-center gap-10 justify-between w-full">
                    <li className="bg-[#f4f4f4] overflow-hidden relative w-full h-full py-16">
                        <LiaShippingFastSolid size={300} className="opacity-5 absolute text-gray-700 -rotate-45 right-0 top-0" />
                        <div className="flex flex-col gap-1 w-full items-center justify-center">
                            <LiaShippingFastSolid size={75} className="text-black text-center" />
                            <span className="font-medium">FREE HOME DELIVERY</span>
                        </div>
                    </li>
                    <li className="bg-[#f4f4f4] overflow-hidden relative w-full h-full py-16">
                        <FaSackDollar size={300} className="opacity-5 absolute text-gray-700 -rotate-45 right-0 top-0" />
                        <div className="flex flex-col gap-1 w-full items-center justify-center">
                            <FaSackDollar size={75} className="text-black text-center" />
                            <span className="font-medium">MONEY BACK GUARANTEE</span>
                        </div>
                    </li>
                    <li className="bg-[#f4f4f4] overflow-hidden relative w-full h-full py-16">
                        <BiSupport size={300} className="opacity-5 absolute text-gray-700 -rotate-45 right-0 top-0" />
                        <div className="flex flex-col gap-1 w-full items-center justify-center">
                            <BiSupport size={75} className="text-black text-center" />
                            <span className="font-medium">SUPORT 24/7</span>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    )
}
