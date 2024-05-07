import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Products from "../Pages/Products/Products";
import Contact from "../Pages/Contact/Contact";
import Dashboard from "../Pages/Dashboard/Dashboard";
import ProductDetails from "../Pages/ProductDetails/ProductDetails";
import DashboardLayout from "../Layout/DashboardLayout";
import Profile from "../Pages/Profile/Profile";
import EditProfile from "../Pages/EditProfile/EditProfile";

const myCreatRouter = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/products',
                element: <Products></Products>,
                loader: () => fetch(`https://dummyjson.com/products`),
            },
            {
                path: '/products/:id',
                element: <ProductDetails></ProductDetails>,
                loader: ({ params }) => fetch(`https://dummyjson.com/products/${params.id}`)
            },
            {
                path: '/contact',
                element: <Contact></Contact>
            },
            {
                path: '/dashboard',
                element: <DashboardLayout></DashboardLayout>,
                children: [
                    {
                        path: '/dashboard',
                        element: <Dashboard></Dashboard>
                    },
                    {
                        path: '/dashboard/profile',
                        element: <Profile></Profile>
                    },
                    {
                        path: '/dashboard/editprofile',
                        element: <EditProfile></EditProfile>
                    }
                ]
            },
        ]
    }
])

export default myCreatRouter;