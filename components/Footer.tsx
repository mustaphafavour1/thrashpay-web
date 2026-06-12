"use client";

import { motion } from "framer-motion";

const links = {
  Company: ["About", "For Companies", "Become a Packer", "Contact"],
  Legal: ["Privacy Policy", "Terms of Use", "Cookie Policy"],
  Resources: ["Blog", "Sustainability Report", "Press Kit"],
};

const socials = [
  { name: "X (Twitter)", handle: "@TrashPayNG", icon: "𝕏" },
  { name: "Instagram", handle: "@trashpay.ng", icon: "📸" },
  { name: "LinkedIn", handle: "TrashPay", icon: "💼" },
];

export default function Footer() {
  return (
    <footer className="bg-dark-card border-t border-dark-border">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="col-span-2 lg:col-span-2"
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-full bg-lime flex items-center justify-center">
                <span className="text-dark font-display font-black text-base">T</span>
              </div>
              <span className="font-display font-bold text-2xl text-offwhite">
                Trash<span className="text-lime">Pay</span>
              </span>
            </div>
            <p className="font-body text-sm text-offwhite/40 leading-relaxed max-w-xs mb-6">
              Turning waste into value. Connecting households, packers, and
              manufacturers on one clean platform.
            </p>
            <div className="flex gap-3">
              {socials.map((s) => (
                <a
                  key={s.name}
                  href="#"
                  aria-label={s.name}
                  className="w-10 h-10 rounded-xl bg-dark border border-dark-border flex items-center justify-center text-offwhite/50 hover:text-offwhite hover:border-offwhite/20 transition-all"
                >
                  <span className="text-sm">{s.icon}</span>
                </a>
              ))}
            </div>
          </motion.div>

          {Object.entries(links).map(([section, items], i) => (
            <motion.div
              key={section}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <p className="font-display font-bold text-sm text-offwhite mb-4 tracking-wide">
                {section}
              </p>
              <ul className="space-y-3">
                {items.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="font-body text-sm text-offwhite/40 hover:text-offwhite/80 transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <div className="pt-8 border-t border-dark-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-body text-sm text-offwhite/30">
            © 2026 TrashPay. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-lime animate-pulse" />
            <span className="font-body text-sm text-offwhite/30">
              Now live in Lagos, Abuja, PH & Ibadan
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
