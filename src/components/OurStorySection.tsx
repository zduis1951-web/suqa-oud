import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const OurStorySection = () => {
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.25, 0.46, 0.45, 0.94] as const
      }
    }
  };

  return (
    <section 
      ref={sectionRef}
      className="w-full py-24 md:py-32 lg:py-40 bg-[#F7F4EF]"
      aria-label="Our Story"
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
            OUR STORY
          </motion.h2>

          {/* Story Content */}
          <div className="space-y-8">
            <motion.p 
              variants={lineVariants}
              className="font-serif font-light text-xl md:text-2xl lg:text-3xl text-[#1a1a1a] tracking-[0.03em] leading-relaxed"
            >
              SUQA OUD was not created for the trend.
            </motion.p>
            
            <motion.p 
              variants={lineVariants}
              className="font-serif font-light text-xl md:text-2xl lg:text-3xl text-[#1a1a1a] tracking-[0.03em] leading-relaxed"
            >
              It was created to last.
            </motion.p>

            <div className="py-6">
              <motion.p 
                variants={lineVariants}
                className="font-serif font-light text-base md:text-lg text-[#1a1a1a]/70 tracking-[0.05em] leading-relaxed"
              >
                No timelines to chase.
              </motion.p>
              <motion.p 
                variants={lineVariants}
                className="font-serif font-light text-base md:text-lg text-[#1a1a1a]/70 tracking-[0.05em] leading-relaxed"
              >
                No expectations to meet.
              </motion.p>
            </div>

            <motion.p 
              variants={lineVariants}
              className="font-serif font-light text-lg md:text-xl text-[#1a1a1a]/80 tracking-[0.04em] leading-relaxed"
            >
              Only a decision to build value quietly,
            </motion.p>
            <motion.p 
              variants={lineVariants}
              className="font-serif font-light text-lg md:text-xl text-[#1a1a1a]/80 tracking-[0.04em] leading-relaxed"
            >
              without reference,
            </motion.p>
            <motion.p 
              variants={lineVariants}
              className="font-serif font-light text-lg md:text-xl text-[#1a1a1a]/80 tracking-[0.04em] leading-relaxed"
            >
              without imitation.
            </motion.p>

            <motion.div 
              variants={lineVariants}
              className="pt-12"
            >
              <p className="font-serif font-light text-sm md:text-base italic text-[#8B7355] tracking-[0.08em]">
                Because to be royal is not to announce luxury —
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

export default OurStorySection;
