import ProjectShowCasing from "../components/project/ProjectShowCasing.tsx";
import HeroSlider from "../components/HeroSlider.tsx";
import Header from "../components/Header.tsx";
import Testimonial from "../components/Testimonial.tsx";
import Footer from "../components/Footer.tsx";

const ProjectPage = () => {
  return (
    <div>
        <Header />
        <HeroSlider />
        <ProjectShowCasing />
        {/* <Testimonial /> */}
        {/* <Projects /> */}
        {/* <Testimonial /> */}
        <Footer />
    </div>
  );
}

export default ProjectPage;
