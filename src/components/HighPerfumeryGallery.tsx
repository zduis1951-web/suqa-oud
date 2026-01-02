import { useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import existenceImg from '@/assets/products/existence.jpg';
import guidanceImg from '@/assets/products/guidance.jpg';
import purposeImg from '@/assets/products/purpose-50.png';
import reflectionImg from '@/assets/products/reflection-man.jpg';
import heroImg from '@/assets/hero-desktop.jpg';
import giftingImg from '@/assets/gifting-hero-desktop.jpg';
import luxuryBodyImg from '@/assets/luxury-body-desktop.jpg';

const galleryImages = [
  { id: 1, image: heroImg, alt: 'Amouage dark aesthetic' },
  { id: 2, image: luxuryBodyImg, alt: 'Amouage body collection display' },
  { id: 3, image: purposeImg, alt: 'Amouage perfume bottles' },
  { id: 4, image: guidanceImg, alt: 'Amouage fragrance in sand' },
  { id: 5, image: existenceImg, alt: 'Amouage product box' },
  { id: 6, image: reflectionImg, alt: 'Amouage reflection collection' },
  { id: 7, image: giftingImg, alt: 'Amouage studio setup' },
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
        HIGH PERFUMERY FROM THE SULTANATE OF OMAN
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
        <motion.div 
          ref={galleryRef}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex overflow-x-auto scroll-smooth"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {galleryImages.map((item) => (
            <div 
              key={item.id}
              className="flex-shrink-0 w-1/2 md:w-1/4 lg:w-[14.285%] aspect-square"
            >
              <img 
                src={item.image} 
                alt={item.alt}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          ))}
        </motion.div>

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
