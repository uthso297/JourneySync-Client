import { useEffect, useState } from "react";
import TouristSlider from "./TouristSlider";
import { FacebookIcon, FacebookShareButton } from "react-share";


const TouristStoryHome = () => {

    const shareUrl = 'https://github.com/uthso297';

    return (
        <div className="bg-[#0c0c0c] text-white">
            <div className="flex md:flex-row flex-col items-center justify-center">
                <div className="md:w-1/2 space-y-5 md:pl-12 p-4 md:p-0">
                    <div className="">
                        <h1 className="text-4xl font-bold">Our Travelers Stories</h1>
                        <p>Hear directly from our travelers as they share their memorable experiences and life-changing moments during their journeys with us. From the breathtaking views of nature to exploring hidden gems, our stories celebrate the diverse adventures that await you. Let these inspiring tales help you plan your own unforgettable adventure</p>
                    </div>
                    <div className="flex items-center gap-3">
                        <button className="btn">All Stories</button>
                        <button className="btn">Add Story</button>
                    </div>
                    <div className="flex gap-3 items-center">
                        <h1>Share it on facebook!</h1>
                        <FacebookShareButton url={shareUrl}>
                            <FacebookIcon size={32} round />
                        </FacebookShareButton>
                    </div>
                </div>

                <div className="md:w-1/2">
                    <TouristSlider></TouristSlider>
                </div>
            </div>
        </div>
    );
};

export default TouristStoryHome;