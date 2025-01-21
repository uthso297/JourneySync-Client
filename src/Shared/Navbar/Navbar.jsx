import { Link } from "react-router-dom";

const Navbar = () => {
    const links = <>
        <li><Link to='/'>Home</Link></li>
        <li>
            <Link to='/community'>Community</Link>
        </li>
        <li><Link to='/about'>About Us</Link></li>
        <li><Link to="/trips">Trips</Link></li>

    </>

    const authLinks = <>
        <li><Link to="/dashboard">Dashboard</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/signup">Register</Link></li>
    </>
    return (
        <div className="navbar fixed z-10 bg-black bg-opacity-20">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow text-lg">
                        {
                            links
                        }
                    </ul>
                </div>
                <a className="md:text-4xl text-xl font-bold text-white ">JourneySync</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 text-white text-lg">
                    {
                        links
                    }
                </ul>
            </div>
            <div className="navbar-end">
                <ul className="flex justify-center items-center gap-3 text-white text-lg">
                    {
                        authLinks
                    }
                </ul>
            </div>
        </div>
    );
};

export default Navbar;