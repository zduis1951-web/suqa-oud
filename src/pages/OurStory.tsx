import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import ProductCarousel from '@/components/products/ProductCarousel';
import ourStory1 from '@/assets/our-story-1.webp';
import ourStory2 from '@/assets/our-story-2.webp';
import ourStory3 from '@/assets/our-story-3.webp';
import ourStory4 from '@/assets/our-story-4.webp';
import ourStory5 from '@/assets/our-story-5.webp';
import ourStory6 from '@/assets/our-story-6.webp';

const OurStory = () => {
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
    { id: 'vida', image: ourStory1, name: "VIDA", price: "$395" },
    { id: 'privilege', image: ourStory2, name: "PRIVILEGE", price: "$395" },
    { id: 'gcc', image: ourStory3, name: "GCC", price: "$450" },
    { id: 'gcc-noir', image: ourStory4, name: "GCC NOIR", price: "$450" },
    { id: 'heritage', image: ourStory5, name: "HERITAGE", price: "$550" },
    { id: 'elite', image: ourStory6, name: "ELITE", price: "$395" },
  ];

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

            {/* Product Carousel */}
            <ProductCarousel 
              products={products}
              onProductClick={(product) => console.log('Clicked:', product.name)}
            />
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
