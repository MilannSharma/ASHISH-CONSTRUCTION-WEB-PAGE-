import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Phone } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = window.scrollY;
      setScrollProgress((currentScroll / totalScroll) * 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Our Work', path: '/#our-work' },
    { name: 'Services', path: '/#services' },
    { name: 'Contact', path: '/contact' }
  ];

  const handleLinkClick = (path: string) => {
    setMobileMenuOpen(false);
    if (path.startsWith('/#')) {
      const id = path.substring(2);
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <nav 
      className={`fixed top-0 z-50 w-full transition-all duration-700 ${
        scrolled ? 'h-20 bg-charcoal/80 backdrop-blur-2xl border-b border-gold/10' : 'h-24 bg-transparent'
      }`}
    >
      <div className="absolute bottom-0 left-0 h-[2px] bg-gold/10 w-full">
        <motion.div 
          className="h-full bg-gold shadow-[0_0_10px_rgba(201,168,76,0.8)]"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>
      <div className="h-full mx-auto flex max-w-7xl items-center justify-between px-10">
        <Link to="/" className="group flex items-center gap-5">
          <img src="/logo.png" alt="Logo" className="h-14 w-auto object-contain transition-transform group-hover:scale-105" referrerPolicy="no-referrer" />
          <div className="hidden sm:block">
            <h1 className="font-outfit text-2xl font-extrabold tracking-[0.2em] text-gold leading-none group-hover:text-white transition-colors">ASHISH</h1>
            <p className="text-[10px] tracking-[0.5em] text-muted mt-1 group-hover:text-white/40 transition-colors uppercase font-medium">CONSTRUCTIONS</p>
          </div>
        </Link>

        {/* Desktop Links */}
        <div className="hidden items-center gap-10 lg:flex text-[11px] uppercase tracking-widest font-semibold">
          {navLinks.map((link) => (
            link.path.startsWith('/#') ? (
               <a 
                key={link.name} 
                href={link.path}
                className="group relative transition-all text-white/70 hover:text-gold"
              >
                {link.name}
                <motion.span 
                  className="absolute -bottom-1 left-0 h-px w-0 bg-gold transition-all duration-300 group-hover:w-full"
                />
              </a>
            ) : (
              <Link 
                key={link.name} 
                to={link.path}
                className={`group relative transition-all ${location.pathname === link.path ? 'text-gold' : 'text-white/70 hover:text-gold'}`}
              >
                {link.name}
                <motion.span 
                  className={`absolute -bottom-1 left-0 h-px transition-all duration-300 bg-gold ${location.pathname === link.path ? 'w-full' : 'w-0 group-hover:w-full'}`}
                />
              </Link>
            )
          ))}
          <a href="tel:+917030503318" className="px-6 py-2 bg-gold text-charcoal rounded-sm hover:bg-gold-light transition-colors font-bold whitespace-nowrap flex items-center gap-2">
            <Phone size={14} /> CALL: 7030503318
          </a>
        </div>

        {/* Mobile Menu Trigger */}
        <button 
          className="text-white lg:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex flex-col items-center justify-center bg-charcoal/98 backdrop-blur-2xl lg:hidden"
          >
            <button 
              className="absolute right-6 top-6 text-gold"
              onClick={() => setMobileMenuOpen(false)}
            >
              <X size={40} />
            </button>
            <div className="flex flex-col items-center gap-10">
              {navLinks.map((link, i) => (
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  key={link.name}
                >
                  {link.path.startsWith('/#') ? (
                    <a
                      href={link.path}
                      onClick={() => handleLinkClick(link.path)}
                      className="font-bebas text-5xl tracking-widest text-white hover:text-gold transition-colors"
                    >
                      {link.name}
                    </a>
                  ) : (
                    <Link
                      to={link.path}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`font-bebas text-5xl tracking-widest transition-colors ${location.pathname === link.path ? 'text-gold' : 'text-white hover:text-gold'}`}
                    >
                      {link.name}
                    </Link>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
