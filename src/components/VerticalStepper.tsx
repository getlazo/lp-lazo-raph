import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

interface Step {
  step: string;
  title: string;
  description: string;
  color: string;
}

const steps: Step[] = [
  {
    step: "1",
    title: "Pick Your Checker",
    description: "Choose from our verified loyalty checkers based on your preferences.",
    color: "from-pink-100 to-pink-200",
  },
  {
    step: "2",
    title: "Share Key Details",
    description: "Tell us about your partner, and we'll tailor the approach to fit your needs.",
    color: "from-purple-100 to-purple-200",
  },
  {
    step: "3",
    title: "Stay in the Loop",
    description: "Chat with your checker, receive real-time updates, and adjust the strategy as needed.",
    color: "from-blue-100 to-blue-200",
  },
  {
    step: "4",
    title: "Get Your Answer",
    description: "Receive clear results with screenshots and insights Lazo helps you make sense of it all.",
    color: "from-green-100 to-green-200",
  },
];

const VerticalStepper = () => {
  const [activeStep, setActiveStep] = useState(0);
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      const interval = setInterval(() => {
        setActiveStep((prev) => (prev === steps.length - 1 ? 0 : prev + 1));
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [isInView]);

  return (
    <div ref={containerRef} className="relative max-w-4xl mx-auto">
      <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-200" />
      
      <div className="space-y-12">
        {steps.map((step, index) => (
          <motion.div
            key={step.step}
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="relative pl-16"
          >
            <motion.div
              className={`absolute left-0 w-16 h-16 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center text-2xl font-bold shadow-lg
                ${index === activeStep ? 'ring-4 ring-lazo-bordeaux ring-opacity-50' : ''}`}
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              onClick={() => setActiveStep(index)}
            >
              {step.step}
            </motion.div>

            <div
              className={`relative p-6 md:p-8 rounded-3xl bg-gradient-to-br ${step.color} transform transition-all duration-500
                ${index === activeStep ? 'scale-105 shadow-xl' : 'scale-100 shadow-md'}`}
            >
              <div className="absolute -left-3 top-1/2 -translate-y-1/2 w-6 h-6 bg-gradient-to-br ${step.color} transform rotate-45" />
              
              <h4 className="text-xl md:text-2xl font-bold mb-3">{step.title}</h4>
              <p className="text-gray-700">{step.description}</p>
            </div>

            {index < steps.length - 1 && (
              <motion.div
                className="absolute left-8 top-16 bottom-0 w-0.5 bg-lazo-bordeaux origin-top"
                initial={{ scaleY: 0 }}
                animate={isInView && index <= activeStep ? { scaleY: 1 } : {}}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              />
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default VerticalStepper; 