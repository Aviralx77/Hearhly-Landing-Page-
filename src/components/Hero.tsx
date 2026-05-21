import { motion } from 'motion/react';
import { ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';

const FADE_UP = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 40, damping: 24 } },
};

export default function Hero({ onOpenWaitlist }: { onOpenWaitlist?: () => void }) {
  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-12 py-12 lg:py-24 relative overflow-visible">
      <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-16 lg:gap-24 items-center">
        
        {/* Left: Content */}
        <motion.div 
          initial="hidden"
          animate="show"
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.2 } }
          }}
          className="relative z-20"
        >
          <motion.h1 
            variants={FADE_UP}
            className="text-6xl sm:text-7xl lg:text-[88px] leading-[0.95] font-serif text-brand-text tracking-tight mb-10"
          >
            What if <br />
            <span className="text-brand-primary italic font-serif relative">
              tomorrow
              <svg className="absolute -bottom-2 left-0 w-full h-3 text-brand-primary/20" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0 5 Q 25 0, 50 5 T 100 5" fill="none" stroke="currentColor" strokeWidth="4" />
              </svg>
            </span> <br />
            already <br />
            felt handled? <span className="text-brand-primary/60 font-sans font-light">♡</span>
          </motion.h1>

          <motion.p 
            variants={FADE_UP}
            className="text-xl sm:text-2xl text-brand-text/60 leading-relaxed max-w-lg mb-12 font-medium text-balance"
          >
            Hearthly is your AI copilot for home. It plans, remembers and helps you stay ahead—so you can finally <span className="text-brand-text/90">breathe</span>.
          </motion.p>

          <motion.div variants={FADE_UP} className="flex flex-wrap gap-5 mb-14">
            <button 
              onClick={onOpenWaitlist}
              className="px-10 py-5 rounded-full bg-brand-primary text-white hover:bg-brand-primary-hover transition-all duration-500 font-bold text-lg shadow-[0_20px_40px_-10px_rgba(218,122,95,0.4)] transform hover:-translate-y-1 active:scale-95 flex items-center gap-3"
            >
              Join the waitlist
              <ArrowRight className="w-5 h-5" />
            </button>
            <a href="#features" className="px-10 py-5 rounded-full border-2 border-brand-primary/20 text-brand-primary hover:border-brand-primary hover:bg-brand-primary/5 transition-all duration-500 font-bold text-lg flex items-center justify-center">
              See how it works
            </a>
          </motion.div>

          <motion.div variants={FADE_UP} className="flex items-center gap-5">
            <div className="flex -space-x-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-12 h-12 rounded-full border-4 border-brand-bg bg-brand-peach overflow-hidden shadow-sm">
                  <img src={`https://i.pravatar.cc/150?u=hearthly${i}`} alt="User" className="w-full h-full object-cover grayscale-[0.3]" />
                </div>
              ))}
            </div>
            <div className="text-sm font-bold text-brand-text/40 leading-tight">
              <span className="text-brand-text/80 block">Built with real women & families</span>
              Early access coming soon ✨
            </div>
          </motion.div>
        </motion.div>

        {/* Right: Immersive Composition */}
        <div className="relative mb-20 lg:mb-0">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1.8, ease: "easeOut" }}
            className="relative z-10"
          >
            {/* Cinematic Hero Image */}
            <div className="relative h-[450px] sm:h-[500px] lg:h-[720px] w-full rounded-[2rem] lg:rounded-[3rem] overflow-hidden shadow-[0_48px_80px_-16px_rgba(0,0,0,0.12)] border-8 lg:border-[12px] border-white">
              <div className="absolute inset-0 bg-gradient-to-t from-brand-primary/10 to-transparent mix-blend-overlay"></div>
              <img 
                src="/assets/hero-woman-premium.png" 
                alt="Woman finding peace at home" 
                className="w-full h-full object-cover object-center scale-105 hover:scale-110 transition-transform duration-[4s]"
              />
            </div>

            {/* Floating Tomorrow Plan Card - MOVED to avoid face overlap */}
            <motion.div 
              initial={{ x: 60, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 1, duration: 1.2 }}
              className="absolute left-4 lg:-left-20 -bottom-12 lg:bottom-auto lg:top-1/3 translate-y-0 lg:-translate-y-1/2 w-[280px] sm:w-80 glass-effect p-6 rounded-[2rem] shadow-2xl border border-white/60 z-30 glow-soft"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-brand-primary/10 rounded-lg flex items-center justify-center text-brand-primary">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <span className="font-bold text-sm text-brand-text">Tomorrow plan</span>
                </div>
                <div className="flex gap-1">
                  <div className="w-1.5 h-1.5 bg-brand-primary/20 rounded-full"></div>
                  <div className="w-1.5 h-1.5 bg-brand-primary/20 rounded-full"></div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="p-4 bg-white/60 rounded-2xl border border-white/40">
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-[10px] font-bold text-brand-primary uppercase tracking-widest">Meals</span>
                    <span className="text-[10px] font-bold text-brand-text/30">15 min</span>
                  </div>
                  <p className="text-sm font-bold text-brand-text">Besan chilla + fruit</p>
                </div>
                
                <div className="p-4 bg-white/60 rounded-2xl border border-white/40 opacity-60">
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-[10px] font-bold text-brand-text/40 uppercase tracking-widest">Reminders</span>
                    <span className="text-[10px] font-bold text-brand-text/30">3</span>
                  </div>
                  <p className="text-sm font-bold text-brand-text">Soccer practice @ 5</p>
                </div>

                <div className="pt-2">
                  <div className="bg-brand-primary/5 rounded-2xl p-4 flex items-center gap-3 border border-brand-primary/10">
                    <CheckCircle2 className="w-5 h-5 text-brand-primary" />
                    <p className="text-[11px] font-bold text-brand-text/60 leading-tight">
                      Mornings feel rushed? <br />
                      <span className="text-brand-primary">Breakfast handled.</span>
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Quick Note Bubble */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.5, duration: 1 }}
              className="absolute top-4 right-4 lg:top-auto lg:-bottom-8 lg:right-12 bg-white px-6 py-4 rounded-2xl shadow-xl border border-brand-border/40 z-30 max-w-[200px]"
            >
              <p className="text-xs font-semibold text-brand-text/60 leading-relaxed italic text-center">
                "Quick breakfast because mornings feel rushed"
              </p>
            </motion.div>
          </motion.div>

          {/* Background Accents */}
          <div className="absolute -top-12 -right-12 w-64 h-64 bg-brand-peach/40 rounded-full blur-[80px] -z-10"></div>
          <div className="absolute -bottom-12 -left-12 w-80 h-80 bg-brand-sage/20 rounded-full blur-[100px] -z-10"></div>
        </div>
      </div>
    </section>
  );
}
