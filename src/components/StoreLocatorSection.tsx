import storeLocatorVideo from '@/assets/store-locator-video.mp4';

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
        height: '200px',
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
          className="text-center uppercase tracking-[0.2em] mb-6 text-cream"
          style={{
            fontFamily: '"Cormorant Garamond", "Times New Roman", serif',
            fontSize: 'clamp(14px, 2.5vw, 18px)',
            fontWeight: 400,
            letterSpacing: '0.2em',
          }}
        >
          EXCLUSIVELY ONLINE
        </h2>

        {/* Store Locator Button */}
        <button
          onClick={handleClick}
          className="uppercase tracking-[0.15em] transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-foreground bg-cream text-gold border border-gold/20 hover:bg-transparent hover:text-cream hover:border-cream"
          style={{
            fontFamily: '"Cormorant Garamond", "Times New Roman", serif',
            fontSize: '12px',
            fontWeight: 400,
            letterSpacing: '0.15em',
            padding: '14px 32px',
          }}
          aria-label="Shop SUQA OUD online"
        >
          SHOP NOW
        </button>
      </div>
    </section>
  );
};

export default StoreLocatorSection;
