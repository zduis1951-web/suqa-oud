import suqaOudGcc from '@/assets/suqa-oud-gcc.jpg';
import { useLanguage } from '@/contexts/LanguageContext';
import { HoverButton } from '@/components/ui/hover-button';

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
  const { t } = useLanguage();

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
          {t('perfectGift.title')}
        </h2>

        {/* Subtext */}
        <p 
          className="text-cream text-2xl sm:text-3xl md:text-4xl lg:text-5xl tracking-[0.15em] sm:tracking-[0.2em] md:tracking-[0.25em] lg:tracking-[0.3em] uppercase font-bold" 
          style={{ fontFamily: 'var(--font-primary)' }}
        >
          {t('perfectGift.description')}
        </p>

        {/* CTA Button */}
        <HoverButton 
          onClick={onShopNowClick} 
          className="mt-6 sm:mt-8"
        >
          {t('perfectGift.discover')}
        </HoverButton>
      </div>

      {/* Accessibility Icon - Bottom Left */}
      <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 md:bottom-8 md:left-8">
        
      </div>
    </section>
  );
};

export default PerfectGift;
