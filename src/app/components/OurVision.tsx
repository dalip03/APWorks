"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import React from "react";

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

const OurVision = () => {
  return (
    <motion.section
      className="relative w-full md:h-[420px] flex flex-row items-stretch justify-center overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      {/* Left half: image with overlay and vision text */}
      <div className="relative flex-1 flex items-center justify-center border-r border-gray-600 ">
        <Image
          src="/img/ourvision.png" // your actual background image path
          alt="Vision Background"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-black/[0.18] z-10" />
        <motion.div
          variants={fadeUpVariants}
          className="relative z-20 flex flex-col items-center justify-center h-full w-full text-white text-center px-6"
        >
          <h3 className="text-lg md:text-4xl font-bold mb-2">Our Vision</h3>
          <p className="text-[13px] md:text-lg leading-relaxed max-w-sm mx-auto">
            To be the most trusted partner for building future-ready systems — where AI, engineering, and governance converge.
            A&P Works is your operating system for high-velocity transformation — bootstrapped, productized, and legendary in execution.
          </p>
        </motion.div>
      </div>
      {/* Right half: solid bg, mission text */}
      <div className="flex-1 bg-[#23264c] flex items-center justify-center">
        <motion.div
          variants={fadeUpVariants}
          className="text-white text-center px-6 flex flex-col items-center justify-center w-full h-full"
        >
          <h3 className="text-lg md:text-4xl font-bold mb-2">Our Mission</h3>
          <p className="text-[13px] md:text-lg leading-relaxed max-w-sm mx-auto">
            Empowering founders, CXOs, and delivery leaders through hands-on architecture, AI integration, and ProjectOps systems.
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default OurVision;
