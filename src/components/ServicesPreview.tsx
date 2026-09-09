"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, HardHat, Building2, Package } from "lucide-react";

const services = [
  {
    icon: HardHat,
    number: "01",
    title: "Civil Engineering",
    description:
      "Infrastructure development, earthworks, roads, drainage, water and sewer systems, concrete works, and bulk infrastructure solutions.",
    items: ["Earthworks", "Roads & Drainage", "Water Infrastructure", "Concrete Works"],
    href: "/services#civil",
  },
  {
    icon: Building2,
    number: "02",
    title: "Construction",
    description:
      "Residential, commercial and industrial construction, renovations, extensions and turnkey building solutions delivered with precision.",
    items: ["Residential", "Commercial", "Industrial", "Turnkey Solutions"],
    href: "/services#construction",
  },
  {
    icon: Package,
    number: "03",
    title: "Supply & Trade",
    description:
      "Construction and civil engineering materials, plant and equipment sourcing, general procurement and contractor supply services.",
    items: ["Materials Supply", "Plant Sourcing", "Procurement", "Logistics"],
    href: "/services#supply",
  },
];

export default function ServicesPreview() {
  return (
    <section className="py-16 md:py-24 bg-charcoal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="font-[family-name:var(--font-oswald)] text-xs tracking-[0.3em] text-gold uppercase mb-4 block">
            Our Divisions
          </span>
          <h2 className="font-[family-name:var(--font-oswald)] text-3xl sm:text-4xl md:text-5xl font-bold tracking-wide text-white uppercase">
            Comprehensive Solutions
          </h2>
          <div className="mt-6 w-16 h-0.5 bg-gold mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="group bg-graphite border border-graphite-light hover:border-gold/30 transition-all duration-300 p-8"
            >
              <div className="flex items-center gap-4 mb-6">
                <span className="font-[family-name:var(--font-oswald)] text-3xl font-bold text-gold/20">
                  {service.number}
                </span>
                <div className="w-px h-10 bg-gold/30" />
                <service.icon className="w-8 h-8 text-gold" strokeWidth={1.5} />
              </div>
              <h3 className="font-[family-name:var(--font-oswald)] text-xl tracking-wider text-white uppercase mb-4">
                {service.title}
              </h3>
              <p className="text-sm text-silver-dark leading-relaxed mb-6">
                {service.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-8">
                {service.items.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1 text-[10px] tracking-wider uppercase border border-graphite-light text-silver-dark"
                  >
                    {item}
                  </span>
                ))}
              </div>
              <Link
                href={service.href}
                className="inline-flex items-center gap-2 text-gold text-xs font-semibold tracking-wider uppercase hover:gap-3 transition-all"
              >
                View Services <ArrowRight size={14} />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
