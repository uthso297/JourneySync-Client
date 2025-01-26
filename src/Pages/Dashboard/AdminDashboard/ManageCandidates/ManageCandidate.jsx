import { BallTriangle } from "react-loader-spinner";
import useApplications from "../../../../Hooks/useApplications";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";

const ManageCandidate = () => {
    const [applications, loadingApplications, refetch] = useApplications();
    const axiosSecure = useAxiosSecure()

    function handleAccept(email, id) {
        console.log("Accepted Application ID:", id, email);
        axiosSecure.patch(`/users/role/${email}`)
            .then(res => {
                console.log(res.data);
                if (res.data.modifiedCount >= 1) {
                    axiosSecure.delete(`/applications/${id}`)
                        .then(res => {
                            console.log(res.data);
                            refetch();
                        })
                }
            })
    }

    function handleReject(id) {
        console.log("Rejected Application ID:", id);
        axiosSecure.delete(`/applications/${id}`)
            .then(res => {
                console.log(res.data);
                refetch();
            })
    }

    // If loading, show a spinner
    if (loadingApplications) {
        return (
            <div className="flex justify-center items-center">
                <BallTriangle
                    height={100}
                    width={100}
                    radius={5}
                    color="#4fa94d"
                    ariaLabel="ball-triangle-loading"
                    wrapperStyle={{}}
                    wrapperClass=""
                    visible={true}
                />
            </div>
        );
    }

    return (
        <div className="p-4">
            <h1 className="text-2xl font-semibold mb-4">Manage Applications</h1>
            {/* Application Table */}
            <div className="overflow-x-auto bg-white shadow-md rounded-lg">
                <table className="min-w-full table-auto">
                    <thead className="bg-gray-100">
                        <tr>
                            <th className="px-4 py-2 text-left">Application Title</th>
                            <th className="px-4 py-2 text-left">User Email</th>
                            <th className="px-4 py-2 text-left">Role</th>
                            <th className="px-4 py-2 text-left">Why Tour Guide</th>
                            <th className="px-4 py-2 text-left">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {applications && applications.length > 0 ? (
                            applications.map((app) => (
                                <tr key={app._id} className="border-b">
                                    <td className="px-4 py-2">{app.applicationTitle}</td>
                                    <td className="px-4 py-2">{app.userEmail}</td>
                                    <td className="px-4 py-2">{app.role}</td>
                                    <td className="px-4 py-2">{app.whyTourGuide}</td>
                                    <td className="px-4 py-2">
                                        <button
                                            className="bg-green-500 text-white px-4 py-2 rounded-md mr-2"
                                            onClick={() => handleAccept(app.userEmail, app._id)}
                                        >
                                            Accept
                                        </button>
                                        <button
                                            className="bg-red-500 text-white px-4 py-2 rounded-md"
                                            onClick={() => handleReject(app._id)}
                                        >
                                            Reject
                                        </button>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="5" className="text-center px-4 py-2">No applications found</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );


};

export default ManageCandidate;
