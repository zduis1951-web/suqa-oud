import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';

const OurPhilosophy = () => {
  const philosophyPillars = [
    {
      title: "AUTHENTICITY",
      description: "Every fragrance is crafted with genuine ingredients, sourced from the world's most precious origins. We never compromise on quality.",
      icon: "◆"
    },
    {
      title: "HERITAGE",
      description: "Rooted in ancient Arabian traditions of perfumery, we honor centuries of olfactory artistry while embracing modern innovation.",
      icon: "◇"
    },
    {
      title: "EXCELLENCE",
      description: "From the first note to the last, every creation undergoes rigorous refinement until it achieves absolute perfection.",
      icon: "◈"
    },
    {
      title: "SUSTAINABILITY",
      description: "We are committed to ethical sourcing and sustainable practices, ensuring our craft respects both nature and future generations.",
      icon: "◊"
    }
  ];

  const values = [
    "We believe luxury should be timeless, not trendy.",
    "We craft for those who seek depth over display.",
    "We honor the art of patience in creation.",
    "We value substance over spectacle."
  ];

  return (
    <>
      <Helmet>
        <title>Our Philosophy | SUQA OUD - Luxury Fragrances</title>
        <meta 
          name="description" 
          content="Discover the philosophy behind SUQA OUD. Our commitment to authenticity, heritage, excellence, and sustainability in luxury perfumery." 
        />
        <link rel="canonical" href="https://suqaoud.com/our-philosophy" />
      </Helmet>

      <Header variant="solid" />

      <main className="pt-32 md:pt-40">
        {/* Hero Section */}
        <section className="relative py-20 md:py-32 bg-background overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-secondary/30 via-background to-background" />
          
          <div className="container mx-auto px-6 md:px-12 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16 md:mb-24"
            >
              <span className="text-accent uppercase tracking-[0.3em] text-xs md:text-sm font-body mb-4 block">
                Our Guiding Principles
              </span>
              <h1 className="font-display text-4xl md:text-6xl lg:text-7xl text-foreground tracking-wide">
                OUR PHILOSOPHY
              </h1>
              <div className="w-24 h-px bg-accent mx-auto mt-6" />
            </motion.div>

            {/* Philosophy Statement */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="max-w-3xl mx-auto text-center mb-20 md:mb-32"
            >
              <p className="font-body text-xl md:text-2xl lg:text-3xl text-muted-foreground leading-relaxed">
                At SUQA OUD, we believe that true luxury is not proclaimed—it is{' '}
                <span className="text-foreground font-medium italic">experienced</span>.
              </p>
              <p className="font-body text-lg md:text-xl text-muted-foreground leading-relaxed mt-6">
                Every fragrance we create is a silent testament to the art of patience, 
                the pursuit of excellence, and the reverence for tradition.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Philosophy Pillars */}
        <section className="py-20 md:py-32 bg-secondary/5 relative">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent" />
          
          <div className="container mx-auto px-6 md:px-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16 md:mb-20"
            >
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground tracking-wide">
                THE FOUR PILLARS
              </h2>
              <div className="flex items-center justify-center gap-4 mt-8">
                <div className="w-16 h-px bg-accent/30" />
                <div className="w-2 h-2 rounded-full bg-accent" />
                <div className="w-16 h-px bg-accent/30" />
              </div>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
              {philosophyPillars.map((pillar, index) => (
                <motion.div
                  key={pillar.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  className="group text-center p-8 md:p-10 bg-card rounded-lg border border-border/20 shadow-[0_18px_45px_rgba(0,0,0,0.08)] hover:shadow-[0_25px_60px_rgba(0,0,0,0.12)] transition-all duration-500"
                >
                  <span className="text-accent text-3xl md:text-4xl block mb-6 group-hover:scale-110 transition-transform duration-300">
                    {pillar.icon}
                  </span>
                  <h3 className="font-display text-lg md:text-xl tracking-[0.15em] text-foreground mb-4">
                    {pillar.title}
                  </h3>
                  <p className="font-body text-muted-foreground text-sm md:text-base leading-relaxed">
                    {pillar.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
          
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent" />
        </section>

        {/* Values Section */}
        <section className="py-20 md:py-32 bg-background relative overflow-hidden">
          <div className="container mx-auto px-6 md:px-12">
            <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
              {/* Left - Values List */}
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="space-y-8"
              >
                <h2 className="font-display text-3xl md:text-4xl text-foreground tracking-wide mb-10">
                  WHAT WE BELIEVE
                </h2>
                
                {values.map((value, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 * index }}
                    className="flex items-start gap-4"
                  >
                    <span className="text-accent text-xl mt-1">—</span>
                    <p className="font-body text-lg md:text-xl text-muted-foreground leading-relaxed">
                      {value}
                    </p>
                  </motion.div>
                ))}
              </motion.div>

              {/* Right - Decorative Quote */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative"
              >
                <div className="relative p-10 md:p-14 bg-secondary/10 rounded-lg border border-accent/10">
                  <span className="absolute -top-6 left-8 text-accent/20 text-8xl font-display">"</span>
                  <blockquote className="font-display text-2xl md:text-3xl text-foreground italic leading-relaxed relative z-10">
                    True elegance is invisible. It is felt, not seen.
                  </blockquote>
                  <div className="w-16 h-px bg-accent mt-8" />
                  <p className="mt-4 text-muted-foreground font-body text-sm tracking-wide">
                    — THE SUQA OUD PHILOSOPHY
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Closing Statement */}
        <section className="py-24 md:py-40 bg-secondary/5 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/10 to-background" />
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="container mx-auto px-6 md:px-12 text-center relative z-10"
          >
            <p className="font-body text-lg md:text-xl text-muted-foreground tracking-wide mb-6">
              This is not just perfumery.
            </p>
            <h3 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground tracking-wide">
              THIS IS A PHILOSOPHY OF PRESENCE.
            </h3>
            <div className="w-20 h-px bg-accent mx-auto mt-10" />
          </motion.div>
        </section>
      </main>

      <Footer />
      <ScrollToTop />
    </>
  );
};

export default OurPhilosophy;
