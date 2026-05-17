import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Lock, Mail, User, CheckCircle2, Loader2, MessageSquare } from 'lucide-react';

const STORIES = [
  { text: "I feel like I carry my entire family in my head.", author: "Working mom of two" },
  { text: "Even when others help, I still have to think about everything.", author: "Busy professional" },
  { text: "I just want one less thing to worry about.", author: "Mom & entrepreneur" }
];

const MAKE_WEBHOOK_URL = "https://hook.us2.make.com/yvry00vwkhaztf408avr62l3xx9nu73b";

export default function SurveySection() {
  const [formData, setFormData] = useState({ name: '', email: '', answer: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    // Enforce 300 character limit on the textarea
    if (id === 'answer' && value.length > 300) return;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch(MAKE_WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          answer: formData.answer,
          source: 'Landing Page Survey',
          timestamp: new Date().toISOString()
        })
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', answer: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error('Survey submission error:', error);
      setStatus('error');
    }
  };

  return (
    <section id="survey-form" className="max-w-7xl mx-auto px-6 lg:px-12 py-24 lg:py-32 relative overflow-visible">
      <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-16 lg:gap-24 items-center">
        
        {/* Left: Stories */}
        <div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl font-serif text-brand-text mb-12"
          >
            From real women, <br />
            <span className="text-brand-primary italic">like you</span>
          </motion.h2>

          <div className="space-y-6 max-w-lg">
            {STORIES.map((story, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="bg-white/40 backdrop-blur-md p-8 rounded-[2rem] border border-brand-border/40 hover:shadow-xl hover:shadow-brand-primary/5 transition-all duration-500 group"
              >
                <div className="mb-4 text-brand-primary/20">
                  <MessageSquare className="w-5 h-5 fill-current" />
                </div>
                <p className="text-[17px] font-bold text-brand-text/70 italic leading-relaxed mb-4 group-hover:text-brand-primary transition-colors">
                  "{story.text}"
                </p>
                <p className="text-sm font-bold text-brand-text/30 tracking-widest uppercase">
                  — {story.author}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right: Exclusive Waitlist Inline Form */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-brand-cream rounded-[3rem] p-10 lg:p-14 border border-brand-border/40 shadow-2xl shadow-brand-primary/5 relative overflow-hidden"
        >
          <AnimatePresence mode="wait">
            {status === 'success' ? (
              <motion.div 
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="text-center py-12 space-y-6"
              >
                <div className="w-20 h-20 bg-brand-sage/10 rounded-full flex items-center justify-center mx-auto text-brand-sage">
                  <CheckCircle2 className="w-12 h-12" />
                </div>
                <h3 className="text-3xl font-serif text-brand-text">You're on the list!</h3>
                <p className="text-[15px] font-bold text-brand-text/50 leading-relaxed">
                  Thank you for helping shape Hearthly. We've received your thoughts and we'll reach out very soon.
                </p>
                <button 
                  onClick={() => setStatus('idle')}
                  className="px-8 py-3 rounded-full border border-brand-primary/20 text-brand-primary hover:bg-brand-primary/5 transition-all duration-300 font-bold text-sm"
                >
                  Send another feedback
                </button>
              </motion.div>
            ) : (
              <motion.div 
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="relative z-10"
              >
                <h3 className="text-3xl font-serif text-brand-text mb-3">Help shape Hearthly</h3>
                <p className="text-[15px] font-bold text-brand-text/40 mb-8">
                  Join our Founding Families. Your real stories will build something truly meaningful.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name Input */}
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-[13px] font-bold text-brand-text/60 uppercase tracking-widest pl-2">Your Name</label>
                    <div className="relative">
                      <input 
                        required
                        type="text" 
                        id="name"
                        placeholder="Enter your name" 
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full bg-white px-6 py-5 rounded-2xl border-2 border-brand-border/30 focus:border-brand-primary/30 outline-none transition-all font-medium"
                      />
                      <User className="absolute right-5 top-1/2 -translate-y-1/2 w-6 h-6 text-brand-text/20" />
                    </div>
                  </div>

                  {/* Email Input */}
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-[13px] font-bold text-brand-text/60 uppercase tracking-widest pl-2">Your Email</label>
                    <div className="relative">
                      <input 
                        required
                        type="email" 
                        id="email"
                        placeholder="Enter your email" 
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full bg-white px-6 py-5 rounded-2xl border-2 border-brand-border/30 focus:border-brand-primary/30 outline-none transition-all font-medium"
                      />
                      <Mail className="absolute right-5 top-1/2 -translate-y-1/2 w-6 h-6 text-brand-text/20" />
                    </div>
                  </div>

                  {/* Quick Question Textarea */}
                  <div className="space-y-2">
                    <label htmlFor="answer" className="text-[13px] font-bold text-brand-text/60 uppercase tracking-widest pl-2">A quick question</label>
                    <textarea 
                      required
                      id="answer"
                      placeholder="What feels mentally exhausting to keep up with right now?" 
                      rows={4}
                      value={formData.answer}
                      onChange={handleInputChange}
                      className="w-full bg-white px-6 py-5 rounded-2xl border-2 border-brand-border/30 focus:border-brand-primary/30 outline-none transition-all font-medium resize-none"
                    />
                    <div className="text-right text-[11px] font-bold text-brand-text/20 pr-2">
                      {formData.answer.length}/300
                    </div>
                  </div>

                  <button 
                    disabled={status === 'loading'}
                    type="submit"
                    className="w-full bg-brand-primary text-white py-5 rounded-2xl font-bold text-lg hover:bg-brand-primary-hover shadow-xl shadow-brand-primary/20 transition-all duration-500 transform hover:-translate-y-1 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {status === 'loading' ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      'Join the waitlist'
                    )}
                  </button>

                  {status === 'error' && (
                    <p className="text-center text-sm text-red-500 font-medium">
                      Something went wrong. Please try again.
                    </p>
                  )}

                  <div className="flex items-center justify-center gap-2 text-[12px] font-bold text-brand-text/30">
                    <Lock className="w-3.5 h-3.5" />
                    We respect your inbox. No spam, ever.
                  </div>
                </form>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Decorative background glow */}
          <div className="absolute top-0 right-0 w-40 h-40 bg-brand-primary/5 rounded-full blur-3xl -z-10"></div>
        </motion.div>
      </div>
    </section>
  );
}
