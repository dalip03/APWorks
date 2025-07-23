"use client";

import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";
import { useInView } from "framer-motion";

const HeroInfo = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return (
    <section className="bg-white text-center py-28 px-4">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={{
          hidden: { opacity: 0, y: 40 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
        }}
        className="max-w-4xl mx-auto"
      >
        <p className="text-lg md:text-xl text-black leading-relaxed">
          <span className="text-[#3686FD]">Founded by an IIM alumnus,</span> A&P Works enables fast,
          scalable, and outcome-driven change for startups and enterprises. We
          productize <span className="text-[#3686FD]">technology, data, and governance </span> — turning intent into
          working systems with <span className="text-[#3686FD]">clarity, speed, and accountability.</span>
        </p>
      </motion.div>
    </section>
  );
};

export default HeroInfo;
