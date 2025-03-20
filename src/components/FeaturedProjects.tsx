import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard"; // Assumes a pre-built reusable card component
import { getAllProjects } from "../api/project"; // Assumes API call is in this file

const FeaturedProjects = ({value,categories}) => {
  const [projects, setProjects] = useState([]); // State to store projects
  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const [transitionDuration, setTransitionDuration] = useState(5000);

  // Fetch "Featured Projects" on component mount


  useEffect(() => {
    const fetchFeaturedProjects = async () => {
      try {
        const allProjects = await getAllProjects();
        const featuredProjects = allProjects.filter(
          (project) => 
            project[categories] === value
          
        );
        setProjects(featuredProjects);
      } catch (error) {
        console.error("Error fetching Featured Projects:", error);
      }
    };

    fetchFeaturedProjects();
  }, []);

  // Adjust items per page based on screen size
  useEffect(() => {
    const updateItemsPerPage = () => {
      if (window.innerWidth < 640) {
        setItemsPerPage(1);
        setTransitionDuration(7000);
      } else if (window.innerWidth < 1024) {
        setItemsPerPage(2);
        setTransitionDuration(5000);
      } else {
        setItemsPerPage(5);
        setTransitionDuration(5000);
      }
    };

    updateItemsPerPage();
    window.addEventListener("resize", updateItemsPerPage);

    return () => {
      window.removeEventListener("resize", updateItemsPerPage);
    };
  }, []);

  // Auto-slide projects
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPage((prevPage) =>
        (prevPage + 1) % Math.ceil(projects.length / itemsPerPage)
      );
    }, transitionDuration);

    return () => clearInterval(interval);
  }, [projects, itemsPerPage, transitionDuration]);

  // Pagination logic
  const paginatedProjects = projects.slice(
    currentPage * itemsPerPage,
    currentPage * itemsPerPage + itemsPerPage
  );

  const totalPages = Math.ceil(projects.length / itemsPerPage);

  const handlePageClick = (index) => {
    setCurrentPage(index);
  };

  return (
    <section className="py-12 ">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-gray-800 mb-16 text-center"
        >
          Current Projects
        </motion.h2>

        {/* Display Project Cards */}
        <div className="flex flex-wrap justify-center gap-6">
          {paginatedProjects.length === 0 ? <p>No projects</p> : <>
          {paginatedProjects.map((project, index) => (
            <motion.div
              key={project._id} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.2,
              }}
            >
             <a href={`/details/${project._id}`} key={project._id}>
              <ProjectCard
                image={project.imageUrl}
                title={project.title}
                description={project.overview}
              />
              </a>
            </motion.div>
          ))}
          </>}

        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center items-center mt-8 gap-2">
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              onClick={() => handlePageClick(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentPage === index
                  ? "bg-green-500 scale-125"
                  : "bg-gray-300 hover:bg-green-300"
              }`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
