"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import CTASection from "@/components/CTASection";
import Container from "@/components/Container";

export default function AboutPageContent() {
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
              About Us
            </span>
            <h1 className="font-[family-name:var(--font-oswald)] text-4xl sm:text-5xl md:text-6xl font-bold tracking-wide text-white uppercase">
              Engineering with Purpose.
              <br />
              <span className="text-gold">Construction with Precision.</span>
            </h1>
            <div className="mt-6 w-16 h-0.5 bg-gold mx-auto" />
          </motion.div>
        </Container>
      </section>

      {/* Company intro */}
      <section className="py-16 md:py-24 bg-charcoal">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-silver leading-relaxed text-base md:text-lg">
              RE A Thakgala Trading Enterprise is a South African enterprise focused
              on civil engineering, construction and supply solutions. We aim to
              deliver practical, quality-driven solutions that respond to the
              technical, commercial and operational requirements of our clients.
            </p>
            <p className="mt-6 text-silver leading-relaxed text-base md:text-lg">
              Our approach combines professional project execution, responsible
              procurement, quality workmanship and a strong commitment to safety.
              We seek to establish long-term relationships through dependable
              service and consistent delivery.
            </p>
          </motion.div>
        </Container>
      </section>

      {/* Managing Director */}
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
                Leadership
              </span>
              <h2 className="font-[family-name:var(--font-oswald)] text-3xl sm:text-4xl font-bold tracking-wide text-white uppercase">
                Managing Director
              </h2>
              <div className="mt-4 w-16 h-0.5 bg-gold" />
              <p className="mt-6 font-[family-name:var(--font-oswald)] text-xl text-gold tracking-wider">
                Ruloff Davis
              </p>
              <p className="mt-2 text-xs tracking-[0.2em] text-silver-dark uppercase">
                Managing Director
              </p>
              <p className="mt-6 text-silver-dark leading-relaxed text-sm md:text-base">
                Ruloff Davis leads RE A Thakgala Trading Enterprise with a focus on
                disciplined project delivery, business development and building a
                dependable organisation capable of contributing to South Africa&apos;s
                infrastructure and built environment.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <div className="aspect-[3/4] bg-graphite border border-graphite-light relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-graphite via-charcoal to-obsidian" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-24 h-24 mx-auto border-2 border-gold/30 rounded-sm flex items-center justify-center mb-4">
                      <div className="w-14 h-14 border border-gold/20 rounded-full bg-graphite-light" />
                    </div>
                    <span className="font-[family-name:var(--font-oswald)] text-sm tracking-[0.2em] text-gold/60 uppercase">
                      Portrait
                    </span>
                  </div>
                </div>
                {/* Gold accents */}
                <div className="absolute top-0 left-0 w-12 h-0.5 bg-gold" />
                <div className="absolute top-0 left-0 w-0.5 h-12 bg-gold" />
                <div className="absolute bottom-0 right-0 w-12 h-0.5 bg-gold" />
                <div className="absolute bottom-0 right-0 w-0.5 h-12 bg-gold" />
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
