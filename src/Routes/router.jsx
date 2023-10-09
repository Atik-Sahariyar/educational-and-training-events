
import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Root from "../MainLayout/Root";
import Teachers from "../Pages/Teachers/Teachers";
import Registration from "../Pages/Register/Registration";
import LogIn from "../Pages/LogIn/LogIn";
import PrivateRoute from "./PrivateRoute";
import EventDetails from "../Pages/Home/OurServices/EventDetails";
import AboutUs from "../Pages/About Us/AboutUs";
import Gallary from "../Pages/Gallary/Gallary";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                errorElement:<ErrorPage></ErrorPage>,
                loader: () => fetch('/public/education&TrainigEvents.json')
            },
            {
                path: "/teachers",
                element: <PrivateRoute><Teachers></Teachers></PrivateRoute>,
                loader: () => fetch('/public/teachers.json')

            },
            {
                path: "login",
                element: <LogIn></LogIn>
            },
            {
                path: "/registration",
                element: <Registration></Registration>
            },
            {
                path: "/eventDetails/:id",
                element: <PrivateRoute><EventDetails></EventDetails></PrivateRoute>,
                loader: () => fetch("/public/education&TrainigEvents.json")
                
            },
            {
                path: "/about-us",
                element: <AboutUs></AboutUs>
            },
            {
                path: "/gallary",
                element: <PrivateRoute> <Gallary></Gallary> </PrivateRoute> 
            }
        ]
    }
])

export default router;