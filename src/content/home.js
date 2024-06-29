import MainSection from "./components/MainSection";
import AboutUs from "./components/AboutUs";
import OurValues from "./components/OurValues";
import Vacancy from "./components/Vacancy";
import Contacts from "./components/Contacts";
import Gallery from "./components/Gallery"
import FollowUs from './components/FollowUs'

import aboutUsData from "./aboutUs.json";
import ourValuesData from "./ourValues.json";
import vacancyData from "./vacancy.json";

function Home() {
  return (
    <>
      <MainSection />
      <AboutUs aboutUsData={aboutUsData} />
      <OurValues ourValuesData={ourValuesData} />
      <Vacancy vacancyData={vacancyData} />
      <Gallery/>
      <FollowUs />
      <Contacts />
    </>
  );
}

export default Home;
