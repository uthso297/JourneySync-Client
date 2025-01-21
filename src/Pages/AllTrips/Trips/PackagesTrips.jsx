import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { useEffect, useState } from "react";
import SectionTitle from '../../../Components/SectionTitle'
const PackagesTrips = () => {
    const [packages, setPackages] = useState([])
    useEffect(() => {
        fetch('tourPackages.json')
            .then(res => res.json())
            .then(data => {
                setPackages(data);
            })
    }, [])
    const [sliderRef] = useKeenSlider({
        loop: true,
        mode: "free",
        slides: {
            perView: 3,
            spacing: 15,
        },
        breakpoints: {
            "(max-width: 1024px)": {
                slides: { perView: 1 },
            },
            "(max-width: 768px)": {
                slides: { perView: 1 },
            },
        },
    });

    return (
        <>
            <div className="p-4">
            <SectionTitle heading={'Explore Our Exciting Tour Packages'} description={'Discover a variety of tailor-made tour packages designed to give you a memorable adventure. From nature and wildlife safaris to relaxing beach vacations and historical explorations, we offer experiences that cater to every travelers interests. Our packages are thoughtfully curated to ensure you enjoy the best of each destination, guided by experts who are passionate about sharing their knowledge.'}></SectionTitle>

                <div ref={sliderRef} className="keen-slider" key={packages.length}>
                    {
                        packages.map(pkg => <div key={pkg.packageId} className="keen-slider__slide number-slide1 shadow-lg">
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
                        </div>)
                    }

                </div>

            </div>
        </>
    );
};

export default PackagesTrips;