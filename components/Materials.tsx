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
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section className="py-16 sm:py-28 px-4 sm:px-6 bg-dark relative overflow-hidden">
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
          className="text-center mb-12 sm:mb-16"
        >
          <span className="inline-block font-body text-xs sm:text-sm text-brown font-medium tracking-widest uppercase mb-4">
            Materials
          </span>
          <h2 className="font-display font-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-offwhite">
            We collect what
            <br />
            <span className="text-offwhite/40">manufacturers need.</span>
          </h2>
        </motion.div>

        {/* Fixed-height grid — tall enough to contain any expanded card */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 items-start mb-12 sm:mb-16" style={{ minHeight: 340 }}>
          {materials.map((m, i) => (
            <motion.div
              key={m.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              onHoverStart={() => setHovered(i)}
              onHoverEnd={() => setHovered(null)}
              className="group relative cursor-default transition-all duration-300"
              style={{ borderRadius: "4px" }}
            >
              {/* Divider line — always present */}
              <div
                className="absolute bottom-0 left-0 right-0 h-px"
                style={{ background: "rgba(255,255,255,0.07)" }}
              />
              {/* Right divider for columns (not last col) */}
              {i % 4 !== 3 && (
                <div
                  className="hidden lg:block absolute top-0 right-0 bottom-0 w-px"
                  style={{ background: "rgba(255,255,255,0.07)" }}
                />
              )}
              {i % 2 !== 1 && (
                <div
                  className="lg:hidden absolute top-0 right-0 bottom-0 w-px sm:block hidden"
                  style={{ background: "rgba(255,255,255,0.07)" }}
                />
              )}

              {/* Card hover background */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none"
                style={{
                  borderRadius: "4px",
                  background: "#141414",
                  border: `1px solid rgba(255,255,255,0.1)`,
                  boxShadow: `0 0 40px ${m.color}08`,
                }}
              />

              <div className="relative p-5 sm:p-7">
                <motion.div
                  animate={{ scale: hovered === i ? 1.05 : 1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="text-3xl sm:text-4xl mb-4"
                >
                  {m.icon}
                </motion.div>

                <h3 className="font-display font-black text-lg sm:text-xl text-offwhite mb-0.5">
                  {m.title}
                </h3>
                <p className="font-body text-xs text-offwhite/40 mb-3">{m.sub}</p>

                {/* Description — revealed on hover */}
                <motion.div
                  initial={false}
                  animate={{
                    opacity: hovered === i ? 1 : 0,
                    height: hovered === i ? "auto" : 0,
                  }}
                  transition={{ duration: 0.25 }}
                  className="overflow-hidden"
                >
                  <p className="font-body text-xs sm:text-sm text-offwhite/60 leading-relaxed mb-3">
                    {m.description}
                  </p>
                  <div className="pt-2 border-t border-white/10">
                    <p className="font-body text-[10px] text-offwhite/40 mb-0.5 uppercase tracking-wider">
                      Typical buyers
                    </p>
                    <p className="font-body text-xs font-medium" style={{ color: m.color }}>
                      {m.buyers}
                    </p>
                  </div>
                </motion.div>

                {/* Accent bottom line on hover */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: `linear-gradient(90deg, transparent, ${m.color}50, transparent)`,
                  }}
                />
              </div>
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
            className="inline-flex items-center gap-3 px-6 sm:px-8 py-3 sm:py-4 rounded-full border border-dark-border hover:border-brown/50 bg-dark-card hover:bg-brown/5 transition-all duration-200 font-body font-medium text-sm text-offwhite/70 hover:text-offwhite group"
          >
            Partner with us as a company
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
