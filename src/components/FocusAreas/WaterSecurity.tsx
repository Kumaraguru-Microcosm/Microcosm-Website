import { FaArrowLeft } from 'react-icons/fa'; // Importing the arrow icon
import Footer from "../Footer";
import Header from "../Header";
import { useNavigate } from 'react-router-dom';

const WaterSecurity = () => {
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
          Water Security
        </h2>

        <div className="p-6 text-gray-700 space-y-6">
          {/* Water Resilience Section */}
          <section className="space-y-4">
            <p className="text-gray-600">
              Become a water resilient campus by using various methods to harvest every drop of rainwater, recycle used water, and optimize water usage on campus.
            </p>
          </section>

          {/* Aerators Installation Section */}
          <section className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-800">Aerators Installation</h3>
            <p className="text-gray-600">
              Optimizing water usage across the campus by enhancing its wastewater treatment and management systems. This includes the installation of water-saving aerators in hostels, classrooms, and restrooms, which reduced the flow rate from 7 LPM to 2 LPM. This has resulted in daily water savings of approximately 30,000 liters, translating to an estimated annual savings of 10.95 million liters and reducing overall campus water consumption by about 5%.
            </p>
          </section>

          {/* Water Metering Section */}
          <section className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-800">Water Metering</h3>
            <p className="text-gray-600">
              Smart water meters were installed in various buildings to monitor water usage in real time. This system allows for the detection of leaks, optimization of water usage patterns, and data-driven decision-making for water management.
            </p>
          </section>

          {/* Water Conservation Section */}
          <section className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-800">Water Conservation</h3>
            <p className="text-gray-600">
              The water conservation measures effectively capture stormwater, preventing flooding during heavy rains and facilitating gradual water infiltration to improve local aquifer levels. The rainwater harvesting (RWH) systems and percolation ponds can capture up to 85,000 liters of water per hour during moderate rainfall, with over 8.3 million liters successfully harvested in a single instance last monsoon season.
            </p>
          </section>

          {/* Details about RWH Models Section */}
          <section className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-800">Details about the RWH models and Percolation Ponds Established in the Campus</h3>

            {/* Recharge Well */}
            <div className="space-y-2">
              <h4 className="text-lg font-semibold text-gray-800">Recharge Well</h4>
              <ul className="list-disc pl-6 space-y-2">
                <li>A 6” dia tube well is drilled for a depth of 100m - 125m, with casing pipe (both plain and perforated) erection.</li>
                <li>A filter chamber of size 3.35m x 2m x 2m depth is constructed around the tube well with a brick outer wall.</li>
                <li>The filter chamber is filled with random rubble soling for 1.25m height and 40mm metal for 0.5m height.</li>
                <li>The perimeter of the filter bed is provided with a brick border, and the surrounding areas are channelized for rainwater flow into the RWH structure.</li>
              </ul>
            </div>

            {/* Percolation Pond */}
            <div className="space-y-2">
              <h4 className="text-lg font-semibold text-gray-800">Percolation Pond</h4>
              <ul className="list-disc pl-6 space-y-2">
                <li>Two percolation ponds were constructed to capture stormwater runoff from roads and paved areas.</li>
                <li>The ponds, strategically located behind the STP and Boys' Hostel, have a combined capacity of 8.3 million liters.</li>
                <li>One percolation pond was created by student volunteers on 2nd October 2019, filled up with good monsoon rains.</li>
              </ul>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default WaterSecurity;
