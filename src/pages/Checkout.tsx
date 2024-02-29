import { useState } from "react";
import { FaExclamationCircle } from "react-icons/fa";

export default function CheckOut() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className="w-full h-auto ">
            <div className="w-full h-28 bg-white">
            </div>
            <section className="w-full bg-[#f4f4f4] h-auto flex items-center justify-center py-20">
                <div className="text-center">
                    <h1 className="text-[3.7rem] font-semibold">CHECKOUT</h1>
                    <span>Home / Checkout</span>
                </div>
            </section>
            <section className="min-h-screen h-screen w-full">
                <div className="container px-20 w-full pt-20 transition-all">
                    <div className="flex w-full items-center bg-[#f4f4f4] gap-2 pl-8 py-5 text-[0.95rem] rounded-md">
                        <FaExclamationCircle size={28} className="text-green-500 " />  Have A Coupon? <b onClick={() => setIsOpen(!isOpen)} className="select-auto cursor-pointer">Click Here</b> To Enter Your Code.
                    </div>
                </div>
                <div className={`container px-20 w-full flex flex-col  items-start`}>
                    <div className={`mt-10 overflow-hidden transition-all ${isOpen ? 'h-32' : 'h-0'}`}>
                        <div className={`flex flex-col items-start transition-all gap-3 ${isOpen ? 'opacity-100' : 'opacity-0'}`}>
                            <span>If you have a coupon code, please apply it below.</span>
                            <div className="flex items-center gap-5">
                                <input type="text" placeholder="Coupon Code" className="outline-none border-[1px] border-gray-300 w-[28rem] p-3 rounded-md" />
                                <button className="font-semibold text-xs bg-black border transition-all border-black text-white rounded-full py-4 hover:bg-white hover:text-black px-12">APPLY COUPON</button>
                            </div>
                        </div>
                    </div>
                    <div className="w-full transition-all mt-10">
                        <div className="w-full flex flex-col items-start">
                            <h3 className="text-xl font-semibold">Billing Details</h3>
                            <hr className="w-14 h-[2px] bg-black mt-3" />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
