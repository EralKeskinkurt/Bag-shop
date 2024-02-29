
import { useEffect, useState } from "react";
import CartTable from "../components/CartTable";
import { RootState } from "../store/store";
import { useSelector } from "react-redux";
export default function Cart() {
    let [subTotalPrice, setSubTotalPrice] = useState<number>(0)
    const cartProducts = useSelector((state: RootState) => state.product).cart

    useEffect(() => {
        setSubTotalPrice(cartProducts.reduce((prev: number, current) => {
            return prev + current.price * current.count
        }, 0))
    }, [cartProducts])
    return (
        <div className="w-full h-auto">
            <div className="w-full h-28 bg-white">
            </div>
            <section className="w-full bg-[#f4f4f4] h-auto flex items-center justify-center py-20">
                <div className="text-center">
                    <h1 className="text-[3.7rem] font-semibold">CART</h1>
                    <span>Home / Cart</span>
                </div>
            </section>
            <section className="w-full">
                {cartProducts.length <= 0 ?
                    <div className="w-full flex items-center justify-center py-36">
                        <h1 className="text-[2rem]">No product added yet</h1>
                    </div>
                    :
                    <div className="relative overflow-x-auto container grid grid-cols-[1fr_0.46fr]  gap-8 items-start w-full px-28 py-36">
                        <table className="w-full text-sm text-left rtl:text-right">
                            <thead className="text-xs text-gray-700 uppercase">
                                <tr>
                                    <td scope="col" className="px-4 py-3"></td>
                                    <td scope="col" className="px-4 py-3">
                                        Product
                                    </td>
                                    <td scope="col" className="px-4 py-3">
                                        Price
                                    </td>
                                    <td scope="col" className="px-4 py-3">
                                        Quiantity
                                    </td>
                                    <td scope="col" className="px-4 py-3">
                                        Total
                                    </td>
                                </tr>
                            </thead>
                            <tbody>
                                {cartProducts.map((w, i) => {
                                    return <CartTable key={i} id={w.id} image={w.image} name={w.name} price={w.price} count={w.count} />
                                })}
                            </tbody>
                        </table>
                        <div className="bg-[#f6f6f6] w-full">
                            <div className="p-10 flex flex-col items-start gap-5">
                                <h3 className="text-xs font-semibold">Cart totals</h3>
                                <div className="flex items-center gap-3 text-sm font-semibold">
                                    <span>Subtotal</span>
                                    <span>${subTotalPrice}.00</span>
                                </div>
                                <div className="flex items-start gap-3 text-sm font-semibold">
                                    <span>Shipping</span>
                                    <span>
                                        Flat Rate: $20.00 <br />
                                        Calculate Shipping
                                    </span>
                                </div>
                                <hr className="w-full border border-gray-400" />
                                <div className="flex items-center gap-3 text-sm font-semibold">
                                    <span>Total</span>
                                    <span>${subTotalPrice + 20}.00</span>
                                </div>
                            </div>
                            <button className="w-full bg-black text-white text-xs hover:bg-white hover:text-black border border-black transition-all py-5 font-semibold">PROCEED TO CHECKOUT</button>
                        </div>
                    </div>
                }
            </section>
        </div>
    )
}
