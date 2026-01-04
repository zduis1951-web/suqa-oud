import { useState, useEffect } from 'react';

export interface LocationData {
  country: string;
  countryCode: string;
  flag: string;
  currency: string;
  isLoading: boolean;
  error: string | null;
}

// Country flags using country codes
const getCountryFlag = (countryCode: string): string => {
  const codePoints = countryCode
    .toUpperCase()
    .split('')
    .map(char => 127397 + char.charCodeAt(0));
  return String.fromCodePoint(...codePoints);
};

// Currency mapping
const currencyMap: Record<string, string> = {
  US: 'USD',
  AE: 'AED',
  SA: 'SAR',
  KW: 'KWD',
  QA: 'QAR',
  BH: 'BHD',
  OM: 'OMR',
  GB: 'GBP',
  FR: 'EUR',
  DE: 'EUR',
  IT: 'EUR',
  ES: 'EUR',
  JP: 'JPY',
  CN: 'CNY',
  IN: 'INR',
  EG: 'EGP',
  LB: 'LBP',
  JO: 'JOD',
  MA: 'MAD',
  TN: 'TND',
  TR: 'TRY',
  PK: 'PKR',
  AU: 'AUD',
  CA: 'CAD',
  NZ: 'NZD',
  SG: 'SGD',
  MY: 'MYR',
  ID: 'IDR',
};

export const countries = [
  { code: 'AE', name: 'United Arab Emirates', nameAr: 'الإمارات العربية المتحدة' },
  { code: 'SA', name: 'Saudi Arabia', nameAr: 'المملكة العربية السعودية' },
  { code: 'KW', name: 'Kuwait', nameAr: 'الكويت' },
  { code: 'QA', name: 'Qatar', nameAr: 'قطر' },
  { code: 'BH', name: 'Bahrain', nameAr: 'البحرين' },
  { code: 'OM', name: 'Oman', nameAr: 'عُمان' },
  { code: 'US', name: 'United States', nameAr: 'الولايات المتحدة' },
  { code: 'GB', name: 'United Kingdom', nameAr: 'المملكة المتحدة' },
  { code: 'FR', name: 'France', nameAr: 'فرنسا' },
  { code: 'DE', name: 'Germany', nameAr: 'ألمانيا' },
  { code: 'IT', name: 'Italy', nameAr: 'إيطاليا' },
  { code: 'ES', name: 'Spain', nameAr: 'إسبانيا' },
  { code: 'JP', name: 'Japan', nameAr: 'اليابان' },
  { code: 'AU', name: 'Australia', nameAr: 'أستراليا' },
  { code: 'CA', name: 'Canada', nameAr: 'كندا' },
  { code: 'EG', name: 'Egypt', nameAr: 'مصر' },
  { code: 'LB', name: 'Lebanon', nameAr: 'لبنان' },
  { code: 'JO', name: 'Jordan', nameAr: 'الأردن' },
  { code: 'MA', name: 'Morocco', nameAr: 'المغرب' },
  { code: 'TR', name: 'Turkey', nameAr: 'تركيا' },
  { code: 'IN', name: 'India', nameAr: 'الهند' },
  { code: 'PK', name: 'Pakistan', nameAr: 'باكستان' },
  { code: 'SG', name: 'Singapore', nameAr: 'سنغافورة' },
  { code: 'MY', name: 'Malaysia', nameAr: 'ماليزيا' },
];

export const useGeolocation = () => {
  const [location, setLocation] = useState<LocationData>(() => {
    const saved = localStorage.getItem('suqa-country');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        return {
          ...parsed,
          isLoading: false,
          error: null,
        };
      } catch {
        // ignore parse error
      }
    }
    return {
      country: 'United States',
      countryCode: 'US',
      flag: '🇺🇸',
      currency: 'USD',
      isLoading: true,
      error: null,
    };
  });

  useEffect(() => {
    const savedCountry = localStorage.getItem('suqa-country');
    if (savedCountry) {
      setLocation(prev => ({ ...prev, isLoading: false }));
      return;
    }

    const detectLocation = async () => {
      try {
        const response = await fetch('https://ipapi.co/json/');
        if (!response.ok) throw new Error('Failed to fetch location');
        
        const data = await response.json();
        
        const countryCode = data.country_code || 'US';
        const countryName = data.country_name || 'United States';
        
        const newLocation = {
          country: countryName,
          countryCode: countryCode,
          flag: getCountryFlag(countryCode),
          currency: currencyMap[countryCode] || 'USD',
          isLoading: false,
          error: null,
        };
        
        setLocation(newLocation);
        localStorage.setItem('suqa-country', JSON.stringify(newLocation));
      } catch (error) {
        console.error('Geolocation error:', error);
        setLocation(prev => ({
          ...prev,
          isLoading: false,
          error: 'Could not detect location',
        }));
      }
    };

    detectLocation();
  }, []);

  const setCountry = (countryCode: string) => {
    const countryInfo = countries.find(c => c.code === countryCode);
    if (!countryInfo) return;

    const newLocation = {
      country: countryInfo.name,
      countryCode: countryInfo.code,
      flag: getCountryFlag(countryInfo.code),
      currency: currencyMap[countryInfo.code] || 'USD',
      isLoading: false,
      error: null,
    };
    
    setLocation(newLocation);
    localStorage.setItem('suqa-country', JSON.stringify(newLocation));
  };

  return { ...location, setCountry, countries };
};
