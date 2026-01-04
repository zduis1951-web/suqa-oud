// Import Our Story background image
import ourStoryBgImage from '@/assets/our-story-bg.jpg';
import { useLanguage } from '@/contexts/LanguageContext';
import { HoverButton } from '@/components/ui/hover-button';
/**
 * Guidance Collection Promotional Section
 * 
 * A full-width promotional section featuring the Guidance fragrance collection.
 * Displays below the hero section on the SUQA OUD homepage.
 */

interface GuidanceCollectionProps {
  onDiscoverClick?: () => void;
}
const GuidanceCollection = ({
  onDiscoverClick
}: GuidanceCollectionProps) => {
  const {
    t
  } = useLanguage();
  const handleDiscoverClick = () => {
    if (onDiscoverClick) {
      onDiscoverClick();
    } else {
      window.location.href = '#guidance-collection';
    }
  };
  return <section className="guidance-section" aria-label="Our Story - SUQA OUD">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full" style={{
      backgroundImage: `url(${ourStoryBgImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat'
    }} role="img" aria-label="SUQA OUD Elite fragrance" />

      {/* Content Overlay */}
      <div className="guidance-content px-4">
        {/* Section Title */}
        <h2 className="guidance-title text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-[0.2em] sm:tracking-[0.3em] md:tracking-luxury">
          {t('guidance.title')}
        </h2>
        
        {/* Description */}
        <p className="text-lg sm:text-xl max-w-sm sm:max-w-md lg:max-w-lg mx-auto text-center leading-relaxed mb-6 sm:mb-8 font-light text-white md:text-3xl px-[4px]">
          {t('guidance.description')}
        </p>

        {/* CTA Button */}
        <HoverButton onClick={handleDiscoverClick} aria-label="Discover more about SUQA OUD">
          {t('guidance.discoverMore')}
        </HoverButton>
      </div>
    </section>;
};
export default GuidanceCollection;