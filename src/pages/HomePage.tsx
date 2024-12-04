// src/pages/HomePage.js
import React from 'react';
import Header from '../components/Header';   // Adjust path as needed
import HeroSlider from '../components/HeroSlider'; // Adjust path as needed
import Footer from '../components/Footer';
import Testimonial from '../components/Testimonial';
import FeaturedProjects from '../components/FeaturedProjects';

const HomePage = () => {
    return (
        <div>
            <Header />
            <HeroSlider />
            <FeaturedProjects />
            <Testimonial />
            <Footer />
        </div>
    );
};

export default HomePage;
