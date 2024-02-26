import { GiSchoolBag } from "react-icons/gi";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FcLike } from "react-icons/fc";


export default function Footer() {
  return (
    <footer className="h-auto pt-20 pb-10 w-full bg-[#f4f8fa] flex items-center justify-center">
      <div className="w-full container h-full px-20">
        <div className="w-full flex flex-wrap items-center justify-between gap-10 h-full">
          <div className="flex flex-col items-start gap-10">
            <div className="flex items-center text-2xl -gap-2 font-medium"><GiSchoolBag size={50} /> Bag Shop</div>
            <ul className="flex flex-col items-start justify-start gap-4 text-[0.950rem]">
              <li>Address : Tsentar, ulitsa "Radetski" 73, 3320 Kozloduy, Bulgaristan</li>
              <li>Phone number: (555) 555-0155</li>
              <li>Email : info@company.com</li>
            </ul>
          </div>
          <div className="flex flex-col items-start gap-10">
            <h3 className="text-xl font-semibold">STORE MENU</h3>
            <ul className="text-[0.950rem] flex flex-col items-start justify-start gap-1">
              <li>{'>'} Best Seller</li>
              <li>{'>'} New Arrivals</li>
              <li>{'>'} Men</li>
              <li>{'>'} Women</li>
              <li>{'>'} Accessories</li>
            </ul>
          </div>
          <div className="flex flex-col items-start gap-10">
            <h3 className="text-xl font-semibold">INFORMATION</h3>
            <ul className="text-[0.950rem] flex flex-col items-start justify-start gap-1">
              <li>{'>'} About Us</li>
              <li>{'>'} Delivery Information</li>
              <li>{'>'} Privacy Policy</li>
              <li>{'>'} Terms & Conditions</li>
              <li>{'>'} Look Books</li>
            </ul>
          </div>
          <div className="flex flex-col items-start gap-10">
            <h3 className="text-xl font-semibold">QUESTION</h3>
            <ul className="text-[0.950rem] flex flex-col items-start justify-start gap-1">
              <li>{'>'} Help</li>
              <li>{'>'} Track Order</li>
              <li>{'>'} Support</li>
              <li>{'>'} Shopping & Delivery</li>
              <li>{'>'} FAQs</li>
            </ul>
          </div>
          <div className="flex flex-col items-start gap-10">
            <h3 className="text-xl font-semibold">MY ACCOUNT</h3>
            <ul className="text-[0.950rem] flex flex-col items-start justify-start gap-1">
              <li>{'>'} My Account</li>
              <li>{'>'} Order Delivery</li>
              <li>{'>'} Wishlist</li>
              <li>{'>'} Newsletter</li>
              <li className="opacity-0 select-none">{'>'} Newsletter</li>
            </ul>
          </div>
        </div>
        <hr className="h-[2px] bg-black mt-20 mb-10" />
        <div className="w-full items-center justify-center text-center">
            <span className="text-[0.950rem] flex items-center gap-2 justify-center">© Bag Shop 2024 Made With  <FcLike />  By Eral Keskinkurt</span>
            <ul className="text-[0.950rem] flex items-center justify-center gap-4 mt-4 w-full text-center">
              <li><FaFacebookF /></li>
              <li><FaLinkedinIn /></li>
              <li><FaTwitter /></li>
              <li><FaInstagram /></li>
            </ul>
        </div>
      </div>
    </footer>
  )
}
