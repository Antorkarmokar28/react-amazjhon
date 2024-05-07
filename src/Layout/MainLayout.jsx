import { NavLink, Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";

const MainLayout = () => {
    return (
        <>
            <nav className="py-5 shadow-md mb-10">
                <div className="container mx-auto">
                    <div className="flex justify-between items-center">
                        <div>
                            <h1 className="text-3xl font-semibold">Amazjhon</h1>
                        </div>
                        <ul className="flex gap-6 font-semibold">
                            <NavLink
                                to="/"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "bg-green-400" : ""
                                }
                            >
                                Home
                            </NavLink>
                            <NavLink
                                to="/products"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "bg-green-400" : ""
                                }
                            >
                                Products
                            </NavLink>
                            <NavLink
                                to="/contact"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "bg-green-400" : ""
                                }
                            >
                                Contact
                            </NavLink>
                            <NavLink
                                to="/dashboard"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "bg-green-400" : ""
                                }
                            >
                                Dashboard
                            </NavLink>
                        </ul>
                    </div>
                </div>
            </nav>
            <div className="min-h-screen">
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </>
    );
};

export default MainLayout;