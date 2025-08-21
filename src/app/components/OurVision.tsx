"use client";
import { motion } from "framer-motion";
import React from "react";

interface visionProps {
  id?: string;
}

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const fadeUpVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

const OurVision = ({ id }: visionProps) => {
  return (
    <motion.section
      id={id}
      className="relative w-full flex flex-col md:flex-row items-stretch justify-center overflow-hidden bg-[#1D1E3D] "
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
      // border added via Tailwind
    >
      {/* Center vertical divider: only on md and above */}
      <div className="hidden md:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[72%] w-[2px] bg-[#737897] opacity-80 z-10" />
      {/* Left half: vision */}
      <div className="flex-1 flex flex-col items-center justify-center px-4 py-8 md:px-8 md:py-14 text-center text-white">
        <motion.div
          variants={fadeUpVariants}
          className="w-full flex flex-col items-center justify-center"
        >
          <h3 className="text-lg md:text-3xl font-bold mb-2">Our Vision</h3>
          <p className="text-sm md:text-lg leading-relaxed max-w-md mx-auto px-2">
            To be the most trusted partner for building future-ready systems — where AI, engineering, and governance converge.
            <br />
            A&amp;P Works is your operating system for high-velocity transformation — bootstrapped, productized, and legendary in execution.
          </p>
        </motion.div>
      </div>
      {/* Right half: mission */}
      <div className="flex-1 flex flex-col items-center justify-center px-4 py-8 md:px-8 md:py-14 text-center text-white">
        <motion.div
          variants={fadeUpVariants}
          className="w-full flex flex-col items-center justify-center"
        >
          <h3 className="text-lg md:text-3xl font-bold mb-2">Our Mission</h3>
          <p className="text-sm md:text-lg leading-relaxed max-w-md mx-auto px-2">
            Empowering founders, CXOs, and delivery leaders through hands-on architecture, AI integration, and ProjectOps systems.
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default OurVision;
