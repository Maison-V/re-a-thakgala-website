"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, User, Building2, Mail, Phone, MapPin, DollarSign, MessageSquare } from "lucide-react";

export default function ContactPageContent() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

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
              Get in Touch
            </span>
            <h1 className="font-[family-name:var(--font-oswald)] text-4xl sm:text-5xl md:text-6xl font-bold tracking-wide text-white uppercase">
              Let&apos;s Build Something
              <br />
              <span className="text-gold">That Lasts.</span>
            </h1>
            <div className="mt-6 w-16 h-0.5 bg-gold mx-auto" />
          </motion.div>
        </div>
      </section>

      {/* Contact Form + Info */}
      <section className="py-16 md:py-24 bg-charcoal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-3"
            >
              <h2 className="font-[family-name:var(--font-oswald)] text-xl tracking-[0.15em] text-white uppercase mb-8">
                Submit Your Enquiry
              </h2>

              {submitted ? (
                <div className="bg-graphite border border-gold/30 p-12 text-center">
                  <div className="w-16 h-16 mx-auto bg-gold/10 border border-gold/30 rounded-sm flex items-center justify-center mb-6">
                    <Send className="w-8 h-8 text-gold" />
                  </div>
                  <h3 className="font-[family-name:var(--font-oswald)] text-lg tracking-wider text-white uppercase mb-3">
                    Enquiry Received
                  </h3>
                  <p className="text-sm text-silver-dark">
                    Thank you for contacting RE A Thakgala Trading Enterprise.
                    We will respond to your enquiry promptly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="font-[family-name:var(--font-oswald)] text-[10px] tracking-[0.2em] text-silver-dark uppercase block mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        className="w-full px-4 py-3 bg-graphite border border-graphite-light text-silver text-sm focus:border-gold focus:outline-none transition-colors"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label className="font-[family-name:var(--font-oswald)] text-[10px] tracking-[0.2em] text-silver-dark uppercase block mb-2">
                        Company
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 bg-graphite border border-graphite-light text-silver text-sm focus:border-gold focus:outline-none transition-colors"
                        placeholder="Company name"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="font-[family-name:var(--font-oswald)] text-[10px] tracking-[0.2em] text-silver-dark uppercase block mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        required
                        className="w-full px-4 py-3 bg-graphite border border-graphite-light text-silver text-sm focus:border-gold focus:outline-none transition-colors"
                        placeholder="email@example.com"
                      />
                    </div>
                    <div>
                      <label className="font-[family-name:var(--font-oswald)] text-[10px] tracking-[0.2em] text-silver-dark uppercase block mb-2">
                        Telephone
                      </label>
                      <input
                        type="tel"
                        className="w-full px-4 py-3 bg-graphite border border-graphite-light text-silver text-sm focus:border-gold focus:outline-none transition-colors"
                        placeholder="+27 ___ __ __ __"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="font-[family-name:var(--font-oswald)] text-[10px] tracking-[0.2em] text-silver-dark uppercase block mb-2">
                        Project Type
                      </label>
                      <select className="w-full px-4 py-3 bg-graphite border border-graphite-light text-silver text-sm focus:border-gold focus:outline-none transition-colors">
                        <option value="">Select type</option>
                        <option>Civil Engineering</option>
                        <option>Construction</option>
                        <option>Supply & Trade</option>
                        <option>Other</option>
                      </select>
                    </div>
                    <div>
                      <label className="font-[family-name:var(--font-oswald)] text-[10px] tracking-[0.2em] text-silver-dark uppercase block mb-2">
                        Project Location
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 bg-graphite border border-graphite-light text-silver text-sm focus:border-gold focus:outline-none transition-colors"
                        placeholder="Province / City"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="font-[family-name:var(--font-oswald)] text-[10px] tracking-[0.2em] text-silver-dark uppercase block mb-2">
                      Estimated Budget
                    </label>
                    <select className="w-full px-4 py-3 bg-graphite border border-graphite-light text-silver text-sm focus:border-gold focus:outline-none transition-colors">
                      <option value="">Select range</option>
                      <option>Under R500,000</option>
                      <option>R500,000 - R1,000,000</option>
                      <option>R1,000,000 - R5,000,000</option>
                      <option>R5,000,000 - R10,000,000</option>
                      <option>Over R10,000,000</option>
                    </select>
                  </div>

                  <div>
                    <label className="font-[family-name:var(--font-oswald)] text-[10px] tracking-[0.2em] text-silver-dark uppercase block mb-2">
                      Message *
                    </label>
                    <textarea
                      required
                      rows={5}
                      className="w-full px-4 py-3 bg-graphite border border-graphite-light text-silver text-sm focus:border-gold focus:outline-none transition-colors resize-none"
                      placeholder="Describe your project requirements..."
                    />
                  </div>

                  <div>
                    <label className="font-[family-name:var(--font-oswald)] text-[10px] tracking-[0.2em] text-silver-dark uppercase block mb-2">
                      Attachment
                    </label>
                    <input
                      type="file"
                      className="w-full px-4 py-3 bg-graphite border border-graphite-light text-silver text-sm focus:border-gold focus:outline-none transition-colors file:mr-4 file:py-2 file:px-4 file:border file:border-graphite-light file:text-silver-dark file:text-xs file:uppercase file:tracking-wider file:bg-graphite-light hover:file:border-gold"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full sm:w-auto px-8 py-4 bg-gold text-obsidian font-semibold text-sm tracking-wider uppercase hover:bg-gold-deep transition-all flex items-center justify-center gap-2"
                  >
                    <Send size={14} />
                    Submit Enquiry
                  </button>
                </form>
              )}
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="lg:col-span-2"
            >
              <div className="bg-graphite border border-graphite-light p-8">
                <h3 className="font-[family-name:var(--font-oswald)] text-lg tracking-[0.15em] text-white uppercase mb-6">
                  Contact Information
                </h3>
                <div className="w-8 h-0.5 bg-gold mb-8" />

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <User className="w-5 h-5 text-gold mt-0.5" strokeWidth={1.5} />
                    <div>
                      <p className="font-[family-name:var(--font-oswald)] text-xs tracking-wider text-white uppercase">
                        Ruloff Davis
                      </p>
                      <p className="text-xs text-silver-dark mt-1">Managing Director</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Building2 className="w-5 h-5 text-gold mt-0.5" strokeWidth={1.5} />
                    <div>
                      <p className="font-[family-name:var(--font-oswald)] text-xs tracking-wider text-white uppercase">
                        RE A Thakgala Trading Enterprise
                      </p>
                      <p className="text-xs text-silver-dark mt-1">Civil Engineering &middot; Construction &middot; Supply &amp; Trade</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <MapPin className="w-5 h-5 text-gold mt-0.5" strokeWidth={1.5} />
                    <div>
                      <p className="font-[family-name:var(--font-oswald)] text-xs tracking-wider text-white uppercase">
                        Location
                      </p>
                      <p className="text-xs text-silver-dark mt-1">South Africa</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Phone className="w-5 h-5 text-gold mt-0.5" strokeWidth={1.5} />
                    <div>
                      <p className="font-[family-name:var(--font-oswald)] text-xs tracking-wider text-white uppercase">
                        Telephone
                      </p>
                      <p className="text-xs text-silver-dark mt-1">[To Be Supplied]</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Mail className="w-5 h-5 text-gold mt-0.5" strokeWidth={1.5} />
                    <div>
                      <p className="font-[family-name:var(--font-oswald)] text-xs tracking-wider text-white uppercase">
                        Email
                      </p>
                      <p className="text-xs text-silver-dark mt-1">[To Be Supplied]</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-graphite-light">
                  <p className="text-xs text-silver-dark leading-relaxed italic">
                    Have a project, construction requirement or supply enquiry?
                    Contact RE A Thakgala Trading Enterprise to discuss your
                    requirements.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
