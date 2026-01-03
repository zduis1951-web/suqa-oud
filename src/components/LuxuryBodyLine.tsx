import luxuryBodyBg from '@/assets/luxury-body-bg.png';

interface LuxuryBodyLineProps {
  onShopNowClick?: () => void;
}

/**
 * Luxury Body Line Section
 * 
 * Displays the SUQA OUD Luxury Body Line promotional section
 * with full-width cinematic background image and centered CTA.
 * 
 * All images are original SUQA OUD brand assets.
 */
const LuxuryBodyLine = ({
  onShopNowClick
}: LuxuryBodyLineProps) => {
  return (
    <section className="relative w-full min-h-screen overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 w-full h-full" 
        style={{
          backgroundImage: `url(${luxuryBodyBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }} 
        role="img" 
        aria-label="The Experience - SUQA OUD Discovery Set" 
      />
      
      {/* Content Overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-end pb-16 md:pb-20 lg:pb-24">
        {/* Title */}
        <h2 
          style={{ fontFamily: 'var(--font-display)' }} 
          className="text-xl md:text-2xl tracking-[0.3em] md:tracking-[0.4em] font-light mb-4 md:mb-6 lg:text-base text-cream"
        >
          THERE IS A FORM OF LUXURY THAT DOESN'T ANNOUNCE ITSELF.
        </h2>
        
        {/* Description */}
        <p className="text-cream text-2xl max-w-md mx-auto text-center leading-relaxed mb-6 md:mb-8 px-4 tracking-[0.2em] font-light">
          OUR PHILOSOPHY
        </p>
        
        {/* Explore Button */}
        <button 
          onClick={onShopNowClick} 
          className="px-8 md:px-10 py-3 md:py-3.5 bg-cream text-gold text-xs md:text-sm tracking-[0.2em] font-light border border-transparent hover:bg-transparent hover:border-cream hover:text-cream transition-all duration-300" 
          aria-label="Explore The Experience"
        >
          EXPLORE
        </button>
      </div>
    </section>
  );
};

export default LuxuryBodyLine;
