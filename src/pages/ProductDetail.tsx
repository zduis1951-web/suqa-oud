import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Minus, Plus, ArrowLeft, ChevronLeft, ChevronRight } from 'lucide-react';
import { fetchProductByHandle, fetchShopifyProducts, ShopifyProduct } from '@/lib/shopify';
import { useCartStore } from '@/stores/cartStore';
import { useLanguage } from '@/contexts/LanguageContext';
import { toast } from 'sonner';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const ProductDetail = () => {
  const { handle } = useParams<{ handle: string }>();
  const navigate = useNavigate();
  const { t, language } = useLanguage();
  const { addItem, setOpen } = useCartStore();
  
  const [product, setProduct] = useState<ShopifyProduct | null>(null);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);
  const [selectedVariantIndex, setSelectedVariantIndex] = useState(0);
  const [suggestedProducts, setSuggestedProducts] = useState<ShopifyProduct[]>([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const loadProduct = async () => {
      if (!handle) return;
      setLoading(true);
      setCurrentImageIndex(0);
      try {
        const productData = await fetchProductByHandle(handle);
        setProduct(productData);
      } catch (error) {
        console.error('Error loading product:', error);
      } finally {
        setLoading(false);
      }
    };

    loadProduct();
  }, [handle]);

  // Load suggested products
  useEffect(() => {
    const loadSuggestedProducts = async () => {
      try {
        const products = await fetchShopifyProducts(20);
        // Exclude current product
        const filtered = products.filter(p => p.node.handle !== handle);
        setSuggestedProducts(filtered);
      } catch (error) {
        console.error('Error loading suggested products:', error);
      }
    };
    loadSuggestedProducts();
  }, [handle]);

  // Image gallery navigation
  const productImages = product?.node.images.edges || [];
  const currentImage = productImages[currentImageIndex]?.node.url || '';

  const nextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === productImages.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? productImages.length - 1 : prev - 1
    );
  };

  const selectedVariant = product?.node.variants.edges[selectedVariantIndex]?.node;
  const price = selectedVariant?.price.amount || product?.node.priceRange.minVariantPrice.amount || '0';
  const currencyCode = selectedVariant?.price.currencyCode || product?.node.priceRange.minVariantPrice.currencyCode || 'AED';

  const handleAddToBag = () => {
    if (!product || !selectedVariant) {
      toast.error('Please select a variant');
      return;
    }

    addItem({
      product: product,
      variantId: selectedVariant.id,
      variantTitle: selectedVariant.title,
      price: selectedVariant.price,
      quantity: quantity,
      selectedOptions: selectedVariant.selectedOptions,
    });

    toast.success(t('cart.addedToCart'), {
      position: 'top-center',
    });
    setOpen(true);
  };

  const incrementQuantity = () => setQuantity(prev => prev + 1);
  const decrementQuantity = () => setQuantity(prev => Math.max(1, prev - 1));

  // Extract product type from description or tags
  const getProductType = () => {
    if (!product) return '';
    const description = product.node.description.toLowerCase();
    const types: string[] = [];
    if (description.includes('edp') || description.includes('eau de parfum')) types.push('EDP');
    if (description.includes('floral')) types.push('FLORAL');
    if (description.includes('musky') || description.includes('musk')) types.push('MUSKY');
    if (description.includes('woody') || description.includes('wood')) types.push('WOODY');
    if (description.includes('oud')) types.push('OUD');
    if (description.includes('amber')) types.push('AMBER');
    return types.length > 0 ? types.join(' | ') : 'EDP | LUXURY';
  };

  const handleGoBack = () => {
    if (window.history.length > 1) {
      navigate(-1);
    } else {
      navigate('/');
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="flex items-center justify-center min-h-[60vh]">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center"
          >
            <div className="w-16 h-16 border-2 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4" />
            <p className="text-muted-foreground tracking-widest uppercase text-xl">{t('common.loading')}</p>
          </motion.div>
        </div>
        <Footer />
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="flex flex-col items-center justify-center min-h-[60vh] px-4">
          <h1 className="text-4xl font-light tracking-widest uppercase mb-4">{t('products.productNotFound')}</h1>
          <button 
            onClick={() => navigate('/')}
            className="text-xl tracking-widest uppercase underline underline-offset-4 hover:opacity-70 transition-opacity"
          >
            {t('products.returnHome')}
          </button>
        </div>
        <Footer />
      </div>
    );
  }

  const isRTL = language === 'ar';

  return (
    <div className={`min-h-screen bg-background ${isRTL ? 'rtl' : 'ltr'}`} dir={isRTL ? 'rtl' : 'ltr'}>
      <Helmet>
        <title>{product.node.title} | SUQA OUD</title>
        <meta name="description" content={product.node.description.slice(0, 160)} />
      </Helmet>
      
      <Header />
      
      <main className="pt-[120px] lg:pt-[140px]">
        {/* Back Button - Mobile */}
        <div className="lg:hidden px-4 py-3">
          <button 
            onClick={handleGoBack}
            className="flex items-center gap-2 text-xl tracking-wider uppercase opacity-70 hover:opacity-100 transition-opacity active:scale-95"
            type="button"
          >
            <ArrowLeft className="h-5 w-5" />
            <span>{t('products.back')}</span>
          </button>
        </div>

        <div className="flex flex-col lg:flex-row min-h-[calc(100vh-140px)]">
          {/* Left Side - Product Image Gallery */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-1/2 bg-[#EFE3D9] flex items-center justify-center p-8 lg:p-16 min-h-[50vh] lg:min-h-full lg:sticky lg:top-[140px] lg:h-[calc(100vh-140px)] relative"
          >
            {/* Left Arrow */}
            {productImages.length > 1 && (
              <button
                onClick={prevImage}
                className="absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 w-10 h-10 lg:w-12 lg:h-12 flex items-center justify-center bg-white/80 hover:bg-white rounded-full shadow-lg transition-all z-10"
              >
                <ChevronLeft className="h-5 w-5 lg:h-6 lg:w-6" />
              </button>
            )}

            {/* Product Image */}
            <AnimatePresence mode="wait">
              <motion.img
                key={currentImageIndex}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                src={currentImage}
                alt={product.node.title}
                className="max-w-full max-h-[60vh] lg:max-h-[70vh] object-contain"
              />
            </AnimatePresence>

            {/* Right Arrow */}
            {productImages.length > 1 && (
              <button
                onClick={nextImage}
                className="absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 w-10 h-10 lg:w-12 lg:h-12 flex items-center justify-center bg-white/80 hover:bg-white rounded-full shadow-lg transition-all z-10"
              >
                <ChevronRight className="h-5 w-5 lg:h-6 lg:w-6" />
              </button>
            )}

            {/* Image Indicators */}
            {productImages.length > 1 && (
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
                {productImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentImageIndex 
                        ? 'bg-primary w-4' 
                        : 'bg-primary/30 hover:bg-primary/50'
                    }`}
                  />
                ))}
              </div>
            )}
          </motion.div>

          {/* Right Side - Product Details */}
          <motion.div 
            initial={{ opacity: 0, x: isRTL ? -30 : 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="w-full lg:w-1/2 p-6 lg:p-12 xl:p-16 flex flex-col"
          >
            {/* Product Title & Badge */}
            <div className="flex items-start justify-between gap-4 mb-3">
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-light tracking-[0.2em] uppercase">
                {product.node.title}
              </h1>
              <span className="px-3 py-1 bg-primary text-primary-foreground text-[15px] tracking-[0.2em] uppercase font-medium shrink-0">
                {t('products.new')}
              </span>
            </div>

            {/* Product Type */}
            <p className="text-lg tracking-[0.15em] text-muted-foreground uppercase mb-6">
              {getProductType()}
            </p>

            {/* Price */}
            <p className="text-xl lg:text-2xl font-light tracking-wider mb-8">
              {currencyCode} {parseFloat(price).toFixed(0)}
            </p>

            {/* Divider */}
            <div className="w-full h-px bg-border mb-8" />


            {/* Quantity Selector */}
            <div className="flex items-center gap-4 mb-8">
              <button 
                onClick={decrementQuantity}
                className="w-12 h-12 border border-border flex items-center justify-center hover:border-primary transition-colors"
              >
                <Minus className="h-4 w-4" />
              </button>
              <span className="text-lg font-light w-8 text-center">{quantity}</span>
              <button 
                onClick={incrementQuantity}
                className="w-12 h-12 border border-border flex items-center justify-center hover:border-primary transition-colors"
              >
                <Plus className="h-4 w-4" />
              </button>
            </div>


            {/* Add to Bag Button */}
            <motion.button
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              onClick={handleAddToBag}
              className="w-full bg-primary text-primary-foreground py-4 lg:py-5 text-xl tracking-[0.2em] uppercase font-medium hover:bg-primary/90 transition-colors mb-8"
            >
              {t('products.addToBag')}
            </motion.button>

            {/* Divider */}
            <div className="w-full h-px bg-border mb-6" />

            {/* Accordion Sections */}
            <Accordion type="single" collapsible className="mb-8">
              <AccordionItem value="description" className="border-b border-border">
                <AccordionTrigger className="text-lg tracking-[0.15em] uppercase py-5 hover:no-underline">
                  {t('products.productDescription')}
                </AccordionTrigger>
                <AccordionContent className="text-xl leading-relaxed text-muted-foreground pb-5">
                  {product.node.description || 'A luxurious fragrance crafted with the finest ingredients, designed to evoke elegance and sophistication.'}
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="notes" className="border-b border-border">
                <AccordionTrigger className="text-lg tracking-[0.15em] uppercase py-5 hover:no-underline">
                  {t('products.notesIngredients')}
                </AccordionTrigger>
                <AccordionContent className="text-xl leading-relaxed text-muted-foreground pb-5">
                  <p className="mb-3"><strong>{t('products.topNotes')}</strong> {isRTL ? 'بخور، زعفران' : 'Incense, Saffron'}</p>
                  <p className="mb-3"><strong>{t('products.heartNotes')}</strong> {isRTL ? 'عود، ورد' : 'Oud, Rose'}</p>
                  <p><strong>{t('products.baseNotes')}</strong> {isRTL ? 'مسك، عنبر' : 'Musk, Amber'}</p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>

          </motion.div>
        </div>

        {/* You May Also Like Section */}
        {suggestedProducts.length > 0 && (
          <section className="py-12 lg:py-20 bg-[#EFE3D9]">
            <div className="container mx-auto px-4">
              <h2 className="text-2xl lg:text-3xl font-light tracking-[0.2em] uppercase text-center mb-10">
                {isRTL ? 'قد يعجبك أيضاً' : 'YOU MAY ALSO LIKE'}
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                {suggestedProducts.map((suggestedProduct) => (
                  <motion.div
                    key={suggestedProduct.node.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    onClick={() => navigate(`/product/${suggestedProduct.node.handle}`)}
                    className="cursor-pointer group"
                  >
                    <div className="bg-[#EFE3D9] border border-[rgb(53,53,53)] p-4 transition-all duration-300 hover:shadow-lg">
                      <div className="aspect-square overflow-hidden">
                        <img
                          src={suggestedProduct.node.images.edges[0]?.node.url}
                          alt={suggestedProduct.node.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                      <h3 className="mt-4 text-center uppercase tracking-wider text-sm font-light">
                        {suggestedProduct.node.title}
                      </h3>
                      <p className="text-center text-sm mt-2 font-light">
                        {suggestedProduct.node.priceRange.minVariantPrice.currencyCode} {parseFloat(suggestedProduct.node.priceRange.minVariantPrice.amount).toFixed(0)}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default ProductDetail;