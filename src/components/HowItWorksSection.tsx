import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

interface Step {
  step: string;
  title: string;
  description: string;
  gradient: string;
  delay: number;
}

const steps: Step[] = [
  {
    step: "1",
    title: "Pick Your Checker",
    description: "Select a loyalty checker based on your partner's tastes.",
    gradient: "from-pink-400 to-pink-500",
    delay: 0
  },
  {
    step: "2",
    title: "Set Up Your Test",
    description: "Provide instructions to your checker.",
    gradient: "from-purple-400 to-purple-500",
    delay: 0.2
  },
  {
    step: "3",
    title: "Discreet Results",
    description: "Your loyalty test remains 100% confidential. We never share private information, and everything stays anonymous.",
    gradient: "from-blue-400 to-blue-500",
    delay: 0.4
  }
];

const HowItWorksSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeStep, setActiveStep] = useState(0);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (latest) => {
      const step = Math.min(2, Math.floor(latest * 3));
      setActiveStep(step);
    });

    return () => unsubscribe();
  }, [scrollYProgress]);

  return (
    <section className="py-12 md:py-16 bg-gradient-to-br from-lazo-pink/5 to-lazo-pink/20 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.8),transparent_70%)]" />
      
      <div className="container mx-auto px-4 relative z-10" ref={containerRef}>
        <div className="text-center mb-12 bg-white/0">
          <div className="flex justify-center mb-6">
            <img
              src="/images/logo.png"
              alt="Lazo Logo"
              className="h-16 w-auto"
              loading="lazy"
            />
          </div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            id="how-it-works"
            className="text-lazo-bordeaux mb-4 leading-tight font-bold"
            style={{ 
              textShadow: 'none',
              textRendering: 'optimizeLegibility'
            }}
          >
            How Does A Loyalty Test Work?
          </motion.h2>
        </div>

        <div className="max-w-5xl mx-auto relative">
          {/* Progress Line */}
          <div className="absolute left-[22px] md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-transparent via-lazo-bordeaux/20 to-transparent">
            <motion.div
              className="absolute top-0 left-0 right-0 bg-gradient-to-b from-lazo-bordeaux via-lazo-bordeaux to-lazo-bordeaux/50 rounded-full"
              style={{
                height: useTransform(scrollYProgress, [0, 1], ["0%", "100%"]),
              }}
            />
          </div>

          <div className="space-y-12 md:space-y-24">
            {steps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: step.delay }}
                className={`relative flex ${index % 2 === 0 ? 'md:justify-end' : 'md:justify-start'} items-center`}
              >
                <div className={`w-full md:w-[calc(50%-2rem)] ${index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'} pl-12 md:pl-0`}>
                  {/* Step Content */}
                  <motion.div
                    className={`relative p-5 md:p-8 rounded-2xl bg-white shadow-lg transition-all duration-300 border border-white/20 ${
                      index === activeStep ? 'scale-[1.02]' : 'scale-100'
                    }`}
                    style={{
                      background: `linear-gradient(135deg, ${step.gradient.split(' ')[1]}, ${
                        step.gradient.split(' ')[3]
                      })`,
                    }}
                  >
                    {/* Step Number */}
                    <div className="absolute -left-10 md:-left-6 top-1/2 md:-top-6 -translate-y-1/2 md:translate-y-0 z-10">
                      <motion.div
                        className="relative w-8 md:w-12 h-8 md:h-12"
                        animate={{
                          scale: index === activeStep ? 1.1 : 1,
                        }}
                      >
                        <div className="absolute inset-0 bg-white rounded-xl shadow-lg transform -rotate-6" />
                        <div className={`absolute inset-0 bg-gradient-to-br ${step.gradient} rounded-xl shadow-lg transform rotate-3`} />
                        <div className="absolute inset-0 bg-white rounded-xl shadow-lg flex items-center justify-center">
                          <span className="text-lg md:text-2xl font-bold bg-gradient-to-br from-lazo-bordeaux to-lazo-bordeaux-light bg-clip-text text-transparent">
                            {step.step}
                          </span>
                        </div>
                      </motion.div>
                    </div>

                    <div className="ml-0">
                      <h3 className="mb-2 md:mb-3 text-gray-900">{step.title}</h3>
                      <p className="text-gray-700 leading-relaxed">{step.description}</p>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 md:mt-24 text-center"
        >
          <a
            href="https://www.getlazo.app/providers"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 md:px-8 py-4 text-white bg-lazo-bordeaux rounded-full hover:bg-lazo-bordeaux-light transition-all transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl"
          >
            Start my test
            <MessageCircle size={20} className="ml-2" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorksSection; 