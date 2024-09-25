import AdminDashboard from "@/admin/AdminDashboard";
import CreateProduct from "@/admin/CreateProduct";
import GetAllProduct from "@/admin/GetAllProduct";
import AdminLayout from "@/mainLayout/adminLayout";
import MainLayout from "@/mainLayout/MainLayout";
import AddProduct from "@/pages/addProduct/AddProduct";
import Cart from "@/pages/Cart/Cart";
import ErrorPage from "@/pages/errorPage/ErrorPage";
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
                path: "/addNursery",
                element: <AddProduct></AddProduct>
            },
            {
                path: "/cart",
                element: <Cart></Cart>
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