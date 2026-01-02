import sohoDesktop from '@/assets/soho-boutique-desktop.jpg';
import sohoMobile from '@/assets/soho-boutique-mobile.png';

/**
 * SohoFlagshipBoutique Section
 * 
 * README: All images used in this component were downloaded directly from the live
 * amouage.com website. No images were generated, edited, or altered in any way.
 * - Desktop: https://amouage.com/cdn/shop/files/Desktop-1920-x-770-px-SoHo-Flagship-Store.jpg
 * - Mobile: https://amouage.com/cdn/shop/files/V2_Mobile-2250-x-4000-px-SoHo-Flagship-Store.png
 */

interface SohoFlagshipBoutiqueProps {
  onDiscoverMoreClick?: () => void;
}

const SohoFlagshipBoutique = ({ onDiscoverMoreClick }: SohoFlagshipBoutiqueProps) => {
  return (
    <section className="relative w-full overflow-hidden">
      {/* Desktop Image */}
      <picture>
        <source media="(min-width: 768px)" srcSet={sohoDesktop} />
        <img
          src={sohoMobile}
          alt="SUQA OUD - Online Only By Design"
          className="w-full h-auto object-cover"
        />
      </picture>

      {/* Content Overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
        {/* Main Headline */}
        <h2 
          className="text-foreground text-xl sm:text-2xl md:text-3xl lg:text-4xl tracking-[0.15em] uppercase mb-4 md:mb-6 max-w-4xl"
          style={{ fontFamily: 'var(--font-primary)' }}
        >
          ONLINE-ONLY. BY DESIGN.
        </h2>
        
        {/* Description */}
        <p 
          className="text-foreground/80 text-xs sm:text-sm md:text-base max-w-md leading-relaxed mb-6 md:mb-8 whitespace-pre-line font-light"
          style={{ fontFamily: 'var(--font-primary)' }}
        >
          {`Because value isn't mass-distributed.

It's recognized
by those who don't need to be told
what luxury looks like —
they already breathe it.`}
        </p>

        {/* CTA Button */}
        <button
          onClick={onDiscoverMoreClick}
          className="border border-foreground text-foreground bg-transparent px-8 py-3 md:px-10 md:py-4 text-xs md:text-sm tracking-[0.2em] uppercase transition-all duration-300 hover:bg-foreground hover:text-background"
          style={{ fontFamily: 'var(--font-primary)' }}
        >
          EXPLORE
        </button>
      </div>

      {/* Accessibility Icon - Bottom Left */}
      <div className="absolute bottom-4 left-4 md:bottom-6 md:left-6">
        <button 
          className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-foreground/80 flex items-center justify-center hover:bg-foreground transition-colors"
          aria-label="Enable accessibility"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="20" 
            height="20" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
            className="text-background"
          >
            <circle cx="12" cy="4" r="2"/>
            <path d="M12 6v14"/>
            <path d="M8 10h8"/>
            <path d="M8 22l4-8 4 8"/>
          </svg>
        </button>
      </div>
    </section>
  );
};

export default SohoFlagshipBoutique;
