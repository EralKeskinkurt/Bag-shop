import {createBrowserRouter} from "react-router-dom"
import { Home, Login, WishList } from "../pages"
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
    }
])