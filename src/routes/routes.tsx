import AdminDashboard from "@/admin/AdminDashboard";
import CreateProduct from "@/admin/CreateProduct";
import GetAllProduct from "@/admin/GetAllProduct";
import AdminLayout from "@/mainLayout/AdminLayout";
import MainLayout from "@/mainLayout/MainLayout";
import Cart from "@/pages/Cart/Cart";
import Checkout from "@/pages/Cart/Checkout";
import ErrorPage from "@/pages/errorPage/ErrorPage";
import Gallery from "@/pages/gallery/Gallery";
import Home from "@/pages/home/Home";
import AllProduct from "@/pages/product/AllProduct";
import ProductDetails from "@/pages/product/ProductDetails";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
    {
        path: "/",
        element:<MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/allProduct",
                element: <AllProduct></AllProduct>
            },
            {
                path: "/product/:id",
                element: <ProductDetails></ProductDetails>
            },
            {
                path: "/cart",
                element: <Cart></Cart>
            },
            {
                path: "/gallery",
                element: <Gallery></Gallery>
            },
            {
                path: "/checkout",
                element:<Checkout></Checkout>
            }
        ]
    },
    {
        path: "/admin",
        element:  <AdminLayout></AdminLayout>,
        children: [
            {
               index: true,
                element: <AdminDashboard></AdminDashboard>,
            },
            {
                path: "create-product",
                element: <CreateProduct></CreateProduct>,
            },
            {
                path: "get-products",
                element: <GetAllProduct></GetAllProduct>,
            }
        ]
    }
])


export default router