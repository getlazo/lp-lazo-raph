import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { motion } from 'framer-motion';

const faqs = [
  {
    question: "Is my data safe and confidential?",
    answer: "Absolutely. All loyalty tests are 100% anonymous. We never share private information. Any videos shared on social media are either staged or posted with explicit consent. Your privacy is our highest priority."
  },
  {
    question: "How long does a mission last?",
    answer: "Once you submit a mission request, it takes up to 2 days for acceptance, 5 days for the mission to be completed, and 1 day for validation."
  },
  {
    question: "Is the testing process really confidential?",
    answer: "Yes. We take privacy extremely seriously. All communications are encrypted, and our Checkers adhere to strict confidentiality agreements. Your partner will never know about the test unless you choose to share it."
  },
  {
    question: "How to find a Checker?",
    answer: "Simply visit the 'Catalog' section to explore our available Checkers and choose the profile that suits your needs best."
  },
  {
    question: "How does the payment process work?",
    answer: "Payments are securely handled by Stripe. When you request a test, the payment is held securely. If the Checker accepts, the funds are held until the mission is completed. If declined, the payment is canceled. After the test, payment is released to the Checker (within 10 days) or refunded to you (within 10 days if the test isn't completed)."
  },
  {
    question: "What if my partner finds out about the test?",
    answer: "If this happens, you can explore alternative approaches with your Checker. If your partner doesn't engage, consider it a positive outcome. Once the Checker has done their best, they will be compensated."
  }
];

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-4 md:py-8 bg-white">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="container mx-auto px-4"
      >
        <div className="text-center mb-8 md:mb-12">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-block py-2 px-6 mb-4 text-lg font-medium text-lazo-bordeaux bg-lazo-pink/30 rounded-full"
          >
            FAQ
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-5xl text-lazo-bordeaux mb-6 font-bold"
          >
            Need Answers? We've Got You Covered
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
          </motion.p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className="border border-gray-200 rounded-xl overflow-hidden bg-white shadow-soft animate-fade-in hover:border-lazo-pink/20 transition-all duration-300"
                style={{ animationDelay: `${index * 75}ms` }}
              >
                <button
                  className="flex items-center justify-between w-full p-5 text-left"
                  onClick={() => toggleFaq(index)}
                >
                  <span className="font-medium text-gray-900">{faq.question}</span>
                  {openIndex === index ? 
                    <ChevronUp className="h-5 w-5 text-gray-500 transition-transform duration-300" /> : 
                    <ChevronDown className="h-5 w-5 text-gray-500 transition-transform duration-300" />
                  }
                </button>
                
                <div 
                  className={`transition-all duration-300 ease-in-out overflow-hidden bg-gray-50/50 ${
                    openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <p className="px-5 pb-5 pt-2 text-gray-600">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-10 text-center">
            <p className="text-gray-600 mb-4">Still have questions?</p>
            <a 
              href="https://www.getlazo.app/contact-us" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center py-3 px-6 rounded-full bg-lazo-bordeaux text-white font-medium transition-all hover:bg-lazo-bordeaux-light"
            >
      Contact Support
</a>

          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default FaqSection;
