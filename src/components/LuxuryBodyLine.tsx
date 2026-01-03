import luxuryBodyBg from '@/assets/luxury-body-bg.png';
import { useLanguage } from '@/contexts/LanguageContext';

interface LuxuryBodyLineProps {
  onShopNowClick?: () => void;
}

/**
 * Luxury Body Line Section
 * 
 * Displays the SUQA OUD Luxury Body Line promotional section
 * with full-width cinematic background image and centered CTA.
 */
const LuxuryBodyLine = ({
  onShopNowClick
}: LuxuryBodyLineProps) => {
  const { t } = useLanguage();

  return (
    <section className="relative w-full min-h-screen overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 w-full h-full" 
        style={{
          backgroundImage: `url(${luxuryBodyBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }} 
        role="img" 
        aria-label="The Experience - SUQA OUD Discovery Set" 
      />
      
      {/* Content Overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-end pb-12 sm:pb-16 md:pb-20 lg:pb-24 px-4">
        {/* Title */}
        <h2 
          style={{ fontFamily: 'var(--font-display)' }} 
          className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl tracking-[0.15em] sm:tracking-[0.2em] md:tracking-[0.3em] lg:tracking-[0.4em] font-light mb-3 sm:mb-4 md:mb-6 text-cream text-center max-w-xs sm:max-w-md md:max-w-lg"
        >
          {t('luxuryBody.title')}
        </h2>
        
        {/* Description */}
        <p className="text-cream text-xl sm:text-2xl md:text-3xl lg:text-4xl max-w-md mx-auto text-center leading-relaxed mb-4 sm:mb-6 md:mb-8 px-2 tracking-[0.1em] sm:tracking-[0.15em] md:tracking-[0.2em] font-light">
          {t('luxuryBody.description')}
        </p>
        
        {/* Explore Button */}
        <button 
          onClick={onShopNowClick} 
          className="px-6 sm:px-8 md:px-10 py-2.5 sm:py-3 md:py-3.5 bg-cream text-gold text-xs sm:text-sm tracking-[0.15em] sm:tracking-[0.2em] font-light border border-transparent hover:bg-transparent hover:border-cream hover:text-cream transition-all duration-300 min-h-[44px] min-w-[120px]" 
          aria-label="Explore The Experience"
        >
          {t('luxuryBody.explore')}
        </button>
      </div>
    </section>
  );
};

export default LuxuryBodyLine;
