"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const heroStat = { value: "12,000 kg", label: "Recyclables collected" };

const subStats = [
  { value: "500+", label: "Households served" },
  { value: "80+", label: "Verified packers" },
  { value: "4", label: "Cities covered" },
  { value: "₦0", label: "Missed payments" },
];

const ACCENT = "#C8F135";
const FILL_DURATION = 3.2;
const STAGGER = 1.8;

function OutlineFill({
  value,
  fillDelay,
  large = false,
}: {
  value: string;
  fillDelay: number;
  large?: boolean;
}) {
  return (
    <div className="relative inline-block">
      {/* Outline layer (always visible) */}
      <span
        aria-hidden
        className={`block font-display font-black leading-none select-none ${
          large ? "text-[56px] sm:text-[72px] md:text-[92px]" : "text-[36px] sm:text-[44px] md:text-[52px]"
        }`}
        style={{
          WebkitTextStroke: `1.5px ${ACCENT}`,
          color: "transparent",
        }}
      >
        {value}
      </span>

      {/* Fill layer — sweeps left→right */}
      <motion.span
        aria-hidden
        className={`absolute inset-0 block font-display font-black leading-none select-none ${
          large ? "text-[56px] sm:text-[72px] md:text-[92px]" : "text-[36px] sm:text-[44px] md:text-[52px]"
        }`}
        style={{ color: ACCENT }}
        initial={{ clipPath: "inset(0 100% 0 0)" }}
        animate={{ clipPath: "inset(0 0% 0 0)" }}
        transition={{
          duration: FILL_DURATION,
          delay: fillDelay,
          ease: [0.16, 1, 0.3, 1],
        }}
      >
        {value}
      </motion.span>
    </div>
  );
}

export default function ImpactNumbers() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: "-80px" });

  return (
    <section className="py-16 sm:py-28 px-4 sm:px-6 bg-dark-card relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% 50%, rgba(200,241,53,0.05) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background: "linear-gradient(90deg, transparent, rgba(200,241,53,0.3), transparent)",
        }}
      />
      <div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{
          background: "linear-gradient(90deg, transparent, rgba(200,241,53,0.3), transparent)",
        }}
      />

      <div className="max-w-5xl mx-auto" ref={sectionRef}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14 sm:mb-20"
        >
          <span className="inline-block font-body text-xs sm:text-sm text-lime font-medium tracking-widest uppercase mb-4">
            Impact
          </span>
          <h2 className="font-display font-black text-4xl sm:text-5xl md:text-6xl text-offwhite">
            Cleaning up.
            <span className="text-offwhite/40"> Scaling up.</span>
          </h2>
        </motion.div>

        {/* Hero stat — centered on top */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          {inView && <OutlineFill value={heroStat.value} fillDelay={0.1} large />}
          <p className="font-body text-sm sm:text-base text-offwhite/40 tracking-wide mt-3">
            {heroStat.label}
          </p>
        </motion.div>

        {/* Sub stats row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 sm:gap-10">
          {subStats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
              className="text-center"
            >
              {inView && (
                <OutlineFill value={s.value} fillDelay={STAGGER + i * STAGGER} />
              )}
              <p className="font-body text-xs sm:text-sm text-offwhite/40 mt-2 sm:mt-3 leading-snug">
                {s.label}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.7, delay: 3.2 }}
          className="mt-14 sm:mt-16 text-center"
        >
          <p className="font-body text-xs sm:text-sm text-offwhite/30">
            Data updated in real-time. Growing every pickup.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
