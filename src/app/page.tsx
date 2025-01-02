import BenefitsSection from "./ui/BenefitsSection";
import Footer from "./ui/Footer";
import HeroSection from "./ui/HeroSection";
import Navbar from "./ui/Navbar";
import PlatformSection from "./ui/PlatformSection";
import ProjectsSections from "./ui/ProjectsSections";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <ProjectsSections />
      <PlatformSection />
      <BenefitsSection />
      <Footer />
    </>
  );
}
