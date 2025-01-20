import Cover from "../../../Shared/Cover/Cover";
import OverviewSection from "../OverView/OverviewSection";
import PackageGuideHome from "../PackageAndGuideSection/PackageAndGuide/PackageGuideHome";

const Home = () => {
    return (
        <div>
            <Cover></Cover>
            <OverviewSection></OverviewSection>
            <PackageGuideHome></PackageGuideHome>
        </div>
    );
};

export default Home;