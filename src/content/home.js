import MainSection from "./components/MainSection";
import AboutUs from "./components/AboutUs";
import OurValues from "./components/OurValues";
import Vacancy from "./components/Vacancy";
import Contacts from "./components/Contacts";
import Gallery from "./components/Gallery"

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
      <Contacts />
    </>
  );
}

export default Home;
