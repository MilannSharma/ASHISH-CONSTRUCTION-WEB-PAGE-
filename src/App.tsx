import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

// New Imports
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ScrollToTop, WhatsAppButton } from './components/Shared';
import Home from './pages/Home';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';

// --- Shared Components for Layout ---

const LoadingScreen = ({ onComplete }: { onComplete: () => void, key?: React.Key }) => {
  useEffect(() => {
    const timer = setTimeout(onComplete, 2200);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ 
        y: -1000, 
        transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } 
      }}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-charcoal"
      id="loader"
    >
      <div className="relative">
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="mb-8 flex justify-center"
        >
          <img src="/logo.png" alt="Ashish Constructions Logo" className="h-24 w-auto object-contain" referrerPolicy="no-referrer" />
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-center"
        >
          <h1 className="font-outfit text-4xl font-extrabold tracking-[0.3em] text-gold uppercase">ASHISH</h1>
          <p className="text-[10px] tracking-[0.6em] text-muted uppercase mt-2 font-medium">CONSTRUCTIONS</p>
        </motion.div>
      </div>
      
      <div className="absolute bottom-20 left-1/2 w-48 -translate-x-1/2 overflow-hidden h-px bg-white/10">
        <motion.div
          initial={{ x: "-100%" }}
          animate={{ x: "0%" }}
          transition={{ duration: 2, ease: "easeInOut" }}
          className="h-full w-full bg-gold"
        />
      </div>
    </motion.div>
  );
};

// Component to handle scroll to top on route change
function ScrollToTopOnRoute() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
}

function AppContent() {
  const location = useLocation();
  const [loading, setLoading] = useState(() => {
    // Only show loading if we are on the home page and haven't loaded it in this session
    const hasLoaded = sessionStorage.getItem('has_loaded_home');
    return !hasLoaded && (location.pathname === '/' || location.pathname === '');
  });

  const handleLoadingComplete = () => {
    setLoading(false);
    sessionStorage.setItem('has_loaded_home', 'true');
  };

  return (
    <div className="relative min-h-screen bg-charcoal selection:bg-gold selection:text-charcoal overflow-x-hidden">
      <ScrollToTopOnRoute />
      <AnimatePresence mode="wait">
        {loading && <LoadingScreen key="loader" onComplete={handleLoadingComplete} />}
      </AnimatePresence>
      
      <div className="noise-overlay" />
      
      <motion.div
         initial={loading ? { opacity: 0 } : { opacity: 1 }}
         animate={{ opacity: 1 }}
         transition={{ duration: 1 }}
         className="relative z-10"
      >
        <Navbar />
        
        <main className="relative">
          <AnimatePresence mode="wait" initial={false}>
            <div key={location.pathname}>
              <Routes location={location}>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/contact" element={<ContactPage />} />
              </Routes>
            </div>
          </AnimatePresence>
        </main>

        <Footer />
        <ScrollToTop />
        <WhatsAppButton />
      </motion.div>

      <style>{`
        .glass {
          background: rgba(26, 26, 26, 0.7);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
        }
        .text-stroke {
          -webkit-text-stroke: 1px rgba(255, 255, 255, 0.1);
          color: transparent;
        }
        .preserve-3d {
          transform-style: preserve-3d;
        }
        .shadow-gold-heavy {
          box-shadow: 0 0 40px rgba(201, 168, 76, 0.2);
        }
        .noise-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: url('https://grainy-gradients.vercel.app/noise.svg');
          opacity: 0.15;
          pointer-events: none;
          z-index: 50;
          mix-blend-mode: overlay;
        }
      `}</style>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

