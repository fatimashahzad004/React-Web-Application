import React from "react";
import { motion } from "framer-motion";
import {
  FaUsers,
  FaShoppingBasket,
  FaHeadset,
  FaLeaf,
} from "react-icons/fa";

const About = () => {
  const fadeUp = {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
    viewport: { once: true },
  };

  const iconHover = {
    hover: {
      scale: 1.25,
      rotate: 8,
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
          About Us
        </motion.h1>
      </div>

      {/* CONTENT */}
      <div className="max-w-[1400px] mx-auto py-20 px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        {/* IMAGE / STORY */}
        <motion.div
          {...fadeUp}
          className="bg-zinc-100 h-[380px] rounded-3xl flex flex-col items-center justify-center gap-4"
        >
          <motion.div
            whileHover="hover"
            variants={iconHover}
            className="text-orange-500 text-6xl"
          >
            <FaLeaf />
          </motion.div>
          <span className="text-zinc-400 text-lg">
            Fresh & Organic Journey
          </span>
        </motion.div>

        {/* TEXT */}
        <motion.div {...fadeUp} className="space-y-6">
          <h2 className="text-4xl font-bold text-zinc-800">
            Who We Are
          </h2>

          <p className="text-zinc-600 text-lg leading-relaxed">
            Grocify is a modern grocery platform built to deliver fresh,
            organic, and trusted products directly to your doorstep.
          </p>

          <p className="text-zinc-600 text-lg leading-relaxed">
            Since 2024, we’ve focused on quality, affordability, and an
            excellent customer experience.
          </p>

          {/* STATS */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-zinc-50 rounded-2xl p-6 text-center shadow"
            >
              <motion.div
                whileHover="hover"
                variants={iconHover}
                className="text-orange-500 text-3xl mx-auto mb-2"
              >
                <FaUsers />
              </motion.div>
              <h3 className="text-3xl font-bold text-orange-500">
                10k+
              </h3>
              <p className="text-zinc-500">Customers</p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-zinc-50 rounded-2xl p-6 text-center shadow"
            >
              <motion.div
                whileHover="hover"
                variants={iconHover}
                className="text-orange-500 text-3xl mx-auto mb-2"
              >
                <FaShoppingBasket />
              </motion.div>
              <h3 className="text-3xl font-bold text-orange-500">
                500+
              </h3>
              <p className="text-zinc-500">Products</p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-zinc-50 rounded-2xl p-6 text-center shadow"
            >
              <motion.div
                whileHover="hover"
                variants={iconHover}
                className="text-orange-500 text-3xl mx-auto mb-2"
              >
                <FaHeadset />
              </motion.div>
              <h3 className="text-3xl font-bold text-orange-500">
                24/7
              </h3>
              <p className="text-zinc-500">Support</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
