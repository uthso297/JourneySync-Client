import { FacebookIcon, FacebookShareButton, TelegramIcon, TelegramShareButton, TwitterShareButton, WhatsappIcon, WhatsappShareButton, XIcon, } from 'react-share';
import coverImg from '../../assets/Home/banner.jpg'
import { motion } from "motion/react"
const Cover = () => {

    const shareUrl = 'https://github.com/uthso297'

    return (
        <div
            className="hero min-h-screen"
            style={{
                backgroundImage: `url(${coverImg})`,
            }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-white text-left absolute md:left-80"> 
                {/* text-neutral-content */}
                <div className="max-w-2xl">
                    <motion.h1
                        animate={{ y: ["-100vh", 0] }}
                        transition={{ duration: 3, ease: "easeOut" }}
                        className="mb-5 md:text-5xl text-3xl font-bold"
                    >
                        Explore the world
                    </motion.h1>

                    <div className="flex gap-3 items-center">
                        <motion.button
                            initial={{ opacity: 0.2 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5, duration: 3, ease: "easeOut" }}
                            className="btn bg-inherit sm:btn-sm md:btn-md lg:btn-lg text-white"
                        >
                            Get Started
                        </motion.button>
                        <motion.h1
                            animate={{ y: ["-100vh", 0] }}
                            transition={{ duration: 3, ease: "easeOut" }}
                            className="mb-5 md:text-5xl text-3xl font-bold"
                        >
                            Make a difference
                        </motion.h1>
                    </div>
                    <motion.p
                        // animate={{ y: ["100vh", 0] }}
                        animate={{ y: ["30vh", 0] }}
                        transition={{ duration: 3, ease: "easeOut" }}
                        className='md:text-lg mb-5'>Explore with ease and discover more—our Tourist Management System makes planning your perfect getaway simple, seamless, and stress-free!</motion.p>
                    {/* <button className="btn btn-primary">Get Started</button> */}

                </div>

            </div>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ x: [20, 0], opacity: 1 }}
                transition={{ delay: 0.5, duration: 3, ease: "easeOut" }}
                className='flex md:flex-col gap-5 absolute md:right-5 md:bottom-[40vh] bottom-10'>
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