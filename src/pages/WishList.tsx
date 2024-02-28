
import WishListsTable from "../components/WishListsTable";
import { RootState } from "../store/store";
import { useSelector } from "react-redux";

export default function WishList() {
    const wishLists = useSelector((state: RootState) => state.product).wishList
    return (
        <div className="w-full h-auto">
            <div className="w-full h-28 bg-white">
            </div>
            <section className="w-full bg-[#f4f4f4] h-auto flex items-center justify-center py-20">
                <div className="text-center">
                    <h1 className="text-[3.7rem] font-semibold">WISHLIST</h1>
                    <span>Home / Wishlist</span>
                </div>
            </section>
            <section className="w-full">
                {wishLists.length <= 0 ?
                    <div className="w-full flex items-center justify-center py-36">
                        <h1 className="text-[2rem]">No wishes added yet</h1>
                    </div>
                    :
                    <div className="relative overflow-x-auto container px-28 py-36">
                        <table className="w-full text-sm text-left rtl:text-right">
                            <thead className="text-xs text-gray-700 uppercase bg-[#f6f6f6]">
                                <tr>
                                    <th scope="col" className="px-6 py-3"></th>
                                    <th scope="col" className="px-6 py-3">
                                        Product
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Stock status
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Price
                                    </th>
                                    <th scope="col" className="px-2 py-3">

                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                               {wishLists.map((w, i) => {
                                return  <WishListsTable key={i} id={w.id} image={w.image} name={w.name} price={w.price}  />
                               })}
                            </tbody>
                        </table>
                    </div>
                }
            </section>
        </div>
    )
}
