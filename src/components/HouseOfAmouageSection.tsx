import { useState, useRef } from 'react';
import houseOfAmouageDesktop from '@/assets/house-of-amouage-desktop.png';
import houseOfAmouageMobile from '@/assets/house-of-amouage-mobile.png';

interface HouseOfAmouageSectionProps {
  onDiscoverClick?: () => void;
}

/**
 * House of Amouage Section
 * 
 * A cinematic brand statement section with video/image background.
 * Architectural, calm, and editorial feel.
 */
const HouseOfAmouageSection = ({ onDiscoverClick }: HouseOfAmouageSectionProps) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleClick = () => {
    if (onDiscoverClick) {
      onDiscoverClick();
    } else {
      window.open('https://amouage.com/pages/house-of-amouage', '_blank');
    }
  };

  const togglePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <section
      className="w-full relative overflow-hidden"
      style={{ height: '770px' }}
      aria-label="The House of Amouage"
    >
      {/* Desktop Video Background */}
      <div className="hidden md:block absolute inset-0">
        <video
          ref={videoRef}
          className="w-full h-full object-cover"
          poster={houseOfAmouageDesktop}
          muted
          autoPlay
          loop
          playsInline
          preload="metadata"
        >
          <source
            src="https://cdn.shopify.com/videos/c/o/v/0812009c0bf248f7a780a5ca640595f9.mp4"
            type="video/mp4"
          />
        </video>
      </div>

      {/* Mobile Image Background */}
      <div
        className="md:hidden absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${houseOfAmouageMobile})` }}
      />

      {/* Content Overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-center px-4">
        {/* Heading */}
        <h2
          className="text-center uppercase mb-8"
          style={{
            fontFamily: '"Cormorant Garamond", "Times New Roman", serif',
            fontSize: 'clamp(20px, 3vw, 28px)',
            fontWeight: 400,
            letterSpacing: '0.25em',
            color: '#F7F4EF',
          }}
        >
          THE HOUSE OF AMOUAGE
        </h2>

        {/* Discover Button */}
        <button
          onClick={handleClick}
          className="uppercase tracking-[0.15em] transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-white"
          style={{
            fontFamily: '"Cormorant Garamond", "Times New Roman", serif',
            fontSize: '12px',
            fontWeight: 400,
            letterSpacing: '0.15em',
            color: '#1a1a1a',
            backgroundColor: '#ffffff',
            border: '1px solid rgba(255, 255, 255, 0.3)',
            padding: '14px 32px',
          }}
          aria-label="Discover our story - learn about the House of Amouage"
        >
          DISCOVER OUR STORY
        </button>
      </div>

      {/* Play/Pause Control - Desktop Only */}
      <div className="hidden md:block absolute right-8 bottom-1/2 translate-y-1/2">
        <button
          onClick={togglePlayPause}
          className="p-2 transition-opacity duration-200 hover:opacity-80 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
          aria-label={isPlaying ? 'Pause video' : 'Play video'}
        >
          {isPlaying ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
            >
              <path
                d="M23.3333 31.6666V8.33331H30V31.6666H23.3333ZM10 31.6666V8.33331H16.6667V31.6666H10Z"
                fill="#F7F4EF"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
            >
              <path
                d="M10 8.33331V31.6666L31.6667 20L10 8.33331Z"
                fill="#F7F4EF"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Accessibility Button - Bottom Left */}
      <div className="absolute left-4 bottom-4">
        <button
          className="w-10 h-10 rounded-full bg-[#2D2D2D] flex items-center justify-center transition-opacity duration-200 hover:opacity-80 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
          aria-label="Enable accessibility"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#F7F4EF"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="4" r="2" />
            <path d="M12 8v8" />
            <path d="M8 12h8" />
            <path d="M9 20l3-4 3 4" />
          </svg>
        </button>
      </div>
    </section>
  );
};

export default HouseOfAmouageSection;
