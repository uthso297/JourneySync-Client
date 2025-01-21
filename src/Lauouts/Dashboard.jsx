import { Link, Outlet } from "react-router-dom";
import Footer from "../Shared/Footer/Footer";
import { motion } from "motion/react";
const Dashboard = () => {
    return (
        <>
            <div className="flex flex-col lg:flex-row min-h-screen">
                {/* sidebar */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ x: [-20, 0], opacity: 1 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="w-full lg:w-1/5 md:min-h-screen bg-slate-800 p-4 lg:p-8">
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
                </motion.div>
                {/* content */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ y: [20, 0], opacity: 1 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="flex-1 p-4">
                    <Outlet />
                </motion.div>
            </div>
            <Footer />
        </>
    );
};

export default Dashboard;
