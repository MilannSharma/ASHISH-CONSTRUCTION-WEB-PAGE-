import React, { useRef, useState } from 'react';
import { motion } from 'motion/react';
import { 
  Building2, 
  HardHat, 
  Hammer, 
  Layout, 
  Clock, 
  Award, 
  Users, 
  Home, 
  ArrowRight,
  ShieldCheck,
  CheckCircle2
} from 'lucide-react';
import { StatItem } from '../components/Shared';
import { Link } from 'react-router-dom';

const TeamCard = ({ name, role, phone, image }: { name: string, role: string, phone: string, image: string, key?: React.Key }) => {
  return (
    <motion.div 
      whileHover={{ y: -10 }}
      className="group relative overflow-hidden glass rounded-3xl border border-gold/10 p-8 text-center"
    >
      <div className="relative mb-6 mx-auto w-40 h-40">
        <div className="absolute inset-0 border-2 border-gold rounded-full rotate-45 group-hover:rotate-0 transition-transform duration-500" />
        <div className="absolute inset-2 border border-gold/30 rounded-full" />
        <div className="h-full w-full rounded-full overflow-hidden bg-slate-dark/50">
          <img 
            src={image} 
            alt={name} 
            className={`w-full h-full object-cover transition-all duration-500 ${name.toLowerCase().includes('pavan') ? 'object-[center_20%]' : 'object-center'}`} 
            referrerPolicy="no-referrer"
          />
        </div>
      </div>
      <h3 className="font-bebas text-3xl text-white tracking-widest mb-1 group-hover:text-gold transition-colors">{name}</h3>
      <p className="text-gold/60 text-xs uppercase tracking-[0.3em] font-bold mb-4">{role}</p>
      <div className="flex items-center justify-center gap-2 text-white/50 text-sm font-medium">
        <span className="w-8 h-px bg-gold/30" />
        {phone}
        <span className="w-8 h-px bg-gold/30" />
      </div>
    </motion.div>
  );
};

const WorkTypeCard = ({ icon: Icon, title, description, image }: { icon: any, title: string, description: string, image: string, key?: React.Key }) => {
  return (
    <div className="group relative h-[400px] overflow-hidden rounded-3xl border border-white/5 bg-charcoal">
      <div 
        className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-110 opacity-40 group-hover:opacity-60" 
        style={{ backgroundImage: `url(${image})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/40 to-transparent" />
      
      <div className="absolute inset-0 p-10 flex flex-col justify-end">
        <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gold/10 text-gold backdrop-blur-sm transition-all duration-500 group-hover:bg-gold group-hover:text-charcoal group-hover:shadow-gold-heavy">
          <Icon size={32} />
        </div>
        <h3 className="font-bebas text-4xl text-white mb-4 tracking-wide group-hover:text-gold transition-colors">{title}</h3>
        <p className="font-sans text-white/50 group-hover:text-white/80 transition-colors leading-relaxed line-clamp-3 font-light">{description}</p>
      </div>
    </div>
  );
};

export default function AboutPage() {
  const team = [
    { name: "PAVAN KUMAR SHARMA", role: "FOUNDER", phone: "9421054738", image: "/PAVAN.jpg" },
    { name: "ASHISH SHARMA", role: "CO-FOUNDER", phone: "7030503318", image: "/ASHISH.png" },
    { name: "MILAN PARMAR", role: "PROJECT HEAD", phone: "7378339012", image: "/MILAN.webp" },
  ];

  const works = [
    { 
      icon: Home, 
      title: "TILES & FLOORING", 
      description: "Exquisite masonry and tiling work that transforms floors into works of art. We specialize in luxury marble, granite, and premium ceramic tiles.", 
      image: "https://images.unsplash.com/photo-1581094288338-2314dddb7ec4?q=80&w=2070" 
    },
    { 
      icon: Hammer, 
      title: "RENOVATIONS", 
      description: "Breathing new life into existing structures. We handle full architectural remodels with attention to structural integrity and modern aesthetics.", 
      image: "https://images.unsplash.com/photo-1503387762-592dea58ef21?q=80&w=2070" 
    },
    { 
      icon: Building2, 
      title: "VILLAS & BUNGALOWS", 
      description: "Building luxury independent homes and bungalows that serve as private sanctuaries for elite living experiences.", 
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070" 
    },
    { 
      icon: Layout, 
      title: "COMMERCIAL COMPLEXES", 
      description: "Developing large-scale commercial centers and business parks with optimized spatial design and engineering excellence.", 
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070" 
    },
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="bg-charcoal pt-24 min-h-screen"
    >
      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <iframe
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[177.77vw] h-[56.25vw] min-h-full min-w-full grayscale opacity-40 scale-110"
            src="https://www.youtube.com/embed/9MBFoPhL0H4?autoplay=1&mute=1&loop=1&playlist=9MBFoPhL0H4&controls=0&showinfo=0&autohide=1&modestbranding=1&rel=0&playsinline=1&enablejsapi=1"
            frameBorder="0"
            allow="autoplay; encrypted-media"
          ></iframe>
        </div>
        <div className="absolute inset-0 bg-charcoal/40 z-[1]" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-charcoal/20 to-charcoal z-[2]" />
        <div className="absolute inset-0 bg-grid opacity-10 z-[3]" />
        
        <div className="mx-auto max-w-7xl px-6 lg:px-12 relative z-10 text-center">
          <motion.h4 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="font-bebas text-gold text-2xl tracking-[0.4em] mb-8"
          >
            OUR LEGACY SINCE 1990
          </motion.h4>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="font-bebas text-7xl md:text-9xl text-white mb-10 leading-none"
          >
            PIONEERING <span className="text-gold">EXCELLENCE</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="font-sans text-xl text-white/50 max-w-3xl mx-auto leading-relaxed"
          >
             From single-story builds to massive commercial complexes, ASHISH Constructions has defined Indian architecture for 36 years.
          </motion.p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-slate-dark/30 border-y border-white/5">
        <div className="mx-auto max-w-7xl px-6 lg:px-12 grid grid-cols-2 md:grid-cols-5 gap-12 text-center">
          <StatItem number={36} label="LEGACY YEARS" />
          <StatItem number={500} label="PROJECTS DONE" />
          <StatItem number={1000} label="HAPPY CLIENTS" />
          <StatItem number={5} label="DESIGN AWARDS" suffix="+" />
          <StatItem number={50} label="EXPERT HANDS" />
        </div>
      </section>

      {/* Core Expertise */}
      <section className="py-32 md:py-52 overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-10">
            <div>
              <h4 className="font-bebas text-gold text-2xl tracking-[0.4em] mb-6 shadow-text">OUR EXPERTISE</h4>
              <h2 className="font-bebas text-6xl md:text-8xl text-white">WHAT WE <span className="text-stroke text-white/20">SPECIALIZE</span> IN</h2>
            </div>
            <Link to="/contact" className="px-10 py-4 border border-gold text-gold font-bebas text-2xl tracking-widest hover:bg-gold hover:text-charcoal transition-all">START PROJECT</Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
             {works.map((work, i) => (
                <WorkTypeCard key={i} {...work} />
             ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-32 md:py-52 bg-slate-dark/20 relative">
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
        <div className="mx-auto max-w-7xl px-6 lg:px-12 text-center mb-24">
          <h4 className="font-bebas text-gold text-2xl tracking-[0.4em] mb-6">THE VISIONARIES</h4>
          <h2 className="font-bebas text-6xl md:text-8xl text-white">OUR CORE <span className="text-gold">TEAM</span></h2>
        </div>
        
        <div className="mx-auto max-w-7xl px-6 lg:px-12 grid grid-cols-1 md:grid-cols-3 gap-12">
          {team.map((member, i) => (
            <TeamCard key={i} {...member} />
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 md:py-52 text-center">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="font-bebas text-6xl md:text-8xl text-white mb-12">HAVE A <br/><span className="text-gold">MASTERPIECE</span> IN MIND?</h2>
          <Link 
            to="/contact"
            className="inline-flex items-center gap-4 bg-gold px-12 py-6 font-bebas text-3xl text-charcoal hover:bg-gold-light transition-all rounded-sm"
          >
            TALK TO OUR EXPERTS <ArrowRight size={32} />
          </Link>
        </div>
      </section>
    </motion.div>
  );
}
