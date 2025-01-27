import { useEffect, useState } from "react";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";

const Guide = ({ email }) => {
    const [guide, setGuide] = useState([]);
    const axiosPublic = useAxiosPublic()

    useEffect(() => {
        axiosPublic.get(`/guide/${email}`)
            .then(res => {
                setGuide(res.data);
            });
    }, [email]);

    return (
        <div className="flex justify-center items-center py-28 bg-gray-100">
            <div className="max-w-xs w-full bg-white rounded-lg shadow-lg overflow-hidden">
                <img
                    src={guide.photo || "https://png.pngtree.com/element_our/png/20181206/users-vector-icon-png_260862.jpg"}
                    alt="Guide"
                    className="w-full h-56"
                />
                <div className="p-6">
                    <h2 className="text-xl font-semibold text-gray-800">{guide.name || "Rafin"}</h2>
                    <p className="text-gray-600 text-sm mt-2">{guide.email || "This guide is amazing!"}</p>
                    <p className="text-gray-600 text-sm mt-2">{guide.whyGuide || "This guide is amazing!"}</p>
                    <div className="mt-4 flex items-center">
                        <a href={`mailto:${guide.email}`} className="text-blue-500 text-sm hover:underline">Contact Guide</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Guide;
