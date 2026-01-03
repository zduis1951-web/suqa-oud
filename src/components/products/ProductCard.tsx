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
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: animationDelay }}
      className={`group cursor-pointer flex-grow flex-shrink-0 ${className}`}
      onClick={onClick}
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
        borderRightStyle: 'none',
        background: 'rgb(247, 244, 239)',
        minHeight: '602px',
        zIndex: 1,
      }}
    >
      {/* Card Link Container */}
      <div 
        className="relative h-full"
        style={{
          color: 'rgba(18, 18, 18, 0.75)',
          height: '598.992px',
          textDecoration: 'none',
        }}
      >
        <div 
          className="flex flex-col h-full text-left"
          style={{
            height: '598.992px',
          }}
        >
          {/* NEW Badge */}
          {product.isNew && (
            <span 
              className="absolute z-10"
              style={{
                background: 'rgba(165, 126, 116, 0)',
                fontFamily: 'var(--font-primary)',
                fontSize: '10px',
                fontWeight: 400,
                color: 'rgb(79, 79, 79)',
                padding: '0px 8px',
                margin: '22px 0px 0px 22px',
                borderWidth: '1.5px',
                borderStyle: 'solid',
                borderColor: 'rgb(79, 79, 79)',
                textTransform: 'uppercase',
                top: 0,
                left: 0,
                lineHeight: '20px',
                borderRadius: 0,
              }}
            >
              NEW
            </span>
          )}

          {/* Image Container */}
          <div 
            className="relative w-full flex items-stretch"
            style={{
              backgroundColor: 'rgba(0, 0, 0, 0)',
              height: '598.992px',
              minHeight: '510px',
              borderRadius: 0,
            }}
          >
            <div 
              className="absolute top-0 bottom-0 w-full overflow-hidden"
              style={{
                margin: 'auto',
                backgroundColor: 'rgb(247, 244, 239)',
              }}
            >
              <div className="absolute top-0 bottom-0 w-full overflow-hidden block">
                {/* Primary Image */}
                <img
                  src={product.image}
                  alt={product.name}
                  className="absolute top-0 left-0 block"
                  style={{
                    objectFit: 'cover',
                    minWidth: '100%',
                    height: '598.992px',
                    objectPosition: '50% 50%',
                    width: '100%',
                    transition: 'opacity 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                    maxWidth: '100%',
                  }}
                />
                
                {/* Hover Image (if provided) */}
                {product.hoverImage && (
                  <img
                    src={product.hoverImage}
                    alt={`${product.name} packaging`}
                    className="absolute top-0 left-0 block opacity-0 group-hover:opacity-100"
                    style={{
                      objectFit: 'cover',
                      minWidth: '100%',
                      height: '598.992px',
                      objectPosition: '50% 50%',
                      width: '100%',
                      transition: 'opacity 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                      maxWidth: '100%',
                    }}
                  />
                )}
              </div>
            </div>
          </div>

          {/* Product Info - Bottom */}
          <div 
            className="absolute bottom-0 w-full block text-center"
            style={{
              padding: 0,
              flexGrow: 1,
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
              }}
            >
              <h3 
                style={{
                  fontSize: '18px',
                  fontFamily: 'var(--font-primary)',
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
                  fontWeight: 400,
                  letterSpacing: '0.6px',
                  wordBreak: 'break-word',
                }}
              >
                {product.name}
              </h3>
              
              {product.variant && (
                <span 
                  style={{
                    lineHeight: '18.2px',
                    color: 'rgb(18, 18, 18)',
                    opacity: 0.7,
                    fontSize: '13px',
                    letterSpacing: '0.4px',
                  }}
                >
                  {product.variant}
                </span>
              )}
              
              <div 
                style={{
                  marginTop: '7px',
                  lineHeight: '22.4px',
                  color: 'rgb(18, 18, 18)',
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
                  }}
                >
                  <div className="flex justify-center items-center">
                    <span 
                      style={{
                        paddingTop: '12px',
                        color: 'rgb(0, 0, 0)',
                        fontFamily: 'var(--font-primary)',
                        fontSize: '15px',
                        margin: 0,
                        fontWeight: 400,
                        lineHeight: '28px',
                        display: 'inline-block',
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
    </motion.div>
  );
};

export default ProductCard;
