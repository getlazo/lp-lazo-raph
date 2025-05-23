import { useState, useCallback, useEffect } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight, Star, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import AutoPlay from 'embla-carousel-autoplay';

// Checker data
const checkers = [
  {
    id: 1,
    name: 'Trinity',
    age: 22,
    location: 'Tampa, FL',
    rating: 4.9,
    reviews: 84,
    imgUrl: '/checker-images/trinity-3.jpg',
    speciality: 'High Fold Rate',
    providerUrl: 'https://www.getlazo.app/providers/clmumc0z70001l808m08abq4z'
  },
  {
    id: 2,
    name: 'Zelgin',
    age: 22,
    location: 'New York, NY',
    rating: 5.0,
    reviews: 65,
    imgUrl: '/checker-images/zelgin-3.jpg',
    speciality: 'Instagram Specialist',
    providerUrl: 'https://www.getlazo.app/providers/cltq9zfrr0006wgsuf8gmhzxa'
  },
  {
    id: 3,
    name: 'Valentina',
    age: 26,
    location: 'San Diego, CA',
    rating: 4.9,
    reviews: 89,
    imgUrl: '/checker-images/valentina-3.jpg',
    speciality: 'Smooth Talker',
    providerUrl: 'https://www.getlazo.app/providers/cm4txr36m00028oyi8imjwztp'
  },
  {
    id: 4,
    name: 'Ryan',
    age: 61,
    location: 'Miami, FL',
    rating: 5.0,
    reviews: 8,
    imgUrl: '/checker-images/ryan-3.jpg',
    speciality: 'Investigation Expert',
    providerUrl: 'https://www.getlazo.app/providers/cm477w5ec0002kcnb7kwtw7h3'
  },
  {
    id: 5,
    name: 'Sofia',
    age: 28,
    location: 'Miami, FL',
    rating: 5,
    reviews: 56,
    imgUrl: '/checker-images/sofia.jpg',
    speciality: 'Charismatic & Persuasive',
    providerUrl: 'https://www.getlazo.app/providers/cm7aeze5z00025r5ejjtdelyy'
  },
  {
    id: 6,
    name: 'Malik',
    age: 22,
    location: 'Montreal, QC',
    rating: 4.9,
    reviews: 48,
    imgUrl: '/checker-images/malik.jpg',
    speciality: 'Fast Responder',
    providerUrl: 'https://www.getlazo.app/providers/cm7k8a4jj0002i309fuqv2yxm'
  },
  {
    id: 7,
    name: 'Rose',
    age: 24,
    location: 'Chicago, IL',
    rating: 4.9,
    reviews: 67,
    imgUrl: '/checker-images/rose.jpg',
    speciality: 'Elite Seduction Skills',
    providerUrl: 'https://www.getlazo.app/providers/cm79gku9r0002av9xiqrkx8jk'
  },
];

const CheckersSection = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: 'center',
    dragFree: false,
    containScroll: 'trimSnaps',
    skipSnaps: false
  }, [
    AutoPlay({
      delay: 3000,
      stopOnInteraction: false,
      stopOnMouseEnter: false,
      playOnInit: true,
      rootNode: (emblaRoot) => emblaRoot.parentElement
    })
  ]);

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
  const scrollTo = useCallback((index: number) => emblaApi?.scrollTo(index), [emblaApi]);

  const onInit = useCallback(() => {
    if (!emblaApi) return;
    setScrollSnaps(emblaApi.scrollSnapList());
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    onInit();
    onSelect();
    emblaApi.on('reInit', onInit);
    emblaApi.on('reInit', onSelect);
    emblaApi.on('select', onSelect);
  }, [emblaApi, onInit, onSelect]);

  return (
    <section id="checkers" className="py-16 md:py-24 relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="container mx-auto px-4"
      >
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl text-lazo-bordeaux mb-6 font-bold">
            Chat with our Experts in Loyalty Testing
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our experts are trained to conduct loyalty tests professionally and discreetly.
          </p>
        </div>

        <div className="relative max-w-[70vw] md:max-w-[65vw] lg:max-w-[55vw] mx-auto">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex -ml-4">
              {checkers.map((checker, index) => (
                <div
                  key={checker.id}
                  className="flex-[0_0_100%] min-w-0 md:flex-[0_0_48%] lg:flex-[0_0_38%] pl-4"
                >
                  <motion.div
                    initial={{ scale: 0.95, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className={`relative group transition-all duration-500 ${
                      selectedIndex === index ? 'scale-100' : 'scale-95 opacity-70'
                    }`}
                  >
                    <div className="aspect-[6/7] overflow-hidden rounded-2xl shadow-2xl relative">
                      <a
                        href={checker.providerUrl}
                        rel="noopener noreferrer"
                        className="block w-full h-full"
                      >
                        <img
                          src={checker.imgUrl}
                          alt={checker.name}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />
                        
                        <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                          <div className="flex flex-col space-y-4">
                            <div className="flex items-center justify-between">
                              <div>
                                <h3 className="mb-1 drop-shadow-sm">{checker.name}, {checker.age}</h3>
                                <p className="text-white/90 drop-shadow-sm small-text">{checker.location}</p>
                              </div>
                              <div className="text-right">
                                <div className="flex items-center gap-2 mb-1">
                                  <Star className="w-5 h-5 fill-current text-yellow-400 drop-shadow" />
                                  <span className="text-xl drop-shadow-sm">{checker.rating.toFixed(1)}</span>
                                </div>
                                <p className="caption text-white/90 drop-shadow-sm">{checker.reviews} reviews</p>
                              </div>
                            </div>
                            <p className="text-white/90 font-light drop-shadow-sm">{checker.speciality}</p>
                          </div>
                        </div>
                      </a>
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={scrollPrev}
            className="absolute -left-12 md:-left-16 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/90 shadow-lg flex items-center justify-center text-lazo-bordeaux hover:bg-white transition-all z-10"
            aria-label="Previous checker"
          >
            <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={scrollNext}
            className="absolute -right-12 md:-right-16 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/90 shadow-lg flex items-center justify-center text-lazo-bordeaux hover:bg-white transition-all z-10"
            aria-label="Next checker"
          >
            <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
          </motion.button>

          <div className="flex justify-center gap-3 mt-8">
            {scrollSnaps.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollTo(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === selectedIndex
                    ? 'w-8 bg-lazo-bordeaux shadow-sm'
                    : 'w-2 bg-lazo-bordeaux/30 hover:bg-lazo-bordeaux/50'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        <div className="mt-12 flex justify-center">
          <motion.a 
            href="https://www.getlazo.app/providers" 
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center px-8 py-4 rounded-full bg-lazo-bordeaux text-white font-medium transition-all hover:bg-lazo-bordeaux-light shadow-lg hover:shadow-xl"
          >
            View all our Checkers
            <MessageCircle size={20} className="ml-2" />
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
};

export default CheckersSection;

