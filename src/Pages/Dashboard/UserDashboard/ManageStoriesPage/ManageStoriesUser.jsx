import { Link } from "react-router-dom";
import useSpecificStory from "../../../../Hooks/useSpecificStory";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import { BallTriangle } from "react-loader-spinner";

const ManageStoriesUser = () => {
    const [specificStories, isLoading, refetch] = useSpecificStory();
    console.log(specificStories);
    const axiosSecure = useAxiosSecure()
    const handleDelete = (storyId) => {
        // Logic for deleting the story (you may want to call an API or use context)
        console.log(`Deleting story with ID: ${storyId}`);
        axiosSecure.delete(`/stories/${storyId}`)
            .then(res => {
                if (res.data.deletedCount >= 1) {
                    refetch()
                }
            })
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold text-center mb-8">Manage Your Stories</h1>

            {/* Loading state */}
            {isLoading ? (
                <div className="flex justify-center">
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
            ) : (

                specificStories.length === 0 ? (<>

                    <p className="text-center font-bold text-xl">You have not added any story yet</p>
                </>) : (<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Iterate over the stories */}
                    {specificStories?.map((story) => (
                        <div
                            key={story._id}
                            className="max-w-sm bg-white shadow-lg rounded-lg overflow-hidden"
                        >
                            {/* Story Images */}
                            <div className="flex overflow-x-auto space-x-2 p-4">
                                {story.images.map((image, index) => (
                                    <img
                                        key={index}
                                        src={image}
                                        alt={`Story image ${index + 1}`}
                                        className="w-32 h-32 object-cover rounded-lg"
                                    />
                                ))}
                            </div>

                            <div className="p-4">
                                {/* Story Title */}
                                <h3 className="text-xl font-semibold text-gray-800">{story.title}</h3>

                                {/* Story Description */}
                                <p className="text-sm text-gray-600 mt-2">{story.description}</p>

                                {/* Buttons for Edit and Delete */}
                                <div className="mt-4 flex justify-between items-center">
                                    {/* Edit Button */}
                                    <Link
                                        to={`/dashboard/editstory/${story._id}`}
                                        className="text-blue-500 hover:text-blue-700"
                                    >
                                        Edit
                                    </Link>

                                    {/* Delete Button */}
                                    <button
                                        onClick={() => handleDelete(story._id)}
                                        className="text-red-500 hover:text-red-700"
                                    >
                                        Delete
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>)


            )}
        </div>
    );
};

export default ManageStoriesUser;
