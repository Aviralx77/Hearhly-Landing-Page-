import { Heart, Menu } from 'lucide-react';
import { motion } from 'motion/react';

export default function Navbar() {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="flex items-center justify-between py-8 max-w-6xl mx-auto px-6 lg:px-8 relative z-10"
    >
      <div className="flex items-center gap-2 text-brand-text font-serif text-2xl font-semibold tracking-wide cursor-pointer">
        <Heart className="w-6 h-6 text-brand-primary fill-transparent" strokeWidth={2} />
        Hearthly
      </div>
      
      <div className="hidden lg:flex items-center gap-10 text-[15px] text-brand-text/80">
        <a href="#about" className="hover:text-brand-primary transition-colors">About Us</a>
        <a href="#how-it-works" className="hover:text-brand-primary transition-colors">How It Works</a>
        <a href="#research" className="hover:text-brand-primary transition-colors">Research</a>
        <a href="#families" className="hover:text-brand-primary transition-colors">Founding Families</a>
      </div>
      
      <div className="hidden lg:block">
        <button className="px-7 py-2.5 rounded-full border shadow-sm border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white transition-all duration-300 font-medium text-sm">
          Join Waitlist
        </button>
      </div>

      <button className="lg:hidden text-brand-text/80 hover:text-brand-primary transition-colors">
        <Menu className="w-6 h-6" />
      </button>
    </motion.nav>
  );
}
