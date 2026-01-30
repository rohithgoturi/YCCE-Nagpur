import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const PremiumLoader = ({ finishLoading }) => {
  const [percent, setPercent] = useState(0);

  // Simulate loading progress
  useEffect(() => {
    const interval = setInterval(() => {
      setPercent((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(finishLoading, 300); // Small delay before exit
          return 100;
        }
        return prev + 1;
      });
    }, 30); // Speed of the loader
    return () => clearInterval(interval);
  }, [finishLoading]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ 
        y: "-100%", 
        transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } 
      }}
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#002147] text-white"
    >
      {/* 1. Letter Animation */}
      <div className="overflow-hidden flex gap-1 mb-4">
        {["Y", "C", "C", "E"].map((char, i) => (
          <motion.span
            key={i}
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            transition={{ 
              delay: i * 0.1, 
              duration: 0.8, 
              ease: [0.33, 1, 0.68, 1] 
            }}
            className="text-6xl md:text-8xl font-black tracking-tighter"
          >
            {char}
          </motion.span>
        ))}
      </div>

      {/* 2. Subtext Reveal */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="flex flex-col items-center"
      >
        <p className="text-blue-400 font-bold tracking-[0.4em] uppercase text-[10px] md:text-xs mb-8">
          Engineering Excellence
        </p>

        {/* 3. High-Precision Progress Bar */}
        <div className="relative w-48 md:w-64 h-[2px] bg-white/10 rounded-full overflow-hidden">
          <motion.div 
            className="absolute top-0 left-0 h-full bg-blue-500"
            initial={{ width: 0 }}
            animate={{ width: `${percent}%` }}
            transition={{ ease: "linear" }}
          />
        </div>
        
        {/* Percentage Counter */}
        <span className="mt-4 text-[10px] font-mono text-blue-200/50">
          {percent}%
        </span>
      </motion.div>

      {/* Background Decorative Circle */}
      <motion.div 
        animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1] 
        }}
        transition={{ duration: 4, repeat: Infinity }}
        className="absolute w-[500px] h-[500px] border border-white/5 rounded-full"
      />
    </motion.div>
  );
};

export default PremiumLoader;