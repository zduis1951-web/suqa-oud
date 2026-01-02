import houseOfSuqaOudVideo from '@/assets/house-of-suqa-oud-video.mp4';
interface HouseOfAmouageSectionProps {
  onDiscoverClick?: () => void;
}

/**
 * House of SUQA OUD Section
 * 
 * A cinematic brand statement section with video background.
 * Architectural, calm, and editorial feel.
 */
const HouseOfAmouageSection = ({
  onDiscoverClick
}: HouseOfAmouageSectionProps) => {
  const handleClick = () => {
    if (onDiscoverClick) {
      onDiscoverClick();
    } else {
      window.open('https://suqaoud.com/about', '_blank');
    }
  };
  return <section className="w-full relative overflow-hidden m-0 p-0" style={{
    minHeight: 'clamp(500px, 56.25vw, 800px)'
  }} aria-label="The House of SUQA OUD">
      {/* Video Background */}
      <video src={houseOfSuqaOudVideo} autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover" style={{
      objectPosition: 'center 40%'
    }} />

      {/* Content Overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-center px-4">
        {/* Tagline */}
        <p className="text-white text-sm tracking-[0.2em] uppercase mb-4" style={{
          fontFamily: '"Cormorant Garamond", "Times New Roman", serif',
        }}>
          TO BE ROYAL IS TO BREATHE THE KINGDOM OF OUD
        </p>
        {/* Heading */}
        <h2 style={{
        fontFamily: '"Cormorant Garamond", "Times New Roman", serif',
        fontSize: 'clamp(20px, 3vw, 28px)',
        fontWeight: 400,
        letterSpacing: '0.25em',
        color: '#000000'
      }} className="text-center uppercase mb-8 text-5xl">
          DISCOVER OUR STORY

        </h2>

        {/* Discover Button */}
        <button onClick={handleClick} className="uppercase tracking-[0.15em] transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-white" style={{
        fontFamily: '"Cormorant Garamond", "Times New Roman", serif',
        fontSize: '12px',
        fontWeight: 400,
        letterSpacing: '0.15em',
        color: '#1a1a1a',
        backgroundColor: '#ffffff',
        border: '1px solid rgba(255, 255, 255, 0.3)',
        padding: '14px 32px'
      }} aria-label="Learn more about the House of SUQA OUD">
          LEARN MORE
        </button>
      </div>


      {/* Accessibility Button - Bottom Left */}
      <div className="absolute left-4 bottom-4">
        <button className="w-10 h-10 rounded-full bg-[#2D2D2D] flex items-center justify-center transition-opacity duration-200 hover:opacity-80 focus:outline-none focus-visible:ring-2 focus-visible:ring-white" aria-label="Enable accessibility">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#F7F4EF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="4" r="2" />
            <path d="M12 8v8" />
            <path d="M8 12h8" />
            <path d="M9 20l3-4 3 4" />
          </svg>
        </button>
      </div>
    </section>;
};
export default HouseOfAmouageSection;