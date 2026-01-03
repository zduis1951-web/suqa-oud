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
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: animationDelay }}
      className={`group cursor-pointer ${className}`}
      onClick={onClick}
    >
      {/* Product Card Wrapper - Shopify Style */}
      <div className="am-product-card relative">
        
        {/* Card Inner with Image */}
        <div className="relative bg-secondary/30 overflow-hidden">
          
          {/* NEW Badge */}
          {product.isNew && (
            <div className="absolute top-3 right-3 z-20">
              <span 
                className="text-foreground text-[10px] tracking-[0.15em] uppercase px-2 py-1 bg-background/80 backdrop-blur-sm border border-border/30"
                style={{ fontFamily: 'var(--font-primary)' }}
              >
                NEW
              </span>
            </div>
          )}

          {/* Media Container - Square Ratio */}
          <div className="relative aspect-square overflow-hidden">
            {/* Primary Image */}
            <img
              src={product.image}
              alt={product.name}
              className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ease-out ${
                product.hoverImage ? 'group-hover:opacity-0' : 'group-hover:scale-[1.03]'
              }`}
              loading="lazy"
            />
            
            {/* Hover Image (Box/Packaging) */}
            {product.hoverImage && (
              <img
                src={product.hoverImage}
                alt={`${product.name} packaging`}
                className="absolute inset-0 w-full h-full object-cover transition-all duration-500 ease-out opacity-0 group-hover:opacity-100"
                loading="lazy"
              />
            )}
          </div>
        </div>

        {/* Card Content - Product Information */}
        <div className="pt-4 text-center">
          {/* Product Name */}
          <h3 
            className="text-foreground text-sm md:text-[15px] tracking-[0.08em] uppercase font-normal mb-1 transition-colors duration-300 group-hover:text-accent"
            style={{ fontFamily: 'var(--font-primary)' }}
          >
            {product.name}
          </h3>
          
          {/* Variant (Size) */}
          {product.variant && (
            <p 
              className="text-muted-foreground text-xs md:text-sm tracking-wide mb-2"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              {product.variant}
            </p>
          )}
          
          {/* Price */}
          <div className="am-price">
            <span 
              className="text-foreground text-sm md:text-[15px] tracking-[0.03em]"
              style={{ fontFamily: 'var(--font-primary)' }}
            >
              {product.price}
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
