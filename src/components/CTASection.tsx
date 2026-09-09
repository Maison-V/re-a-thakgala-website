"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function CTASection() {
  return (
    <section className="py-16 md:py-24 bg-obsidian relative overflow-hidden">
      <div className="absolute inset-0 engineering-grid opacity-30" />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(245,184,0,0.05) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="font-[family-name:var(--font-oswald)] text-xs tracking-[0.3em] text-gold uppercase mb-4 block">
            Start Your Project
          </span>
          <h2 className="font-[family-name:var(--font-oswald)] text-3xl sm:text-4xl md:text-5xl font-bold tracking-wide text-white uppercase leading-tight">
            Let&apos;s Build Something
            <br />
            <span className="text-gold">That Lasts.</span>
          </h2>
          <div className="mt-6 w-16 h-0.5 bg-gold mx-auto" />
          <p className="mt-6 text-silver-dark text-sm md:text-base leading-relaxed max-w-xl mx-auto">
            Have a project, construction requirement or supply enquiry? Contact
            RE A Thakgala Trading Enterprise to discuss your requirements.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="px-8 py-4 bg-gold text-obsidian font-semibold text-sm tracking-wider uppercase hover:bg-gold-deep transition-all duration-300 min-w-[220px]"
            >
              Request a Quotation
            </Link>
            <Link
              href="/profile"
              className="px-8 py-4 border border-white/30 text-white font-semibold text-sm tracking-wider uppercase hover:border-gold hover:text-gold transition-all duration-300 min-w-[220px]"
            >
              Company Profile
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
