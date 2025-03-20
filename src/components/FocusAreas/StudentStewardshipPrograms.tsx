import { FaArrowLeft } from 'react-icons/fa'; // Importing the arrow icon
import Footer from "../Footer";
import Header from "../Header";
import { useNavigate } from "react-router-dom";
import FeaturedProjects from '../FeaturedProjects';

const StudentStewardshipPrograms = () => {
  const navigate = useNavigate();
  return (
    <>
      <Header />
      <div className="border border-gray-300 p-6 mt-16 bg-white shadow-lg rounded-lg">
        {/* Back Button Section */}
        <div className="flex items-center mb-6">
          <button
            onClick={() => navigate("/")} // Navigates back to the previous page
            className="flex items-center text-gray-800 text-lg font-medium p-2 rounded-md hover:bg-gray-200"
          >
            <FaArrowLeft className="mr-2" /> Back
          </button>
        </div>

        {/* Title Section */}
        <h2 className="cursor-pointer bg-gray-100 p-6 text-2xl font-bold text-gray-800 rounded-t-lg">
          Student Stewardship Programs
        </h2>

        <div className="p-6 text-gray-700 space-y-6">
          {/* Sustainable Education for School Children Section */}
          <section className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-800">Sustainable Education for School Children</h3>
            <p className="text-gray-600">
              Through our sustainable education programs, we have reached 40+ schools, impacting over 2,000 students across the nation. The Campus Sustainability Tours provide an in-depth exploration of Kumaraguru Institutions' sustainability initiatives. Hands-on activities like nature walks, biodiversity studies, and interactive sessions deepen students' understanding of ecosystems and conservation.
            </p>
          </section>

          {/* Association for Tropical Biology and Conservation 2023 */}
          <section className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-800">Association for Tropical Biology and Conservation 2023</h3>
            <p className="text-gray-600">
              Jungle Tales: Inspiring Young Minds about Tropical Biology was a session that brought together 30+ schools across Coimbatore, shedding light on conservation and tropical biology from a global perspective.
            </p>
          </section>

          {/* Y20 Talks on Climate Action */}
          <section className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-800">Y20 Talks on Climate Action</h3>
            <p className="text-gray-600">
              More than 200 students from 15 different schools and colleges across Coimbatore participated in the Y20 Talks on Climate Action, featuring Erik Solheim, the former Minister of Climate and the Environment of Norway.
            </p>
          </section>

          {/* National Green Corps Climate Literacy Camp */}
          <section className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-800">National Green Corps Climate Literacy Camp</h3>
            <p className="text-gray-600">
              Partnering with the Tamil Nadu National Green Corps, we hosted over 60 children from 10+ government schools for a transformative 3-day Climate Literacy and Awareness Camp.
            </p>
          </section>

          {/* Nurture Nature Camp with Siruthuli */}
          <section className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-800">Nurture Nature Camp with Siruthuli</h3>
            <p className="text-gray-600">
              In collaboration with Siruthuli’s 16th Annual Nurture Nature Camp, we welcomed 100+ enthusiastic students from 19 schools across Coimbatore to learn about environmental conservation.
            </p>
          </section>

          {/* Summer Biodiversity Camp */}
          <section className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-800">Summer Biodiversity Camp</h3>
            <p className="text-gray-600">
              With Kousika Neerkarangal NGO, we invited over 30 school children to explore the rich biodiversity of our campus, including serene trail walks through "Ahimsa Vanam."
            </p>
          </section>

          {/* YI - Thalir 2024 Sustainability Zone */}
          <section className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-800">YI - Thalir 2024 Sustainability Zone</h3>
            <p className="text-gray-600">
              As part of the YI - Thalir event, we organized a Sustainability Zone, showcasing campus initiatives to over 600 students from 25+ schools. They participated in 25 guided walks, exploring sustainability practices across our campus.
            </p>
          </section>

          {/* Kalingarayan Canal Walk */}
          <section className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-800">Kalingarayan Canal Walk</h3>
            <p className="text-gray-600">
              With the support of the Uzhavan Foundation, Young Indians, and Tamil Nadu School Education through Neerum Naamum, we emphasized the water conservation efforts of the Kalingarayan Canal, its history, irrigation techniques, and the importance of regular water conservation, through awareness campaigns for school children across Coimbatore and Erode.
            </p>
          </section>
        </div>
      </div>
      <FeaturedProjects value={"Awareness"} categories={"focusArea"}  />
      <Footer />
    </>
  );
};

export default StudentStewardshipPrograms;
