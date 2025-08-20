"use client";
import React, { useState } from "react";

interface serviceProps {
  id?: string;
}

const OurNewServices = ({ id }: serviceProps) => {
  const [activeCard, setActiveCard] = useState<number | null>(null);

  const handleCardClick = (index: number) => {
    // Toggle on small screens only
    if (window.innerWidth < 768) {
      setActiveCard(activeCard === index ? null : index);
    }
  };

  return (
    <section
      id={id}
      className="relative bg-[#1D1E3D] min-h-[600px] py-12 px-4 flex flex-col items-center justify-center"
    >
      {/* Headings */}
      <div className="mb-8 text-center">
        <div className="inline-block border border-gray-100/10 rounded-2xl px-4 py-1 text-sm font-medium text-white">
          Engineered for impact
        </div>
        <h2 className="text-white font-bold text-2xl sm:text-3xl md:text-4xl leading-tight mb-2">
          Our Offerings
        </h2>
      </div>

      {/* Quadrants layout */}
      <div className="relative max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 md:grid-rows-2 gap-2 bg-transparent z-10">
        {/* Top Left */}
        <div
          onClick={() => handleCardClick(0)}
          className={`relative p-4 min-h-[230px] rounded-md bg-[#292947] text-white overflow-hidden shadow-lg group cursor-pointer overflow-visible ${
            activeCard === 0 ? "hover" : ""
          }`}
        >
          <span
            aria-hidden="true"
            className="absolute inset-0 bg-[#3686FD] rounded-md transform scale-0 transition-transform duration-[1000ms] origin-bottom-right group-hover:scale-100 hover:scale-100"
            style={{ zIndex: 0 }}
          />
          <div className="relative z-10">
            <h3 className="font-bold text-2xl mb-1">Engineering Services</h3>
            <div className="text-[#3686FD] font-semibold text-sm mb-1 tracking-wider group-hover:text-white hover:text-white">
              MVPs, Data Platforms, Scalable Systems
            </div>
            <div className="font-bold text-3xl mb-1 text-white">
              From Idea to Infrastructure
            </div>
            <p className="text-[#FFFFFF99] text-sm pr-30 mb-2 group-hover:text-white hover:text-white">
              We design and deliver production-grade platforms — from
              zero-to-one MVPs to enterprise-scale rebuilds. Our modular PODs,
              clean architectures, and data-native foundations help you launch
              faster, scale smarter.
            </p>
          </div>
          <img
            src="/img/serviceimg1.svg"
            alt=""
            className="absolute right-0 bottom-0 h-30 w-30 pointer-events-none select-none"
          />
        </div>

        {/* Top Right */}
        <div
          onClick={() => handleCardClick(1)}
          className={`relative p-4 min-h-[230px] text-end rounded-md bg-[#292947] text-white overflow-hidden shadow-lg group cursor-pointer overflow-visible ${
            activeCard === 1 ? "hover" : ""
          }`}
        >
          <span
            aria-hidden="true"
            className="absolute inset-0 bg-[#F76B14] rounded-md transform scale-0 transition-transform duration-[1000ms] origin-bottom-left group-hover:scale-100 hover:scale-100"
            style={{ zIndex: 0 }}
          />
          <div className="relative z-10">
            <h3 className="font-bold text-2xl mb-1">
              ProjectOps Execution Systems
            </h3>
            <div className="text-[#3686FD] font-semibold text-sm mb-1 tracking-wider group-hover:text-white hover:text-white">
              PMO Strategy, Delivery Governance, Portfolio Rituals
            </div>
            <div className="font-bold text-3xl mb-1 text-white">
              Structure That Drives Delivery
            </div>
            <p className="text-[#FFFFFF99] text-xs pl-40 group-hover:text-white hover:text-white">
              We embed discipline into execution — creating visibility, cadence,
              and real-time governance. Our systems ensure throughput without
              chaos, driving momentum across portfolios and unlocking predictable
              delivery.
            </p>
          </div>
          <img
            src="/img/serviceimg2.svg"
            alt=""
            className="absolute left-0 bottom-0 h-30 w-30 pointer-events-none select-none"
          />
        </div>

        {/* Bottom Left */}
        <div
          onClick={() => handleCardClick(2)}
          className={`relative p-4 min-h-[230px] rounded-md bg-[#292947] text-white overflow-hidden shadow-lg group cursor-pointer overflow-visible ${
            activeCard === 2 ? "hover" : ""
          }`}
        >
          <span
            aria-hidden="true"
            className="absolute inset-0 bg-[#039D85] rounded-md transform scale-0 transition-transform duration-[1000ms] origin-top-right group-hover:scale-100 hover:scale-100"
            style={{ zIndex: 0 }}
          />
          <div className="relative z-10">
            <h3 className="font-bold text-2xl mb-1">Tech Consulting</h3>
            <div className="uppercase text-[#3686FD] font-semibold text-sm mb-1 tracking-wider pr-30 group-hover:text-white hover:text-white">
              Fractional CTO, Modernization, Strategic IT Advisory
            </div>
            <div className="font-bold text-3xl mb-1 text-white">
              Technology That Accelerates Growth
            </div>
            <p className="text-[#FFFFFF99] text-xs pr-36 group-hover:text-white hover:text-white">
              We align technology with ambition. From replatforming and
              modernization to embedded CTO leadership, we architect scalable
              systems and decision frameworks that future-proof your business
              and turn complexity into confidence.
            </p>
          </div>
          <img
            src="/img/serviceimg3.svg"
            alt=""
            className="absolute right-0 top-0 h-30 w-30 pointer-events-none select-none"
          />
        </div>

        {/* Bottom Right */}
        <div
          onClick={() => handleCardClick(3)}
          className={`relative p-4 min-h-[230px] rounded-md bg-[#292947] text-white overflow-hidden shadow-lg group cursor-pointer overflow-visible ${
            activeCard === 3 ? "hover" : ""
          }`}
        >
          <span
            aria-hidden="true"
            className="absolute inset-0 bg-[#64748B] rounded-md transform scale-0 transition-transform duration-[1000ms] origin-top-left group-hover:scale-100 hover:scale-100"
            style={{ zIndex: 0 }}
          />
          <div className="relative z-10 text-end">
            <h3 className="font-bold text-2xl mb-1 group-hover:text-white hover:text-white">
              Business Consulting
            </h3>
            <div className="text-[#3686FD] group-hover:text-white hover:text-white font-semibold text-sm mb-1 tracking-wider pl-36 ">
              Strategy, governance, and growth playbooks for modern enterprises.
            </div>
            <div className="font-bold text-3xl mb-1 text-white group-hover:text-white hover:text-white">
              Strategy That Drives Results
            </div>
            <p className="text-[#FFFFFF99] group-hover:text-white hover:text-white text-xs pl-40">
              We help enterprises grow with clarity — through operating model
              design, risk governance, digital transformation roadmaps, rollout
              strategies, and ESG compliance. Our playbooks translate business
              vision into scalable, measurable results.
            </p>
          </div>
          <img
            src="/img/serviceimg4.svg"
            alt=""
            className="absolute left-0 top-0 h-30 w-30 pointer-events-none select-none"
          />
        </div>
      </div>
    </section>
  );
};

export default OurNewServices;
