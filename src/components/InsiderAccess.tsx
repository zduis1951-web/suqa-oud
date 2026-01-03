import { useState } from 'react';
import { ArrowRight } from 'lucide-react';

const InsiderAccess = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Newsletter subscription:', email);
    // Handle newsletter subscription
  };

  return (
    <section 
      className="w-full py-10 sm:py-12 md:py-14 lg:py-16 px-4"
      style={{ backgroundColor: '#F7F4EF' }}
    >
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-lg sm:text-xl md:text-2xl tracking-[0.1em] sm:tracking-[0.12em] md:tracking-[0.15em] mb-3 sm:mb-4 text-foreground font-serif">
          JOIN THE KING<span className="text-[#8B7355]">D</span>OM
        </h2>
        
        <p className="text-muted-foreground text-xs sm:text-sm md:text-base mb-6 sm:mb-8 leading-relaxed px-2">
          Receive exclusive content and news from The House of SUQA OUD and be the first to know about product launches and special announcements.
        </p>
        
        <form onSubmit={handleSubmit} className="max-w-sm sm:max-w-md mx-auto mb-4 sm:mb-6 px-2">
          <div className="flex items-center border-b border-gray-400 pb-2">
            <input 
              type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="E-mail"
              required
              className="flex-1 bg-transparent py-2 sm:py-3 outline-none text-sm sm:text-base text-foreground placeholder:text-muted-foreground min-h-[44px]"
            />
            <button 
              type="submit"
              className="p-2 sm:p-3 hover:opacity-70 transition-opacity min-w-[44px] min-h-[44px] flex items-center justify-center"
              aria-label="Subscribe"
            >
              <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 text-foreground" />
            </button>
          </div>
        </form>
        
        <p className="text-[10px] sm:text-xs text-muted-foreground leading-relaxed px-2">
          By clicking subscribe, you are accepting our{' '}
          <a href="#" className="underline hover:text-foreground transition-colors">
            Terms and Conditions
          </a>{' '}
          and{' '}
          <a href="#" className="underline hover:text-foreground transition-colors">
            Privacy Policy
          </a>
          . You can unsubscribe at anytime.
        </p>
      </div>
    </section>
  );
};

export default InsiderAccess;
