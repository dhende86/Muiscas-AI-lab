import { Navbar } from "../components/Navbar";
import { Hero } from "../components/Hero";
import { TopicsSection } from "../components/TopicsSection";
import { WhySection } from "../components/WhySection";
import { BeginnerPath } from "../components/BeginnerPath";
import { Footer } from "../components/Footer";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />

      {/* Divider */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="h-px bg-gradient-to-r from-transparent via-[#1e3a5f]/60 to-transparent" />
      </div>

      <TopicsSection />

      {/* Divider */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="h-px bg-gradient-to-r from-transparent via-[#1e3a5f]/60 to-transparent" />
      </div>

      <WhySection />

      {/* Divider */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="h-px bg-gradient-to-r from-transparent via-[#1e3a5f]/60 to-transparent" />
      </div>

      <BeginnerPath />

      <Footer />
    </>
  );
}
