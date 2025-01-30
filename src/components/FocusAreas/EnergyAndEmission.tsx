import { FaArrowLeft } from 'react-icons/fa';
import Footer from "../Footer";
import Header from "../Header";
import { useNavigate } from "react-router-dom";

const EnergyAndEmission = () => {
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
          Energy and Emission
        </h2>

        <div className="p-6 text-gray-700 space-y-6">
          {/* General Energy Overview */}
          <section className="space-y-4">
            <p>
              The campus currently operates on 36% renewable energy, with 30%
              of this generated from solar power at a capacity of 250 kW. We are
              actively working to expand our solar power plant and procure wind
              energy, aiming to increase our solar capacity to 4 MW. This
              initiative will enable us to achieve nearly 60% of our total energy
              consumption from renewable sources.
            </p>
          </section>

          {/* Solar Energy Section */}
          <section className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-800">Solar Energy</h3>
            <p>
              Installation of 250 kW Solar Power Station as a green energy
              initiative. Initially, a 50kW solar power station was installed on
              B-Block rooftop (5000 Sq feet) and has been operational since
              October 15th, 2016. Another 200 kW Solar Power station has been
              installed on C and E blocks (20,000 Sq.feet) on 5th July 2018 and
              is in operation. The total investment cost accounts to 1.5 Crore.
              The MNRE/TEDA grant of Rs. 45 Lakhs has been received by the EEE
              department, KCT.
            </p>
            <p>
              The inverter in the solar power station uses the advanced SVPWM
              (Space Vector Pulse Width Modulation) technique with MLI
              (Multi-level Inverter) based configuration, which produces
              harmonic-free power generation meeting the IEEE standards
              requirements. It also incorporates SCADA (Supervisory Control and
              Data Acquisition System) and IoT (Internet of Things) based online
              monitoring system which can monitor daily power generation data
              through an online and mobile app.
            </p>
            <p>
              The 250 KW Solar Power Station uses polycrystalline-based Photo
              Voltaic panels of 25,500 sq.ft. area installed with 763 panels (on
              B, C, E Blocks) with GRID connectivity which can produce 34,875
              units per month on average.
            </p>
            <p>
              Cost saving in electricity bill of Approx. Rs. 2,79,000/- per
              month. It has resulted in Kumaraguru EB bill savings of Rs. 35
              Lakhs per annum.
            </p>
          </section>

          {/* Wind Energy Section */}
          <section className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-800">Wind Energy Procurement</h3>
            <p>
              In addition to the onsite solar power station, we purchase 65,000
              units of wind energy each month, further decreasing reliance on
              non-renewable energy sources and reinforcing our commitment to
              sustainable energy solutions.
            </p>
          </section>

          {/* Digital Power Monitoring System */}
          <section className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-800">Digital Power Monitoring System</h3>
            <p>
              We utilize an advanced digital power monitoring system located in
              Power House 1 to track and manage energy consumption efficiently.
              This system focuses on monitoring the Academic Block, offering
              real-time data through user-friendly software dashboards.
            </p>
            <p>
              On average, 10,000 to 15,000 kVA of power is consumed daily,
              highlighting the significance of effective energy management. The
              system helps identify energy consumption trends, enabling optimized
              usage and reduced wastage.
            </p>
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default EnergyAndEmission;
