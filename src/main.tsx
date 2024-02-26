import ReactDOM from 'react-dom/client'
import {RouterProvider} from "react-router-dom";
import './assets/css/index.css'
import {router} from "./routes/router"
import { store } from './store/store'
import { Provider } from 'react-redux'
ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
  <RouterProvider router={router} />
  </Provider>
)
