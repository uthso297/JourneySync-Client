import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import PackageHome from '../Package/PackageHome';
import GuideHome from '../Guide/GuideHome';
const PackageGuideHome = () => {
    return (
        <div className='my-10'>
            <Tabs>
                <TabList>
                    <Tab>Our Packages</Tab>
                    <Tab>Meet Our Tour Guides</Tab>
                </TabList>

                <TabPanel>
                    <PackageHome></PackageHome>
                </TabPanel>
                <TabPanel>
                    <GuideHome></GuideHome>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default PackageGuideHome;