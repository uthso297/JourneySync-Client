import { useState } from 'react';
import useStory from '../../../Hooks/useStory';
import { BallTriangle } from 'react-loader-spinner';


function TouristSlider() {
    const [stories, loading] = useStory()

    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % stories.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + stories.length) % stories.length);
    };

    if (loading) {
        return (<div className="flex justify-center items-center">
            <BallTriangle
                height={100}
                width={100}
                radius={5}
                color="#4fa94d"
                ariaLabel="ball-triangle-loading"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
            />
        </div>)
    }

    return (
        <div className="relative w-full max-w-sm mx-auto">
            <div className="overflow-hidden rounded-lg shadow-lg">
                <div className="flex transition-transform duration-500 ease-in-out transform" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                    {stories.map((tourist, index) => (
                        <div key={index} className="w-full flex-shrink-0 p-4">
                            <img src={tourist.images[0]} alt={tourist.title} className="w-full h-48 object-cover rounded-md" />
                            <h3 className="mt-8 text-lg font-semibold">{tourist.title}</h3>
                            <p className="text-sm text-gray-600">{tourist.description}</p>
                        </div>
                    ))}
                </div>
            </div>

            <button
                className="absolute top-52 md:top-1/2 md:-left-6 left-2 transform -translate-y-1/2 text-white bg-black p-2 rounded-full"
                onClick={prevSlide}
            >
                &#8592;
            </button>

            <button
                className="absolute top-52 md:top-1/2 md:-right-6 right-2 transform -translate-y-1/2 text-white bg-black p-2 rounded-full"
                onClick={nextSlide}
            >
                &#8594;
            </button>
        </div>
    );
}

export default TouristSlider;
