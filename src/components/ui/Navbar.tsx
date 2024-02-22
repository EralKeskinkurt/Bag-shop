import { GiSchoolBag } from "react-icons/gi";
import { GrShop } from "react-icons/gr";
import { LuHeart } from "react-icons/lu";


export default function Navbar() {
  return (
    <nav className="h-32 flex items-center w-full justify-center bg-transparent fixed top-0 left-0 z-10">
        <div className="container w-full flex justify-center h-full">
           <div className="flex items-center justify-between w-full px-4">
            <div className="flex items-center text-2xl -gap-2 font-medium"><GiSchoolBag size={50} /> Bag Shop</div>
                <ul className="flex items-center gap-14 text-[1.3rem] font-normal">
                    <li>Home</li>
                    <li>Shop</li>
                </ul>
                <ul className="flex items-center gap-5 text-[1.3rem] font-normal">
                    <li>Login</li>
                    <li><LuHeart size={26} /></li>
                    <li><GrShop size={26} /></li>
                </ul>
           </div>
        </div>
    </nav>
  )
}
