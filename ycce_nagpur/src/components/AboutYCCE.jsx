import React from 'react';
import { motion } from 'framer-motion';

const AboutYCCE = () => {
  const stats = [
    { label: "Engineering Disciplines", value: "12+", sub: "UG & PG Specializations" },
    { label: "Research Patents", value: "150+", sub: "Intellectual Property" },
    { label: "Placement Record", value: "90%", sub: "Annual Track Record" },
    { label: "Alumni Network", value: "40k+", sub: "Global Leaders" }
  ];

  return (
    <section className="py-24 bg-white overflow-hidden selection:bg-[#002147] selection:text-white">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row items-end justify-between mb-20 gap-8">
          <div className="flex-1">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="flex items-center gap-4 mb-6"
            >
              <span className="w-12 h-[2px] bg-blue-600"></span>
              <span className="text-blue-600 font-black text-[11px] uppercase tracking-[0.4em]">Autonomous Institute</span>
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-6xl font-black text-[#002147] leading-[1.1] tracking-tight"
            >
              Excellence Driven by <br />
              <span className="text-slate-400">Innovation.</span>
            </motion.h2>
          </div>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="flex-1 text-slate-500 font-medium leading-relaxed max-w-md border-l-4 border-slate-100 pl-8 lg:mb-2"
          >
            Founded in 1984, YCCE Nagpur has evolved into a global center for technical learning, 
            blending rigorous academics with a culture of real-world impact.
          </motion.p>
        </div>

        {/* The Overlapping Hero Composition */}
        <div className="relative grid grid-cols-1 md:grid-cols-12 gap-6 mb-24">
          
          {/* Main Campus Image */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="md:col-span-8 relative z-10 rounded-[2.5rem] overflow-hidden shadow-2xl group"
          >
            <img 
              src="https://ycce.edu/wp-content/uploads/2024/03/Website-Images-3.jpg" 
              className="w-full h-[500px] object-cover transition-transform duration-1000 group-hover:scale-105" 
              alt="YCCE Campus" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#002147]/60 to-transparent" />
            <div className="absolute bottom-10 left-10">
              <h3 className="text-white text-3xl font-black tracking-tight">25-Acre Smart Campus</h3>
              <div className="w-12 h-1 bg-blue-500 mt-3 rounded-full group-hover:w-24 transition-all duration-500" />
            </div>
          </motion.div>

          {/* Student Community Section (The visual you liked) */}
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="md:col-span-4 relative flex flex-col gap-6"
          >
            {/* The "Community" Box */}
            <div className="relative h-full rounded-[2.5rem] overflow-hidden group shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=600" 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
                alt="Student Community" 
              />
              <div className="absolute inset-0 bg-[#002147]/40 mix-blend-multiply transition-opacity group-hover:opacity-20" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-white/95 backdrop-blur-md px-8 py-6 rounded-3xl shadow-2xl text-center transform group-hover:scale-110 transition-transform duration-500">
                  <p className="text-[#002147] font-black text-xs uppercase tracking-widest mb-1">Join the</p>
                  <p className="text-blue-600 font-black text-2xl tracking-tighter uppercase leading-none">Community</p>
                </div>
              </div>
            </div>

            {/* Accreditation Badge */}
            <div className="bg-blue-950 p-8 rounded-[2.5rem] text-white shadow-xl shadow-blue-600/20">
              <div className="flex justify-between items-start mb-4">
                <span className="text-5xl font-black opacity-30">A++</span>
                <div className="p-2 bg-white/20 rounded-lg">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                </div>
              </div>
              <p className="font-black text-lg uppercase tracking-tight leading-none">NAAC Accredited</p>
              <p className="text-blue-100 text-xs font-bold mt-2 uppercase tracking-widest">Highest Grade Certificate</p>
            </div>
          </motion.div>
        </div>

        {/* Data Grid: High-Contrast Minimalist */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -8 }}
              className="p-8 rounded-[2rem] border border-slate-100 bg-[#f8fafc] hover:bg-white hover:shadow-2xl hover:shadow-slate-200 transition-all duration-500 group"
            >
              <h4 className="text-4xl font-black text-[#002147] tracking-tighter mb-2 group-hover:text-blue-600 transition-colors">
                {stat.value}
              </h4>
              <p className="text-[#002147] font-bold text-sm leading-tight mb-2">
                {stat.label}
              </p>
              <p className="text-slate-400 text-[10px] font-bold uppercase tracking-widest">
                {stat.sub}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Final CTA Strip */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-20 pt-8 border-t border-slate-100 flex flex-wrap justify-between items-center gap-6"
        >
          <div className="flex gap-10">
            <span className="text-slate-300 font-bold text-xs uppercase tracking-[0.2em]">NIRF Ranked</span>
            <span className="text-slate-300 font-bold text-xs uppercase tracking-[0.2em]">TEQIP Funded</span>
          </div>
          <button className="text-blue-600 font-black text-xs uppercase tracking-[0.3em] hover:tracking-[0.4em] transition-all flex items-center gap-3">
            Institutional Report 2026
            <span className="text-xl">→</span>
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutYCCE;