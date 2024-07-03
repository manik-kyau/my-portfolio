import { Outlet } from "react-router-dom";
import Footer from "../Componant/Footer/Footer";
import Navbar from "../Componant/Navbar/Navbar";

const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="min-h-[calc(100vh-68px)]">
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;