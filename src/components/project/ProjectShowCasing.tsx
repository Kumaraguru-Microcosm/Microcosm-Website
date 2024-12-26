import React, { useState } from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";

import { ongoingProjects, completedProjects, featuredProjects } from "./ProjectData";
import Projects from "./Projects";
import Card from "./Card";

const ProjectShowCasing = () => {
  const [selectedCategory, setSelectedCategory] = useState("ongoing"); // Default to ongoing projects

  const categories = [
    { name: "Ongoing Projects", value: "ongoing" },
    { name: "Completed Projects", value: "completed" },
    { name: "Featured Projects", value: "featured" }
  ];

  // Dynamically choose the project list based on selected category
  const getProjectList = () => {
    if (selectedCategory === "ongoing") return ongoingProjects;
    if (selectedCategory === "completed") return completedProjects;
    return featuredProjects;
  };

  const categorySliderSettings = {
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
  };

  const projectSliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl mt-8 sm:text-4xl font-bold text-center mb-6">Our Projects</h1>

      {/* Category Menu (Small Screens - Slider Effect) */}
      <div className="sm:hidden mb-6">
        <Slider {...categorySliderSettings}>
          {categories.map((category) => (
            <button
              key={category.value}
              onClick={() => setSelectedCategory(category.value)}
              className={`px-4 py-2 text-lg font-semibold transition duration-300 ${selectedCategory === category.value ? "text-green-500" : "text-gray-700"
                }`}
            >
              {category.name}
            </button>
          ))}
        </Slider>
      </div>

      {/* Category Menu (Larger Screens - Static) */}
      <div className="hidden sm:flex justify-center space-x-4 mb-8">
        {categories.map((category) => (
          <button
            key={category.value}
            onClick={() => setSelectedCategory(category.value)}
            className={`px-6 py-2 text-lg font-semibold transition duration-300 ${selectedCategory === category.value ? "text-green-500" : "text-gray-700"
              }`}
          >
            {category.name}
          </button>
        ))}
      </div>

      {/* Carousel for Project List (Mobile View) */}
      <div className="sm:hidden">
        <Slider {...projectSliderSettings}>
          {getProjectList().map((project) => (
            <a href={`/project/${project.id}`}>

              <div key={project.id} className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-all duration-300">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 sm:h-56 md:h-64 object-cover rounded-md mb-4"
                />
                <h2 className="text-xl sm:text-2xl font-bold mb-2">{project.title}</h2>
                <p className="text-gray-700 text-sm sm:text-base">{project.description}</p>
              </div>
            </a>
          ))}

        </Slider>
      </div>

      {/* Grid for Project List (Larger Screens) */}
      <div className="hidden sm:grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8 mt-8">
        {getProjectList().map((project) => (
          <a href={`/project/${project.id}`}>
            

            <div key={project.id} className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-all duration-300">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 sm:h-56 md:h-64 object-cover rounded-md mb-4"
              />
              <h2 className="text-xl sm:text-2xl font-bold mb-2">{project.title}</h2>
              <p className="text-gray-700 text-sm sm:text-base">{project.description}</p>
            </div>

          </a>

        ))}
      </div>
    </div>
  );
};

export default ProjectShowCasing;
