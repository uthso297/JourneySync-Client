import { useContext, useState } from "react";
import { AuthContext } from "../../../../Components/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import { Link } from "react-router-dom";

const UserProfile = () => {
    const { user, updateUserProfile } = useContext(AuthContext);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [name, setName] = useState(user?.displayName || "");
    const [photoURL, setPhotoURL] = useState(user?.photoURL || "");
    const axiosSecure = useAxiosSecure();

    const { data: specificUser = {}, error, refetch } = useQuery({
        queryKey: ["specificUser"],
        queryFn: async () => {
            const res = await axiosSecure.get(`/users/${user?.email}`);
            return res.data;
        },
    });

    if (error) {
        console.error("Error fetching user:", error.message);
    }

    console.log(specificUser);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    const handleSave = async () => {
        try {
            
            await updateUserProfile(name, photoURL)
                .then(async () => {             
                    const res = await axiosSecure.patch(`/users/${user?.email}`, { username: name });
                    if (res.status === 200) {
                        alert("Profile updated successfully!");
                        refetch();
                    } else {
                        throw new Error("Failed to update username in database");
                    }
                    closeModal();
                });
        } catch (error) {
            console.error("Error updating profile:", error);
            alert("Failed to update profile. Please try again.");
        }
    };


    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-gray-100">
            {/* Welcome Message */}
            <h1 className="text-2xl font-bold text-gray-800">Welcome, {user?.displayName}!</h1>

            {/* User Information Card */}
            <div className="mt-6 w-full max-w-lg bg-white shadow-md rounded-lg p-6">
                <div className="flex flex-col items-center">
                    <img
                        src={user?.photoURL || "/default-avatar.png"}
                        alt="User Avatar"
                        className="w-24 h-24 rounded-full border-4 border-gray-300"
                    />
                    <h2 className="mt-4 text-xl font-semibold text-gray-700">{user?.displayName}</h2>
                    <p className="text-sm text-gray-500">Email: {user?.email}</p>
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
                                    defaultValue={user?.email}
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
