import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import GuidanceCollection from '@/components/GuidanceCollection';
import OutlandsSection from '@/components/OutlandsSection';
import LuxuryBodyLine from '@/components/LuxuryBodyLine';
import PowerOfTheInfinite from '@/components/PowerOfTheInfinite';
import SohoFlagshipBoutique from '@/components/SohoFlagshipBoutique';
import PerfectGift from '@/components/PerfectGift';
import FeaturedProductsGrid from '@/components/FeaturedProductsGrid';
import StoreLocatorSection from '@/components/StoreLocatorSection';
import HouseOfAmouageSection from '@/components/HouseOfAmouageSection';
import EditorialGallerySection from '@/components/EditorialGallerySection';
import { Helmet } from 'react-helmet-async';

/**
 * Amouage Homepage
 * 
 * Features the header, hero section, Guidance Collection, Outlands, and Luxury Body Line sections
 * recreation from the original amouage.com website.
 */
const Index = () => {
  const handleShopNowClick = () => {
    console.log('Shop Now clicked - navigate to collection page');
  };

  const handleDiscoverClick = () => {
    console.log('Discover clicked - navigate to Guidance collection');
  };

  const handleOutlandsClick = () => {
    console.log('Outlands Shop Now clicked - navigate to Outlands collection');
  };

  const handleBodyLineClick = () => {
    console.log('Luxury Body Line Shop Now clicked - navigate to body collection');
  };

  const handlePowerInfiniteClick = () => {
    console.log('Power of the Infinite Shop Now clicked - navigate to eternity collection');
  };

  const handleSohoDiscoverClick = () => {
    console.log('Soho Flagship Boutique Discover More clicked - navigate to boutique page');
  };

  const handleGiftShopClick = () => {
    console.log('Perfect Gift Shop Now clicked - navigate to gifting collection');
  };

  const handleProductClick = (productId: string) => {
    console.log(`Product clicked: ${productId} - navigate to product page`);
  };

  const handleStoreLocatorClick = () => {
    console.log('Store Locator clicked - navigate to store locator page');
  };

  const handleDiscoverStoryClick = () => {
    console.log('Discover Our Story clicked - navigate to House of Amouage page');
  };

  return (
    <>
      <Helmet>
        <title>AMOUAGE | Luxury Perfumes & Fragrances | The Gifting Edit</title>
        <meta 
          name="description" 
          content="Discover AMOUAGE's exclusive gifting collection. Luxury perfumes crafted in Oman with the finest ingredients. Shop the Gifting Edit now." 
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://amouage.com" />
      </Helmet>
      
      <Header />
      
      <main>
        <HeroSection onShopNowClick={handleShopNowClick} />
        <GuidanceCollection onDiscoverClick={handleDiscoverClick} />
        <OutlandsSection onShopNowClick={handleOutlandsClick} />
        <LuxuryBodyLine onShopNowClick={handleBodyLineClick} />
        <PowerOfTheInfinite onShopNowClick={handlePowerInfiniteClick} />
        <SohoFlagshipBoutique onDiscoverMoreClick={handleSohoDiscoverClick} />
        <PerfectGift onShopNowClick={handleGiftShopClick} />
        <FeaturedProductsGrid onProductClick={handleProductClick} />
        <StoreLocatorSection onStoreLocatorClick={handleStoreLocatorClick} />
        <EditorialGallerySection />
        <HouseOfAmouageSection onDiscoverClick={handleDiscoverStoryClick} />
      </main>
    </>
  );
};

export default Index;
