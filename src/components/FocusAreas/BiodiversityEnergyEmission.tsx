import { FaArrowLeft } from 'react-icons/fa'; // Importing the arrow icon
import Footer from "../Footer";
import Header from "../Header";
import { useNavigate } from 'react-router-dom';
import FeaturedProjects from '../FeaturedProjects';

const BiodiversityEnergyEmission = () => {
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
        Biodiversity Enrichment
        </h2>

        <div className="p-6 text-gray-700 space-y-6">
          {/* Energy and Emission Section */}
          <section className="space-y-4">
            <p className="text-gray-600">
            Kumaraguru campus home to 4000+ Trees, 95+ species of birds and 55+ Species of butterflies.
            </p>
          </section>

          {/* Biodiversity and Afforestation Section */}
          <section className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-800">Biodiversity and Afforestation Efforts</h3>

            {/* Native Tree Nursery */}
            <div className="space-y-2">
              <h4 className="text-lg font-semibold text-gray-800">Native Tree Nursery</h4>
              <p className="text-gray-600">
                Native seedlings are nurtured on campus in collaboration with Arulagam NGO and are planted across the state as part of our afforestation efforts. We use hardening techniques for seedling growth, ensuring that they are resilient and require minimal care after planting, as no pesticides or insecticides are used. Since its commencement, we have sent nearly 89,406 saplings for plantation.
              </p>
            </div>

            {/* Ahimsa Vanam */}
            <div className="space-y-2">
              <h4 className="text-lg font-semibold text-gray-800">Ahimsa Vanam</h4>
              <p className="text-gray-600">
                A one-acre urban forest was created to promote biodiversity, featuring 150 species of trees, shrubs, and plants. A cobbled trail facilitates nature exploration and engagement. It is a multi-layered canopy that includes mature trees, fruiting dwarf trees, shrubs, perennial herbs, and vines, creating a thriving natural forest ecosystem that enriches soil and supports diverse wildlife. Once it matures, it can sequester up to 10,000 kg of carbon annually, also contributing to a vibrant habitat for fauna.
              </p>
              
            </div>

            {/* Afforestation Efforts Section */}
            <div className="space-y-2">
              <h4 className="text-lg font-semibold text-gray-800">Afforestation Efforts</h4>

              {/* Tree Plantation at Chinnavedampatti Lake */}
              <div className="space-y-2">
                <h5 className="text-md font-semibold text-gray-800">Tree Plantation at Chinnavedampatti Lake</h5>
                <p className="text-gray-600">
                  In collaboration with Kousika Neerkarangal and over 50 student volunteers, 300+ saplings were planted along the lake's northern side, with sapling care aligned with the monsoon pattern. Chinnavedampatti Lake's green cover restoration will lead to biodiversity enrichment, soil stability, and water retention, along with increased community participation in conservation efforts.
                </p>
              </div>

              {/* Honey Hives Section */}
              <div className="space-y-2">
                <h5 className="text-md font-semibold text-gray-800">Honey Hives</h5>
                <p className="text-gray-600">
                  Ten honey hives were installed across the campus to promote pollination and raise awareness about the critical role of pollinators in urban ecosystems. The initiative yields around 20 liters of honey annually, demonstrating successful pollinator support.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
      <FeaturedProjects value={"EBiodiversity Enrichment"} categories={"focusArea"}  />
      <Footer />
    </>
  );
};

export default BiodiversityEnergyEmission;
