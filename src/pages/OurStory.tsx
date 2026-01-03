import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { useState, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import ourStory1 from '@/assets/our-story-1.webp';
import ourStory2 from '@/assets/our-story-2.webp';
import ourStory3 from '@/assets/our-story-3.webp';
import ourStory4 from '@/assets/our-story-4.webp';
import ourStory5 from '@/assets/our-story-5.webp';
import ourStory6 from '@/assets/our-story-6.webp';

const OurStory = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

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

  const products = [
    { image: ourStory1, name: "VIDA", price: "$395" },
    { image: ourStory2, name: "PRIVILEGE", price: "$395" },
    { image: ourStory3, name: "GCC", price: "$450" },
    { image: ourStory4, name: "GCC NOIR", price: "$450" },
    { image: ourStory5, name: "HERITAGE", price: "$550" },
    { image: ourStory6, name: "ELITE", price: "$395" },
  ];

  const scrollCarousel = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      const scrollAmount = 320;
      const newScrollLeft = direction === 'left' 
        ? carouselRef.current.scrollLeft - scrollAmount
        : carouselRef.current.scrollLeft + scrollAmount;
      
      carouselRef.current.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <Helmet>
        <title>Our Story | SUQA OUD - Luxury Fragrances</title>
        <meta 
          name="description" 
          content="SUQA OUD was not created for the trend. It was created to last. Discover the story behind our luxury fragrances." 
        />
        <link rel="canonical" href="https://suqaoud.com/our-story" />
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
                The Beginning
              </span>
              <h1 className="font-display text-4xl md:text-6xl lg:text-7xl text-foreground tracking-wide">
                OUR STORY
              </h1>
              <div className="w-24 h-px bg-accent mx-auto mt-6" />
            </motion.div>

            {/* Main Story Content */}
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20 md:mb-32">
              {/* Left - Text Content */}
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="space-y-6 md:space-y-8"
              >
                {storyLines.map((line, index) => (
                  <motion.p
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 + 0.1 * index }}
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
                animate={{ opacity: 1, x: 0 }}
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
                <div className="absolute -inset-4 border border-accent/20 rounded-sm -z-10" />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Premium Collection Gallery */}
        <section className="py-24 md:py-40 bg-secondary/5 relative overflow-hidden">
          {/* Decorative line */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent" />
          
          <div className="container mx-auto px-6 md:px-12">
            {/* Section Header */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16 md:mb-20"
            >
              <motion.p 
                initial={{ opacity: 0, letterSpacing: '0.1em' }}
                whileInView={{ opacity: 1, letterSpacing: '0.4em' }}
                viewport={{ once: true }}
                transition={{ duration: 1.2 }}
                className="text-accent font-display text-sm md:text-base tracking-[0.4em] mb-6"
              >
                PRECIOUS, POTENT, PERSONAL
              </motion.p>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground tracking-wide">
                THE COLLECTION
              </h2>
              <div className="flex items-center justify-center gap-4 mt-8">
                <div className="w-16 h-px bg-accent/30" />
                <div className="w-2 h-2 rounded-full bg-accent" />
                <div className="w-16 h-px bg-accent/30" />
              </div>
            </motion.div>

            {/* Carousel Container */}
            <div className="relative">
              {/* Navigation Arrows */}
              <button 
                onClick={() => scrollCarousel('left')}
                className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 md:w-14 md:h-14 flex items-center justify-center bg-background/90 backdrop-blur-sm border border-border/30 rounded-full shadow-lg hover:bg-accent hover:text-accent-foreground transition-all duration-300 -translate-x-1/2 md:-translate-x-6"
                aria-label="Previous products"
              >
                <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
              </button>
              
              <button 
                onClick={() => scrollCarousel('right')}
                className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 md:w-14 md:h-14 flex items-center justify-center bg-background/90 backdrop-blur-sm border border-border/30 rounded-full shadow-lg hover:bg-accent hover:text-accent-foreground transition-all duration-300 translate-x-1/2 md:translate-x-6"
                aria-label="Next products"
              >
                <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
              </button>

              {/* Products Carousel */}
              <div 
                ref={carouselRef}
                className="flex gap-6 md:gap-8 overflow-x-auto scrollbar-hide scroll-smooth px-4 md:px-8 pb-4"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
              >
                {products.map((product, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 * index }}
                    className="flex-shrink-0 w-[280px] md:w-[300px] lg:w-[320px] group cursor-pointer"
                  >
                    {/* Product Image Container */}
                    <div className="relative aspect-[3/4] overflow-hidden bg-secondary/20 mb-6">
                      {/* Subtle border frame */}
                      <div className="absolute inset-0 border border-accent/10 z-10 pointer-events-none" />
                      
                      <motion.img
                        src={product.image}
                        alt={`SUQA OUD ${product.name}`}
                        className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                        whileHover={{ scale: 1.05 }}
                      />
                      
                      {/* Elegant overlay on hover */}
                      <div className="absolute inset-0 bg-gradient-to-t from-background/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      
                      {/* Quick view indicator */}
                      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                        <span className="px-6 py-2 bg-background/90 backdrop-blur-sm text-foreground text-xs tracking-[0.2em] font-body border border-accent/20">
                          DISCOVER
                        </span>
                      </div>
                    </div>
                    
                    {/* Product Info */}
                    <div className="text-center space-y-2">
                      <h3 className="font-display text-lg md:text-xl tracking-[0.15em] text-foreground group-hover:text-accent transition-colors duration-300">
                        {product.name}
                      </h3>
                      <p className="font-body text-muted-foreground text-sm tracking-wide">
                        {product.price}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Scroll indicator dots */}
            <div className="flex justify-center gap-2 mt-10">
              {products.map((_, index) => (
                <button
                  key={index}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    currentSlide === index ? 'bg-accent w-6' : 'bg-accent/30 hover:bg-accent/50'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
          
          {/* Decorative line */}
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent" />
        </section>

        {/* Closing Quote Section */}
        <section className="py-24 md:py-40 bg-background relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/10 to-background" />
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="container mx-auto px-6 md:px-12 text-center relative z-10"
          >
            <blockquote className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground italic tracking-wide max-w-4xl mx-auto leading-relaxed">
              "To be royal is not to announce luxury"
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

export default OurStory;
