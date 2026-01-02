import { motion } from 'framer-motion';
import { Instagram } from 'lucide-react';
import existenceImg from '@/assets/products/existence.jpg';
import guidanceImg from '@/assets/products/guidance.jpg';
import purposeImg from '@/assets/products/purpose-50.png';
import reflectionImg from '@/assets/products/reflection-man.jpg';
import heroImg from '@/assets/hero-desktop.jpg';
import giftingImg from '@/assets/gifting-hero-desktop.jpg';

const instagramPosts = [
  { id: 1, image: existenceImg },
  { id: 2, image: heroImg },
  { id: 3, image: guidanceImg },
  { id: 4, image: giftingImg },
  { id: 5, image: purposeImg },
  { id: 6, image: reflectionImg },
];

const HighPerfumeryGallery = () => {
  return (
    <section className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Instagram className="w-5 h-5" />
            <p className="text-sm tracking-[0.2em] uppercase text-muted-foreground">
              @amouageofficial
            </p>
          </div>
          <h2 className="font-serif text-3xl lg:text-4xl font-light">
            Follow Our Journey
          </h2>
        </motion.div>

        {/* Instagram Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 lg:gap-4">
          {instagramPosts.map((post, index) => (
            <motion.a
              key={post.id}
              href="https://instagram.com/amouageofficial"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="relative aspect-square overflow-hidden group"
            >
              <img
                src={post.image}
                alt="Instagram post"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/30 transition-colors duration-300 flex items-center justify-center">
                <Instagram className="w-6 h-6 text-background opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HighPerfumeryGallery;
