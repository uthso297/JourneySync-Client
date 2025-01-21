import { Link, Outlet } from "react-router-dom";
import Footer from "../Shared/Footer/Footer";

const Dashboard = () => {
    return (
        <>
            <div className="flex flex-col lg:flex-row min-h-screen">
                {/* sidebar */}
                <div className="w-full lg:w-1/5 md:min-h-screen bg-slate-800 p-4 lg:p-8">
                    <ul className="menu bg-base-200 rounded-box w-full">
                        <li><a>Home</a></li>
                        <li><a>Manage Profile</a></li>
                        <li><a>My Bookings</a></li>
                        <li><a>Manage Stories</a></li>
                        <li><a>Add Stories</a></li>
                        <li><a>Join as Tour Guide</a></li>
                    </ul>
                    <div className="divider divider-warning"></div>
                    <ul className="menu bg-base-200 rounded-box w-full">
                        <li><Link to="/">Home</Link></li>
                        
                    </ul>
                </div>
                {/* content */}
                <div className="flex-1 p-4">
                    <Outlet />
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Dashboard;
