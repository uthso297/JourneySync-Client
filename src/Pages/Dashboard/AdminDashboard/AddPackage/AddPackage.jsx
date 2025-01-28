import { useState } from "react";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";

const AddPackage = () => {
    const axiosSecure = useAxiosSecure();
    const [tourData, setTourData] = useState({
        photos: [],
        tourType: "",
        tripTitle: "",
        price: "",
        tourInformation: {
            overview: "",
            highlights: []
        },
        tourPlan: {
            day1: { activities: "" },
            day2: { activities: "" }
        }
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setTourData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Log data before submitting
        // console.log("Form data before submission:", tourData);

        const packageData = {
            ...tourData,
            price: parseFloat(tourData.price)
        };

        try {
            const result = await axiosSecure.post("/tourPackages", packageData);
            if (result.data.insertedId) {
                Swal.fire({
                    title: "Successfuly added package",
                    icon: "success",
                    draggable: true
                });
            }

            // Reset the form to its initial state
            setTourData({
                photos: [],
                tourType: "",
                tripTitle: "",
                price: "",
                tourInformation: {
                    overview: "",
                    highlights: []
                },
                tourPlan: {
                    day1: { activities: "" },
                    day2: { activities: "" }
                }
            });
        } catch (error) {
            console.error("Error adding package:", error);
        }
    };

    return (
        <div className="container mx-auto p-6">
            <h2 className="text-xl font-bold mb-4">Add New Tour Package</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block text-sm font-semibold" htmlFor="tripTitle">
                        Trip Title
                    </label>
                    <input
                        type="text"
                        id="tripTitle"
                        name="tripTitle"
                        value={tourData.tripTitle}
                        onChange={handleChange}
                        className="w-full p-2 border border-gray-300 rounded-md"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-sm font-semibold" htmlFor="tourType">
                        Tour Type
                    </label>
                    <input
                        type="text"
                        id="tourType"
                        name="tourType"
                        value={tourData.tourType}
                        onChange={handleChange}
                        className="w-full p-2 border border-gray-300 rounded-md"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-sm font-semibold" htmlFor="price">
                        Price
                    </label>
                    <input
                        type="number"
                        id="price"
                        name="price"
                        value={tourData.price}
                        onChange={handleChange}
                        className="w-full p-2 border border-gray-300 rounded-md"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-sm font-semibold" htmlFor="overview">
                        Overview
                    </label>
                    <textarea
                        id="overview"
                        name="overview"
                        value={tourData.tourInformation.overview}
                        onChange={(e) => setTourData((prev) => ({
                            ...prev,
                            tourInformation: {
                                ...prev.tourInformation,
                                overview: e.target.value
                            }
                        }))}
                        className="w-full p-2 border border-gray-300 rounded-md"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-sm font-semibold" htmlFor="highlights">
                        Highlights (Comma Separated)
                    </label>
                    <input
                        type="text"
                        id="highlights"
                        name="highlights"
                        value={tourData.tourInformation.highlights.join(",")}
                        onChange={(e) => setTourData((prev) => ({
                            ...prev,
                            tourInformation: {
                                ...prev.tourInformation,
                                highlights: e.target.value.split(",").map((item) => item.trim())
                            }
                        }))}
                        className="w-full p-2 border border-gray-300 rounded-md"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-sm font-semibold">Day 1 Activities</label>
                    <textarea
                        value={tourData.tourPlan.day1.activities}
                        onChange={(e) => setTourData((prev) => ({
                            ...prev,
                            tourPlan: {
                                ...prev.tourPlan,
                                day1: { activities: e.target.value }
                            }
                        }))}
                        className="w-full p-2 border border-gray-300 rounded-md"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-sm font-semibold">Day 2 Activities</label>
                    <textarea
                        value={tourData.tourPlan.day2.activities}
                        onChange={(e) => setTourData((prev) => ({
                            ...prev,
                            tourPlan: {
                                ...prev.tourPlan,
                                day2: { activities: e.target.value }
                            }
                        }))}
                        className="w-full p-2 border border-gray-300 rounded-md"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-sm font-semibold" htmlFor="photos">
                        Photos (Comma Separated URLs)
                    </label>
                    <input
                        type="text"
                        id="photos"
                        name="photos"
                        value={tourData.photos.join(",")}
                        onChange={(e) => setTourData((prev) => ({
                            ...prev,
                            photos: e.target.value.split(",").map((url) => url.trim())
                        }))}
                        className="w-full p-2 border border-gray-300 rounded-md"
                        required
                    />
                </div>

                <button
                    type="submit"
                    className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-700"
                >
                    Add Package
                </button>
            </form>
        </div>
    );
};

export default AddPackage;
