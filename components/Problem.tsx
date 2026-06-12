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

function CountUp({ target, suffix = "" }: { target: string; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    if (!inView) return;
    const num = parseFloat(target.replace(/[^0-9.]/g, ""));
    const prefix = target.match(/^[^0-9]*/)?.[0] || "";
    const postfix = target.match(/[^0-9.]+$/)?.[0] || suffix;
    let start = 0;
    const duration = 1600;
    const step = 16;
    const steps = duration / step;
    const increment = num / steps;
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
  }, [inView, target, suffix]);

  return <span ref={ref}>{display}</span>;
}

export default function Problem() {
  return (
    <section className="py-28 px-6 bg-dark relative overflow-hidden">
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
          className="text-center mb-20"
        >
          <span className="inline-block font-body text-sm text-brown font-medium tracking-widest uppercase mb-4">
            The Problem
          </span>
          <h2 className="font-display font-black text-5xl md:text-6xl lg:text-7xl text-offwhite leading-tight">
            Waste is everywhere.
            <br />
            <span className="text-offwhite/40">Value is trapped in it.</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {problems.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="group relative p-8 rounded-3xl bg-dark-card border border-dark-border hover:border-opacity-60 transition-all duration-300"
              style={{ "--accent": p.accent } as React.CSSProperties}
            >
              <div
                className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  background: `radial-gradient(ellipse 80% 60% at 50% 0%, ${p.accent}10 0%, transparent 70%)`,
                }}
              />

              <div className="text-4xl mb-6">{p.icon}</div>

              <div className="mb-2">
                <span
                  className="font-display font-black text-5xl"
                  style={{ color: p.accent }}
                >
                  <CountUp target={p.number} />
                </span>
              </div>
              <p className="font-body text-sm text-offwhite/40 mb-4">{p.stat}</p>

              <h3 className="font-display font-bold text-xl text-offwhite mb-3 leading-snug">
                {p.title}
              </h3>
              <p className="font-body text-offwhite/50 text-sm leading-relaxed">
                {p.description}
              </p>

              <div
                className="absolute bottom-0 left-8 right-8 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: `linear-gradient(90deg, transparent, ${p.accent}40, transparent)` }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
