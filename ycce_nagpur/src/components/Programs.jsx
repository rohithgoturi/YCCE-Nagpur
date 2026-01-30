import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, Share2, ChevronLeft, ChevronRight, GraduationCap, Microscope, BookOpen } from 'lucide-react';

const ProgramCard = ({ title, image, duration, type = "Full Time" }) => (
  <motion.div 
    whileHover={{ y: -10 }}
    className="min-w-[300px] md:min-w-[340px] bg-white rounded-2xl overflow-hidden shadow-[0_15px_40px_rgba(0,0,0,0.06)] border border-slate-100 flex flex-col snap-start"
  >
    <div className="relative h-48 overflow-hidden">
      <img src={image} alt={title} className="w-full h-full object-cover transition-transform duration-700 hover:scale-110" />
    </div>

    <div className="p-6 flex flex-col flex-grow">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-lg font-black text-[#002147] leading-tight pr-4">{title}</h3>
        <button className="text-slate-300 hover:text-blue-600 transition-colors">
          <Share2 size={18} />
        </button>
      </div>

      <div className="flex items-center gap-4 text-slate-500 text-[11px] font-bold uppercase tracking-wider mb-8 mt-auto">
        <div className="flex items-center gap-1.5">
          <Calendar size={14} className="text-blue-600" />
          <span>{duration}</span>
        </div>
        <div className="flex items-center gap-1.5">
          <Clock size={14} className="text-blue-600" />
          <span>{type}</span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <button className="py-3 rounded-xl border-2 border-[#002147] text-[#002147] font-black text-[10px] uppercase tracking-widest hover:bg-slate-50 transition-all">
          Learn More
        </button>
        <button className="py-3 rounded-xl bg-[#002147] text-white font-black text-[10px] uppercase tracking-widest hover:bg-blue-900 transition-all shadow-lg shadow-blue-900/20">
          Apply Now
        </button>
      </div>
    </div>
  </motion.div>
);

const ProgramSection = ({ title, count, programs, icon }) => (
  <div className="mb-20 last:mb-0">
    <div className="flex items-center justify-between mb-8">
      <div className="flex items-center gap-4">
        <div className="p-3 bg-blue-50 rounded-xl text-blue-600">
          {icon}
        </div>
        <h4 className="text-2xl font-black text-[#002147] tracking-tight">
          {title} <span className="text-slate-300 ml-2">({count})</span>
        </h4>
      </div>
      
      <div className="flex gap-2 hidden md:flex">
        <button className="p-2 rounded-full border border-slate-200 text-[#002147] hover:bg-slate-50 transition-all">
          <ChevronLeft size={20} />
        </button>
        <button className="p-2 rounded-full border border-slate-200 text-[#002147] hover:bg-slate-50 transition-all">
          <ChevronRight size={20} />
        </button>
      </div>
    </div>

    <div className="flex gap-6 overflow-x-auto pb-8 scrollbar-hide no-scrollbar snap-x snap-mandatory">
      {programs.map((prog, idx) => (
        <ProgramCard key={idx} {...prog} />
      ))}
    </div>
  </div>
);

const Programs = () => {
  const data = {
    ug: [
      { title: "Civil Engineering", image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=400", duration: "4 Years" },
      { title: "Mechanical Engineering", image: "https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?q=80&w=400", duration: "4 Years" },
      { title: "Electronics Engineering", image: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?q=80&w=400", duration: "4 Years" },
      { title: "Electrical Engineering", image: "https://images.unsplash.com/photo-1498084393753-b411b2d26b34?q=80&w=400", duration: "4 Years" },
      { title: "Electronics & Telecomm. (ENTC)", image: "https://images.unsplash.com/photo-1558494949-ef0109121c94?q=80&w=400", duration: "4 Years" },
      { title: "Computer Technology", image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=400", duration: "4 Years" },
      { title: "Information Technology", image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=400", duration: "4 Years" },
      { title: "Computer Science & Engineering", image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=400", duration: "4 Years" },
      { title: "Management Studies", image: "https://images.unsplash.com/photo-1454165833767-027eeef1596e?q=80&w=400", duration: "4 Years" },
      { title: "Applied Sciences & Humanities", image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=400", duration: "4 Years" },
    ],
    pg: [
      { title: "Structural Engineering", image: "https://images.unsplash.com/photo-1503387762-592dea58ef23?q=80&w=400", duration: "2 Years" },
      { title: "Computer Science & Engineering", image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=400", duration: "2 Years" },
      { title: "Integrated Power Systems", image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=400", duration: "2 Years" },
    ],
    phd: [
      { title: "Ph.D. in Civil Engineering", image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=400", duration: "3-5 Years" },
      { title: "Ph.D. in Mechanical Engineering", image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=400", duration: "3-5 Years" },
    ]
  };

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Main Section Header */}
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-[#002147] mb-6 tracking-tight">
            Discover Our <span className="text-blue-600">Programs</span>
          </h2>
          <div className="h-1.5 w-full bg-slate-100 relative">
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: '120px' }}
              className="absolute top-0 left-0 h-full bg-[#002147]" 
            />
          </div>
        </div>

        {/* UG Section */}
        <ProgramSection 
          title="Under Graduate Programs" 
          count={data.ug.length} 
          programs={data.ug} 
          icon={<BookOpen size={20} />} 
        />

        {/* PG Section */}
        <ProgramSection 
          title="Post Graduate Programs" 
          count={data.pg.length} 
          programs={data.pg} 
          icon={<GraduationCap size={20} />} 
        />

        {/* PhD Section */}
        <ProgramSection 
          title="Doctoral Degrees" 
          count={data.phd.length} 
          programs={data.phd} 
          icon={<Microscope size={20} />} 
        />

      </div>
    </section>
  );
};

export default Programs;