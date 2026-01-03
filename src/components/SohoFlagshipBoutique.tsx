import { useState, useRef } from 'react';
import { Pause, Play } from 'lucide-react';
import onlineOnlyVideo from '@/assets/online-only-video.mp4';

interface SohoFlagshipBoutiqueProps {
  onDiscoverMoreClick?: () => void;
}

const SohoFlagshipBoutique = ({
  onDiscoverMoreClick
}: SohoFlagshipBoutiqueProps) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <section className="relative w-full min-h-screen overflow-hidden">
      {/* Background Video */}
      <video 
        ref={videoRef} 
        className="absolute inset-0 h-full w-full object-cover" 
        src={onlineOnlyVideo} 
        autoPlay 
        muted 
        loop 
        playsInline 
        aria-hidden="true" 
      />

      {/* Dark Overlay for text readability */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Content Overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
        {/* Main Headline */}
        <h2 
          style={{ fontFamily: 'var(--font-primary)' }} 
          className="text-cream text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl tracking-[0.1em] sm:tracking-[0.12em] md:tracking-[0.15em] uppercase mb-3 sm:mb-4 md:mb-6 max-w-xs sm:max-w-md md:max-w-lg lg:max-w-4xl"
        >
          CRAFTED FOR THE EXTRAORDINARY
        </h2>
        
        {/* Description */}
        <p 
          className="text-cream/80 text-2xl sm:text-3xl md:text-4xl lg:text-5xl tracking-[0.05em] sm:tracking-[0.08em] md:tracking-[0.1em] uppercase mb-4 sm:mb-6 md:mb-8 font-light" 
          style={{ fontFamily: 'var(--font-primary)' }}
        >
          THE ESSENCE OF REFINEMENT
        </p>

        {/* CTA Button */}
        <button 
          onClick={onDiscoverMoreClick} 
          className="border border-cream text-gold bg-cream px-6 sm:px-8 md:px-10 py-2.5 sm:py-3 md:py-4 text-xs sm:text-sm tracking-[0.15em] sm:tracking-[0.2em] uppercase transition-all duration-300 hover:bg-transparent hover:text-cream min-h-[44px] min-w-[120px]" 
          style={{ fontFamily: 'var(--font-primary)' }}
        >
          EXPLORE
        </button>
      </div>

      {/* Media Control - Play/Pause - Bottom Right */}
      <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 md:bottom-8 md:right-8">
        <button 
          onClick={togglePlayPause} 
          className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-cream/50 flex items-center justify-center hover:border-cream transition-colors bg-black/20 min-w-[44px] min-h-[44px]" 
          aria-label={isPlaying ? 'Pause video' : 'Play video'}
        >
          {isPlaying ? (
            <Pause className="h-4 w-4 sm:h-5 sm:w-5 text-cream" strokeWidth={1.5} />
          ) : (
            <Play className="h-4 w-4 sm:h-5 sm:w-5 text-cream ml-0.5" strokeWidth={1.5} />
          )}
        </button>
      </div>

      {/* Accessibility Icon - Bottom Left */}
      <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 md:bottom-8 md:left-8">
        
      </div>
    </section>
  );
};

export default SohoFlagshipBoutique;
