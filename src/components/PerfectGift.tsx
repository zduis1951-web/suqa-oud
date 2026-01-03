import suqaOudGcc from '@/assets/suqa-oud-gcc.jpg';

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

const PerfectGift = ({
  onShopNowClick
}: PerfectGiftProps) => {
  return (
    <section className="relative w-full min-h-screen overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 w-full h-full" 
        style={{
          backgroundImage: `url(${suqaOudGcc})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }} 
        role="img" 
        aria-label="SUQA OUD GCC" 
      />

      {/* Content Overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
        {/* Main Headline */}
        <h2 
          style={{ fontFamily: 'var(--font-primary)' }} 
          className="text-2xl sm:text-3xl md:text-4xl tracking-[0.3em] uppercase mb-4 md:mb-6 font-bold text-center text-gold lg:text-sm"
        >
          THIS IS NOT EXCESS. THIS IS INTENTION.
        </h2>

        {/* Subtext */}
        <p 
          className="text-cream text-5xl tracking-[0.3em] uppercase font-bold" 
          style={{ fontFamily: 'var(--font-primary)' }}
        >
          THE CRAFT
        </p>

        {/* CTA Button */}
        <button 
          onClick={onShopNowClick} 
          className="border border-gold text-gold bg-cream px-8 py-3 md:px-10 md:py-4 text-xs md:text-sm tracking-[0.2em] uppercase transition-all duration-300 hover:bg-transparent hover:text-cream hover:border-cream mt-8" 
          style={{ fontFamily: 'var(--font-primary)' }}
        >
          DISCOVER
        </button>
      </div>

      {/* Accessibility Icon - Bottom Left */}
      <div className="absolute bottom-4 left-4 md:bottom-6 md:left-6">
        
      </div>
    </section>
  );
};

export default PerfectGift;
