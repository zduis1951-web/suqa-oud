import { useState, useEffect, useRef, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X, Loader2 } from 'lucide-react';
import { searchProducts, ShopifyProduct } from '@/lib/shopify';
import { useLanguage } from '@/contexts/LanguageContext';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SearchModal = ({ isOpen, onClose }: SearchModalProps) => {
  const navigate = useNavigate();
  const { t, isRTL } = useLanguage();
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<ShopifyProduct[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const debounceRef = useRef<NodeJS.Timeout>();

  // Focus input when modal opens
  useEffect(() => {
    if (isOpen && inputRef.current) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  // Handle escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  // Debounced search
  const handleSearch = useCallback(async (searchQuery: string) => {
    if (debounceRef.current) {
      clearTimeout(debounceRef.current);
    }

    if (!searchQuery.trim()) {
      setResults([]);
      setHasSearched(false);
      return;
    }

    debounceRef.current = setTimeout(async () => {
      setIsLoading(true);
      setHasSearched(true);
      try {
        const products = await searchProducts(searchQuery);
        setResults(products);
      } catch (error) {
        console.error('Search error:', error);
        setResults([]);
      } finally {
        setIsLoading(false);
      }
    }, 300);
  }, []);

  const handleProductClick = (product: ShopifyProduct) => {
    setQuery('');
    setResults([]);
    setHasSearched(false);
    onClose();
    navigate(`/product/${product.node.handle}`);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
    handleSearch(value);
  };

  const handleClose = () => {
    setQuery('');
    setResults([]);
    setHasSearched(false);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/70 backdrop-blur-md z-50"
            onClick={handleClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="fixed top-0 left-0 right-0 z-50 pt-20 px-4 md:px-0"
          >
            <div className="max-w-3xl mx-auto">
              {/* Search Input */}
              <div className="relative bg-background rounded-2xl shadow-2xl overflow-hidden border border-border/50">
                <div className="flex items-center gap-4 p-4 md:p-6 border-b border-border">
                  <Search className="h-6 w-6 text-muted-foreground flex-shrink-0" />
                  <input
                    ref={inputRef}
                    type="text"
                    value={query}
                    onChange={handleInputChange}
                    placeholder={t('search.placeholder')}
                    className="flex-1 bg-transparent text-lg md:text-xl outline-none placeholder:text-muted-foreground"
                    dir={isRTL ? 'rtl' : 'ltr'}
                  />
                  {isLoading ? (
                    <Loader2 className="h-5 w-5 animate-spin text-muted-foreground" />
                  ) : query && (
                    <button
                      onClick={() => {
                        setQuery('');
                        setResults([]);
                        setHasSearched(false);
                      }}
                      className="p-2 hover:bg-muted rounded-full transition-colors"
                    >
                      <X className="h-5 w-5" />
                    </button>
                  )}
                </div>

                {/* Results */}
                <div className="max-h-[60vh] overflow-y-auto">
                  {hasSearched && !isLoading && results.length === 0 && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="p-8 text-center"
                    >
                      <Search className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                      <p className="text-muted-foreground">{t('search.noResults')}</p>
                    </motion.div>
                  )}

                  {results.length > 0 && (
                    <div className="p-4 space-y-2">
                      <AnimatePresence mode="popLayout">
                        {results.map((product, index) => (
                          <motion.div
                            key={product.node.id}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ delay: index * 0.05 }}
                            className="flex items-center gap-4 p-4 rounded-xl hover:bg-muted/50 cursor-pointer transition-colors group"
                            onClick={() => handleProductClick(product)}
                          >
                            {/* Product Image */}
                            <div className="w-16 h-16 bg-secondary/20 rounded-lg overflow-hidden flex-shrink-0">
                              {product.node.images?.edges?.[0]?.node && (
                                <img
                                  src={product.node.images.edges[0].node.url}
                                  alt={product.node.title}
                                  className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                                />
                              )}
                            </div>

                            {/* Product Info */}
                            <div className="flex-1 min-w-0">
                              <h4 className="font-medium truncate">{product.node.title}</h4>
                              <p className="text-sm text-muted-foreground line-clamp-1">
                                {product.node.description}
                              </p>
                            </div>

                            {/* Price */}
                            <div className="text-right flex-shrink-0">
                              <p className="font-semibold text-primary">
                                {product.node.priceRange.minVariantPrice.currencyCode}{' '}
                                {parseFloat(product.node.priceRange.minVariantPrice.amount).toFixed(2)}
                              </p>
                              <p className="text-xs text-muted-foreground group-hover:text-primary transition-colors">
                                {t('products.viewDetails')}
                              </p>
                            </div>
                          </motion.div>
                        ))}
                      </AnimatePresence>
                    </div>
                  )}
                </div>
              </div>

              {/* Close hint */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-center text-sm text-white/60 mt-4"
              >
                Press <kbd className="px-2 py-1 bg-white/10 rounded text-white/80">ESC</kbd> to close
              </motion.p>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default SearchModal;