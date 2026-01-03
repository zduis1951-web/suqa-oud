import { useState } from 'react';

// Import Our Story background image
import ourStoryBgImage from '@/assets/our-story-bg.jpg';

/**
 * Guidance Collection Promotional Section
 * 
 * A full-width promotional section featuring the Guidance fragrance collection.
 * Displays below the hero section on the SUQA OUD homepage.
 */

interface GuidanceCollectionProps {
  onDiscoverClick?: () => void;
}

const GuidanceCollection = ({
  onDiscoverClick
}: GuidanceCollectionProps) => {
  const handleDiscoverClick = () => {
    if (onDiscoverClick) {
      onDiscoverClick();
    } else {
      window.location.href = '#guidance-collection';
    }
  };

  return (
    <section className="guidance-section" aria-label="Our Story - SUQA OUD">
      {/* Background Image */}
      <div 
        className="absolute inset-0 w-full h-full" 
        style={{
          backgroundImage: `url(${ourStoryBgImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }} 
        role="img" 
        aria-label="SUQA OUD Elite fragrance" 
      />

      {/* Content Overlay */}
      <div className="guidance-content px-4">
        {/* Section Title */}
        <h2 className="guidance-title text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-[0.2em] sm:tracking-[0.3em] md:tracking-luxury">
          SUQA OUD
        </h2>
        
        {/* Description */}
        <p className="text-xs sm:text-sm md:text-base max-w-sm sm:max-w-md lg:max-w-lg mx-auto text-center leading-relaxed mb-6 sm:mb-8 px-2 font-light text-white">
          YOU DON'T REACH FOR IT TO BE NOTICED. YOU REACH FOR IT WHEN YOU WANT LUXURY TO FEEL EFFORTLESS.
        </p>

        {/* CTA Button */}
        <button 
          onClick={handleDiscoverClick} 
          className="btn-guidance px-6 sm:px-8 md:px-12 py-3 sm:py-4 md:py-5 text-xs sm:text-sm min-h-[44px] min-w-[140px]" 
          aria-label="Discover more about SUQA OUD"
        >
          DISCOVER MORE
        </button>
      </div>
    </section>
  );
};

export default GuidanceCollection;
