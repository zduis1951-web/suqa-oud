import { motion } from 'framer-motion';
import ourStory1 from '@/assets/our-story-1.webp';
import ourStory2 from '@/assets/our-story-2.webp';
import ourStory3 from '@/assets/our-story-3.webp';
import ourStory4 from '@/assets/our-story-4.webp';
import ourStory5 from '@/assets/our-story-5.webp';
import ourStory6 from '@/assets/our-story-6.webp';

const OurStorySection = () => {
  const storyLines = [
    "SUQA OUD was not created for the trend.",
    "It was created to last.",
    "No timelines to chase.",
    "No expectations to meet.",
    "Only a decision to build value quietly,",
    "without reference,",
    "without imitation.",
    "Because to be royal is not to announce luxury."
  ];

  const images = [ourStory1, ourStory2, ourStory3, ourStory4, ourStory5, ourStory6];

  return (
    <section id="our-story" className="relative py-24 md:py-32 bg-background overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 md:mb-24"
        >
          <span className="text-accent uppercase tracking-[0.3em] text-xs md:text-sm font-body mb-4 block">
            The Beginning
          </span>
          <h2 className="font-display text-3xl md:text-5xl lg:text-6xl text-foreground tracking-wide">
            OUR STORY
          </h2>
          <div className="w-24 h-px bg-accent mx-auto mt-6" />
        </motion.div>

        {/* Story Content */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20 md:mb-32">
          {/* Left - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6 md:space-y-8"
          >
            {storyLines.map((line, index) => (
              <motion.p
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className={`font-body text-lg md:text-xl lg:text-2xl leading-relaxed ${
                  index === 0 || index === storyLines.length - 1
                    ? 'text-foreground font-medium'
                    : 'text-muted-foreground'
                }`}
              >
                {line}
              </motion.p>
            ))}
          </motion.div>

          {/* Right - Featured Image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="relative aspect-[3/4] rounded-sm overflow-hidden">
              <img
                src={ourStory1}
                alt="SUQA OUD Vida perfume in desert setting"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent" />
            </div>
            {/* Decorative border */}
            <div className="absolute -inset-4 border border-accent/20 rounded-sm -z-10" />
          </motion.div>
        </div>

        {/* Product Gallery */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <h3 className="text-center font-display text-xl md:text-2xl text-foreground tracking-wide mb-12">
            THE COLLECTION
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
            {images.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                whileHover={{ scale: 1.05, y: -8 }}
                className="relative aspect-[3/4] rounded-sm overflow-hidden cursor-pointer group"
              >
                <img
                  src={image}
                  alt={`SUQA OUD fragrance ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Closing Quote */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-20 md:mt-32"
        >
          <blockquote className="font-display text-2xl md:text-3xl lg:text-4xl text-foreground italic tracking-wide max-w-3xl mx-auto">
            "To be royal is not to announce luxury"
          </blockquote>
          <div className="w-16 h-px bg-accent mx-auto mt-8" />
        </motion.div>
      </div>
    </section>
  );
};

export default OurStorySection;
