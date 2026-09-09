"use client";

import { motion } from "framer-motion";
import { Shield, Award, HardHat, Handshake, Cog, Target } from "lucide-react";
import CTASection from "@/components/CTASection";

const capabilities = [
  {
    icon: Shield,
    title: "Integrity",
    description:
      "We operate with accountability and professional conduct.",
  },
  {
    icon: Award,
    title: "Quality",
    description:
      "We pursue consistent workmanship and project standards.",
  },
  {
    icon: HardHat,
    title: "Safety",
    description:
      "Safety must remain central to responsible construction.",
  },
  {
    icon: Target,
    title: "Reliability",
    description:
      "Our objective is dependable delivery and clear communication.",
  },
  {
    icon: Cog,
    title: "Technical Approach",
    description:
      "We approach projects through structured planning and practical execution.",
  },
  {
    icon: Handshake,
    title: "Partnerships",
    description:
      "We build relationships with clients, suppliers and project stakeholders.",
  },
];

export default function CapabilitiesPageContent() {
  return (
    <>
      {/* Hero */}
      <section className="pt-24 md:pt-32 pb-16 md:pb-20 bg-obsidian relative overflow-hidden">
        <div className="absolute inset-0 engineering-grid opacity-30" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="font-[family-name:var(--font-oswald)] text-xs tracking-[0.3em] text-gold uppercase mb-4 block">
              Why Choose Us
            </span>
            <h1 className="font-[family-name:var(--font-oswald)] text-4xl sm:text-5xl md:text-6xl font-bold tracking-wide text-white uppercase">
              Why RE A Thakgala?
            </h1>
            <div className="mt-6 w-16 h-0.5 bg-gold mx-auto" />
          </motion.div>
        </div>
      </section>

      {/* Capabilities Grid */}
      <section className="py-16 md:py-24 bg-charcoal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((cap, i) => (
              <motion.div
                key={cap.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group bg-graphite border border-graphite-light hover:border-gold/30 transition-all duration-300 p-8"
              >
                <cap.icon
                  className="w-10 h-10 text-gold mb-6"
                  strokeWidth={1.5}
                />
                <h3 className="font-[family-name:var(--font-oswald)] text-lg tracking-[0.15em] text-white uppercase mb-4">
                  {cap.title}
                </h3>
                <p className="text-sm text-silver-dark leading-relaxed">
                  {cap.description}
                </p>
                <div className="mt-6 w-8 h-0.5 bg-gold/30 group-hover:bg-gold transition-colors" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
