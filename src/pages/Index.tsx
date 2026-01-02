import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import GuidanceCollection from '@/components/GuidanceCollection';
import OutlandsSection from '@/components/OutlandsSection';
import LuxuryBodyLine from '@/components/LuxuryBodyLine';
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
      </main>
    </>
  );
};

export default Index;
