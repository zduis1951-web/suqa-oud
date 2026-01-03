import { useState, useRef } from 'react';
import { Pause, Play } from 'lucide-react';
import outlandsVideo from '@/assets/store-locator-video.mp4';
import { useLanguage } from '@/contexts/LanguageContext';

interface OutlandsSectionProps {
  onShopNowClick?: () => void;
}

/**
 * Outlands Promotional Section
 * 
 * Full-width cinematic section featuring the Outlands fragrance.
 * Uses a video background with content overlay.
 */
const OutlandsSection = ({
  onShopNowClick
}: OutlandsSectionProps) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);
  const { t, isRTL } = useLanguage();

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
    <section className="outlands-section" aria-label="Our Philosophy - SUQA OUD">
      {/* Background Video */}
      <video 
        ref={videoRef} 
        className="absolute inset-0 h-full w-full object-cover" 
        src={outlandsVideo} 
        autoPlay 
        muted 
        loop 
        playsInline 
        aria-hidden="true" 
      />

      {/* Dark Overlay for text readability */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Content - Title and CTA positioned at bottom */}
      <div className="outlands-content px-4">
        {/* Title */}
        <h2 className="outlands-title text-cream text-center text-xs sm:text-sm tracking-[0.15em] sm:tracking-[0.2em] md:tracking-[0.25em] max-w-xs sm:max-w-md md:max-w-lg mx-auto">
          {t('outlands.title')}
        </h2>
        
        {/* Description */}
        <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl max-w-lg mx-auto text-center leading-tight mb-6 sm:mb-8 px-2 font-light text-cream tracking-[0.1em] sm:tracking-[0.15em]">
          {t('outlands.description')}
        </p>

        {/* CTA Button */}
        <button 
          onClick={onShopNowClick} 
          aria-label="Explore SUQA OUD philosophy" 
          className="btn-outlands bg-cream text-gold hover:bg-transparent hover:text-cream px-6 sm:px-8 md:px-12 py-3 sm:py-4 md:py-5 text-xs sm:text-sm min-h-[44px] min-w-[120px]"
        >
          {t('outlands.explore')}
        </button>
      </div>

      {/* Media Control - Play/Pause */}
      <button
        onClick={togglePlayPause}
        className={`media-control w-10 h-10 sm:w-12 sm:h-12 bottom-4 sm:bottom-6 md:bottom-8 ${isRTL ? 'left-4 sm:left-6 md:left-8' : 'right-4 sm:right-6 md:right-8'}`}
        aria-label={isPlaying ? t('outlands.pauseVideo') : t('outlands.playVideo')}
      >
        {isPlaying ? (
          <Pause className="h-5 w-5 sm:h-6 sm:w-6" strokeWidth={1} aria-hidden="true" />
        ) : (
          <Play className="h-5 w-5 sm:h-6 sm:w-6" strokeWidth={1} aria-hidden="true" />
        )}
      </button>
    </section>
  );
};

export default OutlandsSection;
