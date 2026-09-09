"use client";

import { motion } from "framer-motion";
import { HardHat, Building2, Package, ClipboardCheck } from "lucide-react";
import Container from "./Container";

const capabilities = [
  {
    icon: HardHat,
    title: "Civil Engineering",
    desc: "Infrastructure and civil works",
  },
  {
    icon: Building2,
    title: "Construction",
    desc: "Residential, commercial and industrial construction",
  },
  {
    icon: Package,
    title: "Supply & Trade",
    desc: "Materials, equipment and procurement",
  },
  {
    icon: ClipboardCheck,
    title: "Project Delivery",
    desc: "Professional planning and execution",
  },
];

export default function CapabilityBar() {
  return (
    <section className="relative bg-charcoal border-y border-graphite">
      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {capabilities.map((cap, i) => (
            <motion.div
              key={cap.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="py-10 px-6 border-b sm:border-b-0 sm:border-r last:border-r-0 border-graphite group hover:bg-graphite/30 transition-colors"
            >
              <cap.icon className="w-8 h-8 text-gold mb-4" strokeWidth={1.5} />
              <h3 className="font-[family-name:var(--font-oswald)] text-sm tracking-[0.2em] text-white uppercase mb-2">
                {cap.title}
              </h3>
              <p className="text-xs text-silver-dark leading-relaxed">{cap.desc}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
