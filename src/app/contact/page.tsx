import type { Metadata } from "next";
import ContactPageContent from "./ContactPageContent";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact RE A Thakgala Trading Enterprise — request a quotation, discuss your project requirements, or get in touch with our team.",
};

export default function ContactPage() {
  return <ContactPageContent />;
}
