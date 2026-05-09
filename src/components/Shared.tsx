import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { 
  ChevronUp, 
  MessageCircle,
  Phone,
} from 'lucide-react';

export const CONTACT_PHONE = "7030503318";
export const WHATSAPP_LINK = `https://wa.me/91${CONTACT_PHONE}?text=${encodeURIComponent("Hii")}`;

export const StatItem = ({ number, label, suffix = "+", key }: { number: number, label: string, suffix?: string, key?: React.Key }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  
  useEffect(() => {
    if (isInView) {
      let startTime: number;
      let animationFrame: number;
      const duration = 2000;
      
      const step = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / duration, 1);
        
        // Cubic Out Easing
        const easedProgress = 1 - Math.pow(1 - progress, 3);
        setCount(Math.floor(easedProgress * number));
        
        if (progress < 1) {
          animationFrame = requestAnimationFrame(step);
        }
      };
      animationFrame = requestAnimationFrame(step);
      
      return () => {
        if (animationFrame) cancelAnimationFrame(animationFrame);
      };
    }
  }, [isInView, number]);

  return (
    <motion.div 
      ref={ref} 
      whileHover={{ y: -5 }}
      className="text-center group p-4 relative cursor-default"
    >
      <motion.div 
        animate={{ 
          opacity: isInView ? [0.1, 0.2, 0.1] : 0,
        }}
        whileHover={{ opacity: 0.3 }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute inset-0 bg-gold/10 blur-[40px] pointer-events-none rounded-full" 
      />
      
      <h3 className="font-bebas text-4xl md:text-5xl lg:text-7xl text-gold mb-1 transition-all duration-500 group-hover:scale-110 group-hover:drop-shadow-[0_0_15px_rgba(201,168,76,0.3)] relative z-10 flex justify-center items-center">
        {count}{suffix}
      </h3>
      <p className="text-[10px] uppercase tracking-[0.2em] text-muted font-bold relative z-10 transition-colors duration-300 group-hover:text-white group-hover:tracking-[0.25em]">
        {label}
      </p>
    </motion.div>
  );
};

export const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisible = () => setVisible(window.pageYOffset > 600);
    window.addEventListener('scroll', toggleVisible);
    return () => window.removeEventListener('scroll', toggleVisible);
  }, []);

  return (
    <motion.button
      animate={{ 
        opacity: visible ? 1 : 0, 
        scale: visible ? 1 : 0.5,
        pointerEvents: visible ? 'auto' : 'none'
      }}
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="fixed bottom-10 right-10 z-[100] h-16 w-16 glass rounded-full flex items-center justify-center text-gold shadow-gold hover:bg-gold hover:text-charcoal transition-all ring-1 ring-gold/20"
    >
      <ChevronUp size={32} />
    </motion.button>
  );
};

export const WhatsAppButton = () => {
  return (
    <motion.a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1, rotate: 10 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-10 left-10 z-[100] h-16 w-16 bg-[#25D366] rounded-full flex items-center justify-center text-white shadow-lg hover:shadow-[#25D366]/40 transition-all border-4 border-white/20"
    >
      <MessageCircle size={32} fill="currentColor" />
      <span className="absolute -top-2 -right-2 bg-gold text-charcoal text-[10px] font-bold px-2 py-0.5 rounded-full animate-bounce">
        ONLINE
      </span>
    </motion.a>
  );
};
