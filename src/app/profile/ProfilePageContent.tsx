"use client";

import { motion } from "framer-motion";
import { Download, Building2 } from "lucide-react";
import Container from "@/components/Container";

const infoRows = [
  { label: "Legal Name", value: "RE A Thakgala Trading Enterprise" },
  { label: "Managing Director", value: "Ruloff Davis" },
  { label: "Country", value: "South Africa" },
  { label: "Sector", value: "Civil Engineering / Construction / Supply & Trade" },
  { label: "Registration Number", value: "[To Be Supplied]" },
  { label: "VAT Number", value: "[To Be Supplied]" },
  { label: "B-BBEE Status", value: "[To Be Supplied]" },
  { label: "CIDB Grading", value: "[To Be Supplied]" },
  { label: "CSD Registration", value: "[To Be Supplied]" },
  { label: "Company Address", value: "[To Be Supplied]" },
  { label: "Telephone", value: "[To Be Supplied]" },
  { label: "Email", value: "[To Be Supplied]" },
  { label: "Website", value: "[To Be Supplied]" },
];

export default function ProfilePageContent() {
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
              Company Profile
            </span>
            <h1 className="font-[family-name:var(--font-oswald)] text-4xl sm:text-5xl md:text-6xl font-bold tracking-wide text-white uppercase">
              Company Information
            </h1>
            <div className="mt-6 w-16 h-0.5 bg-gold mx-auto" />
          </motion.div>
        </Container>
      </section>

      {/* Profile Info */}
      <section className="py-16 md:py-24 bg-charcoal">
        <Container size="medium">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Logo / Brand */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-1"
            >
              <div className="aspect-square bg-graphite border border-graphite-light flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 engineering-grid opacity-30" />
                <div className="relative text-center">
                  <Building2 className="w-16 h-16 text-gold/30 mx-auto mb-4" strokeWidth={1} />
                  <span className="font-[family-name:var(--font-oswald)] text-lg tracking-[0.15em] text-white block">
                    RE A THAKGALA
                  </span>
                  <span className="font-[family-name:var(--font-oswald)] text-[10px] tracking-[0.3em] text-gold uppercase">
                    Trading Enterprise
                  </span>
                </div>
                <div className="absolute top-0 left-0 w-8 h-0.5 bg-gold" />
                <div className="absolute top-0 left-0 w-0.5 h-8 bg-gold" />
                <div className="absolute bottom-0 right-0 w-8 h-0.5 bg-gold" />
                <div className="absolute bottom-0 right-0 w-0.5 h-8 bg-gold" />
              </div>

              <motion.a
                href="#"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="mt-6 flex items-center justify-center gap-3 w-full px-6 py-4 bg-gold text-obsidian font-semibold text-sm tracking-wider uppercase hover:bg-gold-deep transition-all"
              >
                <Download size={16} />
                Download Company Profile
              </motion.a>
            </motion.div>

            {/* Info Table */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="lg:col-span-2"
            >
              <div className="border border-graphite-light">
                {infoRows.map((row, i) => (
                  <div
                    key={row.label}
                    className={`flex flex-col sm:flex-row sm:items-center px-6 py-4 ${
                      i !== infoRows.length - 1 ? "border-b border-graphite-light" : ""
                    }`}
                  >
                    <span className="font-[family-name:var(--font-oswald)] text-xs tracking-[0.15em] text-gold uppercase w-48 flex-shrink-0 mb-1 sm:mb-0">
                      {row.label}
                    </span>
                    <span className="text-sm text-silver">{row.value}</span>
                  </div>
                ))}
              </div>

              <p className="mt-6 text-xs text-silver-dark leading-relaxed italic">
                Note: Information marked as [To Be Supplied] will be updated once
                verified documentation is received. All company details are subject
                to verification.
              </p>
            </motion.div>
          </div>
        </Container>
      </section>
    </>
  );
}
