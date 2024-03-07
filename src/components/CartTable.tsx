
import { IoMdClose } from "react-icons/io";
import { useDispatch } from "react-redux";
import { deleteCartProduct, addCart, fullDeleteCartProduct } from "../store/product.store";
export default function CartTable({ id, name, image, price, count }: Cart) {
    
    const dispatch = useDispatch()

    const increment = () => {
        if (count <= 99){
            return dispatch(addCart({id:id, name:name, image:image, price:price, count:count}))
        }
    }

    const decrement = () => {
        if(count >= 2){
            return dispatch(deleteCartProduct(id))
        }
    }

    return ( 
        <tr className="bg-white border-b border-b-gray-300">
            <th scope="row" className="px-4 py-4 "><IoMdClose size={28} onClick={() => dispatch(fullDeleteCartProduct(id))} className="cursor-pointer" /></th>
            <td className="px-3 py-4 flex items-center gap-4 text-gray-900">
                <img className="w-20 h-20" src={image} alt={name} />
                <b>{name}</b>
            </td>
            <td className="px-4 py-4 text-gray-900">
            ${price}.00 
            </td>
            <td className="px-4 py-4 text-gray-900">
                <div className="flex items-center w-auto gap-3 text-[1.05rem]">
                    <span onClick={() => decrement()} className="cursor-pointer text-[1.2rem] bg-gray-200 py-1 px-2">-</span>
                    <input type="number" value={count} className="outline-none border-none w-6" />
                    <span onClick={() => increment()} className="cursor-pointer text-[1.2rem] bg-gray-200 py-1 px-2">+</span>
                </div>
            </td>
            <th className="px-4 py-4 text-gray-900">
                ${count * price}.00 
            </th>
        </tr>
    )
}
