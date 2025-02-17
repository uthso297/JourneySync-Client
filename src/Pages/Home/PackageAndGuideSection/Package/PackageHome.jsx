import { useEffect, useState } from "react";
import SectionTitle from "../../../../Components/SectionTitle";
import useAxiosPublic from "../../../../Hooks/useAxiosPublic";
import { BallTriangle } from "react-loader-spinner";
import { Link } from "react-router-dom";


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
        <div>
            <SectionTitle heading={'Explore Our Exciting Tour Packages'} description={'Discover a variety of tailor-made tour packages designed to give you a memorable adventure. From nature and wildlife safaris to relaxing beach vacations and historical explorations, we offer experiences that cater to every travelers interests. Our packages are thoughtfully curated to ensure you enjoy the best of each destination, guided by experts who are passionate about sharing their knowledge.'}></SectionTitle>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 ">

                {packages.map(pkg => (
                    <div key={pkg._id} className="card card-compact bg-base-100 shadow-xl">
                        <figure>
                            <img
                                src={pkg.photos[0]}
                                alt={pkg.tripTitle}
                                className="w-full h-96 rounded-t-lg"
                            />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">{pkg.tripTitle}</h2>
                            <p className="text-sm text-gray-500">{pkg.tourType}</p>
                            <p className="text-xl font-semibold text-primary">${pkg.price}</p>
                            <div className="card-actions justify-end">
                                <Link to={`/tourPackages/${pkg._id}`}><button className="btn btn-primary">View Details</button></Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
};

export default PackageHome;




