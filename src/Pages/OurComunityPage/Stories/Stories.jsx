import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from "swiper/modules";
import SectionTitle from "../../../Components/SectionTitle";
import useStory from '../../../Hooks/useStory'
import { BallTriangle } from 'react-loader-spinner';

const Stories = () => {

    const [stories, loading] = useStory()

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
        <>
            <SectionTitle heading="Stories of our Travelers" description="Discover the inspiring journeys and unforgettable experiences of our travelers. Each story reflects the passion, challenges, and triumphs of those who set out to explore new horizons and embrace the world’s diverse cultures."></SectionTitle>
            <div className="container mx-auto px-4 my-10">
                <div className="text-center mb-4">
                    <p className="bg-blue-300 px-4 py-2 rounded md:w-[10%] w-[40%] mx-auto">All Stories</p>
                </div>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={20}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                    breakpoints={{

                        320: {
                            slidesPerView: 1,
                            spaceBetween: 10,
                        },
                        480: {
                            slidesPerView: 1,
                            spaceBetween: 15,
                        },

                        640: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 30,
                        },
                    }}
                >
                    {stories.map((tourist, index) => (
                        <SwiperSlide key={index} className="w-full flex-shrink-0 p-4">
                            <img src={tourist.images[0]} alt={tourist.title} className="w-full h-96 rounded-md object-cover" />
                            <h3 className="mt-6 text-lg font-semibold">{tourist.title}</h3>
                            <p className="text-sm text-gray-600">{tourist.description}</p>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </>
    );
};

export default Stories;
