import { useState, useRef, useEffect } from 'react';
import { Pause, Play, Accessibility } from 'lucide-react';
import heroVideo from '@/assets/hero-video.mp4';
interface HeroSectionProps {
  onShopNowClick?: () => void;
}
const HeroSection = ({
  onShopNowClick
}: HeroSectionProps) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const heroRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const handlePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
    }
    setIsPlaying(!isPlaying);
  };
  const handleAccessibilityClick = () => {
    console.log('Accessibility toggle clicked');
  };
  const handleShopNowClick = () => {
    if (onShopNowClick) {
      onShopNowClick();
    } else {
      window.location.href = '#shop';
    }
  };
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        setIsPlaying(false);
      });
    }
  }, []);
  return <section ref={heroRef} className="relative h-screen w-full overflow-hidden" aria-label="Hero section - SUQA OUD">
      {/* Background Video */}
      <video ref={videoRef} className="absolute inset-0 h-full w-full object-cover" src={heroVideo} autoPlay muted loop playsInline aria-label="SUQA OUD luxury fragrance video" />

      {/* Dark Overlay for text readability */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Hero Content - Bottom Center */}
      <div className="absolute inset-x-0 bottom-16 md:bottom-24 flex justify-center">
        <div className="px-6 text-center">
          {/* Brand Name */}
          <h1 className="animate-fade-in-up font-serif font-light tracking-[0.3em] text-sm mb-6 md:mb-8 text-white">
            A NEW DUO OF MAJESTIC COMPOSITIONS
  
          </h1>
          
          {/* Main Headline */}
          <p className="animate-fade-in-up font-serif font-light leading-relaxed text-4xl max-w-2xl mx-auto text-white tracking-[0.15em] whitespace-nowrap">
            THE POWER OF THE INFINITE
          </p>
          
          {/* Tagline */}
          <p className="animate-fade-in-up font-serif text-xs font-light italic tracking-wide text-[#d4c5b0]/80 sm:text-sm mt-6 md:mt-8">
            To be royal is to breathe the kingdom of oud.
          </p>

          {/* CTA Button */}
          <div className="animate-fade-in-up animation-delay-200 mt-8 md:mt-10">
            <button onClick={handleShopNowClick} aria-label="Discover SUQA OUD" className="border border-[#d4c5b0] px-8 py-3 text-sm font-light tracking-[0.2em] transition-all duration-300 bg-white text-black">
              SHOP NOW


 









 




            </button>
          </div>
        </div>
      </div>

      {/* Accessibility Button - Bottom Left */}
      <button onClick={handleAccessibilityClick} className="accessibility-btn" aria-label="Enable accessibility features">
        <Accessibility className="h-5 w-5" aria-hidden="true" />
      </button>

      {/* Play/Pause Control - Bottom Right */}
      <button onClick={handlePlayPause} className="media-control" aria-label={isPlaying ? 'Pause video' : 'Play video'}>
        {isPlaying ? <Pause className="h-8 w-8" aria-hidden="true" /> : <Play className="h-8 w-8" aria-hidden="true" />}
      </button>
    </section>;
};
export default HeroSection;