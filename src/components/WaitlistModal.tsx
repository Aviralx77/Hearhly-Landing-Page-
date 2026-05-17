import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Heart, Loader2, CheckCircle2 } from 'lucide-react';

interface WaitlistModalProps {
  isOpen: boolean;
  onClose: () => void;
}

// Replace this with your actual Make.com Webhook URL
const MAKE_WEBHOOK_URL = "https://hook.us2.make.com/yvry00vwkhaztf408avr62l3xx9nu73b";

export default function WaitlistModal({ isOpen, onClose }: WaitlistModalProps) {
  const [formData, setFormData] = useState({ name: '', email: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      // Connecting to your Make.com Webhook
      const response = await fetch(MAKE_WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          source: 'Landing Page',
          timestamp: new Date().toISOString()
        })
      });

      if (response.ok) {
        setStatus('success');
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error('Waitlist submission error:', error);
      setStatus('error');
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-brand-text/40 backdrop-blur-sm"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-lg bg-[#FFFBF6] rounded-[3rem] overflow-hidden shadow-2xl"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-8 right-8 p-2 text-brand-text/20 hover:text-brand-text/60 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="p-12 lg:p-16">
              {status === 'success' ? (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center space-y-6"
                >
                  <div className="w-20 h-20 bg-brand-primary/10 rounded-full flex items-center justify-center mx-auto text-brand-primary">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-3xl font-serif text-brand-text">You're on the list!</h3>
                  <p className="text-brand-text/60 font-medium">
                    Thank you for your interest in Hearthly. We'll be in touch with a gentle invitation soon.
                  </p>
                  <button
                    onClick={onClose}
                    className="w-full py-4 rounded-2xl bg-brand-primary text-white font-bold hover:bg-brand-primary-hover transition-all"
                  >
                    Back to site
                  </button>
                </motion.div>
              ) : (
                <div className="space-y-8">
                  <div className="space-y-4">
                    <div className="inline-flex items-center gap-2 text-brand-primary font-bold text-xs uppercase tracking-widest">
                      Early Access
                    </div>
                    <h3 className="text-4xl font-serif text-brand-text leading-tight">
                      Join the <br /> Hearthly waitlist <Heart className="inline w-6 h-6 text-brand-primary ml-1" />
                    </h3>
                    <p className="text-brand-text/50 font-medium leading-relaxed">
                      Be among the first families to experience a lighter way of living.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-xs font-bold text-brand-text/40 uppercase tracking-widest ml-1">Name</label>
                      <input
                        required
                        type="text"
                        id="name"
                        placeholder="Aviral Chauhan"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-6 py-4 rounded-2xl bg-brand-peach/30 border border-brand-primary/5 focus:outline-none focus:ring-2 focus:ring-brand-primary/20 transition-all font-medium placeholder:text-brand-text/20"
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="email" className="text-xs font-bold text-brand-text/40 uppercase tracking-widest ml-1">Email Address</label>
                      <input
                        required
                        type="email"
                        id="email"
                        placeholder="aviral@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-6 py-4 rounded-2xl bg-brand-peach/30 border border-brand-primary/5 focus:outline-none focus:ring-2 focus:ring-brand-primary/20 transition-all font-medium placeholder:text-brand-text/20"
                      />
                    </div>

                    <button
                      disabled={status === 'loading'}
                      className="w-full py-5 mt-4 rounded-2xl bg-brand-primary text-white font-bold text-lg hover:bg-brand-primary-hover shadow-xl shadow-brand-primary/20 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    >
                      {status === 'loading' ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin" />
                          Joining...
                        </>
                      ) : (
                        <>
                          Join the waitlist <Heart className="w-4 h-4 fill-current" />
                        </>
                      )}
                    </button>

                    {status === 'error' && (
                      <p className="text-center text-sm text-red-500 font-medium">
                        Something went wrong. Please try again.
                      </p>
                    )}
                  </form>

                  <p className="text-center text-xs text-brand-text/30 font-bold tracking-widest uppercase">
                    Privacy first • No spam ever
                  </p>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
