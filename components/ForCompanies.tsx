"use client";

import { motion } from "framer-motion";

const benefits = [
  "Steady sorted supply",
  "Lower sourcing costs",
  "Quality-verified batches",
  "Bulk delivery tracking",
  "Recurring contracts",
  "Supplier analytics",
];

const materialCategories = [
  { name: "PET Plastic", volume: "2.4T / mo", tag: "High demand" },
  { name: "Cardboard", volume: "1.8T / mo", tag: "Available now" },
  { name: "Aluminium", volume: "0.6T / mo", tag: "Pre-order" },
  { name: "Wood waste", volume: "1.1T / mo", tag: "Available now" },
];

export default function ForCompanies() {
  return (
    <section id="companies" className="py-16 sm:py-28 px-4 sm:px-6 bg-dark-card relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 60% at 0% 50%, rgba(182,96,50,0.08) 0%, transparent 60%)",
        }}
      />

      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left — text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block font-body text-xs sm:text-sm text-brown font-medium tracking-widest uppercase mb-5">
              For Companies
            </span>
            <h2 className="font-display font-black text-4xl sm:text-5xl md:text-6xl text-offwhite leading-tight mb-6">
              Your supply chain
              <br />
              <span className="text-offwhite/40">starts at the curb.</span>
            </h2>
            <p className="font-body text-offwhite/55 text-base sm:text-lg leading-relaxed mb-10 max-w-md">
              TrashPay gives manufacturers a direct line to sorted, verified
              recyclables — collected from thousands of households every week.
              No scrambling. Just supply.
            </p>

            {/* Benefit chips */}
            <div className="flex flex-wrap gap-2 mb-10">
              {benefits.map((b, i) => (
                <motion.span
                  key={b}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.06 }}
                  className="px-3 py-1.5 rounded-full border border-dark-border/70 bg-dark/50 font-body text-xs text-offwhite/55 hover:text-offwhite/80 hover:border-brown/40 transition-colors cursor-default"
                >
                  {b}
                </motion.span>
              ))}
            </div>

            <motion.a
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              href="#"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-brown text-offwhite font-display font-bold text-sm hover:bg-brown/90 transition-colors shadow-[0_0_30px_rgba(182,96,50,0.2)]"
            >
              Apply as a Partner Company →
            </motion.a>
          </motion.div>

          {/* Right — mockup */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <div className="relative p-px rounded-3xl bg-gradient-to-b from-dark-border to-transparent">
              <div className="rounded-[22px] bg-dark overflow-hidden border border-dark-border">
                <div className="bg-dark-card border-b border-dark-border px-5 py-3.5 flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
                  </div>
                  <span className="font-body text-xs text-offwhite/30">TrashPay B2B Portal</span>
                  <div className="w-14" />
                </div>

                <div className="p-5 sm:p-6">
                  <div className="flex items-center justify-between mb-5">
                    <div>
                      <p className="font-body text-xs text-offwhite/40 mb-0.5">Company Account</p>
                      <p className="font-display font-bold text-offwhite text-sm sm:text-base">
                        Zenith Plastics Ltd.
                      </p>
                    </div>
                    <div className="px-2.5 py-1 rounded-full bg-lime/10 border border-lime/30">
                      <span className="font-body text-xs text-lime font-medium">Verified Partner</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-2.5 mb-5">
                    {[
                      { label: "Orders", value: "24" },
                      { label: "Total kg", value: "8.4T" },
                      { label: "Saved", value: "₦240k" },
                    ].map((s) => (
                      <div
                        key={s.label}
                        className="p-2.5 rounded-xl bg-dark-card border border-dark-border text-center"
                      >
                        <div className="font-display font-black text-lg sm:text-xl text-lime">{s.value}</div>
                        <div className="font-body text-[10px] text-offwhite/40 mt-0.5">{s.label}</div>
                      </div>
                    ))}
                  </div>

                  <p className="font-body text-[10px] text-offwhite/40 mb-2.5 font-medium uppercase tracking-wider">
                    Available Materials
                  </p>
                  <div className="space-y-2">
                    {materialCategories.map((m, i) => (
                      <motion.div
                        key={m.name}
                        initial={{ opacity: 0, x: 10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 + i * 0.08 }}
                        className="flex items-center justify-between p-2.5 rounded-xl bg-dark-card border border-dark-border"
                      >
                        <div>
                          <p className="font-body text-xs sm:text-sm font-medium text-offwhite">{m.name}</p>
                          <p className="font-body text-[10px] text-offwhite/40">{m.volume}</p>
                        </div>
                        <span
                          className={`px-2 py-0.5 rounded-full text-[10px] font-body font-medium ${
                            m.tag === "High demand"
                              ? "bg-brown/15 text-brown"
                              : m.tag === "Available now"
                              ? "bg-lime/10 text-lime"
                              : "bg-electric/10 text-electric"
                          }`}
                        >
                          {m.tag}
                        </span>
                      </motion.div>
                    ))}
                  </div>

                  <button className="mt-4 w-full py-2.5 rounded-xl bg-brown text-offwhite font-body font-semibold text-xs sm:text-sm hover:bg-brown/90 transition-colors">
                    Place Bulk Order
                  </button>
                </div>
              </div>
            </div>

            <div
              className="absolute -inset-4 rounded-3xl blur-3xl opacity-10 pointer-events-none"
              style={{ background: "radial-gradient(ellipse, #B66032, transparent)" }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
