import React, { useState } from "react";
import useBoook from "../../../../Hooks/useBoook";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";

const AssignedTour = () => {
    const [book, loadingBook, refetch] = useBoook();
    const [selectedTour, setSelectedTour] = useState(null);
    const axiosSecure = useAxiosSecure()
    const handleAccept = (id) => {

        console.log(`Tour ${id} Accepted`);
        axiosSecure.patch(`/books/accept/${id}`)
            .then((res) => {
                if (res.data.modifiedCount >= 0) {
                    Swal.fire({
                        title: "Successfuly accepted",
                        icon: "success",
                        draggable: true
                    });
                    refetch()
                }
            })
    };

    const handleReject = (id) => {

        axiosSecure.patch(`/books/reject/${id}`)
            .then((res) => {
                if (res.data.modifiedCount >= 0) {
                    Swal.fire({
                        title: "Successfuly rejected",
                        icon: "success",
                        draggable: true
                    });
                    refetch()
                }
            })
    };
    // console.log(book);
    if (loadingBook) return <div>Loading...</div>;
    if (book.length === 0) {
        return <p className="text-center text-lg text-gray-600">You have no assigned tour yet.</p>
    }
    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Assigned Tours</h1>
            <div className="overflow-x-auto">
                <table className="min-w-full bg-white shadow-md rounded-lg">
                    <thead>
                        <tr className="bg-gray-100 text-left">
                            <th className="px-4 py-2">Package Name</th>
                            <th className="px-4 py-2">Tourist Name</th>
                            <th className="px-4 py-2">Tour Date</th>
                            <th className="px-4 py-2">Price</th>
                            <th className="px-4 py-2">Status</th>
                            <th className="px-4 py-2">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {book.map((tour) => (
                            <tr key={tour._id} className="border-t">
                                <td className="px-4 py-2">{tour.packageTitle}</td>
                                <td className="px-4 py-2 flex items-center space-x-2">
                                    <img
                                        src={tour.touristImage}
                                        alt={tour.touristName}
                                        className="w-8 h-8 rounded-full"
                                    />
                                    <span>{tour.touristName}</span>
                                </td>
                                <td className="px-4 py-2">{new Date(tour.tourDate).toLocaleDateString()}</td>
                                <td className="px-4 py-2">${tour.price}</td>
                                <td className="px-4 py-2 capitalize">{tour.status}</td>
                                <td className="px-4 py-2 space-x-2">
                                    <button
                                        disabled={tour.status === "Pending" || tour.status === "Accepted" || tour.status === "Rejected"}
                                        onClick={() => handleAccept(tour._id)}
                                        className="bg-green-500 text-white px-3 py-1 rounded disabled:opacity-50"
                                    >
                                        Accept
                                    </button>
                                    <button
                                        disabled={tour.status === "Pending" || tour.status === "Rejected" || tour.status === "Accepted"}
                                        onClick={() => setSelectedTour(tour)}
                                        className="bg-red-500 text-white px-3 py-1 rounded disabled:opacity-50"
                                    >
                                        Reject
                                    </button>
                                    {selectedTour && selectedTour._id === tour._id && (
                                        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                                            <div className="bg-white p-6 rounded-lg shadow-lg w-96">
                                                <h2 className="text-lg font-bold">Confirm Rejection</h2>
                                                <p>Are you sure you want to reject this tour?</p>
                                                <div className="flex justify-end space-x-2 mt-4">
                                                    <button
                                                        onClick={() => setSelectedTour(null)}
                                                        className="bg-gray-200 px-3 py-1 rounded"
                                                    >
                                                        Cancel
                                                    </button>
                                                    <button
                                                        onClick={() => {
                                                            handleReject(selectedTour._id);
                                                            setSelectedTour(null);
                                                        }}
                                                        className="bg-red-500 text-white px-3 py-1 rounded"
                                                    >
                                                        Confirm
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AssignedTour;