
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Hero } from "@/components/ui/animated-hero";
import Features from "@/components/home/Features";
import Benefits from "@/components/home/Benefits";
import CTA from "@/components/home/CTA";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="bg-medivault-blue">
        <Navbar />
        <Hero />
      </div>
      <Features />
      <Benefits />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
