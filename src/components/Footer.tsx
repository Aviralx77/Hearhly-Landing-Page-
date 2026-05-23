import { Instagram, Twitter, Linkedin, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-brand-cream py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 lg:gap-12 mb-24">
          
          <div className="space-y-6">
            <div className="flex items-center cursor-pointer">
              <img 
                src="/assets/hearthly-logo-transparent.png" 
                alt="Hearthly Logo" 
                className="h-20 w-auto object-contain -ml-4 -my-6" 
              />
            </div>
            <p className="text-[15px] font-bold text-brand-text/40 leading-relaxed max-w-xs">
              AI copilot for home. Built with love, backed by real women.
            </p>
            <div className="flex gap-6">
              {[
                { Icon: Instagram, href: "https://www.instagram.com/hearthlyforwomen?igsh=dXJ2MjA4dGJlbTRv&utm_source=qr" },
                { Icon: Twitter, href: "#" },
                { Icon: Linkedin, href: "#" }
              ].map(({ Icon, href }, i) => (
                <a 
                  key={i} 
                  href={href} 
                  target={href !== "#" ? "_blank" : undefined}
                  rel={href !== "#" ? "noopener noreferrer" : undefined}
                  className="text-brand-text/30 hover:text-brand-primary transition-colors"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {[
            { title: "Company", links: ["About us", "Careers", "Contact"] },
            { title: "Resources", links: ["Help-center", "Privacy"] },
            { title: "Legal", links: ["Terms", "Privacy policy"] }
          ].map((section) => (
            <div key={section.title} className="space-y-8">
              <h4 className="text-[13px] font-bold text-brand-text/30 uppercase tracking-[0.2em]">
                {section.title}
              </h4>
              <ul className="space-y-4">
                {section.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-[15px] font-bold text-brand-text/60 hover:text-brand-primary transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="space-y-8 lg:pl-10">
            <h4 className="text-[13px] font-bold text-brand-text/30 uppercase tracking-[0.2em]">
              Stay in the loop
            </h4>
            <p className="text-[15px] font-bold text-brand-text/60">Join our newsletter</p>
            <div className="relative group">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="w-full bg-white px-6 py-4 rounded-xl border border-brand-border/40 focus:border-brand-primary/30 outline-none transition-all font-medium text-sm"
              />
              <button className="absolute right-2 top-2 bottom-2 px-4 bg-brand-primary/10 text-brand-primary rounded-lg hover:bg-brand-primary hover:text-white transition-all">
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>

        <div className="pt-12 border-t border-brand-border/40 flex flex-col sm:flex-row justify-between items-center gap-6">
          <p className="text-[12px] font-bold text-brand-text/20 tracking-widest uppercase">
            © 2026 Hearthly Inc. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-brand-primary/40 font-serif italic text-sm">
            <span>Made for families</span>
            <Heart className="w-3.5 h-3.5 fill-current" />
          </div>
        </div>
      </div>
    </footer>
  );
}

import { ArrowRight } from 'lucide-react';
