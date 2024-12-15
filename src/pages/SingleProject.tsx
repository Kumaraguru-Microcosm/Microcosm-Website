import { useParams } from "react-router-dom";
import Navbar from "../components/common/Navbar";
import { useAtom } from "jotai";
import { navbarAtom, projectsAtom } from "../jotai";
import { NavbarEnum } from "../data";
import Carousel from "../components/projects/Carousel";

const SingleProject = () => {
  const { id } = useParams();
  const [p, _] = useAtom(projectsAtom);
  const [_n, setNav] = useAtom(navbarAtom);
  setNav(NavbarEnum.Projects);
  let project = [p[1]];
  if (id) {
    project = p.filter((el) => el.id === +id);
  }
  return (
    <>
      <Navbar notHome />
      <div className="flex justify-center items-center w-full ">
        <div className="w-[90%] rounded overflow-hidden shadow-lg absolute top-[15%] flex flex-col  gap-5 ">
          <div className="flex flex-col md:flex-row">
            <img
              className="w-full h-50 "
              src={project[0].image}
              alt="Sunset in the mountains"
            />
            <div className="px-6 py-4">
              <div className="font-bold text-2xl mb-2">{project[0].title}</div>
              <p className="text-gray-700 text-base">
                {project[0].description}
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatibus quia, nulla! Maiores et perferendis eaque,
                exercitationem praesentium nihil.
              </p>
              <div className="py-5 flex flex-col gap-5">
                <div>
                  <h2 className="font-bold text-xl">Goals</h2>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Ipsa molestiae inventore laudantium quo odit officiis maxime
                    aliquam, quae tenetur error perspiciatis eveniet nam sunt
                    optio sed aspernatur facere dolor impedit atque, magni
                    magnam tempora quibusdam tempore expedita! In fugiat
                    explicabo vero, accusantium dicta illo dolorem, quo facere
                    ipsam, a impedit?
                  </p>
                </div>
                <div>
                  <h2 className="font-bold text-xl">Impact</h2>
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Possimus amet maiores, numquam consequatur asperiores,
                    excepturi temporibus maxime impedit consectetur dolorum illo
                    nihil sunt commodi quos vel magni sint explicabo corporis
                    magnam? Commodi rerum, odio ab quas placeat perferendis
                    quisquam molestias explicabo, voluptatibus laborum dolorem
                    non cumque perspiciatis maiores, ullam ratione!
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="md:p-10">
            <h2 className="font-bold text-2xl text-center my-5">
              Photos and Videos
            </h2>
            <Carousel
              images={[
                "http://localhost:5173/src/assets/resourceRecoveryPark.png",
                "http://localhost:5173/src/assets/resourceRecoveryPark.png",
              ]}
            />
          </div>
          <div className="volunteers"></div>
        </div>
      </div>
    </>
  );
};

export default SingleProject;
