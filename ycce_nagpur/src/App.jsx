import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Components
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import NoticeBoard from "./components/NoticeBoard";
import Footer from "./components/Footer";
import ScrollProgress from "./components/ScrollProgress";
import PremiumLoader from "./components/PremiumLoader"; // Updated name
import CollegeStats from "./components/CollegeStats";
import AboutYCCE from "./components/AboutYCCE";
import Programs from "./components/Programs";
import FAQ from "./components/FAQ";
import AIChatBot from "./components/AIChatBot";

const App = () => {
  const [loading, setLoading] = useState(true);

  // This function is triggered by the PremiumLoader once the 100% count finishes
  const handleLoadingComplete = () => {
    setLoading(false);
  };

  return (
    <div className="bg-white selection:bg-blue-600 selection:text-white">
      {/* 1. Loader Orchestration */}
      <AnimatePresence mode="wait">
        {loading && (
          <PremiumLoader key="loader" finishLoading={handleLoadingComplete} />
        )}
      </AnimatePresence>

      {/* 2. Main Layout - Wrapped in a motion div for a smooth entrance */}
      {!loading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <ScrollProgress />
          <Navbar />
          
          <main>
            {/* Sections arranged for a professional storytelling flow */}
            <Hero />
            <AboutYCCE />
            <CollegeStats />
            
            
            
            {/* Grouped Information Section */}
            <div className="bg-slate-50/50">
              <NoticeBoard />
            </div>

            <Programs />
            <FAQ />
          </main>
          
          <Footer />
          <AIChatBot />
        </motion.div>
      )}
    </div>
  );
};

export default App;
