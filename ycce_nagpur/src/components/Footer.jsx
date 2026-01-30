import React from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, Phone, MapPin, Facebook, Twitter, Linkedin, 
  Instagram, ChevronRight, ArrowUpRight 
} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const footerLinks = [
    {
      title: "Quick Links",
      links: ["Departments", "Student Activities", "Training & Placement", "Research Portal", "Alumni Portal"]
    },
    {
      title: "Explore",
      links: ["About YCCE", "NIRF India Ranking", "Academics", "Library Portal", "Examination Results"]
    },
    {
      title: "Campus Resources",
      links: ["Governance & Admin", "Sustainability Drive", "Digital Learning", "Innovation & Startup", "Grievance Redressal"]
    }
  ];

  return (
    <footer className="bg-[#0b1120] text-slate-400 pt-24 pb-12 selection:bg-blue-500 selection:text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Main Content Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-16 pb-20"
        >
          
          {/* Brand & Narrative */}
          <motion.div variants={itemVariants} className="lg:col-span-4">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-14 h-14 bg-white rounded-2xl p-2 flex items-center justify-center shadow-2xl shadow-blue-500/20">
                <img src="/ycce-logo.png" alt="YCCE Logo" className="w-full h-auto" />
              </div>
              <div>
                <h2 className="text-2xl font-black text-white leading-none tracking-tighter">YCCE</h2>
                <p className="text-[10px] font-bold uppercase tracking-[0.3em] mt-1 text-blue-500">Nagpur</p>
              </div>
            </div>
            <p className="text-sm leading-relaxed mb-10 max-w-sm font-medium">
              Yeshwantrao Chavan College of Engineering. 
              An autonomous institution defining technical excellence since 1984. 
              Engineering the future, one mind at a time.
            </p>
            <div className="flex gap-4">
              {[Facebook, Twitter, Linkedin, Instagram].map((Icon, i) => (
                <motion.a
                  key={i}
                  whileHover={{ y: -8, backgroundColor: '#1d4ed8', color: '#fff' }}
                  whileTap={{ scale: 0.9 }}
                  href="#"
                  className="w-12 h-12 rounded-2xl bg-slate-800/50 flex items-center justify-center transition-colors border border-slate-700/50"
                >
                  <Icon size={20} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Dynamic Link Columns */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-3 gap-12">
            {footerLinks.map((section, i) => (
              <motion.div key={i} variants={itemVariants}>
                <h4 className="text-white font-black text-[11px] uppercase tracking-[0.2em] mb-8">
                  {section.title}
                </h4>
                <ul className="space-y-5">
                  {section.links.map((link, j) => (
                    <li key={j}>
                      <motion.a 
                        href="#" 
                        whileHover={{ x: 10, color: '#60a5fa' }}
                        className="text-[13px] font-bold flex items-center gap-2 transition-colors group"
                      >
                        <ChevronRight size={14} className="text-blue-500 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                        {link}
                      </motion.a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Contact & CTA */}
          <motion.div variants={itemVariants} className="lg:col-span-3">
            <h4 className="text-white font-black text-[11px] uppercase tracking-[0.2em] mb-8">
              Get in Touch
            </h4>
            <div className="space-y-8">
              <div className="flex gap-5 group">
                <div className="w-10 h-10 rounded-xl bg-slate-800/50 flex items-center justify-center shrink-0 group-hover:bg-blue-600 transition-colors">
                  <MapPin size={18} className="text-blue-500 group-hover:text-white" />
                </div>
                <p className="text-xs leading-relaxed font-medium">Hingna Road, Wanadongri, Nagpur - 441110, India</p>
              </div>
              <div className="flex gap-5 group">
                <div className="w-10 h-10 rounded-xl bg-slate-800/50 flex items-center justify-center shrink-0 group-hover:bg-blue-600 transition-colors">
                  <Phone size={18} className="text-blue-500 group-hover:text-white" />
                </div>
                <p className="text-xs leading-relaxed font-medium">+91 92250 3456</p>
              </div>
              
              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-5 bg-blue-600 text-white rounded-2xl font-black text-[10px] uppercase tracking-[0.2em] shadow-xl shadow-blue-600/20 flex items-center justify-center gap-3 group"
              >
                Apply for 2026-27
                <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </motion.button>
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="pt-12 border-t border-slate-800/50 flex flex-col md:flex-row justify-between items-center gap-8"
        >
          <div className="text-[11px] font-bold uppercase tracking-widest text-slate-500">
            © {currentYear} <span className="text-slate-300">YCCE Nagpur</span>. 
            <span className="hidden md:inline mx-4">|</span>
            Autonomous Institute
          </div>
          
          <div className="flex gap-10 text-[10px] font-black uppercase tracking-[0.2em]">
            <a href="#" className="hover:text-blue-400 transition-colors">Privacy</a>
            <a href="#" className="hover:text-blue-400 transition-colors">Compliance</a>
            <a href="#" className="text-slate-600">Developed by YCCE-IT</a>
          </div>
        </motion.div>

      </div>
    </footer>
  );
};

export default Footer;