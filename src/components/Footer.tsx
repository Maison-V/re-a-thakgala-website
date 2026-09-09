import Link from "next/link";
import Container from "./Container";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/capabilities", label: "Capabilities" },
  { href: "/contact", label: "Contact" },
];

const serviceLinks = [
  { href: "/services#civil", label: "Civil Engineering" },
  { href: "/services#construction", label: "Construction" },
  { href: "/services#supply", label: "Supply & Trade" },
];

const legalLinks = [
  { href: "#", label: "Privacy Policy" },
  { href: "#", label: "Terms & Conditions" },
  { href: "#", label: "POPIA Notice" },
];

export default function Footer() {
  return (
    <footer className="bg-charcoal border-t border-graphite">
      <Container className="py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <span className="font-[family-name:var(--font-oswald)] text-2xl font-bold tracking-[0.15em] text-white block leading-tight">
                RE A THAKGALA
              </span>
              <span className="font-[family-name:var(--font-oswald)] text-xs tracking-[0.3em] text-gold uppercase">
                Trading Enterprise
              </span>
            </div>
            <p className="text-sm text-silver-dark leading-relaxed italic">
              &ldquo;Building Today for a Stronger Tomorrow&rdquo;
            </p>
            <div className="mt-4 w-12 h-0.5 bg-gold" />
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-[family-name:var(--font-oswald)] text-sm tracking-[0.2em] text-white uppercase mb-6">
              Navigation
            </h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-silver-dark hover:text-gold transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-[family-name:var(--font-oswald)] text-sm tracking-[0.2em] text-white uppercase mb-6">
              Services
            </h4>
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-silver-dark hover:text-gold transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-[family-name:var(--font-oswald)] text-sm tracking-[0.2em] text-white uppercase mb-6">
              Contact
            </h4>
            <div className="space-y-3 text-sm text-silver-dark">
              <p>
                <span className="text-white font-medium">Ruloff Davis</span>
                <br />
                Managing Director
              </p>
              <p>South Africa</p>
            </div>
            <Link
              href="/contact"
              className="inline-block mt-6 px-5 py-2.5 border border-gold text-gold text-xs font-semibold tracking-wider uppercase hover:bg-gold hover:text-obsidian transition-all"
            >
              Get in Touch
            </Link>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-graphite flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex flex-wrap gap-4">
            {legalLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-xs text-silver-dark hover:text-gold transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
          <p className="text-xs text-silver-dark">
            &copy; {new Date().getFullYear()} RE A Thakgala Trading Enterprise. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}
