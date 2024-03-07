import { GiSchoolBag } from "react-icons/gi";
import { GrShop } from "react-icons/gr";
import { LuHeart } from "react-icons/lu";
import { NavLink } from "react-router-dom";
import SideCart from "../SideCart";
import { useState } from "react";
import type { RootState } from '../../store/store'
import { useSelector } from 'react-redux'
import { IoMdMenu } from "react-icons/io";
import MobileRightBar from "../MobileRightBar";
interface Props {
  isNavbarVisible?: boolean,
  currentScrollPos: number
}

export default function Navbar({ isNavbarVisible, currentScrollPos }: Props) {
  const  [isCart, setIsCart] = useState(false);
  const  [isMobileBar, setIsMobileBar] = useState(false);
  const cartProduct = useSelector((state: RootState) => state.product).cart

  return (
    <nav className={`${isNavbarVisible ? 'top-0 ' : '-top-full'} transition-all duration-400 ${currentScrollPos <= 0 ? 'bg-transparent' : 'bg-white'} py-8 max-sm:py-5 h-auto flex items-center w-full justify-center  fixed left-0 z-30`}>
      <div className={`container w-full flex justify-center max-sm:px-5 h-full px-20`}>
        <div className="flex items-center justify-between w-full ">
          <NavLink to="/" className="flex items-center text-2xl -gap-2 font-medium max-sm:text-xl"><GiSchoolBag size={50} /> Bag Shop</NavLink>
          <IoMdMenu onClick={() => setIsMobileBar(true)} className="md:hidden cursor-pointer" size={30}/>
          <ul className="flex items-center gap-14 text-[1.3rem] font-normal max-sm:hidden">
            <li className="relative group overflow-hidden">
              <hr className="w-full h-[3px] absolute -translate-x-16 group-hover:translate-x-0 bg-black group-hover:w-full transition-all duration-300" />
              <NavLink to="/" >Home</NavLink>
            </li>
            <li className="relative group overflow-hidden">
              <hr className="w-full h-[3px] absolute -translate-x-16 group-hover:translate-x-0 bg-black group-hover:w-full transition-all duration-300" />
              <NavLink to="/shop" >Shop</NavLink>
            </li>
          </ul>
          <ul className="flex items-center gap-5 text-[1.3rem] font-normal max-sm:hidden">
            <li className="relative group overflow-hidden">
              <hr className="w-full h-[3px] absolute -translate-x-16 group-hover:translate-x-0 bg-black group-hover:w-full transition-all duration-300" />
              <NavLink to="/login">Login</NavLink>
            </li>
            <li><NavLink to="/wishlist" ><LuHeart size={26} /></NavLink></li>
            <li className="relative">{cartProduct.length > 0 && <span className="absolute bg-red-600 w-5 h-5 text-center rounded-full flex items-center justify-center text-xs text-white -bottom-3 -right-2">{cartProduct.length}</span>}<GrShop className="cursor-pointer" onClick={() => setIsCart(true)} size={26} /></li>
          </ul>
        </div>
      </div>
      <SideCart isCart={isCart} setIsCart={setIsCart}  />
      <MobileRightBar isMobileBar={isMobileBar} setIsMobileBar={setIsMobileBar}/>
    </nav>
  )
}
