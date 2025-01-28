import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";

const Story = ({ email }) => {
    const axiosPublic = useAxiosPublic()

    const {
        data: specificStoriess = [],
        isPending: isLoading,
        error,
        refetch,
    } = useQuery({
        queryKey: ["specificStoriess"],
        queryFn: async () => {
            const res = await axiosPublic.get(`/storie/${email}`);
            return res.data;
        },
    });

    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Something went wrong!</p>;

    return (
        <>
            <section className="text-center my-8 p-6">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">Story</h2>
                <p className="text-lg text-gray-600 leading-relaxed">See the stories of this guide</p>
            </section>
            <div className="p-4 grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {specificStoriess.map((story) => (
                    <div
                        key={story._id}
                        className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
                    >
                        <img
                            src={story.images[0]}
                            alt={story.title}
                            className="w-full h-40 object-cover"
                        />
                        <div className="p-4">
                            <h2 className="text-lg font-semibold mb-2">{story.title}</h2>
                            <p className="text-gray-600 text-sm">
                                {story.description}
                            </p>
                        </div>

                    </div>
                ))}
            </div>
        </>
    );
};

export default Story;
