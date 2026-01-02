import { useState, useRef } from 'react';
import { Pause, Play, Accessibility } from 'lucide-react';

import heroDesktopImage from '@/assets/gifting-hero-desktop.jpg';
import heroMobileImage from '@/assets/gifting-hero-mobile.jpg';

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

      {/* Hero Content - Centered */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="px-6 text-center">
          {/* Main Headline */}
          <h2 className="animate-fade-in-up font-display text-3xl font-light tracking-luxury text-hero-text text-shadow-hero sm:text-4xl md:text-5xl lg:text-6xl">
            THE GIFTING EDIT
          </h2>

          {/* CTA Button */}
          <div className="animate-fade-in-up animation-delay-200 mt-8 md:mt-10">
            <button
              onClick={handleShopNowClick}
              className="btn-hero"
              aria-label="Shop the gifting collection now"
            >
              SHOP NOW
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
