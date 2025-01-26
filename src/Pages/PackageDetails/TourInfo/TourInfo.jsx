import React from 'react';

const TourInfo = ({ tourInformation, tripTitle }) => {
    return (
        <div className="max-w-7xl mx-10 md:mx-auto p-6 bg-white shadow-lg rounded-lg border border-gray-200 my-10 ">
            <h1 className="text-3xl font-semibold text-center text-gray-800 mb-4">{tripTitle}</h1>

            {/* Overview Section */}
            <div className="mb-6">
                <h2 className="text-2xl font-bold text-gray-700 mb-2">Tour Overview</h2>
                <p className="text-gray-600 text-lg">{tourInformation.overview}</p>
            </div>

            {/* Highlights Section */}
            <div>
                <h2 className="text-2xl font-bold text-gray-700 mb-4">Tour Highlights</h2>
                <ul className="space-y-3">
                    {tourInformation.highlights.map((highlight, index) => (
                        <li key={index} className="flex items-start space-x-3">
                            <span className="inline-block text-green-500">&#x2714;</span>
                            <span className="text-gray-600 text-lg">{highlight}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default TourInfo;
