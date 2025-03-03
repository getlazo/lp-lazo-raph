import { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Harper L.',
    age: 28,
    location: 'Los Angeles, CA',
    text: "I had suspicions for months but couldn't confront my partner directly. Lazo provided the clarity I needed in a professional way. The loyalty test was conducted discreetly, and the results helped me make an informed decision about my relationship.",
    rating: 5,
  },
  {
    id: 2,
    name: 'Michael P.',
    age: 32,
    location: 'Austin, TX',
    text: "The peace of mind I got from Lazo was worth every penny. My checker was incredibly professional and the whole process was handled with utmost discretion. Turns out my suspicions were unfounded, and now our relationship is stronger than ever.",
    rating: 5,
  },
  {
    id: 3,
    name: 'Jordie T.',
    age: 26,
    location: 'Phoenix, AZ',
    text: "The Checker was incredibly attentive, following every request I had. She responded quickly, easing my anxiety in a way I didn’t expect. And when my boyfriend shut it down and mentioned me right away, I felt an instant wave of relief. Now, I trust him more than ever, and our relationship feels even stronger.",
    rating: 4,
  },
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-16 md:py-24 bg-lazo-bordeaux/5 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <span className="inline-block py-1 px-3 mb-4 text-xs font-medium text-lazo-bordeaux bg-lazo-pink/30 rounded-full">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4 text-lazo-bordeaux">
            And so does our customers
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Real stories from people who found clarity with Lazo's loyalty testing service.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-white rounded-2xl shadow-soft p-6 md:p-10 overflow-hidden">
            <div className="absolute top-4 left-4 text-lazo-pink opacity-20">
              <Quote size={60} />
            </div>
            
            <div className="relative z-10">
              {testimonials.map((testimonial, index) => (
                <div
                  key={testimonial.id}
                  className={`transition-opacity duration-500 ${
                    index === activeIndex ? 'opacity-100' : 'opacity-0 absolute inset-0'
                  }`}
                >
                  <p className="text-lg md:text-xl text-gray-700 italic mb-6">
                    "{testimonial.text}"
                  </p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-lazo-pink"></div>
                    <div className="ml-3">
                      <p className="font-medium text-gray-900">{testimonial.name}</p>
                      <p className="text-sm text-gray-500">{testimonial.age}, {testimonial.location}</p>
                    </div>
                    <div className="ml-auto flex">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <svg
                          key={i}
                          className="w-5 h-5 text-yellow-400 fill-current"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="flex justify-between mt-8">
              <button
                onClick={prevTestimonial}
                className="p-2 rounded-full border border-gray-200 text-gray-600 hover:bg-gray-50 transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={20} />
              </button>
              
              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`w-2.5 h-2.5 rounded-full transition-colors ${
                      index === activeIndex ? 'bg-lazo-bordeaux' : 'bg-gray-300'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
              
              <button
                onClick={nextTestimonial}
                className="p-2 rounded-full border border-gray-200 text-gray-600 hover:bg-gray-50 transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>
        
        <div className="mt-16 md:mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl p-6 shadow-soft animate-fade-in">
            <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">100% Confidential</h3>
            <p className="text-gray-600">Your privacy is our priority. All tests are conducted with complete discretion and confidentiality.</p>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-soft animate-fade-in delay-75">
            <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">Verified Checkers</h3>
            <p className="text-gray-600">All our loyalty testers undergo rigorous verification and training to provide professional service.</p>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-soft animate-fade-in delay-150">
            <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v.01M3 13v.01" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">Secure Payment</h3>
            <p className="text-gray-600">Powered by Stripe, your payment information is secure and encrypted.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
