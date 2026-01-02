import { useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import existenceImg from '@/assets/products/existence.jpg';
import guidanceImg from '@/assets/products/guidance.jpg';
import purposeImg from '@/assets/products/purpose-50.png';
import reflectionImg from '@/assets/products/reflection-man.jpg';

const galleryImages = [
  { id: 1, image: existenceImg, alt: 'Amouage Existence' },
  { id: 2, image: guidanceImg, alt: 'Amouage Guidance' },
  { id: 3, image: purposeImg, alt: 'Amouage Purpose' },
  { id: 4, image: reflectionImg, alt: 'Amouage Reflection Man' },
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
        <div 
          ref={galleryRef}
          className="flex overflow-x-auto scroll-smooth gap-1"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {galleryImages.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex-shrink-0 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 aspect-[4/5] relative overflow-hidden group cursor-pointer"
            >
              <img 
                src={item.image} 
                alt={item.alt}
                className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
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
