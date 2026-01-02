import reflectionMan from '@/assets/products/reflection-man.jpg';
import guidance from '@/assets/products/guidance.jpg';
import existence from '@/assets/products/existence.jpg';
import purpose50 from '@/assets/products/purpose-50.png';

/**
 * FeaturedProductsGrid Section - "PRECIOUS, POTENT, PERSONAL"
 * 
 * README: All product images used in this component were downloaded directly from the live
 * amouage.com website. No images were generated, edited, or altered in any way.
 * - Reflection Man: https://amouage.com/cdn/shop/files/REFLECTION-100-ML.jpg
 * - Guidance: https://amouage.com/cdn/shop/files/GUIDANCE-WOMAN-100-ML_178c631a-eaa5-4599-bce9-cb53a53486af.jpg
 * - Existence: https://amouage.com/cdn/shop/files/EXISTENCE_PLP.jpg
 * - Purpose 50: https://amouage.com/cdn/shop/files/PLP_purpose50-min.png
 */

interface Product {
  id: string;
  name: string;
  variant?: string;
  price: string;
  image: string;
  isNew?: boolean;
}

const products: Product[] = [
  {
    id: 'reflection-man',
    name: 'Reflection Man',
    variant: '100ml',
    price: '$395',
    image: reflectionMan,
  },
  {
    id: 'guidance',
    name: 'Guidance',
    variant: '100ml',
    price: '$395',
    image: guidance,
  },
  {
    id: 'existence',
    name: 'Existence',
    price: '$395',
    image: existence,
    isNew: true,
  },
  {
    id: 'purpose-50',
    name: 'Purpose 50',
    variant: '100ml',
    price: '$550',
    image: purpose50,
  },
];

interface FeaturedProductsGridProps {
  onProductClick?: (productId: string) => void;
}

const FeaturedProductsGrid = ({ onProductClick }: FeaturedProductsGridProps) => {
  return (
    <section className="w-full bg-cream-signature py-12 md:py-16 lg:py-20">
      {/* Section Title */}
      <div className="text-center mb-8 md:mb-12">
        <h2 
          className="text-foreground text-xl sm:text-2xl md:text-3xl tracking-[0.15em] uppercase"
          style={{ fontFamily: 'var(--font-primary)' }}
        >
          PRECIOUS, POTENT, PERSONAL
        </h2>
      </div>

      {/* Products Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
          {products.map((product) => (
            <div 
              key={product.id}
              className="flex flex-col cursor-pointer"
              onClick={() => onProductClick?.(product.id)}
            >
              {/* Product Image Container */}
              <div className="relative aspect-square bg-cream-light mb-4">
                {/* NEW Badge */}
                {product.isNew && (
                  <span 
                    className="absolute top-3 left-3 text-foreground text-[10px] md:text-xs tracking-[0.15em] uppercase"
                    style={{ fontFamily: 'var(--font-primary)' }}
                  >
                    NEW
                  </span>
                )}
                
                {/* Product Image */}
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-contain p-4"
                />
              </div>

              {/* Product Info */}
              <div className="text-center">
                <h3 
                  className="text-foreground text-sm md:text-base tracking-[0.1em] mb-1"
                  style={{ fontFamily: 'var(--font-primary)' }}
                >
                  {product.name}
                </h3>
                
                {product.variant && (
                  <p 
                    className="text-foreground/70 text-xs md:text-sm tracking-[0.05em] mb-2"
                    style={{ fontFamily: 'var(--font-primary)' }}
                  >
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProductsGrid;
