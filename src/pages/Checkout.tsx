import { ChangeEvent, useEffect, useState } from "react";
import { FaExclamationCircle } from "react-icons/fa";
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { RootState } from "../store/store";
import { useSelector } from "react-redux";
export default function CheckOut() {
    const cartProducts = useSelector((state: RootState) => state.product).cart
    let [subTotalPrice, setSubTotalPrice] = useState<number>(0)
    const [isOpen, setIsOpen] = useState(false)
    const [select, setSelect] = useState('');
    const [radio, setRadio] = useState<number>(1)

    const radioChange = (e: ChangeEvent<HTMLInputElement>) => {
        setRadio(Number(e.target.value));
    }


    const handleChange = (event: SelectChangeEvent) => {
        setSelect(event.target.value as string);
    };


    useEffect(() => {
        setSubTotalPrice(cartProducts.reduce((prev: number, current) => {
            return prev + current.price * current.count
        }, 0))
    }, [cartProducts])
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
            <section className="min-h-screen w-full">
                <div className="container px-20 w-full pt-20 transition-all">
                    <div className="flex w-full items-center bg-[#f4f4f4] gap-2 pl-8 py-5 text-[0.95rem] rounded-md">
                        <FaExclamationCircle size={28} className="text-green-500 " />  Have A Coupon? <b onClick={() => setIsOpen(!isOpen)} className="select-auto cursor-pointer">Click Here</b> To Enter Your Code.
                    </div>
                </div>
                <div className={`container px-20 w-full flex flex-col  items-start pb-10`}>
                    <div className={`mt-10 overflow-hidden transition-all ${isOpen ? 'h-32' : 'h-0'}`}>
                        <div className={`flex flex-col items-start transition-all gap-3 ${isOpen ? 'opacity-100' : 'opacity-0'}`}>
                            <span>If you have a coupon code, please apply it below.</span>
                            <div className="flex items-center gap-5">
                                <input type="text" placeholder="Coupon Code" className="outline-none border-[1px] border-gray-300 w-[28rem] p-3 rounded-md" />
                                <button className="font-semibold text-xs bg-black border transition-all border-black text-white rounded-full py-4 hover:bg-white hover:text-black px-12">APPLY COUPON</button>
                            </div>
                        </div>
                    </div>
                    <div className="w-full grid grid-cols-[0.5fr_0.5fr] gap-28 items-start transition-all mt-10">
                        <div className="w-full flex flex-col items-start justify-start gap-16">
                            <h3 className="text-xl font-semibold">Billing Details</h3>
                            <hr className="w-14 h-[2px] bg-black mt-3" />
                            <form className="flex flex-col items-start w-full gap-7 text-sm">
                                <div className="grid grid-cols-2 items-start gap-5 w-full">
                                    <div className="flex flex-col items-start gap-1 w-full">
                                        <label htmlFor="firstname" className="font-medium" >First name *</label>
                                        <input type="text" id="firstname" className="border-[1px] border-gray-300 p-2.5 rounded-md outline-none w-full" />
                                    </div>
                                    <div className="flex flex-col items-start gap-1 w-full">
                                        <label htmlFor="lastname" className="font-medium" >Last name *</label>
                                        <input type="text" id="lastname" className="border-[1px] border-gray-300 p-2.5 rounded-md outline-none w-full" />
                                    </div>
                                </div>
                                <div className="flex flex-col items-start gap-1 w-full">
                                    <label htmlFor="lastname" className="font-medium" >Company Name *</label>
                                    <input type="text" id="lastname" className="border-[1px] border-gray-300 p-2.5 rounded-md outline-none w-full" />
                                </div>
                                <div className="flex flex-col items-start gap-1 w-full">
                                    <label htmlFor="demo-simple-select-label">Country *</label>
                                    <Select
                                        className="w-full p-2.5"
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={select}
                                        onChange={handleChange}
                                    >
                                        <MenuItem value={0}><b>Select a country</b></MenuItem>
                                        <MenuItem value={10}>Turkey</MenuItem>
                                        <MenuItem value={20}>Germany</MenuItem>
                                        <MenuItem value={30}>France</MenuItem>
                                        <MenuItem value={30}>Italy</MenuItem>
                                        <MenuItem value={30}>Japan</MenuItem>
                                        <MenuItem value={30}>Russia</MenuItem>
                                        <MenuItem value={30}>China</MenuItem>
                                        <MenuItem value={30}>Canada</MenuItem>
                                        <MenuItem value={30}>Mexico</MenuItem>
                                        <MenuItem value={30}>United States</MenuItem>
                                    </Select>
                                </div>
                                <div className="flex flex-col items-start gap-1 w-full">
                                    <label htmlFor="street" className="font-medium" >Street address *</label>
                                    <input type="text" id="street" placeholder="House number and street name" className="border-[1px] border-gray-300 p-2.5 rounded-md outline-none w-full" />
                                    <input type="text" id="street2" placeholder="Apartment, suite, unit etc." className="border-[1px] mt-5 border-gray-300 p-2.5 rounded-md outline-none w-full" />
                                </div>
                                <div className="flex flex-col items-start gap-1 w-full">
                                    <label htmlFor="town" className="font-medium" >Town / City *</label>
                                    <input type="text" id="town" className="border-[1px] border-gray-300 p-2.5 rounded-md outline-none w-full" />
                                </div>
                                <div className="flex flex-col items-start gap-1 w-full">
                                    <label htmlFor="state" className="font-medium" >State / County *</label>
                                    <input type="text" id="state" className="border-[1px] border-gray-300 p-2.5 rounded-md outline-none w-full" />
                                </div>
                                <div className="flex flex-col items-start gap-1 w-full">
                                    <label htmlFor="state" className="font-medium" >State / County *</label>
                                    <input type="text" id="state" className="border-[1px] border-gray-300 p-2.5 rounded-md outline-none w-full" />
                                </div>
                                <div className="flex flex-col items-start gap-1 w-full">
                                    <label htmlFor="phone" className="font-medium" >Phone *</label>
                                    <input type="text" id="phone" className="border-[1px] border-gray-300 p-2.5 rounded-md outline-none w-full" />
                                </div>
                                <div className="flex flex-col items-start gap-1 w-full">
                                    <label htmlFor="email" className="font-medium" >Email Address *</label>
                                    <input type="text" id="email" className="border-[1px] border-gray-300 p-2.5 rounded-md outline-none w-full" />
                                </div>
                                <div>
                                    <label htmlFor="1">
                                        <input type="checkbox" id="1" /> Ship To A Different Address?
                                    </label>
                                </div>
                                <div className="flex flex-col items-start gap-1 w-full">
                                    <label htmlFor="ordernotes" className="font-medium" >Order Notes</label>
                                    <textarea id="ordernotes" rows={4} placeholder="Notes about your order, e.g. special notes for delivery." className="resize-none border-[1px] border-gray-300 p-2.5 rounded-md outline-none w-full" >
                                    </textarea>
                                </div>
                            </form>
                        </div>
                        <div className="w-full p-10">
                            <div className="flex flex-col items-start gap-8 w-full border-2 border-black px-10 py-12 text-sm">
                                <div>
                                    <h3 className="text-xl font-semibold">Your Order</h3>
                                    <hr className="w-14 h-[2px] bg-black mt-1" />
                                </div>
                                <div className="flex items-center w-full justify-between">
                                    <span>PRODUCT</span>
                                    <span>TOTAL</span>
                                </div>
                                {cartProducts?.map((p, i) => {
                                    return (
                                        <div key={i} className="flex items-center w-full justify-between">
                                            <span>{p.name} x{p.count}</span>
                                            <span>{p.price}</span>
                                        </div>
                                    )
                                })}
                                <hr className="w-full h-[1px] bg-gray-300" />
                                <div className="flex items-center w-full justify-between">
                                    <span>SUBTOTAL</span>
                                    <span>${subTotalPrice}.00</span>
                                </div>
                                <div className="flex items-center w-full justify-between">
                                    <span>SHIPPING</span>
                                    <span>Flat Rate; $20.00</span>
                                </div>
                                <div className="flex items-center w-full justify-between">
                                    <span>ORDER TOTAL</span>
                                    <span>${subTotalPrice + 20}.00</span>
                                </div>
                                <div className="flex flex-col items-start gap-3 w-full">
                                    <div className={`items-start gap-2 transition-all grid overflow-hidden ${radio === 1 ? 'grid-rows-[auto_60px]' : 'grid-rows-[auto_0px]'}`}>
                                        <label htmlFor="DIRECT" className="flex items-center gap-2">
                                            <input type="radio" id="DIRECT" defaultChecked name="payment" value={1} onChange={radioChange} /> DIRECT BANK TRANSFER
                                        </label>
                                        <p className={`text-xs`}>Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.</p>
                                    </div>

                                    <div className={`items-start gap-2 transition-all grid overflow-hidden ${radio === 2 ? 'grid-rows-[auto_60px]' : 'grid-rows-[auto_0px]'}`}>
                                        <label htmlFor="CHEQUE" className="flex items-center gap-2">
                                            <input type="radio" id="CHEQUE" name="payment" value={2} onChange={radioChange} />  CHEQUE PAYMENTS
                                        </label>
                                        <p className="text-xs">Please send a check to Store Name, Store Street, Store Town, Store State / County, Store Postcode.</p>
                                    </div>
                                    <div className={`items-start gap-2 transition-all grid overflow-hidden ${radio === 3 ? 'grid-rows-[auto_60px]' : 'grid-rows-[auto_0px]'}`}>
                                        <label htmlFor="CASH" className="flex items-center gap-2">
                                            <input type="radio" id="CASH" name="payment" value={3} onChange={radioChange} /> CASH ON DELIVERY
                                        </label>
                                        <p className="text-xs">Pay with cash upon delivery.</p>
                                    </div>
                                </div>
                                <p className="mt-2">Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in our privacy policy.</p>
                                <button className="w-full bg-black text-white text-xs hover:bg-white rounded-full hover:text-black border border-black transition-all py-5 font-semibold">PLACE ORDER</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
