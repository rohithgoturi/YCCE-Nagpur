import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, HelpCircle, MessageCircle } from 'lucide-react';

const FAQItem = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className={`mb-4 border-b border-slate-100 transition-all duration-300 ${isOpen ? 'bg-blue-50/50 rounded-2xl' : ''}`}>
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
      >
        <span className={`text-sm md:text-base font-bold transition-colors duration-300 ${isOpen ? 'text-blue-600' : 'text-[#002147]'}`}>
          {question}
        </span>
        <div className={`shrink-0 ml-4 p-1 rounded-full transition-transform duration-500 ${isOpen ? 'bg-blue-600 text-white rotate-180' : 'bg-slate-100 text-slate-400'}`}>
          {isOpen ? <Minus size={16} /> : <Plus size={16} />}
        </div>
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-6 text-slate-500 text-sm leading-relaxed font-medium">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "What is the benefit of YCCE being an Autonomous Institute?",
      answer: "Autonomy allows YCCE to design its own industry-aligned curriculum, conduct faster examinations, and declare results promptly. It ensures our students learn the latest technologies required by global employers."
    },
    {
      question: "What are the eligibility criteria for B.Tech Admissions?",
      answer: "Candidates must have passed 10+2 with Physics and Mathematics as compulsory subjects. Admission is primarily based on MHT-CET or JEE Main scores, followed by the CAP counseling process."
    },
    {
      question: "Does the college provide campus placement assistance?",
      answer: "Yes, our Department of Training & Placement is one of the strongest in Central India. We have a track record of 90% placements with major recruiters like TCS, Infosys, Cognizant, and Wipro visiting annually."
    },
    {
      question: "Are there scholarship programs available for students?",
      answer: "YCCE facilitates various State and Central Government scholarships (EBC, SC/ST, OBC, etc.). Additionally, merit-based institutional scholarships are available for high-performing students."
    },
    {
      question: "What research opportunities are available for UG students?",
      answer: "Students can participate in live research projects through our dedicated Innovation Center. YCCE encourages students to publish papers and apply for patents, with over 150+ patents filed by the institution."
    },
    {
      question: "Is there a hostel facility within the campus?",
      answer: "Yes, YCCE provides well-furnished separate hostels for boys and girls with 24/7 security, Wi-Fi connectivity, and hygienic mess facilities located within or near the campus."
    }
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Decorative Background Element */}
      <div className="absolute -right-20 top-40 w-80 h-80 bg-blue-50 rounded-full blur-3xl opacity-50 pointer-events-none" />
      
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="flex items-center justify-center gap-3 mb-4"
          >
            <HelpCircle size={18} className="text-blue-600" />
            <span className="text-blue-600 font-black text-[10px] uppercase tracking-[0.4em]">Student Support</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-black text-[#002147] tracking-tight mb-6"
          >
            Frequently Asked <span className="text-slate-400 font-medium">Questions.</span>
          </motion.h2>
          <p className="text-slate-500 font-medium italic">Everything you need to know about life at YCCE.</p>
        </div>

        {/* FAQ List */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="bg-white rounded-[2.5rem] p-4 md:p-8 border border-slate-100 shadow-2xl shadow-slate-200/50"
        >
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
            />
          ))}
        </motion.div>

        {/* Bottom Contact Prompt */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-12 flex flex-col md:flex-row items-center justify-center gap-6 p-8 rounded-3xl bg-[#002147] text-white"
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center">
              <MessageCircle size={20} className="text-blue-400" />
            </div>
            <p className="font-bold text-sm">Still have unanswered questions?</p>
          </div>
          <button className="px-8 py-3 bg-blue-600 hover:bg-blue-500 rounded-xl font-black text-[10px] uppercase tracking-widest transition-all">
            Contact Admissions Office
          </button>
        </motion.div>

      </div>
    </section>
  );
};

export default FAQ;