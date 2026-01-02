import { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const HighPerfumeryGallery = () => {
  const galleryRef = useRef<HTMLDivElement>(null);

  // Placeholder images - replace with actual Instagram images
  const images = [
    { src: '/placeholder.svg', alt: 'Amouage Instagram post 1' },
    { src: '/placeholder.svg', alt: 'Amouage Instagram post 2' },
    { src: '/placeholder.svg', alt: 'Amouage Instagram post 3' },
    { src: '/placeholder.svg', alt: 'Amouage Instagram post 4' },
    { src: '/placeholder.svg', alt: 'Amouage Instagram post 5' },
    { src: '/placeholder.svg', alt: 'Amouage Instagram post 6' },
    { src: '/placeholder.svg', alt: 'Amouage Instagram post 7' },
  ];

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
      className="w-full py-12 md:py-16"
      style={{ backgroundColor: '#F7F4EF' }}
    >
      <h2 className="text-center uppercase tracking-[0.2em] font-serif text-lg md:text-xl lg:text-2xl mb-8 md:mb-12 text-foreground px-4">
        HIGH PERFUMERY FROM THE SULTANATE OF OMAN
      </h2>
      
      <div className="relative">
        {/* Left Arrow */}
        <button 
          onClick={() => scroll('left')}
          className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-10
                     w-10 h-10 md:w-12 md:h-12 rounded-full bg-white border border-gray-300
                     flex items-center justify-center hover:bg-gray-50 transition-colors
                     shadow-sm"
          aria-label="Scroll left"
        >
          <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-gray-700" />
        </button>
        
        {/* Gallery */}
        <div 
          ref={galleryRef} 
          className="flex overflow-x-auto scrollbar-hide scroll-smooth"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {images.map((img, index) => (
            <div 
              key={index} 
              className="flex-shrink-0 w-1/2 md:w-1/4 lg:w-[16.666%] aspect-square"
            >
              <img 
                src={img.src} 
                alt={img.alt} 
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          ))}
        </div>
        
        {/* Right Arrow */}
        <button 
          onClick={() => scroll('right')}
          className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-10
                     w-10 h-10 md:w-12 md:h-12 rounded-full bg-white border border-gray-300
                     flex items-center justify-center hover:bg-gray-50 transition-colors
                     shadow-sm"
          aria-label="Scroll right"
        >
          <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-gray-700" />
        </button>
      </div>
    </section>
  );
};

export default HighPerfumeryGallery;
