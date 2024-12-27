import React, { useState, useEffect, useRef } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import eneryImage from "../../assets/about/EneryMangement.png";
import waterImage from "../../assets/waterConservation.png";
import wasteImage from "../../assets/about/wasteMangement.png";
import biodiversityImage from "../../assets/about/biodiversityMangement.png";
import dairyImage from "../../assets/about/dairyImage.png";
import sustainableImage from "../../assets/about/sustainableImage.png";

const focusAreas = [
  {
    id: 1,
    title: "Energy",
    description: "Renewable energy is the key to a sustainable future. By promoting solar, wind, and other clean energy sources, we aim to reduce dependence on fossil fuels and mitigate climate change.",
    details: "Solar power, wind energy procurement, and digital monitoring.",
    image: eneryImage,
    link: `/project/1`,
  },
  {
    id: 2,
    title: "Waste Management",
    description: "Effective waste management is crucial for reducing environmental pollution and conserving resources.",
    details: "Resource Recovery Park and solid waste policies.",
    image: wasteImage,
    link: `/project/2`,
  },
  {
    id: 3,
    title: "Water Conservation",
    description: "Water is a precious resource, and its sustainable management is essential for future generations.",
    details: "Rainwater harvesting and optimized water usage.",
    image: waterImage,
    link: `/project/3`,
  },
  {
    id: 4,
    title: "Biodiversity Enrichment",
    description: "Nurturing biodiversity through tree plantations and urban forests ensures ecological balance.",
    details: "Tree plantation and pollination initiatives.",
    image: biodiversityImage,
    link: `/project/4`,
  },
  {
    id: 5,
    title: "Dairy Entrepreneurship",
    description: "Empowering dairy entrepreneurs through sustainable practices and technological innovation.",
    details: "Education, funding, and stakeholder partnerships.",
    image: dairyImage,
    link: `/project/5`,
  },
  {
    id: 6,
    title: "Sustainability Education",
    description: "Cultivating future leaders through sustainability workshops and experiential learning.",
    details: "Workshops, campus tours, and hands-on projects.",
    image: sustainableImage,
    link: `/project/6`,
  },
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

  const handleNext = () => setActiveIndex((prevIndex) => (prevIndex + 1) % focusAreas.length);
  const handlePrev = () =>
    setActiveIndex((prevIndex) => (prevIndex === 0 ? focusAreas.length - 1 : prevIndex - 1));

  return (
    <section
      id="focus-areas"
      ref={sectionRef}
      className={`py-12 px-4 sm:px-6 lg:px-8 bg-gray-50 transition-all duration-1000 ease-in-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-10">
        Our Focus Areas
      </h2>
      <div className="relative flex flex-col lg:flex-row items-center justify-center max-w-7xl mx-auto gap-6 lg:gap-8">
        {/* Focus Area Image with Navigation Arrows */}
        <div className="relative w-full lg:w-1/2 h-60 sm:h-72 lg:h-96 bg-gray-200 rounded-lg overflow-hidden transition-transform duration-1000">
          <img
            src={focusAreas[activeIndex].image}
            alt={focusAreas[activeIndex].title}
            className="w-full h-full object-cover"
          />
          <button
            onClick={handlePrev}
            className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 p-2 sm:p-3 rounded-full shadow hover:bg-opacity-70 focus:outline-none"
          >
            <FaArrowLeft className="text-white text-sm sm:text-base" />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 p-2 sm:p-3 rounded-full shadow hover:bg-opacity-70 focus:outline-none"
          >
            <FaArrowRight className="text-white text-sm sm:text-base" />
          </button>
        </div>

        {/* Focus Area Text */}
        <div className="w-full lg:w-1/2 text-center lg:text-left space-y-4 sm:space-y-6">
          <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-800">
            {focusAreas[activeIndex].title}
          </h3>
          <p className="text-sm sm:text-base lg:text-lg text-gray-600">
            {focusAreas[activeIndex].description}
          </p>
          <p className="text-sm sm:text-base font-medium text-gray-800">
            {focusAreas[activeIndex].details}
          </p>
          <a
            href={focusAreas[activeIndex].link}
            className="inline-block text-blue-600 hover:underline text-sm sm:text-base"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
};

export default FocusAreas;
