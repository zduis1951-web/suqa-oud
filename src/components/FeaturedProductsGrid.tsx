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
    <section className="w-full">
      {/* Products Grid - Exact Amouage layout */}
      <div className="flex w-full">
        {products.map((product, index) => (
          <div 
            key={product.id}
            className={`group cursor-pointer flex-1 flex flex-col ${
              index < products.length - 1 ? 'border-r border-[#c4b8a8]' : ''
            }`}
            style={{ background: '#e8ddd0' }}
            onClick={() => onProductClick?.(product.id)}
          >
            {/* Image Zone */}
            <div 
              className="relative flex items-end justify-center"
              style={{ 
                height: '420px',
                background: '#e8ddd0'
              }}
            >
              {/* NEW Badge */}
              {product.isNew && (
                <span 
                  className="absolute top-5 left-1/2 -translate-x-1/2 z-10 text-[#3d3a36] text-[11px] tracking-[0.08em] uppercase border border-[#3d3a36]/50 px-3 py-1"
                  style={{ 
                    fontFamily: 'var(--font-primary)',
                    background: '#e8ddd0'
                  }}
                >
                  NEW
                </span>
              )}
              
              {/* Bottle Image */}
              <img
                src={product.image}
                alt={product.name}
                className="h-[85%] w-auto object-contain transition-opacity duration-300 group-hover:opacity-0"
              />
              
              {/* Box Image - hover */}
              <img
                src={product.hoverImage}
                alt={`${product.name} packaging`}
                className="absolute inset-0 w-full h-full object-contain p-8 transition-opacity duration-300 opacity-0 group-hover:opacity-100"
              />
            </div>

            {/* Text Zone */}
            <div 
              className="text-center py-5"
              style={{ background: '#ddd2c4' }}
            >
              <h3 
                className="text-[#3d3a36] text-sm tracking-[0.12em] uppercase font-normal mb-2"
                style={{ fontFamily: 'var(--font-primary)' }}
              >
                {product.name.toUpperCase()}
              </h3>
              <p 
                className="text-[#3d3a36] text-sm tracking-[0.02em]"
                style={{ fontFamily: 'var(--font-primary)' }}
              >
                {product.price}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedProductsGrid;
