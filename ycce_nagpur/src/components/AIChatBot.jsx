import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { Send, X, Bot, Sparkles, User } from 'lucide-react';

const AIChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([
    { role: 'bot', text: 'Hello! I am your YCCE AI guide. How can I assist you today?' }
  ]);

  const handleSend = () => {
    if (!input.trim()) return;
    const userMsg = { role: 'user', text: input };
    setMessages(prev => [...prev, userMsg]);
    setInput('');

    // Simulated AI Response
    setTimeout(() => {
      setMessages(prev => [...prev, { 
        role: 'bot', 
        text: "I've noted your query regarding " + input + ". Would you like to speak with our admissions coordinator?" 
      }]);
    }, 1000);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[9999] flex flex-col items-end">
      
      {/* --- ANIMATED 3D ROBOT BUTTON --- */}
      <div className="relative cursor-pointer group" onClick={() => setIsOpen(!isOpen)}>
        {/* Energy Glow Aura */}
        <motion.div 
          animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ repeat: Infinity, duration: 3 }}
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-20 h-6 bg-blue-500 blur-xl rounded-full"
        />

        {/* Lottie Animated Robot */}
        <motion.div
          animate={{ y: [0, -12, 0] }}
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          className="w-28 h-28 md:w-32 md:h-32 drop-shadow-2xl relative z-10"
        >
          <DotLottieReact
            src="https://lottie.host/80746979-5028-4193-863a-86716a5b6727/W9B393GToD.lottie"
            loop
            autoplay
          />
          
          <AnimatePresence>
            {isOpen && (
              <motion.div 
                initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }}
                className="absolute top-2 right-2 bg-red-500 text-white p-1 rounded-full shadow-lg z-20"
              >
                <X size={18} />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Hover Tooltip */}
        {!isOpen && (
          <motion.div 
            initial={{ opacity: 0, x: 10 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-white px-4 py-2 rounded-2xl shadow-xl border border-slate-100 hidden md:flex items-center gap-2 whitespace-nowrap"
          >
            <Sparkles size={14} className="text-blue-500 animate-pulse" />
            <span className="text-[#002147] text-[10px] font-black uppercase tracking-widest">Assistant Online</span>
          </motion.div>
        )}
      </div>

      {/* --- CHAT BOX INTERFACE --- */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9, transformOrigin: 'bottom right' }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            className="absolute bottom-32 right-0 w-[350px] md:w-[400px] h-[500px] bg-white rounded-[2.5rem] shadow-[0_20px_60px_rgba(0,0,0,0.2)] border border-slate-100 overflow-hidden flex flex-col"
          >
            {/* Header */}
            <div className="bg-[#002147] p-6 flex items-center gap-4">
              <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white">
                <Bot size={24} />
              </div>
              <div>
                <h3 className="text-white font-black text-xs uppercase tracking-widest">YCCE Concierge</h3>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-blue-300 text-[9px] font-bold uppercase tracking-widest">Powered by AI</span>
                </div>
              </div>
            </div>

            {/* Messages Area */}
            <div className="flex-grow p-6 overflow-y-auto bg-slate-50 space-y-4">
              {messages.map((msg, i) => (
                <div key={i} className={`flex ${msg.role === 'bot' ? 'justify-start' : 'justify-end'}`}>
                  <div className={`max-w-[80%] p-4 rounded-2xl text-[13px] font-medium leading-relaxed ${
                    msg.role === 'bot' 
                    ? 'bg-white text-slate-700 shadow-sm rounded-tl-none' 
                    : 'bg-[#002147] text-white shadow-lg rounded-tr-none'
                  }`}>
                    {msg.text}
                  </div>
                </div>
              ))}
            </div>

            {/* Input Area */}
            <div className="p-4 bg-white border-t border-slate-100">
              <div className="flex items-center gap-2 bg-slate-100 rounded-2xl p-2 px-4 focus-within:ring-2 ring-blue-500/20 transition-all">
                <input 
                  type="text" 
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Ask about admissions, fees..." 
                  className="bg-transparent border-none focus:ring-0 text-sm flex-grow font-medium" 
                />
                <button 
                  onClick={handleSend}
                  className="p-2 bg-[#002147] text-white rounded-xl hover:bg-blue-600 transition-colors"
                >
                  <Send size={16} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AIChatBot;