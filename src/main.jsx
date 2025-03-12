import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Route from '../Routes/Route';
import Home from '../Components/Home';
import Shop from '../Components/Shop';
import ProductDPage from '../Pages/ProductDPage';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Route></Route>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/shop',
        element: <Shop></Shop>,
      },
      {
        path: 'shop/:id',
        element: <ProductDPage></ProductDPage>
      }

    ]

  },


]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
