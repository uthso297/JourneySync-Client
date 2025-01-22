import { FacebookIcon, FacebookShareButton, TelegramIcon, TelegramShareButton, TwitterShareButton, WhatsappIcon, WhatsappShareButton, XIcon } from 'react-share';
import coverImg from '../../assets/Home/banner.jpg';
import { motion } from "motion/react";

const Cover = () => {

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
                    <motion.h1
                        animate={{ y: ["-100vh", 0] }}
                        transition={{ duration: 3, ease: "easeOut" }}
                        className="mb-5 text-2xl sm:text-5xl font-bold text-left"
                    >
                        Explore the world
                    </motion.h1>

                    <div className="flex ">
                        {/* flex-col sm:flex-row gap-3 items-center justify-center sm:justify-start */}
                        <motion.button
                            initial={{ opacity: 0.2 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5, duration: 3, ease: "easeOut" }}
                            className="btn btn-sm bg-inherit  sm:btn-md lg:btn-lg text-white"
                        >
                            Get Started
                        </motion.button>
                        <motion.h1
                            animate={{ y: ["-100vh", 0] }}
                            transition={{ duration: 3, ease: "easeOut" }}
                            className="mb-5 text-2xl sm:text-5xl font-bold text-center sm:ml-4"
                        >
                            Make a difference
                        </motion.h1>
                    </div>

                    <motion.p
                        animate={{ y: ["30vh", 0] }}
                        transition={{ duration: 3, ease: "easeOut" }}
                        className="sm:text-lg text-center mb-5"
                    >
                        Explore with ease and discover more—our Tourist Management System makes planning your perfect getaway simple, seamless, and stress-free!
                    </motion.p>
                </div>
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ x: [20, 0], opacity: 1 }}
                transition={{ delay: 0.5, duration: 3, ease: "easeOut" }}
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
            </motion.div>
        </div>
    );
};

export default Cover;
