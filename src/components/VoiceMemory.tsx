import { motion } from 'motion/react';
import { Mic, CheckCircle2 } from 'lucide-react';

export default function VoiceMemory() {
  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-12 py-24 lg:py-32 relative">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div className="max-w-xl">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-6xl font-serif text-brand-text mb-8 leading-tight"
          >
            You can just speak. <br />
            <span className="text-brand-primary italic">Hearthly remembers.</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg sm:text-xl text-brand-text/50 font-medium leading-relaxed mb-10"
          >
            No more typing, no more mental checklists. Just tell Hearthly what's on your mind—a reminder, a grocery item, or a school deadline. It handles the rest.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-4 text-brand-primary font-bold text-lg"
          >
            <div className="w-12 h-12 rounded-full bg-brand-primary/10 flex items-center justify-center">
              <Mic className="w-6 h-6" />
            </div>
            Try the demo soon
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative"
        >
          {/* Voice Player UI */}
          <div className="bg-white rounded-[2rem] lg:rounded-[3rem] p-6 lg:p-10 shadow-2xl border border-brand-border/40 relative z-10 overflow-hidden">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 mb-8 lg:mb-10">
               <div className="w-16 h-16 shrink-0 rounded-full bg-brand-peach flex items-center justify-center overflow-hidden border-4 border-white shadow-sm">
                 <img src="/assets/indian-woman-speaking.png" alt="User sending voice note" className="w-full h-full object-cover" />
               </div>
               <div>
                 <p className="text-brand-text font-bold text-lg">"Aarav has football practice tomorrow at 5 PM."</p>
                 <div className="flex items-center gap-2 mt-2">
                   <div className="flex gap-0.5">
                     {[1,2,3,4,5,6,7,8,7,6,5,4,3,2,1].map((h, i) => (
                       <motion.div 
                        key={i}
                        animate={{ height: [4, 4 * (h * 0.4), 4] }}
                        transition={{ repeat: Infinity, duration: 1, delay: i * 0.05 }}
                        className="w-1 bg-brand-primary/30 rounded-full"
                       />
                     ))}
                   </div>
                   <span className="text-[10px] font-bold text-brand-text/30 tracking-widest">0:06</span>
                 </div>
               </div>
            </div>

            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="bg-brand-sage/10 rounded-2xl p-6 flex items-center gap-4 border border-brand-sage/20"
            >
               <div className="w-10 h-10 rounded-full bg-brand-sage text-white flex items-center justify-center shrink-0">
                 <CheckCircle2 className="w-6 h-6" />
               </div>
               <p className="text-[15px] font-bold text-brand-text/70 leading-snug">
                 Got it! Added to tomorrow's plan and reminded at 4 PM.
               </p>
            </motion.div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-brand-primary/5 rounded-full blur-3xl -z-10"></div>
          <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-brand-peach rounded-full blur-[80px] -z-10 opacity-50"></div>
        </motion.div>
      </div>
    </section>
  );
}
