import theCraftBg from '@/assets/the-craft-bg.jpg';
import { useLanguage } from '@/contexts/LanguageContext';

interface PowerOfTheInfiniteProps {
  onShopNowClick?: () => void;
}

/**
 * Power of the Infinite Section
 * 
 * Displays the SUQA OUD Eternity collection featuring Decision and Existence
 * fragrances with twisted wood branches composition.
 */
const PowerOfTheInfinite = ({
  onShopNowClick
}: PowerOfTheInfiniteProps) => {
  const { t } = useLanguage();

  return (
    <section className="relative w-full min-h-screen overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 w-full h-full" 
        style={{
          backgroundImage: `url(${theCraftBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }} 
        role="img" 
        aria-label="The Craft - SUQA OUD Elite" 
      />
      
      {/* Content Overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-end pb-16 sm:pb-24 md:pb-32 lg:pb-44 xl:pb-56 px-4">
        {/* Main Title */}
        <h2 
          style={{ fontFamily: 'var(--font-display)' }} 
          className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl tracking-[0.1em] sm:tracking-[0.15em] md:tracking-[0.2em] lg:tracking-[0.25em] xl:tracking-[0.35em] mb-6 sm:mb-8 md:mb-10 lg:mb-12 text-center text-cream font-medium max-w-xs sm:max-w-md md:max-w-lg lg:max-w-2xl"
        >
          {t('powerInfinite.title')}
        </h2>
        
        {/* Description */}
        <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-cream font-semibold mb-4 sm:mb-6 md:mb-8 text-center px-2 tracking-[0.1em] sm:tracking-[0.15em] md:tracking-[0.2em]">
          {t('powerInfinite.description')}
        </p>
        
        {/* Explore Button */}
        <button 
          onClick={onShopNowClick} 
          className="px-6 sm:px-8 md:px-10 py-2.5 sm:py-3 md:py-3.5 bg-cream text-gold text-xs sm:text-sm tracking-[0.15em] sm:tracking-[0.2em] font-light border border-transparent hover:bg-transparent hover:text-cream hover:border-cream transition-all duration-300 min-h-[44px] min-w-[120px]" 
          aria-label="Explore The Craft"
        >
          {t('powerInfinite.explore')}
        </button>
      </div>
      
      {/* Accessibility Icon - Bottom Left */}
      <div className="absolute bottom-4 left-4 z-10">
        
      </div>
      
      {/* Play/Pause Control - Bottom Right */}
      <div className="absolute bottom-4 right-4 z-10">
        
      </div>
    </section>
  );
};

export default PowerOfTheInfinite;
