import React from "react";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import ahimsavanam from "../assets/ahimsavanam.png";
import resourceRecoveryPark from "../assets/resourceRecoveryPark.png";
import waterConservation from "../assets/waterConservation.png";

// Sample data for the projects
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
  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-gray-800 mb-16 text-center"
        >
          Featured Projects
        </motion.h2>

        {/* Projects Grid */}
        <div className="flex flex-wrap justify-center gap-6">
          {projects.map((project, index) => (
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
      </div>
    </section>
  );
};

export default FeaturedProjects;
