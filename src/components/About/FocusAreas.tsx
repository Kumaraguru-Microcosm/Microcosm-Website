import React, { useState, useEffect, useRef } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import eneryImage from "../../assets/ahimsavanam.png";
import waterImage from "../../assets/waterConservation.png";
import wasteImage from "../../assets/resourceRecoveryPark.png";

const focusAreas = [
  {
    id: 0,
    title: "Energy",
    description: `
      Renewable energy is the key to a sustainable future. By promoting solar, wind, and other clean energy sources, we aim to reduce dependence on fossil fuels and mitigate climate change.`,
    details: "Solar power, wind energy procurement, and digital monitoring.",
    image: eneryImage,
    link: "/projects/energy",
  },
  {
    id: 1,
    title: "Water Conservation",
    description: `
      Water is a precious resource, and its sustainable management is essential for future generations.`,
    details: "Rainwater harvesting and optimized water usage.",
    image: waterImage,
    link: "/projects/water-conservation",
  },
  {
    id: 2,
    title: "Waste Management",
    description: `
      Effective waste management is crucial for reducing environmental pollution and conserving resources.`,
    details: "Resource Recovery Park and solid waste policies.",
    image: wasteImage,
    link: "/projects/waste-management",
  },
  // Add more focus areas as needed
];

const FocusAreas = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  // Intersection Observer for visibility
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Auto-cycle through focus areas every 8 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % focusAreas.length);
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  // Handlers for manual navigation
  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % focusAreas.length);
  };

  const handlePrev = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? focusAreas.length - 1 : prevIndex - 1
    );
  };

  return (
    <section
      id="focus-areas"
      ref={sectionRef}
      className={`py-16 px-4 sm:px-8 bg-gray-50 transition-all duration-1000 ease-in-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-12">
        Our Focus Areas
      </h2>
      <div className="relative flex flex-col lg:flex-row items-center justify-center max-w-7xl mx-auto gap-8">
        {/* Focus Area Image with Arrows */}
        <div
          className={`relative w-full lg:w-1/2 h-64 sm:h-80 lg:h-96 bg-gray-200 rounded-lg overflow-hidden transition-transform duration-1000 ${
            isVisible ? "translate-x-0" : "-translate-x-10"
          }`}
        >
          <img
            src={focusAreas[activeIndex].image}
            alt={focusAreas[activeIndex].title}
            className="w-full h-full object-cover"
          />
          {/* Previous Arrow */}
          <button
            onClick={handlePrev}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 p-2 rounded-full shadow hover:bg-opacity-70 focus:outline-none"
          >
            <FaArrowLeft className="text-white" />
          </button>
          {/* Next Arrow */}
          <button
            onClick={handleNext}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 p-2 rounded-full shadow hover:bg-opacity-70 focus:outline-none"
          >
            <FaArrowRight className="text-white" />
          </button>
        </div>

        {/* Focus Area Text */}
        <div
          className={`w-full lg:w-1/2 text-center lg:text-left space-y-4 sm:space-y-6 transition-transform duration-1000 ${
            isVisible ? "translate-x-0" : "translate-x-10"
          }`}
        >
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-gray-800">
            {focusAreas[activeIndex].title}
          </h3>
          <p className="text-sm sm:text-base lg:text-lg text-gray-600 whitespace-pre-line">
            {focusAreas[activeIndex].description}
          </p>
          <p className="text-sm sm:text-base font-medium text-gray-800">
            {focusAreas[activeIndex].details}
          </p>
          <a
            href={focusAreas[activeIndex].link}
            className="text-blue-600 hover:underline text-sm sm:text-base"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
};

export default FocusAreas;