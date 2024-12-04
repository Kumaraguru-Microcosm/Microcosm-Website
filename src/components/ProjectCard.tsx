import React from 'react';
import img from "../assets/f1.png";

const ProjectCard = ({ image, title, description }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition duration-300" style={{ width: '350px', height: '400px' }}>
      <img src={img} alt={title} className="w-full h-48 object-cover" />
      <div className="p-5">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600 text-sm mb-14">{description}</p>
        <a href="#" className="text-green-500 font-semibold ">Know more &rarr;</a>
      </div>
    </div>
  );
};

export default ProjectCard;
