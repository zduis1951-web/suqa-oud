import houseOfSuqaOudVideo from '@/assets/house-of-suqa-oud-video.mp4';
import { useLanguage } from '@/contexts/LanguageContext';
import { HoverButton } from '@/components/ui/hover-button';

interface HouseOfSuqaOudSectionProps {
  onDiscoverClick?: () => void;
}

/**
 * House of SUQA OUD Section
 * 
 * A cinematic brand statement section with video background.
 * Architectural, calm, and editorial feel.
 */
const HouseOfSuqaOudSection = ({
  onDiscoverClick
}: HouseOfSuqaOudSectionProps) => {
  const { t } = useLanguage();

  const handleClick = () => {
    if (onDiscoverClick) {
      onDiscoverClick();
    } else {
      window.open('https://suqaoud.com/about', '_blank');
    }
  };

  return (
    <section 
      className="w-full relative overflow-hidden m-0 p-0" 
      style={{ minHeight: 'clamp(400px, 56.25vw, 800px)' }} 
      aria-label="The House of SUQA OUD"
    >
      {/* Video Background */}
      <video 
        src={houseOfSuqaOudVideo} 
        autoPlay 
        loop 
        muted 
        playsInline 
        className="absolute inset-0 w-full h-full object-cover" 
        style={{ objectPosition: 'center 40%' }} 
      />

      {/* Content Overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-center px-4">
        {/* Tagline */}
        <p 
          className="text-gold text-[15px] sm:text-lg md:text-xl tracking-[0.12em] sm:tracking-[0.15em] md:tracking-[0.2em] uppercase mb-3 sm:mb-4 text-center max-w-xs sm:max-w-md" 
          style={{ fontFamily: '"Cormorant Garamond", "Times New Roman", serif' }}
        >
          {t('houseOfSuqa.tagline')}
        </p>
        
        {/* Heading */}
        <h2 
          style={{
            fontFamily: '"Cormorant Garamond", "Times New Roman", serif',
            fontWeight: 400,
            letterSpacing: '0.15em',
          }} 
          className="text-center uppercase mb-6 sm:mb-8 text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-gold sm:tracking-[0.2em] md:tracking-[0.25em]"
        >
          {t('houseOfSuqa.title')}
        </h2>

        {/* Discover Button */}
        <HoverButton 
          onClick={handleClick} 
          aria-label="Learn more about the House of SUQA OUD"
        >
          {t('houseOfSuqa.learnMore')}
        </HoverButton>
      </div>

      {/* Accessibility Button - Bottom Left */}
      <div className="absolute left-4 bottom-4 sm:left-6 sm:bottom-6">
        
      </div>
    </section>
  );
};

export default HouseOfSuqaOudSection;
