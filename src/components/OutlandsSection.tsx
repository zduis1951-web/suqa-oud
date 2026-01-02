import { useState } from 'react';
import { Pause, Play } from 'lucide-react';
import outlandsBg from '@/assets/outlands-bg.jpg';

interface OutlandsSectionProps {
  onShopNowClick?: () => void;
}

/**
 * Outlands Promotional Section
 * 
 * Full-width cinematic section featuring the Outlands fragrance.
 * Uses a single continuous background image with the bottle embedded
 * in the scene. Matches the Amouage homepage design exactly.
 */
const OutlandsSection = ({ onShopNowClick }: OutlandsSectionProps) => {
  const [isPlaying, setIsPlaying] = useState(true);

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <section 
      className="outlands-section"
      aria-label="Outlands Collection"
    >
      {/* Single Continuous Background Image with Embedded Bottle */}
      <div 
        className="outlands-bg"
        style={{ backgroundImage: `url(${outlandsBg})` }}
        role="img"
        aria-label="Outlands fragrance scene with bottle"
      />

      {/* Content - Title and CTA positioned at bottom */}
      <div className="outlands-content">
        {/* Title */}
        <h2 className="outlands-title">OUTLANDS</h2>

        {/* CTA Button */}
        <button
          onClick={onShopNowClick}
          className="btn-outlands"
          aria-label="Shop the Outlands collection"
        >
          SHOP NOW
        </button>
      </div>

      {/* Media Control - Play/Pause */}
      <button
        onClick={togglePlayPause}
        className="outlands-media-control"
        aria-label={isPlaying ? 'Pause media' : 'Play media'}
      >
        {isPlaying ? (
          <Pause className="h-6 w-6" strokeWidth={1} />
        ) : (
          <Play className="h-6 w-6" strokeWidth={1} />
        )}
      </button>
    </section>
  );
};

export default OutlandsSection;
