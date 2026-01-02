import { useState, useRef } from 'react';
import { Pause, Play, Accessibility } from 'lucide-react';

import heroDesktopImage from '@/assets/hero-new.jpg';
import heroMobileImage from '@/assets/hero-new.jpg';

interface HeroSectionProps {
  onShopNowClick?: () => void;
}

const HeroSection = ({ onShopNowClick }: HeroSectionProps) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const heroRef = useRef<HTMLDivElement>(null);

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleAccessibilityClick = () => {
    console.log('Accessibility toggle clicked');
  };

  const handleShopNowClick = () => {
    if (onShopNowClick) {
      onShopNowClick();
    } else {
      window.location.href = '#shop';
    }
  };

  return (
    <section 
      ref={heroRef}
      className="relative h-screen w-full overflow-hidden"
      aria-label="Hero section - The Gifting Edit"
    >
      {/* Background Image - Desktop */}
      <div 
        className="absolute inset-0 hidden md:block"
        style={{
          backgroundImage: `url(${heroDesktopImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
        role="img"
        aria-label="Luxury fragrance gift collection"
      />

      {/* Background Image - Mobile */}
      <div 
        className="absolute inset-0 md:hidden"
        style={{
          backgroundImage: `url(${heroMobileImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
        role="img"
        aria-label="Luxury fragrance gift collection"
      />

      {/* Hero Content - Bottom Center */}
      <div className="absolute inset-x-0 bottom-16 md:bottom-24 flex justify-center">
        <div className="px-6 text-center">
          {/* Main Headline */}
          <h2 className="animate-fade-in-up font-serif text-2xl font-light italic tracking-wide text-[#d4c5b0] sm:text-3xl md:text-4xl lg:text-5xl">
            THE SECOND TRILOGY OF ESSENCES
          </h2>

          {/* CTA Button */}
          <div className="animate-fade-in-up animation-delay-200 mt-6 md:mt-8">
            <button
              onClick={handleShopNowClick}
              className="border border-[#d4c5b0] bg-transparent px-8 py-3 text-sm font-light tracking-[0.2em] text-[#d4c5b0] transition-all duration-300 hover:bg-[#d4c5b0] hover:text-black"
              aria-label="Be the first to know"
            >
              BE THE FIRST TO KNOW
            </button>
          </div>
        </div>
      </div>

      {/* Accessibility Button - Bottom Left */}
      <button
        onClick={handleAccessibilityClick}
        className="accessibility-btn"
        aria-label="Enable accessibility features"
      >
        <Accessibility className="h-5 w-5" aria-hidden="true" />
      </button>

      {/* Play/Pause Control - Bottom Right */}
      <button
        onClick={handlePlayPause}
        className="media-control"
        aria-label={isPlaying ? 'Pause slideshow' : 'Play slideshow'}
      >
        {isPlaying ? (
          <Pause className="h-8 w-8" aria-hidden="true" />
        ) : (
          <Play className="h-8 w-8" aria-hidden="true" />
        )}
      </button>
    </section>
  );
};

export default HeroSection;
