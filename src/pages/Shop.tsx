import { useState } from "react";
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Pagination from '@mui/material/Pagination';
import MenuItem from '@mui/material/MenuItem';
import { CgMenuGridR } from "react-icons/cg";
import { FaList } from "react-icons/fa6";
import ShopProducts from "../components/ShopProducts";
import ShopProducts2 from "../components/ShopProducts2";
export default function Shop() {
    const [select, setSelect] = useState('');
    const [isDesign, setIsDesign] = useState(true);
    const handleChange = (event: SelectChangeEvent) => {
        setSelect(event.target.value as string);
    };

    return (
        <div className="w-full h-auto">
            <div className="w-full h-28 bg-white">
            </div>
            <section className="w-full bg-[#f4f4f4] h-auto flex items-center justify-center py-20">
                <div className="text-center">
                    <h1 className="text-[3.7rem] font-semibold">SHOP</h1>
                    <span>Home / Shop</span>
                </div>
            </section>
            <div className="container w-full px-20 max-sm:px-10 items-start justify-center max-sm:gap-10 grid grid-cols-[0.3fr_1fr] max-sm:grid-cols-1 gap-20 py-20">
                <div className="w-full flex flex-col items-start max-sm:hidden overflow-hidden">
                    <h3 className="font-medium underline decoration-4 z-10 underline-offset-4">CATEGORY</h3>
                    <hr className="w-full border-[2px] border-gray-300" />
                    <ul className="flex flex-col items-start gap-4 text-sm mt-10 w-full">
                        <li className="flex gap-3 w-full items-center">Winter Collection <hr className="flex-grow border border-gray-300" /> {`>>`}</li>
                        <li className="flex gap-3 w-full items-center">Women’s Clothes <hr className="flex-grow border border-gray-300" /> {`>>`}</li>
                        <li className="flex gap-3 w-full items-center">Men’s Clothes <hr className="flex-grow border border-gray-300" /> {`>>`}</li>
                        <li className="flex gap-3 w-full items-center">Kid’s Clothes <hr className="flex-grow border border-gray-300" /> {`>>`}</li>
                        <li className="flex gap-3 w-full items-center">Uncategorized <hr className="flex-grow border border-gray-300" /> {`>>`}</li>
                        <li className="flex gap-3 w-full items-center">Accessories <hr className="flex-grow border border-gray-300" /> {`>>`}</li>
                        <li className="flex gap-3 w-full items-center">New Arrival <hr className="flex-grow border border-gray-300" /> {`>>`}</li>
                    </ul>
                </div>
                <div className="w-full flex flex-col gap-16 items-center justify-center">
                    <div className="flex items-center justify-between w-full">
                        <Select
                            className="w-72 max-sm:w-52 -py-1 !bg-gray-100 !outline-none"
                            id="demo-simple-select"
                            value={select ? select : "10"}
                            onChange={handleChange}
                        >
                            <MenuItem value={10}>
                                Default sorting
                            </MenuItem>
                            <MenuItem value={20}>Low to high</MenuItem>
                            <MenuItem value={30}>High to low</MenuItem>
                        </Select>
                        <div className="flex items-center gap-5">
                            <span className="max-sm:hidden">Showing Result 08 Among 72</span>
                            <CgMenuGridR onClick={() => setIsDesign(true)} className="text-gray-500 cursor-pointer hover:text-black" size={25} />
                            <FaList onClick={() => setIsDesign(false)} className="text-gray-500 cursor-pointer hover:text-black" size={20} />
                        </div>
                    </div>
                    {isDesign ? <ShopProducts /> :<ShopProducts2 />}
                    <div className="flex items-center">
                        <Pagination count={10} variant="outlined" shape="rounded" className="mt-10" size="large" />
                    </div>
                </div>
            </div>
        </div>
    )
}
