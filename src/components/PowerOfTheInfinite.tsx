import theCraftBg from '@/assets/the-craft-bg.jpg';

interface PowerOfTheInfiniteProps {
  onShopNowClick?: () => void;
}

/**
 * Power of the Infinite Section
 * 
 * Displays the SUQA OUD Eternity collection featuring Decision and Existence
 * fragrances with twisted wood branches composition.
 * 
 * All images are original SUQA OUD brand assets.
 */
const PowerOfTheInfinite = ({
  onShopNowClick
}: PowerOfTheInfiniteProps) => {
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
      <div className="absolute inset-0 flex flex-col items-center justify-end pb-32 md:pb-44 lg:pb-56">
        {/* Main Title */}
        <h2 
          style={{ fontFamily: 'var(--font-display)' }} 
          className="text-2xl md:text-3xl tracking-[0.25em] md:tracking-[0.35em] mb-10 md:mb-12 text-center px-4 text-cream font-medium lg:text-sm"
        >
          IT DOESN'T SEEK ATTENTION. IT CREATES A FEELING OF COMPOSURE.
        </h2>
        
        {/* Description */}
        <p className="text-5xl text-cream font-semibold mb-6 md:mb-8 text-center px-4 tracking-[0.2em]">
          THE EXPERIENCE
        </p>
        
        {/* Explore Button */}
        <button 
          onClick={onShopNowClick} 
          className="px-8 md:px-10 py-3 md:py-3.5 bg-cream text-gold text-xs md:text-sm tracking-[0.2em] font-light border border-transparent hover:bg-transparent hover:text-cream hover:border-cream transition-all duration-300" 
          aria-label="Explore The Craft"
        >
          EXPLORE
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
