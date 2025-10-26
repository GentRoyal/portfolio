import { Navigation } from "./components/Navigation";
import { HeroSection } from "./components/HeroSection";
import { PortfolioSection } from "./components/PortfolioSection";
import { ArchitectureSection } from "./components/ArchitectureSection";
import { AboutSection } from "./components/AboutSection";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";
import { useEffect } from "react";

export default function App() {
  useEffect(() => {
    document.title = "Ridwan Lanre Yusuf - Data Scientist & AI/ML Engineer";
  }, []);

  return (
    <div id="home" className="min-h-screen bg-background text-foreground">
      <Navigation />
      <HeroSection />
      <PortfolioSection />
      <ArchitectureSection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
