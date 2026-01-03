import * as React from 'react';
import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from '@/components/ui/carousel';
import type { Product } from './ProductCard';

// Re-export Product type
export type { Product };

interface ProductCarouselProps {
  products: Product[];
  onProductClick?: (product: Product, index: number) => void;
  className?: string;
}

// Amouage-style Product Card for Carousel
const CarouselProductCard = ({ 
  product, 
  index,
  onClick 
}: { 
  product: Product; 
  index: number;
  onClick?: () => void;
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.075,
        ease: [0, 0, 0.3, 1]
      }}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        width: '100%',
        maxWidth: '100%',
        borderWidth: '1.5px',
        borderStyle: 'solid',
        borderColor: 'rgb(53, 53, 53)',
        background: 'rgb(247, 244, 239)',
        zIndex: 1,
        minHeight: '502px',
        boxSizing: 'border-box',
        cursor: 'pointer',
      }}
    >
      <div 
        style={{
          color: 'rgba(18, 18, 18, 0.75)',
          height: '498px',
          position: 'relative',
          textDecoration: 'none',
          boxSizing: 'border-box',
        }}
      >
        <div 
          style={{
            display: 'flex',
            flexDirection: 'column',
            height: '498px',
            textDecoration: 'none',
            textAlign: 'left',
            boxSizing: 'border-box',
          }}
        >
          {/* NEW Badge */}
          {product.isNew && (
            <span 
              style={{
                background: 'rgba(165, 126, 116, 0)',
                fontFamily: 'Assistant, sans-serif',
                fontSize: '10px',
                fontWeight: 400,
                letterSpacing: 'normal',
                color: 'rgb(79, 79, 79)',
                padding: '0px 8px',
                margin: '22px 0px 0px 22px',
                borderWidth: '1.5px',
                borderStyle: 'solid',
                borderColor: 'rgb(79, 79, 79)',
                textTransform: 'uppercase',
                position: 'absolute',
                top: 0,
                left: 0,
                zIndex: 9,
                lineHeight: '20px',
                borderRadius: 0,
                boxSizing: 'border-box',
              }}
            >
              NEW
            </span>
          )}

          {/* Image Container */}
          <div 
            style={{
              backgroundColor: 'rgba(0, 0, 0, 0)',
              height: '498px',
              minHeight: '400px',
              width: '100%',
              position: 'relative',
              boxSizing: 'border-box',
              borderRadius: 0,
              display: 'flex',
              alignItems: 'stretch',
              color: 'rgba(18, 18, 18, 0.75)',
            }}
          >
            <div 
              style={{
                margin: 'auto',
                backgroundColor: 'rgb(247, 244, 239)',
                width: '100%',
                bottom: 0,
                position: 'absolute',
                top: 0,
                overflow: 'hidden',
                zIndex: 0,
                borderRadius: 0,
                boxSizing: 'border-box',
              }}
            >
              <div 
                style={{
                  width: '100%',
                  bottom: 0,
                  position: 'absolute',
                  top: 0,
                  backgroundColor: 'rgba(0, 0, 0, 0)',
                  display: 'block',
                  overflow: 'hidden',
                  boxSizing: 'border-box',
                }}
              >
                {/* Primary Image */}
                <img
                  src={product.image}
                  alt={product.name}
                  style={{
                    objectFit: 'cover',
                    minWidth: '100%',
                    height: '498px',
                    objectPosition: '50% 50%',
                    width: '100%',
                    transition: 'opacity 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                    display: 'block',
                    maxWidth: '100%',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    boxSizing: 'border-box',
                    opacity: isHovered && product.hoverImage ? 0 : 1,
                  }}
                />
                
                {/* Hover Image */}
                {product.hoverImage && (
                  <img
                    src={product.hoverImage}
                    alt={`${product.name} packaging`}
                    style={{
                      objectFit: 'cover',
                      minWidth: '100%',
                      height: '498px',
                      objectPosition: '50% 50%',
                      width: '100%',
                      opacity: isHovered ? 1 : 0,
                      transition: 'opacity 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                      display: 'block',
                      maxWidth: '100%',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      boxSizing: 'border-box',
                    }}
                  />
                )}
              </div>
            </div>
          </div>

          {/* Product Info - Bottom */}
          <div 
            style={{
              position: 'absolute',
              width: '100%',
              bottom: 0,
              display: 'block',
              textAlign: 'center',
              textDecoration: 'none',
              padding: 0,
              flexGrow: 1,
              boxSizing: 'border-box',
            }}
          >
            <div 
              style={{
                paddingBottom: '20px',
                paddingTop: 0,
                backgroundColor: 'rgba(0, 0, 0, 0)',
                height: '85px',
                paddingLeft: 0,
                paddingRight: 0,
                boxSizing: 'border-box',
              }}
            >
              <h3 
                style={{
                  fontSize: '16px',
                  fontFamily: 'Assistant, sans-serif',
                  color: 'rgb(0, 0, 0)',
                  lineHeight: '28px',
                  textTransform: 'uppercase',
                  padding: 0,
                  maxWidth: '80%',
                  margin: '0 auto',
                  whiteSpace: 'nowrap',
                  display: 'flow-root',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  marginTop: 0,
                  marginBottom: 0,
                  fontStyle: 'normal',
                  fontWeight: 400,
                  letterSpacing: '0.6px',
                  wordBreak: 'break-word',
                  boxSizing: 'border-box',
                }}
              >
                {product.name}
              </h3>

              <div 
                style={{
                  marginTop: '5px',
                  lineHeight: '22.4px',
                  color: 'rgb(18, 18, 18)',
                  boxSizing: 'border-box',
                }}
              >
                <div 
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    verticalAlign: 'top',
                    boxSizing: 'border-box',
                  }}
                >
                  <span 
                    style={{
                      paddingTop: '8px',
                      color: 'rgb(0, 0, 0)',
                      fontFamily: 'Assistant, sans-serif',
                      fontSize: '14px',
                      margin: 0,
                      fontWeight: 400,
                      lineHeight: '24px',
                      marginRight: 0,
                      display: 'inline-block',
                      boxSizing: 'border-box',
                    }}
                  >
                    {product.price}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const ProductCarousel = ({ products, onProductClick, className = '' }: ProductCarouselProps) => {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());

    api.on('select', () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  const scrollPrev = React.useCallback(() => {
    api?.scrollPrev();
  }, [api]);

  const scrollNext = React.useCallback(() => {
    api?.scrollNext();
  }, [api]);

  const scrollTo = React.useCallback((index: number) => {
    api?.scrollTo(index);
  }, [api]);

  return (
    <div 
      className={`relative ${className}`}
      style={{ backgroundColor: 'rgb(227, 214, 198)' }}
    >
      {/* Navigation Arrows */}
      <button 
        onClick={scrollPrev}
        className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 md:w-14 md:h-14 flex items-center justify-center transition-all duration-300 -translate-x-1/2 md:-translate-x-6 disabled:opacity-30 disabled:cursor-not-allowed"
        style={{
          backgroundColor: 'rgb(247, 244, 239)',
          border: '1.5px solid rgb(53, 53, 53)',
          borderRadius: '50%',
        }}
        aria-label="Previous products"
        disabled={current === 0}
      >
        <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" style={{ color: 'rgb(53, 53, 53)' }} />
      </button>
      
      <button 
        onClick={scrollNext}
        className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 md:w-14 md:h-14 flex items-center justify-center transition-all duration-300 translate-x-1/2 md:translate-x-6 disabled:opacity-30 disabled:cursor-not-allowed"
        style={{
          backgroundColor: 'rgb(247, 244, 239)',
          border: '1.5px solid rgb(53, 53, 53)',
          borderRadius: '50%',
        }}
        aria-label="Next products"
        disabled={current === count - 1}
      >
        <ChevronRight className="w-5 h-5 md:w-6 md:h-6" style={{ color: 'rgb(53, 53, 53)' }} />
      </button>

      {/* Carousel */}
      <Carousel
        setApi={setApi}
        opts={{
          align: 'start',
          loop: false,
        }}
        className="w-full"
      >
        <CarouselContent className="-ml-2 md:-ml-4">
          {products.map((product, index) => (
            <CarouselItem 
              key={product.id || index} 
              className="pl-2 md:pl-4 basis-[80%] sm:basis-1/2 md:basis-1/3 lg:basis-1/4"
            >
              <CarouselProductCard
                product={product}
                index={index}
                onClick={() => onProductClick?.(product, index)}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      {/* Pagination Dots */}
      <div className="flex justify-center gap-2 mt-8">
        {Array.from({ length: count }).map((_, index) => (
          <button
            key={index}
            onClick={() => scrollTo(index)}
            style={{
              width: current === index ? '24px' : '8px',
              height: '8px',
              borderRadius: '4px',
              backgroundColor: current === index ? 'rgb(53, 53, 53)' : 'rgba(53, 53, 53, 0.3)',
              transition: 'all 0.3s ease',
              border: 'none',
              cursor: 'pointer',
            }}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductCarousel;
