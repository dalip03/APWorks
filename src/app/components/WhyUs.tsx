"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import React from "react";

const points = [
  "We operate like insiders, not vendors",
  "We think in systems — not deliverables",
  "We balance architecture and execution",
  "We bring delivery ownership, not advisory slides",
  "We make governance a habit, not an audit",
];

const WhyUs = () => {
  return (
    <section className="px-6 md:px-16 py-20 bg-white">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Side - Text */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-6 text-left"
        >
          {/* Small Badge */}
          <div className="inline-block border border-gray-300 rounded-2xl px-4 py-1 text-sm font-medium text-gray-700">
            WHY A&amp;P WORKS
          </div>

          {/* Heading */}
          <h2 className="text-3xl md:text-6xl font-bold text-black">
            Built for Teams That Build
          </h2>

          {/* Bullet Points */}
          <ul className="space-y-4 pt-4">
            {points.map((point,index) => (
              <div key={index} className="flex items-start gap-2">
                {/* Icon as Image */}
                <span className="pt-1">
                  <Image
                    src="/img/star.png"
                    alt="tick"
                    width={20}
                    height={20}
                    className="object-contain"
                  />
                </span>

                {/* Point Text */}
                <span className="text-base text-black">{point}</span>
              </div>
            ))}
          </ul>

          {/* Button */}
          <button className="mt-6 flex items-center gap-2 bg-[#3686FD] hover:bg-[#2e76e4] text-white pr-2 pl-6 py-2 rounded-full transition-colors">
            Visit Blogs{" "}
            <Image
              src="/img/arrow.png"
              alt="Blog Icon"
              width={30}
              height={30}
            />
          </button>
        </motion.div>

        {/* Right Side - Image */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="w-full"
        >
          <Image
            src="/img/whyus.png"
            alt="Why Us"
            width={600}
            height={600}
            className="w-full h-auto object-contain"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default WhyUs;
