import type { Metadata } from "next";
import CapabilitiesPageContent from "./CapabilitiesPageContent";

export const metadata: Metadata = {
  title: "Capabilities",
  description:
    "Why RE A Thakgala Trading Enterprise — integrity, quality, safety, reliability, technical approach and partnerships.",
};

export default function CapabilitiesPage() {
  return <CapabilitiesPageContent />;
}
