import { FacebookIcon, FacebookShareButton, TelegramIcon, TelegramShareButton, TwitterShareButton, WhatsappIcon, WhatsappShareButton, XIcon } from 'react-share';
import coverImg from '../../../../assets/Trips/407.jpg'
import { Typewriter } from 'react-simple-typewriter'
const CoverTrips = () => {
    const shareUrl = 'https://github.com/uthso297';
    return (
        <div
            className="hero min-h-screen"
            style={{
                backgroundImage: `url(${coverImg})`,
            }}
        >
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-white text-left absolute inset-0 flex justify-center items-center">
                {/* Centered content */}
                <div className="max-w-lg sm:max-w-2xl px-4 md:px-8">
                    <h1

                        className="mb-5 text-3xl sm:text-4xl font-bold text-left"
                    >

                        <Typewriter
                            words={["Find Your Perfect Trip", "Explore New Destinations", "Adventure Awaits", "Start Your Journey Today"]}
                            loop={5}
                            cursor
                            cursorStyle='_'
                            typeSpeed={70}
                            deleteSpeed={50}
                            delaySpeed={1000}
                        />
                    </h1>

                    <p

                        className="sm:text-lg text-left mb-5"
                    >
                        Explore a wide variety of destinations and experiences for every traveler.
                        From relaxing getaways to thrilling expeditions, find the perfect trip to suit your style.
                    </p>
                </div>
            </div>

            <div

                className="flex sm:flex-col gap-5 absolute sm:right-5 sm:bottom-[40vh] bottom-10 sm:left-auto sm:w-auto"
            >
                <FacebookShareButton url={shareUrl}>
                    <FacebookIcon size={32} round />
                </FacebookShareButton>

                <TwitterShareButton url={shareUrl}>
                    <XIcon size={32} round />
                </TwitterShareButton>

                <TelegramShareButton url={shareUrl}>
                    <TelegramIcon size={32} round />
                </TelegramShareButton>

                <WhatsappShareButton url={shareUrl}>
                    <WhatsappIcon size={32} round />
                </WhatsappShareButton>
            </div>
        </div>
    );
};

export default CoverTrips;