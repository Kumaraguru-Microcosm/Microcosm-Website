// src/pages/HomePage.js
import Header from "../components/Header"; // Adjust path as needed
import HeroSlider from "../components/HeroSlider"; // Adjust path as needed
import Footer from "../components/Footer";
import Testimonial from "../components/Testimonial";
import FeaturedProjects from "../components/FeaturedProjects";
import ImpactStatistics from "../components/ImpactStatistics";
import DynamicEvents from "../components/DynamicEvents";
import Navbar from "../components/common/Navbar";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      {/* <Header /> */}
      <HeroSlider />
      <ImpactStatistics />
      <DynamicEvents />
      {/* <Testimonial /> */}
      <FeaturedProjects />
      <Footer />
    </div>
  );
};

export default HomePage;
