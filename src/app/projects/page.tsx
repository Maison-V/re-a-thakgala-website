import type { Metadata } from "next";
import ProjectsPageContent from "./ProjectsPageContent";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "View RE A Thakgala Trading Enterprise project portfolio — civil engineering, construction and infrastructure projects across South Africa.",
};

export default function ProjectsPage() {
  return <ProjectsPageContent />;
}
