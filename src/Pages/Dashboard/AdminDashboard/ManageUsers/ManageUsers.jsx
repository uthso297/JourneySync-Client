import { useState, useEffect } from "react";
import useUsers from "../../../../Hooks/useUsers";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";

const ManageUsers = () => {
    const [users, loading, refetch] = useUsers();
    const [filteredUsers, setFilteredUsers] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedRole, setSelectedRole] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;
    const axiosSecure = useAxiosSecure();

    useEffect(() => {
        setFilteredUsers(users || []);
    }, [users]);

    const handleSearch = async () => {
        try {
            const response = await axiosSecure.get(`/users`, {
                params: {
                    search: searchQuery,
                    role: selectedRole,
                },
            });
            setFilteredUsers(response.data);
            setCurrentPage(1);
        } catch (error) {
            console.error("Error fetching users:", error);
        }
    };


    const totalPages = Math.ceil(filteredUsers.length / itemsPerPage);
    const paginatedUsers = filteredUsers.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    const handlePageChange = (newPage) => {
        if (newPage >= 1 && newPage <= totalPages) {
            setCurrentPage(newPage);
        }
    };

    if (loading) {
        return <div className="text-center py-10">Loading...</div>;
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-2xl font-bold mb-6 text-center">Manage Users</h1>

            {/* Search and Filter */}
            <div className="flex flex-col md:flex-row gap-4 mb-6 items-center">
                <input
                    type="text"
                    className="border rounded-lg px-4 py-2 flex-grow"
                    placeholder="Search by name or email"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
                <select
                    className="border rounded-lg px-4 py-2"
                    value={selectedRole}
                    onChange={(e) => setSelectedRole(e.target.value)}
                >
                    <option value="">All Roles</option>
                    <option value="Admin">Admin</option>
                    <option value="Tour Guide">Tour Guide</option>
                    <option value="User">User/Tourist</option>
                </select>
                <button
                    className="bg-blue-500 text-white px-4 py-2 rounded-lg"
                    onClick={handleSearch}
                >
                    Search
                </button>
            </div>

            {/* Table */}
            <div className="overflow-x-auto shadow-md rounded-lg">
                <table className="min-w-full bg-white">
                    <thead>
                        <tr className="bg-gray-100">
                            <th className="text-left px-6 py-4 font-medium text-gray-700">Image</th>
                            <th className="text-left px-6 py-4 font-medium text-gray-700">Name</th>
                            <th className="text-left px-6 py-4 font-medium text-gray-700">Email</th>
                            <th className="text-left px-6 py-4 font-medium text-gray-700">Role</th>
                        </tr>
                    </thead>
                    <tbody>
                        {paginatedUsers.map((user) => (
                            <tr key={user._id} className="border-b hover:bg-gray-50">
                                <td className="px-6 py-4">
                                    <img
                                        src={user.image}
                                        alt={user.userName}
                                        className="w-10 h-10 rounded-full object-cover"
                                    />
                                </td>
                                <td className="px-6 py-4">{user.userName}</td>
                                <td className="px-6 py-4">{user.userEmail}</td>
                                <td className="px-6 py-4">{user.role || "User"}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Pagination Controls */}
            <div className="flex justify-center items-center gap-2 mt-4">
                <button
                    onClick={() => handlePageChange(currentPage - 1)}
                    className="px-4 py-2 bg-gray-300 rounded-lg"
                    disabled={currentPage === 1}
                >
                    Previous
                </button>
                {Array.from({ length: totalPages }, (_, i) => (
                    <button
                        key={i + 1}
                        onClick={() => handlePageChange(i + 1)}
                        className={`px-4 py-2 rounded-lg ${currentPage === i + 1
                            ? "bg-blue-500 text-white"
                            : "bg-gray-300"
                            }`}
                    >
                        {i + 1}
                    </button>
                ))}
                <button
                    onClick={() => handlePageChange(currentPage + 1)}
                    className="px-4 py-2 bg-gray-300 rounded-lg"
                    disabled={currentPage === totalPages}
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default ManageUsers;

