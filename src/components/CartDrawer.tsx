import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Minus, Plus, Trash2, ShoppingBag, Loader2, ExternalLink } from 'lucide-react';
import { useCartStore } from '@/stores/cartStore';
import { useLanguage } from '@/contexts/LanguageContext';

const CartDrawer = () => {
  const { t, isRTL } = useLanguage();
  const { 
    items, 
    isOpen, 
    isLoading, 
    setOpen,
    updateQuantity, 
    removeItem, 
    createCheckout,
    getTotalItems,
    getTotalPrice
  } = useCartStore();
  
  const totalItems = getTotalItems();
  const totalPrice = getTotalPrice();

  // Prevent body scroll when drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const handleCheckout = async () => {
    const checkoutUrl = await createCheckout();
    if (checkoutUrl) {
      window.open(checkoutUrl, '_blank');
      setOpen(false);
    }
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
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
            onClick={() => setOpen(false)}
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: isRTL ? '-100%' : '100%' }}
            animate={{ x: 0 }}
            exit={{ x: isRTL ? '-100%' : '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            className={`fixed top-0 ${isRTL ? 'left-0' : 'right-0'} h-full w-full sm:w-[450px] bg-background z-50 flex flex-col shadow-2xl`}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-border">
              <div className="flex items-center gap-3">
                <ShoppingBag className="h-6 w-6 text-primary" />
                <h2 className="text-xl font-display tracking-wide">{t('cart.title')}</h2>
                {totalItems > 0 && (
                  <span className="bg-primary text-primary-foreground text-xs px-2 py-1 rounded-full">
                    {totalItems}
                  </span>
                )}
              </div>
              <button
                onClick={() => setOpen(false)}
                className="p-2 hover:bg-muted rounded-full transition-colors"
                aria-label={t('common.close')}
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto p-6">
              {items.length === 0 ? (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex flex-col items-center justify-center h-full text-center"
                >
                  <div className="w-24 h-24 rounded-full bg-muted flex items-center justify-center mb-6">
                    <ShoppingBag className="h-12 w-12 text-muted-foreground" />
                  </div>
                  <p className="text-lg text-muted-foreground mb-4">{t('cart.empty')}</p>
                  <button
                    onClick={() => setOpen(false)}
                    className="text-primary hover:underline font-medium"
                  >
                    {t('cart.continueShopping')}
                  </button>
                </motion.div>
              ) : (
                <div className="space-y-4">
                  <AnimatePresence mode="popLayout">
                    {items.map((item, index) => (
                      <motion.div
                        key={item.variantId}
                        initial={{ opacity: 0, x: isRTL ? -20 : 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: isRTL ? 20 : -20 }}
                        transition={{ delay: index * 0.05 }}
                        className="flex gap-4 p-4 bg-muted/30 rounded-xl border border-border/50"
                      >
                        {/* Product Image */}
                        <div className="w-20 h-20 bg-secondary/20 rounded-lg overflow-hidden flex-shrink-0">
                          {item.product.node.images?.edges?.[0]?.node && (
                            <img
                              src={item.product.node.images.edges[0].node.url}
                              alt={item.product.node.title}
                              className="w-full h-full object-cover"
                            />
                          )}
                        </div>

                        {/* Product Info */}
                        <div className="flex-1 min-w-0">
                          <h4 className="font-medium truncate text-sm">{item.product.node.title}</h4>
                          {item.variantTitle !== 'Default Title' && (
                            <p className="text-xs text-muted-foreground mt-0.5">
                              {item.selectedOptions.map(opt => opt.value).join(' • ')}
                            </p>
                          )}
                          <p className="text-primary font-semibold mt-2">
                            {item.price.currencyCode} {parseFloat(item.price.amount).toFixed(2)}
                          </p>

                          {/* Quantity Controls */}
                          <div className="flex items-center gap-2 mt-3">
                            <button
                              onClick={() => updateQuantity(item.variantId, item.quantity - 1)}
                              className="w-8 h-8 rounded-lg bg-background border border-border flex items-center justify-center hover:bg-muted transition-colors"
                            >
                              <Minus className="h-3 w-3" />
                            </button>
                            <span className="w-8 text-center font-medium">{item.quantity}</span>
                            <button
                              onClick={() => updateQuantity(item.variantId, item.quantity + 1)}
                              className="w-8 h-8 rounded-lg bg-background border border-border flex items-center justify-center hover:bg-muted transition-colors"
                            >
                              <Plus className="h-3 w-3" />
                            </button>
                          </div>
                        </div>

                        {/* Remove Button */}
                        <button
                          onClick={() => removeItem(item.variantId)}
                          className="p-2 text-muted-foreground hover:text-destructive transition-colors self-start"
                          aria-label={t('cart.remove')}
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </div>
              )}
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="border-t border-border p-6 bg-background space-y-4"
              >
                {/* Total */}
                <div className="flex justify-between items-center">
                  <span className="text-lg font-medium">{t('cart.total')}</span>
                  <span className="text-2xl font-display text-primary">
                    {items[0]?.price.currencyCode || 'USD'} {totalPrice.toFixed(2)}
                  </span>
                </div>

                {/* Checkout Button */}
                <button
                  onClick={handleCheckout}
                  disabled={isLoading || items.length === 0}
                  className="w-full py-4 bg-primary text-primary-foreground font-medium tracking-wide rounded-xl flex items-center justify-center gap-3 hover:bg-primary/90 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      <span>{t('common.loading')}</span>
                    </>
                  ) : (
                    <>
                      <ExternalLink className="w-5 h-5" />
                      <span>{t('cart.checkout')}</span>
                    </>
                  )}
                </button>
              </motion.div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CartDrawer;
