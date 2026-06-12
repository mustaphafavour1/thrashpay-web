"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const problems = [
  {
    icon: "🏘️",
    number: "70%",
    stat: "of urban households",
    title: "Households have no reliable way to clear waste regularly",
    description:
      "Irregular collection, missed pickups, and zero incentive mean waste piles up. Communities suffer while value rots.",
    accent: "#C8F135",
  },
  {
    icon: "🏭",
    number: "₦2B+",
    stat: "lost annually",
    title: "Manufacturers can't find consistent sorted recyclable supply",
    description:
      "Factories need sorted, verified materials. The supply chain is broken — they pay premium prices for scarcity that shouldn't exist.",
    accent: "#04CEFF",
  },
  {
    icon: "🧑‍🔧",
    number: "3M+",
    stat: "informal workers",
    title: "Waste packers work without structure, income security, or visibility",
    description:
      "Millions of collectors operate in the informal economy — no scheduling tools, no payment rails, no dignity.",
    accent: "#B66032",
  },
];

// index → initial transform to create the "stacked" look
const stackedInitial = [
  { x: "105%", y: 0 },   // left card: starts shifted right (toward center)
  { x: 0, y: 50 },       // center card: starts a bit lower than the sides
  { x: "-105%", y: 0 },  // right card: starts shifted left (toward center)
];

function CountUp({ target, active }: { target: string; active: boolean }) {
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    if (!active) return;
    const num = parseFloat(target.replace(/[^0-9.]/g, ""));
    const prefix = target.match(/^[^0-9]*/)?.[0] || "";
    const postfix = target.match(/[^0-9.]+$/)?.[0] || "";
    let start = 0;
    const duration = 1600;
    const step = 16;
    const increment = num / (duration / step);
    const timer = setInterval(() => {
      start += increment;
      if (start >= num) {
        setDisplay(`${prefix}${target.replace(/^[^0-9]*/, "").replace(/[^0-9.]+$/, "")}${postfix}`);
        clearInterval(timer);
      } else {
        setDisplay(`${prefix}${Math.floor(start)}${postfix}`);
      }
    }, step);
    return () => clearInterval(timer);
  }, [active, target]);

  return <span>{display}</span>;
}

export default function Problem() {
  const containerRef = useRef<HTMLDivElement>(null);
  const inView = useInView(containerRef, { once: true, margin: "-80px" });

  return (
    <section className="py-16 sm:py-28 px-4 sm:px-6 bg-dark relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 40% at 50% 100%, rgba(182,96,50,0.08) 0%, transparent 60%)",
        }}
      />

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14 sm:mb-20"
        >
          <span className="inline-block font-body text-xs sm:text-sm text-brown font-medium tracking-widest uppercase mb-4">
            The Problem
          </span>
          <h2 className="font-display font-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-offwhite leading-tight">
            Waste is everywhere.
            <br />
            <span className="text-offwhite/40">Value is trapped in it.</span>
          </h2>
        </motion.div>

        {/* overflow-hidden prevents offset cards from causing horizontal scroll */}
        <div className="overflow-hidden">
          <div ref={containerRef} className="grid md:grid-cols-3 gap-5 sm:gap-6">
            {problems.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{
                  x: stackedInitial[i].x,
                  y: stackedInitial[i].y,
                  opacity: 0,
                  scale: 0.96,
                }}
                animate={
                  inView
                    ? { x: 0, y: 0, opacity: 1, scale: 1 }
                    : {}
                }
                transition={{
                  duration: 0.7,
                  delay: i * 0.08,
                  type: "spring",
                  stiffness: 90,
                  damping: 18,
                }}
                className="group relative p-6 sm:p-8 rounded-3xl bg-dark-card border border-dark-border hover:border-opacity-60 transition-colors duration-300"
                style={{ "--accent": p.accent } as React.CSSProperties}
              >
                <div
                  className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background: `radial-gradient(ellipse 80% 60% at 50% 0%, ${p.accent}10 0%, transparent 70%)`,
                  }}
                />

                <div className="text-3xl sm:text-4xl mb-5 sm:mb-6">{p.icon}</div>

                <div className="mb-1.5">
                  <span
                    className="font-display font-black text-4xl sm:text-5xl"
                    style={{ color: p.accent }}
                  >
                    <CountUp target={p.number} active={inView} />
                  </span>
                </div>
                <p className="font-body text-xs sm:text-sm text-offwhite/40 mb-3 sm:mb-4">{p.stat}</p>

                <h3 className="font-display font-bold text-lg sm:text-xl text-offwhite mb-2 sm:mb-3 leading-snug">
                  {p.title}
                </h3>
                <p className="font-body text-offwhite/50 text-xs sm:text-sm leading-relaxed">
                  {p.description}
                </p>

                <div
                  className="absolute bottom-0 left-6 right-6 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: `linear-gradient(90deg, transparent, ${p.accent}40, transparent)` }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
