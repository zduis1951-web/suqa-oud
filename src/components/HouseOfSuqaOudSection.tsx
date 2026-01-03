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
      style={{ minHeight: 'clamp(500px, 56.25vw, 800px)' }} 
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
          className="text-gold text-sm tracking-[0.2em] uppercase mb-4" 
          style={{ fontFamily: '"Cormorant Garamond", "Times New Roman", serif' }}
        >
          TO BE ROYAL IS TO BREATHE THE KINGDOM OF OUD
        </p>
        
        {/* Heading */}
        <h2 
          style={{
            fontFamily: '"Cormorant Garamond", "Times New Roman", serif',
            fontWeight: 400,
            letterSpacing: '0.25em',
          }} 
          className="text-center uppercase mb-8 text-5xl text-gold"
        >
          DISCOVER OUR STORY
        </h2>

        {/* Discover Button */}
        <button 
          onClick={handleClick} 
          className="uppercase tracking-[0.15em] transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-cream bg-cream text-gold border border-gold/30 hover:bg-transparent hover:text-cream hover:border-cream" 
          style={{
            fontFamily: '"Cormorant Garamond", "Times New Roman", serif',
            fontSize: '12px',
            fontWeight: 400,
            letterSpacing: '0.15em',
            padding: '14px 32px'
          }} 
          aria-label="Learn more about the House of SUQA OUD"
        >
          LEARN MORE
        </button>
      </div>

      {/* Accessibility Button - Bottom Left */}
      <div className="absolute left-4 bottom-4">
        
      </div>
    </section>
  );
};

export default HouseOfSuqaOudSection;
