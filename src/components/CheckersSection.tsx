import { useState } from 'react';
import { MessageCircle, Shield, Star } from 'lucide-react';

// Checker data
const checkers = [
  {
    id: 1,
    name: 'Trinity',
    age: 22,
    location: 'Florida',
    rating: 4.9,
    reviews: 127,
    imgUrl: '/checker-images/trinity-3.jpg',
  },
  {
    id: 2,
    name: 'Zelgin',
    age: 22,
    location: 'New York',
    rating: 4.8,
    reviews: 93,
    imgUrl: '/checker-images/zelgin-3.jpg',
  },
  {
    id: 3,
    name: 'Valentina',
    age: 26,
    location: 'San Diego',
    rating: 4.9,
    reviews: 108,
    imgUrl: '/checker-images/valentina-3.jpg',
  },
  {
    id: 4,
    name: 'Ryan',
    age: 24,
    location: 'Florida',
    rating: 4.7,
    reviews: 89,
    imgUrl: '/checker-images/ryan-3.jpg',
  },
];

const CheckersSection = () => {
  return (
    <section id="checkers" className="py-16 md:py-24 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-block py-1 px-3 mb-4 text-xs font-medium text-lazo-bordeaux bg-lazo-pink/30 rounded-full">
            Top-Rated Checkers
          </span>
          <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4 text-lazo-bordeaux">
          Chat with Verified Loyalty Checkers
          </h2>
        </div>

        <div className="flex flex-wrap justify-center gap-6 md:gap-8">
          {checkers.map((checker) => (
            <div key={checker.id} className="checker-card w-36 md:w-44">
              <div className="relative h-48 md:h-56 bg-lazo-pink/10 overflow-hidden rounded-2xl">
                <img
                  src={checker.imgUrl}
                  alt={checker.name}
                  className="w-full h-full object-cover transition-transform hover:scale-105"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-3">
                  <div className="text-white">
                    <h3 className="font-medium text-lg">{checker.name}, {checker.age}</h3>
                    <p className="text-xs opacity-90">{checker.location}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <a 
            href="https://www.getlazo.app/providers" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="py-3 px-6 rounded-full bg-lazo-bordeaux text-white font-medium transition-all hover:bg-lazo-bordeaux-light hover:shadow-lg"
          >
            See all Checkers
          </a>
        </div>
      </div>

      <div className="mt-16 md:mt-24 bg-lazo-pink/10 py-10 md:py-16 relative">
        <div className="container mx-auto px-4 text-center">
          <h3 id="how-it-works" className="text-3xl font-playfair font-bold mb-10 text-lazo-bordeaux">
            How the Loyalty Test works at Lazo
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "1", title: "Pick Your Checker", description: "Choose from our verified loyalty checkers based on your preferences." },
              { step: "2", title: "Share Key Details", description: "Tell us about your partner, and we’ll tailor the approach to fit your needs." },
              { step: "3", title: "Stay in the Loop", description: "Chat with your checker, receive real-time updates, and adjust the strategy as needed." },
              { step: "4", title: "Get Your Answer", description: "Receive clear results with screenshots and insights Lazo helps you make sense of it all." },
            ].map(({ step, title, description }) => (
              <div key={step} className="bg-white p-6 rounded-xl shadow-lg">
                <div className="w-14 h-14 rounded-full bg-lazo-bordeaux text-white flex items-center justify-center text-2xl font-bold mb-4 mx-auto">
                  {step}
                </div>
                <h4 className="text-lg font-medium mb-2">{title}</h4>
                <p className="text-gray-600 text-sm">{description}</p>
              </div>
            ))}
          </div>

          <div className="mt-10">
            <a 
              href="https://www.getlazo.app/providers" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center justify-center py-3 px-6 rounded-full bg-lazo-bordeaux text-white font-medium transition-all hover:bg-lazo-bordeaux-light"
            >
              Start your test now
              <MessageCircle size={18} className="ml-2" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CheckersSection;
