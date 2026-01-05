import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Globe, Search, ShoppingBag, User, ChevronDown, Menu, X, LogOut, Languages } from 'lucide-react';
import { useCartStore } from '@/stores/cartStore';
import { useLanguage } from '@/contexts/LanguageContext';
import { useAuth } from '@/contexts/AuthContext';
import { useGeolocation } from '@/hooks/useGeolocation';
import CartDrawer from './CartDrawer';
import SearchModal from './SearchModal';
import CountrySelector from './CountrySelector';

interface HeaderProps {
  variant?: 'transparent' | 'solid';
}

const Header = ({
  variant = 'solid'
}: HeaderProps) => {
  const navigate = useNavigate();
  const { t, language, toggleLanguage, isRTL } = useLanguage();
  const { user, signOut, loading: authLoading } = useAuth();
  const { countryCode, flag, isLoading: locationLoading } = useGeolocation();
  const { setOpen: setCartOpen, getTotalItems } = useCartStore();
  
  const [isScrolled, setIsScrolled] = useState(false);
  const [isCountryOpen, setIsCountryOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  const totalItems = getTotalItems();

  const navItems = [
    { label: t('nav.perfumes'), href: '#perfumes' },
    { label: t('nav.theExperience'), href: '/the-experience' },
    { label: t('nav.ourStory'), href: '/our-story' },
    { label: t('nav.ourPhilosophy'), href: '/our-philosophy' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

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

  // Close user menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (isUserMenuOpen && !(e.target as Element).closest('.user-menu-container')) {
        setIsUserMenuOpen(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isUserMenuOpen]);

  const handleSignOut = async () => {
    await signOut();
    setIsUserMenuOpen(false);
  };

  const isTransparent = variant === 'transparent' && !isScrolled;

  return <>
    {/* Announcement Bar */}
    <div className="announcement-bar-premium py-1.5 sm:py-2">
      <p className="font-body animate-fade-in text-xs sm:text-sm">
        {t('announcement.sampler')}
      </p>
    </div>

    {/* Main Header */}
    <header className={`header-container ${isTransparent ? 'header-transparent' : 'header-solid'} ${isScrolled ? 'header-scrolled' : ''}`}>
      <div className="header-content border-[#ede4d9]">
        {/* Top Row - Country, Logo, Icons */}
        <div className="header-top-row py-1.5 md:py-2">
          {/* Left - Country & Language Selector */}
          <div className="header-left min-w-[80px] sm:min-w-[100px] md:min-w-[150px]">
            {/* Country Selector */}
            <button 
              className="country-selector-premium group flex items-center gap-1 sm:gap-2" 
              onClick={() => setIsCountryOpen(true)} 
              aria-label="Select country and currency" 
            >
              {locationLoading ? (
                <div className="w-5 h-5 rounded-full bg-muted animate-pulse" />
              ) : (
                <>
                  <span className="text-base sm:text-lg">{flag}</span>
                  <span className="font-body text-lg tracking-wide hidden sm:inline">{countryCode}</span>
                  <ChevronDown className="h-3 w-3 transition-transform duration-300 hidden sm:block" />
                </>
              )}
            </button>

            {/* Language Toggle */}
            <button
              onClick={toggleLanguage}
              className="header-icon-premium group hidden md:flex items-center gap-1 px-2 py-1 rounded-md hover:bg-muted/50 transition-colors"
              aria-label="Toggle language"
            >
              <Languages className="h-4 w-4" />
              <span className="text-lg font-medium">{language.toUpperCase()}</span>
            </button>
          </div>

          {/* Center - Logo */}
          <div className="header-center">
            <a href="/" className="logo-link group" aria-label="SUQA OUD - Home">
              <img 
                src="/suqa-oud-logo.svg" 
                alt="SUQA OUD" 
                className="h-10 sm:h-12 md:h-14 lg:h-16 w-auto transition-all duration-300 group-hover:opacity-80 group-hover:scale-105"
                loading="eager"
              />
            </a>
          </div>

          {/* Right - Utility Icons */}
          <div className="header-right min-w-[100px] sm:min-w-[120px] md:min-w-[150px] gap-1 sm:gap-2 md:gap-3">
            {/* Search */}
            <button 
              className="header-icon-premium group hidden sm:flex p-2 min-w-[44px] min-h-[44px] items-center justify-center" 
              aria-label={t('header.search')}
              onClick={() => setIsSearchOpen(true)}
            >
              <Search className="h-4 w-4 md:h-5 md:w-5 transition-transform duration-300 group-hover:scale-110" />
            </button>

            {/* Cart */}
            <button 
              className="header-icon-premium cart-icon group p-2 min-w-[44px] min-h-[44px] flex items-center justify-center relative" 
              aria-label={`${t('header.cart')} - ${totalItems} items`}
              onClick={() => setCartOpen(true)}
            >
              <ShoppingBag className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-[10px] font-medium min-w-[18px] h-[18px] rounded-full flex items-center justify-center">
                  {totalItems > 99 ? '99+' : totalItems}
                </span>
              )}
            </button>

            {/* Account */}
            <div className="relative user-menu-container hidden sm:block">
              <button 
                className="header-icon-premium group p-2 min-w-[44px] min-h-[44px] flex items-center justify-center" 
                aria-label={t('header.account')}
                onClick={() => user ? setIsUserMenuOpen(!isUserMenuOpen) : navigate('/auth')}
              >
                <User className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
              </button>

              {/* User Dropdown */}
              {isUserMenuOpen && user && (
                <div className={`absolute top-full mt-2 ${isRTL ? 'left-0' : 'right-0'} bg-background border border-border rounded-xl shadow-lg overflow-hidden min-w-[200px] z-50`}>
                  <div className="px-4 py-3 border-b border-border">
                    <p className="text-xl font-medium truncate">{user.email}</p>
                  </div>
                  <button
                    onClick={handleSignOut}
                    className="w-full flex items-center gap-3 px-4 py-3 hover:bg-muted transition-colors text-destructive"
                  >
                    <LogOut className="h-4 w-4" />
                    <span className="text-xl">{t('header.signOut')}</span>
                  </button>
                </div>
              )}
            </div>

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
        <nav className="nav-row hidden lg:flex py-2" aria-label="Main navigation">
          {navItems.map((item, index) => (
            <a 
              key={item.label} 
              href={item.href} 
              className="nav-link-premium text-xs tracking-[0.2em]" 
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
            className="mobile-nav-link text-2xl py-5" 
            style={{ animationDelay: `${index * 80}ms` }} 
            onClick={() => setIsMobileMenuOpen(false)}
          >
            {item.label}
          </a>
        ))}
        
        {/* Mobile-only quick actions */}
        <div className="mt-8 pt-8 border-t border-border/30">
          <div className="flex flex-col gap-4 px-2">
            {/* Search */}
            <button 
              className="flex items-center gap-3 py-3" 
              style={{ color: 'hsl(22 59% 31%)' }}
              aria-label={t('header.search')}
              onClick={() => {
                setIsMobileMenuOpen(false);
                setIsSearchOpen(true);
              }}
            >
              <Search className="h-5 w-5" />
              <span className="text-xl tracking-wide">{t('header.search')}</span>
            </button>

            {/* Account */}
            {user ? (
              <div className="flex flex-col gap-2">
                <p className="text-xl text-muted-foreground truncate px-8">{user.email}</p>
                <button 
                  className="flex items-center gap-3 text-destructive py-3" 
                  onClick={handleSignOut}
                >
                  <LogOut className="h-5 w-5" />
                  <span className="text-xl tracking-wide">{t('header.signOut')}</span>
                </button>
              </div>
            ) : (
              <button 
                className="flex items-center gap-3 py-3" 
                style={{ color: 'hsl(22 59% 31%)' }}
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  navigate('/auth');
                }}
              >
                <User className="h-5 w-5" />
                <span className="text-xl tracking-wide">{t('header.signIn')}</span>
              </button>
            )}
            
            {/* Language Toggle */}
            <button 
              className="flex items-center gap-3 py-3"
              style={{ color: 'hsl(22 59% 31%)' }}
              onClick={toggleLanguage}
            >
              <Languages className="h-5 w-5" />
              <span className="text-xl tracking-wide">
                {language === 'en' ? 'العربية' : 'English'}
              </span>
            </button>
            
            {/* Country selector for mobile */}
            <button 
              className="flex items-center gap-3 py-3"
              style={{ color: 'hsl(22 59% 31%)' }}
              onClick={() => {
                setIsMobileMenuOpen(false);
                setIsCountryOpen(true);
              }}
            >
              <Globe className="h-5 w-5" />
              <span className="text-xl tracking-wide">{countryCode} {flag}</span>
              <ChevronDown className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </nav>

    {/* Cart Drawer */}
    <CartDrawer />

    {/* Search Modal */}
    <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />

    {/* Country Selector Modal */}
    <CountrySelector isOpen={isCountryOpen} onClose={() => setIsCountryOpen(false)} />
  </>;
};

export default Header;
