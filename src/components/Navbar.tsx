import { Menu } from 'lucide-react';
import { motion } from 'motion/react';

export default function Navbar({ onOpenWaitlist }: { onOpenWaitlist?: () => void }) {
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

        <button className="lg:hidden text-brand-text/70 hover:text-brand-primary transition-colors">
          <Menu className="w-7 h-7" />
        </button>
      </motion.div>
    </nav>
  );
}
