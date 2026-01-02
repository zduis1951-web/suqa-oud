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
    label: 'GIFT IDEAS',
    href: '#gift-ideas'
  }, {
    label: 'HOUSE OF AMOUAGE',
    href: '#house'
  }];
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const isTransparent = variant === 'transparent' && !isScrolled;
  return <>
      {/* Announcement Bar */}
      <div className="announcement-bar-premium">
        <p className="font-body animate-fade-in">
          Discover our redeemable sampler sets. *T&Cs Apply.
        </p>
      </div>

      {/* Main Header */}
      <header className={`header-container ${isTransparent ? 'header-transparent' : 'header-solid'} ${isScrolled ? 'header-scrolled' : ''}`}>
        <div className="header-content border-[#ede4d9]">
          {/* Top Row - Country, Logo, Icons */}
          <div className="header-top-row">
            {/* Left - Country Selector */}
            <div className="header-left">
              <button className="country-selector-premium group" onClick={() => setIsCountryOpen(!isCountryOpen)} aria-label="Select country and currency" aria-expanded={isCountryOpen}>
                <Globe className="h-4 w-4 transition-transform duration-300 group-hover:rotate-12" aria-hidden="true" />
                <span className="font-body text-xs tracking-wide-luxury">US</span>
                <span className="flag-icon">🇺🇸</span>
                <ChevronDown className={`h-3 w-3 transition-transform duration-300 ${isCountryOpen ? 'rotate-180' : ''}`} />
              </button>
            </div>

            {/* Center - Logo */}
            <div className="header-center">
              <a href="/" className="logo-link group" aria-label="Amouage - Home">
                <span className="logo-text">
                  AMOUAGE
                </span>
                <span className="logo-underline" />
              </a>
            </div>

            {/* Right - Utility Icons */}
            <div className="header-right">
              {/* Search */}
              <button className="header-icon-premium group" aria-label="Search products">
                <Search className="h-4 w-4 transition-transform duration-300 group-hover:scale-110" aria-hidden="true" />
                <span className="icon-label">Search</span>
              </button>

              {/* Cart */}
              <button className="header-icon-premium cart-icon group" aria-label="Shopping bag - 0 items">
                <ShoppingBag className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" aria-hidden="true" />
                <span className="cart-badge">0</span>
              </button>

              {/* Account */}
              <button className="header-icon-premium group" aria-label="Account">
                <User className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" aria-hidden="true" />
              </button>

              {/* Mobile Menu Toggle */}
              <button className="header-icon-premium lg:hidden" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}>
                {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>

          {/* Navigation Row - Desktop */}
          <nav className="nav-row hidden lg:flex" aria-label="Main navigation">
            {navItems.map((item, index) => <a key={item.label} href={item.href} className="nav-link-premium" onMouseEnter={() => setHoveredItem(item.label)} onMouseLeave={() => setHoveredItem(null)} style={{
            animationDelay: `${index * 50}ms`
          }}>
                <span className="nav-link-text">{item.label}</span>
                <span className={`nav-link-underline ${hoveredItem === item.label ? 'active' : ''}`} />
              </a>)}
          </nav>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      <div className={`mobile-nav-overlay ${isMobileMenuOpen ? 'active' : ''}`} onClick={() => setIsMobileMenuOpen(false)} />
      <nav className={`mobile-nav-drawer ${isMobileMenuOpen ? 'active' : ''}`}>
        <div className="mobile-nav-content">
          {navItems.map((item, index) => <a key={item.label} href={item.href} className="mobile-nav-link" style={{
          animationDelay: `${index * 100}ms`
        }} onClick={() => setIsMobileMenuOpen(false)}>
              {item.label}
            </a>)}
        </div>
      </nav>
    </>;
};
export default Header;