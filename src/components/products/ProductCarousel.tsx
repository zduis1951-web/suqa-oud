import * as React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from '@/components/ui/carousel';
import ProductCard, { type Product } from './ProductCard';

interface ProductCarouselProps {
  products: Product[];
  onProductClick?: (product: Product, index: number) => void;
  className?: string;
}

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
    <div className={`relative ${className}`}>
      {/* Navigation Arrows */}
      <button 
        onClick={scrollPrev}
        className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 md:w-14 md:h-14 flex items-center justify-center bg-background/90 backdrop-blur-sm border border-border/30 rounded-full shadow-lg hover:bg-accent hover:text-accent-foreground transition-all duration-300 -translate-x-1/2 md:-translate-x-6 disabled:opacity-50 disabled:cursor-not-allowed"
        aria-label="Previous products"
        disabled={current === 0}
      >
        <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
      </button>
      
      <button 
        onClick={scrollNext}
        className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 md:w-14 md:h-14 flex items-center justify-center bg-background/90 backdrop-blur-sm border border-border/30 rounded-full shadow-lg hover:bg-accent hover:text-accent-foreground transition-all duration-300 translate-x-1/2 md:translate-x-6 disabled:opacity-50 disabled:cursor-not-allowed"
        aria-label="Next products"
        disabled={current === count - 1}
      >
        <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
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
        <CarouselContent className="-ml-4 md:-ml-6">
          {products.map((product, index) => (
            <CarouselItem 
              key={product.id || index} 
              className="pl-4 md:pl-6 basis-[85%] sm:basis-1/2 md:basis-1/3 lg:basis-1/4"
            >
              <ProductCard
                product={product}
                onClick={() => onProductClick?.(product, index)}
                animationDelay={0.1 * index}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      {/* Pagination Dots */}
      <div className="flex justify-center gap-2 mt-10">
        {Array.from({ length: count }).map((_, index) => (
          <button
            key={index}
            onClick={() => scrollTo(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              current === index 
                ? 'bg-accent w-6' 
                : 'bg-accent/30 hover:bg-accent/50 w-2'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductCarousel;
