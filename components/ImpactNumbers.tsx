"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const stats = [
  { value: 12000, suffix: " kg", label: "Recyclables collected", prefix: "" },
  { value: 500, suffix: "+", label: "Households served", prefix: "" },
  { value: 80, suffix: "+", label: "Verified packers", prefix: "" },
  { value: 4, suffix: "", label: "Cities covered", prefix: "" },
  { value: 0, suffix: "", label: "Missed payments", prefix: "₦" },
];

function AnimatedNumber({
  value,
  prefix,
  suffix,
  label,
  delay,
}: {
  value: number;
  prefix: string;
  suffix: string;
  label: string;
  delay: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const duration = 2000;
    const startTime = Date.now();
    const easeOut = (t: number) => 1 - Math.pow(1 - t, 3);

    const timer = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      setCurrent(Math.floor(easeOut(progress) * value));
      if (progress >= 1) clearInterval(timer);
    }, 16);

    return () => clearInterval(timer);
  }, [inView, value]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay }}
      className="text-center"
    >
      <div className="font-display font-black text-5xl md:text-7xl text-lime leading-none mb-3">
        {prefix}
        {current.toLocaleString()}
        {suffix}
      </div>
      <div className="font-body text-base text-offwhite/40 tracking-wide">{label}</div>
    </motion.div>
  );
}

export default function ImpactNumbers() {
  return (
    <section className="py-28 px-6 bg-dark-card relative overflow-hidden">
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

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <span className="inline-block font-body text-sm text-lime font-medium tracking-widest uppercase mb-4">
            Impact
          </span>
          <h2 className="font-display font-black text-5xl md:text-6xl text-offwhite">
            Cleaning up.
            <span className="text-offwhite/40"> Scaling up.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-6 gap-y-14">
          {stats.map((s, i) => (
            <AnimatedNumber key={s.label} {...s} delay={i * 0.12} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <p className="font-body text-sm text-offwhite/30">
            Data updated in real-time. Growing every pickup.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
