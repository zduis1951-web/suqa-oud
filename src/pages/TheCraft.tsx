import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import craftHero from '@/assets/the-craft-bg.jpg';

const TheCraft = () => {
  const craftLines = [
    "This is not excess.",
    "",
    "This is intention.",
    "",
    "Every detail is chosen to feel refined,",
    "not impressive.",
    "",
    "Luxury here is measured",
    "by balance,",
    "by restraint,",
    "by quiet confidence."
  ];

  return (
    <>
      <Helmet>
        <title>The Craft | SUQA OUD - Luxury Fragrances</title>
        <meta 
          name="description" 
          content="This is not excess. This is intention. Discover the craft behind SUQA OUD luxury fragrances." 
        />
        <link rel="canonical" href="https://suqaoud.com/the-craft" />
      </Helmet>

      <Header variant="transparent" />

      <main>
        {/* Hero Section with Background Image */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0">
            <img
              src={craftHero}
              alt="SUQA OUD luxury perfume craftsmanship"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
          </div>
          
          {/* Content */}
          <div className="relative z-10 container mx-auto px-6 md:px-12 py-32 md:py-40">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.2 }}
              className="max-w-3xl mx-auto text-center"
            >
              {/* Title */}
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-cream/70 uppercase tracking-[0.4em] text-xs md:text-sm font-body mb-6 block"
              >
                Discover
              </motion.span>
              
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="font-display text-4xl md:text-6xl lg:text-7xl text-cream tracking-wide mb-8"
              >
                THE CRAFT
              </motion.h1>
              
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="w-24 h-px bg-cream/50 mx-auto mb-16"
              />

              {/* Craft Text */}
              <div className="space-y-2">
                {craftLines.map((line, index) => (
                  <motion.p
                    key={index}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.9 + index * 0.1 }}
                    className={`font-body text-lg md:text-xl lg:text-2xl leading-relaxed ${
                      line === "" 
                        ? "h-4" 
                        : line === "This is not excess." || line === "by quiet confidence."
                          ? "text-cream font-medium"
                          : "text-cream/80"
                    }`}
                  >
                    {line || "\u00A0"}
                  </motion.p>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2.5, repeat: Infinity, repeatType: "reverse" }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2"
          >
            <div className="w-px h-16 bg-gradient-to-b from-cream/50 to-transparent" />
          </motion.div>
        </section>

        {/* Closing Statement */}
        <section className="py-24 md:py-40 bg-background relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-secondary/20 via-background to-background" />
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="container mx-auto px-6 md:px-12 text-center relative z-10"
          >
            <blockquote className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground italic tracking-wide max-w-4xl mx-auto leading-relaxed">
              "Luxury is measured by quiet confidence"
            </blockquote>
            <div className="w-20 h-px bg-accent mx-auto mt-10" />
            <p className="mt-8 text-muted-foreground font-body text-lg tracking-wide">
              — SUQA OUD
            </p>
          </motion.div>
        </section>
      </main>

      <Footer />
      <ScrollToTop />
    </>
  );
};

export default TheCraft;
