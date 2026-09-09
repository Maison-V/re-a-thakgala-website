"use client";

import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import Container from "./Container";

function useCountUp(end: number, duration: number = 2000) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    let start = 0;
    const step = end / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [started, end, duration]);

  return { count, ref };
}

const stats = [
  { number: 100, suffix: "+", label: "Projects Completed" },
  { number: 50, suffix: "+", label: "Team Members" },
  { number: 15, suffix: "+", label: "Years Experience" },
  { number: 100, suffix: "%", label: "Safety Commitment" },
];

export default function EngineeringStats() {
  return (
    <section className="py-16 md:py-24 bg-obsidian relative overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 engineering-grid opacity-50" />

      <Container className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="font-[family-name:var(--font-oswald)] text-xs tracking-[0.3em] text-gold uppercase mb-4 block">
            Track Record
          </span>
          <h2 className="font-[family-name:var(--font-oswald)] text-3xl sm:text-4xl md:text-5xl font-bold tracking-wide text-white uppercase">
            Engineering Statistics
          </h2>
          <div className="mt-6 w-16 h-0.5 bg-gold mx-auto" />
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => {
            const { count, ref } = useCountUp(stat.number);
            return (
              <motion.div
                key={stat.label}
                ref={ref}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="text-center py-8 border border-graphite bg-graphite/30"
              >
                <div className="font-[family-name:var(--font-oswald)] text-4xl sm:text-5xl md:text-6xl font-bold text-gold">
                  {count}
                  <span className="text-gold">{stat.suffix}</span>
                </div>
                <div className="mt-3 font-[family-name:var(--font-oswald)] text-xs tracking-[0.2em] text-silver-dark uppercase">
                  {stat.label}
                </div>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
