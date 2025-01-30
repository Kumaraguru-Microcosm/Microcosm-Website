import { FaArrowLeft } from 'react-icons/fa';
import Footer from "../Footer";
import Header from "../Header";
import { useNavigate } from "react-router-dom";
const WasteManagement = () => {
     const navigate = useNavigate();
  return (
    <>
      <Header />
      <div className="border border-gray-300 p-6 mt-16 bg-white shadow-lg rounded-lg">
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
          Waste Management
        </h2>

        <div className="p-6 text-gray-700 space-y-6">

          {/* Resource Recovery Park Section */}
          <section className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-800">Resource Recovery Park</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-4 border border-gray-300 bg-gray-50 rounded-lg">
                <ul className="space-y-2">
                  <li>3 years since commencement, 250+ tons of resources recovered</li>
                  <li>4-step segregation process</li>
                  <li>Sorted into 25+ types of waste</li>
                </ul>
              </div>
              <div className="p-4 border border-gray-300 bg-gray-50 rounded-lg">
                <ul className="space-y-2">
                  <li>300+ kgs of vegetable peels composted</li>
                  <li>3 tons of organic manure generated</li>
                  <li>₹50+ lakh in revenue generated</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Sewage Treatment Plant Section */}
          <section className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-800">Sewage Treatment Plant</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-4 border border-gray-300 bg-gray-50 rounded-lg">
                <ul className="space-y-2">
                  <li>1 MLD - MBBR Technology - Approx. 7 Lakh liters of used water treated per day</li>
                  <li>100% of wastewater is recycled & reused for landscape irrigation</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Solid Waste Management Section */}
          <section className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-800">Solid Waste Management</h3>
            <p className="text-gray-600">
              Resource Recovery Park is an integrated solid waste management facility at Kumaraguru Institutions. Waste generated on campus is segregated and responsibly disposed of through various methods like composting, upcycling, recycling, incineration, and scientific landfilling.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-4 border border-gray-300 bg-gray-50 rounded-lg">
                <h4 className="font-semibold text-gray-800">Waste Management Process</h4>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Collection of waste</li>
                  <li>Transportation of waste</li>
                  <li>Segregation of waste</li>
                  <li>Disposal of waste</li>
                </ul>
              </div>
              <div className="p-4 border border-gray-300 bg-gray-50 rounded-lg">
                <h4 className="font-semibold text-gray-800">Disposal Methods</h4>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Recycle:</strong> Materials like paper, plastic, E-waste, glass, and metal are sent to local recyclers.</li>
                  <li><strong>Composting:</strong> Organic matter composted using aerobic composting methods.</li>
                  <li><strong>Incineration:</strong> Sanitary waste is incinerated with a four-stage filtration process.</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Upcycling Studio Section */}
          <section className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-800">Upcycling Studio</h3>
            <p className="text-gray-600">
              Upcycling involves repurposing discarded items, transforming them into something useful or beautiful again. It can range from simple redecoration to more creative renovation projects.
            </p>
          </section>

          {/* Paper Usage Policy Section */}
          <section className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-800">Paper Usage Policy</h3>
            <p className="text-gray-600">
              Through digitization, we have reduced paper usage and significantly contributed to environmental sustainability. This initiative has saved approximately ₹2,00,000 per semester and conserved 2880 reams of paper, 6.7 tons of paper, and 172 trees annually.
            </p>
          </section>

          {/* Liquid Waste Management Section */}
          <section className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-800">Liquid Waste Management</h3>
            <p className="text-gray-600">
              The Sewage Treatment Plant (STP) at Kumaraguru Institutions uses Moving Bed Biofilm Reactor (MBBR) Technology, ensuring sustainable wastewater recycling and reuse for landscape irrigation.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-4 border border-gray-300 bg-gray-50 rounded-lg">
                <ul className="list-disc pl-6 space-y-2">
                  <li>Capacity: 1 MLD</li>
                  <li>Water Treated Daily: 7 Lakh liters</li>
                  <li>100% Wastewater Recycling</li>
                  <li>Reuse for Landscape Irrigation</li>
                </ul>
              </div>
            </div>
          </section>

        </div>
      </div>
      <Footer />
    </>
  );
};

export default WasteManagement;
