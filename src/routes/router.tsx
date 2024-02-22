import {createBrowserRouter} from "react-router-dom"
import { Home } from "../pages"
import Default from "../layouts/default"


export const router = createBrowserRouter([
    {
        path:'/',
        element: <Default><Home /></Default>
    },
])