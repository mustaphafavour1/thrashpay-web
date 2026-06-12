"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const materials = [
  {
    icon: "♻️",
    title: "Plastic Bottles",
    sub: "PET, HDPE",
    description:
      "Collected, sorted, and baled for plastic recyclers. PET for bottles, HDPE for containers.",
    buyers: "Packaging manufacturers, beverage companies",
    color: "#C8F135",
  },
  {
    icon: "📦",
    title: "Cartons & Paper",
    sub: "Cardboard, newsprint, office paper",
    description:
      "Cleaned and sorted paper waste ready for pulp mills and packaging converters.",
    buyers: "Paper mills, cardboard factories",
    color: "#04CEFF",
  },
  {
    icon: "🔩",
    title: "Metals",
    sub: "Aluminium, Steel, Copper",
    description:
      "Ferrous and non-ferrous scrap metals sorted by grade for smelters and fabricators.",
    buyers: "Steel mills, aluminium smelters",
    color: "#B66032",
  },
  {
    icon: "🪵",
    title: "Sawdust & Wood",
    sub: "Offcuts, sawdust, timber waste",
    description:
      "Wood waste converted into biomass fuel, particleboard raw material, or compost.",
    buyers: "Biomass energy plants, furniture makers",
    color: "#C8F135",
  },
];

export default function Materials() {
  const [activeTooltip, setActiveTooltip] = useState<number | null>(null);

  return (
    <section className="py-28 px-6 bg-dark relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 50% 40% at 80% 80%, rgba(182,96,50,0.06) 0%, transparent 60%)",
        }}
      />

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="inline-block font-body text-sm text-brown font-medium tracking-widest uppercase mb-4">
            Materials
          </span>
          <h2 className="font-display font-black text-5xl md:text-6xl lg:text-7xl text-offwhite">
            We collect what
            <br />
            <span className="text-offwhite/40">manufacturers need.</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
          {materials.map((m, i) => (
            <motion.div
              key={m.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              onHoverStart={() => setActiveTooltip(i)}
              onHoverEnd={() => setActiveTooltip(null)}
              className="relative group p-6 rounded-3xl bg-dark-card border border-dark-border hover:border-opacity-60 transition-all duration-300 cursor-default overflow-hidden"
            >
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-3xl"
                style={{
                  background: `radial-gradient(ellipse 100% 80% at 50% 0%, ${m.color}08 0%, transparent 70%)`,
                }}
              />

              <div className="text-4xl mb-5">{m.icon}</div>
              <h3 className="font-display font-black text-xl text-offwhite mb-1">{m.title}</h3>
              <p className="font-body text-xs text-offwhite/40 mb-3">{m.sub}</p>
              <p className="font-body text-sm text-offwhite/60 leading-relaxed mb-4">
                {m.description}
              </p>

              <motion.div
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: activeTooltip === i ? 1 : 0, y: activeTooltip === i ? 0 : 6 }}
                transition={{ duration: 0.25 }}
                className="pt-3 border-t border-dark-border"
              >
                <p className="font-body text-xs text-offwhite/40 mb-0.5">Typical buyers</p>
                <p className="font-body text-xs font-medium" style={{ color: m.color }}>
                  {m.buyers}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center"
        >
          <a
            href="#companies"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full border border-dark-border hover:border-brown/50 bg-dark-card hover:bg-brown/5 transition-all duration-200 font-body font-medium text-offwhite/70 hover:text-offwhite group"
          >
            Partner with us as a company
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
