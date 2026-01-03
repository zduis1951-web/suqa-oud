import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import theCraftBg from '@/assets/the-craft-bg.jpg';

const TheCraftSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.2
      }
    }
  };

  const lineVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94] as const
      }
    }
  };

  return (
    <section 
      ref={sectionRef}
      className="w-full py-24 md:py-32 lg:py-40 relative overflow-hidden"
      style={{ minHeight: '80vh' }}
      aria-label="The Craft"
    >
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${theCraftBg})` }}
      />
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center flex flex-col items-center justify-center min-h-[60vh]">
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
            THE CRAFT
          </motion.h2>

          {/* Craft Content */}
          <div className="space-y-6">
            <motion.p 
              variants={lineVariants}
              className="font-serif font-light text-xl md:text-2xl lg:text-3xl text-white tracking-[0.03em] leading-relaxed"
            >
              This is not excess.
            </motion.p>
            <motion.p 
              variants={lineVariants}
              className="font-serif font-light text-xl md:text-2xl lg:text-3xl text-white tracking-[0.03em] leading-relaxed"
            >
              This is intention.
            </motion.p>

            <div className="py-8">
              <motion.p 
                variants={lineVariants}
                className="font-serif font-light text-base md:text-lg text-white/70 tracking-[0.05em] leading-relaxed"
              >
                Every detail is chosen to feel refined,
              </motion.p>
              <motion.p 
                variants={lineVariants}
                className="font-serif font-light text-base md:text-lg text-white/70 tracking-[0.05em] leading-relaxed"
              >
                not impressive.
              </motion.p>
            </div>

            <motion.p 
              variants={lineVariants}
              className="font-serif font-light text-lg md:text-xl text-white/80 tracking-[0.04em] leading-relaxed"
            >
              Luxury here is measured
            </motion.p>
            <motion.p 
              variants={lineVariants}
              className="font-serif font-light text-lg md:text-xl text-white/80 tracking-[0.04em] leading-relaxed"
            >
              by balance,
            </motion.p>
            <motion.p 
              variants={lineVariants}
              className="font-serif font-light text-lg md:text-xl text-white/80 tracking-[0.04em] leading-relaxed"
            >
              by restraint,
            </motion.p>
            <motion.p 
              variants={lineVariants}
              className="font-serif font-light text-lg md:text-xl text-[#d4c5b0] tracking-[0.04em] leading-relaxed"
            >
              by quiet confidence.
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TheCraftSection;
