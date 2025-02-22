import { motion } from "motion/react";
import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import PageTitle from "../../Components/PageTitle";
import { AuthContext } from "../../Components/AuthProvider";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import Swal from "sweetalert2";

const SignUp = () => {
    const { createUser, updateUserProfile, googleSignIn } = useContext(AuthContext)
    const [passwordError, setPasswordError] = useState('');
    const role = 'User';
    const axiosPublic = useAxiosPublic()
    const navigate = useNavigate()
    const location = useLocation()
    const validatePassword = (password) => {
        const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,20}$/;

        if (!regex.test(password)) {
            setPasswordError('Password must be between 6-20 characters, with at least one uppercase letter, one lowercase letter, one number, and one special character.');
            return false;
        }
        setPasswordError('');
        return true;
    };

    const handleSubmit = (e) => {
        e.preventDefault()
        const form = e.target
        const name = form.name.value
        const email = form.email.value
        const image = form.image.value
        const password = form.password.value
        console.log(name, email, password, image);
        if (validatePassword(password)) {
            createUser(email, password)
                .then(result => {
                    updateUserProfile(name, image)
                        .then(() => {
                            console.log(result.user);
                            const userName = result.user.displayName
                            const userEmail = result.user.email
                            const userInfo = {
                                userName,
                                userEmail,
                                role,
                                image
                            }
                            axiosPublic.post('/users', userInfo)
                                .then(res => {
                                    if (res.data.insertedId) {
                                        Swal.fire({
                                            title: "Successfuly Created Your Account",
                                            icon: "success",
                                            draggable: true
                                        });
                                        navigate(location.state || '/')
                                        form.reset();
                                    }
                                })
                        })

                })
                .catch(err => {
                    console.log(err);
                });
        } else {
            console.log('Password is invalid');
        }

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
                        console.log(res.data);
                        if (res.data.insertedId) {
                            Swal.fire({
                                title: "Successfuly Created Your Account",
                                icon: "success",
                                draggable: true
                            });
                            navigate(location.state || '/')
                            form.reset();
                        }
                    })
            })
    }

    return (
        <div className="flex flex-col-reverse md:flex-row min-h-screen">
            <PageTitle title="SignUp || JourneySync"></PageTitle>
            {/* Left Section */}
            <motion.div
                animate={{ x: [-50, 0] }}
                transition={{ duration: 2, ease: "easeOut" }}
                className="w-full md:w-1/2 bg-white flex flex-col justify-center px-6 md:px-12 p-16">
                <h1 className="text-3xl md:text-4xl font-bold mb-4">Welcome, Traveler!</h1>
                <p className="text-gray-600 mb-8 text-sm md:text-base">
                    Join our community of explorers! Sign up today to start planning your next adventure, receive personalized travel recommendations, and enjoy exclusive offers.
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
                    Sign up with Google
                </button>
                <div className="flex items-center mb-6">
                    <div className="flex-grow border-t border-gray-300"></div>
                    <span className="mx-4 text-gray-500">or</span>
                    <div className="flex-grow border-t border-gray-300"></div>
                </div>
                <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
                    <input
                        type="text"
                        placeholder="Name"
                        name="name"
                        required
                        className="border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                    <input
                        type="text"
                        placeholder="Image Link"
                        name="image"
                        required
                        className="border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
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
                    {passwordError && <p style={{ color: 'red' }}>{passwordError}</p>}
                    <div className="flex items-center">
                        <input
                            type="checkbox"
                            id="guidelines"
                            required
                            className="h-4 w-4 text-green-500 border-gray-300 rounded focus:ring-green-500"
                        />
                        <label htmlFor="guidelines" className="ml-2 text-gray-600 text-sm md:text-base">
                            Agree to community guidelines
                        </label>
                    </div>
                    <button
                        type="submit"
                        className="bg-green-500 text-white py-2 rounded-md hover:bg-green-600"
                    >
                        Sign up
                    </button>
                </form>
                <p className="mt-4 text-sm text-gray-500">
                    Already have an account? <Link to="/login" className="text-green-500">Log in</Link>
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
                    <h2 className="text-2xl md:text-3xl font-semibold mb-4">Explore, Plan, and Begin Your Journey with Us</h2>
                    <p className="text-sm md:text-lg">
                        Ready to embark on your next journey? Create an account to unlock special deals, save your favorite destinations, and easily manage your travel plans.
                    </p>
                </div>
            </motion.div>
        </div>
    );
};

export default SignUp;
