import coverImg from '../../assets/Home/banner.jpg'
const Cover = () => {
    return (
        <div
            className="hero min-h-screen"
            style={{
                backgroundImage: `url(${coverImg})`,
            }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-neutral-content text-left absolute md:left-80">
                <div className="max-w-md">
                    <h1 className="mb-5 md:text-5xl text-4xl font-bold">Explore the world</h1>
                    <h1 className="mb-5 md:text-5xl text-4xl font-bold">Make a difference</h1>
                    <p className='text-lg mb-5'>Explore with ease and discover more—our Tourist Management System makes planning your perfect getaway simple, seamless, and stress-free!</p>
                    {/* <button className="btn btn-primary">Get Started</button> */}
                    <button className="btn btn-xs bg-inherit sm:btn-sm md:btn-md lg:btn-lg text-white">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Cover;