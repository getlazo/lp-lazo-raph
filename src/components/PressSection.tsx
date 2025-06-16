import { useEffect, useState, useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import AutoPlay from 'embla-carousel-autoplay';

const pressArticles = [
  {
    source: "Sky News",
    quote: "Lazo just created a database of people that are willing to help.",
    logo: "/press-logos/sky-news.svg",
    link: "https://news.sky.com/story/loyalty-testers-will-now-catch-out-your-cheating-boyfriend-for-a-fee-13225869"
  },
  {
    source: "Business Insider",
    quote: "Unfortunately, a lot of the girls who come to Lazo are usually right about their cheating boyfriends.",
    logo: "/press-logos/business-insider.svg",
    link: "https://www.businessinsider.com/loyalty-test-boyfriend-lazo-questions-pay-2024-6"
  },
  {
    source: "Mirror",
    quote: "If you can't be loyal, then you shouldn't be in that relationship.",
    logo: "/press-logos/mirror.svg",
    link: "https://www.mirror.co.uk/news/us-news/loyalty-testing-app-sees-attractive-33831409"
  },
  {
    source: "9Honey",
    quote: "Lazo gives those in doubt the tools to test their partner's loyalty with less risk of being caught.",
    logo: "/press-logos/9honey.svg",
    link: "https://honey.nine.com.au/latest/loyalty-test-online-tiktok-cheating-trend-exclusive/44caca5a-f48f-4a12-971f-d031a08c362e"
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
                  className="flex-[0_0_100%] min-w-0 max-[0_0_60%] lg:flex-[0_0_50%] pl-4"
                >
                  <motion.div
                    initial={{ scale: 0.95, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className={`relative group transition-all duration-500 ${
                      selectedIndex === index ? 'scale-100' : 'scale-95 opacity-70'
                    }`}
                  >
                    <a
                      href={article.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block hover:opacity-90 transition-opacity"
                    >
                      <div className="p-4 bg-white rounded-xl shadow-md text-center">
                        <img src={article.logo} alt={`${article.source} logo`} className="h-8 mx-auto mb-3" />
                        <p className="text-sm italic">"{article.quote}"</p>
                        <p className="text-xs mt-2 text-gray-500 font-semibold">{article.source}</p>
                      </div>
                    </a>
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
