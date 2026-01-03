import { useState, useEffect } from 'react';
import { Globe, Search, ShoppingBag, User, ChevronDown, Menu, X } from 'lucide-react';

interface HeaderProps {
  variant?: 'transparent' | 'solid';
}

const Header = ({
  variant = 'solid'
}: HeaderProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isCountryOpen, setIsCountryOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  const navItems = [{
    label: 'PERFUMES',
    href: '#perfumes'
  }, {
    label: 'COLLECTIONS',
    href: '#collections'
  }, {
    label: 'BODY',
    href: '#body'
  }, {
    label: 'DISCOVERY',
    href: '#discovery'
  }, {
    label: 'THE CRAFT',
    href: '/the-craft'
  }, {
    label: 'THE EXPERIENCE',
    href: '/the-experience'
  }, {
    label: 'OUR STORY',
    href: '/our-story'
  }, {
    label: 'OUR PHILOSOPHY',
    href: '/our-philosophy'
  }];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const isTransparent = variant === 'transparent' && !isScrolled;

  return <>
    {/* Announcement Bar */}
    <div className="announcement-bar-premium">
      <p className="font-body animate-fade-in text-[10px] sm:text-xs">
        Discover our redeemable sampler sets. *T&Cs Apply.
      </p>
    </div>

    {/* Main Header */}
    <header className={`header-container ${isTransparent ? 'header-transparent' : 'header-solid'} ${isScrolled ? 'header-scrolled' : ''}`}>
      <div className="header-content border-[#ede4d9]">
        {/* Top Row - Country, Logo, Icons */}
        <div className="header-top-row py-3 md:py-4">
          {/* Left - Country Selector (hidden on small mobile) */}
          <div className="header-left min-w-[40px] sm:min-w-[100px] md:min-w-[150px]">
            <button 
              className="country-selector-premium group hidden sm:flex" 
              onClick={() => setIsCountryOpen(!isCountryOpen)} 
              aria-label="Select country and currency" 
              aria-expanded={isCountryOpen}
            >
              <Globe className="h-4 w-4 transition-transform duration-300 group-hover:rotate-12" aria-hidden="true" />
              <span className="font-body text-xs tracking-wide-luxury hidden md:inline">US</span>
              <span className="flag-icon hidden md:flex">🇺🇸</span>
              <ChevronDown className={`h-3 w-3 transition-transform duration-300 hidden md:block ${isCountryOpen ? 'rotate-180' : ''}`} />
            </button>
          </div>

          {/* Center - Logo */}
          <div className="header-center">
            <a href="/" className="logo-link group" aria-label="SUQA OUD - Home">
              <span className="logo-text text-xl sm:text-2xl md:text-3xl lg:text-4xl tracking-[0.15em] sm:tracking-[0.25em] md:tracking-luxury">
                SUQA OUD
              </span>
              <span className="logo-underline" />
            </a>
          </div>

          {/* Right - Utility Icons */}
          <div className="header-right min-w-[100px] sm:min-w-[120px] md:min-w-[150px] gap-1 sm:gap-2 md:gap-4">
            {/* Search - Hidden on very small screens */}
            <button className="header-icon-premium group hidden sm:flex p-2 min-w-[44px] min-h-[44px] items-center justify-center" aria-label="Search products">
              <Search className="h-4 w-4 md:h-5 md:w-5 transition-transform duration-300 group-hover:scale-110" aria-hidden="true" />
              <span className="icon-label hidden lg:block">Search</span>
            </button>

            {/* Cart */}
            <button className="header-icon-premium cart-icon group p-2 min-w-[44px] min-h-[44px] flex items-center justify-center" aria-label="Shopping bag - 0 items">
              <ShoppingBag className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" aria-hidden="true" />
              <span className="cart-badge">0</span>
            </button>

            {/* Account - Hidden on small mobile */}
            <button className="header-icon-premium group hidden sm:flex p-2 min-w-[44px] min-h-[44px] items-center justify-center" aria-label="Account">
              <User className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" aria-hidden="true" />
            </button>

            {/* Mobile Menu Toggle */}
            <button 
              className="header-icon-premium lg:hidden p-2 min-w-[44px] min-h-[44px] flex items-center justify-center" 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
              aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Navigation Row - Desktop */}
        <nav className="nav-row hidden lg:flex" aria-label="Main navigation">
          {navItems.map((item, index) => (
            <a 
              key={item.label} 
              href={item.href} 
              className="nav-link-premium" 
              onMouseEnter={() => setHoveredItem(item.label)} 
              onMouseLeave={() => setHoveredItem(null)} 
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <span className="nav-link-text">{item.label}</span>
              <span className={`nav-link-underline ${hoveredItem === item.label ? 'active' : ''}`} />
            </a>
          ))}
        </nav>
      </div>
    </header>

    {/* Mobile Navigation Overlay */}
    <div 
      className={`mobile-nav-overlay ${isMobileMenuOpen ? 'active' : ''}`} 
      onClick={() => setIsMobileMenuOpen(false)} 
    />

    {/* Mobile Navigation Drawer */}
    <nav className={`mobile-nav-drawer ${isMobileMenuOpen ? 'active' : ''}`}>
      {/* Close Button inside drawer */}
      <button 
        className="absolute top-4 right-4 p-3 min-w-[48px] min-h-[48px] flex items-center justify-center text-foreground"
        onClick={() => setIsMobileMenuOpen(false)}
        aria-label="Close menu"
      >
        <X className="h-6 w-6" />
      </button>
      
      <div className="mobile-nav-content pt-20">
        {navItems.map((item, index) => (
          <a 
            key={item.label} 
            href={item.href} 
            className="mobile-nav-link text-base py-5" 
            style={{ animationDelay: `${index * 80}ms` }} 
            onClick={() => setIsMobileMenuOpen(false)}
          >
            {item.label}
          </a>
        ))}
        
        {/* Mobile-only quick actions */}
        <div className="mt-8 pt-8 border-t border-border/30">
          <div className="flex items-center gap-6 px-2">
            <button className="flex items-center gap-3 text-foreground py-3" aria-label="Search">
              <Search className="h-5 w-5" />
              <span className="text-sm tracking-wide">Search</span>
            </button>
            <button className="flex items-center gap-3 text-foreground py-3" aria-label="Account">
              <User className="h-5 w-5" />
              <span className="text-sm tracking-wide">Account</span>
            </button>
          </div>
          
          {/* Country selector for mobile */}
          <button 
            className="flex items-center gap-3 text-foreground py-3 mt-4 px-2"
            onClick={() => setIsCountryOpen(!isCountryOpen)}
          >
            <Globe className="h-5 w-5" />
            <span className="text-sm tracking-wide">US 🇺🇸</span>
            <ChevronDown className={`h-4 w-4 transition-transform ${isCountryOpen ? 'rotate-180' : ''}`} />
          </button>
        </div>
      </div>
    </nav>
  </>;
};

export default Header;
