import { Outlet } from "react-router-dom";

const Layout = () => {
    return (
        <div className="poppins w-[1180px] mx-auto px-5">
            <Outlet></Outlet>
        </div>
    );
};

export default Layout;