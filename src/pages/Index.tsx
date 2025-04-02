
import { useEffect } from 'react';
import HeroSection from '@/components/HeroSection';
import CheckersSection from '@/components/CheckersSection';
import BackgroundShapes from '@/components/BackgroundShapes';
import HowItWorksSection from '@/components/HowItWorksSection';
import ChatSection from '@/components/ChatSection';
import PressSection from '@/components/PressSection';
import Testimonials from '@/components/Testimonials';
import FaqSection from '@/components/FaqSection';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import SoulessjayBanner from '@/components/SoulessjayBanner';

const Index = () => {
  useEffect(() => {
    // Set title and meta tags
    document.title = 'Getlazo - Test your partner\'s loyalty with one click';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', "Wondering if they're loyal? Getlazo connects you with real agents who discreetly test your partner's fidelity on social media.");
    }

    // Handle navbar scroll effect
    const handleScroll = () => {
      const navbar = document.getElementById('navbar');
      if (navbar) {
        if (window.scrollY > 0) {
          navbar.classList.add('bg-white/80', 'backdrop-blur-lg', 'shadow-sm');
        } else {
          navbar.classList.remove('bg-white/80', 'backdrop-blur-lg', 'shadow-sm');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen bg-white">
      <BackgroundShapes />
      <Navbar />
      
      <main className="relative">
        <div className="space-y-0">
          <HeroSection />
          <SoulessjayBanner />
          <CheckersSection />
          <HowItWorksSection />
          <ChatSection />
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
