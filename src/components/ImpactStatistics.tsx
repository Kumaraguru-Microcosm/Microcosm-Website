import React from "react";
import CountUp from "react-countup";
import { motion } from "framer-motion";
import { Leaf, Sun } from "lucide-react"; // Replace with your icon library
import stat from "../assets/Home/impact.png"; // Replace with your image path

const ImpactStatistics = () => {
  const stats = [
    { id: 1, number: 500000, suffix: " liters", label: "Water treated daily", icon: <Sun /> },
    { id: 2, number: 250, suffix: " kW", label: "Renewable energy capacity", icon: <Sun /> },
    { id: 3, number: 70, suffix: "+ tons", label: "Waste recovered annually", icon: <Leaf /> },
    { id: 4, number: 4800, suffix: "+", label: "Trees on campus", icon: <Leaf /> },
    { id: 5, number: 95, suffix: "", label: "Bird species on campus", icon: <Leaf /> },
    { id: 6, number: 55, suffix: "", label: "Butterfly species on campus", icon: <Leaf /> },
  ];

  return (
    <section
      className="min-h-screen p-10 bg-gray-100 bg-cover bg-center bg-no-repeat flex flex-col items-center justify-start text-white"
      style={{ backgroundImage: `url(${stat})` }}
    >
      {/* Title Section */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl md:text-6xl font-extrabold mt-10"
      >
        Impact Statistics
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-xl md:text-2xl mt-5 max-w-3xl text-center"
      >
        These statistics showcase our dedication to sustainability and biodiversity on campus.
      </motion.p>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-16 gap-x-12 mt-20 w-full px-10">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: index * 0.2,
            }}
            className="flex flex-col items-center"
          >
            {/* Icon */}
            <div className="text-5xl mb-6">{stat.icon}</div>

            {/* Count */}
            <CountUp
              start={0}
              end={stat.number}
              duration={3}
              separator=","
              suffix={stat.suffix}
              className="text-4xl md:text-5xl font-bold"
            />

            {/* Label */}
            <p className="text-lg md:text-xl mt-4 text-center">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ImpactStatistics;
