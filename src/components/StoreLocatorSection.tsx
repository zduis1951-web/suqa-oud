import storeLocatorBg from '@/assets/store-locator-bg.png';

interface StoreLocatorSectionProps {
  onStoreLocatorClick?: () => void;
}

/**
 * Store Locator Section
 * 
 * A calm architectural transition zone that serves as a luxury spatial divider.
 * Full-width horizontal band with marble/stone texture background.
 */
const StoreLocatorSection = ({ onStoreLocatorClick }: StoreLocatorSectionProps) => {
  const handleClick = () => {
    if (onStoreLocatorClick) {
      onStoreLocatorClick();
    } else {
      window.open('https://amouage.com/pages/store-locator', '_blank');
    }
  };

  return (
    <section
      className="w-full relative"
      style={{
        backgroundImage: `url(${storeLocatorBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        height: '200px',
      }}
      aria-label="Find your nearest Amouage boutique"
    >
      <div className="absolute inset-0 flex flex-col items-center justify-center px-4">
        {/* Heading */}
        <h2
          className="text-center uppercase tracking-[0.2em] mb-6"
          style={{
            fontFamily: '"Cormorant Garamond", "Times New Roman", serif',
            fontSize: 'clamp(14px, 2.5vw, 18px)',
            fontWeight: 400,
            letterSpacing: '0.2em',
            color: '#1a1a1a',
          }}
        >
          FIND YOUR NEAREST AMOUAGE BOUTIQUE
        </h2>

        {/* Store Locator Button */}
        <button
          onClick={handleClick}
          className="uppercase tracking-[0.15em] transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-foreground"
          style={{
            fontFamily: '"Cormorant Garamond", "Times New Roman", serif',
            fontSize: '12px',
            fontWeight: 400,
            letterSpacing: '0.15em',
            color: '#1a1a1a',
            backgroundColor: '#ffffff',
            border: '1px solid rgba(0, 0, 0, 0.15)',
            padding: '14px 32px',
          }}
          aria-label="Open store locator to find nearest Amouage boutique"
        >
          STORE LOCATOR
        </button>
      </div>
    </section>
  );
};

export default StoreLocatorSection;
