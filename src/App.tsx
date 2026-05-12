import { motion } from 'motion/react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WaitlistSection from './components/WaitlistSection';
import SurveySection from './components/SurveySection';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen font-sans selection:bg-brand-primary/20 selection:text-brand-text overflow-x-hidden">
       <Navbar />
       <main className="flex flex-col gap-8">
         <Hero />
         <WaitlistSection />
         <SurveySection />
       </main>
       <Footer />
    </div>
  );
}
