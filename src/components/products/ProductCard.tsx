import { motion } from 'framer-motion';

export interface Product {
  id?: string;
  name: string;
  price: string;
  image: string;
  hoverImage?: string;
  variant?: string;
  isNew?: boolean;
}

interface ProductCardProps {
  product: Product;
  onClick?: () => void;
  animationDelay?: number;
  className?: string;
}

const ProductCard = ({ product, onClick, animationDelay = 0, className = '' }: ProductCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: animationDelay }}
      className={`group cursor-pointer ${className}`}
      onClick={onClick}
    >
      {/* Premium Product Frame */}
      <div className="relative bg-card rounded-lg overflow-hidden shadow-[0_18px_45px_rgba(0,0,0,0.12)] border border-border/20">
        {/* NEW Badge */}
        {product.isNew && (
          <span 
            className="absolute top-4 left-1/2 -translate-x-1/2 z-20 text-foreground text-[10px] md:text-[11px] tracking-[0.1em] uppercase border border-foreground/40 px-3 py-1 bg-card/90 backdrop-blur-sm"
            style={{ fontFamily: 'var(--font-primary)' }}
          >
            NEW
          </span>
        )}

        {/* Image Container */}
        <div className="relative aspect-[3/4] overflow-hidden">
          {/* Primary Image */}
          <img
            src={product.image}
            alt={product.name}
            className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ${
              product.hoverImage ? 'group-hover:opacity-0 group-hover:scale-105' : 'group-hover:scale-105'
            }`}
          />
          
          {/* Hover Image (if provided) */}
          {product.hoverImage && (
            <img
              src={product.hoverImage}
              alt={`${product.name} packaging`}
              className="absolute inset-0 w-full h-full object-cover transition-all duration-500 opacity-0 group-hover:opacity-100 group-hover:scale-105"
            />
          )}
          
          {/* Elegant overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-background/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          {/* Quick view indicator */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
            <span className="px-6 py-2 bg-background/90 backdrop-blur-sm text-foreground text-xs tracking-[0.2em] font-body border border-accent/20 rounded-sm">
              DISCOVER
            </span>
          </div>
        </div>
      </div>
      
      {/* Product Info - Below frame */}
      <div className="text-center pt-5 md:pt-6">
        <h3 
          className="text-foreground text-sm md:text-base tracking-[0.12em] uppercase font-normal mb-2 group-hover:text-accent transition-colors duration-300"
          style={{ fontFamily: 'var(--font-primary)' }}
        >
          {product.name.toUpperCase()}
        </h3>
        {product.variant && (
          <p className="text-muted-foreground text-xs tracking-wide mb-1">
            {product.variant}
          </p>
        )}
        <p 
          className="text-foreground text-sm md:text-base tracking-[0.05em]"
          style={{ fontFamily: 'var(--font-primary)' }}
        >
          {product.price}
        </p>
      </div>
    </motion.div>
  );
};

export default ProductCard;
