import React from "react";
import ProjectShowCasing from "../components/project/ProjectShowCasing.tsx";
import HeroSlider from "../components/HeroSlider.tsx";
import Header from "../components/Header.tsx";
import Testimonial from "../components/Testimonial.tsx";
import Projects from "../components/project/Projects.tsx";

const ProjectPage = () => {
  return (
    <div>
        <Header />
        <HeroSlider />
        <ProjectShowCasing />
        {/* <Testimonial /> */}
        {/* <Projects /> */}
        <Testimonial />
    </div>
  );
}

export default ProjectPage;
