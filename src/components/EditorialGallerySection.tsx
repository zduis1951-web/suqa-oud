import { useRef, useState, useCallback, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Import editorial gallery images
import gallery1 from '@/assets/editorial/gallery-1-boutique.jpg';
import gallery2 from '@/assets/editorial/gallery-2-body.jpg';
import gallery3 from '@/assets/editorial/gallery-3-guidance.jpg';
import gallery4 from '@/assets/editorial/gallery-4-reflection.jpg';
import gallery5 from '@/assets/editorial/gallery-5-existence.jpg';
import gallery6 from '@/assets/editorial/gallery-6-purpose.png';
import gallery7 from '@/assets/editorial/gallery-7-box.jpg';

interface GalleryImage {
  src: string;
  alt: string;
  aspectRatio: 'portrait' | 'landscape' | 'square';
}

const galleryImages: GalleryImage[] = [
  { src: gallery1, alt: 'Amouage Boutique Interior', aspectRatio: 'landscape' },
  { src: gallery2, alt: 'Luxury Body Line', aspectRatio: 'landscape' },
  { src: gallery3, alt: 'Guidance Perfume', aspectRatio: 'portrait' },
  { src: gallery4, alt: 'Reflection Man', aspectRatio: 'portrait' },
  { src: gallery5, alt: 'Existence Fragrance', aspectRatio: 'portrait' },
  { src: gallery6, alt: 'Purpose 50', aspectRatio: 'portrait' },
  { src: gallery7, alt: 'Odyssey Collection Box', aspectRatio: 'square' },
];

const EditorialGallerySection = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScrollButtons = useCallback(() => {
    const container = scrollContainerRef.current;
    if (!container) return;
    
    const { scrollLeft, scrollWidth, clientWidth } = container;
    setCanScrollLeft(scrollLeft > 0);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
  }, []);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;
    
    checkScrollButtons();
    container.addEventListener('scroll', checkScrollButtons);
    window.addEventListener('resize', checkScrollButtons);
    
    return () => {
      container.removeEventListener('scroll', checkScrollButtons);
      window.removeEventListener('resize', checkScrollButtons);
    };
  }, [checkScrollButtons]);

  const scroll = useCallback((direction: 'left' | 'right') => {
    const container = scrollContainerRef.current;
    if (!container) return;
    
    const scrollAmount = container.clientWidth * 0.6;
    const newScrollLeft = direction === 'left' 
      ? container.scrollLeft - scrollAmount 
      : container.scrollLeft + scrollAmount;
    
    container.scrollTo({
      left: newScrollLeft,
      behavior: 'smooth'
    });
  }, []);

  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') {
      scroll('left');
    } else if (e.key === 'ArrowRight') {
      scroll('right');
    }
  }, [scroll]);

  const getImageClasses = (aspectRatio: string) => {
    switch (aspectRatio) {
      case 'portrait':
        return 'w-[220px] md:w-[280px] lg:w-[320px]';
      case 'landscape':
        return 'w-[320px] md:w-[420px] lg:w-[480px]';
      case 'square':
        return 'w-[220px] md:w-[280px] lg:w-[320px]';
      default:
        return 'w-[280px]';
    }
  };

  return (
    <section 
      className="w-full py-16 md:py-20"
      style={{ backgroundColor: 'hsl(33, 37%, 89%)' }}
      aria-label="High Perfumery from the Sultanate of Oman"
    >
      {/* Section Title */}
      <h2 
        className="text-center font-display text-lg md:text-xl lg:text-2xl font-normal tracking-[0.25em] uppercase mb-10 md:mb-14 px-4"
        style={{ color: 'hsl(25, 30%, 12%)' }}
      >
        HIGH PERFUMERY FROM THE SULTANATE OF OMAN
      </h2>

      {/* Gallery Container */}
      <div 
        className="relative"
        onKeyDown={handleKeyDown}
        tabIndex={0}
        role="region"
        aria-label="Horizontal image gallery"
      >
        {/* Left Arrow */}
        <button
          onClick={() => scroll('left')}
          disabled={!canScrollLeft}
          className={`absolute left-4 md:left-6 top-1/2 -translate-y-1/2 z-10 w-10 h-10 md:w-11 md:h-11 rounded-full flex items-center justify-center transition-all duration-300 ${
            canScrollLeft 
              ? 'opacity-100 hover:scale-110' 
              : 'opacity-30 cursor-not-allowed'
          }`}
          style={{ 
            backgroundColor: 'hsl(33, 37%, 89%)',
            border: '1px solid hsl(25, 30%, 12%)',
            color: 'hsl(25, 30%, 12%)'
          }}
          aria-label="Scroll gallery left"
        >
          <ChevronLeft className="w-5 h-5" strokeWidth={1.5} />
        </button>

        {/* Right Arrow */}
        <button
          onClick={() => scroll('right')}
          disabled={!canScrollRight}
          className={`absolute right-4 md:right-6 top-1/2 -translate-y-1/2 z-10 w-10 h-10 md:w-11 md:h-11 rounded-full flex items-center justify-center transition-all duration-300 ${
            canScrollRight 
              ? 'opacity-100 hover:scale-110' 
              : 'opacity-30 cursor-not-allowed'
          }`}
          style={{ 
            backgroundColor: 'hsl(33, 37%, 89%)',
            border: '1px solid hsl(25, 30%, 12%)',
            color: 'hsl(25, 30%, 12%)'
          }}
          aria-label="Scroll gallery right"
        >
          <ChevronRight className="w-5 h-5" strokeWidth={1.5} />
        </button>

        {/* Scrollable Gallery */}
        <div
          ref={scrollContainerRef}
          className="flex gap-3 md:gap-4 overflow-x-auto scrollbar-hide px-4 md:px-12 lg:px-16"
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
          }}
        >
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className={`flex-shrink-0 ${getImageClasses(image.aspectRatio)}`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-[280px] md:h-[340px] lg:h-[380px] object-cover"
                loading={index < 3 ? 'eager' : 'lazy'}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EditorialGallerySection;
