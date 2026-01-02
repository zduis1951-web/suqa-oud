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
      aria-label="Our Philosophy - SUQA OUD"
    >
      {/* Single Continuous Background Image with Embedded Bottle */}
      <div 
        className="outlands-bg"
        style={{ backgroundImage: `url(${outlandsBg})` }}
        role="img"
        aria-label="SUQA OUD philosophy"
      />

      {/* Content - Title and CTA positioned at bottom */}
      <div className="outlands-content">
        {/* Title */}
        <h2 className="outlands-title">OUR PHILOSOPHY</h2>
        
        {/* Description */}
        <p className="text-foreground/80 text-sm md:text-base max-w-lg mx-auto text-center leading-relaxed mb-8 px-4 whitespace-pre-line font-light">
          {`There is a form of luxury
that doesn't announce itself.

It enters the room calmly,
takes its place,
and never asks to be validated.

That is the kind we believe in.

Royalty is felt, not declared.
It is carried with ease,
breathed naturally.`}
        </p>

        {/* CTA Button */}
        <button
          onClick={onShopNowClick}
          className="btn-outlands"
          aria-label="Explore SUQA OUD philosophy"
        >
          EXPLORE
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
