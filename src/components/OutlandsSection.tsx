import { useState } from 'react';
import { Pause, Play } from 'lucide-react';
import outlandsBg from '@/assets/outlands-bg.jpg';
import outlandsBottle from '@/assets/outlands-bottle.jpg';

interface OutlandsSectionProps {
  onShopNowClick?: () => void;
}

/**
 * Outlands Promotional Section
 * 
 * Full-width promotional section featuring the Outlands fragrance.
 * Features a dramatic mood background with centered product bottle
 * and "SHOP NOW" CTA. Matches the Amouage homepage design.
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
      {/* Background Image */}
      <div 
        className="outlands-bg"
        style={{ backgroundImage: `url(${outlandsBg})` }}
        role="img"
        aria-label="Outlands fragrance atmospheric background"
      />

      {/* Subtle Overlay for Text Contrast */}
      <div className="outlands-overlay" />

      {/* Content */}
      <div className="outlands-content">
        {/* Product Bottle */}
        <div className="outlands-product">
          <img 
            src={outlandsBottle}
            alt="Amouage Outlands fragrance bottle"
            className="outlands-bottle"
          />
        </div>

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
