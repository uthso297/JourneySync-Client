import { useLoaderData } from "react-router-dom";
import Gallery from "../Gallery/Gallery";
import TourInfo from "../TourInfo/TourInfo";
import TourPlan from "../TourPlan/TourPlan";
import BookingForm from "../BookForm/BookingForm";


const PackageDetails = () => {
    const datas = useLoaderData();
    const data = datas.package[0]
    const { _id, photos, tourInformation, tripTitle, tourPlan } = data
    return (
        <>
            <Gallery photos={photos} tripTitle={tripTitle}></Gallery>
            <TourInfo tourInformation={tourInformation} tripTitle={tripTitle}></TourInfo>
            <TourPlan tourPlan={tourPlan}></TourPlan>
            <BookingForm></BookingForm>
        </>
    );
};

export default PackageDetails;