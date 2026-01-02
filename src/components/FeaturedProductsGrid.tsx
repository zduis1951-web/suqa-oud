import reflectionMan from '@/assets/products/reflection-man.jpg';
import guidance from '@/assets/products/guidance.jpg';
import existence from '@/assets/products/existence.jpg';
import purpose50 from '@/assets/products/purpose-50.png';
import reflectionManBox from '@/assets/products/reflection-man-box.jpg';
import guidanceBox from '@/assets/products/guidance-box.jpg';
import existenceBox from '@/assets/products/existence-box.jpg';
import purpose50Box from '@/assets/products/purpose-50-box.jpg';

/**
 * FeaturedProductsGrid Section - "PRECIOUS, POTENT, PERSONAL"
 * 
 * README: All product images used in this component were downloaded directly from the live
 * amouage.com website. No images were generated, edited, or altered in any way.
 * 
 * Bottle images:
 * - Reflection Man: https://amouage.com/cdn/shop/files/REFLECTION-100-ML.jpg
 * - Guidance: https://amouage.com/cdn/shop/files/GUIDANCE-WOMAN-100-ML_178c631a-eaa5-4599-bce9-cb53a53486af.jpg
 * - Existence: https://amouage.com/cdn/shop/files/EXISTENCE_PLP.jpg
 * - Purpose 50: https://amouage.com/cdn/shop/files/PLP_purpose50-min.png
 * 
 * Packaging/Box images (hover state):
 * - Reflection Man Box: https://amouage.com/cdn/shop/files/REFLECTION-MAN-BOX.jpg
 * - Guidance Box: https://amouage.com/cdn/shop/files/GUIDANCE-BOX-100ML.jpg
 * - Existence Box: https://amouage.com/cdn/shop/files/Amouage_CS_Photo_Box_Odyssey_Existence.jpg
 * - Purpose 50 Box: https://amouage.com/cdn/shop/files/Amouage_CS_Photo_Box_Odyssey_Purpose50.jpg
 */

interface Product {
  id: string;
  name: string;
  variant?: string;
  price: string;
  image: string;
  hoverImage: string;
  isNew?: boolean;
}

const products: Product[] = [
  {
    id: 'reflection-man',
    name: 'Reflection Man',
    variant: '100ml',
    price: '$395',
    image: reflectionMan,
    hoverImage: reflectionManBox,
  },
  {
    id: 'guidance',
    name: 'Guidance',
    variant: '100ml',
    price: '$395',
    image: guidance,
    hoverImage: guidanceBox,
  },
  {
    id: 'existence',
    name: 'Existence',
    price: '$395',
    image: existence,
    hoverImage: existenceBox,
    isNew: true,
  },
  {
    id: 'purpose-50',
    name: 'Purpose 50',
    variant: '100ml',
    price: '$550',
    image: purpose50,
    hoverImage: purpose50Box,
  },
];

interface FeaturedProductsGridProps {
  onProductClick?: (productId: string) => void;
}

const FeaturedProductsGrid = ({ onProductClick }: FeaturedProductsGridProps) => {
  return (
    <section className="w-full bg-white py-12 md:py-16 lg:py-20">
      {/* Section Title */}
      <div className="text-center mb-8 md:mb-12">
        <h2 
          className="text-foreground text-xl sm:text-2xl md:text-3xl tracking-[0.2em] uppercase font-light"
          style={{ fontFamily: 'var(--font-primary)' }}
        >
          PRECIOUS, POTENT, PERSONAL
        </h2>
      </div>

      {/* Products Grid - Exact match to official site */}
      <div className="w-full bg-white">
        <div className="grid grid-cols-2 md:grid-cols-4">
          {products.map((product, index) => (
            <div 
              key={product.id}
              className={`group flex flex-col cursor-pointer bg-white relative ${
                index < products.length - 1 ? 'border-r border-foreground/10' : ''
              } ${index < 2 ? 'border-b border-foreground/10 md:border-b-0' : ''}`}
              onClick={() => onProductClick?.(product.id)}
            >
              {/* Product Image Container - Full size, no padding */}
              <div className="relative aspect-[3/4] overflow-hidden bg-white">
                {/* NEW Badge */}
                {product.isNew && (
                  <span 
                    className="absolute top-4 left-1/2 -translate-x-1/2 z-10 text-foreground text-[9px] tracking-[0.15em] uppercase border border-foreground/40 px-2.5 py-1 bg-white"
                    style={{ fontFamily: 'var(--font-primary)' }}
                  >
                    NEW
                  </span>
                )}
                
                {/* Bottle Image */}
                <img
                  src={product.image}
                  alt={product.name}
                  className="absolute inset-0 w-full h-full object-contain scale-[0.85] transition-opacity duration-300 ease-in-out group-hover:opacity-0"
                />
                
                {/* Box Image - hover */}
                <img
                  src={product.hoverImage}
                  alt={`${product.name} packaging`}
                  className="absolute inset-0 w-full h-full object-contain scale-[0.85] transition-opacity duration-300 ease-in-out opacity-0 group-hover:opacity-100"
                />
              </div>

              {/* Product Info */}
              <div className="text-center py-5 bg-white">
                <h3 
                  className="text-foreground text-[11px] md:text-xs tracking-[0.15em] uppercase font-normal mb-1"
                  style={{ fontFamily: 'var(--font-primary)' }}
                >
                  {product.name.toUpperCase()}
                </h3>
                
                <p 
                  className="text-foreground text-[11px] md:text-xs tracking-[0.05em]"
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
