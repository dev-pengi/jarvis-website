import { FC } from "react";
import BenefitsSection from "./ui/BenefitsSection";
import Footer from "./ui/Footer";
import HeroSection from "./ui/HeroSection";
import Navbar from "./ui/Navbar";
import PlatformSection from "./ui/PlatformSection";
import ProjectsSections from "./ui/ProjectsSections";
import WhatsappScreenshot from "./ui/WhatsappExample";

const Home: FC = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <ProjectsSections />
      <PlatformSection />
      <BenefitsSection />
      <WhatsappScreenshot />
      <Footer />
    </>
  );
};

export default Home;
