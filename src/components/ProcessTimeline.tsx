"use client";

import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Consult",
    description: "Understand the client's requirements.",
  },
  {
    number: "02",
    title: "Assess",
    description: "Review the technical and commercial requirements.",
  },
  {
    number: "03",
    title: "Plan",
    description: "Develop the appropriate execution and procurement approach.",
  },
  {
    number: "04",
    title: "Deliver",
    description: "Execute the works with quality and safety controls.",
  },
  {
    number: "05",
    title: "Close Out",
    description: "Complete handover, documentation and final requirements.",
  },
];

export default function ProcessTimeline() {
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
            How We Work
          </span>
          <h2 className="font-[family-name:var(--font-oswald)] text-3xl sm:text-4xl md:text-5xl font-bold tracking-wide text-white uppercase">
            Project Delivery Process
          </h2>
          <div className="mt-6 w-16 h-0.5 bg-gold mx-auto" />
        </motion.div>

        {/* Desktop timeline */}
        <div className="hidden md:block relative">
          {/* Horizontal line */}
          <div className="absolute top-8 left-0 right-0 h-px bg-graphite-light" />

          <div className="grid grid-cols-5 gap-4">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="relative text-center"
              >
                {/* Node */}
                <div className="relative z-10 w-16 h-16 mx-auto bg-obsidian border-2 border-gold rounded-sm flex items-center justify-center mb-6">
                  <span className="font-[family-name:var(--font-oswald)] text-lg font-bold text-gold">
                    {step.number}
                  </span>
                </div>
                <h3 className="font-[family-name:var(--font-oswald)] text-sm tracking-[0.2em] text-white uppercase mb-3">
                  {step.title}
                </h3>
                <p className="text-xs text-silver-dark leading-relaxed px-2">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile timeline */}
        <div className="md:hidden relative pl-8">
          <div className="absolute left-3 top-0 bottom-0 w-px bg-graphite-light" />
          <div className="space-y-10">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative"
              >
                <div className="absolute -left-8 top-0 w-6 h-6 bg-obsidian border-2 border-gold rounded-sm flex items-center justify-center">
                  <span className="font-[family-name:var(--font-oswald)] text-[10px] font-bold text-gold">
                    {step.number}
                  </span>
                </div>
                <h3 className="font-[family-name:var(--font-oswald)] text-sm tracking-[0.2em] text-white uppercase mb-2">
                  {step.title}
                </h3>
                <p className="text-xs text-silver-dark leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
