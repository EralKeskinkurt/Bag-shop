import { GiSchoolBag } from "react-icons/gi";
import { GrShop } from "react-icons/gr";
import { LuHeart } from "react-icons/lu";
import { NavLink } from "react-router-dom";

interface Props {
  isNavbarVisible?: boolean,
  currentScrollPos: number
}

export default function Navbar({ isNavbarVisible, currentScrollPos }: Props) {
  return (
    <nav className={`${isNavbarVisible ? 'top-0 ' : '-top-full'} transition-all duration-400 ${currentScrollPos <= 0 ? 'bg-transparent' : 'bg-white'} py-8 h-auto flex items-center w-full justify-center  fixed left-0 z-30`}>
      <div className={`container w-full flex justify-center h-full px-20`}>
        <div className="flex items-center justify-between w-full ">
          <div className="flex items-center text-2xl -gap-2 font-medium"><GiSchoolBag size={50} /> Bag Shop</div>
          <ul className="flex items-center gap-14 text-[1.3rem] font-normal">
            <li className="relative group overflow-hidden">
              <hr className="w-full h-[3px] absolute -translate-x-16 group-hover:translate-x-0 bg-black group-hover:w-full transition-all duration-300" />
              <NavLink to="/" >Home</NavLink>
            </li>
            <li className="relative group overflow-hidden">
              <hr className="w-full h-[3px] absolute -translate-x-16 group-hover:translate-x-0 bg-black group-hover:w-full transition-all duration-300" />
              <NavLink to="/shop" >Shop</NavLink>
            </li>
          </ul>
          <ul className="flex items-center gap-5 text-[1.3rem] font-normal">
            <li className="relative group overflow-hidden">
              <hr className="w-full h-[3px] absolute -translate-x-16 group-hover:translate-x-0 bg-black group-hover:w-full transition-all duration-300" />
              <NavLink to="/login">Login</NavLink>
            </li>
            <li><LuHeart size={26} /></li>
            <li><GrShop size={26} /></li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
