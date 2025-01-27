import React, { useState } from "react";
import Slider from "react-slick";
import { useLocation } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import backgroundImage2 from "../assets/image copy.png";
import backgroundImage3 from "../assets/background1.png";
import aboutBackgroundImage from "../assets/background.png";
import educationBackgroundImage from "../assets/background.png"; // Background for Education Event page

const HeroSlider = () => {
  const location = useLocation();
  const isAboutPage = location.pathname === "/about";
  const isProjectPage = location.pathname === "/projects";
  const isEducationEventPage = location.pathname === "/eduAndEvents";

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

  const sliderContent = isEducationEventPage
    ? [
        {
          image: educationBackgroundImage,
          title: "Educational Events at Microcosm",
          description:
            "Empowering minds through interactive workshops and expert sessions.",
          buttonText: "Discover Events",
          buttonLink: "/about",
          buttonColor: "bg-purple-500 hover:bg-purple-600",
        },
        {
          image: educationBackgroundImage,
          title: "Join Our Learning Journey",
          description:
            "Explore initiatives fostering sustainability and knowledge sharing.",
          buttonText: "Learn More",
          buttonLink: "/get-involved",
          buttonColor: "bg-orange-500 hover:bg-orange-600",
        },
        {
          image: educationBackgroundImage,
          title: "Engage with Experts",
          description:
            "Collaborate with thought leaders and enhance your skills.",
          buttonText: "View Speakers",
          buttonLink: "/eduAndEvents",
          buttonColor: "bg-teal-500 hover:bg-teal-600",
        },
      ]
    : isAboutPage
    ? [
        {
          image: aboutBackgroundImage,
          title: "Welcome to Microcosm",
          description:
            "Discover how Microcosm fosters sustainability at KCT. Join us in shaping a better future.",
          buttonText: "Explore Our Vision",
          buttonLink: "/",
          buttonColor: "bg-blue-500 hover:bg-blue-600",
        },
      ]
    : [
        {
          image: backgroundImage2,
          title: "Achieve Your Dreams",
          description: "Join us and make a difference in the world.",
          buttonText: "Become a Volunteer",
          buttonLink: "/get-involved",
          buttonColor: "bg-blue-500 hover:bg-blue-600",
        },
        {
          image: backgroundImage3,
          title: "Join Our Mission",
          description:
            "Creating a sustainable campus ecosystem for future generations.",
          buttonText: "Contact Us",
          buttonLink: "/projects",
          buttonColor: "bg-green-500 hover:bg-green-600",
        },
      ];

  const [loadedImages, setLoadedImages] = useState({});

  const handleImageLoad = (index) => {
    setLoadedImages((prevState) => ({ ...prevState, [index]: true }));
  };

  return (
    <section
    id="hero-slider"
    className={`relative w-full ${
      isAboutPage || isEducationEventPage
        ? "h-[300px] md:h-[400px] lg:h-[500px]"
        : isProjectPage
        ? "h-[300px] md:h-[400px] lg:h-[500px]" // Reduced size for Project Page
        : "h-[500px] md:h-[650px] lg:h-[1000px]"
    }`}
  >
    <Slider {...settings} className="h-full w-full">
      {sliderContent.map((slide, index) => (
        <div
          key={index}
          className={`relative ${
            isAboutPage || isEducationEventPage
              ? "h-[300px] md:h-[400px] lg:h-[500px]"
              : isProjectPage
              ? "h-[300px] md:h-[400px] lg:h-[500px]" // Reduced size for Project Page
              : "h-[500px] md:h-[650px] lg:h-[1000px]"
          } w-full`}
        >
          {!loadedImages[index] && (
            <div className="absolute inset-0 flex justify-center items-center bg-gray-200">
              <div className="loader animate-spin rounded-full border-4 border-t-4 border-gray-300 h-12 w-12"></div>
            </div>
          )}
          <img
            src={slide.image}
            alt={`Slide ${index + 1}`}
            className={`w-full h-full object-cover transition-opacity duration-500 ${
              loadedImages[index] ? "opacity-100" : "opacity-0"
            }`}
            onLoad={() => handleImageLoad(index)}
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4 md:px-8">
            <h1 className="text-white text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              {slide.title}
            </h1>
            <p className="text-gray-200 text-base sm:text-lg md:text-xl lg:text-2xl mb-6">
              {slide.description}
            </p>
            <a
              href={slide.buttonLink}
              className={`py-2 px-4 sm:py-3 sm:px-6 lg:py-4 lg:px-8 text-sm sm:text-base lg:text-lg rounded-full shadow-lg transition duration-300 ${slide.buttonColor}`}
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
