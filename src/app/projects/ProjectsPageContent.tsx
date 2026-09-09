"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Building2, ArrowRight } from "lucide-react";
import CTASection from "@/components/CTASection";
import Container from "@/components/Container";

const projects = [
  {
    title: "Road Infrastructure Development",
    location: "North West Province, South Africa",
    client: "Municipal Client",
    category: "Civil",
    scope: "Full road rehabilitation, stormwater management system and associated civil works including drainage, signage and road markings.",
    status: "Completed",
  },
  {
    title: "Commercial Building Construction",
    location: "Gauteng Province, South Africa",
    client: "Private Developer",
    category: "Construction",
    scope: "Turnkey commercial building including structural works, MEP services, interior fit-out and external works.",
    status: "Completed",
  },
  {
    title: "Bulk Water Supply Infrastructure",
    location: "Limpopo Province, South Africa",
    client: "Government Entity",
    category: "Infrastructure",
    scope: "Water pipeline network, reservoir construction, pump station installation and commissioning.",
    status: "Completed",
  },
  {
    title: "Residential Complex Development",
    location: "Mpumalanga Province, South Africa",
    client: "Private Developer",
    category: "Construction",
    scope: "Multi-unit residential development including site works, building construction and landscaping.",
    status: "Completed",
  },
  {
    title: "Stormwater Management System",
    location: "Free State Province, South Africa",
    client: "Municipal Client",
    category: "Civil",
    scope: "Urban stormwater drainage system design and construction including culverts, channels and retention ponds.",
    status: "Completed",
  },
  {
    title: "Construction Materials Supply",
    location: "Gauteng Province, South Africa",
    client: "Construction Contractor",
    category: "Supply",
    scope: "Bulk supply of construction aggregates, cement, steel and related building materials.",
    status: "Completed",
  },
];

const categories = ["All", "Civil", "Construction", "Infrastructure", "Supply"];

export default function ProjectsPageContent() {
  const [active, setActive] = useState("All");

  const filtered =
    active === "All"
      ? projects
      : projects.filter((p) => p.category === active);

  return (
    <>
      {/* Hero */}
      <section className="pt-24 md:pt-32 pb-16 md:pb-20 bg-obsidian relative overflow-hidden">
        <div className="absolute inset-0 engineering-grid opacity-30" />
        <Container className="relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="font-[family-name:var(--font-oswald)] text-xs tracking-[0.3em] text-gold uppercase mb-4 block">
              Portfolio
            </span>
            <h1 className="font-[family-name:var(--font-oswald)] text-4xl sm:text-5xl md:text-6xl font-bold tracking-wide text-white uppercase">
              Our Projects
            </h1>
            <div className="mt-6 w-16 h-0.5 bg-gold mx-auto" />
          </motion.div>
        </Container>
      </section>

      {/* Filters + Grid */}
      <section className="py-16 md:py-24 bg-charcoal">
        <Container>
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setActive(c)}
                className={`px-5 py-2.5 text-[10px] tracking-[0.2em] uppercase border transition-all ${
                  active === c
                    ? "border-gold bg-gold text-obsidian font-semibold"
                    : "border-graphite-light text-silver-dark hover:border-gold hover:text-gold"
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filtered.map((project, i) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="group bg-graphite border border-graphite-light hover:border-gold/30 transition-all duration-300"
                >
                  <div className="aspect-[16/10] bg-gradient-to-br from-graphite via-charcoal to-obsidian relative overflow-hidden">
                    <div className="absolute inset-0 engineering-grid opacity-40" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Building2 className="w-12 h-12 text-gold/20" strokeWidth={1} />
                    </div>
                    <div className="absolute top-4 right-4 px-3 py-1 bg-gold text-obsidian text-[10px] font-semibold tracking-wider uppercase">
                      {project.status}
                    </div>
                    <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-gold to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <div className="p-6">
                    <span className="font-[family-name:var(--font-oswald)] text-[10px] tracking-[0.2em] text-gold uppercase">
                      {project.category}
                    </span>
                    <h3 className="font-[family-name:var(--font-oswald)] text-lg tracking-wider text-white uppercase mt-2 mb-3">
                      {project.title}
                    </h3>
                    <div className="flex items-center gap-2 text-xs text-silver-dark mb-3">
                      <MapPin size={12} className="text-gold flex-shrink-0" />
                      {project.location}
                    </div>
                    <p className="text-xs text-silver-dark leading-relaxed mb-4">
                      {project.scope}
                    </p>
                    <div className="pt-4 border-t border-graphite-light">
                      <span className="text-[10px] tracking-wider uppercase text-silver-dark">
                        Client: {project.client}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
