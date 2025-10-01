import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import LogoCloud from "@/components/sections/LogoCloud";
import { FeatureGrid } from "@/components/sections/FeatureGrid";
import { Footer } from "@/components/layout/Footer";
import { SectionHeader } from "@/components/sections/SectionHeader";
import { HeroVideoSection } from "@/components/sections/HeroVideoSection";
import MediaCardSection from "@/components/MediaCardSection";
import MediaCardSectionFull from "@/components/MediaCardSectionFull";
import CreativePartners from "@/components/CreativePartners";
import Timeline from "@/components/Timeline";

export default function HomePage() {
  return (
    <main className="relative min-h-screen bg-background text-foreground">
      <HeroVideoSection />

      <LogoCloud />

      <div id="projects">
        <CreativePartners />
      </div>

      <Footer />
      {/* <SectionHeader /> */}
    </main>
  );
}
