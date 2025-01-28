import { useContext, useState, useEffect } from "react";
import { AuthContext } from "../../../../Components/AuthProvider";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import { Link } from "react-router-dom";
import useSpecificUser from "../../../../Hooks/useSpecificUser";
import Swal from "sweetalert2";

const UserProfile = () => {
    const { updateUserProfile } = useContext(AuthContext);
    const axiosSecure = useAxiosSecure();
    const { specificUser, refetch } = useSpecificUser();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [name, setName] = useState("");
    const [photoURL, setPhotoURL] = useState("");

    useEffect(() => {
        if (specificUser) {
            setName(specificUser?.userName || "");
            setPhotoURL(specificUser?.image || "");
        }
    }, [specificUser]);

    console.log(specificUser);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    const handleSave = async () => {
        try {

            await updateUserProfile(name, photoURL);

            const res = await axiosSecure.patch(`/users/${specificUser?.userEmail}`, { username: name, userimage: photoURL });

            if (res.status === 200) {
                Swal.fire({
                    title: "Profile updated successfully!",
                    icon: "success",
                    draggable: true
                });
                refetch();
            } else {
                throw new Error("Failed to update username in database");
            }

            closeModal();
        } catch (error) {
            console.error("Error updating profile:", error);
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: `Error updating profile (${error})`,
            });
        }
    };

    if (!specificUser) {
        return <div>Loading...</div>;
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-gray-100">
            {/* Welcome Message */}
            <h1 className="text-2xl font-bold text-gray-800">Welcome, {specificUser?.userName}!</h1>

            {/* User Information Card */}
            <div className="mt-6 w-full max-w-lg bg-white shadow-md rounded-lg p-6">
                <div className="flex flex-col items-center">
                    <img
                        src={specificUser?.image || "/default-avatar.png"}
                        alt="User Avatar"
                        className="w-24 h-24 rounded-full border-4 border-gray-300"
                    />
                    <h2 className="mt-4 text-xl font-semibold text-gray-700">{specificUser?.userName}</h2>
                    <p className="text-sm text-gray-500">Email: {specificUser?.userEmail}</p>
                    <p className="mt-2 text-sm text-gray-600">Role: {specificUser?.role || "User"}</p>

                    <button
                        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                        onClick={openModal}
                    >
                        Edit Profile
                    </button>
                    <button
                        className="mt-2 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
                    >
                        <Link to="/dashboard/joinguide">Apply for Tour Guide</Link>
                    </button>
                </div>
            </div>

            {/* Edit Profile Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white rounded-lg p-6 w-full max-w-md">
                        <h2 className="text-lg font-bold mb-4">Edit Profile</h2>
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
                                <label className="block text-sm font-medium">Email</label>
                                <input
                                    type="email"
                                    defaultValue={specificUser?.userEmail}
                                    disabled
                                    className="mt-1 w-full border border-gray-300 rounded px-3 py-2 bg-gray-100 cursor-not-allowed"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium">Role</label>
                                <input
                                    type="text"
                                    defaultValue={specificUser?.role}
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

export default UserProfile;
