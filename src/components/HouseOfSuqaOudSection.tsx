import houseOfSuqaOudVideo from '@/assets/house-of-suqa-oud-video.mp4';

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
          className="text-gold text-[10px] sm:text-xs md:text-sm tracking-[0.12em] sm:tracking-[0.15em] md:tracking-[0.2em] uppercase mb-3 sm:mb-4 text-center max-w-xs sm:max-w-md" 
          style={{ fontFamily: '"Cormorant Garamond", "Times New Roman", serif' }}
        >
          TO BE ROYAL IS TO BREATHE THE KINGDOM OF OUD
        </p>
        
        {/* Heading */}
        <h2 
          style={{
            fontFamily: '"Cormorant Garamond", "Times New Roman", serif',
            fontWeight: 400,
            letterSpacing: '0.15em',
          }} 
          className="text-center uppercase mb-6 sm:mb-8 text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-gold sm:tracking-[0.2em] md:tracking-[0.25em]"
        >
          DISCOVER OUR STORY
        </h2>

        {/* Discover Button */}
        <button 
          onClick={handleClick} 
          className="uppercase tracking-[0.1em] sm:tracking-[0.15em] transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-cream bg-cream text-gold border border-gold/30 hover:bg-transparent hover:text-cream hover:border-cream text-[10px] sm:text-xs md:text-sm px-4 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-3.5 min-h-[44px] min-w-[100px]" 
          style={{
            fontFamily: '"Cormorant Garamond", "Times New Roman", serif',
            fontWeight: 400,
          }} 
          aria-label="Learn more about the House of SUQA OUD"
        >
          LEARN MORE
        </button>
      </div>

      {/* Accessibility Button - Bottom Left */}
      <div className="absolute left-4 bottom-4 sm:left-6 sm:bottom-6">
        
      </div>
    </section>
  );
};

export default HouseOfSuqaOudSection;
