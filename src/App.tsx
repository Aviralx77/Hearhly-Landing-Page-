import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustStrip from './components/TrustStrip';
import LaborSection from './components/LaborSection';
import Features from './components/Features';
import VoiceMemory from './components/VoiceMemory';
import SurveySection from './components/SurveySection';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import ResearchSection from './components/ResearchSection';
import FamiliesSection from './components/FamiliesSection';
import AboutSection from './components/AboutSection';

import WaitlistModal from './components/WaitlistModal';

export default function App() {
  const [currentHash, setCurrentHash] = useState(window.location.hash);
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentHash(window.location.hash);
      if (window.location.hash === '#survey-form') {
        setTimeout(() => {
          const el = document.getElementById('survey-form');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      } else {
        window.scrollTo(0, 0);
      }
    };

    if (window.location.hash === '#survey-form') {
      setTimeout(() => {
        const el = document.getElementById('survey-form');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 300);
    }

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const openWaitlist = () => {
    const el = document.getElementById('survey-form');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.hash = '#survey-form';
    }
  };

  const renderContent = () => {
    switch (currentHash) {
      case '#our-research':
        return <ResearchSection />;
      case '#for-families':
        return <FamiliesSection onOpenWaitlist={openWaitlist} />;
      case '#about-us':
        return <AboutSection onOpenWaitlist={openWaitlist} />;
      default:
        return (
          <>
            <Hero onOpenWaitlist={openWaitlist} />
            <TrustStrip />
            <LaborSection />
            <Features />
            <VoiceMemory />
            <SurveySection />
            <FinalCTA onOpenWaitlist={openWaitlist} />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen font-sans selection:bg-brand-primary/20 selection:text-brand-text overflow-x-hidden">
       {/* Hidden SVG Filter for Logo Background Removal */}
       <svg style={{ position: 'absolute', width: 0, height: 0, pointerEvents: 'none' }}>
         <filter id="remove-logo-bg" x="0" y="0" width="100%" height="100%" colorInterpolationFilters="sRGB">
           <feColorMatrix type="matrix" values="
             1 0 0 0 0
             0 1 0 0 0
             0 0 1 0 0
             -1.1 -1.1 -1.1 1 3
           " />
         </filter>
       </svg>

       <Navbar onOpenWaitlist={openWaitlist} />
       <main>
         {renderContent()}
       </main>
       <Footer />

       <WaitlistModal 
         isOpen={isWaitlistOpen} 
         onClose={() => setIsWaitlistOpen(false)} 
       />
    </div>
  );
}
