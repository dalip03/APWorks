"use client";

import Image from "next/image";
import { motion } from "framer-motion";
interface HeroProps {
  id?: string;
}
export default function Hero({ id }: HeroProps) {
  return (
    <section id={id} className="relative w-full min-h-[90vh] flex items-center justify-center text-white overflow-hidden px-4">
      {/* Background Image */}
      <Image
        src="/img/Hero.png"
        alt="Hero Background"
        fill
        className="object-cover z-0"
        quality={90}
        priority
      />

      {/* Animated Content */}
      <motion.div
        className="relative z-20 w-full max-w-4xl text-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <h1 className="text-3xl md:text-5xl font-bold mb-4 text-black leading-snug">
          From Chaos to Control
        </h1>
        <p className="text-base md:text-lg mb-6 md:mb-8 leading-relaxed text-[#1C1C1C99]">
          A&P Works transforms ideas into intelligent systems — merging
          engineering, AI, and execution governance. We don&apos;t just build
          software. We build outcomes.
        </p>

        {/* Buttons */}
        <div className="flex justify-center items-center gap-4 flex-wrap md:flex-nowrap">
          <button className="flex items-center gap-2 bg-[#3686FD] hover:bg-[#2e76e4] text-white pr-3 pl-6 py-2 rounded-full transition-colors whitespace-nowrap">
            Start Your Transformation
            <Image src="/img/arrow.png" alt="Arrow" width={24} height={24} />
          </button>
          <button className="flex items-center gap-2 border border-gray-200 text-white pr-3 pl-6 py-2 rounded-full transition-colors whitespace-nowrap">
            See What We Do
            <Image src="/img/arrow.png" alt="Arrow" width={24} height={24} />
          </button>
        </div>
      </motion.div>
    </section>
  );
};

