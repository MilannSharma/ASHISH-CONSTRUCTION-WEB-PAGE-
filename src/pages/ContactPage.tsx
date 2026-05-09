import React from 'react';
import { motion } from 'motion/react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send,
  MessageCircle,
  Building2,
  Users
} from 'lucide-react';

const TeamContact = ({ name, role, phone, image }: { name: string, role: string, phone: string, image: string, key?: React.Key }) => {
  return (
    <div className="p-8 border border-white/5 bg-white/[0.02] rounded-3xl group hover:border-gold/30 transition-all">
      <div className="flex items-center gap-6 mb-4">
        <div className="h-16 w-16 rounded-full border border-gold/20 overflow-hidden group-hover:border-gold transition-all">
          <img 
            src={image} 
            alt={name} 
            className={`w-full h-full object-cover transition-all duration-500 ${name.toLowerCase().includes('pavan') ? 'object-[center_20%]' : 'object-center'}`} 
            referrerPolicy="no-referrer"
          />
        </div>
        <div>
          <h4 className="font-bebas text-2xl text-white tracking-widest leading-none mb-1">{name}</h4>
          <p className="text-gold/50 text-[10px] uppercase tracking-[0.2em] font-bold">{role}</p>
        </div>
      </div>
      <a href={`tel:${phone}`} className="flex items-center gap-3 text-white/50 hover:text-gold transition-colors font-sans font-medium">
        <Phone size={18} /> {phone}
      </a>
    </div>
  );
};

export default function ContactPage() {
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    projectType: 'Residental Villa',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Formatting the message for WhatsApp with bold titles and spacing
    const formattedMessage = encodeURIComponent(
      `*NEW INQUIRY FROM WEBSITE*\n\n` +
      `*👤 Name:* ${formData.name}\n` +
      `*📧 Email:* ${formData.email}\n` +
      `*🏗️ Project:* ${formData.projectType}\n` +
      `*💬 Message:* ${formData.message}`
    );
    
    // Using window.open to bypass iframe security restrictions as wa.me cannot be loaded inside the frame
    const whatsappURL = `https://wa.me/917030503318?text=${formattedMessage}`;
    window.open(whatsappURL, '_blank');
  };

  const team = [
    { name: "Pavan Kumar Sharma", role: "Founder", phone: "9421054738", image: "/PAVAN.jpg" },
    { name: "Ashish Sharma", role: "Co-Founder", phone: "7030503318", image: "/ASHISH.png" },
    { name: "Milan Parmar", role: "Project Head", phone: "7378339012", image: "/MILAN.webp" },
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
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="absolute inset-0 h-full w-full object-cover grayscale opacity-30"
          poster="https://images.unsplash.com/photo-1503387762-592dea58ef21?q=80&w=2070"
        >
          <source src="https://assets.mixkit.co/videos/preview/mixkit-hand-points-to-a-scale-model-of-a-house-11841-large.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/20 via-transparent to-charcoal" />
        
        <div className="relative z-10 text-center px-6">
          <motion.h4 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="font-bebas text-gold text-2xl tracking-[0.4em] mb-6"
          >
            LET'S CONSTRUCT TOMORROW
          </motion.h4>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="font-bebas text-7xl md:text-9xl text-white tracking-tighter"
          >
            GET IN <span className="text-gold">TOUCH</span>
          </motion.h1>
          <div className="mt-8 flex justify-center">
            <div className="h-px w-24 bg-gold/50" />
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-24">
          {/* Form Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass p-10 md:p-16 rounded-[3rem] border border-gold/10 relative overflow-hidden"
          >
            <div className="absolute -top-32 -right-32 w-64 h-64 bg-gold/10 blur-[100px] rounded-full" />
            <h3 className="font-bebas text-5xl text-white mb-10 tracking-widest">SEND A <span className="text-gold">MESSAGE</span></h3>
            
            <form className="space-y-10 relative z-10" onSubmit={handleSubmit}>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                 <div className="space-y-4">
                   <label className="text-[10px] uppercase tracking-widest text-muted font-bold">YOUR NAME</label>
                   <input 
                    type="text" 
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full bg-[#1A1A1A] border-b border-white/5 py-4 focus:border-gold outline-none transition-all text-white font-sans text-lg" 
                    placeholder="John Doe" 
                   />
                 </div>
                 <div className="space-y-4">
                   <label className="text-[10px] uppercase tracking-widest text-muted font-bold">EMAIL ADDRESS</label>
                   <input 
                    type="email" 
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full bg-[#1A1A1A] border-b border-white/5 py-4 focus:border-gold outline-none transition-all text-white font-sans text-lg" 
                    placeholder="john@example.com" 
                   />
                 </div>
               </div>
               
               <div className="space-y-4">
                 <label className="text-[10px] uppercase tracking-widest text-muted font-bold">PROJECT TYPE</label>
                 <select 
                  value={formData.projectType}
                  onChange={(e) => setFormData({...formData, projectType: e.target.value})}
                  className="w-full bg-[#1A1A1A] border-b border-white/5 py-4 focus:border-gold outline-none transition-all text-white font-sans text-lg appearance-none cursor-pointer"
                 >
                   <option className="bg-charcoal" value="Residental Villa">Residental Villa</option>
                   <option className="bg-charcoal" value="Apartment Building">Apartment Building</option>
                   <option className="bg-charcoal" value="Renovation / Tiles Work">Renovation / Tiles Work</option>
                   <option className="bg-charcoal" value="Commercial Complex">Commercial Complex</option>
                   <option className="bg-charcoal" value="Other Construction">Other Construction</option>
                 </select>
               </div>

               <div className="space-y-4">
                 <label className="text-[10px] uppercase tracking-widest text-muted font-bold">MESSAGE</label>
                 <textarea 
                  rows={4} 
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full bg-[#1A1A1A] border-b border-white/5 py-4 focus:border-gold outline-none transition-all text-white font-sans text-lg resize-none" 
                  placeholder="How can we help bring your vision to life?" 
                 />
               </div>

               <motion.button
                 type="submit"
                 whileHover={{ scale: 1.02, backgroundColor: '#D4B45E' }}
                 whileTap={{ scale: 0.98 }}
                 className="w-full bg-gold py-6 font-bebas text-3xl tracking-[0.2em] text-charcoal shadow-gold-heavy transition-all duration-300 rounded-xl flex items-center justify-center gap-4"
               >
                 SEND INQUIRY <Send size={24} />
               </motion.button>
            </form>
          </motion.div>

          {/* Info Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center"
          >
            <div className="mb-16">
              <h4 className="font-bebas text-gold text-2xl tracking-[0.4em] mb-8">DIRECT CONTACTS</h4>
              <p className="font-sans text-xl text-white/40 mb-12 italic">"Available globally for prestigious architectural consultations."</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 {team.map((person, i) => (
                    <TeamContact key={i} {...person} />
                 ))}
              </div>

               <div className="mt-8">
                 <a 
                   href={`https://wa.me/917030503318?text=${encodeURIComponent("Hii")}`}
                   target="_blank"
                   rel="noreferrer"
                   className="flex items-center justify-center gap-4 w-full bg-[#25D366] py-6 font-bebas text-3xl tracking-[0.2em] text-white shadow-lg transition-all duration-300 rounded-xl hover:bg-[#128C7E]"
                 >
                   CHAT ON WHATSAPP <MessageCircle size={24} fill="currentColor" />
                 </a>
               </div>
            </div>

            <div className="space-y-10 border-t border-white/5 pt-16">
              <div className="flex gap-8 group">
                <div className="flex-shrink-0 h-16 w-16 rounded-3xl border border-gold/20 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-charcoal transition-all">
                  <MapPin size={32} />
                </div>
                <div>
                  <p className="font-bebas text-2xl text-white tracking-widest mb-2">OFFICE HEADQUARTERS</p>
                  <p className="font-sans text-lg text-white/50 font-light whitespace-pre-line">
                    5H9M+46G, Tandulwadi Rd, Sapana Nagar, <br />
                    Sainagar, Surynagari, Baramati, <br />
                    Maharashtra 413102
                  </p>
                </div>
              </div>
              <div className="flex gap-8 group">
                <div className="flex-shrink-0 h-16 w-16 rounded-3xl border border-gold/20 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-charcoal transition-all">
                  <Mail size={32} />
                </div>
                <div>
                  <p className="font-bebas text-2xl text-white tracking-widest mb-2">EMAIL SUPPORT</p>
                  <p className="font-sans text-lg text-white/50 font-light">info@ashishconstructions.com <br /> support@builddashish.com</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-[500px] w-full border-t border-white/5 pt-1 bg-[#1A1A1A]">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.164364440538!2d74.5816229!3d18.1565556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc299696c6a7e0d%3A0x6bba843f5509e53e!2sTandulwadi%20Rd%2C%20Surynagari%2C%20Baramati%2C%20Maharashtra%20413102!5e0!3m2!1sen!2sin!4v1715264620000!5m2!1sen!2sin" 
          className="w-full h-full grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-700"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          title="Ashish Constructions Location"
        ></iframe>
      </section>
    </motion.div>
  );
}
