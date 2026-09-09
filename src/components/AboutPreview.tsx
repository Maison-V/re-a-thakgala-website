"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Container from "./Container";

export default function AboutPreview() {
  return (
    <section className="py-16 md:py-24 bg-obsidian">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="font-[family-name:var(--font-oswald)] text-xs tracking-[0.3em] text-gold uppercase mb-4 block">
              About Us
            </span>
            <h2 className="font-[family-name:var(--font-oswald)] text-3xl sm:text-4xl md:text-5xl font-bold tracking-wide text-white uppercase leading-tight">
              Engineering with Purpose.
              <br />
              <span className="text-gold">Construction with Precision.</span>
            </h2>
            <div className="mt-6 w-16 h-0.5 bg-gold" />
            <p className="mt-8 text-silver-dark leading-relaxed text-sm md:text-base">
              RE A Thakgala Trading Enterprise is a South African enterprise focused
              on civil engineering, construction and supply solutions. We aim to
              deliver practical, quality-driven solutions that respond to the
              technical, commercial and operational requirements of our clients.
            </p>
            <p className="mt-4 text-silver-dark leading-relaxed text-sm md:text-base">
              Our approach combines professional project execution, responsible
              procurement, quality workmanship and a strong commitment to safety.
              We seek to establish long-term relationships through dependable
              service and consistent delivery.
            </p>
            <Link
              href="/about"
              className="inline-block mt-8 px-6 py-3 border border-gold text-gold text-xs font-semibold tracking-wider uppercase hover:bg-gold hover:text-obsidian transition-all"
            >
              Learn More
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-[4/3] bg-graphite border border-graphite-light overflow-hidden relative group">
              {/* Placeholder with engineering pattern */}
              <div className="absolute inset-0 bg-gradient-to-br from-graphite via-charcoal to-obsidian" />
              <div className="absolute inset-0 engineering-grid opacity-50" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 mx-auto border-2 border-gold/30 rounded-sm flex items-center justify-center mb-4">
                    <div className="w-12 h-12 border border-gold/20 rounded-sm flex items-center justify-center">
                      <div className="w-2 h-2 bg-gold rounded-full" />
                    </div>
                  </div>
                  <span className="font-[family-name:var(--font-oswald)] text-sm tracking-[0.2em] text-gold/60 uppercase">
                    Company Image
                  </span>
                </div>
              </div>
              {/* Gold corner accents */}
              <div className="absolute top-0 left-0 w-8 h-0.5 bg-gold" />
              <div className="absolute top-0 left-0 w-0.5 h-8 bg-gold" />
              <div className="absolute bottom-0 right-0 w-8 h-0.5 bg-gold" />
              <div className="absolute bottom-0 right-0 w-0.5 h-8 bg-gold" />
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
