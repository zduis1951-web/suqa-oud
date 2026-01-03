import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const OurPhilosophySection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.15
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
      className="w-full py-24 md:py-32 lg:py-40 bg-[#1a1a1a]"
      aria-label="Our Philosophy"
    >
      <div className="max-w-3xl mx-auto px-6 text-center">
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          {/* Section Title */}
          <motion.h2 
            variants={lineVariants}
            className="font-serif font-light text-xs md:text-sm tracking-[0.4em] text-[#8B7355] uppercase mb-16"
          >
            OUR PHILOSOPHY
          </motion.h2>

          {/* Philosophy Content */}
          <div className="space-y-6">
            <motion.p 
              variants={lineVariants}
              className="font-serif font-light text-xl md:text-2xl lg:text-3xl text-white/90 tracking-[0.03em] leading-relaxed"
            >
              There is a form of luxury
            </motion.p>
            <motion.p 
              variants={lineVariants}
              className="font-serif font-light text-xl md:text-2xl lg:text-3xl text-white/90 tracking-[0.03em] leading-relaxed"
            >
              that doesn't announce itself.
            </motion.p>

            <div className="py-8">
              <motion.p 
                variants={lineVariants}
                className="font-serif font-light text-base md:text-lg text-white/60 tracking-[0.05em] leading-relaxed"
              >
                It enters the room calmly,
              </motion.p>
              <motion.p 
                variants={lineVariants}
                className="font-serif font-light text-base md:text-lg text-white/60 tracking-[0.05em] leading-relaxed"
              >
                takes its place,
              </motion.p>
              <motion.p 
                variants={lineVariants}
                className="font-serif font-light text-base md:text-lg text-white/60 tracking-[0.05em] leading-relaxed"
              >
                and never asks to be validated.
              </motion.p>
            </div>

            <motion.p 
              variants={lineVariants}
              className="font-serif font-light text-lg md:text-xl text-white/70 tracking-[0.04em] leading-relaxed"
            >
              That is the kind we believe in.
            </motion.p>

            <div className="pt-10">
              <motion.p 
                variants={lineVariants}
                className="font-serif font-light text-lg md:text-xl text-[#d4c5b0] tracking-[0.05em] leading-relaxed"
              >
                Royalty is felt, not declared.
              </motion.p>
              <motion.p 
                variants={lineVariants}
                className="font-serif font-light text-lg md:text-xl text-[#d4c5b0] tracking-[0.05em] leading-relaxed mt-2"
              >
                It is carried with ease,
              </motion.p>
              <motion.p 
                variants={lineVariants}
                className="font-serif font-light text-lg md:text-xl text-[#d4c5b0] tracking-[0.05em] leading-relaxed"
              >
                breathed naturally.
              </motion.p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default OurPhilosophySection;
