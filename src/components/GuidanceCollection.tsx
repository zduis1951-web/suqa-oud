import { useState } from 'react';
import { Pause, Play } from 'lucide-react';

// Import Our Story background image
import ourStoryBgImage from '@/assets/our-story-bg.jpg';

/**
 * Guidance Collection Promotional Section
 * 
 * A full-width promotional section featuring the Guidance fragrance collection.
 * Displays below the hero section on the SUQA OUD homepage.
 * 
 * Features:
 * - Full-width background image with centered product display
 * - Collection title overlay
 * - CTA button
 * 
 * All images are original SUQA OUD brand assets.
 */

interface GuidanceCollectionProps {
  /** Optional callback when CTA button is clicked */
  onDiscoverClick?: () => void;
}
const GuidanceCollection = ({
  onDiscoverClick
}: GuidanceCollectionProps) => {
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
  return <section className="guidance-section" aria-label="Our Story - SUQA OUD">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full" style={{
      backgroundImage: `url(${ourStoryBgImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat'
    }} role="img" aria-label="SUQA OUD Elite fragrance" />

      {/* Content Overlay */}
      <div className="guidance-content">
        {/* Section Title */}
        <h2 className="guidance-title">
          SUQA OUD

        </h2>
        
        {/* Description */}
        <p className="text-sm md:text-base max-w-lg mx-auto text-center leading-relaxed mb-8 px-4 font-light text-white">
          YOU DON'T REACH FOR IT TO BE NOTICED. YOU REACH FOR IT WHEN YOU WANT LUXURY TO FEEL EFFORTLESS.
        </p>

        {/* CTA Button */}
        <button onClick={handleDiscoverClick} className="btn-guidance" aria-label="Discover more about SUQA OUD">
          DISCOVER MORE
        </button>
      </div>

      {/* Play/Pause Control - Bottom Right */}
      
    </section>;
};
export default GuidanceCollection;