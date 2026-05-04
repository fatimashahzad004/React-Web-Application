import React from "react";
import { motion } from "framer-motion";
import {
  FaTractor,
  FaSeedling,
  FaBoxOpen,
} from "react-icons/fa";

const Sourcing = () => {
  const fadeUp = {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
    viewport: { once: true },
  };

  const iconHover = {
    hover: {
      scale: 1.3,
      rotate: 6,
      transition: { type: "spring", stiffness: 300 },
    },
  };

  return (
    <div className="bg-white min-h-screen text-zinc-900">
      {/* HERO */}
      <div className="bg-gradient-to-r from-orange-400 to-orange-500 h-[40vh] flex items-center justify-center">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-6xl text-white font-bold"
        >
          Sourcing
        </motion.h1>
      </div>

      {/* CONTENT */}
      <div className="max-w-[1400px] mx-auto py-20 px-6">
        {/* INTRO */}
        <motion.div {...fadeUp} className="text-center mb-16">
          <h2 className="text-4xl font-bold text-zinc-800 mb-4">
            Fresh From Farmers
          </h2>
          <p className="text-zinc-600 max-w-2xl mx-auto text-lg">
            We partner directly with local farmers to ensure quality,
            freshness, and sustainability.
          </p>
        </motion.div>

        {/* CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Card 1 */}
          <motion.div
            {...fadeUp}
            whileHover={{ scale: 1.05 }}
            className="bg-zinc-100 p-8 rounded-3xl text-center shadow-sm"
          >
            <motion.div
              whileHover="hover"
              variants={iconHover}
              className="text-orange-500 text-5xl mb-4 mx-auto"
            >
              <FaTractor />
            </motion.div>
            <h3 className="text-2xl font-bold text-zinc-800 mb-2">
              Local Farms
            </h3>
            <p className="text-zinc-600">
              Supporting nearby farmers and strengthening communities.
            </p>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            {...fadeUp}
            whileHover={{ scale: 1.05 }}
            className="bg-zinc-100 p-8 rounded-3xl text-center shadow-sm"
          >
            <motion.div
              whileHover="hover"
              variants={iconHover}
              className="text-orange-500 text-5xl mb-4 mx-auto"
            >
              <FaSeedling />
            </motion.div>
            <h3 className="text-2xl font-bold text-zinc-800 mb-2">
              Organic Only
            </h3>
            <p className="text-zinc-600">
              Free from harmful chemicals and pesticides.
            </p>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            {...fadeUp}
            whileHover={{ scale: 1.05 }}
            className="bg-zinc-100 p-8 rounded-3xl text-center shadow-sm"
          >
            <motion.div
              whileHover="hover"
              variants={iconHover}
              className="text-orange-500 text-5xl mb-4 mx-auto"
            >
              <FaBoxOpen />
            </motion.div>
            <h3 className="text-2xl font-bold text-zinc-800 mb-2">
              Daily Delivery
            </h3>
            <p className="text-zinc-600">
              Harvested and delivered within 24 hours.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Sourcing;
