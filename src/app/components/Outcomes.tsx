"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

interface outcomesProps {
  id?: string;
}

const images = ["/img/slide1.png", "/img/slide2.png", "/img/slide3.png"];

export default function SliderSection({ id }: outcomesProps) {
  const [current, setCurrent] = useState(0);

  const prevIndex = (current - 1 + images.length) % images.length;
  const nextIndex = (current + 1) % images.length;

  const handlePrev = () => {
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id={id} className="py-20 px-4 md:px-16 bg-white relative overflow-hidden">
      {/* Animate only this text block */}
      <motion.div
        className="text-center mb-10"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-black">
          Quiet Wins. Serious Outcomes.
        </h2>
        <p className="mt-2 text-gray-600 text-sm md:text-base max-w-xl mx-auto md:px-20">
          Read about all our projects that helped save tons and hundreds of
          business efforts.
        </p>
      </motion.div>

      {/* Slider */}
      <div className="relative flex justify-center items-center h-[340px] md:h-[400px]">
        {/* Left Image */}
        <motion.div
          key={prevIndex}
          className="absolute left-1/2 -translate-x-[120%] z-10 scale-90 opacity-70"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
        >
          <Image
            src={images[prevIndex]}
            alt="prev"
            width={380}
            height={180}
            className="rounded-xl object-cover"
          />
        </motion.div>

        {/* Center Image */}
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            className="z-20 scale-110 shadow-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
          >
            <Image
              src={images[current]}
              alt="active"
              width={450}
              height={300}
              className="rounded-xl object-cover"
            />
          </motion.div>
        </AnimatePresence>

        {/* Right Image */}
        <motion.div
          key={nextIndex}
          className="absolute right-1/2 translate-x-[120%] z-10 scale-90 opacity-70"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
        >
          <Image
            src={images[nextIndex]}
            alt="next"
            width={380}
            height={180}
            className="rounded-xl object-cover"
          />
        </motion.div>
      </div>

      {/* Arrows below slider */}
      <div className="flex justify-center gap-10 mt-6 z-30">
        <button onClick={handlePrev} aria-label="Previous Slide">
          <Image src="/img/arrow left.png" alt="Prev" width={20} height={20} />
        </button>
        <button onClick={handleNext} aria-label="Next Slide">
          <Image src="/img/arrow right.png" alt="Next" width={20} height={20} />
        </button>
      </div>
    </section>
  );
}
