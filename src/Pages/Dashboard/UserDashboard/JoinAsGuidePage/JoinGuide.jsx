import { useState, useContext } from "react";
// import { AuthContext } from "../../../../Components/AuthProvider";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import useSpecificUser from "../../../../Hooks/useSpecificUser";

const JoinGuide = () => {
    // const { user } = useContext(AuthContext);
    const axiosSecure = useAxiosSecure();
    const { specificUser, refetch } = useSpecificUser()
    const [applicationTitle, setApplicationTitle] = useState('');
    const [whyTourGuide, setWhyTourGuide] = useState('');
    const [cvLink, setCvLink] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [loading, setLoading] = useState(false);

    console.log(specificUser);
    const name = specificUser?.userName
    const email = specificUser?.userEmail;
    const role = specificUser?.role;
    const image = specificUser?.image
    console.log(role);
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!applicationTitle || !whyTourGuide || !cvLink) {
            alert('Please fill in all fields');
            return;
        }

        setLoading(true);
        try {

            const applicationData = {
                applicationTitle,
                name,
                userEmail: email,
                whyTourGuide,
                cvLink,
                role,
                image
            };

            const response = await axiosSecure.post('/applications', applicationData);
            console.log(response.data);

            if (response.data) {
                setIsModalOpen(true);
                setApplicationTitle('');
                setWhyTourGuide('');
                setCvLink('');
            }
        } catch (error) {
            console.error('Error submitting application:', error);
            alert('There was an error submitting your application. Please try again later.');
        } finally {
            setLoading(false);
        }
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div className="max-w-xl mx-auto p-6 bg-white rounded-lg shadow-2xl my-10">
            <h2 className="text-2xl font-bold mb-4">Join as a Tour Guide</h2>
            <form onSubmit={handleSubmit}>
                {/* Application Title */}
                <div className="mb-4">
                    <label htmlFor="applicationTitle" className="block text-sm font-medium text-gray-700">Application Title</label>
                    <input
                        id="applicationTitle"
                        type="text"
                        value={applicationTitle}
                        onChange={(e) => setApplicationTitle(e.target.value)}
                        required
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                    />
                </div>

                {/* User Email (Read-Only) */}
                <div className="mb-4">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Your Email</label>
                    <input
                        id="email"
                        type="email"
                        value={email || ''}
                        readOnly
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm bg-gray-100 text-gray-500"
                    />
                </div>

                {/* Why do you want to be a Tour Guide */}
                <div className="mb-4">
                    <label htmlFor="whyTourGuide" className="block text-sm font-medium text-gray-700">Why do you want to be a Tour Guide?</label>
                    <textarea
                        id="whyTourGuide"
                        value={whyTourGuide}
                        onChange={(e) => setWhyTourGuide(e.target.value)}
                        required
                        rows="4"
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                    />
                </div>

                {/* CV Link */}
                <div className="mb-4">
                    <label htmlFor="cvLink" className="block text-sm font-medium text-gray-700">CV Link</label>
                    <input
                        id="cvLink"
                        type="url"
                        value={cvLink}
                        onChange={(e) => setCvLink(e.target.value)}
                        required
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                    />
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    className={`w-full bg-blue-500 text-white py-2 px-4 rounded-md focus:outline-none ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
                    disabled={loading}
                >
                    {loading ? 'Submitting...' : 'Submit Application'}
                </button>
            </form>

            {/* Success Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white p-6 rounded-lg shadow-md max-w-sm w-full">
                        <h3 className="text-xl font-semibold mb-4">Application Submitted Successfully!</h3>
                        <p className="mb-4">Your application to become a tour guide has been successfully submitted.</p>
                        <button
                            onClick={closeModal}
                            className="w-full bg-green-500 text-white py-2 px-4 rounded-md"
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default JoinGuide;
