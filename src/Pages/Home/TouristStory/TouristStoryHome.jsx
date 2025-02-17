import { useContext } from "react";
import TouristSlider from "./TouristSlider";
import { FacebookIcon, FacebookShareButton } from "react-share";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Components/AuthProvider";

const TouristStoryHome = () => {
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();  
    const shareUrl = 'https://journey-sync-91305.web.app/community'; 
    
    // Handle share logic
    const handleShare = () => {
        if (!user) {
            
            navigate('/login');
        }
    };

    const share = user ? shareUrl : null; 

    return (
        <div className="bg-[#0c0c0c] text-white">
            <div className="flex md:flex-row flex-col items-center justify-center">
                <div className="md:w-1/2 space-y-5 lg:px-10 px-4">
                    <div>
                        <h1 className="text-4xl font-bold">Our Travelers Stories</h1>
                        <p>Hear directly from our travelers as they share their memorable experiences and life-changing moments during their journeys with us. From the breathtaking views of nature to exploring hidden gems, our stories celebrate the diverse adventures that await you. Let these inspiring tales help you plan your own unforgettable adventure</p>
                    </div>
                    <div className="flex items-center gap-3">
                        <Link to='/community'>
                            <button className="btn">All Stories</button>
                        </Link>
                        <button className="btn">Add Story</button>
                    </div>
                    <div className="flex gap-3 items-center">
                        <h1>Share it on Facebook!</h1>
                        
                        {user ? (
                            <FacebookShareButton url={shareUrl}>
                                <FacebookIcon size={32} round />
                            </FacebookShareButton>
                        ) : (
                            <button onClick={handleShare}>
                                <FacebookIcon size={32} round />
                            </button>
                        )}
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
