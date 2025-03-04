import { motion } from 'framer-motion';
import { Shield, Lock, Users, ChevronDown } from 'lucide-react';

const trustFeatures = [
  {
    icon: Shield,
    text: "100% Discreet",
    color: "from-green-400 to-green-500",
    animationDelay: 0
  },
  {
    icon: Lock,
    text: "Secure",
    color: "from-blue-400 to-blue-500",
    animationDelay: 1.5
  },
  {
    icon: Users,
    text: "10,000+ Users",
    color: "from-purple-400 to-purple-500",
    animationDelay: 3
  }
];

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden bg-gradient-to-b from-white to-lazo-pink/5">
      <div className="container relative z-10">
        <div className="flex flex-col items-center space-y-12">
          {/* Hero Image Bubble */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative w-full max-w-[400px] mx-auto"
          >
            <div className="relative aspect-square">
              {/* Decorative background bubble */}
              <div className="absolute inset-0 bg-gradient-to-br from-lazo-pink/30 to-lazo-bordeaux/20 rounded-full blur-3xl" />
              
              {/* Floating animation container */}
              <motion.div
                animate={{
                  y: [0, -15, 0],
                  rotate: [0, 2, 0]
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="relative w-full h-full"
              >
                {/* Image container with glass effect */}
                <div className="absolute inset-4 bg-white/90 backdrop-blur-sm rounded-full shadow-2xl overflow-hidden border border-white/30">
                  <img
                    src="/images/hero-example.jpg"
                    alt="Woman using phone"
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Content Section */}
          <div className="text-center max-w-3xl mx-auto space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-lazo-bordeaux mb-6 leading-tight">
                Discover the Truth about
                <span className="gradient-text block">Your Relationship</span>
              </h1>
            </motion.div>

            {/* Trust Features - Centered with unified animation */}
            <div className="flex flex-wrap justify-center gap-6">
              {trustFeatures.map((feature) => (
                <motion.div
                  key={feature.text}
                  className="flex items-center gap-2"
                  animate={{ 
                    y: [0, -5, 0]
                  }}
                  transition={{
                    y: {
                      duration: 5,
                      repeat: Infinity,
                      ease: [0.4, 0, 0.2, 1],
                      delay: feature.animationDelay
                    }
                  }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div
                    className={`w-8 h-8 rounded-full bg-gradient-to-br ${feature.color} flex items-center justify-center shadow-md`}
                  >
                    <feature.icon className="w-4 h-4 text-white" />
                  </div>
                  <span className="small-text font-medium text-gray-700">
                    {feature.text}
                  </span>
                </motion.div>
              ))}
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-gray-700 max-w-2xl mx-auto"
            >
              Lazo helps you make informed decisions about your relationship with our certified loyalty experts.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col items-center gap-6"
            >
              <motion.a
                href="https://www.getlazo.app/providers"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 text-white bg-lazo-bordeaux rounded-full hover:bg-lazo-bordeaux-light transition-all transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Start a Loyalty Test now
              </motion.a>

              <motion.a
                href="#how-it-works"
                className="inline-flex items-center text-lazo-bordeaux hover:text-lazo-bordeaux-light transition-all group"
                whileHover={{ y: 5 }}
              >
                <span className="mr-2">How it works</span>
                <ChevronDown className="w-5 h-5 animate-bounce" />
              </motion.a>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
};

export default HeroSection;
