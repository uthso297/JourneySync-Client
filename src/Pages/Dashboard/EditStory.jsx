import { useParams } from "react-router-dom";
import useSpecificStoryById from "../../Hooks/useSpecificStoryById";
import { useState, useEffect } from "react";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

const EditStory = () => {
    const { id } = useParams();
    const [specificStory, isLoading, refetch] = useSpecificStoryById(id);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [images, setImages] = useState([]);
    const [newImage, setNewImage] = useState("");
    const [removedImages, setRemovedImages] = useState([]);
    const [message, setMessage] = useState(null); // Message for user feedback
    const axiosSecure = useAxiosSecure();

    useEffect(() => {
        if (!isLoading && specificStory) {
            setTitle(specificStory.title);
            setDescription(specificStory.description);
            setImages(specificStory.images || []);
        }
    }, [specificStory, isLoading]);

    const handleImageChange = (e) => {
        setNewImage(e.target.value);
    };

    const handleRemoveImage = (imageToRemove) => {
        if (!removedImages.includes(imageToRemove)) {
            setRemovedImages([...removedImages, imageToRemove]);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const dataToSubmit = {
                title,
                description,
                newImages: newImage ? [newImage] : [],
                removedImages,
            };

            const response = await axiosSecure.patch(`/stories/${id}`, dataToSubmit);

            if (response.data) {
                const updatedStory = response.data;
                setImages(updatedStory.images);
                setNewImage("");
                setRemovedImages([]);
                setMessage("Story updated successfully!");
                refetch(); // Refetch the updated story data
            }
        } catch (error) {
            console.error("Error updating story:", error);
            setMessage("Failed to update the story. Please try again.");
        }
    };

    if (isLoading) {
        return <div>Loading...</div>;
    }

    return (
        <div className="max-w-4xl mx-auto p-6">
            <h2 className="text-2xl font-semibold mb-4">Edit Story</h2>
            {message && <div className="mb-4 text-center text-green-600">{message}</div>}
            <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                    <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title</label>
                    <input
                        id="title"
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                        required
                    />
                </div>

                <div>
                    <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
                    <textarea
                        id="description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        rows="5"
                        className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                        required
                    />
                </div>

                <div>
                    <label htmlFor="images" className="block text-sm font-medium text-gray-700">Images</label>
                    <div className="space-y-2">
                        {images.map((image, index) => (
                            <div key={index} className="flex items-center space-x-4">
                                <img src={image} alt={`Image ${index + 1}`} className="w-24 h-24 object-cover rounded-md" />
                                <button
                                    type="button"
                                    onClick={() => handleRemoveImage(image)}
                                    className="text-red-500 hover:text-red-700"
                                >
                                    Remove
                                </button>
                            </div>
                        ))}
                    </div>

                    <div className="mt-2">
                        <input
                            type="url"
                            value={newImage}
                            onChange={handleImageChange}
                            placeholder="Add an image URL"
                            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                        />
                    </div>
                </div>

                <div>
                    <button
                        type="submit"
                        className="w-full py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                    >
                        Save Changes
                    </button>
                </div>
            </form>
        </div>
    );
};

export default EditStory;
