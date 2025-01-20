import React from 'react';
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
// import "./styles.css"
import { motion } from "motion/react"

const OverviewSection = () => {
    const [sliderRef] = useKeenSlider({
        mode: "free-snap",
        slides: {
            origin: "center",
            perView: 2,
            spacing: 15,
        },
    })
    return (
        <div className='bg-black md:flex items-center gap-3'>
            <div className='flex items-center justify-center md:ml-96'>
                <h1 className='text-white font-bold text-4xl py-5 md:mb-20'>Overview Of <br /> JourneySync</h1>
            </div>
            <motion.div ref={sliderRef}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 3, ease: "easeOut" }}
                className="keen-slider text-white md:relative md:top-[-100px]">
                <div className="keen-slider__slide number-slide3">
                    {/* <iframe width="700" height="315" src="https://www.youtube.com/embed/JLjvEYMBGzQ?si=MW0OfwfsuZPdCXSr" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> */}
                    <div class="relative pt-[56.25%] w-full h-0">
                        <iframe class="absolute top-0 left-0 w-full h-full" src="https://www.youtube.com/embed/JLjvEYMBGzQ?si=MW0OfwfsuZPdCXSr" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    </div>
                    <h2 className='md:text-xl font-bold my-5 py-5 w-full'>We have various types of awesome packages with beautiful places</h2>

                </div>
                <div className="keen-slider__slide number-slide3">
                    {/* <iframe width="700" height="315" src="https://www.youtube.com/embed/JLjvEYMBGzQ?si=MW0OfwfsuZPdCXSr" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> */}
                    <div class="relative pt-[56.25%] w-full h-0">
                        <iframe class="absolute top-0 left-0 w-full h-full" src="https://www.youtube.com/embed/45ETZ1xvHS0?si=WWwpsD_ovEtNJ4Ig" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    </div>
                    <h2 className='md:text-xl font-bold my-5 py-5 w-full'>We have experienced tavel guiders you can trust</h2>

                </div>
                <div className="keen-slider__slide number-slide3">
                    {/* <iframe width="700" height="315" src="https://www.youtube.com/embed/JLjvEYMBGzQ?si=MW0OfwfsuZPdCXSr" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> */}
                    <div class="relative pt-[56.25%] w-full h-0">
                        <iframe class="absolute top-0 left-0 w-full h-full" src="https://www.youtube.com/embed/t2yvzgjr9To?si=JD6rM2uQesmZ8vSv" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    </div>
                    <h2 className='md:text-xl font-bold my-5 py-5 w-full'>Here you can find travelers story</h2>

                </div>

            </motion.div>
        </div>
    );
};

export default OverviewSection;
