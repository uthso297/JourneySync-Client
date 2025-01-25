import { useLoaderData } from "react-router-dom";
import Gallery from "../Gallery/Gallery";
import TourInfo from "../TourInfo/TourInfo";
import TourPlan from "../TourPlan/TourPlan";
import BookingForm from "../BookForm/BookingForm";
import { useContext } from "react";
import { AuthContext } from "../../../Components/AuthProvider";


const PackageDetails = () => {
    const datas = useLoaderData();
    const data = datas.package[0]
    const { _id, photos, tourInformation, tripTitle, tourPlan, price } = data
    const { user } = useContext(AuthContext)
    console.log(user);

    // const { displayName, email, photoURL } = user
    const userName = user?.displayName
    const userEmail = user?.emsil
    const userPhoto = user?.photoURL
    return (
        <>
            <Gallery photos={photos} tripTitle={tripTitle}></Gallery>
            <TourInfo tourInformation={tourInformation} tripTitle={tripTitle}></TourInfo>
            <TourPlan tourPlan={tourPlan}></TourPlan>
            <BookingForm touristName={userName} touristEmail={userEmail} touristImage={userPhoto} price={price} packageTitle={tripTitle}></BookingForm>
        </>
    );
};

export default PackageDetails;