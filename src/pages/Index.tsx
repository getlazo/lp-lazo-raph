import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import CheckersSection from "@/components/CheckersSection";
import PressSection from "@/components/PressSection";
import Testimonials from "@/components/Testimonials";
import FaqSection from "@/components/FaqSection";
import Footer from "@/components/Footer";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    const handleAnchorClick = (e: Event) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a');
      
      if (anchor && anchor.hash && anchor.hash.startsWith('#')) {
        e.preventDefault();
        const id = anchor.hash.slice(1);
        const element = document.getElementById(id);
        
        if (element) {
          const offset = 80; // Offset for fixed header
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - offset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);

  return (
    <div className="bg-lazo-offwhite min-h-screen">
      <Navbar />
      <HeroSection />
      <CheckersSection />
      <PressSection />
      <Testimonials />
      <FaqSection />
      <Footer />
    </div>
  );
};

export default Index;
