"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-dark/90 backdrop-blur-md border-b border-dark-border"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-lime flex items-center justify-center">
            <span className="text-dark font-display font-black text-sm">T</span>
          </div>
          <span className="font-display font-bold text-xl text-offwhite tracking-tight">
            Trash<span className="text-lime">Pay</span>
          </span>
        </a>

        <div className="hidden md:flex items-center gap-8 text-sm font-body text-offwhite/70">
          <a href="#how-it-works" className="hover:text-lime transition-colors">How it works</a>
          <a href="#features" className="hover:text-lime transition-colors">Features</a>
          <a href="#pricing" className="hover:text-lime transition-colors">Pricing</a>
          <a href="#companies" className="hover:text-lime transition-colors">For Companies</a>
        </div>

        <div className="hidden md:flex items-center gap-3">
          <a
            href="#companies"
            className="px-4 py-2 text-sm font-body font-medium text-offwhite border border-dark-border rounded-full hover:border-offwhite/40 transition-colors"
          >
            For Companies
          </a>
          <a
            href="#pricing"
            className="px-4 py-2 text-sm font-body font-medium text-dark bg-lime rounded-full hover:bg-lime/90 transition-colors"
          >
            Subscribe Now
          </a>
        </div>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden p-2 text-offwhite"
          aria-label="Toggle menu"
        >
          <div className="w-5 flex flex-col gap-1.5">
            <span
              className={`h-0.5 bg-offwhite transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
            />
            <span
              className={`h-0.5 bg-offwhite transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`}
            />
            <span
              className={`h-0.5 bg-offwhite transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
            />
          </div>
        </button>
      </nav>

      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-dark-card border-b border-dark-border px-6 py-6 flex flex-col gap-4 font-body text-offwhite/80"
        >
          <a href="#how-it-works" onClick={() => setMenuOpen(false)} className="hover:text-lime">How it works</a>
          <a href="#features" onClick={() => setMenuOpen(false)} className="hover:text-lime">Features</a>
          <a href="#pricing" onClick={() => setMenuOpen(false)} className="hover:text-lime">Pricing</a>
          <a href="#companies" onClick={() => setMenuOpen(false)} className="hover:text-lime">For Companies</a>
          <a
            href="#pricing"
            onClick={() => setMenuOpen(false)}
            className="mt-2 px-4 py-3 text-sm font-medium text-dark bg-lime rounded-full text-center"
          >
            Subscribe Now
          </a>
        </motion.div>
      )}
    </motion.header>
  );
}
