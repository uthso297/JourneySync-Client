import React, { useState } from 'react';
import Swal from 'sweetalert2';

const Newsletter = () => {
  const [email, setEmail] = useState('');

  // Handle email change
  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (email) {
      console.log("Subscribed with email:", email);
      
      // Show SweetAlert
      Swal.fire({
        title: 'Subscribed!',
        text: 'You have successfully subscribed to our newsletter.',
        icon: 'success',
        confirmButtonText: 'Cool',
      });

      // Clear the input
      setEmail('');
    } else {
      // If email is empty, show error alert
      Swal.fire({
        title: 'Error!',
        text: 'Please enter a valid email address.',
        icon: 'error',
        confirmButtonText: 'Okay',
      });
    }
  };

  return (
    <div className="bg-black text-white py-16 px-10">
      <div className=" bg-gray-900 p-8 rounded-xl shadow-lg">
        <h2 className="text-4xl font-bold text-center mb-6 text-gradient bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-teal-500">
          Join Our Newsletter
        </h2>
        <p className="text-lg text-center mb-6">Get the latest updates, news, and offers directly to your inbox.</p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="w-full md:w-2/3">
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="w-full p-4 rounded-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
              />
            </div>
            <div className="w-full md:w-1/3">
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 rounded-md transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Subscribe
              </button>
            </div>
          </div>
        </form>

        <div className="mt-6 text-center">
          <p className="text-sm text-gray-400">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
