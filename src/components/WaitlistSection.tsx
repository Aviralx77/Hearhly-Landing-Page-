import { Mail, Lock } from 'lucide-react';
import { motion } from 'motion/react';

export default function WaitlistSection() {
  return (
    <section className="max-w-6xl mx-auto px-6 lg:px-8 mt-12 mb-16 relative z-20">
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="bg-brand-card rounded-[2rem] p-8 sm:p-12 lg:p-16 flex flex-col lg:flex-row gap-12 lg:gap-24 items-center justify-between border border-brand-border/50 shadow-xl shadow-brand-primary/5"
      >
        <div className="flex-1 max-w-lg">
          <h2 className="text-3xl sm:text-4xl font-serif text-brand-text mb-6 leading-tight">
            We're designing Hearthly with <span className="text-brand-primary italic">real women and families</span>.
          </h2>
          <p className="text-[17px] text-brand-text/80 leading-relaxed mb-8">
            Join the waitlist and help shape a product that truly understands your world.
          </p>
          
          <div className="relative inline-block mt-4 lg:mt-8">
            <svg className="absolute -top-6 -left-8 w-12 h-12 text-brand-primary opacity-60" viewBox="0 0 49 43" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M47.5 1.5C38.3333 8.16667 17.1 22.8 5.5 27.5C10.1667 27.8333 21 28.1 26 26" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              <path d="M5.5 27.5C6.16667 21 8.3 7 11.5 1.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
            <span className="font-handwriting text-2xl text-brand-primary ml-6 transform -rotate-2 inline-block">
              Be the first to know
            </span>
          </div>
        </div>

        <div className="flex-1 w-full max-w-md bg-transparent">
          <div className="flex flex-col gap-4">
            <div className="text-brand-text font-medium mb-1">Tell us your email to join the waitlist</div>
            
            <div className="relative group">
              <input 
                type="email" 
                placeholder="Enter your email address" 
                className="w-full bg-white px-5 py-4 pr-12 rounded-xl text-brand-text placeholder:text-brand-text/40 border border-brand-border outline-none focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary/50 transition-all shadow-sm"
              />
              <Mail className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-brand-primary/60 group-focus-within:text-brand-primary transition-colors" />
            </div>

            <button className="w-full bg-brand-primary hover:bg-brand-primary-hover text-white font-medium text-[17px] py-4 rounded-xl transition-all duration-300 shadow-md shadow-brand-primary/20 transform hover:-translate-y-0.5 active:translate-y-0">
              Join the waitlist
            </button>
            
            <div className="flex items-center justify-center gap-2 mt-3 text-brand-text/60 text-sm">
              <Lock className="w-3.5 h-3.5" />
              <span>We respect your inbox. No spam, ever.</span>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
