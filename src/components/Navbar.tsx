import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Navbar({ onOpenWaitlist }: { onOpenWaitlist?: () => void }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="py-10 max-w-7xl mx-auto px-6 lg:px-12 relative z-50">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex items-center justify-between"
      >
        <div className="flex items-center cursor-pointer group relative">
          <img 
            src="/assets/hearthly-logo-transparent.png" 
            alt="Hearthly Logo" 
            className="h-20 lg:h-24 w-auto object-contain transform group-hover:scale-105 transition-transform duration-500 -my-8" 
          />
        </div>
        
        <div className="hidden lg:flex items-center gap-12 text-[15px] text-brand-text/70 font-semibold tracking-wide">
          <a href="#features" className="hover:text-brand-primary transition-colors duration-300">How it works</a>
          {['Our research', 'For families', 'About us'].map((item) => (
            <a key={item} href={`#${item.toLowerCase().replace(/ /g, '-')}`} className="hover:text-brand-primary transition-colors duration-300">
              {item}
            </a>
          ))}
        </div>
        
        <div className="hidden lg:block">
          <button 
            onClick={onOpenWaitlist}
            className="px-8 py-3 rounded-full bg-brand-primary text-white hover:bg-brand-primary-hover transition-all duration-500 font-bold text-[15px] shadow-[0_8px_20px_-6px_rgba(218,122,95,0.4)] transform hover:-translate-y-0.5 active:scale-95"
          >
            Join waitlist
          </button>
        </div>

        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden text-brand-text/70 hover:text-brand-primary transition-colors focus:outline-none"
        >
          {isMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
        </button>
      </motion.div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden mt-6 overflow-hidden bg-brand-cream/90 backdrop-blur-md rounded-3xl border border-brand-border/40 p-6 flex flex-col gap-6"
          >
            <div className="flex flex-col gap-4 font-semibold text-brand-text/70">
              <a 
                href="#features" 
                onClick={() => setIsMenuOpen(false)}
                className="hover:text-brand-primary transition-colors py-2"
              >
                How it works
              </a>
              {['Our research', 'For families', 'About us'].map((item) => (
                <a 
                  key={item} 
                  href={`#${item.toLowerCase().replace(/ /g, '-')}`} 
                  onClick={() => setIsMenuOpen(false)}
                  className="hover:text-brand-primary transition-colors py-2"
                >
                  {item}
                </a>
              ))}
            </div>
            
            <button 
              onClick={() => {
                setIsMenuOpen(false);
                if (onOpenWaitlist) onOpenWaitlist();
              }}
              className="w-full py-4 rounded-full bg-brand-primary text-white hover:bg-brand-primary-hover transition-all duration-300 font-bold text-center shadow-[0_8px_20px_-6px_rgba(218,122,95,0.4)]"
            >
              Join waitlist
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
