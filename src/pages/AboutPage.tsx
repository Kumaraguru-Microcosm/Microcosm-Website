import React from "react";
import HeroSlider from "../components/HeroSlider";
import Header from "../components/Header";
import Testimonial from "../components/Testimonial";
import Footer from "../components/Footer";
import FocusAreas from "../components/About/FocusAreas";
import TeamAndPartners from "../components/About/TeamAndPartners";

const AboutUsPage = () => {
  return (
    <div>
        <Header />
        <HeroSlider />
        <FocusAreas />
        <Testimonial />
        <TeamAndPartners />
        <Footer />
      </div>
  );
};

export default AboutUsPage;
