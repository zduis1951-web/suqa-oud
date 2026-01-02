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
      aria-label="Guidance Collection promotional section"
    >
      {/* Background Image - Desktop */}
      <div 
        className="guidance-bg guidance-bg--desktop"
        style={{
          backgroundImage: `url(${guidanceDesktopImage})`,
        }}
        role="img"
        aria-label="Guidance fragrance collection"
      />

      {/* Background Image - Mobile */}
      <div 
        className="guidance-bg guidance-bg--mobile"
        style={{
          backgroundImage: `url(${guidanceMobileImage})`,
        }}
        role="img"
        aria-label="Guidance fragrance collection"
      />

      {/* Content Overlay */}
      <div className="guidance-content">
        {/* Collection Title */}
        <h2 className="guidance-title">
          GUIDANCE
        </h2>

        {/* CTA Button */}
        <button
          onClick={handleDiscoverClick}
          className="btn-guidance"
          aria-label="Discover the Guidance collection"
        >
          DISCOVER THE COLLECTION
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
