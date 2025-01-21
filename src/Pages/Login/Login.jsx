import { motion } from "motion/react";
import { Link } from "react-router-dom";
import PageTitle from "../../Components/PageTitle";
import { useContext } from "react";
import { AuthContext } from "../../Components/AuthProvider";
const Login = () => {
    const { signIn } = useContext(AuthContext)
    const handleSubmit = (e) => {
        e.preventDefault()
        const form = e.target
        const email = form.email.value
        const password = form.password.value
        console.log(email, password);
        signIn(email, password)
            .then(res => {
                console.log(res);
                form.reset();
            })
    };
    const handleGoogle = () => {
        console.log('gooogle is coming');
    }

    return (
        <div className="flex flex-col-reverse md:flex-row h-screen">
            <PageTitle title="Login || JourneySync"></PageTitle>
            {/* Left Section */}
            <motion.div
                animate={{ x: [-50, 0] }}
                transition={{ duration: 2, ease: "easeOut" }}
                className="w-full md:w-1/2 bg-white flex flex-col justify-center px-6 md:px-12">
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
                <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
                    <input
                        type="email"
                        placeholder="Email address"
                        name="email"
                        className="border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        name="password"
                        className="border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-green-500"
                    />

                    <button
                        type="submit"
                        className="bg-green-500 text-white py-2 rounded-md hover:bg-green-600"
                    >
                        Sign in
                    </button>
                </form>
                <p className="mt-4 text-sm text-gray-500">
                    Do not an account? <Link to="/signup" className="text-green-500">Sign Up</Link>
                </p>
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