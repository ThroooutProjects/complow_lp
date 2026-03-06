import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import ProblemSection from "./components/ProblemSection";
import SolutionSection from "./components/SolutionSection";
import DemoSection from "./components/DemoSection";
import WhySection from "./components/WhySection";
import FeaturesSection from "./components/FeaturesSection";
import AudienceSection from "./components/AudienceSection";
import PricingSection from "./components/PricingSection";
import FutureSection from "./components/FutureSection";
import FinalCTA from "./components/FinalCTA";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <DemoSection />
      <WhySection />
      <FeaturesSection />
      <AudienceSection />
      <PricingSection />
      <FutureSection />
      <FinalCTA />
      <Footer />
    </>
  );
}
