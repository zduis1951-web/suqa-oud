import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
const Footer = () => {
  const [email, setEmail] = useState('');
  const [openSection, setOpenSection] = useState<string | null>(null);
  const {
    t,
    isRTL
  } = useLanguage();
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Subscribe email:', email);
    setEmail('');
  };
  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section);
  };
  return <footer className="w-full bg-gold text-cream">
      {/* Main Footer Content */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-12 py-8 sm:py-10 md:py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 lg:gap-8">
          
          {/* Column 1 - Brand (Always visible) */}
          <div className="lg:col-span-1">
            <a href="/" className="inline-block mb-3 sm:mb-4">
              <img 
                src="/suqa-oud-logo.svg" 
                alt="SUQA OUD" 
                className="h-[52px] sm:h-16 w-auto brightness-0 invert"
              />
            </a>
            <p className="text-cream/70 text-lg sm:text-xl leading-relaxed mb-4 sm:mb-6">
              {t('footer.brandDescription')}
            </p>
            <p className="text-[15px] sm:text-lg tracking-[0.12em] sm:tracking-[0.15em] uppercase mb-3 sm:mb-4">
              {t('footer.followUs')}
            </p>
            <div className={`flex items-center gap-4 sm:gap-5 ${isRTL ? 'flex-row-reverse justify-end' : ''}`}>
              {/* Instagram Icon */}
              <a href="https://www.instagram.com/suqaoud?igsh=MTc3ZnN2N3AyaXAwdQ==" target="_blank" rel="noopener noreferrer" className="group relative hover:scale-110 transition-all duration-300 p-2 -m-2 min-w-[44px] min-h-[44px] flex items-center justify-center" aria-label="Follow us on Instagram">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="transition-all duration-300">
                  <defs>
                    <linearGradient id="instagramGradient" x1="0%" y1="100%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#FCAF45" />
                      <stop offset="25%" stopColor="#F77737" />
                      <stop offset="50%" stopColor="#F56040" />
                      <stop offset="75%" stopColor="#C13584" />
                      <stop offset="100%" stopColor="#833AB4" />
                    </linearGradient>
                  </defs>
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" stroke="currentColor" strokeWidth="1.5" className="group-hover:stroke-[url(#instagramGradient)] transition-all duration-300" />
                  <circle cx="12" cy="12" r="3.5" stroke="currentColor" strokeWidth="1.5" className="group-hover:stroke-[url(#instagramGradient)] transition-all duration-300" />
                  <circle cx="17.5" cy="6.5" r="1.25" fill="currentColor" className="group-hover:fill-[#C13584] transition-all duration-300" />
                </svg>
              </a>

              {/* TikTok Icon */}
              <a href="https://www.tiktok.com/@suqaoud?_r=1&_t=ZS-924vJot38N8" target="_blank" rel="noopener noreferrer" className="group relative hover:scale-110 transition-all duration-300 p-2 -m-2 min-w-[44px] min-h-[44px] flex items-center justify-center" aria-label="Follow us on TikTok">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="transition-all duration-300">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" className="group-hover:fill-[#00F2EA] transition-all duration-300" />
                </svg>
              </a>

              {/* Facebook Icon */}
              <a href="https://www.facebook.com/share/1GsEX2SwCt/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="group relative hover:scale-110 transition-all duration-300 p-2 -m-2 min-w-[44px] min-h-[44px] flex items-center justify-center" aria-label="Follow us on Facebook">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="transition-all duration-300">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover:stroke-[#1877F2] transition-all duration-300" />
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2 - THE HOUSE OF SUQA OUD (Accordion on mobile) */}
          <div className="lg:col-span-1">
            <button onClick={() => toggleSection('house')} className="w-full flex items-center justify-between py-3 border-b border-cream/20 lg:border-0 lg:pointer-events-none">
              <h4 className="text-[15px] sm:text-lg tracking-[0.15em] sm:tracking-[0.2em] uppercase font-normal">
                {t('footer.houseOfSuqa')}
              </h4>
              <ChevronDown className={`h-4 w-4 transition-transform lg:hidden ${openSection === 'house' ? 'rotate-180' : ''}`} />
            </button>
            <ul className={`space-y-2 sm:space-y-3 overflow-hidden transition-all duration-300 ${openSection === 'house' ? 'max-h-60 pt-3' : 'max-h-0 lg:max-h-none lg:pt-4 lg:mt-2'}`}>
              <li>
                <Link to="/the-experience" className="text-cream/70 text-lg sm:text-xl hover:text-cream transition-colors block py-1">
                  {t('nav.theExperience')}
                </Link>
              </li>
              <li>
                <Link to="/our-story" className="text-cream/70 text-lg sm:text-xl hover:text-cream transition-colors block py-1">
                  {t('footer.ourStory')}
                </Link>
              </li>
              <li>
                <Link to="/our-philosophy" className="text-cream/70 text-lg sm:text-xl hover:text-cream transition-colors block py-1">
                  {t('footer.ourPhilosophy')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3 - CUSTOMER SERVICE (Accordion on mobile) */}
          <div className="lg:col-span-1">
            <button onClick={() => toggleSection('service')} className="w-full flex items-center justify-between py-3 border-b border-cream/20 lg:border-0 lg:pointer-events-none">
              <h4 className="text-[15px] sm:text-lg tracking-[0.15em] sm:tracking-[0.2em] uppercase font-normal">
                {t('footer.customerService')}
              </h4>
              <ChevronDown className={`h-4 w-4 transition-transform lg:hidden ${openSection === 'service' ? 'rotate-180' : ''}`} />
            </button>
            <ul className={`space-y-2 sm:space-y-3 overflow-hidden transition-all duration-300 ${openSection === 'service' ? 'max-h-80 pt-3' : 'max-h-0 lg:max-h-none lg:pt-4 lg:mt-2'}`}>
              <li>
                <Link to="/shipping-policy" className="text-cream/70 text-lg sm:text-xl hover:text-cream transition-colors block py-1">
                  {t('footer.shippingPolicy')}
                </Link>
              </li>
              <li>
                <Link to="/return-policy" className="text-cream/70 text-lg sm:text-xl hover:text-cream transition-colors block py-1">
                  {t('footer.returnPolicy')}
                </Link>
              </li>
              <li>
                <a href="mailto:contact@suqaoud.com" className="text-cream/70 text-lg sm:text-xl hover:text-cream transition-colors block py-1">
                  {t('footer.contactUs')}
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4 - LEGAL (Accordion on mobile) */}
          <div className="lg:col-span-1">
            <button onClick={() => toggleSection('legal')} className="w-full flex items-center justify-between py-3 border-b border-cream/20 lg:border-0 lg:pointer-events-none">
              <h4 className="text-[15px] sm:text-lg tracking-[0.15em] sm:tracking-[0.2em] uppercase font-normal">
                {t('footer.legal')}
              </h4>
              <ChevronDown className={`h-4 w-4 transition-transform lg:hidden ${openSection === 'legal' ? 'rotate-180' : ''}`} />
            </button>
            <ul className={`space-y-2 sm:space-y-3 overflow-hidden transition-all duration-300 ${openSection === 'legal' ? 'max-h-40 pt-3' : 'max-h-0 lg:max-h-none lg:pt-4 lg:mt-2'}`}>
              <li>
                <Link to="/privacy-policy" className="text-cream/70 text-lg sm:text-xl hover:text-cream transition-colors block py-1">
                  {t('footer.privacyPolicy')}
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Payment Methods Row */}
      <div className="border-t border-cream/10">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-12 py-4 sm:py-6">
          <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-3 md:gap-4">
            {/* American Express */}
            <div className="w-8 h-5 sm:w-10 sm:h-6 bg-cream/10 rounded flex items-center justify-center">
              <svg viewBox="0 0 38 24" className="h-3 sm:h-4" fill="currentColor">
                <path d="M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3z" fill="#006FCF" />
                <path d="M8.971 10.268l.774 1.876H8.203l.768-1.876zm16.075.078h-2.977v.827h2.934v1.239h-2.934v.907h2.977v1.104h-4.624V9.169h4.624v1.177zm-9.479-1.177l1.749 4.101v-4.101h2.218l.923 2.533.95-2.533h2.188v5.354h-1.382v-3.968l-1.08 2.937h-1.269l-1.111-2.937v3.968h-2.502l-.442-1.126H12.31l-.463 1.126H10.28l2.073-5.354h2.214zm-8.548 0h1.735l2.016 3.896v-3.896h1.7v5.354H10.82l-2.002-3.911v3.911H7.019V9.169z" fill="#FFF" />
              </svg>
            </div>
            {/* Apple Pay */}
            <div className="w-8 h-5 sm:w-10 sm:h-6 bg-cream/10 rounded flex items-center justify-center">
              <svg viewBox="0 0 38 24" className="h-3 sm:h-4" fill="currentColor">
                <path d="M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3z" fill="#000" />
                <path d="M13.313 7.027c-.388.457-.998.813-1.604.762-.076-.606.221-1.252.568-1.649.388-.465 1.064-.803 1.612-.829.063.623-.186 1.244-.576 1.716zm.571 2.429c-.89-.052-1.648.504-2.072.504-.432 0-1.081-.483-1.784-.466-.918.017-1.767.534-2.238 1.355-.956 1.648-.254 4.087.681 5.427.457.665.999 1.406 1.716 1.38.682-.026.944-.44 1.767-.44.823 0 1.059.44 1.784.423.742-.009 1.21-.665 1.667-1.33.52-.762.733-1.498.75-1.539-.017-.009-1.442-.554-1.459-2.2-.017-1.381 1.127-2.041 1.178-2.076-.649-.951-1.657-1.056-2.007-1.08l.017.042zm5.127-1.39v8.621h1.615v-2.951h2.234c2.04 0 3.474-1.398 3.474-3.343 0-1.944-1.408-3.327-3.415-3.327H19.01zm1.615 1.33h1.864c1.4 0 2.2.75 2.2 2.005 0 1.256-.8 2.014-2.209 2.014h-1.855V9.395zm8.23 7.36c1.015 0 1.959-.513 2.387-1.33h.034v1.254h1.497v-5.306c0-1.505-1.204-2.474-3.059-2.474-1.716 0-2.996.986-3.046 2.34h1.455c.119-.64.699-1.066 1.54-1.066.996 0 1.556.467 1.556 1.33v.583l-2.037.12c-1.894.111-2.918.89-2.918 2.237 0 1.364 1.058 2.312 2.59 2.312zm.432-1.203c-.868 0-1.42-.415-1.42-1.058 0-.656.53-1.041 1.548-1.101l1.81-.112v.6c0 .98-.83 1.671-1.938 1.671z" fill="#FFF" />
              </svg>
            </div>
            {/* Google Pay */}
            <div className="w-8 h-5 sm:w-10 sm:h-6 bg-cream/10 rounded flex items-center justify-center">
              <svg viewBox="0 0 38 24" className="h-3 sm:h-4">
                <path d="M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3z" fill="#FFF" />
                <path d="M18.093 12.191v3.096h-.983V8h2.604c.629 0 1.18.209 1.654.627.483.418.725.929.725 1.534 0 .613-.242 1.125-.725 1.534-.465.418-1.016.627-1.654.627h-1.621v-.131zm0-3.261v2.33h1.638c.37 0 .684-.131.93-.385.256-.254.388-.565.388-.942 0-.369-.132-.68-.388-.934-.246-.254-.56-.377-.93-.377h-1.638v.308zM24.3 10.4c.72 0 1.291.194 1.712.582.421.388.631.927.631 1.617v3.275h-.939v-.738h-.042c-.404.606-.945.91-1.621.91-.58 0-1.063-.173-1.45-.52-.387-.346-.58-.78-.58-1.3 0-.55.203-.989.61-1.318.406-.328.949-.493 1.628-.493.58 0 1.054.106 1.424.32v-.224c0-.346-.138-.639-.413-.877-.276-.238-.604-.357-.985-.357-.57 0-1.02.243-1.353.728l-.866-.546c.49-.717 1.215-1.076 2.172-1.076l.072-.003zm-1.271 3.846c0 .262.11.482.329.659.22.177.473.265.76.265.42 0 .79-.157 1.11-.47.32-.314.48-.68.48-1.1-.303-.245-.724-.368-1.263-.368-.392 0-.72.096-.983.287-.263.192-.394.43-.433.727zm8.156-3.675l-3.125 7.196h-1.01l1.16-2.492-2.056-4.704h1.063l1.463 3.54h.02l1.424-3.54h1.06z" fill="#5F6368" />
                <path d="M13.066 11.511c0-.334-.028-.655-.083-.963H8.75v1.82h2.422c-.104.568-.422 1.048-.9 1.37v1.14h1.458c.853-.786 1.345-1.944 1.345-3.315l-.009-.052z" fill="#4285F4" />
                <path d="M8.75 15.976c1.215 0 2.234-.402 2.978-1.09l-1.458-1.131c-.403.27-.92.43-1.52.43-1.168 0-2.158-.789-2.51-1.85H4.73v1.166a4.5 4.5 0 0 0 4.02 2.475z" fill="#34A853" />
                <path d="M6.24 12.336a2.695 2.695 0 0 1 0-1.721V9.45H4.73a4.507 4.507 0 0 0 0 4.052l1.51-1.166z" fill="#FBBC04" />
                <path d="M8.75 8.765c.658 0 1.248.227 1.713.67l1.285-1.285c-.777-.723-1.79-1.167-2.998-1.167a4.5 4.5 0 0 0-4.02 2.476l1.51 1.166c.352-1.061 1.342-1.86 2.51-1.86z" fill="#EA4335" />
              </svg>
            </div>
            {/* Mastercard */}
            <div className="w-8 h-5 sm:w-10 sm:h-6 bg-cream/10 rounded flex items-center justify-center">
              <svg viewBox="0 0 38 24" className="h-3 sm:h-4">
                <path d="M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3z" fill="#000" />
                <circle cx="15" cy="12" r="7" fill="#EB001B" />
                <circle cx="23" cy="12" r="7" fill="#F79E1B" />
                <path d="M19 17.77a7 7 0 0 0 0-11.54 7 7 0 0 0 0 11.54z" fill="#FF5F00" />
              </svg>
            </div>
            {/* PayPal */}
            <div className="w-8 h-5 sm:w-10 sm:h-6 bg-cream/10 rounded flex items-center justify-center">
              <svg viewBox="0 0 38 24" className="h-3 sm:h-4">
                <path d="M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3z" fill="#FFF" />
                <path d="M23.317 8.563c-.245-1.121-1.198-1.5-2.357-1.5h-3.067a.475.475 0 0 0-.469.4l-1.24 7.871a.285.285 0 0 0 .281.33h2.003l.503-3.188-.016.1a.473.473 0 0 1 .468-.4h.973c1.914 0 3.412-.777 3.85-3.023.013-.067.024-.131.033-.193.13-.808.001-1.358-.331-1.854l-.631-.543z" fill="#003087" />
              </svg>
            </div>
            {/* Visa */}
            <div className="w-8 h-5 sm:w-10 sm:h-6 bg-cream/10 rounded flex items-center justify-center">
              <svg viewBox="0 0 38 24" className="h-3 sm:h-4">
                <path d="M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3z" fill="#FFF" />
                <path d="M15.764 16.418l1.08-6.667h1.727l-1.08 6.667h-1.727zm7.158-6.495c-.342-.135-.878-.28-1.547-.28-1.705 0-2.906.907-2.917 2.205-.01.96.857 1.495 1.512 1.816.672.328.897.537.894.83-.004.448-.536.653-1.032.653-.689 0-1.055-.101-1.62-.35l-.222-.106-.242 1.495c.403.186 1.147.347 1.92.355 1.813 0 2.992-.895 3.007-2.283.008-.761-.454-1.34-1.452-1.817-.604-.31-.975-.516-.97-.83 0-.278.313-.576.99-.576a2.99 2.99 0 0 1 1.293.256l.155.077.234-1.445z" fill="#1A1F71" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-cream/10 py-4 sm:py-6">
        <p className="text-cream/50 text-[15px] sm:text-lg text-center tracking-wider px-4">
          {t('footer.copyright')}
        </p>
      </div>
    </footer>;
};
export default Footer;