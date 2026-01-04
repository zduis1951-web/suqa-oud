import { useState, useRef, useEffect } from 'react';
import { Pause, Play } from 'lucide-react';
import heroVideo from '@/assets/hero-video.mp4';
import { useLanguage } from '@/contexts/LanguageContext';
import { HoverButton } from '@/components/ui/hover-button';
interface HeroSectionProps {
  onShopNowClick?: () => void;
}

const HeroSection = ({
  onShopNowClick
}: HeroSectionProps) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const heroRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const { t, isRTL } = useLanguage();

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

  return (
    <section ref={heroRef} className="relative h-screen w-full overflow-hidden" aria-label="Hero section - SUQA OUD">
      {/* Background Video */}
      <video 
        ref={videoRef} 
        className="absolute inset-0 h-full w-full object-cover" 
        src={heroVideo} 
        autoPlay 
        muted 
        loop 
        playsInline 
        aria-label="SUQA OUD luxury fragrance video" 
      />

      {/* Dark Overlay for text readability */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Hero Content - Bottom Center */}
      <div className="absolute inset-x-0 bottom-12 sm:bottom-16 md:bottom-24 flex justify-center">
        <div className="px-4 sm:px-6 text-center max-w-[95vw] sm:max-w-none">
          {/* Brand Name */}
          <h1 className="animate-fade-in-up font-serif font-light tracking-[0.15em] sm:tracking-[0.2em] md:tracking-[0.3em] text-lg sm:text-xl mb-4 sm:mb-6 md:mb-8 text-cream">
            {t('hero.brandTitle')}
          </h1>
          
          {/* Main Headline */}
          <p className="animate-fade-in-up font-serif font-light leading-tight sm:leading-relaxed text-4xl sm:text-5xl md:text-6xl max-w-2xl mx-auto text-cream tracking-[0.08em] sm:tracking-[0.12em] md:tracking-[0.15em]">
            {t('hero.mainHeadline')}
          </p>
          
          {/* Tagline */}
          <p className="animate-fade-in-up font-serif text-[15px] sm:text-lg md:text-xl font-light italic tracking-wide text-cream/80 mt-4 sm:mt-6 md:mt-8">
            {t('hero.tagline')}
          </p>

          {/* CTA Button */}
          <div className="animate-fade-in-up animation-delay-200 mt-6 sm:mt-8 md:mt-10">
            <HoverButton 
              onClick={handleShopNowClick} 
              aria-label="Discover SUQA OUD"
            >
              {t('hero.shopNow')}
            </HoverButton>
          </div>
        </div>
      </div>

      {/* Play/Pause Control - Bottom Right */}
      <button 
        onClick={handlePlayPause} 
        className={`media-control w-10 h-10 sm:w-12 sm:h-12 bottom-4 sm:bottom-6 md:bottom-8 ${isRTL ? 'left-4 sm:left-6 md:left-8' : 'right-4 sm:right-6 md:right-8'}`}
        aria-label={isPlaying ? t('hero.pauseVideo') : t('hero.playVideo')}
      >
        {isPlaying ? (
          <Pause className="h-5 w-5 sm:h-6 sm:w-6 md:h-8 md:w-8" aria-hidden="true" />
        ) : (
          <Play className="h-5 w-5 sm:h-6 sm:w-6 md:h-8 md:w-8" aria-hidden="true" />
        )}
      </button>
    </section>
  );
};

export default HeroSection;
