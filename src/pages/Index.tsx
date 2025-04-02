
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
    document.title = 'Getlazo - #1 Loyalty Test App | Test Your Partner\'s Fidelity';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', "Lazo: The #1 Loyalty Test service. Wondering if they're loyal? Getlazo connects you with expert agents who discreetly test your partner's fidelity through social media.");
    }

    // Add structured data for better SEO
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'Service',
      'name': 'Lazo Loyalty Test',
      'description': 'Discreet loyalty testing service to verify partner fidelity',
      'url': 'https://getlazo.app',
      'provider': {
        '@type': 'Organization',
        'name': 'Getlazo',
        'url': 'https://getlazo.app'
      }
    });
    document.head.appendChild(script);

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
    return () => {
      window.removeEventListener('scroll', handleScroll);
      // Remove the script when component unmounts
      const jsonLdScript = document.querySelector('script[type="application/ld+json"]');
      if (jsonLdScript) {
        document.head.removeChild(jsonLdScript);
      }
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-white">
      {/* SEO-optimized hidden heading for search engines */}
      <h1 className="sr-only">Lazo - The Ultimate Loyalty Test Service | Test Your Partner's Fidelity Discreetly</h1>
      
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
