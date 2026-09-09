"use client";

import { motion } from "framer-motion";
import { HardHat, Building2, Package, ArrowRight } from "lucide-react";
import Link from "next/link";
import CTASection from "@/components/CTASection";

const civilServices = [
  { name: "Earthworks", desc: "Excavation, fill placement and site grading" },
  { name: "Site Development", desc: "Full site preparation and development works" },
  { name: "Roads & Associated Works", desc: "Road construction, rehabilitation and surfacing" },
  { name: "Stormwater Drainage", desc: "Drainage systems and stormwater management" },
  { name: "Water & Sewer Infrastructure", desc: "Water supply and sewerage network construction" },
  { name: "Concrete Works", desc: "Structural and reinforced concrete construction" },
  { name: "Structural Works", desc: "Structural steel and reinforced concrete structures" },
  { name: "Bulk Infrastructure", desc: "Large-scale infrastructure development projects" },
  { name: "Rehabilitation & Maintenance", desc: "Infrastructure repair, rehabilitation and upkeep" },
  { name: "General Civil Works", desc: "Comprehensive civil engineering solutions" },
];

const constructionServices = [
  { name: "Residential Construction", desc: "Quality residential building and development" },
  { name: "Commercial Construction", desc: "Commercial and retail building solutions" },
  { name: "Industrial Construction", desc: "Industrial facilities and warehouse construction" },
  { name: "Renovations", desc: "Building refurbishment and modernization" },
  { name: "Extensions", desc: "Building extensions and additions" },
  { name: "Building Maintenance", desc: "Ongoing building maintenance and upkeep" },
  { name: "Turnkey Solutions", desc: "Complete project delivery from concept to completion" },
  { name: "Project Coordination", desc: "Professional project management and coordination" },
];

const supplyServices = [
  { name: "Construction Materials", desc: "Building and construction material supply" },
  { name: "Civil Engineering Materials", desc: "Specialized civil engineering material supply" },
  { name: "Plant & Equipment Sourcing", desc: "Construction plant and equipment procurement" },
  { name: "General Procurement", desc: "Comprehensive procurement solutions" },
  { name: "Contractor Supply", desc: "Subcontractor and specialist contractor supply" },
  { name: "Logistics Coordination", desc: "Transport and delivery coordination" },
  { name: "Supplier Partnerships", desc: "Established supplier network and partnerships" },
];

function ServiceDivision({
  id,
  icon: Icon,
  number,
  title,
  services,
  reverse,
}: {
  id: string;
  icon: React.ElementType;
  number: string;
  title: string;
  services: { name: string; desc: string }[];
  reverse?: boolean;
}) {
  return (
    <section id={id} className="py-16 md:py-24 bg-obsidian scroll-mt-16 md:scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 ${reverse ? "lg:direction-rtl" : ""}`}>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex items-center gap-4 mb-6">
              <span className="font-[family-name:var(--font-oswald)] text-4xl font-bold text-gold/20">
                {number}
              </span>
              <div className="w-px h-12 bg-gold/30" />
              <Icon className="w-10 h-10 text-gold" strokeWidth={1.5} />
            </div>
            <h2 className="font-[family-name:var(--font-oswald)] text-3xl sm:text-4xl font-bold tracking-wide text-white uppercase">
              {title}
            </h2>
            <div className="mt-4 w-16 h-0.5 bg-gold" />
            <p className="mt-6 text-silver-dark leading-relaxed text-sm">
              {title === "Civil Engineering"
                ? "Our civil engineering division delivers comprehensive infrastructure solutions across South Africa. From earthworks to bulk infrastructure, we bring technical capability and project discipline to every engagement."
                : title === "Construction"
                ? "We provide end-to-end construction services for residential, commercial and industrial projects. Our commitment to quality workmanship and project management ensures reliable delivery."
                : "Our supply and trade division connects clients with essential construction materials, plant and equipment, supported by established supplier partnerships and logistics coordination."}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {services.map((s, i) => (
                <motion.div
                  key={s.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className="p-4 bg-graphite border border-graphite-light hover:border-gold/30 transition-all group"
                >
                  <h4 className="font-[family-name:var(--font-oswald)] text-xs tracking-[0.15em] text-white uppercase mb-2">
                    {s.name}
                  </h4>
                  <p className="text-[11px] text-silver-dark leading-relaxed">
                    {s.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default function ServicesPageContent() {
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
              What We Do
            </span>
            <h1 className="font-[family-name:var(--font-oswald)] text-4xl sm:text-5xl md:text-6xl font-bold tracking-wide text-white uppercase">
              Our Services
            </h1>
            <div className="mt-6 w-16 h-0.5 bg-gold mx-auto" />
            <p className="mt-6 max-w-xl mx-auto text-silver-dark text-sm md:text-base leading-relaxed">
              Comprehensive civil engineering, construction and supply solutions
              delivered with professionalism, quality and safety.
            </p>
          </motion.div>
        </div>
      </section>

      <ServiceDivision
        id="civil"
        icon={HardHat}
        number="01"
        title="Civil Engineering"
        services={civilServices}
      />

      <div className="h-px bg-graphite" />

      <ServiceDivision
        id="construction"
        icon={Building2}
        number="02"
        title="Construction"
        services={constructionServices}
        reverse
      />

      <div className="h-px bg-graphite" />

      <ServiceDivision
        id="supply"
        icon={Package}
        number="03"
        title="Supply & Trade"
        services={supplyServices}
      />

      <CTASection />
    </>
  );
}
