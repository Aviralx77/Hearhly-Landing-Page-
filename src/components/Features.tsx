import { motion } from 'motion/react';
import { Heart } from 'lucide-react';

const FEATURES = [
  {
    title: "AI meal planning",
    desc: "Personalized meals that fit your family, time and energy.",
    image: "/assets/feature-meal.png"
  },
  {
    title: "Voice memory notes",
    desc: "Just speak. Hearthly remembers the rest.",
    image: null, // This will be the Waveform UI
    isVoice: true
  },
  {
    title: "Tomorrow plans",
    desc: "Your day, prepared so you can go on auto-pilot.",
    image: null,
    isPlan: true
  },
  {
    title: "Grocery awareness",
    desc: "Never run out of what matters.",
    image: "/assets/feature-grocery.png"
  },
  {
    title: "Calmer mornings",
    desc: "Start the day with clarity, not chaos.",
    image: "/assets/feature-coffee.png"
  },
  {
    title: "Emotionally-aware planning",
    desc: "Plans that adapt to your stress and bandwidth.",
    image: null,
    isHeart: true
  }
];

export default function Features() {
  return (
    <section id="features" className="max-w-7xl mx-auto px-6 lg:px-12 py-24 lg:py-32 scroll-mt-20">
      <div className="text-left mb-16">
        <h2 className="text-4xl sm:text-5xl font-serif text-brand-text mb-4">
          Hearthly helps lighten <br /> your mental load
        </h2>
        <p className="text-lg text-brand-text/50 font-medium">AI that understands your real life.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {FEATURES.map((feature, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bg-white rounded-[2.5rem] p-8 border border-brand-border/40 shadow-sm hover:shadow-xl hover:shadow-brand-primary/5 transition-all duration-500 flex flex-col justify-between group"
          >
            <div>
              <h3 className="text-xl font-bold text-brand-text mb-3">{feature.title}</h3>
              <p className="text-[15px] text-brand-text/60 leading-relaxed mb-8 font-medium">{feature.desc}</p>
            </div>

            <div className="relative h-48 rounded-2xl overflow-hidden bg-brand-peach/30 flex items-center justify-center">
              {feature.image ? (
                <img 
                  src={feature.image} 
                  alt={feature.title} 
                  className="w-full h-full object-contain p-4 grayscale-[0.2] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 mix-blend-multiply" 
                />
              ) : feature.isVoice ? (
                <div className="w-full h-full flex items-center justify-center p-6 bg-gradient-to-br from-brand-peach to-white">
                   <div className="flex items-center gap-1">
                     {[1,2,3,4,5,4,3,2,1].map((h, i) => (
                       <motion.div 
                        key={i}
                        animate={{ height: [12, 12 * h * 0.5, 12] }}
                        transition={{ repeat: Infinity, duration: 1.5, delay: i * 0.1 }}
                        className="w-1 bg-brand-primary rounded-full"
                       />
                     ))}
                   </div>
                </div>
              ) : feature.isPlan ? (
                <div className="w-full h-full flex flex-col gap-3 p-6 bg-white/60">
                   <div className="flex items-center justify-between mb-2">
                     <div className="w-1/3 h-2 bg-brand-primary/20 rounded-full"></div>
                     <div className="w-8 h-8 rounded-full bg-brand-primary/10 flex items-center justify-center">
                       <div className="w-4 h-4 text-brand-primary">✨</div>
                     </div>
                   </div>
                   <div className="space-y-2">
                     <div className="p-3 bg-white rounded-xl shadow-sm border border-brand-border/20 flex items-center gap-3">
                       <div className="w-4 h-4 rounded-full border-2 border-brand-primary/30"></div>
                       <p className="text-[11px] font-bold text-brand-text">Pack Arnav's bags for picnic</p>
                     </div>
                     <div className="p-3 bg-white rounded-xl shadow-sm border border-brand-border/20 opacity-50 flex items-center gap-3">
                       <div className="w-4 h-4 rounded-full border-2 border-brand-text/20"></div>
                       <p className="text-[11px] font-bold text-brand-text">Milk order @ 7 AM</p>
                     </div>
                   </div>
                </div>
              ) : feature.isHeart ? (
                <div className="w-full h-full flex flex-col items-center justify-center p-8 bg-gradient-to-tr from-brand-peach/50 to-white text-center">
                  <Heart className="w-10 h-10 text-brand-primary mb-4 animate-pulse fill-brand-primary/10" />
                  <p className="text-[13px] font-handwriting text-brand-primary/80 leading-relaxed font-bold italic px-4">
                    "You've been working hard, <br /> take 20 minutes off now :)"
                  </p>
                </div>
              ) : (
                <Heart className="w-20 h-20 text-brand-primary/10" />
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
