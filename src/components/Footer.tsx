export default function Footer() {
  return (
    <footer className="w-full pb-16 pt-8 text-center px-6">
      <div className="max-w-4xl mx-auto flex flex-col items-center gap-12">
        <h3 className="font-handwriting text-3xl sm:text-4xl text-brand-primary/90 transform -rotate-1">
          You carry so much. Let's lighten it — together. <span className="font-sans text-2xl font-light">♡</span>
        </h3>
        
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-[13px] font-medium text-brand-text/60">
          <a href="#" className="hover:text-brand-primary transition-colors">Privacy</a>
          <a href="#" className="hover:text-brand-primary transition-colors">Contact</a>
          <a href="#" className="hover:text-brand-primary transition-colors">Instagram</a>
          <a href="#" className="hover:text-brand-primary transition-colors">Terms</a>
          <a href="#" className="hover:text-brand-primary transition-colors">Research</a>
          <a href="#" className="hover:text-brand-primary transition-colors">Join Waitlist</a>
        </div>
      </div>
    </footer>
  );
}
