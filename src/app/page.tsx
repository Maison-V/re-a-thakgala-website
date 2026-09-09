import HeroSection from "@/components/HeroSection";
import CapabilityBar from "@/components/CapabilityBar";
import AboutPreview from "@/components/AboutPreview";
import ServicesPreview from "@/components/ServicesPreview";
import FeaturedProjectsPreview from "@/components/FeaturedProjectsPreview";
import EngineeringStats from "@/components/EngineeringStats";
import ProcessTimeline from "@/components/ProcessTimeline";
import CTASection from "@/components/CTASection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <CapabilityBar />
      <AboutPreview />
      <ServicesPreview />
      <FeaturedProjectsPreview />
      <EngineeringStats />
      <ProcessTimeline />
      <CTASection />
    </>
  );
}
