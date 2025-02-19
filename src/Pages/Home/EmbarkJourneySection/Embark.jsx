import { Link } from "react-router-dom";

const Embark = () => {
    return (
        <div
            className="hero min-h-screen mt-5"
            style={{
                backgroundImage: "url(https://t3.ftcdn.net/jpg/03/04/88/18/360_F_304881889_yJ1S3butl9gVs0kMptYTU2N1EVmEJbz8.jpg)",
            }}>
            <div className="hero-overlay"></div>
            <div className="hero-content text-neutral-content text-center">
                <div className="">
                    <h1 className="mb-5 text-5xl font-bold text-white">Ready to Embark your journey?</h1>
                    <p className="md:text-lg text-white mt-4">
                        Whether you're seeking thrilling adventures, tranquil escapes, or cultural explorations, now is the perfect time to begin your journey. Get ready to step into a world of new experiences, unforgettable memories, and exciting opportunities. Your next adventure awaits — are you prepared to embark on it?
                    </p>

                    <Link to='/login'><button className="btn bg-inherit my-4  text-white">Join Us Now</button></Link>
                    <Link to='/signup'> <button className="btn bg-inherit ml-5 my-4 text-white">Become a User</button> </Link>
                </div>
            </div>
        </div>
    );
};

export default Embark;