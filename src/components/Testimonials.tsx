import { useState, useCallback, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Calendar, CheckCircle2 } from 'lucide-react';
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
    name: "Sarah M.",
    location: "London, UK",
    rating: 5,
    comment: "Thanks to Lazo, I found peace of mind. The process was simple and discreet.",
    date: "January 18, 2025",
    confidence: 98,
    result: "Loyal"
  },
  {
    id: 2,
    name: "Marie L.",
    location: "Seattle, WA",
    rating: 5,
    comment: "Professional and efficient service. I highly recommend it for anyone with doubts.",
    date: "March 10, 2024",
    confidence: 95,
    result: "Loyal"
  },
  {
    id: 3,
    name: " Sophie D.",
    location: "Paris, France",
    rating: 5,
    comment: "An experience that helped me make an informed decision. Thank you to the entire team.",
    date: "September 6, 2024",
    confidence: 92,
    result: "Loyal"
  },
  {
    id: 4,
    name: "Helena R.",
    location: "San Francisco, CA",
    rating: 5,
    comment: "Very satisfied with the service. The checker was attentive and professional.",
    date: "January 1, 2025",
    confidence: 97,
    result: "Loyal"
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
            <div className="flex items-center gap-4">
              <p className="small-text text-gray-600">{testimonial.location}</p>
              <span className="text-gray-300">•</span>
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

        <div className="flex items-center justify-between caption text-gray-500 pt-6 border-t border-gray-100">
          <div className="flex items-center gap-3">
            <Calendar className="w-5 h-5 text-lazo-bordeaux/60" />
            <span>{testimonial.date}</span>
          </div>
          <div className="flex items-center gap-3">
            <CheckCircle2 className="w-5 h-5 text-green-500" />
            <span>Test completed</span>
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
      delay: 5000,
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
    <section className="py-16 md:py-24 relative overflow-hidden">
      {/* Animated background bubbles */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 6 }).map((_, index) => (
          <motion.div
            key={index}
            className="absolute rounded-full bg-gradient-to-br from-lazo-pink/5 to-lazo-bordeaux/5"
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: [0.3, 0.5, 0.3],
              scale: [1, 1.1, 1],
            }}
            transition={{ 
              duration: 8,
              repeat: Infinity,
              delay: index * 2,
            }}
            style={{
              width: `${100 + (index * 50)}px`,
              height: `${100 + (index * 50)}px`,
              top: `${(index * 200) % 600}px`,
              left: `${(index * 300) % 1000}px`,
              filter: 'blur(40px)',
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block py-1 px-3 mb-4 caption font-medium text-lazo-bordeaux bg-lazo-pink/30 rounded-full">
              Testimonials
            </span>
            <h2 className="text-lazo-bordeaux mb-4">
              What Our Users Say
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover the experiences of our users with the Lazo service
            </p>
          </motion.div>
        </div>

        <div className="relative max-w-5xl mx-auto">
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
            whileTap={{ scale: 0.9 }}
            onClick={scrollPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center text-lazo-bordeaux hover:bg-white transition-all z-10 -translate-x-1/2"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6" />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={scrollNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center text-lazo-bordeaux hover:bg-white transition-all z-10 translate-x-1/2"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6" />
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
