import { motion } from 'motion/react';
import { Heart, Home, Users, MessageSquare, Clock, User, Check, ArrowRight, BookOpen, Coffee, Utensils, Moon } from 'lucide-react';

const FAMILY_TYPES = [
  {
    title: "Working mom with young kids",
    description: "Chaotic mornings. Quick breakfasts. Homework reminders. Gentler evenings.",
    image: "/assets/images/families/grid_1.png",
    icon: User
  },
  {
    title: "Couple without kids",
    description: "Late office hours. Flexible dinners. Weekend resets. More time together.",
    image: "/assets/images/families/grid_2.png",
    icon: Users
  },
  {
    title: "Multigenerational home",
    description: "Medication reminders. Different food preferences. Family visits. Shared routines.",
    image: "/assets/images/families/grid_3.png",
    icon: Home
  },
  {
    title: "Long-distance caregiving",
    description: "Checking in on parents. Remembering appointments. Staying connected gently.",
    image: "/assets/images/families/grid_4.png",
    icon: Heart
  }
];

const REMEMBERED_NOTES = [
  { text: "Aarav hates bhindi.", status: "Remembered", color: "bg-[#FFF9F2]", rotation: "-rotate-1" },
  { text: "Thursdays are exhausting.", status: "Lighter dinners planned", color: "bg-[#FFFDF8]", rotation: "rotate-1" },
  { text: "Mom visits every Sunday.", status: "Recurring reminders added", color: "bg-[#F9FBF2]", rotation: "-rotate-2" },
  { text: "Neha's dance class on Wednesdays.", status: "Schedule updated", color: "bg-[#F2F9FF]", rotation: "rotate-2" },
  { text: "We need chai leaves every week!", status: "Added to list", color: "bg-[#FFF2F2]", rotation: "-rotate-1" }
];

const PRESENT_MOMENTS = [
  { image: "/assets/images/families/small_1.png", caption: "Smooth school runs" },
  { image: "/assets/images/families/small_2.png", caption: "Peaceful dinners" },
  { image: "/assets/images/families/small_3.png", caption: "Unwinding together" },
  { image: "/assets/images/families/small_4.png", caption: "Evenings that finally feel like yours" }
];

const METRICS = [
  { icon: Home, value: "10+", label: "cities visited", sub: "home to home" },
  { icon: Users, value: "1,200+", label: "working women", sub: "surveyed" },
  { icon: MessageSquare, value: "1,000+", label: "conversations in", sub: "online communities" },
  { icon: Heart, value: "100+", label: "hours of listening,", sub: "learning & understanding" }
];

export default function FamiliesSection({ onOpenWaitlist }: { onOpenWaitlist?: () => void }) {
  return (
    <section id="families" className="bg-brand-bg py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Hero Section */}
        <div className="grid lg:grid-cols-[1fr_1.1fr] gap-12 items-center mb-40">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-peach/50 border border-brand-primary/10 text-brand-primary text-xs font-bold tracking-widest uppercase">
              <Home className="w-3.5 h-3.5" />
              For Families
            </div>
            
            <h2 className="text-5xl lg:text-7xl font-serif text-brand-text leading-[1.1]">
              Every family <br /> moves differently. <br />
              <span className="italic text-brand-primary font-normal">Hearthly learns your rhythm. <Heart className="inline w-8 h-8 ml-1" /></span>
            </h2>
            
            <p className="text-lg text-brand-text/60 leading-relaxed max-w-lg">
              From messy mornings to quiet nights, Hearthly adapts to the little things that make your home, yours.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
             <div className="rounded-[3rem] overflow-hidden shadow-2xl shadow-brand-primary/10 relative">
                <img 
                  src="/assets/images/families/hero.png" 
                  alt="Cozy family table" 
                  className="w-full h-auto object-cover aspect-[4/3]"
                />
                
                {/* Floating UI Elements */}
                <div className="absolute top-8 right-8 w-64 bg-white/90 backdrop-blur-md p-6 rounded-3xl shadow-xl border border-brand-border/30 animate-float">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-bold text-brand-text/40 uppercase tracking-tighter">Voice note from you</span>
                    <span className="text-[10px] font-bold text-brand-text/30 uppercase">8:47 AM</span>
                  </div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 rounded-full bg-brand-primary/10 flex items-center justify-center text-brand-primary">
                       <Coffee className="w-4 h-4" />
                    </div>
                    <div className="flex-1 h-1 bg-brand-primary/10 rounded-full overflow-hidden">
                       <div className="w-2/3 h-full bg-brand-primary"></div>
                    </div>
                  </div>
                  <p className="text-sm font-medium text-brand-text/80 leading-snug">
                    "Don't forget Aarav's football practice today evening at 5."
                  </p>
                  <div className="flex justify-end mt-2">
                    <Heart className="w-3.5 h-3.5 text-brand-primary/40 fill-current" />
                  </div>
                </div>
             </div>
          </motion.div>
        </div>

        {/* 1. Families look different */}
        <div className="mb-40">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <div className="flex items-center gap-3 text-brand-primary">
                <Users className="w-6 h-6" />
                <h3 className="text-4xl font-serif text-brand-text">Families look different. So do their days.</h3>
              </div>
              <p className="text-lg text-brand-text/40 font-medium">Hearthly fits into every kind of home.</p>
            </motion.div>
            <motion.a 
              href="#features"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="flex items-center gap-2 text-brand-primary font-bold text-sm uppercase tracking-widest hover:gap-4 transition-all"
            >
              See how it works <ArrowRight className="w-4 h-4" />
            </motion.a>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {FAMILY_TYPES.map((type, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group flex flex-col h-full bg-white rounded-[2.5rem] overflow-hidden border border-brand-border/40 hover:shadow-2xl hover:shadow-brand-primary/5 transition-all duration-500"
              >
                <div className="h-64 overflow-hidden relative">
                  <img src={type.image} alt={type.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
                <div className="p-8 space-y-4 flex flex-col flex-grow">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-brand-peach/50 flex items-center justify-center text-brand-primary">
                      <type.icon className="w-5 h-5" />
                    </div>
                    <h4 className="font-serif text-xl text-brand-text leading-tight">{type.title}</h4>
                  </div>
                  <p className="text-[15px] font-medium text-brand-text/60 leading-relaxed">
                    {type.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* 2. Hearthly Remembers Sticky Notes */}
        <div className="mb-40">
           <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20 space-y-4"
          >
            <h3 className="text-4xl font-serif text-brand-text">You told us. Hearthly remembers. <Heart className="inline w-6 h-6 text-brand-primary fill-current/10" /></h3>
            <p className="text-lg text-brand-text/40 font-medium">The little things you say once, Hearthly carries for you.</p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {REMEMBERED_NOTES.map((note, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, rotate: i % 2 === 0 ? -5 : 5 }}
                whileInView={{ opacity: 1, rotate: i % 2 === 0 ? -1 : 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, type: "spring" }}
                className={`${note.color} p-8 shadow-xl shadow-black/5 aspect-square flex flex-col justify-between relative hover:rotate-0 transition-transform duration-500`}
              >
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-5 bg-white/40 backdrop-blur-sm -rotate-1"></div>
                <div className="space-y-4">
                   <div className="w-8 h-8 rounded-lg bg-white/60 flex items-center justify-center text-brand-primary/40">
                      {i === 0 && <Coffee className="w-4 h-4" />}
                      {i === 1 && <Clock className="w-4 h-4" />}
                      {i === 2 && <Users className="w-4 h-4" />}
                      {i === 3 && <BookOpen className="w-4 h-4" />}
                      {i === 4 && <Utensils className="w-4 h-4" />}
                   </div>
                   <p className="font-handwriting text-2xl text-brand-text/80 leading-tight">
                    "{note.text}"
                  </p>
                </div>
                <div className="flex items-center gap-2">
                   <div className="w-5 h-5 rounded-full bg-brand-primary/10 flex items-center justify-center text-brand-primary">
                      <Check className="w-3 h-3" strokeWidth={3} />
                   </div>
                   <span className="text-[10px] font-bold text-brand-text/40 uppercase tracking-widest">{note.status}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* 3. Less remembering Row */}
        <div className="mb-40">
           <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 space-y-4"
          >
            <h3 className="text-4xl font-serif text-brand-text">Less remembering. <br /><span className="text-brand-primary italic font-normal">More being present. <Heart className="inline w-6 h-6 fill-current/10" /></span></h3>
            <p className="text-lg text-brand-text/40 font-medium max-w-xl">Hearthly quietly handles the mental load, so you can focus on what matters most — your people.</p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PRESENT_MOMENTS.map((moment, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="space-y-4"
              >
                <div className="rounded-[2rem] overflow-hidden shadow-lg aspect-video border-4 border-white">
                   <img src={moment.image} alt={moment.caption} className="w-full h-full object-cover" />
                </div>
                <p className="text-center font-serif text-lg text-brand-text/70 italic">{moment.caption}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Real moments Metrics */}
        <div className="mb-40 grid lg:grid-cols-[1fr_auto_1fr] gap-12 items-center bg-brand-peach/20 rounded-[4rem] p-12 lg:p-20 relative overflow-hidden">
           <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--color-brand-primary)_0%,_transparent_70%)] opacity-[0.03]"></div>
           
           <div className="space-y-8 relative z-10">
              <h3 className="text-4xl font-serif text-brand-text">Real moments <br />from real homes <LeafIcon className="inline w-6 h-6 text-brand-primary/40" /></h3>
              <p className="text-brand-text/50 font-medium">Because every home has a story.</p>
              
              <div className="grid grid-cols-2 gap-12 pt-8 border-t border-brand-primary/10">
                 {METRICS.map((metric, i) => (
                   <div key={i} className="space-y-2">
                      <metric.icon className="w-6 h-6 text-brand-primary/40 mb-2" />
                      <div className="text-3xl font-serif text-brand-primary">{metric.value}</div>
                      <div className="text-[11px] font-bold text-brand-text/40 uppercase tracking-widest leading-snug">
                        {metric.label} <br /> {metric.sub}
                      </div>
                   </div>
                 ))}
              </div>
           </div>

           <div className="hidden lg:block w-px h-full bg-brand-primary/10"></div>

           <motion.div
             initial={{ opacity: 0, scale: 0.95 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             className="relative z-10 flex justify-center"
           >
              <div className="relative w-80">
                 <img src="/assets/images/families/journal.png" alt="Built for families journal" className="rounded-3xl shadow-2xl rotate-3" />
                 <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-brand-primary/5 rounded-full blur-3xl -z-10"></div>
              </div>
           </motion.div>
        </div>

        {/* Final Footer CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-brand-primary text-white rounded-[4rem] p-12 lg:p-20 text-center space-y-10 relative overflow-hidden"
        >
          {/* Decorative illustration style elements */}
          <div className="absolute top-12 left-12 opacity-10">
            <Home className="w-24 h-24" />
          </div>
          <div className="absolute bottom-12 right-12 opacity-10">
            <Users className="w-32 h-32" />
          </div>

          <div className="relative z-10 max-w-2xl mx-auto space-y-8">
             <div className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-3xl flex items-center justify-center mx-auto mb-12">
                <Home className="w-10 h-10 text-white" />
             </div>
             <h3 className="text-4xl lg:text-5xl font-serif leading-tight">Every home deserves a little support. <br className="hidden md:block" /> Let Hearthly carry some of the load.</h3>
             
             <div className="pt-6">
                <button 
                  onClick={onOpenWaitlist}
                  className="bg-white text-brand-primary px-12 py-6 rounded-2xl font-bold text-xl hover:bg-brand-peach transition-all shadow-2xl flex items-center gap-3 mx-auto"
                >
                  Join the waitlist <Heart className="w-5 h-5 fill-current" />
                </button>
                <p className="mt-6 text-sm font-bold text-white/60 tracking-widest uppercase">Early access • Be the first to know</p>
             </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

function LeafIcon({ className }: { className?: string }) {
  return (
    <svg 
      className={className}
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="1.5" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
      <path d="M2 21c0-3 1.85-5.36 5.08-6C10.2 14.33 11 15 11 18c0 3-3 3-9 3Z" />
    </svg>
  );
}
