import { useEffect, useState, useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import AutoPlay from 'embla-carousel-autoplay';

const pressArticles = [
  {
    source: "Sky News",
    quote: "Lazo just created a database of people that are willing to help.",
    logo: "/press-logos/sky-news.svg"
  },
  {
    source: "Business Insider",
    quote: "Unfortunately, a lot of the girls who come to Lazo are usually right about their cheating boyfriends.",
    logo: "/press-logos/business-insider.svg"
  },
  {
    source: "Mirror",
    quote: "If you can't be loyal, then you shouldn't be in that relationship.",
    logo: "/press-logos/mirror.svg"
  },
  {
    source: "9Honey",
    quote: "Lazo gives those in doubt the tools to test their partner's loyalty with less risk of being caught.",
    logo: "/press-logos/9honey.svg"
  }
];

const PressSection = () => {
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
    <section className="py-16 md:py-24 bg-white relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="container mx-auto px-4"
      >
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-block py-2 px-6 mb-4 text-lg font-medium text-lazo-bordeaux bg-lazo-pink/30 rounded-full">
            Press Coverage
          </span>
          <h2 className="text-4xl md:text-5xl text-lazo-bordeaux mb-6 font-bold">
            They talk about us
          </h2>
        </div>

        <div className="relative max-w-[85vw] md:max-w-5xl mx-auto">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex -ml-4">
              {pressArticles.map((article, index) => (
                <div
                  key={index}
                  className="flex-[0_0_100%] min-w-0 md:flex-[0_0_60%] lg:flex-[0_0_50%] pl-4"
                >
                  <motion.div
                    initial={{ scale: 0.95, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className={`relative group transition-all duration-500 ${
                      selectedIndex === index ? 'scale-100' : 'scale-95 opacity-70'
                    }`}
                  >
                    <div className="bg-white rounded-2xl p-8 shadow-soft h-full border border-gray-100 hover:border-lazo-pink/30 transition-all">
                      <div className="h-12 mb-6 opacity-80">
                        <img
                          src={article.logo}
                          alt={`${article.source} logo`}
                          className="h-full object-contain"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.style.display = 'none';
                            console.error(`Failed to load logo: ${article.logo}`);
                          }}
                        />
                        <div className="text-xl font-bold text-gray-800">{article.source}</div>
                      </div>
                      <blockquote className="text-gray-600 italic text-lg mb-4">
                        "{article.quote}"
                      </blockquote>
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>

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
      </motion.div>
    </section>
  );
};

export default PressSection; 