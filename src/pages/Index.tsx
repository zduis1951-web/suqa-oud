import Hero from '@/components/Hero';
import GuidanceCollection from '@/components/GuidanceCollection';
import OutlandsSection from '@/components/OutlandsSection';
import { Helmet } from 'react-helmet-async';

/**
 * Amouage Homepage
 * 
 * Features the hero section, Guidance Collection, and Outlands promotional sections
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
      
      <main>
        <Hero onShopNowClick={handleShopNowClick} />
        <GuidanceCollection onDiscoverClick={handleDiscoverClick} />
        <OutlandsSection onShopNowClick={handleOutlandsClick} />
      </main>
    </>
  );
};

export default Index;
