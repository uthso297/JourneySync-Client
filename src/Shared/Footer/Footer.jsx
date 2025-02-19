import { FacebookIcon, FacebookShareButton, TelegramIcon, TelegramShareButton, TwitterShareButton, WhatsappIcon, WhatsappShareButton, XIcon } from 'react-share';
const shareUrl = 'https://www.facebook.com/share/1BK2SGrqNr/';
const shareUrlT = 'https://t.me/uthso297'
const shareUrlW = 'https://wa.me/1861976409'
const Footer = () => {
    return (
        <footer className="footer bg-base-200 text-base-content p-10">
            <aside>
                <img className='h-20 w-20 rounded-full' src="https://img.freepik.com/free-vector/detailed-travel-logo_23-2148616611.jpg?semt=ais_hybrid" alt="" />
                <p>
                    JourneySync
                    <br />
                    Providing reliable travel service since 2020
                </p>
            </aside>
            <nav>
                <h6 className="footer-title">Services</h6>
                <a href='/trips' className="link link-hover">Trips</a>
            </nav>
            <nav>
                <h6 className="footer-title">Company</h6>
                <a href='/about' className="link link-hover">About us</a>
            </nav>
            <nav>
                <h6 className="footer-title">Social Links</h6>
                <FacebookShareButton url={shareUrl}>
                    <FacebookIcon size={32} round />
                </FacebookShareButton>

                <TwitterShareButton url={shareUrl}>
                    <XIcon size={32} round />
                </TwitterShareButton>

                <TelegramShareButton url={shareUrlT}>
                    <TelegramIcon size={32} round />
                </TelegramShareButton>

                <WhatsappShareButton url={shareUrlW}>
                    <WhatsappIcon size={32} round />
                </WhatsappShareButton>
            </nav>
        </footer>
    );
};

export default Footer;