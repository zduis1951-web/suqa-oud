import { useState, useRef } from 'react';
import { Pause, Play } from 'lucide-react';
import outlandsVideo from '@/assets/store-locator-video.mp4';

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
      <div className="outlands-content">
        {/* Title */}
        <h2 className="outlands-title text-cream text-center text-sm">
          COMPLIMENTARY WRAPPING AND PERSONALIZATION CHOICES. A GIFT FIT FOR KINGS.
        </h2>
        
        {/* Description */}
        <p className="text-sm max-w-lg mx-auto text-center leading-relaxed mb-8 px-4 whitespace-pre-line font-light text-cream md:text-5xl">
          THE PERFECT GIFT
        </p>

        {/* CTA Button */}
        <button 
          onClick={onShopNowClick} 
          aria-label="Explore SUQA OUD philosophy" 
          className="btn-outlands bg-cream text-gold hover:bg-transparent hover:text-cream"
        >
          EXPLORE
        </button>
      </div>

      {/* Media Control - Play/Pause */}
      <button
        onClick={togglePlayPause}
        className="media-control"
        aria-label={isPlaying ? 'Pause video' : 'Play video'}
      >
        {isPlaying ? (
          <Pause className="h-6 w-6" strokeWidth={1} aria-hidden="true" />
        ) : (
          <Play className="h-6 w-6" strokeWidth={1} aria-hidden="true" />
        )}
      </button>
    </section>
  );
};

export default OutlandsSection;
