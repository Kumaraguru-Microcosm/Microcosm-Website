import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";
import { getAllProjects } from "../../api/project"; // Update the path as per your project structure

const ProjectShowCasing = () => {
  const [selectedCategory, setSelectedCategory] = useState("Ongoing Projects"); // Default to "Ongoing Projects"
  const [projects, setProjects] = useState([]);

  const categories = [
    { name: "Ongoing Projects", value: "Ongoing Projects" },
    { name: "Completed Projects", value: "Completed Projects" }
  ];

  // Fetch all projects from the backend
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const fetchedProjects = await getAllProjects();
        setProjects(fetchedProjects);
        console.log("These are the projects: ", fetchedProjects);
      } catch (error) {
        console.error("Failed to fetch projects:", error);
      }
    };

    fetchProjects();
  }, []);

  // Filter projects based on the selected category
  const getProjectList = () => {
    return projects.filter((project) => project.category === selectedCategory);
  };

  const filteredProjects = getProjectList();

  // Slider settings
  const categorySliderSettings = {
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
  };

  const projectSliderSettings = {
    dots: true,
    infinite: filteredProjects.length > 1, // Prevent infinite looping for a single project
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: filteredProjects.length > 1, // Show arrows only if more than one project
    autoplay: filteredProjects.length > 1, // Autoplay only if more than one project
    autoplaySpeed: 3000,
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl mt-8 sm:text-4xl font-bold text-center mb-6">
        Our Projects
      </h1>

      {/* Category Menu (Small Screens - Slider Effect) */}
      <div className="sm:hidden mb-6">
        <Slider {...categorySliderSettings}>
          {categories.map((category) => (
            <button
              key={category.value}
              onClick={() => setSelectedCategory(category.value)}
              className={`px-4 py-2 text-lg font-semibold transition duration-300 ${
                selectedCategory === category.value
                  ? "text-green-500"
                  : "text-gray-700"
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
            className={`px-6 py-2 text-lg font-semibold transition duration-300 ${
              selectedCategory === category.value
                ? "text-green-500"
                : "text-gray-700"
            }`}
          >
            {category.name}
          </button>
        ))}
      </div>

      {/* Mobile View (Single Project Check) */}
      <div className="sm:hidden">
        {filteredProjects.length === 1 ? (
          // If there's only ONE project, show it statically
          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-all duration-300">
            <img
              src={filteredProjects[0].imageUrl}
              alt={filteredProjects[0].title}
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h2 className="text-xl font-bold mb-2">{filteredProjects[0].title}</h2>
            <p className="text-gray-700 text-sm">{filteredProjects[0].overview}</p>
            <hr className="my-4 border-gray-300" />
            <div className="flex justify-end items-center">
              <a
                href={`/details/${filteredProjects[0]._id}`}
                className="text-green-500 font-semibold text-sm flex items-center"
              >
                Know More <span className="ml-2">→</span>
              </a>
            </div>
          </div>
        ) : (
          // If multiple projects, use the slider
          <Slider {...projectSliderSettings}>
            {filteredProjects.map((project) => (
              <a href={`/details/${project._id}`} key={project._id}>
                <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-all duration-300">
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-48 object-cover rounded-md mb-4"
                  />
                  <h2 className="text-xl font-bold mb-2">{project.title}</h2>
                  <p className="text-gray-700 text-sm">{project.overview}</p>
                  <hr className="my-4 border-gray-300" />
                  <div className="flex justify-end items-center">
                    <a
                      href={`/details/${project._id}`}
                      className="text-green-500 font-semibold text-sm flex items-center"
                    >
                      Know More <span className="ml-2">→</span>
                    </a>
                  </div>
                </div>
              </a>
            ))}
          </Slider>
        )}
      </div>

      {/* Grid for Project List (Larger Screens) */}
      <div className="hidden sm:grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8 mb-6">
        {filteredProjects.map((project) => (
          <a href={`/details/${project._id}`} key={project._id}>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col h-full min-h-full overflow-hidden"
            >
              {/* Image Section */}
              <div className="relative h-56">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-full object-cover rounded-t-lg"
                />
                <div className="absolute top-0 left-0 bg-black bg-opacity-40 px-3 py-1 text-white text-sm font-medium rounded-br-lg">
                  {project.category}
                </div>
              </div>

              {/* Content Section */}
              <div className="p-5 flex flex-col flex-grow">
                <h2 className="text-lg font-bold text-gray-800 truncate mb-2">
                  {project.title}
                </h2>
                <p className="text-gray-600 text-sm line-clamp-3 mb-4">
                  {project.overview}
                </p>
            
                <div className="mt-auto pt-4 border-t border-gray-200 flex justify-between items-center">
                  <span className="text-sm font-medium text-gray-500">
                    {project.date || ""}
                  </span>
                  <a
                    href={`/details/${project._id}`}
                    className="text-green-500 font-semibold text-sm flex items-center hover:underline"
                  >
                    Know More <span className="ml-2">→</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default ProjectShowCasing;
