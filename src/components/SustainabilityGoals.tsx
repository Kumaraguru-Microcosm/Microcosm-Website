import React, { useState } from "react";
import { motion } from "framer-motion";
import awareness from "../assets/Home/awareness.png";
import biodiversity from "../assets/Home/biodiversity.png";
import energy from "../assets/Home/Energy.png";
import waste from "../assets/Home/waste.png";
import water from "../assets/Home/water.png";

interface FocusArea {
  id: number;
  title: string;
  overview: string;
  fullDescription: string;
  icon: string;
}

const focusAreas: FocusArea[] = [
  {
    id: 1,
    title: "Energy And Emission",
    overview: "Reduce the per-capita carbon footprint of the campus by 40% in 2030. Learn about our sustainable energy efforts.",
    fullDescription: "Reduce the per-capita carbon footprint of the campus by 40% in 2030. Learn about our sustainable energy efforts. We are implementing solar panels, wind energy, and smart grid solutions to optimize energy consumption across the campus.",
    icon: energy,
  },
  {
    id: 2,
    title: "Water Security",
    overview: "Become a water resilient campus by using various methods to harvest every drop of rainwater.",
    fullDescription: "Become a water resilient campus by using various methods to harvest every drop of rainwater. We employ rainwater harvesting, wastewater treatment, and water conservation strategies to ensure sustainability.",
    icon: water,
  },
  {
    id: 3,
    title: "Waste Management",
    overview: "Zero Waste Campus by 2024 by making sure all the waste generated in the campus is recycled and reused.",
    fullDescription: "Zero Waste Campus by 2024 by making sure all the waste generated in the campus is recycled and reused. Our initiatives include composting organic waste, reducing single-use plastics, and implementing recycling programs.",
    icon: waste,
  },
  {
    id: 4,
    title: "Biodiversity Enrichment",
    overview: "Kumaraguru campus is home to 4000+ Trees, 65+ species of birds, and 40+ species of butterflies.",
    fullDescription: "Kumaraguru campus is home to 4000+ Trees, 65+ species of birds, and 40+ species of butterflies. We focus on habitat restoration, native plant cultivation, and conservation awareness programs.",
    icon: biodiversity,
  },
  {
    id: 5,
    title: "Awareness",
    overview: "Take Sustainability Education to every student and staff in Kumaraguru Campus through various initiatives.",
    fullDescription: "Take Sustainability Education to every student and staff in Kumaraguru Campus through various initiatives. Our programs include workshops, sustainability clubs, and environmental impact projects.",
    icon: awareness,
  },
];

const FocusAreas: React.FC = () => {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  return (
    <section className="min-h-screen flex flex-col justify-center items-center bg-white text-center px-6 py-12">
      <motion.h2
        className="text-3xl md:text-4xl font-bold  mt-8 mb-10"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        Focus Areas And Sustainable Goals
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl w-full">
        {focusAreas.map((area, index) => (
          <motion.div
            key={area.id}
            className="flex flex-col items-center text-center p-6 border border-gray-200 rounded-lg shadow-md bg-gray-50"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <img src={area.icon} alt={area.title} className="w-16 h-16 mb-4" />
            <h3 className="text-xl font-semibold mb-2">{area.title}</h3>
            <p className="text-gray-600 mb-4">
              {expandedId === area.id ? area.fullDescription : area.overview}
            </p>
            <button
              className="bg-green-600 text-white px-4 py-2 rounded-full hover:bg-green-700 transition"
              onClick={() => setExpandedId(expandedId === area.id ? null : area.id)}
            >
              {expandedId === area.id ? "SHOW LESS" : "READ MORE"}
            </button>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default FocusAreas;
