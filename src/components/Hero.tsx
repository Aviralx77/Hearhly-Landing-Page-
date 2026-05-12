import { Brain, Calendar, Heart, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';

const FADE_UP_ANIMATION_VARIANTS = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 50, damping: 20 } },
};

export default function Hero() {
  return (
    <section className="max-w-6xl mx-auto px-6 lg:px-8 py-12 lg:py-20 relative">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
        {/* Left Content */}
        <motion.div 
          initial="hidden"
          animate="show"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            show: {
              transition: { staggerChildren: 0.15 },
            },
          }}
          className="max-w-2xl"
        >
          <motion.h1 
            variants={FADE_UP_ANIMATION_VARIANTS}
            className="text-5xl sm:text-6xl lg:text-[72px] leading-[1.1] font-serif text-brand-text tracking-tight"
          >
            What if <br />
            <span className="text-brand-primary italic pr-2">tomorrow</span> 
            already<br />
            felt handled? <span className="text-brand-primary/80 font-sans">♡</span>
          </motion.h1>
          
          <motion.p 
            variants={FADE_UP_ANIMATION_VARIANTS}
            className="mt-8 text-lg sm:text-[21px] leading-relaxed text-brand-text/80 max-w-[420px]"
          >
            Hearthly is your AI copilot for home. It plans, remembers and helps you stay ahead—so you can finally breathe a little.
          </motion.p>

          <motion.div 
            variants={FADE_UP_ANIMATION_VARIANTS}
            className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-6"
          >
            <div className="flex flex-col items-start gap-4">
              <div className="p-3 bg-brand-card rounded-2xl text-brand-primary">
                <Brain className="w-6 h-6" strokeWidth={1.5} />
              </div>
              <p className="text-sm font-medium text-brand-text/90 leading-tight">Remembers<br/>what matters</p>
            </div>
            <div className="flex flex-col items-start gap-4">
              <div className="p-3 bg-brand-card rounded-2xl text-brand-primary">
                <Calendar className="w-6 h-6" strokeWidth={1.5} />
              </div>
              <p className="text-sm font-medium text-brand-text/90 leading-tight">Plans around<br/>your real life</p>
            </div>
            <div className="flex flex-col items-start gap-4">
              <div className="p-3 bg-brand-card rounded-2xl text-brand-primary">
                <Heart className="w-6 h-6" strokeWidth={1.5} />
              </div>
              <p className="text-sm font-medium text-brand-text/90 leading-tight">Reduces your<br/>mental load</p>
            </div>
            <div className="flex flex-col items-start gap-4">
              <div className="p-3 bg-brand-card rounded-2xl text-brand-primary">
                <Sparkles className="w-6 h-6" strokeWidth={1.5} />
              </div>
              <p className="text-sm font-medium text-brand-text/90 leading-tight">Creates calm<br/>in the chaos</p>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Image */}
        <motion.div
           initial={{ opacity: 0, filter: "blur(10px)", scale: 0.95 }}
           animate={{ opacity: 1, filter: "blur(0px)", scale: 1 }}
           transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
           className="relative h-[450px] lg:h-[600px] w-full rounded-3xl overflow-hidden shadow-2xl shadow-brand-primary/10 lg:ml-8"
        >
          {/* We use a high quality Unsplash approximation of the cozy, warm vibe in the provided image */}
          <div className="absolute inset-0 bg-gradient-to-r from-brand-bg via-transparent to-transparent z-10 lg:w-32"></div>
          <img 
            src="https://images.unsplash.com/photo-1544006659-f0b21884ce1d?q=80&w=2070&auto=format&fit=crop" 
            alt="Woman smiling gently while drinking coffee and reading a notebook" 
            className="w-full h-full object-cover object-top"
          />
        </motion.div>
      </div>
    </section>
  );
}
