import React from 'react';
import { motion } from 'framer-motion';

const Highlights = () => {
  const stats = [
    {
      id: 1,
      // Representing 'Years of Excellence' with an image of the historic campus or graduation
      image: "https://images.unsplash.com/photo-1541339907198-e08756dee81c?q=80&w=1470&auto=format&fit=crop",
      title: "40+ Years",
      desc: "of Educational Excellence",
      accent: "bg-amber-500"
    },
    {
      id: 2,
      // Representing 'NAAC A++' with a professional building/quality seal feel
      image: "https://images.unsplash.com/photo-1523050335102-c6744740bb1e?q=80&w=1470&auto=format&fit=crop",
      title: "NAAC A++",
      desc: "Highest Accreditation Grade",
      accent: "bg-blue-600"
    },
    {
      id: 3,
      // Representing 'Top Placements' with a modern corporate/professional setting
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1470&auto=format&fit=crop",
      title: "Top Placements",
      desc: "In Core & Global Companies",
      accent: "bg-emerald-600"
    },
    {
      id: 4,
      // Representing 'Research Hub' with a high-tech lab/innovation setting
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1470&auto=format&fit=crop",
      title: "Research Hub",
      desc: "Innovation & Startup Center",
      accent: "bg-purple-600"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header - Styled like your reference image 3 */}
        <div className="flex items-center gap-3 mb-12 border-l-4 border-[#002147] pl-5">
          <div>
            <p className="text-blue-600 font-bold text-xs uppercase tracking-[0.2em] mb-1">Key Achievements</p>
            <h2 className="text-3xl font-black text-slate-900 tracking-tight">
              Institutional Highlights
            </h2>
          </div>
        </div>

        {/* Grid Container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative h-64 w-full rounded-2xl overflow-hidden shadow-md transition-all duration-500"
            >
              {/* Background Image */}
              <img 
                src={item.image} 
                alt={item.title} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* Overlay Gradient for Text Readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent opacity-80" />

              {/* Content */}
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <div className={`w-10 h-1 mb-3 rounded-full ${item.accent} transition-all duration-500 group-hover:w-16`} />
                <h3 className="text-xl font-black text-white leading-tight">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm font-medium text-slate-200 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Highlights;