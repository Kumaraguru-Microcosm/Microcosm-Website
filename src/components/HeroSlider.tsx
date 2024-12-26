import React, { useState } from "react";
import Slider from "react-slick";
import { useLocation } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import backgroundImage2 from "../assets/image copy.png";
import backgroundImage3 from "../assets/background1.png";
import aboutBackgroundImage from "../assets/background.png"; // Background for About page

const HeroSlider = () => {
  const location = useLocation();
  const isAboutPage = location.pathname === "/about" ;
  const isProjectPage =  location.pathname === "/projects"

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

  const sliderContent = isAboutPage
    ? [
      {
        image: aboutBackgroundImage,
        title: "Welcome to Microcosm",
        description:
          "Discover how Microcosm fosters sustainability at KCT. Join us in shaping a better future.",
        buttonText: "Explore Our Vision",
        buttonLink: "#vision",
        buttonColor: "bg-blue-500 hover:bg-blue-600",
      },
      {
        image: aboutBackgroundImage,
        title: "Overview",
        description:
          "Microcosm is an eco-sensitive initiative aimed at building a coexisting, inclusive, and sustainable environment at Kumaraguru.",
        buttonText: "Learn More",
        buttonLink: "#overview",
        buttonColor: "bg-green-500 hover:bg-green-600",
      },
      {
        image: aboutBackgroundImage,
        title: "Our Focus Areas",
        description:
          "Energy, Waste Management, Water Security, Biodiversity, and Sustainability Education.",
        buttonText: "Learn About Projects",
        buttonLink: "#focus-areas",
        buttonColor: "bg-green-500 hover:bg-green-600",
      },
    ]
    :isProjectPage ? 
    [
      {
        image: aboutBackgroundImage,
        title: "Welcome to Microcosm",
        description:
          "Discover how Microcosm fosters sustainability at KCT. Join us in shaping a better future.",
        buttonText: "Explore Our Vision",
        buttonLink: "#vision",
        buttonColor: "bg-blue-500 hover:bg-blue-600",
      },
      {
        image: aboutBackgroundImage,
        title: "Overview",
        description:
          "Microcosm is an eco-sensitive initiative aimed at building a coexisting, inclusive, and sustainable environment at Kumaraguru.",
        buttonText: "Learn More",
        buttonLink: "#overview",
        buttonColor: "bg-green-500 hover:bg-green-600",
      },
      {
        image: aboutBackgroundImage,
        title: "Our Focus Areas",
        description:
          "Energy, Waste Management, Water Security, Biodiversity, and Sustainability Education.",
        buttonText: "Learn About Projects",
        buttonLink: "#focus-areas",
        buttonColor: "bg-green-500 hover:bg-green-600",
      },
    ]
    :   [
      {
        image: backgroundImage2,
        title: "Achieve Your Dreams",
        description: "Join us and make a difference in the world.",
        buttonText: "Become a Volunteer",
        buttonLink: "#contact",
        buttonColor: "bg-blue-500 hover:bg-blue-600",
      },
      {
        image: backgroundImage3,
        title: "Join Our Mission",
        description:
          "Creating a sustainable campus ecosystem for future generations.",
        buttonText: "Contact Us",
        buttonLink: "#contact",
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
      className={`relative w-full ${isAboutPage ? "h-[300px] md:h-[400px] lg:h-[500px]"  : isProjectPage ?"h-[500px] md:h-[400px] lg:h-[600px]" : "h-[500px] md:h-[650px] lg:h-[1000px]"
        }`}
    >
      <Slider {...settings} className="h-full w-full">
        {sliderContent.map((slide, index) => (
          <div
            key={index}
            className={`relative ${isAboutPage ? "h-[300px] md:h-[400px] lg:h-[500px]" :isProjectPage ? "h-[500px] md:h-[400px] lg:h-[600px]" : "h-[500px] md:h-[650px] lg:h-[1000px]"
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
              className={`w-full h-full object-cover transition-opacity duration-500 ${loadedImages[index] ? "opacity-100" : "opacity-0"
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
