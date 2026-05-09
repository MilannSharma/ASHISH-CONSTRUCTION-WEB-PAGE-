import React from 'react';

export const Footer = () => {
  return (
    <footer className="h-24 w-full bg-[#080808] border-t border-white/5 px-10 flex flex-col md:flex-row items-center justify-between gap-4 text-[10px] uppercase tracking-[0.2em] text-muted py-4 md:py-0">
      <div className="flex items-center gap-5">
        <img src="/logo.png" alt="Logo" className="h-10 w-auto grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all" referrerPolicy="no-referrer" />
        <div className="flex flex-col">
          <span className="font-outfit font-bold tracking-[0.2em] text-gold/60">ASHISH</span>
          <span>Copyright © 2026 ASHISH Constructions</span>
        </div>
      </div>
      <div className="flex gap-10 items-center">
        <a href="tel:+917030503318" className="hover:text-white transition-colors group flex items-center gap-2">
          <span className="text-gold group-hover:scale-110 transition-transform font-bold">CALL:</span> 7030503318
        </a>
      </div>
  </footer>
  );
};
