import storeLocatorVideo from '@/assets/store-locator-video.mp4';
import { useLanguage } from '@/contexts/LanguageContext';
import { HoverButton } from '@/components/ui/hover-button';

interface StoreLocatorSectionProps {
  onStoreLocatorClick?: () => void;
}

/**
 * Store Locator Section
 * 
 * A calm architectural transition zone that serves as a luxury spatial divider.
 * Full-width horizontal band with video background.
 */
const StoreLocatorSection = ({ onStoreLocatorClick }: StoreLocatorSectionProps) => {
  const { t } = useLanguage();

  const handleClick = () => {
    if (onStoreLocatorClick) {
      onStoreLocatorClick();
    } else {
      window.open('https://suqaoud.com/shop', '_blank');
    }
  };

  return (
    <section
      className="w-full relative overflow-hidden"
      style={{
        height: 'clamp(180px, 25vw, 250px)',
      }}
      aria-label="SUQA OUD - Exclusively Online"
    >
      {/* Background Video */}
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src={storeLocatorVideo}
        autoPlay
        muted
        loop
        playsInline
        aria-hidden="true"
      />

      {/* Dark Overlay for text readability */}
      <div className="absolute inset-0 bg-black/30" />

      <div className="absolute inset-0 flex flex-col items-center justify-center px-4">
        {/* Heading */}
        <h2
          className="text-center uppercase tracking-[0.15em] sm:tracking-[0.2em] mb-4 sm:mb-6 text-cream text-lg sm:text-xl md:text-2xl lg:text-2xl"
          style={{
            fontFamily: '"Cormorant Garamond", "Times New Roman", serif',
            fontWeight: 400,
          }}
        >
          {t('storeLocator.title')}
        </h2>

        {/* Store Locator Button */}
        <HoverButton
          onClick={handleClick}
          aria-label="Shop SUQA OUD online"
        >
          {t('storeLocator.shopNow')}
        </HoverButton>
      </div>
    </section>
  );
};

export default StoreLocatorSection;
