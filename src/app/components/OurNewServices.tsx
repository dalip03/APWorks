"use client";
import React from "react";

const OurNewServices = () => {
  return (
    <section className="relative bg-[#1D1E3D] min-h-[600px] py-12 px-4 flex flex-col items-center justify-center">
      {/* Headings */}
      <div className="mb-8 text-center">
        <div className="text-white/60 text-lg mb-1">(Our Services)</div>
        <h2 className="text-white font-bold text-2xl sm:text-3xl md:text-4xl leading-tight mb-2">
          Our Industry Leading
          <br />
          Tech Solutions
        </h2>
      </div>

      {/* Quadrants layout */}
      <div className="relative max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 md:grid-rows-2 gap-2 bg-transparent z-10">
        {/* Top Left */}
        <div className="relative p-4 min-h-[230px] rounded-md bg-[#292947] text-white overflow-hidden shadow-lg group cursor-pointer overflow-visible">
          {/* Animated gradient background starts from image corner */}
          <span
            aria-hidden="true"
            className="absolute inset-0 bg-[#3686FD]  rounded-md transform scale-0 transition-transform duration-[1000ms] origin-bottom-right group-hover:scale-100"
            style={{ zIndex: 0 }}
          />

          <div className="relative z-10">
            <h3 className="font-bold text-2xl mb-1">Engineering Services</h3>
            <div className="text-[#3686FD] font-semibold text-sm mb-1 tracking-wider">
              MVPs, Data Platforms, Scalable Systems
            </div>
            <div className="font-bold text-3xl mb-1 text-white">
              From Idea to Infrastructure
            </div>
            <div className="text-[#3686FD] font-semibold text-sm mb-1 tracking-wider">
              Modern engineering for systems that scale.
            </div>
            <p className="text-[#FFFFFF99] text-sm pr-30 mb-2">
              <br />
              We architect and deliver production-grade platforms—from
              zero-to-one launches to large-scale rebuilds. Our modular squads,
              clean architectures, and data-native foundations help you launch
              faster, scale smarter, and own your IP.
            </p>
          </div>
          {/* Decorative image in right bottom corner */}
          <img
            src="/img/serviceimg1.svg"
            alt=""
            className="absolute right-0 bottom-0 h-30 w-30 pointer-events-none select-none"
          />
        </div>

        {/* Top Right */}
        <div className="relative p-4 min-h-[230px] text-end rounded-md bg-[#292947] text-white overflow-hidden shadow-lg group cursor-pointer overflow-visible">
          <span
            aria-hidden="true"
            className="absolute inset-0 bg-[#F76B14] rounded-md transform scale-0 transition-transform duration-[1000ms] origin-bottom-left group-hover:scale-100"
            style={{ zIndex: 0 }}
          />

          <div className="relative z-10">
            <h3 className="font-bold text-2xl mb-1">
              ProjectOps Execution Systems
            </h3>
            <div className="text-[#3686FD] font-semibold text-sm mb-1 tracking-wider">
              PMO Strategy, Delivery Governance, Portfolio Rituals
            </div>
            <div className="font-bold text-3xl mb-1 text-white">
              Structure That Drives Delivery
            </div>
            <div className="text-[#3686FD] text-sm font-semibold mb-1">
              Where strategy meets execution velocity
            </div>
            <p className="text-[#FFFFFF99] text-xs pl-40">
              We embed execution discipline into your delivery
              environment—establishing visibility, rituals, and real-time
              governance. Our systems drive throughput without chaos, unlocking
              momentum at every level of your portfolio.
            </p>
          </div>
          {/* Decorative image in bottom left corner */}
          <img
            src="/img/serviceimg2.svg"
            alt=""
            className="absolute left-0 bottom-0 h-30 w-30 pointer-events-none select-none"
          />
        </div>

        {/* Bottom Left */}
        <div className="relative p-4 min-h-[230px] rounded-md bg-[#292947] text-white overflow-hidden shadow-lg group cursor-pointer overflow-visible">
          <span
            aria-hidden="true"
            className="absolute inset-0 bg-[#039D85] rounded-md transform scale-0 transition-transform duration-[1000ms] origin-top-right group-hover:scale-100"
            style={{ zIndex: 0 }}
          />

          <div className="relative z-10">
            <h3 className="font-bold text-2xl mb-1">Tech Consulting</h3>
            <div className="uppercase text-[#3686FD] font-semibold text-sm mb-1 tracking-wider pr-30">
              Fractional CTO, Modernization, Strategic IT Advisory
            </div>
            <div className="font-bold text-3xl mb-1 text-white">
              Strategy That Ships
            </div>
            <div className="text-[#3686FD] font-semibold text-sm mb-1">
              Embedded leadership. Deep alignment.
            </div>
            <p className="text-[#FFFFFF99] text-xs pr-36">
              We align architecture with ambition. Whether it’s replatforming,
              tech due diligence, or fractional leadership, we help you navigate
              complexity with confidence—embedding decision frameworks that
              scale as you grow.
            </p>
          </div>
          {/* Decorative image in top right corner */}
          <img
            src="/img/serviceimg3.svg"
            alt=""
            className="absolute right-0 top-0 h-30 w-30 pointer-events-none select-none"
          />
        </div>

        {/* Bottom Right */}
        <div className="relative p-4 min-h-[230px] rounded-md bg-[#292947] text-white overflow-hidden shadow-lg group cursor-pointer overflow-visible">
          <span
            aria-hidden="true"
            className="absolute inset-0 bg-[#64748B] rounded-md transform scale-0 transition-transform duration-[1000ms] origin-top-left group-hover:scale-100"
            style={{ zIndex: 0 }}
          />

          <div className="relative z-10 text-end">
            <h3 className="font-bold text-2xl mb-1">Business Consulting</h3>
            <div className="text-[#3686FD] font-semibold text-sm mb-1 tracking-wider pl-36 ">
              Strategy, governance, and growth playbooks for modern enterprises.
            </div>
            <div className="font-bold text-3xl mb-1 text-white">
              Strategy That Drives Results
            </div>
            <div className="text-[#3686FD99] text-sm font-semibold mb-1">
              Where strategy meets business sense
            </div>
            <p className="text-[#FFFFFF99] text-xs pl-40">
              We support business growth through operating model advisory,
              governance and risk frameworks, digital transformation, product
              rollout strategies, and ESG compliance enablement.
            </p>
          </div>
          {/* Decorative image in top left corner */}
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
