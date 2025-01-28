import React from "react";
import { motion } from "framer-motion";
import awareness from "../assets/Home/awareness.png";
import biodiversity from "../assets/Home/biodiversity.png";
import energy from "../assets/Home/Energy.png";
import waste from "../assets/Home/waste.png";
import water from "../assets/Home/water.png";

interface FocusArea {
  id: number;
  title: string;
  description: string;
  icon: string;
}

const focusAreas: FocusArea[] = [
  {
    id: 1,
    title: "Energy And Emission",
    description: "Reduce the per-capita carbon footprint of the campus by 40% in 2030.",
    icon: energy,
  },
  {
    id: 2,
    title: "Water Security",
    description: "Become a water resilient campus by using various methods to harvest every drop of rainwater.",
    icon: water,
  },
  {
    id: 3,
    title: "Waste Management",
    description: "Zero Waste Campus by 2024 by making sure all the waste generated in the campus is recycled and reused.",
    icon: waste,
  },
  {
    id: 4,
    title: "Biodiversity Enrichment",
    description: "Kumaraguru campus is home to 4000+ Trees, 65+ species of birds, and 40+ species of butterflies.",
    icon: biodiversity,
  },
  {
    id: 5,
    title: "Awareness",
    description: "Take Sustainability Education to every student and staff in Kumaraguru Campus through various initiatives.",
    icon: awareness,
  },
];

const FocusAreas: React.FC = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center bg-white text-center px-6 py-12">
      <motion.h2
        className="text-3xl md:text-4xl font-bold mb-10"
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
            <p className="text-gray-600 mb-4">{area.description}</p>
            <button className="bg-green-600 text-white px-4 py-2 rounded-full hover:bg-green-700 transition">
              READ MORE
            </button>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default FocusAreas;