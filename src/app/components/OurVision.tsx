"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import React from "react";

const OurVision = () => {
  return (
    <section className="relative w-full h-[80vh] md:h-[70vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <Image
        src="/img/ourvision.png"
        alt="Vision Background"
        fill
        className="object-cover object-center"
        priority
      />

      {/* Black Overlay */}

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative z-20 text-white text-center px-6 max-w-3xl"
      >
        <h2 className="text-3xl md:text-5xl font-bold mb-4">Our Vision</h2>
        <p className="text-base md:text-lg mb-6">
          To be the most trusted partner for building future-ready systems —
          where AI, engineering, and governance converge. A&amp;P Works is your
          operating system for high-velocity transformation — bootstrapped,
          productized, and legendary in execution.
        </p>
        <button className="bg-[#3686FD] hover:bg-[#2e76e4] transition-colors text-white px-6 py-2 rounded-full font-semibold">
          Contact Us
        </button>
      </motion.div>
    </section>
  );
};

export default OurVision;
