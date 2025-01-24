import SectionTitle from '../../../Components/SectionTitle'
const Gallery = ({ photos, tripTitle }) => {
    return (
        <>
            <div className='pt-10 bg-gray-300 shadow-lg'><SectionTitle heading="Our Gallery" description="Explore latest images"></SectionTitle></div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 p-4">
                {photos.map((photo, index) => (
                    <div
                        key={index}
                        className={`relative overflow-hidden rounded-lg shadow-lg transform transition-all duration-500 hover:scale-105 ${index % 2 === 0 || index === 3 ? "row-span-2" : "row-span-1"
                            }`}
                    >
                        <img
                            src={photo}
                            alt={`Tour image ${index + 1}`}
                            className="w-full h-full"
                        />
                    </div>
                ))}
            </div>
        </>
    );
};

export default Gallery;
