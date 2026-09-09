import type { Metadata } from "next";
import ServicesPageContent from "./ServicesPageContent";

export const metadata: Metadata = {
  title: "Services",
  description:
    "RE A Thakgala Trading Enterprise — civil engineering, construction and supply & trade services in South Africa.",
};

export default function ServicesPage() {
  return <ServicesPageContent />;
}
