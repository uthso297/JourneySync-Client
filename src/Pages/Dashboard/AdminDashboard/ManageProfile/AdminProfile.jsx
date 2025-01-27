import { useState, useContext } from 'react';
import useBooks from '../../../../Hooks/useBooks';
import usePackage from '../../../../Hooks/usePackage';
import useStory from '../../../../Hooks/useStory';
import useUsers from '../../../../Hooks/useUsers';
import { AuthContext } from '../../../../Components/AuthProvider';
import useAxiosSecure from '../../../../Hooks/useAxiosSecure';

const AdminProfile = () => {
    const [users, loading, refetch] = useUsers();
    const [books] = useBooks();
    const [packages] = usePackage();
    const [stories] = useStory();
    const { updateUserProfile } = useContext(AuthContext);
    const axiosSecure = useAxiosSecure()
    // Local state for modal and form data
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [adminName, setAdminName] = useState('');
    const [adminImage, setAdminImage] = useState('');

    // Filter roles
    const admin = users?.find((user) => user.role === 'Admin');
    const generalUsers = users?.filter((user) => user.role === 'User');
    const tourGuides = users?.filter((user) => user.role === 'Tour Guide');

    // Calculate total pending payment
    const totalPendingPayment = books
        ?.filter((book) => book.status === 'Pending')
        ?.reduce((total, book) => total + parseFloat(book.price || 0), 0);

    // Handle modal open
    const openModal = () => {
        setAdminName(admin?.userName || '');
        setAdminImage(admin?.image || '');
        setIsModalOpen(true);
    };


    const handleSubmit = async (e) => {
        e.preventDefault();
        try {

            await updateUserProfile(adminName, adminImage);

            const res = await axiosSecure.patch(`/users/${admin?.userEmail}`, { username: adminName, userimage: adminImage });

            if (res.status === 200) {
                alert("Profile updated successfully!");
                refetch();
            } else {
                throw new Error("Failed to update username in database");
            }

            setIsModalOpen(false);
        } catch (error) {
            console.log("Error updating profile:", error);
            alert("Failed to update profile. Please try again.");
        }
    };



    return (
        <div className="p-4 bg-gray-100 min-h-screen">
            {/* Admin Profile */}
            {admin && (
                <div className="bg-white shadow-md rounded-lg p-6 mb-6">
                    <h2 className="text-xl font-bold mb-4">Admin Profile</h2>
                    <div className="flex items-center space-x-4">
                        <div className="w-16 h-16 bg-blue-500 text-white flex items-center justify-center rounded-full text-lg font-semibold">
                            <img className='w-16 h-16 rounded-full' src={admin.image} alt="Admin" />
                        </div>
                        <div>
                            <p className="text-lg font-semibold">{admin.userName}</p>
                            <p className="text-gray-500">{admin.userEmail}</p>
                        </div>
                    </div>
                    <button
                        onClick={openModal}
                        className="mt-4 py-2 px-4 bg-blue-500 text-white rounded-lg"
                    >
                        Edit
                    </button>
                </div>
            )}

            {/* Dashboard */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {/* Dashboard Items */}
                <div className="bg-white shadow-md rounded-lg p-6 text-center">
                    <h3 className="text-lg font-bold">Total Clients</h3>
                    <p className="text-2xl font-bold text-blue-500">{generalUsers?.length || 0}</p>
                </div>

                <div className="bg-white shadow-md rounded-lg p-6 text-center">
                    <h3 className="text-lg font-bold">Tour Guides</h3>
                    <p className="text-2xl font-bold text-green-500">{tourGuides?.length || 0}</p>
                </div>

                <div className="bg-white shadow-md rounded-lg p-6 text-center">
                    <h3 className="text-lg font-bold">Total Packages</h3>
                    <p className="text-2xl font-bold text-purple-500">{packages?.length || 0}</p>
                </div>

                <div className="bg-white shadow-md rounded-lg p-6 text-center">
                    <h3 className="text-lg font-bold">Total Bookings</h3>
                    <p className="text-2xl font-bold text-red-500">{books?.length || 0}</p>
                </div>

                <div className="bg-white shadow-md rounded-lg p-6 text-center">
                    <h3 className="text-lg font-bold">Total Stories</h3>
                    <p className="text-2xl font-bold text-orange-500">{stories?.length || 0}</p>
                </div>

                <div className="bg-white shadow-md rounded-lg p-6 text-center">
                    <h3 className="text-lg font-bold">Total Pending Payment</h3>
                    <p className="text-2xl font-bold text-yellow-500">$ {totalPendingPayment || 0}</p>
                </div>
            </div>

            {/* Modal for Editing Profile */}
            {isModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg w-96">
                        <h3 className="text-xl font-bold mb-4">Edit Admin Profile</h3>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-4">
                                <label className="block text-sm font-semibold text-gray-700">Name</label>
                                <input
                                    type="text"
                                    value={adminName}
                                    onChange={(e) => setAdminName(e.target.value)}
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm font-semibold text-gray-700">Image URL</label>
                                <input
                                    type="url"
                                    value={adminImage}
                                    onChange={(e) => setAdminImage(e.target.value)}
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
                                    required
                                />
                            </div>
                            <div className="flex justify-end space-x-2">
                                <button
                                    type="button"
                                    onClick={() => setIsModalOpen(false)}
                                    className="py-2 px-4 bg-gray-300 rounded-md"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="py-2 px-4 bg-blue-500 text-white rounded-md"
                                >
                                    Save Changes
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AdminProfile;
