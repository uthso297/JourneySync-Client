import React from 'react';
import SectionTitle from '../../../Components/SectionTitle';

const Blog = () => {
    return (
        <>
            <SectionTitle heading={'Explore Our Blog'} description={"Explore a world of stories, tips, and insights from fellow travelers. Whether you're looking for inspiration for your next adventure or practical advice on how to make the most of your travels, our blog offers a wealth of knowledge to guide your journey."}></SectionTitle>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4'>
                
                <div className="flex flex-col gap-4 w-full">
                    <div className="skeleton w-full flex-grow">
                        <img src="https://ceoworld.biz/wp-content/uploads/2024/04/Adventure-Tourism.jpg" alt="" />
                    </div>
                    <div className="skeleton  w-full p-4">The Ultimate Guide to Adventure Travel</div>
                    <div className="skeleton  w-full p-4">Explore the world's most thrilling destinations and learn how to plan your next adventure trip. From exotic jungles to arctic expeditions, we've got you covered!</div>
                    <div className="skeleton  w-full p-4">Read More</div>
                </div>
                <div className="flex flex-col gap-4 w-full">
                    <div className="skeleton w-full flex-grow">
                        <img className='h-full' src="https://static.wanderon.in/wp-content/uploads/2024/10/street-foods-in-india.jpg" alt="" />
                    </div>
                    <div className="skeleton  w-full p-4">A Local's Guide to the Best Street Food</div>
                    <div className="skeleton  w-full p-4">Experience the best street food around the world with tips from locals! Discover mouthwatering dishes and where to find them on your next trip</div>
                    <div className="skeleton  w-full p-4">Read More</div>
                </div>
                <div className="flex flex-col gap-4 w-full">
                    <div className="skeleton w-full flex-grow">
                        <img src="https://www.muchbetteradventures.com/magazine/content/images/size/w2000/2020/01/02173546/GettyImages-1155613712-1.jpg" alt="" />
                    </div>
                    <div className="skeleton  w-full p-4">Top 10 Hidden Gems for Solo Travelers</div>
                    <div className="skeleton  w-full p-4">Looking to explore off-the-beaten-path destinations? Check out our list of hidden gems that are perfect for solo adventurers seeking unique experiences.</div>
                    <div className="skeleton  w-full p-4">Read More</div>
                </div>
               

            </div>

        </>
    );
};

export default Blog;