import {
    createBrowserRouter,

} from "react-router-dom";
import Main from "../Lauouts/Main";
import Home from "../Pages/Home/Home/Home";
import Community from "../Pages/OurComunityPage/Community/Community";
import About from "../Pages/About/About";
import Trips from "../Pages/AllTrips/Trips/Trips";
import Dashboard from "../Lauouts/Dashboard";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import PackageDetails from "../Pages/PackageDetails/PkgDetails/PackageDetails";
import useAxiosPublic from "../Hooks/useAxiosPublic";
import UserProfile from "../Pages/Dashboard/UserDashboard/ManageProfiePage/userProfile";
import Bookings from "../Pages/Dashboard/UserDashboard/MyBookingsPage/Bookings";
import ManageStoriesUser from "../Pages/Dashboard/UserDashboard/ManageStoriesPage/ManageStoriesUser";
import AddStoriesUser from "../Pages/Dashboard/UserDashboard/AddStoriesPage/AddStoriesUser";
import JoinGuide from "../Pages/Dashboard/UserDashboard/JoinAsGuidePage/JoinGuide";
import AdminProfile from "../Pages/Dashboard/AdminDashboard/ManageProfile/AdminProfile";
import ManageCandidate from "../Pages/Dashboard/AdminDashboard/ManageCandidates/ManageCandidate";
import PrivateRoute from "./PrivateRoute";
import AdminRoute from "./AdminRoute";
import GuideProfile from "../Pages/Dashboard/GuideDashBoard/GuideProfile/GuideProfile";
import GuideRoute from "./GuideRoute";
import AssignedTour from "../Pages/Dashboard/GuideDashBoard/MyAssigenTour/AssignedTour";


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
            },
            {
                path: 'about',
                element: <About></About>
            },
            {
                path: 'trips',
                element: <Trips></Trips>
            },
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/tourPackages/:id',
                element: <PrivateRoute><PackageDetails /></PrivateRoute>,
                loader: async ({ params }) => {
                    const axiosPublic = useAxiosPublic();
                    const res = await axiosPublic.get(`/tourPackages/${params.id}`);
                    return { package: res.data };
                }
            }

        ]
    },
    {
        path: 'dashboard',
        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
        children: [
            // tourist
            {
                path: 'userProfile',
                element: <UserProfile></UserProfile>
            },
            {
                path: 'mybookings',
                element: <Bookings></Bookings>
            },
            {
                path: 'managestory',
                element: <ManageStoriesUser></ManageStoriesUser>
            },
            {
                path: 'addstory',
                element: <AddStoriesUser></AddStoriesUser>
            },
            {
                path: 'joinguide',
                element: <JoinGuide></JoinGuide>
            },

            //admin
            {
                path: 'adminProfile',
                element: <AdminRoute><AdminProfile></AdminProfile></AdminRoute>
            },
            {
                path: 'manageCandidates',
                element: <ManageCandidate></ManageCandidate>
            },

            //guide
            {
                path: 'guideProfile',
                element: <GuideRoute><GuideProfile></GuideProfile></GuideRoute>
            },
            {
                path: 'myassignedtour',
                element: <GuideRoute><AssignedTour></AssignedTour></GuideRoute>
            }
        ]
    }
]);