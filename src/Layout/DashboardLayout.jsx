import { NavLink, Outlet } from "react-router-dom";

const DashboardLayout = () => {
    return (
        <div className="container mx-auto flex gap-10">
            <div className="p-6 bg-white w-[20%] rounded-lg shadow-lg">
                <ul>
                    <li>
                        <NavLink
                            to="/dashboard"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "bg-green-400" : ""
                            }
                        >
                            Dashboard
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/dashboard/profile"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "bg-green-400" : ""
                            }
                        >
                            Profile
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/dashboard/editprofile"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "bg-green-400" : ""
                            }
                        >
                            Edit Profile
                        </NavLink>
                    </li>
                </ul>
            </div>
            <div className="w-[80%]">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default DashboardLayout;