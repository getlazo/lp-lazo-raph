import { useEffect, useState } from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

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
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    // Vérification des logos
    pressArticles.forEach(article => {
      fetch(article.logo)
        .catch(() => {
          console.error(`Logo not found: ${article.logo}`);
        });
    });

    // Auto-rotation
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % pressArticles.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-16 md:py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16 animate-fade-in">
          <span className="inline-block py-1 px-3 mb-4 text-xs font-medium text-lazo-bordeaux bg-lazo-pink/30 rounded-full">
            Press Coverage
          </span>
          <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4 text-lazo-bordeaux">
            They talk about us
          </h2>
        </div>

        <div className="max-w-5xl mx-auto">
          <Carousel className="w-full">
            <CarouselContent>
              {pressArticles.map((article, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="h-full p-4">
                    <div className="bg-white rounded-2xl p-6 shadow-soft h-full border border-gray-100 hover:border-lazo-pink/30 transition-all">
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
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default PressSection; 