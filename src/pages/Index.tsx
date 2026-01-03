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
import HighPerfumeryGallery from '@/components/HighPerfumeryGallery';
import InsiderAccess from '@/components/InsiderAccess';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import { Helmet } from 'react-helmet-async';
import AmouageProductCard from '@/components/AmouageProductCard';
import guidanceImage from '@/assets/products/guidance.jpg';
import guidanceBox from '@/assets/products/guidance-box.jpg';
import existenceImage from '@/assets/products/existence.jpg';
import existenceBox from '@/assets/products/existence-box.jpg';
import reflectionManImage from '@/assets/products/reflection-man.jpg';
import reflectionManBox from '@/assets/products/reflection-man-box.jpg';
import purpose50Image from '@/assets/products/purpose-50.png';
import purpose50Box from '@/assets/products/purpose-50-box.jpg';

/**
 * SUQA OUD Homepage
 * 
 * Features the header, hero section, and various collection sections
 * for the SUQA OUD luxury fragrance brand.
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
    console.log('Discover Our Story clicked - navigate to House of SUQA OUD page');
  };

  return (
    <>
      <Helmet>
        <title>SUQA OUD | Luxury Fragrances | To Be Royal Is To Breathe The Kingdom of Oud</title>
        <meta 
          name="description" 
          content="SUQA OUD - For those who don't follow moments, but define their own. Where luxury is felt inwardly, presence is natural, and value is created — not borrowed." 
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://suqaoud.com" />
      </Helmet>
      
      <Header />
      
      <main>
        <section style={{
          padding: '120px 40px 60px',
          backgroundColor: '#f7f4ef',
        }}>
          <h2 style={{
            fontFamily: 'Assistant, sans-serif',
            fontSize: '14px',
            fontWeight: 400,
            textTransform: 'uppercase',
            letterSpacing: '2px',
            textAlign: 'center',
            marginBottom: '40px',
            color: '#121212',
          }}>
            Product Card Demo
          </h2>
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '0px',
            flexWrap: 'wrap',
            maxWidth: '1400px',
            margin: '0 auto',
            borderRight: '1.5px solid rgb(53, 53, 53)',
            width: 'fit-content',
          }}>
            <AmouageProductCard
              product={{
                name: "Reflection Man",
                price: "$395",
                image: reflectionManImage,
                hoverImage: reflectionManBox,
              }}
            />
            <AmouageProductCard
              product={{
                name: "Guidance",
                price: "$395",
                image: guidanceImage,
                hoverImage: guidanceBox,
              }}
            />
            <AmouageProductCard
              product={{
                name: "Existence",
                price: "$395",
                image: existenceImage,
                hoverImage: existenceBox,
                isNew: true,
              }}
            />
            <AmouageProductCard
              product={{
                name: "Purpose 50",
                price: "$550",
                image: purpose50Image,
                hoverImage: purpose50Box,
              }}
            />
          </div>
        </section>
        <HeroSection onShopNowClick={handleShopNowClick} />
        <GuidanceCollection onDiscoverClick={handleDiscoverClick} />
        <OutlandsSection onShopNowClick={handleOutlandsClick} />
        <LuxuryBodyLine onShopNowClick={handleBodyLineClick} />
        <PowerOfTheInfinite onShopNowClick={handlePowerInfiniteClick} />
        <SohoFlagshipBoutique onDiscoverMoreClick={handleSohoDiscoverClick} />
        <PerfectGift onShopNowClick={handleGiftShopClick} />
        <FeaturedProductsGrid onProductClick={handleProductClick} />
        <StoreLocatorSection onStoreLocatorClick={handleStoreLocatorClick} />
        <HouseOfAmouageSection onDiscoverClick={handleDiscoverStoryClick} />
        <HighPerfumeryGallery />
        <InsiderAccess />
      </main>
      
      <Footer />
      <ScrollToTop />
    </>
  );
};

export default Index;
