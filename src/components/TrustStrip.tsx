import { motion } from 'motion/react';

const LOGOS = [
  { name: 'YourStory', width: 120 },
  { name: 'THE TIMES OF INDIA', width: 180 },
  { name: 'babychakra', width: 130 },
  { name: 'wittyfeed', width: 110 },
  { name: 'HerZindagi', width: 120 }
];

export default function TrustStrip() {
  return (
    <section className="w-full py-12 border-y border-brand-border/30 bg-white/30 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8">
        <div className="text-sm font-bold text-brand-text/40 tracking-widest uppercase shrink-0">
          Trusted by women who do it all
        </div>
        
        <div className="flex flex-wrap items-center justify-center gap-12 lg:gap-20 opacity-30 grayscale hover:opacity-60 transition-opacity duration-500">
          {LOGOS.map((logo) => (
            <div key={logo.name} className="flex items-center justify-center font-serif text-lg font-bold tracking-tight">
              {/* Simplified text logos for demonstration */}
              {logo.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
