import { Link } from "react-router-dom";
import SectionTitle from "../../../../Components/SectionTitle";
import useGuide from '../../../../Hooks/useGuide.jsx'
const GuideHome = () => {

    const [guides, loading, refetch] = useGuide()
    // console.log(guides);
    return (
        <div className="py-10">
            <SectionTitle
                heading="Meet Our Expert Tour Guides"
                description="Our expert tour guides are passionate about sharing their knowledge and ensuring that you have an unforgettable travel experience. With years of experience and a deep understanding of local cultures, history, and nature, they will make your journey more enriching and enjoyable. Whether you're exploring wildlife, relaxing on beaches, or discovering ancient ruins, our guides are here to lead the way."
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ">
                {guides.map((guide, index) => (
                    <div key={index} className="p-6 bg-white rounded-lg shadow-xl ">
                        <div className="flex flex-col items-center">
                            <img
                                src={guide.photo}
                                alt={guide.name}
                                className="w-24 h-24 sm:w-32 sm:h-32 rounded-full mb-4"
                            />
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">{guide.name}</h3>
                            <p className="text-sm text-gray-500">Email: {guide.email}</p>
                            <Link to={`/guidePro/${guide.email}`}><button className="btn">Details</button></Link>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    );
};

export default GuideHome;
