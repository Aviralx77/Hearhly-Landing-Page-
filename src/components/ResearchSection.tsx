import { motion } from 'motion/react';
import { Heart, Clock, User, Brain, MessageSquare, BarChart3, Leaf, Home, MessageSquare as ChatIcon, Heart as HeartIcon, Quote } from 'lucide-react';

const STATS = [
  {
    icon: Clock,
    value: "7.2",
    unit: "hours",
    text: "Indian women spend 7.2 hours daily on unpaid domestic work.",
    source: "Source: OECD, 2023"
  },
  {
    icon: User,
    value: "63%",
    unit: "",
    text: "of working women in India report burnout.",
    source: "Source: McKinsey, 2023 Women in the Workplace"
  },
  {
    icon: Heart,
    value: "1 in 3",
    unit: "",
    text: "women considered leaving their career entirely — not because of work, but because of home.",
    source: "Source: Avtar & Ibis, 2022 Women in Workforce Study"
  },
  {
    icon: Brain,
    value: "220+",
    unit: "",
    text: "household decisions a working mom makes every single day.",
    source: "Source: Nature Mental Health, 2021 (Cognitive Load Study)"
  }
];

const STICKY_NOTES = [
  { text: "Sometimes I feel like running away.", rotation: "-rotate-2" },
  { text: "I'm the ATM + maid + cook of this house.", rotation: "rotate-1" },
  { text: "The guilt eats me up every night.", rotation: "-rotate-1" },
  { text: "I didn't fail today. I just did too much alone.", rotation: "rotate-2" }
];

const RESEARCH_METRICS = [
  { icon: Home, title: "Home to home", text: "50+ homes visited in 10 cities" },
  { icon: ChatIcon, title: "Surveys", text: "1,200+ working women surveyed across India" },
  { icon: MessageSquare, title: "Communities", text: "1,000+ posts read across r/AskIndianWomen and more" },
  { icon: HeartIcon, title: "Conversations", text: "100+ deep conversations (online & offline)" }
];

export default function ResearchSection() {
  return (
    <section id="research" className="bg-brand-bg py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Header Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-32">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-peach/50 border border-brand-primary/10 text-brand-primary text-xs font-bold tracking-widest uppercase">
              <Heart className="w-3.5 h-3.5 fill-current" />
              Built on real lives
            </div>
            
            <h2 className="text-5xl lg:text-7xl font-serif text-brand-text leading-[1.1]">
              We <span className="italic text-brand-primary font-normal">listened</span> before <br /> we built.
            </h2>
            
            <p className="text-lg text-brand-text/60 leading-relaxed max-w-xl">
              Before designing Hearthly, we spent months listening to working women across India. In homes, in conversations, in surveys, in online communities — and in the quiet moments after long days.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="rounded-[2.5rem] overflow-hidden shadow-2xl shadow-brand-primary/10 border-8 border-white">
              <img 
                src="/assets/images/research/header.png" 
                alt="Cozy desk setup with journal" 
                className="w-full h-auto object-cover aspect-[4/3]"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-brand-primary/5 rounded-full blur-3xl -z-10"></div>
          </motion.div>
        </div>

        {/* 1. THE NUMBERS */}
        <div className="mb-40">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 space-y-4"
          >
            <div className="inline-flex items-center gap-2 text-brand-primary text-xs font-bold tracking-widest uppercase">
              <BarChart3 className="w-4 h-4" />
              1. The Numbers
            </div>
            <h3 className="text-4xl font-serif text-brand-text">The invisible load is real.</h3>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {STATS.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white/60 backdrop-blur-sm p-8 rounded-3xl border border-brand-border/40 shadow-sm hover:shadow-xl hover:shadow-brand-primary/5 transition-all duration-500 flex flex-col h-full"
              >
                <stat.icon className="w-6 h-6 text-brand-primary/40 mb-6" />
                <div className="mb-4">
                  <span className="text-5xl font-serif text-brand-primary">{stat.value}</span>
                  {stat.unit && <span className="text-lg font-serif text-brand-primary ml-1">{stat.unit}</span>}
                </div>
                <p className="text-[15px] font-medium text-brand-text/80 leading-relaxed mb-8 flex-grow">
                  {stat.text}
                </p>
                <div className="text-[11px] font-bold text-brand-text/30 uppercase tracking-wider mt-auto">
                  {stat.source}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* 2. THEIR OWN WORDS */}
        <div className="mb-40 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 space-y-4"
          >
            <div className="inline-flex items-center gap-2 text-brand-primary text-xs font-bold tracking-widest uppercase">
              <ChatIcon className="w-4 h-4" />
              2. Their own words
            </div>
            <h3 className="text-4xl font-serif text-brand-text">Real words from real women.</h3>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {STICKY_NOTES.map((note, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, rotate: i % 2 === 0 ? -5 : 5, scale: 0.9 }}
                whileInView={{ opacity: 1, rotate: i % 2 === 0 ? -1 : 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, type: "spring", stiffness: 100 }}
                className={`bg-[#FFFDF8] p-10 shadow-lg shadow-black/5 aspect-square flex flex-col justify-between relative ${note.rotation} hover:rotate-0 transition-transform duration-500 group`}
                style={{ borderTop: '1px solid #f1f1f1' }}
              >
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-6 bg-brand-border/30 backdrop-blur-sm -rotate-2"></div>
                <Quote className="w-6 h-6 text-brand-primary/20 absolute top-6 left-6" />
                <p className="font-handwriting text-2xl lg:text-3xl text-brand-text/80 leading-snug pt-6">
                  {note.text}
                </p>
                <div className="flex justify-end">
                  <Heart className="w-5 h-5 text-brand-primary/20 fill-current group-hover:text-brand-primary/40 transition-colors" />
                </div>
              </motion.div>
            ))}
          </div>
          
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-12 text-sm font-bold text-brand-text/30 flex items-center justify-center gap-2"
          >
            <Heart className="w-3.5 h-3.5 fill-current" />
            — from conversations with working women across India
          </motion.p>
        </div>

        {/* 3. WHAT WE FOUND */}
        <div className="mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20 space-y-4 max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 text-brand-primary text-xs font-bold tracking-widest uppercase">
              <Leaf className="w-4 h-4" />
              3. What we found
            </div>
            <h3 className="text-4xl lg:text-5xl font-serif text-brand-text leading-tight">
              We didn't find women struggling with productivity. <br />
              We found women carrying <span className="italic text-brand-primary font-normal">invisible mental load.</span>
            </h3>
          </motion.div>

          <div className="grid lg:grid-cols-[1fr_auto_1.2fr] gap-12 items-center">
            {/* Basket Side */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative rounded-[2rem] overflow-hidden border-8 border-white shadow-xl"
            >
              <img 
                src="/assets/images/research/basket.png" 
                alt="Household tasks list" 
                className="w-full h-96 object-cover"
              />
            </motion.div>

            {/* Middle Text */}
            <div className="flex flex-col items-center gap-8 py-12">
              <div className="w-px h-12 bg-brand-primary/20"></div>
              <Heart className="w-4 h-4 text-brand-primary/30" />
              <div className="w-px h-12 bg-brand-primary/20"></div>
            </div>

            {/* Woman Side */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-12"
            >
              <div className="relative rounded-[2rem] overflow-hidden border-8 border-white shadow-xl">
                <img 
                  src="/assets/images/research/woman.png" 
                  alt="Woman drinking tea" 
                  className="w-full h-96 object-cover"
                />
              </div>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto text-center mt-16 space-y-8"
          >
            <p className="text-lg text-brand-text/70 leading-relaxed">
              Remembering meals, schedules, groceries, school timings, family preferences and everyone's needs — all at once. Not because they were failing. <br />
              <span className="text-brand-primary font-bold">Because they were doing too much alone.</span>
            </p>
            
            <div className="w-12 h-px bg-brand-primary/20 mx-auto"></div>

            <div className="flex flex-col items-center gap-4">
               <Heart className="w-6 h-6 text-brand-primary fill-current/10" />
               <p className="text-2xl font-serif text-brand-text italic">
                Hearthly is our answer to what they asked for.
               </p>
            </div>
          </motion.div>
        </div>

        {/* Research Metrics Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white/80 backdrop-blur-md border border-brand-border/40 rounded-[3rem] p-8 lg:p-12 shadow-xl shadow-brand-primary/5 grid sm:grid-cols-2 lg:grid-cols-4 gap-12"
        >
          {RESEARCH_METRICS.map((metric, i) => (
            <div key={i} className="flex items-center gap-6 group">
              <div className="w-14 h-14 rounded-2xl bg-brand-peach/50 flex items-center justify-center text-brand-primary group-hover:scale-110 transition-transform duration-500">
                <metric.icon className="w-7 h-7" strokeWidth={1.5} />
              </div>
              <div className="space-y-1">
                <h4 className="font-serif text-brand-text text-lg">{metric.title}</h4>
                <p className="text-xs font-bold text-brand-text/40 uppercase tracking-wider leading-tight">
                  {metric.text}
                </p>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Final Quote */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-24"
        >
          <p className="font-handwriting text-3xl lg:text-4xl text-brand-primary/80">
            This is not a feature list. <br className="sm:hidden" /> It's someone's life. <Heart className="inline w-5 h-5 ml-1 fill-current" />
          </p>
        </motion.div>

      </div>
    </section>
  );
}
