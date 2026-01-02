import { useState } from 'react';
import { Pause, Play } from 'lucide-react';

// Import Guidance images from assets (original from amouage.com)
import guidanceDesktopImage from '@/assets/guidance-desktop.png';
import guidanceMobileImage from '@/assets/guidance-mobile.png';

/**
 * Guidance Collection Promotional Section
 * 
 * A full-width promotional section featuring the Guidance fragrance collection.
 * Displays below the hero section on the Amouage homepage.
 * 
 * Features:
 * - Full-width background image with centered product display
 * - Collection title overlay
 * - CTA button
 * - Play/pause control for video/slideshow
 * 
 * Image Sources (original from amouage.com, no generation or editing):
 * - Desktop: src/assets/guidance-desktop.png
 * - Mobile: src/assets/guidance-mobile.png
 * 
 * Usage:
 * ```tsx
 * import GuidanceCollection from '@/components/GuidanceCollection';
 * 
 * function HomePage() {
 *   return (
 *     <>
 *       <Hero />
 *       <GuidanceCollection />
 *     </>
 *   );
 * }
 * ```
 */

interface GuidanceCollectionProps {
  /** Optional callback when CTA button is clicked */
  onDiscoverClick?: () => void;
}

const GuidanceCollection = ({ onDiscoverClick }: GuidanceCollectionProps) => {
  const [isPlaying, setIsPlaying] = useState(true);

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleDiscoverClick = () => {
    if (onDiscoverClick) {
      onDiscoverClick();
    } else {
      window.location.href = '#guidance-collection';
    }
  };

  return (
    <section 
      className="guidance-section"
      aria-label="Our Story - SUQA OUD"
    >
      {/* Background Image - Desktop */}
      <div 
        className="guidance-bg guidance-bg--desktop"
        style={{
          backgroundImage: `url(${guidanceDesktopImage})`,
        }}
        role="img"
        aria-label="SUQA OUD collection"
      />

      {/* Background Image - Mobile */}
      <div 
        className="guidance-bg guidance-bg--mobile"
        style={{
          backgroundImage: `url(${guidanceMobileImage})`,
        }}
        role="img"
        aria-label="SUQA OUD collection"
      />

      {/* Content Overlay */}
      <div className="guidance-content">
        {/* Section Title */}
        <h2 className="guidance-title">
          OUR STORY
        </h2>
        
        {/* Description */}
        <p className="text-foreground/80 text-sm md:text-base max-w-lg mx-auto text-center leading-relaxed mb-8 px-4 whitespace-pre-line font-light">
          {`SUQA OUD was not created for the trend.
It was created to last.

No timelines to chase.
No expectations to meet.

Only a decision to build value quietly,
without reference,
without imitation.

Because to be royal is not to announce luxury —
to be royal is to breathe the kingdom of oud.`}
        </p>

        {/* CTA Button */}
        <button
          onClick={handleDiscoverClick}
          className="btn-guidance"
          aria-label="Discover more about SUQA OUD"
        >
          DISCOVER MORE
        </button>
      </div>

      {/* Play/Pause Control - Bottom Right */}
      <button
        onClick={handlePlayPause}
        className="guidance-media-control"
        aria-label={isPlaying ? 'Pause video' : 'Play video'}
      >
        {isPlaying ? (
          <Pause className="h-8 w-8" aria-hidden="true" />
        ) : (
          <Play className="h-8 w-8" aria-hidden="true" />
        )}
      </button>
    </section>
  );
};

export default GuidanceCollection;
