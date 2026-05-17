import { motion } from 'motion/react';
import { Heart, Home, Leaf, Sparkles, Users, BookOpen, Search, ShieldCheck, ArrowRight } from 'lucide-react';

const BELIEFS = [
  {
    icon: Heart,
    text: "Technology should feel supportive, not demanding."
  },
  {
    icon: Home,
    text: "Homes run on invisible work. And that work deserves care too."
  },
  {
    icon: Leaf,
    text: "Planning should feel lighter, not overwhelming."
  },
  {
    icon: Sparkles,
    text: "AI should quietly help, not constantly interrupt."
  }
];

const BUILDING_PILLARS = [
  { icon: Users, text: "We talk to women every day." },
  { icon: BookOpen, text: "We observe real routines." },
  { icon: Search, text: "We test, learn and improve continuously." },
  { icon: ShieldCheck, text: "We design with empathy and privacy first." }
];

export default function AboutSection({ onOpenWaitlist }: { onOpenWaitlist?: () => void }) {
  return (
    <section id="about-us" className="bg-brand-bg py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* 1. Hero Section */}
        <div className="grid lg:grid-cols-[1fr_1.1fr] gap-16 items-center mb-40">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-peach/50 border border-brand-primary/10 text-brand-primary text-xs font-bold tracking-widest uppercase">
              About us
            </div>

            <h2 className="text-5xl lg:text-7xl font-serif text-brand-text leading-[1.1]">
              We built Hearthly <br /> because too many <br /> women were already <br />
              <span className="italic text-brand-primary font-normal">carrying too much alone. <Heart className="inline w-8 h-8 ml-1" /></span>
            </h2>

            <p className="text-lg text-brand-text/60 leading-relaxed max-w-lg">
              Hearthly is an AI companion that quietly carries some of the mental load of home life — so you can focus on what matters most.
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
                src="/assets/images/about/hero_desk.png"
                alt="Hearthly setup"
                className="w-full h-auto object-cover aspect-[4/3]"
              />
            </div>
          </motion.div>
        </div>

        {/* 2. Note from Founder Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-brand-peach/30 rounded-[4rem] p-12 lg:p-24 mb-40 relative overflow-hidden"
        >
          <div className="grid lg:grid-cols-[1fr_auto] gap-16 items-start relative z-10">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 text-brand-primary text-xs font-bold tracking-widest uppercase">
                A note from our founder
              </div>
              <h3 className="text-4xl font-serif text-brand-text leading-tight">
                Hearthly began at home. <Heart className="inline w-6 h-6 text-brand-primary ml-1" />
              </h3>
              <div className="space-y-6 font-handwriting text-2xl text-brand-text/80 leading-relaxed max-w-2xl">
                <p>
                  I grew up watching my mom carry hundreds of invisible responsibilities every day — meals, reminders, groceries, schedules, small things everyone depended on but rarely noticed.
                </p>
                <p>
                  I tried helping wherever I could. <br />
                  But over time, I realized the hardest part wasn't always the work itself.
                </p>
                <p className="text-brand-primary italic">
                  It was the constant mental clutter. <br />
                  The endless remembering. <br />
                  The feeling of carrying an entire home in your head.
                </p>
                <p>
                  That stayed with me.
                </p>
                <p>
                  Hearthly was built from that realization — <br />
                  to quietly carry some of that weight. <Heart className="inline w-6 h-6 text-brand-primary ml-1 fill-current/10" />
                </p>
              </div>
            </div>

            <div className="relative pt-12">
              {/* Polaroid Frame */}
              <div className="bg-white p-6 pb-20 shadow-2xl rotate-2 relative max-w-sm">
                <div className="aspect-square bg-brand-bg/50 border border-brand-border/20 overflow-hidden flex items-center justify-center">
                  {/* Empty placeholder as requested */}
                  <Users className="w-20 h-20 text-brand-text/10" />
                </div>
                <div className="mt-8 space-y-1">
                  <p className="text-xs font-bold text-brand-text/40 uppercase tracking-widest">Founder, Hearthly</p>
                  <p className="font-handwriting text-3xl text-brand-text">Aviral Chauhan <Heart className="inline w-5 h-5 text-brand-primary ml-1" /></p>
                </div>

                {/* Tape decoration */}
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-24 h-8 bg-white/40 backdrop-blur-sm border border-black/5 rotate-1"></div>
              </div>

              {/* Scrap note */}
              <div className="absolute -right-12 top-1/2 -translate-y-1/2 w-56 bg-[#FFFDF2] p-8 shadow-xl -rotate-2 border border-brand-border/20">
                <p className="font-handwriting text-xl text-brand-text/70 leading-snug">
                  "Some ideas come from market gaps. This one came from a home I love."
                </p>
                <div className="mt-4 flex justify-end">
                  <Heart className="w-5 h-5 text-brand-primary/20 fill-current" />
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* 3. What we believe */}
        <div className="mb-40">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h3 className="text-4xl font-serif text-brand-text">What we believe <Heart className="inline w-6 h-6 text-brand-primary ml-1" /></h3>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12">
            {BELIEFS.map((belief, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col items-center text-center space-y-6"
              >
                <div className="w-16 h-16 rounded-full bg-brand-peach/40 flex items-center justify-center text-brand-primary border border-brand-primary/10">
                  <belief.icon className="w-8 h-8" />
                </div>
                <p className="text-lg font-medium text-brand-text/70 leading-relaxed px-4">
                  {belief.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* 4. How we're building Hearthly */}
        <div className="mb-40 grid lg:grid-cols-[1.2fr_1fr] gap-20 items-center">
          <div className="space-y-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h3 className="text-4xl font-serif text-brand-text">How we're building Hearthly <Heart className="inline w-6 h-6 text-brand-primary ml-1" /></h3>
              <p className="text-lg text-brand-text/50 font-medium leading-relaxed">
                We're building Hearthly slowly and thoughtfully — through conversations, feedback, real routines and the small details that make a home feel human.
              </p>
            </motion.div>

            <div className="grid grid-cols-2 gap-8">
              {BUILDING_PILLARS.map((pillar, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="space-y-3"
                >
                  <pillar.icon className="w-8 h-8 text-brand-primary/40" />
                  <p className="text-sm font-bold text-brand-text uppercase tracking-widest leading-snug">
                    {pillar.text}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="rounded-[3rem] overflow-hidden shadow-2xl relative border-8 border-white">
              <img src="/assets/images/about/desk_listening.png" alt="Listening to homes" className="w-full h-auto object-cover aspect-[5/4]" />
            </div>

            {/* Floating card decoration */}
            <div className="absolute -bottom-10 -right-10 bg-white p-8 shadow-xl rounded-2xl max-w-[200px] border border-brand-border/20 rotate-3">
              <p className="font-handwriting text-xl text-brand-text/70 leading-tight">
                "Listening always comes first."
              </p>
              <div className="mt-2 flex justify-end">
                <Heart className="w-4 h-4 text-brand-primary/20 fill-current" />
              </div>
            </div>
          </motion.div>
        </div>

        {/* 5. A small promise from us */}
        <div className="mb-40 text-center space-y-12 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="flex justify-center mb-8">
              <LeafIcon className="w-16 h-16 text-brand-primary/20" />
            </div>
            <h3 className="text-4xl font-serif text-brand-text">A small promise from us <Heart className="inline w-6 h-6 text-brand-primary ml-1" /></h3>
            <p className="text-xl text-brand-text/60 font-medium leading-relaxed italic">
              Hearthly will never try to make you more productive for the sake of productivity. <br />
              <span className="text-brand-primary not-italic">The goal isn't to do more. It's to help you carry less.</span>
            </p>
          </motion.div>
        </div>

        {/* 6. Footer CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-brand-peach/40 rounded-[4rem] p-12 lg:p-24 text-center space-y-10 border border-brand-primary/5 relative overflow-hidden"
        >
          <div className="relative z-10 space-y-10">
            <h3 className="text-4xl lg:text-5xl font-serif text-brand-text leading-tight">
              Let Hearthly <br /> quietly take care <br /> of tomorrow. <Heart className="inline w-8 h-8 text-brand-primary ml-1" />
            </h3>

            <div className="pt-4">
              <button
                onClick={onOpenWaitlist}
                className="bg-brand-primary text-white px-12 py-6 rounded-2xl font-bold text-xl hover:bg-brand-text transition-all shadow-2xl flex items-center gap-3 mx-auto"
              >
                Join waitlist <Heart className="w-5 h-5 fill-current" />
              </button>
              <p className="mt-6 text-sm font-bold text-brand-text/30 tracking-widest uppercase">Early access • Be the first to know</p>
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
