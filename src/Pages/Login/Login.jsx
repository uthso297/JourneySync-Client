import { motion } from "motion/react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import PageTitle from "../../Components/PageTitle";
import { useContext, useState } from "react";
import { AuthContext } from "../../Components/AuthProvider";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import Swal from "sweetalert2";
const Login = () => {
    const { signIn, googleSignIn, resetPassword } = useContext(AuthContext)
    const axiosPublic = useAxiosPublic()
    const [isOpen, setIsOpen] = useState(false);
    const [showCredetial, setShowCredetial] = useState(false);
    const navigate = useNavigate()
    const location = useLocation()
    console.log(location);
    const role = 'User';
    const handleSubmit = (e) => {
        e.preventDefault()
        const form = e.target
        const email = form.email.value
        const password = form.password.value
        console.log(email, password);
        signIn(email, password)
            .then(() => {
                Swal.fire({
                    title: "Successfuly login",
                    icon: "success",
                    draggable: true
                });
                form.reset();
                navigate(location.state || '/')
            })
            .catch(err => {
                if (err) {
                    Swal.fire({
                        icon: "error",
                        title: "Oops...",
                        text: "Check your password!",
                    });
                }
            })
    };
    const handleGoogle = () => {
        googleSignIn()
            .then((result) => {
                console.log(result.user);
                const userName = result.user.displayName
                const userEmail = result.user.email
                const image = result.user.photoURL
                const userInfo = {
                    userName,
                    userEmail,
                    role,
                    image
                }
                axiosPublic.post('/users', userInfo)
                    .then(res => {

                        if (res.data.insertedId === null) {
                            Swal.fire({
                                title: "Successfuly login",
                                icon: "success",
                                draggable: true
                            });
                            navigate(location.state || '/')
                            form.reset();
                        }
                        else if (res.data.insertedId) {
                            Swal.fire({
                                title: "Successfuly login",
                                icon: "success",
                                draggable: true
                            });
                            navigate(location.state || '/')
                            form.reset();
                        }
                    })
            })
    }

    const handleForget = (e) => {
        e.preventDefault();
        const email = e.target.email.value
        // console.log(email);
        resetPassword(email)
            .then(res => {
                console.log(res);
            })
            .catch(err => {
                console.log(err.message);
            })
    }

    return (
        <div className="flex flex-col-reverse md:flex-row min-h-screen">
            <PageTitle title="Login || JourneySync"></PageTitle>
            {/* Left Section */}
            <motion.div
                animate={{ x: [-50, 0] }}
                transition={{ duration: 2, ease: "easeOut" }}
                className="w-full md:w-1/2 bg-white flex flex-col justify-center px-6 md:px-12 pt-16">
                <h1 className="text-3xl md:text-4xl font-bold mb-4">Welcome Back</h1>
                <p className="text-gray-600 mb-8 text-sm md:text-base">
                    Log in to your account to explore new destinations, book trips, and manage your bookings.
                </p>
                <button
                    onClick={handleGoogle}
                    className="flex items-center justify-center border rounded-md py-2 px-4 mb-6 text-gray-700 border-gray-300 hover:bg-gray-100"
                >
                    <img
                        src="https://img.freepik.com/free-psd/google-icon-isolated-3d-render-illustration_47987-9777.jpg"
                        alt="Google logo"
                        className="w-8 h-8 mr-2 rounded-full"
                    />
                    Sign in with Google
                </button>
                <div className="flex items-center mb-6">
                    <div className="flex-grow border-t border-gray-300"></div>
                    <span className="mx-4 text-gray-500">or</span>
                    <div className="flex-grow border-t border-gray-300"></div>
                </div>
                <div className="mb-5">
                    <button onClick={() => setShowCredetial(!showCredetial)} className="btn bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md">Click To See Admin Credetials</button>
                    {
                        showCredetial && <>
                            <p>Admin Email: admin@admin.com</p>
                            <p>Admin Password: Abc@123</p>

                        </>
                    }
                </div>
                <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
                    <input
                        type="email"
                        placeholder="Email address"
                        name="email"
                        required
                        className="border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        name="password"
                        required
                        className="border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-green-500"
                    />

                    <button
                        type="submit"
                        className="bg-green-500 text-white py-2 rounded-md hover:bg-green-600"
                    >
                        Sign in
                    </button>
                </form>
                <div className="flex items-center justify-between py-4">
                    <p className="mt-4 text-sm text-gray-500">
                        Do not an account? <Link to="/signup" className="text-green-500">Sign Up</Link>
                    </p>

                    <div className="flex justify-center items-center mt-4">
                        <button
                            onClick={() => setIsOpen(true)}
                            className="btn bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md"
                        >
                            Forgot password?
                        </button>

                        {isOpen && (
                            <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                                <div className="bg-white rounded-lg w-11/12 md:w-1/3 p-6 relative shadow-lg">
                                    <button
                                        onClick={() => setIsOpen(false)}
                                        className="absolute top-3 right-3 text-gray-500 hover:text-black"
                                    >
                                        ✖
                                    </button>
                                    <h2 className="text-lg md:text-xl font-bold text-gray-800 mb-4">
                                        Enter email to send password reset link
                                    </h2>
                                    <form onSubmit={handleForget} className="space-y-4">
                                        <input
                                            type="email"
                                            placeholder="Email address"
                                            name="email"
                                            required
                                            className="w-full border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-green-500"
                                        />
                                        <button
                                            type="submit"
                                            className="w-full btn bg-green-500 hover:bg-green-600 text-white py-2 rounded-md"
                                        >
                                            Submit
                                        </button>
                                    </form>
                                </div>
                            </div>
                        )}
                    </div>



                </div>
            </motion.div>

            {/* Right Section */}
            <motion.div
                animate={{ x: [50, 0] }}
                transition={{ duration: 2, ease: "easeIn" }}
                className="w-full md:w-1/2 bg-cover bg-center h-64 md:h-auto"
                style={{
                    backgroundImage:
                        "url('https://images.pexels.com/photos/3278215/pexels-photo-3278215.jpeg?cs=srgb&dl=pexels-freestockpro-3278215.jpg&fm=jpg')",
                }}
            >
                <div className="h-full bg-black bg-opacity-40 flex flex-col justify-center items-center text-center text-white px-4 md:px-8">
                    <h2 className="text-2xl md:text-3xl font-semibold mb-4">Explore, Book, and Travel</h2>
                    <p className="text-sm md:text-lg">
                        Welcome back, wanderlust seeker! Log in to your account to continue exploring destinations, track your trips, and get the latest travel updates.
                    </p>
                </div>
            </motion.div>



        </div>
    );
};

export default Login;