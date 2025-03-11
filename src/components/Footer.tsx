import { Heart, Instagram, Facebook, Youtube } from 'lucide-react';

const TikTokIcon = ({ size = 20, className = "" }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="currentColor"
    className={className}
  >
    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0011.14-4.02v-7a8.16 8.16 0 004.65 1.48V7.1a4.79 4.79 0 01-1.2-.41z"/>
  </svg>
);

const Footer = () => {
  return (
    <footer className="bg-lazo-bordeaux text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <img
                src="/images/LazoOnPurple.png"
                alt="Lazo Logo"
                className="h-8 w-auto"
                loading="lazy"
              />
              
            </div>
            <p className="text-white/80 mb-6 max-w-md">
              Discreetly test your partner's loyalty and find peace of mind. Our professional Checkers help you discover the truth about your relationship.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.instagram.com/getlazo/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-white/80 hover:text-white transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="https://www.facebook.com/people/GetLazo/61550515151213/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-white/80 hover:text-white transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a 
                href="https://www.youtube.com/@GetLazo" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-white/80 hover:text-white transition-colors"
              >
                <Youtube size={20} />
              </a>
              <a 
                href="https://www.tiktok.com/@getlazo" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-white/80 hover:text-white transition-colors"
              >
                <TikTokIcon size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">Home</a></li>
              <li><a href="#checkers" className="text-white/80 hover:text-white transition-colors">Our Checkers</a></li>
              <li><a href="#how-it-works" className="text-white/80 hover:text-white transition-colors">How It Works</a></li>
              <li><a href="#testimonials" className="text-white/80 hover:text-white transition-colors">Testimonials</a></li>
              <li><a href="#faq" className="text-white/80 hover:text-white transition-colors">FAQ</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <a 
                  href="https://www.getlazo.app/privacy" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-white/80 hover:text-white transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a 
                  href="https://www.getlazo.app/terms" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-white/80 hover:text-white transition-colors"
                >
                  Terms of Service
                </a>
              </li>
              <li>
                <a 
                  href="https://www.getlazo.app/cookies" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-white/80 hover:text-white transition-colors"
                >
                  Cookie Policy
                </a>
              </li>
              <li>
                <a 
                  href="https://intercom.help/lazo-help-center/en/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-white/80 hover:text-white transition-colors"
                >
                  Help Center
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-white/20 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/80 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Lazo. All rights reserved.
          </p>
          <p className="text-white/80 text-sm flex items-center">
            Made with <Heart size={14} className="mx-1 text-lazo-pink" /> 
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
