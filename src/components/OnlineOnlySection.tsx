import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import onlineOnlyVideo from '@/assets/online-only-video.mp4';

const OnlineOnlySection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.25
      }
    }
  };

  const lineVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.85,
        ease: [0.25, 0.46, 0.45, 0.94] as const
      }
    }
  };

  return (
    <section 
      ref={sectionRef}
      className="w-full relative overflow-hidden"
      style={{ minHeight: '80vh' }}
      aria-label="Online Only By Design"
    >
      {/* Background Video */}
      <video 
        className="absolute inset-0 h-full w-full object-cover"
        src={onlineOnlyVideo}
        autoPlay 
        muted 
        loop 
        playsInline
      />
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center flex flex-col items-center justify-center min-h-[80vh] py-24">
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          {/* Section Title */}
          <motion.h2 
            variants={lineVariants}
            className="font-serif font-light text-xs md:text-sm tracking-[0.4em] text-[#d4c5b0] uppercase mb-16"
          >
            ONLINE-ONLY. BY DESIGN.
          </motion.h2>

          {/* Content */}
          <div className="space-y-6">
            <motion.p 
              variants={lineVariants}
              className="font-serif font-light text-xl md:text-2xl lg:text-3xl text-white tracking-[0.03em] leading-relaxed"
            >
              Because value isn't mass-distributed.
            </motion.p>

            <div className="py-6">
              <motion.p 
                variants={lineVariants}
                className="font-serif font-light text-base md:text-lg text-white/70 tracking-[0.05em] leading-relaxed"
              >
                It's recognized
              </motion.p>
              <motion.p 
                variants={lineVariants}
                className="font-serif font-light text-base md:text-lg text-white/70 tracking-[0.05em] leading-relaxed"
              >
                by those who don't need to be told
              </motion.p>
              <motion.p 
                variants={lineVariants}
                className="font-serif font-light text-base md:text-lg text-white/70 tracking-[0.05em] leading-relaxed"
              >
                what luxury looks like —
              </motion.p>
            </div>

            <motion.p 
              variants={lineVariants}
              className="font-serif font-light text-lg md:text-xl text-[#d4c5b0] tracking-[0.05em] leading-relaxed italic"
            >
              they already breathe it.
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default OnlineOnlySection;
