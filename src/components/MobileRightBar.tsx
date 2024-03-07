import { useEffect, useState } from "react"
import { LuHeart } from "react-icons/lu"
import type { RootState } from '../store/store'
import { useSelector, useDispatch } from 'react-redux'
import { NavLink } from "react-router-dom"
import { GrShop } from "react-icons/gr"
import SideCart from "./SideCart"
import { IoMdClose } from "react-icons/io"
export default function MobileRightBar({ isMobileBar, setIsMobileBar }: { isMobileBar: boolean, setIsMobileBar: (value: boolean) => void }) {
    const cartProduct = useSelector((state: RootState) => state.product).cart
    const [isCart, setIsCart] = useState(false);

    useEffect(() => {
        if (isMobileBar) {
            document.body.style.overflow = "hidden"
        } else {
            document.body.style.overflow = "auto"
        }

    }, [isMobileBar])


    return (
        <div className={`fixed max-h-screen flex justify-end w-full inset-0 transition-all duration-300 ${isMobileBar ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
            <div onClick={() => setIsMobileBar(false)} className="absolute h-full inset-0 bg-black/60">
            </div>
            <nav className="w-full bg-black/80 text-white z-30  h-full flex flex-col items-center text-xl gap-5  justify-start  list-none">
                <div className="w-full flex justify-end p-2">
                <IoMdClose onClick={() => setIsMobileBar(false)} className="text-white cursor-pointer p-2 bg-black" size={50} />
                </div>
                <NavLink to="/" className="text-white mt-20">Home</NavLink>
                <NavLink to="/shop" className="text-white">Shop</NavLink>
                <NavLink to="/login" className="text-white">Login</NavLink>
                <div className="flex items-center gap-5 mt-10">
                    <div className="text-white"><NavLink to="/wishlist" ><LuHeart size={26} /></NavLink></div>
                    <div className="relative">{cartProduct.length > 0 && <span className="absolute bg-red-600 w-5 h-5 text-center rounded-full flex items-center justify-center text-xs text-white -bottom-3 -right-2">{cartProduct.length}</span>}<GrShop className="cursor-pointer" onClick={() => setIsCart(true)} size={26} /></div>
                </div>
            </nav>
            <SideCart isCart={isCart} setIsCart={setIsCart} />
        </div>
    )
}
