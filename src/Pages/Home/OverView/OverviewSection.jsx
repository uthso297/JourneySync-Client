import React from 'react';
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { motion } from "motion/react";

const OverviewSection = () => {
    const [sliderRef] = useKeenSlider({
        mode: "free-snap",
        slides: {
            origin: "center",
            perView: 2, // Default for larger screens
            spacing: 15,
        },
        breakpoints: {
            "(max-width: 1024px)": {
                slides: { perView: 1 }, // For tablets
            },
            "(max-width: 768px)": {
                slides: { perView: 1 }, // For smaller screens (phones)
            },
        },
    });

    return (
        <div className='bg-[#0c0c0c] flex flex-col md:flex-row items-center gap-3'>
            <div className='flex items-center justify-center md:ml-16 sm:ml-8'>
                <h1 className='text-white font-bold text-4xl py-5 md:mb-20 sm:mb-12 text-center'>
                    Overview Of <br /> JourneySync
                </h1>
            </div>
            <motion.div 
                ref={sliderRef}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 3, ease: "easeOut" }}
                className="keen-slider text-white w-full md:w-4/5 sm:w-full md:relative md:bottom-[100px]"
            >
                <div className="keen-slider__slide number-slide3">
                    <div className="relative pt-[56.25%] w-full h-0">
                        <iframe 
                            className="absolute top-0 left-0 w-full h-full" 
                            src="https://www.youtube.com/embed/JLjvEYMBGzQ?si=MW0OfwfsuZPdCXSr" 
                            title="YouTube video player"  
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"  
                        ></iframe>
                    </div>
                    <h2 className='sm:text-xl font-bold my-5 py-5 text-center'>
                        Explore our wide range of amazing travel packages, featuring stunning destinations and unforgettable experiences.
                    </h2>
                </div>

                <div className="keen-slider__slide number-slide3">
                    <div className="relative pt-[56.25%] w-full h-0">
                        <iframe 
                            className="absolute top-0 left-0 w-full h-full" 
                            src="https://www.youtube.com/embed/45ETZ1xvHS0?si=WWwpsD_ovEtNJ4Ig" 
                            title="YouTube video player"  
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"  
                        ></iframe>
                    </div>
                    <h2 className='sm:text-xl font-bold my-5 py-5 text-center'>
                        Our team of experienced travel guides is here to offer you expert advice and ensure a memorable, trustworthy journey.
                    </h2>
                </div>

                <div className="keen-slider__slide number-slide3">
                    <div className="relative pt-[56.25%] w-full h-0">
                        <iframe 
                            className="absolute top-0 left-0 w-full h-full" 
                            src="https://www.youtube.com/embed/t2yvzgjr9To?si=JD6rM2uQesmZ8vSv" 
                            title="YouTube video player"  
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"  
                        ></iframe>
                    </div>
                    <h2 className='sm:text-xl font-bold my-5 py-5 text-center'>
                        Discover inspiring stories from fellow travelers and their unforgettable journeys.
                    </h2>
                </div>
            </motion.div>
        </div>
    );
};

export default OverviewSection;
