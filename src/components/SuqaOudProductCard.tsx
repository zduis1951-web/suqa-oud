import { useState } from 'react';

export interface SuqaOudProduct {
  name: string;
  price: string;
  image: string;
  hoverImage?: string;
  isNew?: boolean;
}

interface SuqaOudProductCardProps {
  product: SuqaOudProduct;
  onClick?: () => void;
}

const SuqaOudProductCard = ({ product, onClick }: SuqaOudProductCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const cardStyle: React.CSSProperties = {
    position: 'relative',
    width: '337px',
    height: '602px',
    minHeight: '602px',
    backgroundColor: 'rgb(247, 244, 239)',
    borderWidth: '1.5px 0px 1.5px 1.5px',
    borderStyle: 'solid',
    borderColor: 'rgb(53, 53, 53)',
    borderRightStyle: 'none',
    cursor: 'pointer',
    boxSizing: 'border-box',
    fontFamily: 'Assistant, sans-serif',
    overflow: 'hidden',
  };

  const cardInnerStyle: React.CSSProperties = {
    position: 'relative',
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  };

  const newBadgeStyle: React.CSSProperties = {
    position: 'absolute',
    top: '22px',
    left: '22px',
    zIndex: 10,
    padding: '0px 8px',
    backgroundColor: 'transparent',
    border: '1.5px solid rgb(79, 79, 79)',
    fontFamily: 'Assistant, sans-serif',
    fontSize: '10px',
    fontWeight: 400,
    color: 'rgb(79, 79, 79)',
    textTransform: 'uppercase',
    lineHeight: '20px',
    letterSpacing: '0.5px',
  };

  const imageContainerStyle: React.CSSProperties = {
    position: 'relative',
    width: '100%',
    height: '505px',
    overflow: 'hidden',
    backgroundColor: 'rgb(247, 244, 239)',
  };

  const imageStyle: React.CSSProperties = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    objectPosition: '50% 50%',
    transition: 'opacity 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
  };

  const primaryImageStyle: React.CSSProperties = {
    ...imageStyle,
    opacity: isHovered && product.hoverImage ? 0 : 1,
  };

  const hoverImageStyle: React.CSSProperties = {
    ...imageStyle,
    opacity: isHovered ? 1 : 0,
  };

  const infoContainerStyle: React.CSSProperties = {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    width: '100%',
    height: '97px',
    paddingBottom: '27px',
    paddingTop: '0px',
    paddingLeft: '0px',
    paddingRight: '0px',
    backgroundColor: 'transparent',
    textAlign: 'center',
    boxSizing: 'border-box',
  };

  const titleStyle: React.CSSProperties = {
    fontFamily: 'Assistant, sans-serif',
    fontSize: '18px',
    fontWeight: 400,
    color: 'rgb(0, 0, 0)',
    lineHeight: '30px',
    textTransform: 'uppercase',
    letterSpacing: '0.6px',
    margin: '0 auto',
    padding: 0,
    maxWidth: '80%',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    wordBreak: 'break-word',
  };

  const priceContainerStyle: React.CSSProperties = {
    marginTop: '7px',
    lineHeight: '22.4px',
    color: 'rgb(18, 18, 18)',
  };

  const priceStyle: React.CSSProperties = {
    display: 'inline-block',
    paddingTop: '12px',
    fontFamily: 'Assistant, sans-serif',
    fontSize: '15px',
    fontWeight: 400,
    color: 'rgb(0, 0, 0)',
    lineHeight: '28px',
    letterSpacing: '1px',
    margin: 0,
  };

  return (
    <div
      style={cardStyle}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div style={cardInnerStyle}>
        {product.isNew && (
          <span style={newBadgeStyle}>NEW</span>
        )}

        <div style={imageContainerStyle}>
          <img
            src={product.image}
            alt={product.name}
            style={primaryImageStyle}
          />
          {product.hoverImage && (
            <img
              src={product.hoverImage}
              alt={`${product.name} packaging`}
              style={hoverImageStyle}
            />
          )}
        </div>

        <div style={infoContainerStyle}>
          <h3 style={titleStyle}>{product.name}</h3>
          <div style={priceContainerStyle}>
            <span style={priceStyle}>{product.price}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuqaOudProductCard;
