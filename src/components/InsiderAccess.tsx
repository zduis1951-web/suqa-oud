import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
const InsiderAccess = () => {
  const [email, setEmail] = useState('');
  const {
    t,
    isRTL
  } = useLanguage();
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Newsletter subscription:', email);
    // Handle newsletter subscription
  };

  // Custom title rendering with styled letter
  const renderTitle = () => {
    const title = t('insider.title');
    // Handle the {D} or {ل} styling
    if (title.includes('{') && title.includes('}')) {
      const parts = title.split(/\{|\}/);
      return <>
          {parts[0]}
          <span className="text-gold">{parts[1]}</span>
          {parts[2]}
        </>;
    }
    return title;
  };
  return <section className="w-full py-10 sm:py-12 md:py-14 lg:py-16 px-4" style={{
    backgroundColor: '#F7F4EF'
  }}>
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-lg sm:text-xl tracking-[0.1em] sm:tracking-[0.12em] md:tracking-[0.15em] mb-3 sm:mb-4 text-foreground font-serif md:text-4xl">
          {renderTitle()}
        </h2>
        
        <p className="text-muted-foreground text-xs sm:text-sm md:text-base mb-6 sm:mb-8 leading-relaxed px-2">
          {t('insider.description')}
        </p>
        
        <form onSubmit={handleSubmit} className="max-w-sm sm:max-w-md mx-auto mb-4 sm:mb-6 px-2">
          <div className="flex items-center border border-foreground/30 rounded-sm bg-white shadow-sm">
            <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder={t('insider.emailPlaceholder')} required className="flex-1 bg-transparent px-4 py-3 sm:py-4 outline-none text-sm sm:text-base text-foreground placeholder:text-muted-foreground min-h-[48px]" dir={isRTL ? 'rtl' : 'ltr'} />
            <button type="submit" className="px-4 sm:px-5 py-3 sm:py-4 bg-foreground text-background hover:bg-foreground/90 transition-colors min-w-[48px] min-h-[48px] flex items-center justify-center" aria-label={t('insider.subscribe')}>
              <ArrowRight className={`w-5 h-5 sm:w-6 sm:h-6 ${isRTL ? 'rotate-180' : ''}`} />
            </button>
          </div>
        </form>
        
        <p className="text-[10px] sm:text-xs text-muted-foreground leading-relaxed px-2">
          {t('insider.termsNotice')}{' '}
          <a href="#" className="underline hover:text-foreground transition-colors">
            {t('insider.termsLink')}
          </a>{' '}
          {t('insider.andText')}{' '}
          <a href="#" className="underline hover:text-foreground transition-colors">
            {t('insider.privacyLink')}
          </a>
          {t('insider.unsubscribeNotice')}
        </p>
      </div>
    </section>;
};
export default InsiderAccess;