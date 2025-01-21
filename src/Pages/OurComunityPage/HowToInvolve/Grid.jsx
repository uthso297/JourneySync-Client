const Grid = () => {
    const data = [
        {
            title: "Sign Up And Discover",
            description: "Register as a traveler or a guide in just a few clicks.",
            imageUrl: "https://etimg.etb2bimg.com/photo/94676301.cms",
        },
        {
            title: "Choos Your Role",
            description: "Share your thoughts whether you want to travel as tourist or guide.",
            imageUrl: "https://images.squarespace-cdn.com/content/v1/5a3bb03b4c326d76de73ddaa/1613133428233-NEPK9JBTH4M4QSQ0VN9F/The+Common+Wanderer-5244.jpg",
        },
        {
            title: "Select Packages",
            description: "Choose from a variety of carefully curated packages tailored to meet your needs.",
            imageUrl: "https://thumbs.dreamstime.com/b/time-to-travel-wooden-sign-beach-background-49509295.jpg",
        },
        {
            title: "Add Your Story",
            description: "Share your unique travel experiences with us!Your story can inspire others to explore the world.",
            imageUrl: "https://www.hindustantimes.com/ht-img/img/2023/12/18/1600x900/Insta_1702871839024_1702871847203.png",
        },
    ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-5">
            {data.map((item, index) => (
                <div
                    key={index}
                    className="relative overflow-hidden rounded-lg shadow-lg"
                    style={{
                        backgroundImage: `url(${item.imageUrl})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        height: '300px',
                    }}
                >
                    <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center text-center p-4">
                        <h2 className="text-white text-2xl font-bold">{item.title}</h2>
                        {/* <div className="divider divider-info"></div> */}
                        <p className="text-white mt-2">{item.description}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Grid;
