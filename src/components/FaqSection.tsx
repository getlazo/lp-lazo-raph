
import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: "How long does a mission last?",
    answer: "2 days for acceptance of mission request → 5 days to realize the mission → 1 day to validate the mission."
  },
  {
    question: "Is the testing process really confidential?",
    answer: "Absolutely. We take privacy extremely seriously. All communications between you and our Checkers are encrypted, and we have strict confidentiality agreements with our team. Your partner will never know about the test unless you choose to tell them."
  },
  {
    question: "How to find a checker?",
    answer: "Visit the Browse section to discover our various checkers, you will find the perfect profile to help you!"
  },
  {
    question: "How does the payment process work?",
    answer: "When you request a loyalty test, your payment is securely held by Stripe. If the Checker accepts, the test starts, and the funds stay on hold until completion. If the Checker declines, the transaction is canceled, and you’re not charged. Once the test is done, the payment is either sent to the Checker (10 days) or fully refunded (up to 10 days) if the test isn’t completed."
  },
  {
    question: "What if my partner finds out about the test?",
    answer: "In this scenario, you can try alternative approaches with your checker. If your partner still doesn't respond, consider it a positive outcome! Once the checker has done their best to fulfill your request, he will be paid."
  }
];

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <span className="inline-block py-1 px-3 mb-4 text-xs font-medium text-lazo-bordeaux bg-lazo-pink/30 rounded-full">
            FAQ
          </span>
          <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4 text-lazo-bordeaux">
            Need Answers? We've Got You Covered
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Find clear responses to common questions about our loyalty tests.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className="border border-gray-200 rounded-xl overflow-hidden bg-white shadow-soft animate-fade-in"
                style={{ animationDelay: `${index * 75}ms` }}
              >
                <button
                  className="flex items-center justify-between w-full p-5 text-left"
                  onClick={() => toggleFaq(index)}
                >
                  <span className="font-medium text-gray-900">{faq.question}</span>
                  {openIndex === index ? 
                    <ChevronUp className="h-5 w-5 text-gray-500" /> : 
                    <ChevronDown className="h-5 w-5 text-gray-500" />
                  }
                </button>
                
                <div 
                  className={`px-5 pb-5 transition-all duration-300 ease-in-out overflow-hidden ${
                    openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-10 text-center">
            <p className="text-gray-600 mb-4">Still have questions?</p>
            <a 
              href="https://www.getlazo.app/contact-us" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center py-3 px-6 rounded-full bg-lazo-bordeaux text-white font-medium transition-all hover:bg-lazo-bordeaux-light"
            >
      Contact Support
</a>

          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
