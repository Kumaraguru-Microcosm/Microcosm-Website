import React from "react";
import { useParams } from "react-router-dom";
import { ongoingProjects, completedProjects, featuredProjects } from "./ProjectData";

const ProjectDetails = () => {
  const { id } = useParams();

  // Combine all projects into one list
  const allProjects = [...ongoingProjects, ...completedProjects, ...featuredProjects];
  const project = allProjects.find((proj) => proj.id === parseInt(id));

  if (!project) {
    return <div className="text-center text-red-500 text-xl mt-12">Project not found!</div>;
  }

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-12">
      <h1 className="text-4xl font-bold mb-6">{project.title}</h1>
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-64 md:h-96 object-cover rounded-md mb-6"
      />
      <p className="text-gray-700 text-lg mb-4">{project.description}</p>
      <p className="text-gray-700 mb-4">
        Additional details about the project. This is where you can add more content.
      </p>
      <p className="text-gray-700">
        More information about the team or project goals. Customize this as needed.
      </p>
    </div>
  );
};

export default ProjectDetails;
