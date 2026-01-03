import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const TheExperienceSection = () => {
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.75,
        ease: [0.25, 0.46, 0.45, 0.94] as const
      }
    }
  };

  return (
    <section 
      ref={sectionRef}
      className="w-full py-24 md:py-32 lg:py-40 bg-[#F7F4EF]"
      aria-label="The Experience"
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
            THE EXPERIENCE
          </motion.h2>

          {/* Experience Content */}
          <div className="space-y-6">
            <motion.p 
              variants={lineVariants}
              className="font-serif font-light text-xl md:text-2xl lg:text-3xl text-[#1a1a1a] tracking-[0.03em] leading-relaxed"
            >
              It doesn't seek attention.
            </motion.p>

            <div className="py-6">
              <motion.p 
                variants={lineVariants}
                className="font-serif font-light text-base md:text-lg text-[#1a1a1a]/70 tracking-[0.05em] leading-relaxed"
              >
                It creates a feeling of composure.
              </motion.p>
              <motion.p 
                variants={lineVariants}
                className="font-serif font-light text-base md:text-lg text-[#1a1a1a]/70 tracking-[0.05em] leading-relaxed"
              >
                Of clarity.
              </motion.p>
              <motion.p 
                variants={lineVariants}
                className="font-serif font-light text-base md:text-lg text-[#1a1a1a]/70 tracking-[0.05em] leading-relaxed"
              >
                Of being entirely at ease in your own presence.
              </motion.p>
            </div>

            <motion.p 
              variants={lineVariants}
              className="font-serif font-light text-lg md:text-xl text-[#1a1a1a]/80 tracking-[0.04em] leading-relaxed"
            >
              It becomes part of you —
            </motion.p>
            <motion.p 
              variants={lineVariants}
              className="font-serif font-light text-lg md:text-xl text-[#1a1a1a]/80 tracking-[0.04em] leading-relaxed"
            >
              not something you wear,
            </motion.p>
            <motion.p 
              variants={lineVariants}
              className="font-serif font-light text-lg md:text-xl text-[#1a1a1a]/80 tracking-[0.04em] leading-relaxed"
            >
              but something you inhabit.
            </motion.p>

            <motion.div 
              variants={lineVariants}
              className="pt-12"
            >
              <p className="font-serif font-light text-sm md:text-base italic text-[#8B7355] tracking-[0.08em]">
                A quiet reminder that
              </p>
              <p className="font-serif font-light text-sm md:text-base italic text-[#8B7355] tracking-[0.08em] mt-1">
                to be royal is to breathe the kingdom of oud.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TheExperienceSection;
