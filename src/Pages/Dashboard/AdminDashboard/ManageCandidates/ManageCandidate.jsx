import { BallTriangle } from "react-loader-spinner";
import useApplications from "../../../../Hooks/useApplications";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";

const ManageCandidate = () => {
    const [applications, loadingApplications, refetch] = useApplications();
    const axiosSecure = useAxiosSecure()

    function handleAccept(photo, whyGuide, name, email, id) {
        console.log("Accepted Application ID:", id, email);
        axiosSecure.patch(`/users/role/${email}`)
            .then(res => {
                console.log(res.data);
                if (res.data.modifiedCount >= 1) {
                    axiosSecure.delete(`/applications/${id}`)
                        .then(res => {
                            console.log(res.data);
                            if (res.data.deletedCount >= 1) {
                                const guideInfo = {
                                    name,
                                    email,
                                    whyGuide,
                                    photo
                                }
                                axiosSecure.post('/guides', guideInfo)
                                    .then(res => {
                                        if (res.data.insertedId) {
                                            Swal.fire({
                                                title: "Successfuly accepted application",
                                                icon: "success",
                                                draggable: true
                                            });
                                        }
                                        refetch();
                                    })
                            }
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
                            <th className="px-4 py-2 text-left">Image</th>
                            <th className="px-4 py-2 text-left">Name</th>
                            <th className="px-4 py-2 text-left">User Email</th>
                            <th className="px-4 py-2 text-left">CV Link</th>
                            <th className="px-4 py-2 text-left">Role</th>
                            <th className="px-4 py-2 text-left">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {applications && applications.length > 0 ? (
                            applications.map((app) => (
                                <tr key={app._id} className="border-b">
                                    <td className="px-4 py-2">{app.applicationTitle}</td>
                                    <td className="py-2 flex justify-center items-center"> <img className="w-10 h-10 rounded-full " src={app.image} alt="" /> </td>
                                    <td className="px-4 py-2">{app.name}</td>
                                    <td className="px-4 py-2">{app.userEmail}</td>
                                    <td className="px-4 py-2">{app.cvLink}</td>
                                    <td className="px-4 py-2">{app.role}</td>
                                    <td className="px-4 py-2">
                                        <button
                                            className="bg-green-500 text-white px-4 py-2 rounded-md mr-2"
                                            onClick={() => handleAccept(app.image, app.whyTourGuide, app.name, app.userEmail, app._id)}
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
