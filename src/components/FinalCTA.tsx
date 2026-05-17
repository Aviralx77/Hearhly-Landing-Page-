import { motion } from 'motion/react';

export default function FinalCTA({ onOpenWaitlist }: { onOpenWaitlist?: () => void }) {
  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-12 py-24 relative">
      <motion.div 
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="bg-brand-peach rounded-[4rem] p-12 lg:p-24 flex flex-col lg:flex-row items-center justify-between gap-16 overflow-hidden relative shadow-2xl shadow-brand-primary/10"
      >
        <div className="flex-1 text-center lg:text-left z-10">
          <h2 className="text-5xl sm:text-7xl font-serif text-brand-text mb-6">
            Let tomorrow <br />
            <span className="text-brand-primary italic">feel lighter.</span> ♡
          </h2>
          <p className="text-xl text-brand-text/50 font-bold mb-10">
            You don't have to carry everything alone.
          </p>
          <button 
            onClick={onOpenWaitlist}
            className="px-10 py-5 rounded-full bg-brand-primary text-white font-bold text-lg hover:bg-brand-primary-hover shadow-xl shadow-brand-primary/30 transition-all duration-500 transform hover:-translate-y-1"
          >
            Join the waitlist
          </button>
        </div>

        <div className="flex-1 relative flex justify-center lg:justify-end">
          <div className="relative w-full max-w-sm">
            <img 
              src="/assets/cta-flowers.png" 
              alt="Calming flowers" 
              className="w-full h-auto drop-shadow-2xl animate-float"
            />
            {/* Soft Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white rounded-full blur-[80px] -z-10 opacity-60"></div>
          </div>
        </div>

        {/* Decorative corner accents */}
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-brand-primary/5 rounded-full blur-3xl"></div>
      </motion.div>
    </section>
  );
}
