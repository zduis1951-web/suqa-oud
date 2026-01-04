import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Minus, Plus, Gift, PenTool, Package, Phone, ChevronDown, ArrowLeft } from 'lucide-react';
import { fetchProductByHandle, ShopifyProduct } from '@/lib/shopify';
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
  const [makeItGift, setMakeItGift] = useState(false);
  const [engrave, setEngrave] = useState(false);

  useEffect(() => {
    const loadProduct = async () => {
      if (!handle) return;
      setLoading(true);
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

  const productImage = product.node.images.edges[0]?.node.url || '';
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
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-xl tracking-wider uppercase opacity-70 hover:opacity-100 transition-opacity"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>{t('products.back')}</span>
          </button>
        </div>

        <div className="flex flex-col lg:flex-row min-h-[calc(100vh-140px)]">
          {/* Left Side - Product Image */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-1/2 bg-[#f7f4ef] flex items-center justify-center p-8 lg:p-16 min-h-[50vh] lg:min-h-full lg:sticky lg:top-[140px] lg:h-[calc(100vh-140px)]"
          >
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              src={productImage}
              alt={product.node.title}
              className="max-w-full max-h-[60vh] lg:max-h-[70vh] object-contain"
            />
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

            {/* Size Selector */}
            {product.node.options && product.node.options.length > 0 && (
              <div className="mb-6">
                <div className="flex flex-wrap gap-3">
                  {product.node.variants.edges.map((variant, index) => (
                    <button
                      key={variant.node.id}
                      onClick={() => setSelectedVariantIndex(index)}
                      className={`px-6 py-3 text-lg tracking-[0.15em] uppercase border transition-all duration-300 ${
                        selectedVariantIndex === index 
                          ? 'border-primary bg-primary text-primary-foreground'
                          : 'border-border hover:border-primary'
                      }`}
                    >
                      {variant.node.title}
                    </button>
                  ))}
                </div>
              </div>
            )}

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

            {/* Gift & Engrave Options */}
            <div className="flex flex-wrap gap-4 mb-8">
              <button 
                onClick={() => setMakeItGift(!makeItGift)}
                className={`flex items-center gap-3 px-5 py-3 border text-lg tracking-[0.12em] uppercase transition-all duration-300 ${
                  makeItGift ? 'border-primary bg-primary/5' : 'border-border hover:border-primary'
                }`}
              >
                <Gift className="h-4 w-4" />
                <span>{t('products.makeItGift')}</span>
              </button>
              <button 
                onClick={() => setEngrave(!engrave)}
                className={`flex items-center gap-3 px-5 py-3 border text-lg tracking-[0.12em] uppercase transition-all duration-300 ${
                  engrave ? 'border-primary bg-primary/5' : 'border-border hover:border-primary'
                }`}
              >
                <PenTool className="h-4 w-4" />
                <span>{t('products.engrave')}</span>
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

            {/* Service Icons */}
            <div className="flex flex-wrap justify-between gap-4 pt-4">
                <div className="flex flex-col items-center gap-2 flex-1 min-w-[80px]">
                <div className="w-10 h-10 rounded-full border border-border flex items-center justify-center">
                  <Package className="h-4 w-4" />
                </div>
                <span className="text-[15px] tracking-wider uppercase text-center text-muted-foreground">
                  {t('products.complimentarySamples')}
                </span>
              </div>
              <div className="flex flex-col items-center gap-2 flex-1 min-w-[80px]">
                <div className="w-10 h-10 rounded-full border border-border flex items-center justify-center">
                  <Gift className="h-4 w-4" />
                </div>
                <span className="text-[15px] tracking-wider uppercase text-center text-muted-foreground">
                  {t('products.giftWrapping')}
                </span>
              </div>
              <div className="flex flex-col items-center gap-2 flex-1 min-w-[80px]">
                <div className="w-10 h-10 rounded-full border border-border flex items-center justify-center">
                  <Phone className="h-4 w-4" />
                </div>
                <span className="text-[15px] tracking-wider uppercase text-center text-muted-foreground">
                  {t('products.customerService')}
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ProductDetail;
