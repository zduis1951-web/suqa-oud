import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Eye, EyeOff, Mail, Lock, Loader2, ArrowLeft } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { useLanguage } from '@/contexts/LanguageContext';
import { toast } from 'sonner';
import { z } from 'zod';

const emailSchema = z.string().email().max(255);
const passwordSchema = z.string().min(6).max(100);

const Auth = () => {
  const navigate = useNavigate();
  const { user, signIn, signUp, loading } = useAuth();
  const { t, isRTL } = useLanguage();
  
  const [mode, setMode] = useState<'signin' | 'signup'>('signin');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<{ email?: string; password?: string; confirmPassword?: string }>({});

  // Redirect if already logged in
  useEffect(() => {
    if (user && !loading) {
      navigate('/');
    }
  }, [user, loading, navigate]);

  const validateForm = (): boolean => {
    const newErrors: typeof errors = {};

    try {
      emailSchema.parse(email);
    } catch {
      newErrors.email = isRTL ? 'البريد الإلكتروني غير صالح' : 'Invalid email address';
    }

    try {
      passwordSchema.parse(password);
    } catch {
      newErrors.password = isRTL ? 'كلمة المرور يجب أن تكون 6 أحرف على الأقل' : 'Password must be at least 6 characters';
    }

    if (mode === 'signup' && password !== confirmPassword) {
      newErrors.confirmPassword = isRTL ? 'كلمات المرور غير متطابقة' : 'Passwords do not match';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsSubmitting(true);
    setErrors({});

    try {
      let error;
      if (mode === 'signin') {
        error = await signIn(email, password);
      } else {
        error = await signUp(email, password);
      }

      if (error) {
        if (error.message.includes('Invalid login credentials')) {
          toast.error(isRTL ? 'بيانات الدخول غير صحيحة' : 'Invalid email or password');
        } else if (error.message.includes('User already registered')) {
          toast.error(isRTL ? 'هذا البريد الإلكتروني مسجل بالفعل' : 'This email is already registered');
          setMode('signin');
        } else {
          toast.error(error.message);
        }
      } else {
        if (mode === 'signup') {
          toast.success(isRTL ? 'تم إنشاء الحساب بنجاح!' : 'Account created successfully!');
        }
        navigate('/');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background flex">
      {/* Left Side - Form */}
      <div className="flex-1 flex flex-col justify-center px-8 md:px-16 lg:px-24 py-12">
        {/* Back Button */}
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={() => navigate('/')}
          className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-12 self-start"
        >
          <ArrowLeft className="h-5 w-5" />
          <span>{isRTL ? 'العودة للرئيسية' : 'Back to Home'}</span>
        </motion.button>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-md w-full mx-auto"
        >
          {/* Logo */}
          <a href="/" className="inline-block mb-8">
            <span className="text-3xl font-display tracking-[0.2em]">SUQA OUD</span>
          </a>

          {/* Title */}
          <h1 className="text-3xl md:text-4xl font-display tracking-wide mb-2">
            {mode === 'signin' ? t('auth.welcomeBack') : t('auth.createYourAccount')}
          </h1>
          <p className="text-muted-foreground mb-8">
            {mode === 'signin' ? t('auth.signInSubtitle') : t('auth.signUpSubtitle')}
          </p>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email */}
            <div>
              <label className="block text-sm font-medium mb-2">{t('auth.email')}</label>
              <div className="relative">
                <Mail className={`absolute top-1/2 -translate-y-1/2 ${isRTL ? 'right-4' : 'left-4'} h-5 w-5 text-muted-foreground`} />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={`w-full ${isRTL ? 'pr-12 pl-4' : 'pl-12 pr-4'} py-4 bg-muted rounded-xl outline-none focus:ring-2 focus:ring-primary/50 transition-all ${errors.email ? 'ring-2 ring-destructive' : ''}`}
                  placeholder={isRTL ? 'أدخل بريدك الإلكتروني' : 'Enter your email'}
                  dir={isRTL ? 'rtl' : 'ltr'}
                />
              </div>
              {errors.email && (
                <p className="text-destructive text-sm mt-1">{errors.email}</p>
              )}
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium mb-2">{t('auth.password')}</label>
              <div className="relative">
                <Lock className={`absolute top-1/2 -translate-y-1/2 ${isRTL ? 'right-4' : 'left-4'} h-5 w-5 text-muted-foreground`} />
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className={`w-full ${isRTL ? 'pr-12 pl-12' : 'pl-12 pr-12'} py-4 bg-muted rounded-xl outline-none focus:ring-2 focus:ring-primary/50 transition-all ${errors.password ? 'ring-2 ring-destructive' : ''}`}
                  placeholder={isRTL ? 'أدخل كلمة المرور' : 'Enter your password'}
                  dir={isRTL ? 'rtl' : 'ltr'}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className={`absolute top-1/2 -translate-y-1/2 ${isRTL ? 'left-4' : 'right-4'} text-muted-foreground hover:text-foreground transition-colors`}
                >
                  {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                </button>
              </div>
              {errors.password && (
                <p className="text-destructive text-sm mt-1">{errors.password}</p>
              )}
            </div>

            {/* Confirm Password (Sign Up only) */}
            {mode === 'signup' && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
              >
                <label className="block text-sm font-medium mb-2">{t('auth.confirmPassword')}</label>
                <div className="relative">
                  <Lock className={`absolute top-1/2 -translate-y-1/2 ${isRTL ? 'right-4' : 'left-4'} h-5 w-5 text-muted-foreground`} />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className={`w-full ${isRTL ? 'pr-12 pl-4' : 'pl-12 pr-4'} py-4 bg-muted rounded-xl outline-none focus:ring-2 focus:ring-primary/50 transition-all ${errors.confirmPassword ? 'ring-2 ring-destructive' : ''}`}
                    placeholder={isRTL ? 'أكد كلمة المرور' : 'Confirm your password'}
                    dir={isRTL ? 'rtl' : 'ltr'}
                  />
                </div>
                {errors.confirmPassword && (
                  <p className="text-destructive text-sm mt-1">{errors.confirmPassword}</p>
                )}
              </motion.div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-4 bg-primary text-primary-foreground font-medium tracking-wide rounded-xl flex items-center justify-center gap-2 hover:bg-primary/90 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="h-5 w-5 animate-spin" />
                  <span>{t('common.loading')}</span>
                </>
              ) : (
                <span>{mode === 'signin' ? t('auth.signInButton') : t('auth.signUpButton')}</span>
              )}
            </button>
          </form>

          {/* Toggle Mode */}
          <p className="text-center mt-8 text-muted-foreground">
            {mode === 'signin' ? t('auth.noAccount') : t('auth.hasAccount')}{' '}
            <button
              onClick={() => {
                setMode(mode === 'signin' ? 'signup' : 'signin');
                setErrors({});
              }}
              className="text-primary font-medium hover:underline"
            >
              {mode === 'signin' ? t('auth.signUp') : t('auth.signIn')}
            </button>
          </p>
        </motion.div>
      </div>

      {/* Right Side - Decorative */}
      <div className="hidden lg:flex flex-1 relative bg-gradient-to-br from-primary/10 via-background to-primary/5">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center p-12">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <span className="text-6xl font-display tracking-[0.3em] text-primary/20">SUQA</span>
              <br />
              <span className="text-8xl font-display tracking-[0.2em] text-primary/30">OUD</span>
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="mt-8 text-lg text-muted-foreground max-w-md mx-auto leading-relaxed"
            >
              {isRTL 
                ? 'حيث الفخامة تُشعر من الداخل، والحضور طبيعي، والقيمة تُخلق ولا تُستعار.'
                : 'Where luxury is felt inwardly, presence is natural, and value is created — not borrowed.'
              }
            </motion.p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
