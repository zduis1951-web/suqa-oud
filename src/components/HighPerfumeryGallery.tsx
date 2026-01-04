import { useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Instagram } from 'lucide-react';
import existenceImg from '@/assets/products/existence.jpg';
import existenceBoxImg from '@/assets/products/existence-box.jpg';
import guidanceImg from '@/assets/products/guidance.jpg';
import guidanceBoxImg from '@/assets/products/guidance-box.jpg';
import purposeImg from '@/assets/products/purpose-50.png';
import purposeBoxImg from '@/assets/products/purpose-50-box.jpg';
import reflectionImg from '@/assets/products/reflection-man.jpg';
import reflectionBoxImg from '@/assets/products/reflection-man-box.jpg';

const galleryImages = [
  { id: 1, image: existenceImg, alt: 'SUQA OUD Existence' },
  { id: 2, image: existenceBoxImg, alt: 'SUQA OUD product display' },
  { id: 3, image: guidanceImg, alt: 'SUQA OUD Guidance green bottle' },
  { id: 4, image: guidanceBoxImg, alt: 'SUQA OUD Guidance pink bottle' },
  { id: 5, image: purposeImg, alt: 'SUQA OUD Purpose mint bottle' },
  { id: 6, image: purposeBoxImg, alt: 'SUQA OUD Purpose gold bottle' },
  { id: 7, image: reflectionImg, alt: 'SUQA OUD Reflection dark bottle' },
  { id: 8, image: reflectionBoxImg, alt: 'SUQA OUD boutique' },
];

const HighPerfumeryGallery = () => {
  const galleryRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (galleryRef.current) {
      const scrollAmount = galleryRef.current.clientWidth / 3;
      galleryRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section 
      className="py-12 md:py-16"
      style={{ backgroundColor: '#F7F4EF' }}
    >
      {/* Section Header */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center uppercase tracking-[0.2em] font-serif text-base md:text-lg lg:text-xl mb-8 md:mb-12 text-foreground px-4"
      >
        CRAFTED IN THE KINGDOM OF OUD
      </motion.h2>

      {/* Gallery Container */}
      <div className="relative">
        {/* Left Arrow */}
        <button 
          onClick={() => scroll('left')}
          className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-10
                     w-10 h-10 md:w-11 md:h-11 rounded-full bg-white/90 backdrop-blur-sm
                     flex items-center justify-center hover:bg-white transition-colors
                     shadow-md border border-gray-200"
          aria-label="Scroll left"
        >
          <ChevronLeft className="w-5 h-5 text-foreground" />
        </button>

        {/* Gallery */}
        <div 
          ref={galleryRef}
          className="flex overflow-x-auto scroll-smooth"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
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
              className="flex-shrink-0 w-1/2 md:w-1/4 lg:w-[12.5%] aspect-square relative overflow-hidden group"
            >
              <img 
                src={item.image} 
                alt={item.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/30 transition-colors duration-300 flex items-center justify-center">
                <Instagram className="w-6 h-6 text-background opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </motion.a>
          ))}
        </div>

        {/* Right Arrow */}
        <button 
          onClick={() => scroll('right')}
          className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-10
                     w-10 h-10 md:w-11 md:h-11 rounded-full bg-white/90 backdrop-blur-sm
                     flex items-center justify-center hover:bg-white transition-colors
                     shadow-md border border-gray-200"
          aria-label="Scroll right"
        >
          <ChevronRight className="w-5 h-5 text-foreground" />
        </button>
      </div>
    </section>
  );
};

export default HighPerfumeryGallery;
