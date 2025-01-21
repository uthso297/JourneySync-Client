import CoverTrips from "./Cover/CoverTrips";
import Description from "./Description";
import PackagesTrips from "./PackagesTrips";

const Trips = () => {
    return (
        <div>
            <CoverTrips></CoverTrips>
            <Description></Description>
            <PackagesTrips></PackagesTrips>
        </div>
    );
};

export default Trips;