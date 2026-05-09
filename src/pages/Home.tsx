import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Building2, 
  MapPin, 
  Phone, 
  Mail, 
  Instagram, 
  Linkedin, 
  Facebook, 
  ArrowRight,
  HardHat,
  DraftingCompass,
  Hammer,
  Layout,
  Briefcase
} from 'lucide-react';
import { StatItem } from '../components/Shared';

const Hero = () => {
  return (
    <section id="home" className="relative flex h-screen min-h-[700px] w-full items-center justify-center overflow-hidden bg-charcoal">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="absolute inset-0 h-full w-full object-cover grayscale opacity-40 transition-transform duration-[10s] hover:scale-110"
          poster="/hero_slide_1.png"
        >
          <source src="https://upload.wikimedia.org/wikipedia/commons/transcoded/1/1c/Time_lapse_of_a_building_construction.webm/Time_lapse_of_a_building_construction.webm.720p.webm" type="video/webm" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-charcoal/40" />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/40 via-transparent to-charcoal" />
        <div className="absolute inset-0 shadow-[inset_0_0_150px_rgba(0,0,0,0.8)]" />
        <div className="absolute inset-0 bg-grid opacity-20" />
      </div>

      <div className="absolute inset-0 bg-glow pointer-events-none z-[1]" />
      <div className="absolute top-0 left-0 w-24 h-24 border-t border-l border-gold/30 m-12 lg:m-24 z-10 hidden md:block"></div>
      
      <div className="absolute bottom-32 left-12 pointer-events-none z-10 hidden lg:block">
        <div className="flex flex-col gap-4 items-center">
          <div className="w-[1px] h-32 bg-gradient-to-t from-gold to-transparent"></div>
          <span className="text-[9px] uppercase tracking-widest text-gold py-2" style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}>Structural Excellence</span>
        </div>
      </div>

      <div className="relative z-10 flex flex-col items-center px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.8, ease: "easeOut" }}
        >
          <span className="text-accent text-xs uppercase tracking-[0.5em] font-bold mb-6 block">Premier Architectural Firm</span>
          <h2 className="mb-8 font-bebas text-7xl md:text-[8rem] lg:text-[10rem] leading-[0.85] tracking-tighter text-white drop-shadow-2xl">
            WE BUILD <br />
            <span className="text-gold">YOUR VISION</span>
          </h2>
          <p className="mx-auto mb-12 max-w-lg font-sans text-lg md:text-xl text-white/80 leading-relaxed font-medium drop-shadow-lg">
            Transforming blueprints into landmarks since 1990. Expert engineering meeting luxury aesthetic design.
          </p>
          <div className="flex flex-col md:flex-row gap-6 justify-center">
            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#our-work"
              className="group relative flex items-center justify-center gap-3 overflow-hidden bg-gold px-12 py-5 font-bebas text-2xl tracking-wider text-charcoal transition-all hover:bg-gold-light"
            >
              EXPLORE WORKS
              <span className="text-xl transition-transform group-hover:translate-x-2">→</span>
            </motion.a>
            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="/contact"
              className="flex items-center justify-center border border-white/40 backdrop-blur-sm px-12 py-5 font-bebas text-2xl tracking-wider text-white hover:border-gold hover:bg-white/5 transition-colors"
            >
              CONTACT US
            </motion.a>
          </div>
        </motion.div>
      </div>

      <div className="pointer-events-none absolute inset-0 opacity-10">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 0.8, 0],
            }}
            transition={{
              duration: 6 + Math.random() * 6,
              repeat: Infinity,
              delay: Math.random() * 5
            }}
            className="absolute h-1 w-1 bg-gold rounded-full"
            style={{ 
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`
            }}
          />
        ))}
      </div>
    </section>
  );
};

const AboutSection = () => {
  return (
    <section id="about" className="relative py-32 md:py-52 bg-charcoal overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(var(--gold) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      
      <div className="mx-auto max-w-7xl px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
        <motion.div
           initial={{ opacity: 0, x: -60 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 1 }}
           className="relative"
        >
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 bg-slate-dark/30 p-10 glass border border-gold/10 rounded-3xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gold/5 blur-[80px]" />
            <StatItem number={36} label="LEGACY YEARS" />
            <StatItem number={500} label="PROJECTS DONE" />
            <StatItem number={1000} label="HAPPY CLIENTS" />
            <StatItem number={5} label="DESIGN AWARDS" suffix="+" />
            <StatItem number={50} label="EXPERT HANDS" />
          </div>
          <div className="absolute -bottom-8 -right-8 h-40 w-40 border-b-2 border-r-2 border-gold/20 rounded-br-[4rem]" />
          <div className="absolute -top-8 -left-8 h-40 w-40 border-t-2 border-l-2 border-gold/20 rounded-tl-[4rem]" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <h4 className="font-bebas text-gold text-2xl tracking-[0.4em] mb-8 flex items-center gap-4">
             <span className="w-12 h-px bg-gold" /> BEYOND CONCRETE
          </h4>
          <h2 className="font-bebas text-6xl md:text-8xl text-white mb-10 leading-[0.9]">
            CRAFTING SPACES <br />
            <span className="text-stroke text-white/20 uppercase">That Breathe life</span>
          </h2>
          <p className="font-sans text-xl text-white/50 mb-12 leading-relaxed font-light">
            Founded in 1990, ASHISH Constructions has consistently pushed the boundaries of what's possible in Indian architecture. We don't just build structures; we assemble environments where dreams take physical form. Our team combines rigorous engineering with avant-garde design.
          </p>
          <motion.div 
             whileInView={{ width: '100%' }}
             initial={{ width: '0%' }}
             viewport={{ once: true }}
             transition={{ duration: 2, ease: "easeInOut" }}
             className="h-px bg-gradient-to-r from-gold/40 to-transparent mb-12"
          />
          <div className="flex flex-wrap items-center gap-10">
            <div className="flex -space-x-4">
              {['/PAVAN.jpg', '/ASHISH.png', '/MILAN.webp'].map((img, i) => (
                <div key={i} className="h-12 w-12 rounded-full border-2 border-charcoal bg-slate-dark/50 flex items-center justify-center backdrop-blur-sm overflow-hidden">
                  <img 
                    src={img} 
                    alt="Team Member" 
                    className={`h-full w-full object-cover opacity-90 group-hover:opacity-100 transition-opacity ${img.includes('PAVAN') ? 'object-[center_20%]' : 'object-center'}`}
                    referrerPolicy="no-referrer" 
                  />
                </div>
              ))}
            </div>
            <p className="font-bebas text-xl tracking-[0.2em] text-white/40">TRUSTED BY 1000+ HAPPY CLIENTS</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const ProjectCard = ({ project }: { project: any, key?: React.Key }) => {
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -12;
    const rotateY = ((x - centerX) / centerX) * 12;
    setRotation({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => setRotation({ x: 0, y: 0 });

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      style={{
        transform: `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
      }}
      className="group relative aspect-[4/5] overflow-hidden rounded-2xl border border-white/5 bg-slate-dark/20 transition-all duration-300 preserve-3d cursor-pointer"
    >
      <div 
        className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-110" 
        style={{ backgroundImage: `url(${project.image})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/40 to-transparent" />
      
      <div className="absolute bottom-0 left-0 p-10 w-full transform translate-z-[40px]">
        <p className="font-bebas text-gold text-lg tracking-[0.4em] mb-4 opacity-0 transform -translate-y-4 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">{project.category}</p>
        <h3 className="font-bebas text-4xl text-white mb-6 tracking-wide drop-shadow-xl">{project.title}</h3>
        <button className="flex items-center gap-3 font-bebas text-xl tracking-widest text-gold opacity-0 transform translate-y-4 transition-all duration-500 delay-100 group-hover:opacity-100 group-hover:translate-y-0">
          EXPLORE <ArrowRight size={20} />
        </button>
      </div>

      <div className="absolute inset-0 border-[0.5px] border-gold/0 transition-all duration-700 group-hover:border-gold/40 group-hover:shadow-gold-heavy pointer-events-none" />
    </motion.div>
  );
};

const Projects = () => {
  const [filter, setFilter] = useState('ALL');

  const allProjects = [
    // Residential
    { id: 1, title: "EMERALD VILLA", category: "RESIDENTIAL", image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=2071&auto=format&fit=crop" },
    { id: 2, title: "SKYLINE APARTMENTS", category: "RESIDENTIAL", image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=2070&auto=format&fit=crop" },
    { id: 3, title: "OAKWOOD ESTATE", category: "RESIDENTIAL", image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop" },
    { id: 4, title: "MARINA PENTHOUSE", category: "RESIDENTIAL", image: "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?q=80&w=2070&auto=format&fit=crop" },
    
    // Commercial
    { id: 5, title: "AXIS TRADE CENTER", category: "COMMERCIAL", image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop" },
    { id: 6, title: "CRYSTAL PLAZA", category: "COMMERCIAL", image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=2070&auto=format&fit=crop" },
    { id: 7, title: "ORION BUSINESS HUB", category: "COMMERCIAL", image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2070&auto=format&fit=crop" },
    { id: 8, title: "METRO MALL", category: "COMMERCIAL", image: "https://images.unsplash.com/photo-1519567241046-7f570eee3ce6?q=80&w=2070&auto=format&fit=crop" },

    // Industrial
    { id: 9, title: "TITAN LOGISTICS", category: "INDUSTRIAL", image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop" },
    { id: 10, title: "IRONCLAD PLANT", category: "INDUSTRIAL", image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=2070&auto=format&fit=crop" },
    { id: 11, title: "POWERGRID STATION", category: "INDUSTRIAL", image: "https://images.unsplash.com/photo-1513828583688-c52646db42da?q=80&w=2070&auto=format&fit=crop" },
    { id: 12, title: "TECHNO REFINERY", category: "INDUSTRIAL", image: "https://images.unsplash.com/photo-1518623489648-a173ef7824f3?q=80&w=2070&auto=format&fit=crop" },
  ];

  const filteredProjects = filter === 'ALL' 
    ? allProjects 
    : allProjects.filter(p => p.category === filter);

  return (
    <section id="our-work" className="py-32 md:py-52 bg-charcoal">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h4 className="font-bebas text-gold text-2xl tracking-[0.4em] mb-6">SELECTED WORKS</h4>
            <h2 className="font-bebas text-7xl md:text-8xl lg:text-9xl text-white">THE <span className="text-stroke text-white/30">MASTERPIECES</span></h2>
          </motion.div>
          <div className="flex flex-wrap gap-6 border-b border-white/5 pb-4">
             {['ALL', 'RESIDENTIAL', 'COMMERCIAL', 'INDUSTRIAL'].map(tab => (
               <button 
                key={tab} 
                onClick={() => setFilter(tab)}
                className={`font-bebas text-xl tracking-widest transition-colors relative group ${filter === tab ? 'text-gold' : 'text-white/40 hover:text-gold'}`}
               >
                 {tab}
                 <span className={`absolute -bottom-5 left-0 h-px bg-gold transition-all duration-300 ${filter === tab ? 'w-full' : 'w-0 group-hover:w-full'}`} />
               </button>
             ))}
          </div>
        </div>

        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    { 
      icon: Building2, 
      title: "TURNKEY CONSTRUCTION", 
      description: "Full building construction, high-rise skyscrapers, and custom luxury villa projects delivered end-to-end." 
    },
    { 
      icon: Layout, 
      title: "TILES & FLOORING", 
      description: "Complete building tiles contracts, interior marble laying, and premium exterior cladding solutions." 
    },
    { 
      icon: Hammer, 
      title: "INTERIOR FINISHING", 
      description: "Bespoke interior design, false ceiling, gypsum work, and high-quality painting and wall finishing." 
    },
    { 
      icon: Briefcase, 
      title: "RAW MATERIAL SUPPLY", 
      description: "Supply of cement, sand, steel, and bricks at best market prices for large-scale construction." 
    },
    { 
      icon: HardHat, 
      title: "RENOVATION & REPAIRS", 
      description: "Structural retrofitting, remodeling, and waterproofing to breathe new life into existing structures." 
    },
    { 
      icon: DraftingCompass, 
      title: "PROJECT MANAGEMENT", 
      description: "Architectural planning, site supervision, and design consultation to ensure engineering precision." 
    },
  ];

  return (
    <section id="services" className="relative py-32 md:py-52 bg-slate-dark overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] opacity-[0.03] pointer-events-none">
        <img src="/logo.png" alt="" className="w-full h-full object-contain grayscale" referrerPolicy="no-referrer" />
      </div>
      
      <div className="mx-auto max-w-7xl px-6 lg:px-12 relative z-10">
        <div className="text-center mb-24 max-w-3xl mx-auto">
           <motion.h4 
             initial={{ opacity: 0 }}
             whileInView={{ opacity: 1 }}
             viewport={{ once: true }}
             className="font-bebas text-gold text-2xl tracking-[0.4em] mb-6"
           >
             CRAFTING CAPABILITIES
           </motion.h4>
           <motion.h2 
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="font-bebas text-6xl md:text-8xl text-white mb-8"
           >
             OUR ELITE <span className="text-gold">SERVICES</span>
           </motion.h2>
           <p className="font-sans text-xl text-white/40 leading-relaxed">
             From end-to-end turnkey skyscrapers to bespoke luxury villa construction and raw material supply, we provide the full spectrum of engineering excellence.
           </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="group p-12 glass rounded-3xl border-gold/5 hover:border-gold/40 transition-all duration-700 hover:-translate-y-4"
            >
              <div className="mb-10 inline-flex h-20 w-20 items-center justify-center rounded-2xl bg-gold/5 text-gold transition-all duration-500 group-hover:bg-gold group-hover:text-charcoal group-hover:shadow-gold-heavy">
                <service.icon size={40} />
              </div>
              <h3 className="font-bebas text-3xl mb-6 text-white group-hover:text-gold transition-colors tracking-wide">{service.title}</h3>
              <p className="font-sans text-lg text-white/40 group-hover:text-white/70 transition-colors leading-relaxed font-light">{service.description}</p>
              
              <div className="mt-10 h-px w-0 bg-gold/50 transition-all duration-500 group-hover:w-full" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Hero />
      <div className="relative h-px w-full bg-gold/10 overflow-hidden">
        <motion.div 
           initial={{ x: "-100%" }}
           whileInView={{ x: "100%" }}
           transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
           className="h-full w-40 bg-gold/50 blur-sm"
        />
      </div>
      <SectionWrapper>
        <AboutSection />
      </SectionWrapper>
      
      <div className="bg-[#050505] py-20 border-y border-gold/10 overflow-hidden relative">
         <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
        <div className="flex gap-40 whitespace-nowrap animate-marquee">
          <div className="flex gap-40 items-center">
            <span className="font-bebas text-6xl md:text-[10rem] text-white/5 tracking-[0.2em]">ASHISH CONSTRUCTIONS</span>
            <span className="font-bebas text-6xl md:text-[8rem] text-gold/20 tracking-[0.2em] italic">QUALITY FIRST</span>
            <span className="font-bebas text-6xl md:text-[10rem] text-white/5 tracking-[0.2em]">CRAFTING FUTURES</span>
            <span className="font-bebas text-6xl md:text-[8rem] text-gold/20 tracking-[0.2em] italic">BUILD YOUR VISION</span>
          </div>
          <div className="flex gap-40 items-center">
            <span className="font-bebas text-6xl md:text-[10rem] text-white/5 tracking-[0.2em]">ASHISH CONSTRUCTIONS</span>
            <span className="font-bebas text-6xl md:text-[8rem] text-gold/20 tracking-[0.2em] italic">QUALITY FIRST</span>
            <span className="font-bebas text-6xl md:text-[10rem] text-white/5 tracking-[0.2em]">CRAFTING FUTURES</span>
            <span className="font-bebas text-6xl md:text-[8rem] text-gold/20 tracking-[0.2em] italic">BUILD YOUR VISION</span>
          </div>
        </div>
      </div>

      <SectionWrapper>
        <Projects />
      </SectionWrapper>
      
      <SectionWrapper>
        <Services />
      </SectionWrapper>
      
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 40s linear infinite;
        }
      `}</style>
    </motion.div>
  );
}

const SectionWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
};
