import { useContext, useState, useEffect } from "react";
import useSpecificGuide from "../../../../Hooks/useSpecificGuide";
import { AuthContext } from "../../../../Components/AuthProvider";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";

const GuideProfile = () => {
    const { updateUserProfile } = useContext(AuthContext);
    const { specificGuide, refetch } = useSpecificGuide();
    const axiosSecure = useAxiosSecure();

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [name, setName] = useState("");
    const [photoURL, setPhotoURL] = useState("");
    const [whyGuide, setWhyGuide] = useState("");

    useEffect(() => {
        if (specificGuide) {
            setName(specificGuide?.name || "");
            setPhotoURL(specificGuide?.photo || "");
            setWhyGuide(specificGuide?.whyGuide || "");
        }
    }, [specificGuide]);

    console.log(specificGuide);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    const handleSave = async () => {
        try {

            await updateUserProfile(name, photoURL);


            const guideRes = await axiosSecure.patch(`/guides/${specificGuide?.email}`, {
                username: name,
                userimage: photoURL,
            });


            const userRes = await axiosSecure.patch(`/users/${specificGuide?.email}`, {
                username: name,
                userimage: photoURL,
            });

            if (guideRes.status === 200 && userRes.status === 200) {
                Swal.fire({
                    title: "Successfuly login",
                    icon: "success",
                    draggable: true
                });
                refetch();
            } else {
                throw new Error("Failed to update guide profile in the database");
            }

            closeModal();
        } catch (error) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Failed to update!",
            });
        }
    };

    if (!specificGuide) {
        return <div>Loading...</div>;
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-gray-100">
            {/* Welcome Message */}
            <h1 className="text-2xl font-bold text-gray-800">Welcome, {specificGuide?.name}!</h1>

            {/* Guide Information Card */}
            <div className="mt-6 w-full max-w-lg bg-white shadow-md rounded-lg p-6">
                <div className="flex flex-col items-center">
                    <img
                        src={specificGuide?.photo || "/default-avatar.png"}
                        alt="Guide Avatar"
                        className="w-24 h-24 rounded-full border-4 border-gray-300"
                    />
                    <h2 className="mt-4 text-xl font-semibold text-gray-700">{specificGuide?.name}</h2>
                    <p className="text-sm text-gray-500">Email: {specificGuide?.email}</p>
                    <p className="mt-2 text-sm text-gray-600">Reason: {specificGuide?.whyGuide}</p>

                    <button
                        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                        onClick={openModal}
                    >
                        Edit Profile
                    </button>
                </div>
            </div>

            {/* Edit Profile Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white rounded-lg p-6 w-full max-w-md">
                        <h2 className="text-lg font-bold mb-4">Edit Guide Profile</h2>
                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium">Name</label>
                                <input
                                    type="text"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    className="mt-1 w-full border border-gray-300 rounded px-3 py-2"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium">Photo URL</label>
                                <input
                                    type="text"
                                    value={photoURL}
                                    onChange={(e) => setPhotoURL(e.target.value)}
                                    className="mt-1 w-full border border-gray-300 rounded px-3 py-2"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium">Reason to be a Guide</label>
                                <textarea
                                    value={whyGuide}
                                    disabled
                                    className="mt-1 w-full border border-gray-300 rounded px-3 py-2 bg-gray-100 cursor-not-allowed"
                                />
                            </div>
                        </div>
                        <div className="flex justify-end gap-2 mt-4">
                            <button
                                className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
                                onClick={closeModal}
                            >
                                Cancel
                            </button>
                            <button
                                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                                onClick={handleSave}
                            >
                                Save
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default GuideProfile;
