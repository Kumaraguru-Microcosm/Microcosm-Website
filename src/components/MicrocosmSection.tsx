import { motion } from "framer-motion";

export default function MicrocosmSection() {
  return (
    <section className="w-full bg-white py-32 px-6 md:px-24">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          className="text-5xl font-bold text-black"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Microcosm
        </motion.h2>
        <motion.p
          className="mt-6 text-gray-700 text-lg leading-relaxed"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Kumaraguru Microcosm is an eco-sensitive initiative to create a 
          coexisting, inclusive, and sustainable environment for a quality life 
          of humans and all other living partners. With a vision to build a 
          balanced and influential campus ecosystem, Microcosm is paving the way 
          for an eco-future.
        </motion.p>
        <motion.p
          className="mt-6 text-gray-600 text-lg"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
        >
          This multi-year program is focused on driving impactful projects 
          that enhance environmental sustainability and promote responsible 
          practices. By 2030, Microcosm aims to establish a fully sustainable 
          ecosystem while continuously evolving to embrace future innovations.
        </motion.p>
        <motion.div
          className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-12 text-left"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
        >
          <div>
            <h3 className="text-2xl font-semibold text-green-700">Our Mission</h3>
            <ul className="mt-3 text-gray-600 space-y-2">
              <li>To create a self-sustaining environment that harmonizes human progress with ecological preservation.</li>
              <li>To implement innovative eco-friendly solutions for long-term sustainability.</li>
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-green-700">Our Vision</h3>
            <ul className="mt-3 text-gray-600 space-y-2">
              <li>To become a role model for sustainable living by implementing environmental solutions.</li>
              <li>To inspire and educate future generations about the importance of sustainability.</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
