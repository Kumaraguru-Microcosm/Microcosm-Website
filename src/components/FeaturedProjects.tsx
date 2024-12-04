import React from 'react';
import ProjectCard from './ProjectCard';

// Sample data for the projects
const projects = [
  {
    id: 1,
    image: '../assets/f1.png',
    title: 'Project 1',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    id: 2,
    image: '/path-to-image/project2.jpg',
    title: 'Project 2',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    id: 3,
    image: '/path-to-image/project3.jpg',
    title: 'Project 3',
    description: 'Aenean et tortor at risus. Vulputate odio ut enim blandit. Metus vulputate eu scelerisque felis imperdiet proin fermentum.',
  },
];

const FeaturedProjects = () => {
  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Featured Projects</h2>
        <div className="flex flex-wrap justify-center gap-10">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              image={project.image}
              title={project.title}
              description={project.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
