import React, { useState } from "react";
import Slider from "react-slick";
import { useLocation } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import homeBackgroundImage from "../assets/Home/KI_Cover.jpg";
import aboutBackgroundImage from "../assets/microcosmBackgroundImage.png";
import educationBackgroundImage from "../assets/Home/new1.png";
import projectBackgroundImage from "../assets/Home/new.png"; 

import "./HeroSlider.css";

const HeroSlider = () => {
  const location = useLocation();
  const isAboutPage = location.pathname === "/what-is-microcosm";
  const isProjectPage = location.pathname === "/projects";
  const isEducationEventPage = location.pathname === "/eduAndEvents";
  const isHomePage = location.pathname === "/";

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

  const homePageSliderContent = [
    {
      image: homeBackgroundImage,
      title: "MICROCOSM",
      description: "Kumaraguru Microcosm is an eco-sensitive initiative to create a coexisting, inclusive, and sustainable environment",
      buttonText: "Become a Volunteer",
      buttonLink: "/volunteer",
      buttonColor: "bg-blue-500 hover:bg-blue-600",
    },
  ];

  const projectPageSliderContent = [
    {
      image: projectBackgroundImage,
      title: "Explore and Join Our Journey",
      description: "Collaborate and bring innovative ideas to life.",
      buttonText: "Get Involved",
      buttonLink: "/volunteer",
      buttonColor: "bg-purple-500 hover:bg-purple-600",
    },
  ];

  const educationEventPageSliderContent = [
    {
      image: educationBackgroundImage,
      title: "Join Our Learning Journey",
      description: "Explore initiatives fostering sustainability and knowledge sharing.",
      buttonText: "Get Involved",
      buttonLink: "/get-involved",
      buttonColor: "bg-orange-500 hover:bg-orange-600",
    },
  ];

  const aboutPageSliderContent = [
    {
      image: aboutBackgroundImage,
      title: "Welcome to Microcosm",
      description: "Discover how Microcosm fosters sustainability at KCT. Join us in shaping a better future.",
      buttonText: "Explore Our Vision",
      buttonLink: "/",
      buttonColor: "bg-blue-500 hover:bg-blue-600",
    },
  ];

  const sliderContent = isEducationEventPage
    ? educationEventPageSliderContent
    : isAboutPage
    ? aboutPageSliderContent
    : isProjectPage
    ? projectPageSliderContent
    : isHomePage
    ? homePageSliderContent
    : [];

  const [loadedImages, setLoadedImages] = useState({});

  const handleImageLoad = (index) => {
    setLoadedImages((prevState) => ({ ...prevState, [index]: true }));
  };

  const splitText = (text) => {
    return text.split("").map((char, index) => (
      <span key={index} className="inline-block">
        {char === " " ? "\u00A0" : char}
      </span>
    ));
  };

  return (
    <section
      id="hero-slider"
      className={`relative w-full ${
        isAboutPage || isEducationEventPage || isProjectPage
          ? "h-[300px] md:h-[400px] lg:h-[500px]"
          : "h-[450px] md:h-[650px] lg:h-[970px]"
      }`}
    >
      <Slider {...settings} className="h-full w-full">
        {sliderContent.map((slide, index) => (
          <div
            key={index}
            className={`relative ${
              isAboutPage || isEducationEventPage || isProjectPage
                ? "h-[300px] md:h-[400px] lg:h-[500px]"
                : "h-[500px] md:h-[650px] lg:h-[970px]"
            } w-full`}
          >
            {!loadedImages[index] && (
              <div className="absolute inset-0 flex justify-center items-center bg-gray-200">
                <div className="loader animate-spin rounded-full border-4 border-t-4 border-gray-300 h-12 w-12"></div>
              </div>
            )}
            <div className="absolute inset-0 overflow-hidden">
              <img
                src={slide.image}
                alt={`Slide ${index + 1}`}
                className={`w-full h-full object-cover animate-zoom-in-5s`}
                onLoad={() => handleImageLoad(index)}
              />
            </div>
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4 md:px-8">
              <h1
                className={`text-white ${
                  isHomePage
                    ? "text-4xl sm:text-6xl md:text-7xl lg:text-7xl"
                    : "text-2xl sm:text-4xl md:text-5xl lg:text-6xl"
                } font-bold mb-4`}
              >
                <div className="split-text">{splitText(slide.title)}</div>
              </h1>
              <p
                className={`text-gray-200 ${
                  isHomePage
                    ? "text-xl sm:text-2xl md:text-3xl lg:text-2xl"
                    : "text-base sm:text-lg md:text-xl lg:text-2xl"
                } mb-6`}
              >
                <div className="split-text">{splitText(slide.description)}</div>
              </p>
              <a
                href={slide.buttonLink}
                className={`py-2 px-4 sm:py-3 sm:px-6 lg:py-4 lg:px-8 text-sm sm:text-base lg:text-lg rounded-lg border-2 border-white text-white bg-transparent hover:bg-white hover:text-black transition-colors duration-300`}
              >
                {slide.buttonText}
              </a>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default HeroSlider;
