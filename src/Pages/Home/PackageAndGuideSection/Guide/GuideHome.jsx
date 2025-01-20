import { useEffect, useState } from "react";
import SectionTitle from "../../../../Components/SectionTitle";
import img1 from '../../../../assets/Home/Guide/trainer1.png'
const GuideHome = () => {
    const [guides, setGuides] = useState([]);

    useEffect(() => {
        fetch('tourGuiders.json')
            .then(res => res.json())
            .then(data => {
                setGuides(data);
            });
    }, []);

    return (
        <div className="bg-gray-50 py-10">
            <SectionTitle
                heading="Meet Our Expert Tour Guides"
                description="Our expert tour guides are passionate about sharing their knowledge and ensuring that you have an unforgettable travel experience. With years of experience and a deep understanding of local cultures, history, and nature, they will make your journey more enriching and enjoyable. Whether you're exploring wildlife, relaxing on beaches, or discovering ancient ruins, our guides are here to lead the way."
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
                {guides.map((guide, index) => (
                    <div key={index} className="p-6 bg-white rounded-lg shadow-xl mx-4">
                        <div className="flex flex-col items-center">
                            <img
                                src={img1}
                                alt={guide.name}
                                className="w-24 h-24 sm:w-32 sm:h-32 rounded-full object-cover mb-4"
                            />
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">{guide.name}</h3>
                            <p className="text-gray-600 mb-4">{guide.specialization}</p>
                            <p className="text-sm text-gray-500 mb-2">{guide.languages.join(', ')}</p>
                            <p className="text-sm text-gray-500">Experience: {guide.years_of_experience} years</p>
                            <p className="text-sm text-gray-500">Rating: {guide.ratings} ★</p>
                            <button className="btn">Details</button>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    );
};

export default GuideHome;
