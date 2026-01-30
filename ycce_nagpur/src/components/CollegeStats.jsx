import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView, useMotionValue, useSpring } from 'framer-motion';
// import engineers_ycee from '../assets/engineers_ycee.jpg';

// REUSABLE COUNTER COMPONENT - This handles the "Live" animation
const Counter = ({ value, suffix = "" }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" }); // Triggers slightly before it hits center
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 30,
    stiffness: 60,
  });

  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    // This listener ensures the React state updates as the spring moves
    const unsubscribe = springValue.on("change", (latest) => {
      setDisplayValue(Math.floor(latest));
    });
    return () => unsubscribe();
  }, [springValue]);

  return <span ref={ref}>{displayValue.toLocaleString()}{suffix}</span>;
};

const CollegeStats = () => {
  const stats = [
    {
      id: 1,
      label: "Engineers in Making",
      value: 15000,
      suffix: "+",
      image: "https://i.pinimg.com/736x/48/ed/88/48ed88c9b82b1174a964f13228f359d7.jpg",
      subtext: "A thriving community of innovators and learners."
    },
    {
      id: 2,
      label: "Expert Mentors",
      value: 450,
      suffix: "+",
      image: "https://i.pinimg.com/736x/ee/f4/1e/eef41ee63ab628af6244249ebbbbc11f.jpg",
      subtext: "World-class faculty with deep industry roots."
    },
    {
      id: 3,
      label: "Research Publications",
      value: 3000,
      suffix: "+",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1470&auto=format&fit=crop",
      subtext: "Pioneering research recognized on global platforms."
    },
    {
      id: 4,
      label: "Patents & Startups",
      value: 120,
      suffix: "+",
      image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?q=80&w=1470&auto=format&fit=crop",
      subtext: "Turning classroom ideas into market ventures."
    }
  ];

  return (
    <section className="bg-white py-24 px-6 border-t border-gray-100">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="mb-16">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3 mb-4"
          >
            <span className="h-px w-12 bg-blue-600"></span>
            <span className="text-blue-600 font-bold tracking-widest text-xs uppercase">Institutional Impact</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-black text-slate-900 leading-tight"
          >
            A Legacy of <span className="text-blue-600 italic">Excellence</span> <br />
            Driven by Real Results.
          </motion.h2>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div 
              key={stat.id} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="relative h-[480px] group rounded-[2rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500"
            >
              {/* Image with Dark Overlay */}
              <div className="absolute inset-0">
                <img 
                  src={stat.image} 
                  alt={stat.label} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/60 to-transparent opacity-90" />
              </div>

              {/* Text Content */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end text-white">
                <div className="mb-2">
                  <span className="text-5xl font-black tracking-tighter block mb-2">
                    <Counter value={stat.value} suffix={stat.suffix} />
                  </span>
                  <div className="h-1 w-12 bg-blue-500 rounded-full mb-4 group-hover:w-24 transition-all duration-500" />
                </div>
                
                <h3 className="text-xl font-bold text-white group-hover:text-blue-300 transition-colors">
                  {stat.label}
                </h3>
                
                <p className="text-sm text-slate-300 mt-3 leading-relaxed opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                  {stat.subtext}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CollegeStats;