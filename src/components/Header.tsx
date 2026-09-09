"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ChevronRight } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/capabilities", label: "Capabilities" },
  { href: "/profile", label: "Company Profile" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-obsidian/90 backdrop-blur-md border-b border-graphite"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex flex-col group">
            <span className="font-[family-name:var(--font-oswald)] text-xl sm:text-2xl font-bold tracking-[0.15em] text-white leading-tight">
              RE A THAKGALA
            </span>
            <span className="font-[family-name:var(--font-oswald)] text-[10px] sm:text-xs tracking-[0.3em] text-gold uppercase">
              Trading Enterprise
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-3 py-2 text-xs tracking-wider uppercase text-silver-dark hover:text-gold transition-colors font-[family-name:var(--font-body)]"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="ml-4 px-5 py-2.5 bg-gold text-obsidian text-xs font-semibold tracking-wider uppercase hover:bg-gold-deep transition-colors"
            >
              Request a Quotation
            </Link>
          </nav>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden text-white p-2"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`lg:hidden fixed inset-0 bg-obsidian/98 backdrop-blur-lg transition-transform duration-300 ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
        style={{ top: "var(--header-h, 64px)" }}
      >
        <nav className="flex flex-col items-start p-8 gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="flex items-center justify-between w-full py-4 border-b border-graphite text-silver hover:text-gold transition-colors"
            >
              <span className="font-[family-name:var(--font-oswald)] text-lg tracking-wider uppercase">
                {link.label}
              </span>
              <ChevronRight size={16} className="text-gold" />
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setMobileOpen(false)}
            className="mt-8 w-full px-6 py-4 bg-gold text-obsidian text-sm font-semibold tracking-wider uppercase text-center hover:bg-gold-deep transition-colors"
          >
            Request a Quotation
          </Link>
        </nav>
      </div>
    </header>
  );
}
