import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { fetchShopifyProducts, handleDirectPurchase, ShopifyProduct } from '@/lib/shopify';

interface Product {
  id: string;
  handle: string;
  name: string;
  price: string;
  image: string;
  hoverImage?: string;
  isNew?: boolean;
}

interface FeaturedProductsGridProps {
  onProductClick?: (productHandle: string) => void;
}

// Product Card Component - SUQA OUD Style
const ProductCard = ({ 
  product, 
  index, 
  isLast,
  onClick 
}: { 
  product: Product; 
  index: number;
  isLast: boolean;
  onClick?: () => void;
}) => {
  const [isHovered, setIsHovered] = useState(false);

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
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        width: 'calc(25% - 8px * 3 / 4)',
        maxWidth: '100%',
        borderWidth: '1.5px 0px 1.5px 1.5px',
        borderTopStyle: 'solid',
        borderBottomStyle: 'solid',
        borderLeftStyle: 'solid',
        borderTopColor: 'rgb(53, 53, 53)',
        borderBottomColor: 'rgb(53, 53, 53)',
        borderLeftColor: 'rgb(53, 53, 53)',
        borderRightStyle: isLast ? 'solid' : 'none',
        borderRightColor: isLast ? 'rgb(53, 53, 53)' : 'transparent',
        borderRightWidth: isLast ? '1.5px' : '0',
        background: '#EFE3D9',
        zIndex: 1,
        minHeight: '602px',
        flexGrow: 1,
        flexShrink: 0,
        boxSizing: 'border-box',
        cursor: 'pointer',
        listStyle: 'none',
      }}
    >
      <div 
        style={{
          color: 'rgba(18, 18, 18, 0.75)',
          height: '598.992px',
          position: 'relative',
          textDecoration: 'none',
          boxSizing: 'border-box',
        }}
      >
        <div 
          style={{
            display: 'flex',
            flexDirection: 'column',
            height: '598.992px',
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
              height: '598.992px',
              minHeight: '510px',
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
                backgroundColor: '#EFE3D9',
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
                    height: '598.992px',
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
                      height: '598.992px',
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
                paddingBottom: '27px',
                paddingTop: 0,
                backgroundColor: 'rgba(0, 0, 0, 0)',
                height: '97.0078px',
                paddingLeft: 0,
                paddingRight: 0,
                boxSizing: 'border-box',
              }}
            >
              <h3 
                style={{
                  fontSize: '18px',
                  fontFamily: 'Assistant, sans-serif',
                  color: 'rgb(0, 0, 0)',
                  lineHeight: '30px',
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
                  marginTop: '7px',
                  lineHeight: '22.4px',
                  color: 'rgb(18, 18, 18)',
                  boxSizing: 'border-box',
                }}
              >
                <div 
                  style={{
                    marginBottom: 0,
                    marginTop: 0,
                    fontSize: '16px',
                    letterSpacing: '1px',
                    lineHeight: '24px',
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
                        paddingTop: '12px',
                        color: 'rgb(0, 0, 0)',
                        fontFamily: 'Assistant, sans-serif',
                        fontSize: '15px',
                        margin: 0,
                        fontWeight: 400,
                        lineHeight: '28px',
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
      </div>
    </motion.li>
  );
};

const FeaturedProductsGrid = ({ onProductClick }: FeaturedProductsGridProps) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

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

  if (loading) {
    return (
      <section 
        style={{ 
          width: '100%',
          backgroundColor: 'rgb(227, 214, 198)',
          paddingTop: '48px',
          paddingBottom: '48px',
          minHeight: '700px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <p style={{ fontFamily: 'Assistant, sans-serif', color: 'rgb(18, 18, 18)' }}>
          Loading products...
        </p>
      </section>
    );
  }

  if (products.length === 0) {
    return (
      <section 
        style={{ 
          width: '100%',
          backgroundColor: 'rgb(227, 214, 198)',
          paddingTop: '48px',
          paddingBottom: '48px',
          minHeight: '400px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <p style={{ fontFamily: 'Assistant, sans-serif', color: 'rgb(18, 18, 18)' }}>
          No products found
        </p>
      </section>
    );
  }

  return (
    <section 
      style={{ 
        width: '100%',
        backgroundColor: 'rgb(227, 214, 198)',
        paddingTop: '48px',
        paddingBottom: '0px',
      }}
    >
      {/* Section Title */}
      <div 
        style={{
          textAlign: 'center',
          marginBottom: '48px',
        }}
      >
        <h2 
          style={{
            fontFamily: 'Assistant, sans-serif',
            fontSize: 'clamp(18px, 3vw, 28px)',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            color: 'rgb(18, 18, 18)',
            fontWeight: 400,
            margin: 0,
          }}
        >
          PRECIOUS, POTENT, PERSONAL
        </h2>
      </div>

      {/* Products Grid */}
      <ul 
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          margin: 0,
          padding: 0,
          listStyle: 'none',
          width: '100%',
        }}
      >
        {products.map((product, index) => (
          <ProductCard
            key={product.id}
            product={product}
            index={index}
            isLast={index === products.length - 1}
            onClick={() => {
              if (onProductClick) {
                onProductClick(product.handle);
              } else {
                handleDirectPurchase(product.handle);
              }
            }}
          />
        ))}
      </ul>
    </section>
  );
};

export default FeaturedProductsGrid;
