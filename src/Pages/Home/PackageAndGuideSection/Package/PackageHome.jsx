import { useEffect, useState } from "react";
import SectionTitle from "../../../../Components/SectionTitle";
import useAxiosPublic from "../../../../Hooks/useAxiosPublic";
import { BallTriangle } from "react-loader-spinner";

const PackageHome = () => {
    const [packages, setPackages] = useState([])
    const [loading, setLoading] = useState(true)
    const axiosPublic = useAxiosPublic();
    useEffect(() => {
        axiosPublic.get('/tourPackages/random')
            .then(res => {
                setPackages(res.data)
                setLoading(false)
            })
    }, [])

    if (loading) {
        return <BallTriangle
            height={100}
            width={100}
            radius={5}
            color="#4fa94d"
            ariaLabel="ball-triangle-loading"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
        />
    }

    return (
        <div>
            <SectionTitle heading={'Explore Our Exciting Tour Packages'} description={'Discover a variety of tailor-made tour packages designed to give you a memorable adventure. From nature and wildlife safaris to relaxing beach vacations and historical explorations, we offer experiences that cater to every travelers interests. Our packages are thoughtfully curated to ensure you enjoy the best of each destination, guided by experts who are passionate about sharing their knowledge.'}></SectionTitle>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">

                {packages.map(pkg => (
                    <div key={pkg.packageId} className="card card-compact bg-base-100 shadow-xl">
                        <figure>
                            <img
                                src={pkg.photo}
                                alt={pkg.tripTitle}
                                className="w-full h-48 object-cover rounded-t-lg"
                            />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">{pkg.tripTitle}</h2>
                            <p className="text-sm text-gray-500">{pkg.tourType}</p>
                            <p className="text-xl font-semibold text-primary">${pkg.price}</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">Book Now</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
};

export default PackageHome;




