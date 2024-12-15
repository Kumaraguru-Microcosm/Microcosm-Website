import { motion } from "framer-motion";
import Navbar from "../components/common/Navbar";
import { useAtom } from "jotai";
import { navbarAtom, projectsAtom } from "../jotai";
import { NavbarEnum } from "../data";
import Card from "../components/projects/Card";

const Projects = () => {
  const [_, setNav] = useAtom(navbarAtom);
  const [projects, _$] = useAtom(projectsAtom);
  setNav(NavbarEnum.Projects);
  return (
    <div>
      <Navbar notHome />
      <section className="py-14 bg-gray-100">
        <div className="container mx-auto md:px-4 flex justify-center">
          {/* Section Title */}
          {/* <motion.h2 */}
          {/*   initial={{ opacity: 0, y: 50 }} */}
          {/*   whileInView={{ opacity: 1, y: 0 }} */}
          {/*   transition={{ duration: 0.8 }} */}
          {/*   className="text-4xl font-bold text-gray-800 mb-16 text-center" */}
          {/* > */}
          {/*   Featured Projects */}
          {/* </motion.h2> */}

          {/* Projects Grid */}
          <div className="flex flex-wrap justify-center gap-10 my-10 md:w-[80%] px-5">
            <div className="flex justify-between w-[100%]">
              <h2 className="mr-auto my-auto text-xl md:text-3xl">
                Projects and Initiatives
              </h2>
              <select className="border-2 border-gray-200 outline-none rounded-lg bg-gray-100 p-2 ">
                <option>choose </option>
                <option>A</option>
                <option>B</option>
                <option>C</option>
                <option>D</option>
                <option>E</option>
              </select>
            </div>
            {projects.map((project, index) => (
              <motion.div
                className="flex justify-center"
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.2,
                }}
              >
                <Card
                  id={project.id}
                  image={project.image}
                  title={project.title}
                  description={project.description}
                  theme={project.theme}
                  date={project.date}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
