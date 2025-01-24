import React from 'react';

const TourPlan = ({ tourPlan }) => {
    return (
        <div className="max-w-7xl mx-10 md:mx-auto my-10 p-8 bg-gradient-to-r from-gray-800 via-black to-gray-900 rounded-xl shadow-2xl">
            <h2 className="text-4xl font-extrabold text-center text-white mb-8 tracking-wide">Your Tour Plan</h2>
            {tourPlan && Object.entries(tourPlan).map(([day, details], index) => {
                return (
                    <div key={index} className="mb-8 last:mb-0 hover:scale-105 transition-transform duration-300">
                        <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-6 rounded-lg shadow-lg hover:shadow-2xl transform transition-shadow duration-300">
                            <h3 className="text-3xl font-semibold">{day}</h3>
                        </div>
                        <div className="bg-gray-800 text-white p-6 mt-4 rounded-lg shadow-md hover:shadow-2xl transition-shadow duration-300">
                            <p className="text-gray-300 text-lg font-medium leading-relaxed">{details.activities}</p>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default TourPlan;
