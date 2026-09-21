"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, MapPin } from "lucide-react";
import Container from "./Container";

const projects = [
  {
    title: "Bulk Water Supply Infrastructure",
    location: "Limpopo Province, South Africa",
    client: "Government Entity",
    category: "Infrastructure",
    scope: "Water pipeline network and reservoir construction",
    status: "Completed",
    image: "/images/projects/water-tanks-01.jpg",
  },
  {
    title: "Commercial Building Construction",
    location: "Gauteng Province, South Africa",
    client: "Private Developer",
    category: "Construction",
    scope: "Turnkey commercial building including all MEP services",
    status: "Completed",
    image: "/images/projects/brick-building-01.jpg",
  },
  {
    title: "Road Infrastructure Development",
    location: "North West Province, South Africa",
    client: "Municipal Client",
    category: "Civil Engineering",
    scope: "Full road rehabilitation and stormwater management system",
    status: "Completed",
    image: "/images/projects/pipeline-install-01.jpg",
  },
];

const filters = ["All", "Civil", "Construction", "Infrastructure", "Supply"];

export default function FeaturedProjectsPreview() {
  return (
    <section className="py-16 md:py-24 bg-charcoal">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="font-[family-name:var(--font-oswald)] text-xs tracking-[0.3em] text-gold uppercase mb-4 block">
            Portfolio
          </span>
          <h2 className="font-[family-name:var(--font-oswald)] text-3xl sm:text-4xl md:text-5xl font-bold tracking-wide text-white uppercase">
            Featured Projects
          </h2>
          <div className="mt-6 w-16 h-0.5 bg-gold mx-auto" />
        </motion.div>

        {/* Filter bar */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {filters.map((f) => (
            <button
              key={f}
              className="px-4 py-2 text-[10px] tracking-[0.2em] uppercase border border-graphite-light text-silver-dark hover:border-gold hover:text-gold transition-all"
            >
              {f}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="group bg-graphite border border-graphite-light hover:border-gold/30 transition-all duration-300"
            >
              {/* Project image */}
              <div className="aspect-[16/10] relative overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian/60 via-transparent to-transparent" />
                {/* Status badge */}
                <div className="absolute top-4 right-4 px-3 py-1 bg-gold text-obsidian text-[10px] font-semibold tracking-wider uppercase">
                  {project.status}
                </div>
                {/* Gold corner */}
                <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-gold to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              <div className="p-6">
                <span className="font-[family-name:var(--font-oswald)] text-[10px] tracking-[0.2em] text-gold uppercase">
                  {project.category}
                </span>
                <h3 className="font-[family-name:var(--font-oswald)] text-lg tracking-wider text-white uppercase mt-2 mb-3">
                  {project.title}
                </h3>
                <div className="flex items-center gap-2 text-xs text-silver-dark mb-2">
                  <MapPin size={12} className="text-gold" />
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
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-12"
        >
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 px-6 py-3 border border-gold text-gold text-xs font-semibold tracking-wider uppercase hover:bg-gold hover:text-obsidian transition-all"
          >
            View All Projects <ArrowRight size={14} />
          </Link>
        </motion.div>
      </Container>
    </section>
  );
}
