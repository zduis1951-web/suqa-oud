import suqaOudGcc from '@/assets/suqa-oud-gcc.jpg';

/**
 * PerfectGift Section
 * 
 * Displays the SUQA OUD gift collection promotional section.
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
          className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl 3xl:text-4xl tracking-[0.15em] sm:tracking-[0.2em] md:tracking-[0.25em] lg:tracking-[0.3em] uppercase mb-3 sm:mb-4 md:mb-6 font-bold text-center text-gold max-w-xs sm:max-w-md md:max-w-lg"
        >
          THIS IS NOT EXCESS. THIS IS INTENTION.
        </h2>

        {/* Subtext */}
        <p 
          className="text-cream text-2xl sm:text-3xl md:text-4xl lg:text-5xl tracking-[0.15em] sm:tracking-[0.2em] md:tracking-[0.25em] lg:tracking-[0.3em] uppercase font-bold" 
          style={{ fontFamily: 'var(--font-primary)' }}
        >
          THE CRAFT
        </p>

        {/* CTA Button */}
        <button 
          onClick={onShopNowClick} 
          className="border border-gold text-gold bg-cream px-6 sm:px-8 md:px-10 py-2.5 sm:py-3 md:py-4 text-xs sm:text-sm tracking-[0.15em] sm:tracking-[0.2em] uppercase transition-all duration-300 hover:bg-transparent hover:text-cream hover:border-cream mt-6 sm:mt-8 min-h-[44px] min-w-[120px]" 
          style={{ fontFamily: 'var(--font-primary)' }}
        >
          DISCOVER
        </button>
      </div>

      {/* Accessibility Icon - Bottom Left */}
      <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 md:bottom-8 md:left-8">
        
      </div>
    </section>
  );
};

export default PerfectGift;
