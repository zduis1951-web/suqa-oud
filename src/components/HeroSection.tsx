import { useState, useRef, useEffect } from 'react';
import { Pause, Play } from 'lucide-react';
import { motion } from 'framer-motion';
import heroVideo from '@/assets/hero-video.mp4';

interface HeroSectionProps {
  onShopNowClick?: () => void;
}

const HeroSection = ({ onShopNowClick }: HeroSectionProps) => {
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

  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.15,
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94] as const
      }
    })
  };

  return (
    <section 
      ref={heroRef} 
      className="relative h-screen w-full overflow-hidden" 
      aria-label="Hero section - SUQA OUD"
    >
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
      <div className="absolute inset-0 bg-black/40" />

      {/* Hero Content - Center */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="px-6 text-center max-w-4xl mx-auto">
          {/* Brand Name */}
          <motion.h1 
            custom={0}
            initial="hidden"
            animate="visible"
            variants={textVariants}
            className="font-serif font-light tracking-[0.4em] text-2xl md:text-3xl mb-12 text-white uppercase"
          >
            SUQA OUD
          </motion.h1>
          
          {/* Poetic Lines */}
          <div className="space-y-1 mb-12">
            <motion.p 
              custom={1}
              initial="hidden"
              animate="visible"
              variants={textVariants}
              className="font-serif font-light text-lg md:text-xl text-white/90 tracking-[0.05em] leading-relaxed"
            >
              You don't reach for it
            </motion.p>
            <motion.p 
              custom={2}
              initial="hidden"
              animate="visible"
              variants={textVariants}
              className="font-serif font-light text-lg md:text-xl text-white/90 tracking-[0.05em] leading-relaxed"
            >
              to be noticed.
            </motion.p>
          </div>

          <div className="space-y-1 mb-12">
            <motion.p 
              custom={3}
              initial="hidden"
              animate="visible"
              variants={textVariants}
              className="font-serif font-light text-lg md:text-xl text-white/90 tracking-[0.05em] leading-relaxed"
            >
              You reach for it
            </motion.p>
            <motion.p 
              custom={4}
              initial="hidden"
              animate="visible"
              variants={textVariants}
              className="font-serif font-light text-lg md:text-xl text-white/90 tracking-[0.05em] leading-relaxed"
            >
              when you want luxury
            </motion.p>
            <motion.p 
              custom={5}
              initial="hidden"
              animate="visible"
              variants={textVariants}
              className="font-serif font-light text-lg md:text-xl text-white/90 tracking-[0.05em] leading-relaxed"
            >
              to feel effortless.
            </motion.p>
          </div>

          <div className="space-y-1 mb-16">
            <motion.p 
              custom={6}
              initial="hidden"
              animate="visible"
              variants={textVariants}
              className="font-serif font-light text-base md:text-lg text-white/70 tracking-[0.08em]"
            >
              Not displayed.
            </motion.p>
            <motion.p 
              custom={7}
              initial="hidden"
              animate="visible"
              variants={textVariants}
              className="font-serif font-light text-base md:text-lg text-white/70 tracking-[0.08em]"
            >
              Not explained.
            </motion.p>
            <motion.p 
              custom={8}
              initial="hidden"
              animate="visible"
              variants={textVariants}
              className="font-serif font-light text-base md:text-lg text-white/70 tracking-[0.08em]"
            >
              Simply present.
            </motion.p>
          </div>
          
          {/* Tagline */}
          <motion.p 
            custom={9}
            initial="hidden"
            animate="visible"
            variants={textVariants}
            className="font-serif text-sm md:text-base font-light italic tracking-[0.1em] text-[#d4c5b0] mb-12"
          >
            To be royal is to breathe the kingdom of oud.
          </motion.p>

          {/* CTA Button */}
          <motion.div 
            custom={10}
            initial="hidden"
            animate="visible"
            variants={textVariants}
          >
            <button 
              onClick={handleShopNowClick} 
              aria-label="Discover SUQA OUD" 
              className="border border-[#d4c5b0]/50 px-10 py-4 text-xs font-light tracking-[0.25em] transition-all duration-500 bg-transparent text-white hover:bg-white hover:text-black hover:border-white uppercase"
            >
              DISCOVER
            </button>
          </motion.div>
        </div>
      </div>

      {/* Play/Pause Control - Bottom Right */}
      <button 
        onClick={handlePlayPause} 
        className="media-control" 
        aria-label={isPlaying ? 'Pause video' : 'Play video'}
      >
        {isPlaying ? <Pause className="h-6 w-6" aria-hidden="true" /> : <Play className="h-6 w-6" aria-hidden="true" />}
      </button>
    </section>
  );
};

export default HeroSection;
