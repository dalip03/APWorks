"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const services = [
  {
    id: "engineering",
    title: "From Idea to Infrastructure",
    label: "Engineering Services",
    subtitle: "MVPs, Data Platforms, Scalable Systems",
    subtitle2: "Modern engineering for systems that scale.",
    description:
      "Modern engineering to take you from intent to infrastructure. We architect and deliver production-grade platforms — from apps, data runtimes, and scalable networked foundations — to help you launch faster, scale smarter, and own your IP.",
    image: "/img/service1.png",
  },
  {
    id: "projectops",
    title: "Structure That Drives Delivery",
    label: "ProjectOps Execution Systems",
    subtitle: "PMO Strategy, Delivery Governance, Portfolio Rituals",
    subtitle2: "Where strategy meets execution velocity.",

    description:
      "We embed execution rhythm into your delivery environment — systematic rituals, stakeholder orchestration, and lean governance. Our systems drive throughput without chaos, keeping momentum at every level of your portfolio.",
    image: "/img/service4.png",
  },
  {
    id: "consulting",
    title: "Strategy That Ships",
    label: "Tech & Business Consulting",
    subtitle: "Fractional CTO, Modernization, Strategic IT Advisory",
    subtitle2: "Embedded leadership. Deep alignment.",

    description:
      "We go beyond pitch decks with ambition. Whether it’s high-velocity scaling, compliance, or restructured leadership, we help founders lead confidently with evidence — embedding decision frameworks that scale as you grow.",
    image: "/img/service5.png",
  },
];

export default function OurServices() {
  const [activeService, setActiveService] = useState(services[0]);

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
    <section className="bg-[#17143C] text-white py-20 px-4 sm:px-8 md:px-16 min-h-screen flex items-center justify-center">
      <div className="flex flex-col md:flex-row items-center justify-center gap-10 w-full">
        {/* Left: Tabs */}
        <motion.div
          className="w-full md:w-1/3 flex flex-col items-center md:items-start text-center md:text-left"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={slideFadeLeft}
        >
          <p className="text-sm text-gray-300 mb-2">(Our Services)</p>
          <h2 className="text-2xl sm:text-3xl font-semibold mb-8 leading-snug">
            Our Industry Leading <br /> Tech Solutions
          </h2>

          <div className="flex flex-col gap-4 items-center md:items-start w-full max-w-xs">
            {services.map((service) => (
              <button
                key={service.id}
                onClick={() => setActiveService(service)}
                className={`text-left px-4 py-2 rounded-md font-medium transition-all duration-300 w-full ${
                  activeService.id === service.id
                    ? "bg-blue-500 text-white"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                {service.label}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Right: Content Card */}
        <motion.div
          className="w-full md:w-1/3 flex justify-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={slideFadeRight}
        >
          <div className="border p-3 bg-white rounded-lg w-full max-w-md">
            <div className="bg-white text-black rounded-xl overflow-hidden">
              <Image
                src={activeService.image}
                alt={activeService.title}
                width={600}
                height={300}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <p className="text-xs text-[#3686FD] font-semibold uppercase mb-2">
                  {activeService.subtitle}
                </p>
                <h3 className="text-lg font-bold mb-2">
                  {activeService.title}
                </h3>
                <p className="text-xs text-[#3686FD99] font-semibold uppercase mb-2">
                  {activeService.subtitle2}
                </p>
                <p className="text-sm text-gray-700">
                  {activeService.description}
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
