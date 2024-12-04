// src/components/HeroSlider.js
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import backgroundImage1 from '../assets/background.png';
import backgroundImage2 from '../assets/image copy.png';
import backgroundImage3 from '../assets/background1.png';

const HeroSlider = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 700,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        fade: true,
        arrows: false,
    };

    return (
        <section className="relative h-screen">
            <Slider {...settings} className="h-full">
                <div className="relative h-screen">
                    <img
                        src={backgroundImage1}
                        alt="Slide 1"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black opacity-50"></div>
                    <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">
                        <h1 className="text-white text-4xl md:text-6xl font-bold mb-4">
                            Achieve Your Dreams
                        </h1>
                        <p className="text-gray-200 text-lg md:text-xl mb-6">
                            Join us and make a difference in the world.
                        </p>
                        <a href="#volunteer" className="bg-blue-500 text-white py-3 px-6 rounded-full shadow-lg hover:bg-blue-600 transition duration-300">
                            Become a Volunteer
                        </a>
                    </div>
                </div>
                <div className="relative h-screen">
                    <img
                        src={backgroundImage2}
                        alt="Slide 2"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black opacity-50"></div>
                    <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">
                        <h1 className="text-white text-4xl md:text-6xl font-bold mb-4">
                            Join Our Mission
                        </h1>
                        <p className="text-gray-200 text-lg md:text-xl mb-6">
                            Together, we can achieve more and make an impact.
                        </p>
                        <a href="#contact" className="bg-green-500 text-white py-3 px-6 rounded-full shadow-lg hover:bg-green-600 transition duration-300">
                            Contact Us
                        </a>
                    </div>
                </div>

                <div className="relative h-screen">
                    <img
                        src={backgroundImage3}
                        alt="Slide 3"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black opacity-50"></div>
                    <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">
                        <h1 className="text-white text-4xl md:text-6xl font-bold mb-4">
                            Join Our Mission
                        </h1>
                        <p className="text-gray-200 text-lg md:text-xl mb-6">
                            Together, we can achieve more and make an impact.
                        </p>
                        <a href="#contact" className="bg-green-500 text-white py-3 px-6 rounded-full shadow-lg hover:bg-green-600 transition duration-300">
                            Contact Us
                        </a>
                    </div>
                </div>
            </Slider>
        </section>
    );
};

export default HeroSlider;
