import React, { useEffect, useRef, useState } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
  FaWhatsapp,
} from "react-icons/fa";

import { motion } from "framer-motion";

const Contact = () => {
  const formRef = useRef(null);
  const [loading, setLoading] = useState(false);

  /* ================= MAP ================= */
  useEffect(() => {
    const lat = 32.1877;
    const lng = 74.1945;

    const map = L.map("map").setView([lat, lng], 13);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: "&copy; OpenStreetMap contributors",
    }).addTo(map);

    L.marker([lat, lng])
      .addTo(map)
      .bindPopup("Grocify Store (Demo Location)")
      .openPopup();

    return () => map.remove();
  }, []);

  /* ================= FORM ================= */
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      toast.success("Message sent successfully!");
      formRef.current.reset(); // form clear
      setLoading(false);
    }, 1500);
  };

  /* ================= ANIMATIONS ================= */
  const pageAnim = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        when: "beforeChildren",
        staggerChildren: 0.15,
      },
    },
  };

  const sectionAnim = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 14,
      },
    },
  };

  const heroTitle = {
    hidden: { opacity: 0, y: -40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const iconAnim = {
    hover: {
      scale: 1.3,
      rotate: 10,
      transition: { type: "spring", stiffness: 300 },
    },
  };

  return (
    <motion.div
      variants={pageAnim}
      initial="hidden"
      animate="visible"
      className="bg-white text-zinc-900 min-h-screen"
    >
      {/* ================= HERO ================= */}
      <div className="bg-gradient-to-r from-orange-400 to-orange-500 h-[35vh] flex items-center justify-center">
        <motion.h1
          variants={heroTitle}
          className="text-5xl font-bold text-white"
        >
          Contact Us
        </motion.h1>
      </div>

      {/* ================= CONTENT ================= */}
      <div className="max-w-[1200px] mx-auto py-16 px-6 grid grid-cols-1 md:grid-cols-2 gap-14">
        {/* LEFT INFO */}
        <motion.div variants={sectionAnim} className="space-y-6">
          <h2 className="text-3xl font-bold">Get In Touch</h2>
          <p className="text-zinc-600">
            This is a demo contact page for the Grocify project.
          </p>

          <div className="flex items-center gap-3">
            <motion.span
              whileHover="hover"
              variants={iconAnim}
              className="text-orange-500 text-xl"
            >
              <FaMapMarkerAlt />
            </motion.span>
            <span>Gujranwala, Pakistan (Demo)</span>
          </div>

          <div className="flex items-center gap-3">
            <motion.span
              whileHover="hover"
              variants={iconAnim}
              className="text-orange-500 text-xl"
            >
              <FaEnvelope />
            </motion.span>
            <span>support@grocify.com</span>
          </div>

          <div className="flex items-center gap-3">
            <motion.span
              whileHover="hover"
              variants={iconAnim}
              className="text-orange-500 text-xl"
            >
              <FaPhoneAlt />
            </motion.span>
            <span>+92 300 1234567</span>
          </div>

          <motion.a
            href="https://wa.me/923001234567"
            target="_blank"
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center gap-3 bg-green-500 text-white px-6 py-3 rounded-xl font-semibold mt-4"
          >
            <motion.span whileHover={{ rotate: 15 }}>
              <FaWhatsapp />
            </motion.span>
            Chat on WhatsApp
          </motion.a>
        </motion.div>

        {/* FORM */}
        <motion.form
          variants={sectionAnim}
          ref={formRef}
          onSubmit={handleSubmit}
          className="bg-zinc-50 p-8 rounded-3xl shadow space-y-5"
        >
          <input
            type="text"
            placeholder="Your Name"
            required
            className="w-full p-4 border rounded-xl focus:outline-orange-400"
          />

          <input
            type="email"
            placeholder="Email Address"
            required
            className="w-full p-4 border rounded-xl focus:outline-orange-400"
          />

          <textarea
            rows="4"
            placeholder="Your Message"
            required
            className="w-full p-4 border rounded-xl focus:outline-orange-400"
          />

          <button
            type="submit"
            disabled={loading}
            className={`w-full py-4 rounded-xl font-bold text-white transition ${
              loading
                ? "bg-orange-300 cursor-not-allowed"
                : "bg-gradient-to-r from-orange-400 to-orange-500"
            }`}
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </motion.form>
      </div>

      {/* ================= MAP ================= */}
      <motion.div
        variants={sectionAnim}
        className="max-w-[1200px] mx-auto px-6 pb-20"
      >
        <div id="map" className="h-[400px] rounded-2xl" />
      </motion.div>

      <ToastContainer position="top-right" />
    </motion.div>
  );
};

export default Contact;
