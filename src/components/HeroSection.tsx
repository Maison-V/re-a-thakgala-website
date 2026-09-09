"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 bg-obsidian">
        {/* Cinematic gradient overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at 30% 50%, rgba(245,184,0,0.06) 0%, transparent 60%), radial-gradient(ellipse at 70% 30%, rgba(245,184,0,0.04) 0%, transparent 50%)",
          }}
        />
        {/* Engineering grid */}
        <div className="absolute inset-0 engineering-grid" />
        {/* Diagonal lines */}
        <svg
          className="absolute inset-0 w-full h-full opacity-[0.03]"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line x1="0" y1="100%" x2="100%" y2="0" stroke="#F5B800" strokeWidth="1" />
          <line x1="20%" y1="100%" x2="100%" y2="20%" stroke="#F5B800" strokeWidth="0.5" />
          <line x1="40%" y1="100%" x2="100%" y2="40%" stroke="#F5B800" strokeWidth="0.5" />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Gold accent line */}
          <div className="flex justify-center mb-8">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: 80 }}
              transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
              className="h-0.5 bg-gold"
            />
          </div>

          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="font-[family-name:var(--font-oswald)] text-xs sm:text-sm tracking-[0.4em] text-gold uppercase block mb-4"
          >
            Civil Engineering &middot; Construction &middot; Supply &amp; Trade
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="font-[family-name:var(--font-oswald)] text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-[0.1em] text-white leading-[0.9]"
          >
            RE A THAKGALA
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="font-[family-name:var(--font-oswald)] text-lg sm:text-xl md:text-2xl tracking-[0.25em] text-gold mt-2"
          >
            TRADING ENTERPRISE
          </motion.h2>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-6 flex justify-center"
          >
            <div className="w-16 h-0.5 bg-gold" />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.9 }}
            className="font-[family-name:var(--font-oswald)] text-base sm:text-lg md:text-xl tracking-[0.15em] text-silver-dark mt-6 uppercase"
          >
            Building Today for a Stronger Tomorrow
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.0 }}
            className="mt-8 max-w-xl mx-auto text-silver-dark text-sm md:text-base leading-relaxed"
          >
            Delivering professional civil engineering, construction, procurement and
            supply solutions with a commitment to quality, safety and dependable
            project execution.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.1 }}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              href="/contact"
              className="px-8 py-4 bg-gold text-obsidian font-semibold text-sm tracking-wider uppercase hover:bg-gold-deep transition-all duration-300 min-w-[220px]"
            >
              Request a Quotation
            </Link>
            <Link
              href="/services"
              className="px-8 py-4 border border-white/30 text-white font-semibold text-sm tracking-wider uppercase hover:border-gold hover:text-gold transition-all duration-300 min-w-[220px]"
            >
              Explore Our Services
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-px h-12 bg-gradient-to-b from-gold to-transparent" />
      </motion.div>
    </section>
  );
}
