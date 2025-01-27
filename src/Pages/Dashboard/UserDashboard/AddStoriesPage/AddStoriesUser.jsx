import React, { useContext, useState } from 'react';
import { AuthContext } from '../../../../Components/AuthProvider';
import useAxiosPublic from '../../../../Hooks/useAxiosPublic';
import useAxiosSecure from '../../../../Hooks/useAxiosSecure'
import Swal from 'sweetalert2';
const AddStoriesUser = () => {
    const imageHostingKey = import.meta.env.VITE_IMAGE_HOSTING_KEY;
    const image_hosting_api = `https://api.imgbb.com/1/upload?key=${imageHostingKey}`;
    const axiosPublic = useAxiosPublic();
    const axiosSecure = useAxiosSecure()
    const { user } = useContext(AuthContext);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [images, setImages] = useState([]);
    const [uploadedImages, setUploadedImages] = useState([]);  

    const handleTitleChange = (e) => {
        setTitle(e.target.value);
    };

    const handleDescriptionChange = (e) => {
        setDescription(e.target.value);
    };

    const handleImagesChange = (e) => {
        setImages(e.target.files);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('Title:', title);
        console.log('Description:', description);
        console.log('Images:', images);

        const uploadedImageUrls = [];
        for (let i = 0; i < images.length; i++) {
            const imageFile = { image: images[i] };

            try {
                const res = await axiosPublic.post(image_hosting_api, imageFile, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                });
                console.log(res.data);
                uploadedImageUrls.push(res.data.data.display_url);  
            } catch (err) {
                console.error('Error uploading image:', err);
            }
        }

        setUploadedImages(uploadedImageUrls);  

        const formData = {
            title,
            description,
            images: uploadedImageUrls,  
            email: user?.email,
        };
        console.log(formData);
        axiosSecure.post('/stories', formData)
            .then(res => {
                if (res.data.insertedId) {
                    setTitle('')
                    setDescription('')
                    setImages([])
                    Swal.fire({
                        title: "Story added successfully",
                        icon: "success",
                        draggable: true
                    });
                }
            })
    };

    return (
        <div className="max-w-2xl mx-auto p-4">
            <form onSubmit={handleSubmit} className="space-y-4">
                <div className="flex flex-col">
                    <label htmlFor="title" className="text-lg font-medium">Title</label>
                    <input
                        id="title"
                        type="text"
                        value={title}
                        onChange={handleTitleChange}
                        placeholder="Enter story title"
                        className="border border-gray-300 rounded p-2 mt-2"
                        required
                    />
                </div>

                <div className="flex flex-col">
                    <label htmlFor="description" className="text-lg font-medium">Description</label>
                    <textarea
                        id="description"
                        value={description}
                        onChange={handleDescriptionChange}
                        placeholder="Write your story description here"
                        rows="4"
                        className="border border-gray-300 rounded p-2 mt-2"
                        required
                    />
                </div>

                <div className="flex flex-col">
                    <label htmlFor="images" className="text-lg font-medium">Upload Images</label>
                    <input
                        id="images"
                        type="file"
                        onChange={handleImagesChange}
                        multiple
                        className="border border-gray-300 rounded p-2 mt-2"
                    />
                    <div className="mt-2 text-sm text-gray-600">
                        <p>Supports multiple images. Max file size 5MB each.</p>
                    </div>
                </div>

                <div className="flex justify-center">
                    <button
                        type="submit"
                        className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300"
                    >
                        Submit Story
                    </button>
                </div>
            </form>

            {uploadedImages.length > 0 && (
                <div className="mt-4">
                    <h3 className="font-medium">Uploaded Images:</h3>
                    <ul>
                        {uploadedImages.map((url, index) => (
                            <li key={index}>
                                <a href={url} target="_blank" rel="noopener noreferrer">
                                    {url}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default AddStoriesUser;
