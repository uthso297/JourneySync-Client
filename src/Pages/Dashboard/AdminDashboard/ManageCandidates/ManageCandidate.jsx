import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import useUsers from "../../../../Hooks/useUsers";

const ManageCandidate = () => {
    const [users, loading, refetch] = useUsers();
    const axiosSecure = useAxiosSecure()
    const handleMakeAdmin = (id) => {
        axiosSecure.patch(`/users/admin/${id}`)
            .then(() => { 
                refetch();
            })
            .catch((err) => {
                console.error("Error making admin:", err);
            });
    };
    return (
        <div className="flex flex-col gap-10">
            {users.map(user => (
                <div key={user._id}>
                    <p>{user.userName}</p>
                    <p>{user.role}</p>
                    <button
                        key={user.id}
                        onClick={() => handleMakeAdmin(user._id)}
                        className="btn"
                    >
                        Make Admin
                    </button>
                </div>
            ))}
        </div>
    );
};

export default ManageCandidate;