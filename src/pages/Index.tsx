import { useEffect } from 'react';
import HeroSection from '@/components/HeroSection';
import CheckersSection from '@/components/CheckersSection';
import Testimonials from '@/components/Testimonials';
import FaqSection from '@/components/FaqSection';
import PressSection from '@/components/PressSection';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import BackgroundShapes from '@/components/BackgroundShapes';
import HowItWorksSection from '@/components/HowItWorksSection';

const Index = () => {
  useEffect(() => {
    // Handle anchor links with smooth scroll
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLAnchorElement;
      if (target.hash && target.hash.startsWith('#')) {
        e.preventDefault();
        const element = document.querySelector(target.hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);

  return (
    <div className="relative min-h-screen bg-white">
      <BackgroundShapes />
      <Navbar />
      
      <main className="relative">
        <div className="space-y-0">
          <HeroSection />
          <CheckersSection />
          <HowItWorksSection />
          <PressSection />
          <Testimonials />
          <FaqSection />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
