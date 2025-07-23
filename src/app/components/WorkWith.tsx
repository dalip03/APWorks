"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const points = [
  {
    icon: "/img/tick-circle.png",
    text: "Founders and product leaders seeking clarity and speed",
  },
  {
    icon: "/img/tick-circle.png",
    text: "Growth-stage teams scaling their platforms and practices",
  },
  {
    icon: "/img/tick-circle.png",
    text: "Enterprises modernizing data and execution infrastructure",
  },
  {
    icon: "/img/tick-circle.png",
    text: "Financial firms building high-trust, high-velocity systems",
  },
  {
    icon: "/img/tick-circle.png",
    text: "Government and innovation units with mission-critical needs",
  },
];

const WorkWith = () => {
  // Animation variants
  const slideFadeLeft = {
    hidden: { opacity: 0, x: -40 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  };

  const slideFadeRight = {
    hidden: { opacity: 0, x: 40 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  };

  return (
    <section className="max-w-7xl mx-auto px-4 py-16 flex flex-col md:flex-row items-center gap-10 bg-white">
      {/* Left: Image */}
      <motion.div
        className="w-full md:w-1/2 flex justify-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={slideFadeLeft}
      >
        <Image
          src="/img/workwithus.png"
          alt="Who We Work With"
          width={400}
          height={400}
          className="rounded-lg object-cover"
          priority
        />
      </motion.div>

      {/* Right: Text + Points */}
      <motion.div
        className="w-full md:w-1/2 text-gray-900"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={slideFadeRight}
      >
        <h2 className="text-5xl font-bold mb-8">Who We Work With</h2>

        <ul className="space-y-5 mb-8">
          {points.map(({ icon, text }, idx) => (
            <li key={idx} className="flex items-center gap-4">
              <div className="flex-shrink-0 w-4 h-4 relative">
                <Image src={icon} alt="icon" fill sizes="32px" />
              </div>
              <p className="text-md">{text}</p>
            </li>
          ))}
        </ul>

        <button className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition">
          Get Started
        </button>
      </motion.div>
    </section>
  );
};

export default WorkWith;
