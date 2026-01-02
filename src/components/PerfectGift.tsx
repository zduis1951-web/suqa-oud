import giftDesktop from '@/assets/perfect-gift-desktop.png';
import giftMobile from '@/assets/perfect-gift-mobile.jpg';

/**
 * PerfectGift Section
 * 
 * README: All images used in this component were downloaded directly from the live
 * amouage.com website. No images were generated, edited, or altered in any way.
 * - Desktop: https://amouage.com/cdn/shop/files/2025_Gift_wrap.png
 * - Mobile: https://amouage.com/cdn/shop/files/Amouage_GiftWrap_Mobile_2250_x_4000px_1_0b952789-a635-4f6d-9d9f-f7631b3b8934.jpg
 */

interface PerfectGiftProps {
  onShopNowClick?: () => void;
}

const PerfectGift = ({ onShopNowClick }: PerfectGiftProps) => {
  return (
    <section className="relative w-full overflow-hidden">
      {/* Desktop Image */}
      <picture>
        <source media="(min-width: 768px)" srcSet={giftDesktop} />
        <img
          src={giftMobile}
          alt="SUQA OUD"
          className="w-full h-auto object-cover"
        />
      </picture>

      {/* Content Overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
        {/* Main Headline */}
        <h2 
          className="text-foreground text-2xl sm:text-3xl md:text-4xl lg:text-5xl tracking-[0.3em] uppercase mb-4 md:mb-6"
          style={{ fontFamily: 'var(--font-primary)' }}
        >
          SUQA OUD
        </h2>

        {/* Subtext */}
        <p 
          className="text-foreground/80 text-xs sm:text-sm md:text-base max-w-md leading-relaxed mb-6 md:mb-8 whitespace-pre-line font-light"
          style={{ fontFamily: 'var(--font-primary)' }}
        >
          {`For those who don't follow moments,
but define their own.

Where luxury is felt inwardly,
presence is natural,
and value is created —
not borrowed.

To be royal is to breathe the kingdom of oud.`}
        </p>

        {/* CTA Button */}
        <button
          onClick={onShopNowClick}
          className="border border-foreground text-foreground bg-transparent px-8 py-3 md:px-10 md:py-4 text-xs md:text-sm tracking-[0.2em] uppercase transition-all duration-300 hover:bg-foreground hover:text-background"
          style={{ fontFamily: 'var(--font-primary)' }}
        >
          DISCOVER
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

export default PerfectGift;
