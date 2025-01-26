import { useEffect, useState } from "react";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import useSpecificUser from "../../../../Hooks/useSpecificUser";

const Bookings = () => {
    const { specificUser } = useSpecificUser();
    const [books, setBooks] = useState([]);
    const axiosSecure = useAxiosSecure();

    useEffect(() => {
        if (specificUser?.userEmail) {
            axiosSecure.get(`/books/${specificUser.userEmail}`)
                .then(res => {
                    setBooks(res.data);
                })
                .catch(error => {
                    console.log('Error fetching books:', error);
                });
        }
    }, [specificUser?.userEmail]);

    const handlePayment = (bookId) => {
        console.log("Processing payment for booking", bookId);
    };

    const handleCancel = (bookId) => {
        console.log("Cancelling booking", bookId);
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-semibold text-center mb-6">Your Bookings</h1>

            {books.length === 0 ? (
                <p className="text-center text-lg text-gray-600">You have no bookings yet.</p>
            ) : (
                <div className="overflow-x-auto shadow-md rounded-lg">
                    <table className="min-w-full table-auto text-sm text-gray-700">
                        <thead className="bg-gray-200">
                            <tr>
                                <th className="px-4 py-2 text-left">Package Title</th>
                                <th className="px-4 py-2 text-left">Tour Guide</th>
                                <th className="px-4 py-2 text-left">Tour Date</th>
                                <th className="px-4 py-2 text-left">Price</th>
                                <th className="px-4 py-2 text-left">Status</th>
                                <th className="px-4 py-2 text-left">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {books.map(book => (
                                <tr key={book._id} className="border-b hover:bg-gray-50">
                                    <td className="px-4 py-2">{book.packageTitle}</td>
                                    <td className="px-4 py-2">{book.tourGuide}</td>
                                    <td className="px-4 py-2">{new Date(book.tourDate).toLocaleDateString()}</td>
                                    <td className="px-4 py-2">₹{book.price}</td>
                                    <td className="px-4 py-2 capitalize">{book.status}</td>
                                    <td className="px-4 py-2">
                                        {book.status === "Pending" && (
                                            <div className="flex space-x-2">
                                                <button
                                                    onClick={() => handlePayment(book._id)}
                                                    className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 focus:outline-none"
                                                >
                                                    Pay
                                                </button>
                                                <button
                                                    onClick={() => handleCancel(book._id)}
                                                    className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 focus:outline-none"
                                                >
                                                    Cancel
                                                </button>
                                            </div>
                                        )}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};

export default Bookings;
