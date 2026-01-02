import theCraftBg from '@/assets/the-craft-bg.jpg';
interface PowerOfTheInfiniteProps {
  onShopNowClick?: () => void;
}

/**
 * Power of the Infinite Section
 * 
 * Recreated from amouage.com/pages/amouage-eternity - displays the Eternity collection
 * featuring Decision and Existence fragrances with twisted wood branches composition.
 * 
 * All images downloaded directly from the live Amouage website.
 * No images were generated or edited.
 */
const PowerOfTheInfinite = ({
  onShopNowClick
}: PowerOfTheInfiniteProps) => {
  return <section className="relative w-full min-h-screen overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full" style={{
      backgroundImage: `url(${theCraftBg})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat'
    }} role="img" aria-label="The Craft - SUQA OUD Elite" />
      
      {/* Content Overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-end pb-24 md:pb-32 lg:pb-40">
        {/* Main Title */}
        <h2 style={{
        fontFamily: 'var(--font-display)'
      }} className="text-2xl md:text-3xl tracking-[0.25em] md:tracking-[0.35em] mb-3 md:mb-4 text-center px-4 text-inherit font-medium lg:text-sm">
          IT DOESN'T SEEK ATTENTION. IT CREATES A FEELING OF COMPOSURE.

        </h2>
        
        {/* Description */}
        <p className="text-3xl text-white font-medium mb-6 md:mb-8 text-center px-4 tracking-[0.2em]">THE EXPERIENCE</p>
        
        {/* Explore Button */}
        <button onClick={onShopNowClick} className="px-8 md:px-10 py-3 md:py-3.5 bg-background text-foreground text-xs md:text-sm tracking-[0.2em] font-light border border-transparent hover:bg-transparent hover:border-foreground transition-all duration-300" aria-label="Explore The Craft">
          EXPLORE
        </button>
      </div>
      
      {/* Accessibility Icon - Bottom Left */}
      <div className="absolute bottom-4 left-4 z-10">
        <button className="w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center hover:bg-background transition-colors duration-200" aria-label="Enable accessibility options">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-foreground">
            <circle cx="12" cy="4" r="2" />
            <path d="M12 6v6m0 0l-4 8m4-8l4 8" />
            <path d="M6 10h12" />
          </svg>
        </button>
      </div>
      
      {/* Play/Pause Control - Bottom Right */}
      <div className="absolute bottom-4 right-4 z-10">
        <button className="w-10 h-10 rounded-full border border-foreground/30 flex items-center justify-center hover:border-foreground transition-colors duration-200 bg-transparent" aria-label="Play or pause video">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="text-foreground ml-0.5">
            <path d="M8 5v14l11-7z" />
          </svg>
        </button>
      </div>
    </section>;
};
export default PowerOfTheInfinite;