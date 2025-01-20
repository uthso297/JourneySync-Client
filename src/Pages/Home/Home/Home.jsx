import Cover from "../../../Shared/Cover/Cover";
import OverviewSection from "../OverView/OverviewSection";
import PackageGuideHome from "../PackageAndGuideSection/PackageAndGuide/PackageGuideHome";
import TouristStoryHome from "../TouristStory/TouristStoryHome";

const Home = () => {
    return (
        <div>
            <Cover></Cover>
            <OverviewSection></OverviewSection>
            <PackageGuideHome></PackageGuideHome>
            <TouristStoryHome></TouristStoryHome>
        </div>
    );
};

export default Home;