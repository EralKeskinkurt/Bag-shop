import { IoMdClose } from "react-icons/io";
import { useDispatch } from "react-redux";
import { removeProductWishList } from "../store/product.store";
export default function WishListsTable({id, name, image, price}:Product) {
    const dispatch = useDispatch()
    return (
        <tr className="bg-white">
            <th scope="row" className="px-6 py-4 "><IoMdClose size={28} onClick={() => dispatch(removeProductWishList(id))} className="cursor-pointer" /></th>
            <td className="px-3 py-4 flex items-center gap-4 text-gray-900">
                <img className="w-20 h-20" src={image} alt={name} />
                <b>{name}</b>
            </td>
            <td className="px-6 py-4 text-gray-900">
                In Stock
            </td>
            <td className="px-6 py-4 text-gray-900">
                {price}
            </td>
            <td>
            <button className="font-semibold bg-black border transition-all border-black text-white rounded-full py-3 hover:bg-white hover:text-black px-12">Add To Cart</button>
            </td>
        </tr>
    )
}
