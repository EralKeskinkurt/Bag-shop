import {createBrowserRouter} from "react-router-dom"
import { Home, Login, WishList, Cart, CheckOut, Shop } from "../pages"
import Default from "../layouts/default"



export const router = createBrowserRouter([
    {
        path:'/',
        element: <Default><Home /></Default>
    },
    {
        path:'/login',
        element:<Default><Login /></Default>
    },
    {
        path:'/wishlist',
        element: <Default><WishList /></Default>
    },
    {
        path:'/cart',
        element:<Default><Cart/></Default>
    },
    {
        path:'/checkout',
        element: <Default><CheckOut/></Default>
    },
    {
        path:'/shop',
        element: <Default><Shop/></Default>
    }
])