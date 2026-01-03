import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const ClosingSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
      className="w-full py-32 md:py-40 lg:py-48 bg-[#1a1a1a]"
      aria-label="Closing Statement"
    >
      <div className="max-w-3xl mx-auto px-6 text-center">
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          {/* Brand Name */}
          <motion.h2 
            variants={lineVariants}
            className="font-serif font-light text-2xl md:text-3xl lg:text-4xl tracking-[0.4em] text-white uppercase mb-16"
          >
            SUQA OUD
          </motion.h2>

          {/* Closing Content */}
          <div className="space-y-6">
            <motion.p 
              variants={lineVariants}
              className="font-serif font-light text-lg md:text-xl lg:text-2xl text-white/90 tracking-[0.03em] leading-relaxed"
            >
              For those who don't follow moments,
            </motion.p>
            <motion.p 
              variants={lineVariants}
              className="font-serif font-light text-lg md:text-xl lg:text-2xl text-white/90 tracking-[0.03em] leading-relaxed"
            >
              but define their own.
            </motion.p>

            <div className="py-8">
              <motion.p 
                variants={lineVariants}
                className="font-serif font-light text-base md:text-lg text-white/60 tracking-[0.05em] leading-relaxed"
              >
                Where luxury is felt inwardly,
              </motion.p>
              <motion.p 
                variants={lineVariants}
                className="font-serif font-light text-base md:text-lg text-white/60 tracking-[0.05em] leading-relaxed"
              >
                presence is natural,
              </motion.p>
              <motion.p 
                variants={lineVariants}
                className="font-serif font-light text-base md:text-lg text-white/60 tracking-[0.05em] leading-relaxed"
              >
                and value is created —
              </motion.p>
              <motion.p 
                variants={lineVariants}
                className="font-serif font-light text-base md:text-lg text-white/60 tracking-[0.05em] leading-relaxed"
              >
                not borrowed.
              </motion.p>
            </div>

            {/* Final Tagline */}
            <motion.div 
              variants={lineVariants}
              className="pt-8"
            >
              <p className="font-serif font-light text-sm md:text-base italic text-[#d4c5b0] tracking-[0.12em]">
                To be royal is to breathe the kingdom of oud.
              </p>
            </motion.div>

            {/* Decorative Line */}
            <motion.div 
              variants={lineVariants}
              className="pt-16"
            >
              <div className="w-16 h-px bg-[#8B7355] mx-auto" />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ClosingSection;
