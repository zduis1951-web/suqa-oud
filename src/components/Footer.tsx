import { useState } from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Subscribe email:', email);
    setEmail('');
  };

  return (
    <footer className="w-full bg-gold text-cream">
      {/* Main Footer Content */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-6">
          
          {/* Column 1 - Brand */}
          <div className="lg:col-span-1">
            <h3 className="font-serif text-lg tracking-[0.2em] mb-4">SUQA OUD</h3>
            <p className="text-cream/70 text-sm leading-relaxed mb-6">
              High Perfumery from the Sultanate of Oman, founded in 2022.
            </p>
            <p className="text-xs tracking-[0.15em] uppercase mb-4">
              Follow us for exclusive news and updates:
            </p>
            <div className="flex items-center gap-4">
              {/* Instagram Icon */}
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity" aria-label="Instagram">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
              {/* Facebook Icon */}
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity" aria-label="Facebook">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2 - THE HOUSE OF SUQA OUD */}
          <div className="lg:col-span-1">
            <h4 className="text-xs tracking-[0.2em] uppercase mb-6 font-normal">
              The House of SUQA OUD
            </h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-cream/70 text-sm hover:text-cream transition-colors">
                  Store Locator
                </a>
              </li>
              <li>
                <a href="#" className="text-cream/70 text-sm hover:text-cream transition-colors">
                  Our Story – The Gift Of Kings
                </a>
              </li>
              <li>
                <a href="#" className="text-cream/70 text-sm hover:text-cream transition-colors">
                  Our Philosophy
                </a>
              </li>
              <li>
                <a href="#" className="text-cream/70 text-sm hover:text-cream transition-colors">
                  Visitor's Centre
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3 - CUSTOMER SERVICE */}
          <div className="lg:col-span-1">
            <h4 className="text-xs tracking-[0.2em] uppercase mb-6 font-normal">
              Customer Service
            </h4>
            <ul className="space-y-3">
              <li>
                <Link to="/shipping-policy" className="text-cream/70 text-sm hover:text-cream transition-colors">
                  Shipping Policy
                </Link>
              </li>
              <li>
                <Link to="/return-policy" className="text-cream/70 text-sm hover:text-cream transition-colors">
                  Return Policy
                </Link>
              </li>
              <li>
                <a href="#" className="text-cream/70 text-sm hover:text-cream transition-colors">
                  Payment Methods
                </a>
              </li>
              <li>
                <a href="#" className="text-cream/70 text-sm hover:text-cream transition-colors">
                  Accessibility Statement
                </a>
              </li>
              <li>
                <a href="#" className="text-cream/70 text-sm hover:text-cream transition-colors">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="text-cream/70 text-sm hover:text-cream transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4 - LEGAL */}
          <div className="lg:col-span-1">
            <h4 className="text-xs tracking-[0.2em] uppercase mb-6 font-normal">
              Legal
            </h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-cream/70 text-sm hover:text-cream transition-colors">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <Link to="/privacy-policy" className="text-cream/70 text-sm hover:text-cream transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <a href="#" className="text-cream/70 text-sm hover:text-cream transition-colors">
                  Cookie Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Column 5 - SIGN UP */}
          <div className="lg:col-span-1">
            <h4 className="text-xs tracking-[0.2em] uppercase mb-6 font-normal">
              Sign Up
            </h4>
            <p className="text-cream/70 text-sm leading-relaxed mb-4">
              Subscribe and be the first to know about new launches and exclusive news from The House of SUQA OUD.
            </p>
            <form onSubmit={handleSubmit} className="mb-4">
              <input 
                type="email" 
                value={email} 
                onChange={e => setEmail(e.target.value)} 
                placeholder="E-mail" 
                required 
                className="w-full bg-transparent border border-cream/40 px-4 py-3 text-sm text-cream placeholder:text-cream/50 focus:outline-none focus:border-cream mb-3" 
              />
              <button 
                type="submit" 
                className="w-full bg-cream text-gold text-xs tracking-[0.2em] uppercase py-3 px-6 hover:bg-cream/90 transition-colors font-medium"
              >
                Subscribe
              </button>
            </form>
            <p className="text-cream/50 text-[10px] leading-relaxed">
              By clicking subscribe, you are accepting our{' '}
              <a href="#" className="underline hover:text-cream transition-colors">
                Terms and Conditions
              </a>{' '}
              and{' '}
              <Link to="/privacy-policy" className="underline hover:text-cream transition-colors">
                Privacy Policy
              </Link>
              . You can unsubscribe at anytime.
            </p>
          </div>
        </div>
      </div>

      {/* Payment Methods Row */}
      <div className="border-t border-cream/10">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-6">
          <div className="flex flex-wrap justify-center items-center gap-3 md:gap-4">
            {/* American Express */}
            <div className="w-10 h-6 bg-cream/10 rounded flex items-center justify-center">
              <svg viewBox="0 0 38 24" className="h-4" fill="currentColor">
                <path d="M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3z" fill="#006FCF" />
                <path d="M8.971 10.268l.774 1.876H8.203l.768-1.876zm16.075.078h-2.977v.827h2.934v1.239h-2.934v.907h2.977v1.104h-4.624V9.169h4.624v1.177zm-9.479-1.177l1.749 4.101v-4.101h2.218l.923 2.533.95-2.533h2.188v5.354h-1.382v-3.968l-1.08 2.937h-1.269l-1.111-2.937v3.968h-2.502l-.442-1.126H12.31l-.463 1.126H10.28l2.073-5.354h2.214zm-8.548 0h1.735l2.016 3.896v-3.896h1.7v5.354H10.82l-2.002-3.911v3.911H7.019V9.169z" fill="#FFF" />
              </svg>
            </div>
            {/* Apple Pay */}
            <div className="w-10 h-6 bg-cream/10 rounded flex items-center justify-center">
              <svg viewBox="0 0 38 24" className="h-4" fill="currentColor">
                <path d="M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3z" fill="#000" />
                <path d="M13.313 7.027c-.388.457-.998.813-1.604.762-.076-.606.221-1.252.568-1.649.388-.465 1.064-.803 1.612-.829.063.623-.186 1.244-.576 1.716zm.571 2.429c-.89-.052-1.648.504-2.072.504-.432 0-1.081-.483-1.784-.466-.918.017-1.767.534-2.238 1.355-.956 1.648-.254 4.087.681 5.427.457.665.999 1.406 1.716 1.38.682-.026.944-.44 1.767-.44.823 0 1.059.44 1.784.423.742-.009 1.21-.665 1.667-1.33.52-.762.733-1.498.75-1.539-.017-.009-1.442-.554-1.459-2.2-.017-1.381 1.127-2.041 1.178-2.076-.649-.951-1.657-1.056-2.007-1.08l.017.042zm5.127-1.39v8.621h1.615v-2.951h2.234c2.04 0 3.474-1.398 3.474-3.343 0-1.944-1.408-3.327-3.415-3.327H19.01zm1.615 1.33h1.864c1.4 0 2.2.75 2.2 2.005 0 1.256-.8 2.014-2.209 2.014h-1.855V9.395zm8.23 7.36c1.015 0 1.959-.513 2.387-1.33h.034v1.254h1.497v-5.306c0-1.505-1.204-2.474-3.059-2.474-1.716 0-2.996.986-3.046 2.34h1.455c.119-.64.699-1.066 1.54-1.066.996 0 1.556.467 1.556 1.33v.583l-2.037.12c-1.894.111-2.918.89-2.918 2.237 0 1.364 1.058 2.312 2.59 2.312zm.432-1.203c-.868 0-1.42-.415-1.42-1.058 0-.656.53-1.041 1.548-1.101l1.81-.112v.6c0 .98-.83 1.671-1.938 1.671z" fill="#FFF" />
              </svg>
            </div>
            {/* Google Pay */}
            <div className="w-10 h-6 bg-cream/10 rounded flex items-center justify-center">
              <svg viewBox="0 0 38 24" className="h-4">
                <path d="M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3z" fill="#FFF" />
                <path d="M18.093 12.191v3.096h-.983V8h2.604c.629 0 1.18.209 1.654.627.483.418.725.929.725 1.534 0 .613-.242 1.125-.725 1.534-.465.418-1.016.627-1.654.627h-1.621v-.131zm0-3.261v2.33h1.638c.37 0 .684-.131.93-.385.256-.254.388-.565.388-.942 0-.369-.132-.68-.388-.934-.246-.254-.56-.377-.93-.377h-1.638v.308zM24.3 10.4c.72 0 1.291.194 1.712.582.421.388.631.927.631 1.617v3.275h-.939v-.738h-.042c-.404.606-.945.91-1.621.91-.58 0-1.063-.173-1.45-.52-.387-.346-.58-.78-.58-1.3 0-.55.203-.989.61-1.318.406-.328.949-.493 1.628-.493.58 0 1.054.106 1.424.32v-.224c0-.346-.138-.639-.413-.877-.276-.238-.604-.357-.985-.357-.57 0-1.02.243-1.353.728l-.866-.546c.49-.717 1.215-1.076 2.172-1.076l.072-.003zm-1.271 3.846c0 .262.11.482.329.659.22.177.473.265.76.265.42 0 .79-.157 1.11-.47.32-.314.48-.68.48-1.1-.303-.245-.724-.368-1.263-.368-.392 0-.72.096-.983.287-.263.192-.394.43-.433.727zm8.156-3.675l-3.125 7.196h-1.01l1.16-2.492-2.056-4.704h1.063l1.463 3.54h.02l1.424-3.54h1.06z" fill="#5F6368" />
                <path d="M13.066 11.511c0-.334-.028-.655-.083-.963H8.75v1.82h2.422c-.104.568-.422 1.048-.9 1.37v1.14h1.458c.853-.786 1.345-1.944 1.345-3.315l-.009-.052z" fill="#4285F4" />
                <path d="M8.75 15.976c1.215 0 2.234-.402 2.978-1.09l-1.458-1.131c-.403.27-.92.43-1.52.43-1.168 0-2.158-.789-2.51-1.85H4.73v1.166a4.5 4.5 0 0 0 4.02 2.475z" fill="#34A853" />
                <path d="M6.24 12.336a2.695 2.695 0 0 1 0-1.721V9.45H4.73a4.507 4.507 0 0 0 0 4.052l1.51-1.166z" fill="#FBBC04" />
                <path d="M8.75 8.765c.658 0 1.248.227 1.713.67l1.285-1.285c-.777-.723-1.79-1.167-2.998-1.167a4.5 4.5 0 0 0-4.02 2.476l1.51 1.166c.352-1.061 1.342-1.86 2.51-1.86z" fill="#EA4335" />
              </svg>
            </div>
            {/* Mastercard */}
            <div className="w-10 h-6 bg-cream/10 rounded flex items-center justify-center">
              <svg viewBox="0 0 38 24" className="h-4">
                <path d="M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3z" fill="#000" />
                <circle cx="15" cy="12" r="7" fill="#EB001B" />
                <circle cx="23" cy="12" r="7" fill="#F79E1B" />
                <path d="M19 17.77a7 7 0 0 0 0-11.54 7 7 0 0 0 0 11.54z" fill="#FF5F00" />
              </svg>
            </div>
            {/* PayPal */}
            <div className="w-10 h-6 bg-cream/10 rounded flex items-center justify-center">
              <svg viewBox="0 0 38 24" className="h-4">
                <path d="M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3z" fill="#FFF" />
                <path d="M23.317 8.563c-.245-1.121-1.198-1.5-2.357-1.5h-3.067a.475.475 0 0 0-.469.4l-1.24 7.871a.285.285 0 0 0 .281.33h2.003l.503-3.188-.016.1a.473.473 0 0 1 .468-.4h.973c1.914 0 3.412-.777 3.85-3.023.013-.067.024-.131.033-.193.13-.808.001-1.358-.331-1.854l-.631-.543z" fill="#003087" />
                <path d="M23.648 10.42c-.438 2.246-1.936 3.022-3.85 3.022h-.973a.473.473 0 0 0-.468.4l-.629 3.988a.248.248 0 0 0 .245.287h1.717a.415.415 0 0 0 .41-.35l.017-.087.324-2.057.021-.114a.415.415 0 0 1 .41-.35h.258c1.673 0 2.983-.68 3.366-2.644.16-.822.077-1.508-.346-1.99a1.647 1.647 0 0 0-.472-.348l-.03.243z" fill="#009CDE" />
                <path d="M13.36 8.563c.244-1.121 1.197-1.5 2.356-1.5h3.067a.475.475 0 0 1 .469.4l1.24 7.871a.285.285 0 0 1-.281.33h-2.003l-.503-3.188.016.1a.473.473 0 0 0-.468-.4h-.973c-1.914 0-3.412-.777-3.85-3.023a3.078 3.078 0 0 1-.033-.193c-.13-.808-.001-1.358.331-1.854l.632-.543z" fill="#003087" />
                <path d="M13.029 10.42c.438 2.246 1.936 3.022 3.85 3.022h.973a.473.473 0 0 1 .468.4l.629 3.988a.248.248 0 0 1-.245.287h-1.717a.415.415 0 0 1-.41-.35l-.017-.087-.324-2.057-.021-.114a.415.415 0 0 0-.41-.35h-.258c-1.673 0-2.983-.68-3.366-2.644-.16-.822-.077-1.508.346-1.99.132-.155.29-.273.472-.348l.03.243z" fill="#009CDE" />
              </svg>
            </div>
            {/* Shop Pay */}
            <div className="w-10 h-6 bg-cream/10 rounded flex items-center justify-center">
              <svg viewBox="0 0 38 24" className="h-4">
                <path d="M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3z" fill="#5A31F4" />
                <path d="M10.7 10.6c-.2-.5-.7-.8-1.3-.8-.7 0-1.2.4-1.2 1 0 .5.3.8.8.9l.7.2c1.2.3 2 1 2 2.2 0 1.4-1.2 2.3-2.7 2.3-1.3 0-2.3-.6-2.7-1.7l1.3-.5c.2.6.8 1 1.5 1 .8 0 1.3-.4 1.3-1 0-.5-.4-.8-1-.9l-.6-.2c-1.1-.3-1.9-.9-1.9-2.1 0-1.3 1.1-2.2 2.5-2.2 1.1 0 2 .5 2.4 1.4l-1.1.4zm5.3-1.7v.6c-.4-.5-1-.8-1.8-.8-1.6 0-2.9 1.3-2.9 3.1 0 1.8 1.3 3.1 2.9 3.1.8 0 1.4-.3 1.8-.8v.6c0 1-.6 1.6-1.6 1.6-.7 0-1.3-.3-1.6-.9l-1.2.7c.5.9 1.5 1.4 2.8 1.4 1.8 0 3-1.1 3-3V8.9h-1.4zm-1.6 4.8c-1 0-1.7-.7-1.7-1.9 0-1.1.7-1.9 1.7-1.9 1 0 1.7.7 1.7 1.9-.1 1.2-.7 1.9-1.7 1.9zm8.5-4.1c-.3-.5-.8-.8-1.5-.8-.6 0-1.2.3-1.5.8v-.7h-1.4v7.7h1.4v-4.7c0-.8.5-1.4 1.2-1.4.7 0 1.1.5 1.1 1.3v4.8h1.4v-4.7c0-.8.5-1.4 1.2-1.4.7 0 1.1.5 1.1 1.3v4.8h1.4v-5.1c0-1.4-.8-2.4-2.1-2.4-.8 0-1.5.4-1.8 1-.3-.6-.8-1-1.5-1h-.3l.3.5zM31 8.6c-1.8 0-3.1 1.3-3.1 3.1 0 1.8 1.3 3.1 3.1 3.1 1.8 0 3.1-1.3 3.1-3.1 0-1.8-1.3-3.1-3.1-3.1zm0 5c-1 0-1.7-.8-1.7-1.9 0-1.2.7-1.9 1.7-1.9 1 0 1.7.8 1.7 1.9 0 1.2-.7 1.9-1.7 1.9z" fill="#FFF" />
              </svg>
            </div>
            {/* Visa */}
            <div className="w-10 h-6 bg-cream/10 rounded flex items-center justify-center">
              <svg viewBox="0 0 38 24" className="h-4">
                <path d="M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3z" fill="#FFF" />
                <path d="M15.764 16.418l1.08-6.667h1.727l-1.08 6.667h-1.727zm7.158-6.495c-.342-.135-.878-.28-1.547-.28-1.705 0-2.906.907-2.917 2.205-.01.96.857 1.495 1.512 1.816.672.328.897.537.894.83-.004.448-.536.653-1.032.653-.689 0-1.055-.101-1.62-.35l-.222-.106-.242 1.495c.403.186 1.147.347 1.92.355 1.813 0 2.992-.895 3.007-2.283.008-.761-.454-1.34-1.452-1.817-.604-.31-.975-.516-.97-.83 0-.278.313-.576.99-.576a2.99 2.99 0 0 1 1.293.256l.155.077.234-1.445zm4.44 4.125c.143-.384.688-1.868.688-1.868-.01.018.142-.387.229-.638l.117.576s.33 1.603.4 1.93h-1.434zm2.132-4.297h-1.334c-.413 0-.722.119-.903.556l-2.563 6.111h1.813s.296-.822.363-1.002h2.216c.052.233.21 1.002.21 1.002h1.602l-1.404-6.667zm-14.108 0l-1.69 4.548-.18-.925a4.911 4.911 0 0 0-2.298-2.68l1.546 5.717 1.826-.002 2.717-6.658h-1.921z" fill="#1A1F71" />
                <path d="M10.548 9.752H7.895l-.027.168c2.164.553 3.596 1.886 4.19 3.489l-.604-3.069c-.104-.423-.408-.558-.806-.588h-.1z" fill="#F9A533" />
              </svg>
            </div>
            {/* Diners Club */}
            <div className="w-10 h-6 bg-cream/10 rounded flex items-center justify-center">
              <svg viewBox="0 0 38 24" className="h-4">
                <path d="M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3z" fill="#FFF" />
                <path d="M17.5 19.5c-4.14 0-7.5-3.36-7.5-7.5s3.36-7.5 7.5-7.5c4.14 0 7.5 3.36 7.5 7.5s-3.36 7.5-7.5 7.5z" fill="#0079BE" />
                <path d="M15 8.5v7a3.5 3.5 0 0 1 0-7zm5 0a3.5 3.5 0 0 1 0 7v-7z" fill="#FFF" />
              </svg>
            </div>
            {/* Discover */}
            <div className="w-10 h-6 bg-cream/10 rounded flex items-center justify-center">
              <svg viewBox="0 0 38 24" className="h-4">
                <path d="M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3z" fill="#FFF" />
                <path d="M27.5 21c-5.5 2-15 2.5-23.5-2.5V24h32v-6c-2.5 1.5-5.5 2.5-8.5 3z" fill="#F48024" />
                <circle cx="23" cy="12" r="4" fill="#F48024" />
              </svg>
            </div>
            {/* iDEAL */}
            <div className="w-10 h-6 bg-cream/10 rounded flex items-center justify-center">
              <svg viewBox="0 0 38 24" className="h-4">
                <path d="M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3z" fill="#FFF" />
                <path d="M8 6h5.5c1.4 0 2.5 1.1 2.5 2.5v7c0 1.4-1.1 2.5-2.5 2.5H8V6z" fill="#CC0066" />
                <path d="M16 6h8c1.4 0 2.5 1.1 2.5 2.5v7c0 1.4-1.1 2.5-2.5 2.5h-8V6z" fill="#000" />
                <circle cx="11" cy="9" r="1.5" fill="#FFF" />
                <path d="M9.5 11h3v5h-3v-5z" fill="#FFF" />
              </svg>
            </div>
            {/* Bancontact */}
            <div className="w-10 h-6 bg-cream/10 rounded flex items-center justify-center">
              <svg viewBox="0 0 38 24" className="h-4">
                <path d="M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3z" fill="#FFF" />
                <path d="M8 8h9l-2 8H6l2-8z" fill="#005498" />
                <path d="M15 8h9l-2 8h-9l2-8z" fill="#FFD800" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-cream/10 py-6">
        <p className="text-cream/50 text-xs text-center tracking-wider">
          © {new Date().getFullYear()} SUQA OUD. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
