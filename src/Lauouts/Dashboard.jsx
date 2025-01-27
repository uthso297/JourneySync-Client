import { Link, Outlet } from "react-router-dom";
import Footer from "../Shared/Footer/Footer";
import { motion } from "motion/react";
import useAdmin from "../Hooks/useAdmin";
import checkGuide from "../Hooks/checkGuide";
const Dashboard = () => {
    const [isAdmin] = useAdmin()
    const [isGuide] = checkGuide()

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
                        {
                            isAdmin ? <>
                                <li><Link to="/dashboard/adminProfile">Manage Profile</Link></li>
                                <li><Link to="/dashboard/manageCandidates">Manage Candidates</Link></li>
                                <li><Link to="/dashboard/addPackage">Add Package</Link></li>
                                <li><Link to="/dashboard/manageUsers">Manage Users</Link></li>
                            </>
                                :
                                <>
                                    {
                                        isGuide && (
                                            <>
                                                <li><Link to="/dashboard/guideProfile">Manage Profile</Link></li>
                                                <li><Link to="/dashboard/myassignedtour">My Assigend Tour</Link></li>
                                                <li><Link to="/dashboard/managestoryGuide">Manage Stories</Link></li>
                                                <li><Link to="/dashboard/addstoryGuide">Add Stories</Link></li>
                                            </>
                                        )
                                    }
                                    {
                                        !isGuide && (
                                            <>
                                                <li><Link to="/dashboard/userProfile">Manage Profile</Link></li>
                                                <li><Link to="/dashboard/mybookings">My Bookings</Link></li>
                                                <li><Link to="/dashboard/managestory">Manage Stories</Link></li>
                                                <li><Link to="/dashboard/addstory">Add Stories</Link></li>
                                                <li><Link to="/dashboard/joinguide">Join as Tour Guide</Link></li>
                                            </>)
                                    }
                                </>
                        }
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
