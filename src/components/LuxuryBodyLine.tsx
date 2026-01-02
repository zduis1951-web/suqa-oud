import luxuryBodyDesktop from '@/assets/luxury-body-desktop.jpg';
import luxuryBodyMobile from '@/assets/luxury-body-mobile.jpg';

interface LuxuryBodyLineProps {
  onShopNowClick?: () => void;
}

/**
 * Luxury Body Line Section
 * 
 * Recreated from amouage.com - displays the Luxury Body Line promotional section
 * with full-width cinematic background image and centered CTA.
 * 
 * All images downloaded directly from the live Amouage website.
 * No images were generated or edited.
 */
const LuxuryBodyLine = ({ onShopNowClick }: LuxuryBodyLineProps) => {
  return (
    <section className="relative w-full overflow-hidden">
      {/* Desktop Image - Hidden on mobile */}
      <div className="hidden md:block w-full">
        <img
          src={luxuryBodyDesktop}
          alt="Luxury Body Line - Amouage body care collection featuring Honour Woman Body Lotion"
          className="w-full h-auto object-cover"
          loading="lazy"
        />
      </div>
      
      {/* Mobile Image - Hidden on desktop */}
      <div className="block md:hidden w-full">
        <img
          src={luxuryBodyMobile}
          alt="Luxury Body Line - Amouage body care collection featuring Honour Woman Body Lotion"
          className="w-full h-auto object-cover"
          loading="lazy"
        />
      </div>
      
      {/* Content Overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-end pb-16 md:pb-20 lg:pb-24">
        {/* Title */}
        <h2 
          className="text-xl md:text-2xl lg:text-3xl tracking-[0.3em] md:tracking-[0.4em] text-foreground font-light mb-6 md:mb-8"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          LUXURY BODY LINE
        </h2>
        
        {/* Shop Now Button */}
        <button
          onClick={onShopNowClick}
          className="px-8 md:px-10 py-3 md:py-3.5 bg-background text-foreground text-xs md:text-sm tracking-[0.2em] font-light border border-transparent hover:bg-transparent hover:border-foreground transition-all duration-300"
          aria-label="Shop Luxury Body Line collection"
        >
          SHOP NOW
        </button>
      </div>
      
      {/* Accessibility Icon - Bottom Left */}
      <div className="absolute bottom-4 left-4 z-10">
        <button
          className="w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center hover:bg-background transition-colors duration-200"
          aria-label="Enable accessibility options"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            className="text-foreground"
          >
            <circle cx="12" cy="4" r="2" />
            <path d="M12 6v6m0 0l-4 8m4-8l4 8" />
            <path d="M6 10h12" />
          </svg>
        </button>
      </div>
      
      {/* Scroll to Top Icon - Bottom Left (next to accessibility) */}
      <div className="absolute bottom-4 left-16 z-10">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="w-10 h-10 rounded-full border border-foreground/30 flex items-center justify-center hover:border-foreground transition-colors duration-200"
          aria-label="Scroll to top"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            className="text-foreground"
          >
            <path d="M12 19V5M5 12l7-7 7 7" />
          </svg>
        </button>
      </div>
    </section>
  );
};

export default LuxuryBodyLine;
