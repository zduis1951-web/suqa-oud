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
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: animationDelay }}
      className={`group cursor-pointer ${className}`}
      onClick={onClick}
    >
      {/* Clean Product Container - Amouage Style */}
      <div className="relative bg-[#f5f0ea] overflow-hidden">
        {/* NEW Badge - Simple rectangular */}
        {product.isNew && (
          <span 
            className="absolute top-4 right-4 z-20 text-foreground text-[10px] tracking-[0.15em] uppercase border border-foreground/60 px-2.5 py-1 bg-[#f5f0ea]"
            style={{ fontFamily: 'var(--font-primary)' }}
          >
            NEW
          </span>
        )}

        {/* Image Container - Square aspect ratio */}
        <div className="relative aspect-square overflow-hidden">
          {/* Primary Image */}
          <img
            src={product.image}
            alt={product.name}
            className={`absolute inset-0 w-full h-full object-contain p-6 transition-all duration-500 ${
              product.hoverImage ? 'group-hover:opacity-0' : 'group-hover:scale-105'
            }`}
          />
          
          {/* Hover Image (if provided) */}
          {product.hoverImage && (
            <img
              src={product.hoverImage}
              alt={`${product.name} packaging`}
              className="absolute inset-0 w-full h-full object-contain p-6 transition-all duration-500 opacity-0 group-hover:opacity-100"
            />
          )}
        </div>
      </div>
      
      {/* Product Info - Centered below */}
      <div className="text-center pt-4 pb-2">
        <h3 
          className="text-foreground text-sm tracking-[0.12em] uppercase font-normal mb-1.5"
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
          className="text-foreground text-sm tracking-[0.05em]"
          style={{ fontFamily: 'var(--font-primary)' }}
        >
          {product.price}
        </p>
      </div>
    </motion.div>
  );
};

export default ProductCard;
