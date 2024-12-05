import React from "react";

const ProjectCard = ({ image, title, description }) => {
  return (
    <div
      className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition duration-300"
      style={{ width: '400px', height: '500px', display: 'flex', flexDirection: 'column' }}
    >
      <img src={image} alt={title} className="w-full h-60 object-cover" />
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-2xl font-bold mb-3">{title}</h3>
        <p className="text-gray-600 text-base flex-grow">{description}</p>
        <a
          href="#"
          className="text-green-500 font-semibold mt-auto"
        >
          Know more &rarr;
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
