import { useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Instagram } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import existenceImg from '@/assets/products/existence.jpg';
import highnesGallery from '@/assets/gallery/highness-gallery.webp';
import guidanceImg from '@/assets/products/guidance.jpg';
import royalGallery from '@/assets/gallery/royal-gallery.webp';
import discoverySetGallery from '@/assets/gallery/discovery-set-gallery.webp';
import vidaGallery from '@/assets/gallery/vida-gallery.webp';
import reflectionImg from '@/assets/products/reflection-man.jpg';
import privilegeGallery from '@/assets/gallery/privilege-gallery.webp';

const galleryImages = [
  { id: 1, image: existenceImg, alt: 'SUQA OUD Existence' },
  { id: 2, image: highnesGallery, alt: 'SUQA OUD Highness' },
  { id: 3, image: guidanceImg, alt: 'SUQA OUD Guidance' },
  { id: 4, image: royalGallery, alt: 'SUQA OUD Royal' },
  { id: 5, image: discoverySetGallery, alt: 'SUQA OUD Discovery Set' },
  { id: 6, image: vidaGallery, alt: 'SUQA OUD Vida' },
  { id: 7, image: reflectionImg, alt: 'SUQA OUD Reflection' },
  { id: 8, image: privilegeGallery, alt: 'SUQA OUD Privilege' },
];

const HighPerfumeryGallery = () => {
  const galleryRef = useRef<HTMLDivElement>(null);
  const { t, isRTL } = useLanguage();

  const scroll = (direction: 'left' | 'right') => {
    if (galleryRef.current) {
      const scrollAmount = galleryRef.current.clientWidth / 2;
      // For RTL, reverse the scroll direction
      const actualDirection = isRTL ? (direction === 'left' ? 'right' : 'left') : direction;
      galleryRef.current.scrollBy({
        left: actualDirection === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section 
      className="py-8 sm:py-10 md:py-12 lg:py-16"
      style={{ backgroundColor: '#F7F4EF' }}
    >
      {/* Section Header */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center uppercase tracking-[0.1em] sm:tracking-[0.15em] md:tracking-[0.2em] font-serif text-xl sm:text-2xl md:text-2xl lg:text-3xl mb-6 sm:mb-8 md:mb-10 lg:mb-12 text-foreground px-4"
      >
        {t('gallery.title')}
      </motion.h2>

      {/* Gallery Container */}
      <div className="relative">
        {/* Left Arrow */}
        <button 
          onClick={() => scroll('left')}
          className={`absolute top-1/2 -translate-y-1/2 z-10
                     w-8 h-8 sm:w-10 sm:h-10 md:w-11 md:h-11 rounded-full bg-white/90 backdrop-blur-sm
                     flex items-center justify-center hover:bg-white transition-colors
                     shadow-md border border-gray-200 min-w-[44px] min-h-[44px]
                     ${isRTL ? 'right-1 sm:right-2 md:right-4' : 'left-1 sm:left-2 md:left-4'}`}
          aria-label={t('gallery.scrollLeft')}
        >
          <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 text-foreground" />
        </button>

        {/* Gallery */}
        <div 
          ref={galleryRef}
          className="flex overflow-x-auto scroll-smooth gap-0.5 sm:gap-1"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          dir="ltr"
        >
          {galleryImages.map((item, index) => (
            <motion.a
              key={item.id}
              href="https://instagram.com/suqaoud"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="flex-shrink-0 w-[45%] sm:w-1/3 md:w-1/4 lg:w-[12.5%] aspect-square relative overflow-hidden group"
            >
              <img 
                src={item.image} 
                alt={item.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/30 transition-colors duration-300 flex items-center justify-center">
                <Instagram className="w-5 h-5 sm:w-6 sm:h-6 text-background opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </motion.a>
          ))}
        </div>

        {/* Right Arrow */}
        <button 
          onClick={() => scroll('right')}
          className={`absolute top-1/2 -translate-y-1/2 z-10
                     w-8 h-8 sm:w-10 sm:h-10 md:w-11 md:h-11 rounded-full bg-white/90 backdrop-blur-sm
                     flex items-center justify-center hover:bg-white transition-colors
                     shadow-md border border-gray-200 min-w-[44px] min-h-[44px]
                     ${isRTL ? 'left-1 sm:left-2 md:left-4' : 'right-1 sm:right-2 md:right-4'}`}
          aria-label={t('gallery.scrollRight')}
        >
          <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-foreground" />
        </button>
      </div>
    </section>
  );
};

export default HighPerfumeryGallery;
