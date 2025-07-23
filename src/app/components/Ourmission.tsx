"use client";

import { motion } from "framer-motion";
import React from "react";

const OurMission = () => {
  return (
    <section className="relative bg-[#1D1E3D] w-full h-[80vh] md:h-[70vh] flex items-center justify-center overflow-hidden">
      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative z-20 text-white text-center px-6 max-w-3xl"
      >
        <h2 className="text-3xl md:text-5xl font-bold mb-4">Our Mission</h2>
        <p className="text-base md:text-lg mb-6">
          Empowering founders, CXOs, and delivery leaders through hands-on
          architecture, AI integration, and ProjectOps systems.
        </p>
        <button className="bg-[#3686FD] hover:bg-[#2e76e4] transition-colors text-white px-6 py-2 rounded-full font-semibold">
          Contact Us
        </button>
      </motion.div>
    </section>
  );
};

export default OurMission;
