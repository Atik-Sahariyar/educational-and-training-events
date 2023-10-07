
import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Root from "../MainLayout/Root";
import Teachers from "../Pages/Teachers/Teachers";
import Registration from "../Pages/Register/Registration";
import LogIn from "../Pages/LogIn/LogIn";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: () => fetch('/public/education&TrainigEvents.json')
            },
            {
                path: "/teachers",
                element: <Teachers></Teachers>
            },
            {
                path: "login",
                element: <LogIn></LogIn>
            },
            {
                path: "/registration",
                element: <Registration></Registration>
            }
        ]
    }
])

export default router;