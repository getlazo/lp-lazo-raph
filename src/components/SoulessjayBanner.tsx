
import { motion } from 'framer-motion';
import { Youtube } from 'lucide-react';

const SoulessjayBanner = () => {
  return (
    <section className="py-6 md:py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="container mx-auto px-4"
      >
        <div className="max-w-3xl mx-auto">
          <motion.div
            className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-white via-white to-lazo-pink/[0.15] shadow-[0_8px_30px_-12px_rgba(0,0,0,0.12)] border border-lazo-pink/[0.15]"
            whileHover={{ 
              scale: 1.01,
              boxShadow: '0 12px 36px -12px rgba(0,0,0,0.15)'
            }}
            transition={{ duration: 0.3 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-lazo-pink/[0.05] to-transparent" />
            
            <a
              href="https://www.youtube.com/@Soulessjayy"
              target="_blank"
              rel="noopener noreferrer"
              className="block p-5 md:p-6 relative"
            >
              <div className="flex items-center gap-5">
                {/* Profile Image */}
                <motion.div
                  className="relative w-14 h-14 md:w-16 md:h-16 flex-shrink-0"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="absolute inset-[-1px] bg-gradient-to-br from-lazo-bordeaux/30 to-lazo-pink/30 rounded-full blur-[2px]" />
                  <div className="relative w-full h-full rounded-full overflow-hidden border border-white shadow-[0_4px_12px_-2px_rgba(0,0,0,0.12)]">
                    <img
                      src="/images/Souless.png"
                      alt="Soulessjayy discussing Lazo loyalty test"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </motion.div>

                {/* Content */}
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="text-lg md:text-xl font-bold text-[#2A2A3C] truncate">
                      Soulessjayy
                    </h3>
                    <Youtube className="w-4 h-4 md:w-5 md:h-5 text-red-600 flex-shrink-0" />
                  </div>
                  <p className="text-base md:text-lg text-gray-600 font-light italic leading-snug">
                    "Lazo's loyalty test has never made it easier to verify your partner's fidelity!"
                  </p>
                </div>
              </div>
            </a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default SoulessjayBanner; 
