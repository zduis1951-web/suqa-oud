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
      className={`cursor-pointer ${className}`}
      onClick={onClick}
    >
      {/* Product Card Container - No borders, no shadows, flat design */}
      <div className="relative" style={{ backgroundColor: '#d9cdc1' }}>
        {/* NEW Badge */}
        {product.isNew && (
          <div 
            className="absolute top-3 right-3 z-10"
          >
            <span 
              className="text-[11px] tracking-[0.08em] uppercase px-2 py-1"
              style={{ 
                fontFamily: 'Arial, sans-serif',
                fontWeight: 400,
                color: '#1a1a1a',
                backgroundColor: '#d9cdc1',
                border: '1px solid rgba(0,0,0,0.2)'
              }}
            >
              NEW
            </span>
          </div>
        )}

        {/* Image Container - Aspect ratio matching original */}
        <div className="relative" style={{ aspectRatio: '1/1.15' }}>
          {/* Primary Image */}
          <img
            src={product.image}
            alt={product.name}
            className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-300 ease-in-out ${
              product.hoverImage ? 'group-hover:opacity-0' : ''
            }`}
            style={{ padding: '8%' }}
          />
          
          {/* Hover Image (packaging/box) */}
          {product.hoverImage && (
            <img
              src={product.hoverImage}
              alt={`${product.name} packaging`}
              className="absolute inset-0 w-full h-full object-contain transition-opacity duration-300 ease-in-out opacity-0 group-hover:opacity-100"
              style={{ padding: '8%' }}
            />
          )}
        </div>

        {/* Product Info - Inside card, at bottom */}
        <div className="text-center pb-5 px-4" style={{ backgroundColor: '#d9cdc1' }}>
          <h3 
            className="mb-1"
            style={{ 
              fontFamily: 'Arial, Helvetica, sans-serif',
              fontSize: '13px',
              fontWeight: 400,
              letterSpacing: '0.05em',
              textTransform: 'uppercase',
              color: '#1a1a1a',
              lineHeight: 1.4
            }}
          >
            {product.name.toUpperCase()}
          </h3>
          <p 
            style={{ 
              fontFamily: 'Arial, Helvetica, sans-serif',
              fontSize: '13px',
              fontWeight: 400,
              color: '#1a1a1a',
              letterSpacing: '0.02em'
            }}
          >
            {product.price}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
