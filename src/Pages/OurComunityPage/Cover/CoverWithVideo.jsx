import video1 from '../../../assets/Community/communityCover.mp4'
import { motion } from "motion/react";
import { FacebookIcon, FacebookShareButton, TelegramIcon, TelegramShareButton, TwitterShareButton, WhatsappIcon, WhatsappShareButton, XIcon } from 'react-share';
const CoverWithVideo = () => {
    const shareUrl = 'https://github.com/uthso297';
    return (
        <div className="relative h-screen overflow-hidden">
            <video className="absolute top-0 left-0 w-full h-full object-cover" autoPlay loop muted>
                <source src={`${video1}`} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className="absolute w-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white z-10">
                <div className="">
                    {/* Centered content */}
                    <div className="px-4 md:px-8">
                        {/* max-w-lg sm:max-w-2xl px-4 md:px-8 */}
                        <motion.h1
                            animate={{ x: ["-100vh", 0] }}
                            transition={{ duration: 3, ease: "easeOut" }}
                            className="mb-5 text-xl sm:text-5xl font-bold text-left"

                        >
                            Welcome to Our Community
                        </motion.h1>

                        <div className="flex ">
                            {/* flex-col sm:flex-row gap-3 items-center justify-center sm:justify-start */}
                            <motion.button
                                initial={{ opacity: 0.2 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.5, duration: 3, ease: "easeOut" }}
                                className="btn bg-inherit sm:btn-md btn-sm lg:btn-lg text-white"
                            >
                                Read Stories
                            </motion.button>
                            <motion.h1
                                animate={{ x: ["-100vh", 0] }}
                                transition={{ duration: 3, ease: "easeOut" }}
                                className="mb-5 text-xl sm:text-5xl font-bold text-center ml-4"
                            >
                                Share your story!
                            </motion.h1>
                        </div>

                        <motion.p
                            animate={{ y: ["-30vh", 0] }}
                            transition={{ duration: 3, ease: "easeOut" }}
                            className="sm:text-lg text-left mb-5"
                        >
                            We believe in the power of shared experiences. Let your voice be heard and inspire others by telling your story.
                        </motion.p>
                    </div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ x: [20, 0], opacity: 1 }}
                        transition={{ delay: 0.5, duration: 3, ease: "easeOut" }}
                        className="flex sm:flex-col gap-5 absolute sm:right-3 sm:-bottom-[10vh] -bottom-10 sm:left-auto left-5 sm:w-auto"
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
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default CoverWithVideo;