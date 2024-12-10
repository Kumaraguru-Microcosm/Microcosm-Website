import React from "react";
import CountUp from "react-countup";
import { motion } from "framer-motion";
import impactStatics from "../assets/impactStatistics.png";

const ImpactStatistics = () => {
  const stats = [
    { id: 1, number: 500000, suffix: " liters", label: "Water treated daily" },
    { id: 2, number: 250, suffix: " kW", label: "Renewable energy capacity" },
    { id: 3, number: 70, suffix: "+ tons", label: "Waste recovered annually" },
    { id: 4, number: 4800, suffix: "+", label: "Trees on campus" },
    { id: 5, number: 95, suffix: "", label: "Bird species on campus" },
    { id: 6, number: 55, suffix: "", label: "Butterfly species on campus" },
  ];

  return (
    <section className="p-4 sm:pt-4 sm:pb-6 md:p-8 bg-gray-100">
      <div className="container mx-auto">
        {/* Section Title with Animation */}
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mt-4 sm:mt-6"
        >
          Impact Statistics
        </motion.h2>

        <div className="flex flex-col md:flex-row items-center gap-4 sm:gap-6">
          {/* Responsive Image */}
          <div className="w-full md:w-1/2 sm:mt-0 sm:mb-0">
            <motion.img
              src={impactStatics}
              alt="Infographic"
              style={{ height: "580px", objectFit: "contain" }}
              className="w-full object-contain rounded-lg sm:py-0"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
            />
          </div>

          <div className="w-full md:w-1/2">
            <div className="mb-4 text-center">
              {/* Section Description with Animation */}
              <motion.h3
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-lg sm:text-2xl md:text-3xl font-semibold text-gray-800"
              >
                Our Environmental Impact at a Glance
              </motion.h3>
              <motion.p
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-sm sm:text-lg md:text-xl text-gray-600 max-w-lg mx-auto mt-2 sm:mt-3"
              >
                These statistics highlight the positive changes we've made in
                preserving the environment, supporting sustainability, and
                fostering biodiversity on our campus.
              </motion.p>
            </div>

            {/* Stats Grid with Animation */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-3 sm:mt-5">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.2, // Stagger the animation delay for each stat
                  }}
                  className="flex flex-col items-center text-center"
                >
                  {/* Count-Up Animation */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <CountUp
                      start={0}
                      end={stat.number}
                      duration={10.5}
                      separator=","
                      suffix={stat.suffix}
                      className="text-2xl sm:text-3xl font-semibold text-green-600"
                    />
                  </motion.div>
                  <p className="text-base sm:text-lg md:text-xl mt-1 text-gray-600">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactStatistics;
