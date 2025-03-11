import { useState, useCallback, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Calendar } from 'lucide-react';
import useEmblaCarousel from 'embla-carousel-react';
import AutoPlay from 'embla-carousel-autoplay';

interface Testimonial {
  id: number;
  name: string;
  location: string;
  rating: number;
  comment: string;
  date: string;
  confidence: number;
  result: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Anonymous",
    location: "New York, NY",
    rating: 5,
    comment: "The Checker was super attentive and quick. My boyfriend shut it down instantly, and I felt real relief. Now, I trust him more than ever.",
    date: "November 15, 2024",
    confidence: 98,
    result: "Loyal"
  },
  {
    id: 2,
    name: "Anonymous",
    location: "Los Angeles, CA",
    rating: 5,
    comment: "My boyfriend folded after 3 messages lol. 1 year wasted on someone pretending to love me.",
    date: "December 28, 2024",
    confidence: 95,
    result: "Unfaithful"
  },
  {
    id: 3,
    name: "Anonymous",
    location: "Chicago, IL",
    rating: 5,
    comment: "He agreed to dinner with a random girl… Pathetic. Glad we had no kids. Thanks, Lazo, for opening my eyes.",
    date: "January 19, 2025",
    confidence: 92,
    result: "Unfaithful"
  },
  {
    id: 4,
    name: "Anonymous",
    location: "Miami, FL",
    rating: 5,
    comment: "My man passed the test with flying colors! He was respectful and made it clear he's taken. Couldn't be happier with the results!",
    date: "February 5, 2025",
    confidence: 97,
    result: "Loyal"
  },
  {
    id: 5,
    name: "Anonymous",
    location: "Houston, TX",
    rating: 5,
    comment: "The checker was amazing at getting responses. Found out he's been doing this to multiple girls. Dodged a bullet thanks to Lazo.",
    date: "March 1, 2025",
    confidence: 96,
    result: "Unfaithful"
  },
  {
    id: 6,
    name: "Anonymous",
    location: "Seattle, WA",
    rating: 5,
    comment: "Fast and professional service. My partner showed his true colors within hours. Heartbreaking but necessary truth.",
    date: "November 30, 2024",
    confidence: 94,
    result: "Unfaithful"
  },
  {
    id: 7,
    name: "Anonymous",
    location: "Boston, MA",
    rating: 5,
    comment: "Best money I've ever spent. My boyfriend immediately told the checker he has a girlfriend. So proud of him!",
    date: "January 8, 2025",
    confidence: 99,
    result: "Loyal"
  },
  {
    id: 8,
    name: "Anonymous",
    location: "Denver, CO",
    rating: 5,
    comment: "Caught him trying to plan a date within 10 minutes. These checkers know exactly what they're doing. Thank you for the wake-up call.",
    date: "February 22, 2025",
    confidence: 93,
    result: "Unfaithful"
  }
];

const TestimonialCard = ({ testimonial, isActive }: {
  testimonial: Testimonial;
  isActive: boolean;
}) => {
  return (
    <motion.div
      className="relative w-full max-w-xl mx-auto"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ 
        opacity: isActive ? 1 : 0.3, 
        scale: isActive ? 1 : 0.85,
        y: isActive ? 0 : 20
      }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: isActive ? 1.02 : 0.85 }}
    >
      <div className="p-8 rounded-2xl bg-gradient-to-br from-white to-lazo-pink/5 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-lazo-pink/10 hover:border-lazo-pink/20 transition-all duration-300">
        <div className="flex items-start gap-4 mb-8">
          <div className="w-14 h-14 rounded-full bg-gradient-to-br from-lazo-pink/20 to-lazo-bordeaux/10 flex items-center justify-center">
            <span className="text-2xl font-semibold text-lazo-bordeaux">
              {testimonial.name.charAt(0)}
            </span>
          </div>
          <div className="flex-1">
            <h3 className="mb-3 text-gray-900">{testimonial.name}</h3>
            <div className="flex items-center gap-4 flex-wrap md:flex-nowrap">
              <p className="text-sm whitespace-nowrap text-gray-600">{testimonial.location}</p>
              <span className="text-gray-300 hidden md:inline">•</span>
              <div className="flex items-center gap-1">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
              </div>
            </div>
          </div>
        </div>

        <blockquote className="relative mb-8">
          <div className="absolute -top-4 -left-4 text-7xl text-lazo-pink/10">"</div>
          <p className="relative text-gray-700 leading-relaxed pl-2">{testimonial.comment}</p>
        </blockquote>

        <div className="flex items-center justify-center caption text-gray-500 pt-6 border-t border-gray-100">
          <div className="flex items-center gap-3">
            <Calendar className="w-5 h-5 text-lazo-bordeaux/60" />
            <span>{testimonial.date}</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: 'center',
    dragFree: false,
    containScroll: 'trimSnaps',
    skipSnaps: true
  }, [
    AutoPlay({
      delay: 3000,
      stopOnInteraction: true,
      stopOnMouseEnter: true,
      rootNode: (emblaRoot) => emblaRoot.parentElement
    })
  ]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCurrentIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
  }, [emblaApi, onSelect]);

  return (
    <section id="testimonials" className="py-12 md:py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-lazo-bordeaux mb-4 leading-tight font-bold">
            What our users say
          </h2>
        </div>

        <div className="relative max-w-[85vw] md:max-w-5xl mx-auto">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {testimonials.map((testimonial, index) => (
                <div
                  key={testimonial.id}
                  className="flex-[0_0_100%] min-w-0 px-4 py-8"
                >
                  <TestimonialCard
                    testimonial={testimonial}
                    isActive={currentIndex === index}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Navigation buttons */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9, y: 2 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.2 }}
            onClick={scrollPrev}
            className="absolute -left-8 md:-left-16 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/90 shadow-lg flex items-center justify-center text-lazo-bordeaux hover:bg-white transition-all z-10"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9, y: 2 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.2 }}
            onClick={scrollNext}
            className="absolute -right-8 md:-right-16 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/90 shadow-lg flex items-center justify-center text-lazo-bordeaux hover:bg-white transition-all z-10"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
