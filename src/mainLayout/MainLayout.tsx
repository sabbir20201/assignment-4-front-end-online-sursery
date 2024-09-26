import Footer from "@/components/footer/Footer";
import Navbar from "@/components/header/navbar/Navbar";
import { Outlet } from "react-router-dom";



const MainLayout = () => {
    return (
        <div className="grid mx-auto max-w-6xl">
           <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;