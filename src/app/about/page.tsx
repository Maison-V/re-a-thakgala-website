import type { Metadata } from "next";
import AboutPageContent from "./AboutPageContent";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about RE A Thakgala Trading Enterprise — a South African civil engineering, construction and supply solutions company led by Managing Director Ruloff Davis.",
};

export default function AboutPage() {
  return <AboutPageContent />;
}
