import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import ahimsavanam from "../assets/ahimsavanam.png";
import resourceRecoveryPark from "../assets/resourceRecoveryPark.png";
import waterConservation from "../assets/waterConservation.png";

const projects = [
  {
    id: 1,
    image: resourceRecoveryPark,
    title: "Resource Recovery Park",
    description:
      "Integrated waste management with 250+ tons of resources recovered.",
  },
  {
    id: 2,
    image: ahimsavanam,
    title: "Ahimsa Vanam",
    description:
      "A one-acre urban forest fostering biodiversity with 150+ species of flora.",
  },
  {
    id: 3,
    image: "/path-to-image/project3.jpg",
    title: "Energy Initiatives",
    description:
      "250kW solar power capacity, saving ₹35 lakhs annually in electricity.",
  },
  {
    id: 4,
    image: waterConservation,
    title: "Water Conservation",
    description:
      "Rainwater harvesting and recycling through a 1 MLD sewage treatment plant.",
  },
];

const FeaturedProjects = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const [transitionDuration, setTransitionDuration] = useState(5000);

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

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPage((prevPage) => (prevPage + 1) % Math.ceil(projects.length / itemsPerPage));
    }, transitionDuration);

    return () => clearInterval(interval);
  }, [itemsPerPage, projects.length, transitionDuration]);

  const paginatedProjects = projects.slice(
    currentPage * itemsPerPage,
    currentPage * itemsPerPage + itemsPerPage
  );

  const totalPages = Math.ceil(projects.length / itemsPerPage);

  const handlePageClick = (index) => {
    setCurrentPage(index);
  };

  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-gray-800 mb-16 text-center"
        >
          Featured Projects
        </motion.h2>

        <div className="flex flex-wrap justify-center gap-6">
          {paginatedProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.2,
              }}
            >
              <ProjectCard
                image={project.image}
                title={project.title}
                description={project.description}
              />
            </motion.div>
          ))}
        </div>

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
