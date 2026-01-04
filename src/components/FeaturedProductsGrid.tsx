import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { fetchShopifyProducts, ShopifyProduct } from '@/lib/shopify';
import { useLanguage } from '@/contexts/LanguageContext';

interface Product {
  id: string;
  handle: string;
  name: string;
  price: string;
  image: string;
  hoverImage?: string;
  isNew?: boolean;
  shopifyProduct: ShopifyProduct;
}

interface FeaturedProductsGridProps {
  onProductClick?: (productHandle: string) => void;
}

// Product Card Component - SUQA OUD Style - Responsive
const ProductCard = ({ 
  product, 
  index, 
  totalProducts,
  onClick 
}: { 
  product: Product; 
  index: number;
  totalProducts: number;
  onClick: () => void;
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const { t } = useLanguage();

  return (
    <motion.li
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.075,
        ease: [0, 0, 0.3, 1]
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
      className="product-card-item cursor-pointer"
      style={{
        '--card-index': index,
        '--total-products': totalProducts,
      } as React.CSSProperties}
    >
      <div className="product-card-inner">
        <div className="product-card-content">
          {/* NEW Badge */}
          {product.isNew && (
            <span className="product-badge">{t('products.new')}</span>
          )}

          {/* Image Container */}
          <div className="product-image-container">
            <div className="product-image-wrapper">
              <div className="product-image-inner">
                {/* Primary Image */}
                <img
                  src={product.image}
                  alt={product.name}
                  className="product-image"
                  style={{
                    opacity: isHovered && product.hoverImage ? 0 : 1,
                  }}
                  loading="lazy"
                />
                
                {/* Hover Image */}
                {product.hoverImage && (
                  <img
                    src={product.hoverImage}
                    alt={`${product.name} packaging`}
                    className="product-image product-image-hover"
                    style={{
                      opacity: isHovered ? 1 : 0,
                    }}
                    loading="lazy"
                  />
                )}
              </div>
            </div>
          </div>

          {/* Product Info - Bottom */}
          <div className="product-info">
            <div className="product-info-inner">
              <h3 className="product-title">{product.name}</h3>
              <div className="product-price-wrapper">
                <span className="product-price">{product.price}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.li>
  );
};

const FeaturedProductsGrid = ({ onProductClick }: FeaturedProductsGridProps) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const { t } = useLanguage();

  // Only show these 4 products in this section
  const featuredProductHandles = ['privilege', 'vida', 'elite', 'highness'];

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const shopifyProducts = await fetchShopifyProducts(10);
        // Filter to only show the 4 featured products
        const filteredProducts = shopifyProducts.filter((p: ShopifyProduct) => 
          featuredProductHandles.includes(p.node.handle.toLowerCase())
        );
        const formattedProducts: Product[] = filteredProducts.map((p: ShopifyProduct) => ({
          id: p.node.id,
          handle: p.node.handle,
          name: p.node.title,
          price: `AED ${parseFloat(p.node.priceRange.minVariantPrice.amount).toFixed(0)}`,
          image: p.node.images.edges[0]?.node.url || '',
          hoverImage: p.node.images.edges[1]?.node.url,
          shopifyProduct: p,
        }));
        // Sort to maintain order: Privilege, Vida, Elite, Highness
        formattedProducts.sort((a, b) => {
          const aIndex = featuredProductHandles.indexOf(a.handle.toLowerCase());
          const bIndex = featuredProductHandles.indexOf(b.handle.toLowerCase());
          return aIndex - bIndex;
        });
        setProducts(formattedProducts);
      } catch (error) {
        console.error('Error loading products:', error);
      } finally {
        setLoading(false);
      }
    };

    loadProducts();
  }, []);

  const handleProductClick = (handle: string) => {
    if (onProductClick) {
      onProductClick(handle);
    }
    navigate(`/product/${handle}`);
  };

  if (loading) {
    return (
      <section className="products-section products-section-loading">
        <p className="products-loading-text">{t('common.loading')}</p>
      </section>
    );
  }

  if (products.length === 0) {
    return (
      <section className="products-section products-section-empty">
        <p className="products-loading-text">{t('search.noResults')}</p>
      </section>
    );
  }

  return (
    <section className="products-section">
      {/* Section Title */}
      <div className="products-header">
        <h2 className="products-title">PRECIOUS, POTENT, PERSONAL</h2>
      </div>

      {/* Products Grid */}
      <ul className="products-grid">
        {products.map((product, index) => (
          <ProductCard
            key={product.id}
            product={product}
            index={index}
            totalProducts={products.length}
            onClick={() => handleProductClick(product.handle)}
          />
        ))}
      </ul>
    </section>
  );
};

export default FeaturedProductsGrid;
