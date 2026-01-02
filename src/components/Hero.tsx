import { useState, useRef, useEffect } from 'react';
import { Globe, Search, ShoppingBag, User, Pause, Play, Accessibility } from 'lucide-react';

// Import hero images from assets
import heroDesktopImage from '@/assets/gifting-hero-desktop.jpg';
import heroMobileImage from '@/assets/gifting-hero-mobile.jpg';

/**
 * Amouage Homepage Hero Section
 * 
 * A luxury fragrance brand hero component featuring:
 * - Full-screen background image with overlay
 * - Responsive header with country selector, logo, and utility icons
 * - Centered hero content with headline and CTA
 * - Accessibility toggle and play/pause media control
 * 
 * Style Specifications:
 * - Font Family: Cormorant Garamond (display), Helvetica Neue (body)
 * - Background Overlay: hsla(30, 15%, 10%, 0.35)
 * - Text Color: #F7F4EF (cream)
 * - CTA Button: White background, dark text, 1px border
 * - Font Sizes:
 *   - Desktop: Headline 48px, Subheadline 16px, CTA 14px
 *   - Tablet: Headline 40px, Subheadline 14px
 *   - Mobile: Headline 32px, Subheadline 12px
 * 
 * Image Sources:
 * - Desktop: src/assets/gifting-hero-desktop.jpg (original from amouage.com)
 * - Mobile: src/assets/gifting-hero-mobile.jpg (original from amouage.com)
 * 
 * Usage:
 * ```tsx
 * import Hero from '@/components/Hero';
 * 
 * function HomePage() {
 *   return <Hero />;
 * }
 * ```
 */

interface HeroProps {
  /** Optional callback when CTA button is clicked */
  onShopNowClick?: () => void;
}

const Hero = ({ onShopNowClick }: HeroProps) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isCountryOpen, setIsCountryOpen] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  // Navigation items matching Amouage site
  const navItems = [
    { label: 'PERFUMES', href: '#perfumes' },
    { label: 'COLLECTIONS', href: '#collections' },
    { label: 'BODY', href: '#body' },
    { label: 'DISCOVERY', href: '#discovery' },
    { label: 'GIFT IDEAS', href: '#gift-ideas' },
    { label: 'HOUSE OF AMOUAGE', href: '#house' },
  ];

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleAccessibilityClick = () => {
    // Accessibility toggle functionality
    console.log('Accessibility toggle clicked');
  };

  const handleShopNowClick = () => {
    if (onShopNowClick) {
      onShopNowClick();
    } else {
      // Default behavior
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

      {/* Overlay */}
      <div className="absolute inset-0 hero-overlay" aria-hidden="true" />

      {/* Announcement Bar */}
      <div className="announcement-bar relative z-20">
        <p className="font-body">
          Complimentary Engraving on Selected Fragrances (US Only).
        </p>
      </div>

      {/* Header */}
      <header className="absolute left-0 right-0 top-10 z-20 px-6 md:px-12 lg:px-16">
        <div className="flex items-center justify-between">
          {/* Left - Country Selector */}
          <div className="flex items-center">
            <button
              className="country-selector"
              onClick={() => setIsCountryOpen(!isCountryOpen)}
              aria-label="Select country and currency"
              aria-expanded={isCountryOpen}
            >
              <Globe className="h-4 w-4" aria-hidden="true" />
              <span className="font-body text-xs tracking-wide-luxury">US</span>
              <span className="ml-1 flex h-4 w-6 items-center justify-center overflow-hidden rounded-sm">
                🇺🇸
              </span>
            </button>
          </div>

          {/* Center - Logo */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <a 
              href="/" 
              className="block transition-opacity hover:opacity-80"
              aria-label="Amouage - Home"
            >
              <h1 className="font-display text-2xl font-light tracking-luxury text-hero-text md:text-3xl lg:text-4xl">
                AMOUAGE
              </h1>
            </a>
          </div>

          {/* Right - Utility Icons */}
          <div className="flex items-center gap-2 md:gap-4">
            {/* Search */}
            <button
              className="header-icon hidden md:flex md:items-center md:gap-2"
              aria-label="Search products"
            >
              <Search className="h-4 w-4" aria-hidden="true" />
              <span className="font-body text-xs tracking-wide-luxury text-hero-text">Search</span>
            </button>
            <button
              className="header-icon md:hidden"
              aria-label="Search products"
            >
              <Search className="h-5 w-5" aria-hidden="true" />
            </button>

            {/* Cart */}
            <button
              className="header-icon"
              aria-label="Shopping bag - 0 items"
            >
              <ShoppingBag className="h-5 w-5" aria-hidden="true" />
            </button>

            {/* Account */}
            <button
              className="header-icon"
              aria-label="Account"
            >
              <User className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
        </div>

        {/* Navigation - Desktop */}
        <nav 
          className="mt-8 hidden items-center justify-center gap-8 lg:flex xl:gap-12"
          aria-label="Main navigation"
        >
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="nav-link"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </header>

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

export default Hero;
