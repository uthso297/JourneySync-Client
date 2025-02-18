import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { useState } from "react";
import SectionTitle from "../../../Components/SectionTitle";
import usePackage from "../../../Hooks/usePackage";
import { BallTriangle } from "react-loader-spinner";
import { Link } from "react-router-dom";

const PackagesTrips = () => {
  const [packages, loading] = usePackage();
  const [viewMode, setViewMode] = useState("slider");
  const [sortOrder, setSortOrder] = useState("low-to-high");

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

  // Sort function (only for table view)
  const sortPackages = (packages) => {
    if (viewMode === "table") {
      return packages.sort((a, b) => {
        if (sortOrder === "low-to-high") {
          return a.price - b.price;
        } else {
          return b.price - a.price;
        }
      });
    }
    return packages; // No sorting in slider view
  };

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

  const sortedPackages = sortPackages(packages);

  return (
    <>
      <div className="p-4">
        <SectionTitle
          heading={"Explore Our Exciting Tour Packages"}
          description={
            "Discover a variety of tailor-made tour packages designed to give you a memorable adventure. From nature and wildlife safaris to relaxing beach vacations and historical explorations, we offer experiences that cater to every traveler's interests. Our packages are thoughtfully curated to ensure you enjoy the best of each destination, guided by experts who are passionate about sharing their knowledge."
          }
        ></SectionTitle>

        {/* View Mode Toggle */}
        <div className="mb-4 flex justify-between items-center">
          <div className="flex gap-2 lg:gap-5">
            <button
              className={`btn ${viewMode === "slider" ? "btn-primary" : "btn"}`}
              onClick={() => setViewMode("slider")}
            >
              Slider View
            </button>
            <button
              className={`btn ${viewMode === "table" ? "btn-primary" : "btn"}`}
              onClick={() => setViewMode("table")}
            >
              Table View
            </button>
          </div>

          {/* Price Sorting */}
          {viewMode === "table" && (
            <select
              className="select select-bordered"
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value)}
            >
              <option value="low-to-high">Price: Low to High</option>
              <option value="high-to-low">Price: High to Low</option>
            </select>
          )}
        </div>

        {viewMode === "slider" ? (
          <div ref={sliderRef} className="keen-slider" key={sortedPackages.length}>
            {sortedPackages.map((pkg) => (
              <div key={pkg._id} className="keen-slider__slide number-slide1 shadow-lg">
                <figure>
                  <img
                    src={pkg.photos[5]}
                    alt={pkg.tripTitle}
                    className="w-full h-96 rounded-t-lg"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">{pkg.tripTitle}</h2>
                  <p className="text-sm text-gray-500">{pkg.tourType}</p>
                  <p className="text-xl font-semibold text-primary">${pkg.price}</p>
                  <div className="card-actions justify-end">
                    <Link to={`/tourPackages/${pkg._id}`}>
                      <button className="btn btn-primary">Book Now</button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="table w-full">
              <thead>
                <tr>
                  <th>Image</th>
                  <th>Title</th>
                  <th>Tour Type</th>
                  <th>Price</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {sortedPackages.map((pkg) => (
                  <tr key={pkg._id}>
                    <td>
                      <img
                        src={pkg.photos[5]}
                        alt={pkg.tripTitle}
                        className="w-20 h-20 rounded"
                      />
                    </td>
                    <td>{pkg.tripTitle}</td>
                    <td>{pkg.tourType}</td>
                    <td>${pkg.price}</td>
                    <td>
                      <Link to={`/tourPackages/${pkg._id}`}>
                        <button className="btn btn-primary">Book Now</button>
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </>
  );
};

export default PackagesTrips;
