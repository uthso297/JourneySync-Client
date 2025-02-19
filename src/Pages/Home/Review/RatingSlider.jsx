import React, { useEffect, useState } from 'react';

const RatingSlider = () => {
    const items = [
        {
            id: 1,
            name: 'John Doe',
            image: 'https://images.pexels.com/photos/1300402/pexels-photo-1300402.jpeg?auto=compress&cs=tinysrgb&w=600',
            description: 'The package named Rangamati is a great package with amazing features.',
            rating: 4.5,
        },
        {
            id: 2,
            name: `Mike Urban`,
            image: 'https://images.pexels.com/photos/839011/pexels-photo-839011.jpeg?auto=compress&cs=tinysrgb&w=600',
            description: 'The Paharpur package is loved by many for its reliability.',
            rating: 3.8,
        },
        {
            id: 3,
            name: 'Peter Parker',
            image: 'https://images.pexels.com/photos/845434/pexels-photo-845434.jpeg?auto=compress&cs=tinysrgb&w=600',
            description: 'Sylhet is an outstanding package with excellent performance.',
            rating: 5,
        },
        {
            id: 4,
            name: 'Guljit Singh',
            image: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=600',
            description: 'The rangamati package that combines style and functionality.',
            rating: 4.2,
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    const { name, image, description, rating } = items[currentIndex];

    const renderRating = (rating) => {
        const stars = [];
        for (let i = 0; i < 5; i++) {
            if (i < Math.floor(rating)) {
                stars.push(<span key={i} className="text-yellow-400">&#9733;</span>);
            } else if (i < Math.ceil(rating)) {
                stars.push(<span key={i} className="text-yellow-400">&#9734;</span>);
            } else {
                stars.push(<span key={i} className="text-gray-400">&#9734;</span>);
            }
        }
        return stars;
    };

    return (
        <div className="bg-white py-10 px-10">
            <div className=" p-8 rounded-xl shadow-lg">
                <div className="flex flex-col md:flex-row items-center space-x-6 space-y-6 md:space-y-0">
                    <div className="flex-shrink-0">
                        <img
                            src={image}
                            alt={name}
                            className="w-40 h-40 rounded-lg shadow-md"
                        />
                    </div>

                    <div className="flex-grow">
                        <h2 className="text-3xl font-semibold text-center md:text-left mb-4">{name}</h2>
                        <p className="text-lg mb-4">{description}</p>

                        <div className="flex justify-center md:justify-start items-center space-x-2">
                            {renderRating(rating)}
                            <span className="text-lg text-yellow-400">{rating.toFixed(1)}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RatingSlider;
