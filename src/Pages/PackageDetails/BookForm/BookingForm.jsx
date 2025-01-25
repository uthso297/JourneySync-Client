import { useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { CiCircleCheck } from "react-icons/ci";

const BookingForm = ({ touristName, touristEmail, touristImage, tourGuides, price, packageTitle }) => {
    const [startDate, setStartDate] = useState(new Date());
    const [selectedGuide, setSelectedGuide] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleBooking = (e) => {
        e.preventDefault();
        const status = 'Pending'
        const formData = {
            touristName,
            touristEmail,
            touristImage,
            tourDate: startDate,
            tourGuide: selectedGuide,
            price,
            status,
            
        };
        console.log('Form Data:', formData);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    return (
        <form
            onSubmit={handleBooking}
            className="max-w-7xl mx-10 md:mx-auto p-6 bg-white rounded-lg shadow-2xl space-y-6 my-10"
        >
            <h2 className="text-2xl font-semibold text-center text-gray-800">Booking Form</h2>

            <div className="space-y-4">
                {/* Tourist Information */}
                <div className="flex items-center space-x-4">
                    <img src={touristImage} alt="Tourist" className="w-12 h-12 rounded-full object-cover" />
                    <div>
                        <p className="text-gray-700 font-medium">{touristName}</p>
                        <p className="text-sm text-gray-500">{touristEmail}</p>
                    </div>
                </div>

                {/* Tour Package Name */}
                <div>
                    <label className="block text-sm font-medium text-gray-700">Tour Package Name</label>
                    <input
                        type="text"
                        className="mt-2 block w-full p-3 rounded-lg border border-gray-300 shadow-sm focus:outline-none"
                        value={packageTitle}
                        readOnly
                    />
                </div>

                {/* Tour Date */}
                <div>
                    <label className="block text-sm font-medium text-gray-700">Tour Date</label>
                    <DatePicker
                        selected={startDate}
                        onChange={(date) => setStartDate(date)}
                        className="mt-2 block w-full p-3 rounded-lg border border-gray-300 shadow-sm focus:outline-none"
                    />
                </div>

                {/* Tour Guide */}
                <div>
                    <label className="block text-sm font-medium text-gray-700">Tour Guide</label>
                    <select
                        className="mt-2 block w-full p-3 rounded-lg border border-gray-300 shadow-sm focus:outline-none"
                        value={selectedGuide}
                        onChange={(e) => setSelectedGuide(e.target.value)}
                        required
                    >
                        <option value="">Select a Guide</option>
                        {/* {tourGuides.map((guide, index) => (
                            <option key={index} value={guide}>{guide}</option>
                        ))} */}
                    </select>
                </div>

                {/* Price */}
                <div>
                    <label className="block text-sm font-medium text-gray-700">Price</label>
                    <input
                        type="text"
                        className="mt-2 block w-full p-3 rounded-lg border border-gray-300 shadow-sm focus:outline-none"
                        value={`$${price}`}
                        readOnly
                    />
                </div>

                {/* Submit Button */}
                <div className="flex justify-center">
                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-3 rounded-lg shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        Book Now
                    </button>
                </div>
            </div>

            {/* Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
                    <div className="bg-white p-6 rounded-lg w-80 text-center shadow-lg">
                        <CiCircleCheck className="text-green-500 text-4xl mb-4 mx-auto" />
                        <h3 className="text-xl font-semibold text-gray-800 mb-4">Confirm Your Booking</h3>
                        <p className="text-gray-600 mb-4">Your booking details have been submitted successfully.</p>
                        <a href="/my-bookings" className="text-blue-600 hover:underline">My Bookings</a>
                        <div className="mt-4">
                            <button
                                onClick={handleCloseModal}
                                className="bg-gray-500 text-white py-2 px-4 rounded-lg shadow-md hover:bg-gray-600"
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </form>
    );
};

export default BookingForm;
