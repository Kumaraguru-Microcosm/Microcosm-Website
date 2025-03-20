import React from "react";

const ProjectCard = ({ image, title, description }) => {

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 sm:w-64 md:w-80 lg:w-96 h-96 hover:scale-105 flex flex-col justify-between">
      <img
        src={image}
        alt={title}
        className="w-full h-44 object-cover"
      />
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-600 text-sm mb-4">{description}</p>
        <hr className="border-gray-300 my-2" />
        <div className="mt-auto">
          <button className="text-green-600 font-medium flex items-center">
            Know More <span className="ml-2">&rarr;</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
