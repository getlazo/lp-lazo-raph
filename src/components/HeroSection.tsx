import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-16 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 -z-10 opacity-20">
        <div className="absolute top-0 left-0 w-72 h-72 rounded-full bg-lazo-pink blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-lazo-bordeaux blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 py-12 md:py-20">
        <div className="max-w-3xl mx-auto">
          <div className="animate-fade-in">
            <span className="inline-block py-1 px-3 mb-6 text-xs font-medium text-lazo-bordeaux bg-lazo-pink/30 rounded-full">
              Discover the truth
            </span>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold leading-tight text-balance mb-6 text-lazo-bordeaux">
              Find the truth with secure loyalty tests! 
            </h1>
            
            <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-2xl text-balance">
              Lazo connects you with professional loyalty testers who help you discover the truth about your relationship in a safe, confidential way.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="https://www.getlazo.app/providers"
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center py-3 px-6 rounded-full bg-lazo-bordeaux text-white font-medium transition-all hover:bg-lazo-bordeaux-light hover:shadow-lg focus:ring-2 focus:ring-lazo-bordeaux focus:ring-offset-2"
              >
                Get a loyalty test
                <ArrowRight size={18} className="ml-2" />
              </a>
              
              <a 
                href="#how-it-works" 
                className="inline-flex items-center justify-center py-3 px-6 rounded-full border border-gray-300 text-gray-700 font-medium transition-all hover:bg-gray-50"
              >
                How it works
              </a>

            </div>
          </div>
          
          <div className="mt-12 md:mt-16 flex justify-center">
            <div className="relative py-4 px-5 rounded-lg glass-card animate-slide-up">
              <p className="text-sm text-gray-600 italic">
                "Lazo helped me find the truth I needed. The process was discreet and professional."
              </p>
              <div className="mt-2 flex items-center">
                <div className="h-8 w-8 rounded-full bg-lazo-pink"></div>
                <div className="ml-2">
                  <p className="text-xs font-medium text-gray-800">Sarah M.</p>
                  <p className="text-xs text-gray-500">Verified user</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
