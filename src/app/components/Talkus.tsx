"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const Talkus = () => {
  return (
    <div className="min-h-screen flex items-center bg-gray-50 px-4 sm:px-6 md:px-16 py-16">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-stretch gap-10 md:gap-12 bg-[#1D1E3D] rounded-3xl w-full p-6 md:p-12">

        {/* Left side: Text */}
        <motion.div
          className="w-full md:w-1/2 text-center md:text-left flex flex-col justify-center items-center md:items-start"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Logo */}
          <Link href="/" className="inline-block mb-6">
            <Image
              src="/img/Logo.png"
              alt="IIPWorks Logo"
              width={120}
              height={40}
              priority
              className="h-auto w-auto max-h-40"
            />
          </Link>

          <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4">
            Ready to Move?
          </h2>
          <p className="text-base md:text-md text-gray-400 mb-8 max-w-md">
            Whether you're launching a product, reengineering a stock, or
            scaling your delivery — we're your embedded partner in building
            who's next.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center md:justify-start">
            <button className="flex items-center justify-center gap-2 bg-[#3686FD] hover:bg-[#2e76e4] text-white pr-3 pl-6 py-2 rounded-full transition-colors whitespace-nowrap">
              Talk To Us
              <Image
                src="/img/arrow.png"
                alt="Talk Icon"
                width={24}
                height={24}
              />
            </button>
            <button className="flex items-center justify-center gap-2 border border-[#3686FD] text-white pr-3 pl-6 py-2 rounded-full transition-colors whitespace-nowrap">
              Download Our Overview
              <Image
                src="/img/arrowDown2.png"
                alt="Download Icon"
                width={24}
                height={24}
              />
            </button>
          </div>
        </motion.div>

        {/* Right side: Image */}
        <motion.div
          className="w-full md:w-1/2 flex justify-center items-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
        >
          <img
            src="/img/talkus.png"
            alt="Illustration"
            className="w-full h-auto max-w-sm md:max-w-full object-contain rounded-3xl"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Talkus;
