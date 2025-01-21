import {
    createBrowserRouter,

} from "react-router-dom";
import Main from "../Lauouts/Main";
import Home from "../Pages/Home/Home/Home";
import Community from "../Pages/OurComunityPage/Community/Community";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'community',
                element: <Community></Community>
            }
        ]
    },
]);