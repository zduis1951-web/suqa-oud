import { useState, useRef } from 'react';
import { Pause, Play } from 'lucide-react';
import onlineOnlyVideo from '@/assets/online-only-video.mp4';
interface SohoFlagshipBoutiqueProps {
  onDiscoverMoreClick?: () => void;
}
const SohoFlagshipBoutique = ({
  onDiscoverMoreClick
}: SohoFlagshipBoutiqueProps) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);
  const togglePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
    }
    setIsPlaying(!isPlaying);
  };
  return <section className="relative w-full min-h-screen overflow-hidden">
      {/* Background Video */}
      <video ref={videoRef} className="absolute inset-0 h-full w-full object-cover" src={onlineOnlyVideo} autoPlay muted loop playsInline aria-hidden="true" />

      {/* Dark Overlay for text readability */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Content Overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
        {/* Main Headline */}
        <h2 style={{
        fontFamily: 'var(--font-primary)'
      }} className="text-white text-xl sm:text-2xl md:text-3xl tracking-[0.15em] uppercase mb-4 md:mb-6 max-w-4xl lg:text-sm">
          CRAFTED FOR THE EXTRAORDINARY

        </h2>
        
        {/* Description */}
        <p className="text-white/80 text-5xl tracking-[0.1em] uppercase mb-6 md:mb-8 font-light" style={{
        fontFamily: 'var(--font-primary)'
      }}>
          THE ESSENCE OF REFINEMENT
        </p>

        {/* CTA Button */}
        <button onClick={onDiscoverMoreClick} className="border border-white text-black bg-white px-8 py-3 md:px-10 md:py-4 text-xs md:text-sm tracking-[0.2em] uppercase transition-all duration-300 hover:bg-transparent hover:text-white" style={{
        fontFamily: 'var(--font-primary)'
      }}>
          EXPLORE
        </button>
      </div>

      {/* Media Control - Play/Pause - Bottom Right */}
      <div className="absolute bottom-4 right-4 md:bottom-6 md:right-6">
        <button onClick={togglePlayPause} className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/50 flex items-center justify-center hover:border-white transition-colors bg-black/20" aria-label={isPlaying ? 'Pause video' : 'Play video'}>
          {isPlaying ? <Pause className="h-5 w-5 text-white" strokeWidth={1.5} /> : <Play className="h-5 w-5 text-white ml-0.5" strokeWidth={1.5} />}
        </button>
      </div>

      {/* Accessibility Icon - Bottom Left */}
      <div className="absolute bottom-4 left-4 md:bottom-6 md:left-6">
        
      </div>
    </section>;
};
export default SohoFlagshipBoutique;