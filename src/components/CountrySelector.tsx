import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Check, Loader2 } from 'lucide-react';
import { useGeolocation, countries } from '@/hooks/useGeolocation';
import { useLanguage } from '@/contexts/LanguageContext';

interface CountrySelectorProps {
  isOpen: boolean;
  onClose: () => void;
}

const getCountryFlag = (countryCode: string): string => {
  const codePoints = countryCode
    .toUpperCase()
    .split('')
    .map(char => 127397 + char.charCodeAt(0));
  return String.fromCodePoint(...codePoints);
};

const CountrySelector = ({ isOpen, onClose }: CountrySelectorProps) => {
  const { t, language, isRTL } = useLanguage();
  const { countryCode, isLoading, setCountry } = useGeolocation();
  const [searchQuery, setSearchQuery] = useState('');

  const filteredCountries = countries.filter(country => {
    const name = language === 'ar' ? country.nameAr : country.name;
    return name.toLowerCase().includes(searchQuery.toLowerCase()) ||
           country.code.toLowerCase().includes(searchQuery.toLowerCase());
  });

  const handleSelect = (code: string) => {
    setCountry(code);
    onClose();
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
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="fixed inset-4 md:inset-auto md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:w-full md:max-w-md bg-background rounded-2xl shadow-2xl z-50 flex flex-col max-h-[80vh] overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-border">
              <h2 className="text-xl font-display tracking-wide">{t('country.selectCountry')}</h2>
              <button
                onClick={onClose}
                className="p-2 hover:bg-muted rounded-full transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Search */}
            <div className="p-4 border-b border-border">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={language === 'ar' ? 'ابحث عن دولة...' : 'Search countries...'}
                className="w-full px-4 py-3 bg-muted rounded-xl outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                dir={isRTL ? 'rtl' : 'ltr'}
              />
            </div>

            {/* Loading State */}
            {isLoading && (
              <div className="flex items-center justify-center p-8">
                <Loader2 className="h-8 w-8 animate-spin text-primary" />
                <span className="ml-3 text-muted-foreground">{t('country.detectingLocation')}</span>
              </div>
            )}

            {/* Countries List */}
            <div className="flex-1 overflow-y-auto p-2">
              {/* GCC Countries Section */}
              <div className="px-4 py-2">
                <h3 className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2">
                  {language === 'ar' ? 'دول الخليج' : 'GCC Countries'}
                </h3>
              </div>
              {filteredCountries
                .filter(c => ['AE', 'SA', 'KW', 'QA', 'BH', 'OM'].includes(c.code))
                .map((country) => (
                  <motion.button
                    key={country.code}
                    whileHover={{ x: isRTL ? -4 : 4 }}
                    onClick={() => handleSelect(country.code)}
                    className={`w-full flex items-center gap-4 px-4 py-3 rounded-xl transition-colors ${
                      countryCode === country.code
                        ? 'bg-primary/10 text-primary'
                        : 'hover:bg-muted'
                    }`}
                  >
                    <span className="text-2xl">{getCountryFlag(country.code)}</span>
                    <span className="flex-1 text-left rtl:text-right font-medium">
                      {language === 'ar' ? country.nameAr : country.name}
                    </span>
                    <span className="text-sm text-muted-foreground">{country.code}</span>
                    {countryCode === country.code && (
                      <Check className="h-5 w-5 text-primary" />
                    )}
                  </motion.button>
                ))}

              {/* Other Countries Section */}
              <div className="px-4 py-2 mt-4">
                <h3 className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2">
                  {language === 'ar' ? 'دول أخرى' : 'Other Countries'}
                </h3>
              </div>
              {filteredCountries
                .filter(c => !['AE', 'SA', 'KW', 'QA', 'BH', 'OM'].includes(c.code))
                .map((country) => (
                  <motion.button
                    key={country.code}
                    whileHover={{ x: isRTL ? -4 : 4 }}
                    onClick={() => handleSelect(country.code)}
                    className={`w-full flex items-center gap-4 px-4 py-3 rounded-xl transition-colors ${
                      countryCode === country.code
                        ? 'bg-primary/10 text-primary'
                        : 'hover:bg-muted'
                    }`}
                  >
                    <span className="text-2xl">{getCountryFlag(country.code)}</span>
                    <span className="flex-1 text-left rtl:text-right font-medium">
                      {language === 'ar' ? country.nameAr : country.name}
                    </span>
                    <span className="text-sm text-muted-foreground">{country.code}</span>
                    {countryCode === country.code && (
                      <Check className="h-5 w-5 text-primary" />
                    )}
                  </motion.button>
                ))}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CountrySelector;
