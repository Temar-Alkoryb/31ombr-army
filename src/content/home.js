import Header from "../content/components/Header";
import MainSection from "../content/components/MainSection";
import AboutUs from "../content/components/AboutUs";
import OurValues from "../content/components/OurValues";
import Vacancy from "../content/components/Vacancy";
import Contacts from "../content/components/Contacts"
import Footer from "../content/components/Footer";

import aboutUsData from "../content/aboutUs.json";
import ourValuesData from "../content/ourValues.json";
import vacancyData from "../content/vacancy.json";

function Home() {
  return (
    <>
      <main>
        <Header />
        <MainSection />
        <AboutUs aboutUsData={aboutUsData} />
        <OurValues ourValuesData={ourValuesData} />
        <Vacancy vacancyData={vacancyData} />
        <Contacts/>
      </main>
      <Footer />
    </>
  );
}

export default Home;
