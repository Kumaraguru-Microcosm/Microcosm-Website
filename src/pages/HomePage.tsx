// src/pages/HomePage.js
import React from 'react';
import Header from '../components/Header';   // Adjust path as needed
import HeroSlider from '../components/HeroSlider'; // Adjust path as needed
import Footer from '../components/Footer';
import Testimonial from '../components/Testimonial';
import FeaturedProjects from '../components/FeaturedProjects';
import ImpactStatistics from '../components/ImpactStatistics';
import DynamicEvents from '../components/DynamicEvents';
import SubscribeSection from '../components/About/SubscribeSection';
import AdminPage from './AdminPage';
import SustainabilityGoals from '../components/SustainabilityGoals';
import FocusAreas from '../components/SustainabilityGoals';


const HomePage = () => {
    return (
        <div>
            <Header />
            <HeroSlider />
            <FocusAreas />
            <ImpactStatistics />
            {/* <DynamicEvents /> */}
            <FeaturedProjects categories={"category"} value={"Ongoing Projects"}/>
            {/* <Testimonial /> */}
            {/* <SubscribeSection /> */}
            <Footer />
        </div>
    );
};

export default HomePage;
