import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from "swiper/modules";
import SectionTitle from "../../../Components/SectionTitle";

const Stories = () => {
    const [story, setStory] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("All Stories");
    const [stories, setStories] = useState([]);


    useEffect(() => {
        fetch('usersStory.json')
            .then(res => res.json())
            .then(data => {
                setStory(data);
                setStories(data);
            })
            .catch(error => {
                console.error("Error fetching stories:", error);
            });
    }, []);


    const handleSelectChange = (event) => {
        const category = event.target.value;
        setSelectedCategory(category);

        if (category === 'Popular') {
            const popularStories = story.filter(sto => sto.category === 'Popular');
            setStories(popularStories);
        } else {
            setStories(story);
        }
    };

    console.log(stories);

    return (
        <>
            <SectionTitle heading="Stories of our Travelers"  description="Discover the inspiring journeys and unforgettable experiences of our travelers. Each story reflects the passion, challenges, and triumphs of those who set out to explore new horizons and embrace the world’s diverse cultures."></SectionTitle>
            <div className="container mx-auto px-4 my-10">
                <div className="text-center mb-4">
                    <select
                        value={selectedCategory}
                        onChange={handleSelectChange}
                        className="bg-blue-300 px-4 py-2 rounded"
                    >
                        <option value="All Stories">All Stories</option>
                        <option value="Popular">Popular Stories</option>
                    </select>
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
                            <img src={tourist.image} alt={tourist.title} className="w-full h-96 rounded-md object-cover" />
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
