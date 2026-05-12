import { MessageSquareHeart, Lock, Users, Sparkles, Coffee } from 'lucide-react';
import { motion } from 'motion/react';

export default function SurveySection() {
  return (
    <section className="max-w-6xl mx-auto px-6 lg:px-8 mb-24 relative z-10">
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="bg-[#FBF6F0] rounded-[2rem] p-8 sm:p-12 lg:p-16 border border-brand-border/40 shadow-sm"
      >
        <div className="text-center mb-12">
          <h2 className="text-3xl font-serif text-brand-text mb-4 inline-flex items-center justify-center gap-3">
            <span className="text-brand-primary font-sans text-2xl font-light">♡</span> 
            Help us understand what matters to you
          </h2>
          <p className="text-brand-text/70 text-lg">
            Your answers will help us build something that truly makes a difference.
          </p>
        </div>

        <div className="grid lg:grid-cols-[1.5fr_1fr] gap-12 items-center mb-16">
          <div className="bg-white rounded-2xl p-8 border border-brand-border/60 shadow-sm relative">
            <div className="flex gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-brand-card flex items-center justify-center text-brand-primary shrink-0 border border-brand-primary/10">
                <MessageSquareHeart className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-semibold text-xl text-brand-text mb-1">What feels hardest to keep up with right now?</h3>
                <p className="text-sm text-brand-text/60">Share in a few words. There's no right or wrong answer.</p>
              </div>
            </div>
            
            <div className="relative">
              <textarea 
                placeholder="Type your answer here..."
                rows={4}
                className="w-full bg-[#FDF9F5] border border-brand-border rounded-xl p-5 text-brand-text placeholder:text-brand-text/40 outline-none focus:bg-white focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary/40 transition-all resize-none"
              ></textarea>
              <div className="absolute bottom-4 right-5 text-xs text-brand-text/30 font-medium">
                0 / 300
              </div>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end items-center opacity-90 mix-blend-multiply relative">
            {/* Elegant SVG Graphic representing the warmth of the brand */}
            <svg width="280" height="280" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute -top-10 -right-10 pointer-events-none opacity-20 hidden lg:block">
              <path d="M100 180C144.183 180 180 144.183 180 100C180 55.8172 144.183 20 100 20C55.8172 20 20 55.8172 20 100C20 144.183 55.8172 180 100 180Z" fill="url(#paint0_radial)"/>
              <defs>
                <radialGradient id="paint0_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(100 100) rotate(90) scale(80)">
                  <stop stopColor="#DA7A5F"/>
                  <stop offset="1" stopColor="#DA7A5F" stopOpacity="0"/>
                </radialGradient>
              </defs>
            </svg>
            <div className="relative">
              <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M100 180C117.8 180 133.9 171.7 144 158.8V158.8C154.1 145.9 160 129.5 160 111.7C160 67.5 124.2 31.7 80 31.7C62.2 31.7 45.8 37.6 32.9 47.7V47.7C20 57.8 11.7 73.9 11.7 91.7C11.7 140.4 51.3 180 100 180Z" fill="#FDECE3"/>
                <path d="M125 70C125 50 100 45 85 55C70 65 65 90 75 110C85 130 115 145 130 135C145 125 150 110 145 95C140 80 125 90 125 70Z" fill="#F4D3C5" opacity="0.6"/>
                <path d="M108.5 118C108.5 118 108.5 106.5 122 101C122 101 138 126.5 126 137.5C114 148.5 108.5 118 108.5 118Z" fill="#DA7A5F"/>
                <path d="M96 142.5C96 142.5 111.5 142.5 120.5 135L111.5 119C111.5 119 98 128.5 96 142.5Z" fill="#C5654C"/>
                <path d="M72 110C72 110 63.5 123 75.5 137.5C87.5 152 111.5 148 111.5 148L96 128C96 128 85 125 81.5 114C78 103 72 110 72 110Z" fill="#FDECE3"/>
                <circle cx="155" cy="55" r="4" fill="#DA7A5F" opacity="0.6"/>
                <circle cx="45" cy="145" r="3" fill="#DA7A5F" opacity="0.4"/>
                <path d="M85 85C85 85 80 95 85 105C90 115 95 115 95 115C95 115 100 105 105 105C110 105 115 95 115 85C115 75 105 70 95 80C85 70 75 75 85 85Z" fill="#DA7A5F"/>
              </svg>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 border-t border-brand-border/60 pt-10">
          <div className="flex flex-col gap-3">
            <Lock className="w-5 h-5 text-brand-primary" strokeWidth={1.5} />
            <h4 className="font-semibold text-brand-text text-sm">Private & safe</h4>
            <p className="text-sm text-brand-text/60 leading-relaxed">Your answers are confidential and never shared.</p>
          </div>
          <div className="flex flex-col gap-3">
            <Users className="w-5 h-5 text-brand-primary" strokeWidth={1.5} />
            <h4 className="font-semibold text-brand-text text-sm">Built with you</h4>
            <p className="text-sm text-brand-text/60 leading-relaxed">Real stories shape Hearthly.</p>
          </div>
          <div className="flex flex-col gap-3">
            <Sparkles className="w-5 h-5 text-brand-primary" strokeWidth={1.5} />
            <h4 className="font-semibold text-brand-text text-sm">Better together</h4>
            <p className="text-sm text-brand-text/60 leading-relaxed">Together, we can lighten the mental load.</p>
          </div>
          <div className="flex flex-col gap-3">
            <Coffee className="w-5 h-5 text-brand-primary" strokeWidth={1.5} />
            <h4 className="font-semibold text-brand-text text-sm">A little less, for you</h4>
            <p className="text-sm text-brand-text/60 leading-relaxed">So you can have more time, energy and peace.</p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
