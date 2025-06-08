"use client";
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import LocationStatus from './LocationStatus';
import TerminalThemeToggle from './TerminalThemeToggle';

// Professional animated background elements
const ProfessionalBackground = () => {
  return (
    <>
      {/* Animated Grid Lines */}
      <div className="absolute inset-0 opacity-[0.03]">
        <svg className="w-full h-full">
          <defs>
            <pattern id="professionalGrid" width="100" height="100" patternUnits="userSpaceOnUse">
              <path d="M 100 0 L 0 0 0 100" fill="none" stroke="currentColor" strokeWidth="1" className="text-violet-600"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#professionalGrid)" />
        </svg>
      </div>

      {/* Subtle Moving Lines */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute w-[200%] h-px bg-gradient-to-r from-transparent via-violet-400/20 to-transparent"
          style={{ top: '20%', left: '-50%' }}
          animate={{ x: ['0%', '50%'] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute w-[200%] h-px bg-gradient-to-r from-transparent via-indigo-400/15 to-transparent"
          style={{ top: '60%', left: '-50%' }}
          animate={{ x: ['0%', '50%'] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear", delay: 5 }}
        />
        <motion.div
          className="absolute w-[200%] h-px bg-gradient-to-r from-transparent via-blue-400/10 to-transparent"
          style={{ top: '80%', left: '-50%' }}
          animate={{ x: ['0%', '50%'] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear", delay: 10 }}
        />
      </div>

      {/* Geometric Corner Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 opacity-5">
        <motion.div
          className="w-full h-full border border-violet-400 rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute top-12 right-12 w-72 h-72 border border-indigo-400 rounded-full"
          animate={{ rotate: -360 }}
          transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
        />
      </div>

      <div className="absolute bottom-0 left-0 w-80 h-80 opacity-5">
        <motion.div
          className="w-full h-full border border-blue-400"
          style={{ clipPath: 'polygon(0 0, 100% 50%, 0 100%)' }}
          animate={{ rotate: 360 }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
        />
      </div>

      {/* Subtle Dots Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <svg className="w-full h-full">
          <defs>
            <pattern id="dotPattern" width="50" height="50" patternUnits="userSpaceOnUse">
              <circle cx="25" cy="25" r="1" fill="currentColor" className="text-violet-600" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dotPattern)" />
        </svg>
      </div>
    </>
  );
};

// Shuffle/decode effect component
function ShuffleText({ text, duration = 2000, className = "" }) {
  const [display, setDisplay] = useState("");
  const chars = "ABCDEFGHIJKLMNO@#$%^&*PQRSTUVWXYZ0123456789!";

  useEffect(() => {
    let frame = 0;
    let interval;
    const revealCount = text.length;
    const shuffleFrames = Math.floor(duration / 40);

    interval = setInterval(() => {
      let output = "";
      for (let i = 0; i < revealCount; i++) {
        if (frame > shuffleFrames || i < Math.floor((frame / shuffleFrames) * revealCount)) {
          output += text[i];
        } else {
          output += chars[Math.floor(Math.random() * chars.length)];
        }
      }
      setDisplay(output);

      frame++;
      if (frame > shuffleFrames + revealCount) {
        setDisplay(text);
        clearInterval(interval);
      }
    }, 40);

    return () => clearInterval(interval);
  }, [text, duration]);

  return <span className={className}>{display}</span>;
}

export default function About() {
  const [displayText, setDisplayText] = useState('');
  const fullText = "I build bold, thoughtful digital products.";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayText(fullText.slice(0, index));
      index++;
      if (index > fullText.length) clearInterval(interval);
    }, 100);
    return () => clearInterval(interval);
  }, []);

  const funFacts = [
    "🎨 Crafting pixel-perfect experiences",
    "☕ Fueled by creativity and coffee",
    "⚡ Bringing ideas to life with code",
    "📚 Learning something new every day",
    "✨ Making the web more beautiful",
    "🚀 Turning dreams into reality"
  ];

  const [currentFactIndex, setCurrentFactIndex] = useState(0);

  useEffect(() => {
    const factInterval = setInterval(() => {
      setCurrentFactIndex((prev) => (prev + 1) % funFacts.length);
    }, 3000);
    return () => clearInterval(factInterval);
  }, []);

  return (
    <main className="relative flex flex-col items-start justify-center min-h-screen px-8 pt-32 overflow-hidden">
      {/* Beautiful Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-violet-50 to-indigo-50" />
      
      {/* Animated Mesh Background */}
      <div className="absolute inset-0">
        <svg className="w-full h-full opacity-30" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <linearGradient id="meshGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.3" />
              <stop offset="50%" stopColor="#6366f1" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.3" />
            </linearGradient>
            <linearGradient id="meshGradient2" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.3" />
              <stop offset="50%" stopColor="#8b5cf6" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#6366f1" stopOpacity="0.3" />
            </linearGradient>
          </defs>
          
          <motion.path
            d="M0,20 Q25,10 50,20 T100,20 L100,80 Q75,90 50,80 T0,80 Z"
            fill="url(#meshGradient1)"
            animate={{
              d: [
                "M0,20 Q25,10 50,20 T100,20 L100,80 Q75,90 50,80 T0,80 Z",
                "M0,30 Q25,20 50,30 T100,30 L100,70 Q75,60 50,70 T0,70 Z",
                "M0,20 Q25,10 50,20 T100,20 L100,80 Q75,90 50,80 T0,80 Z"
              ]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          
          <motion.path
            d="M0,60 Q25,70 50,60 T100,60 L100,40 Q75,30 50,40 T0,40 Z"
            fill="url(#meshGradient2)"
            animate={{
              d: [
                "M0,60 Q25,70 50,60 T100,60 L100,40 Q75,30 50,40 T0,40 Z",
                "M0,50 Q25,40 50,50 T100,50 L100,30 Q75,40 50,30 T0,30 Z",
                "M0,60 Q25,70 50,60 T100,60 L100,40 Q75,30 50,40 T0,40 Z"
              ]
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
          />
        </svg>
      </div>

      {/* Floating Orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-violet-200/40 via-indigo-200/30 to-transparent rounded-full blur-3xl"
          animate={{
            x: [0, 100, -50, 0],
            y: [0, -50, 50, 0],
            scale: [1, 1.2, 0.8, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-tr from-blue-200/40 via-indigo-200/30 to-transparent rounded-full blur-3xl"
          animate={{
            x: [0, -80, 60, 0],
            y: [0, 60, -40, 0],
            scale: [1, 0.8, 1.3, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 5
          }}
        />

        <motion.div
          className="absolute top-1/2 right-1/3 w-64 h-64 bg-gradient-to-br from-indigo-200/30 via-violet-200/20 to-transparent rounded-full blur-2xl"
          animate={{
            x: [0, 40, -30, 0],
            y: [0, -30, 30, 0],
            scale: [1, 1.1, 0.9, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 8
          }}
        />
      </div>

      {/* Professional Background Elements */}
      <ProfessionalBackground />

      {/* Decorative Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <svg className="w-full h-full">
          <defs>
            <pattern id="decorativeGrid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="currentColor" strokeWidth="1" className="text-violet-400"/>
              <circle cx="0" cy="0" r="1.5" fill="currentColor" className="text-indigo-300" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#decorativeGrid)" />
        </svg>
      </div>

      {/* Main Content */}
      <div className="relative z-10">
        {/* Hero Text */}
        <motion.h1 
          className="text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.1] mb-4"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="text-slate-700">
            <ShuffleText text="HELLO, I'M " duration={1600} />
          </span>
          <span className="bg-gradient-to-r from-violet-600 via-indigo-600 to-blue-600 bg-clip-text text-transparent">
            <ShuffleText text="YAKSH" duration={1200} />
          </span>
        </motion.h1>

        {/* Subheading */}
        <motion.p 
          className="max-w-xl text-lg md:text-2xl text-slate-600 mb-8 leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {displayText}
        </motion.p>

        {/* Clean CTA Button */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <motion.a
            href="#contact"
            className="inline-flex items-center gap-3 bg-white/90 backdrop-blur-sm text-slate-700 text-lg font-bold px-8 py-4 rounded-2xl shadow-xl border border-white/50 transition-all duration-300 hover:bg-white hover:shadow-2xl hover:border-violet-200"
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.98 }}
          >
            <motion.div
              animate={{ 
                rotate: [0, 15, -15, 0],
                scale: [1, 1.1, 1]
              }}
              transition={{ 
                duration: 2, 
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <Sparkles className="w-5 h-5 text-violet-600" />
            </motion.div>
            <span className="bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">
              Get Started
            </span>
            <motion.div
              className="text-blue-600"
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ArrowRight className="w-5 h-5" />
            </motion.div>
          </motion.a>
        </motion.div>
      </div>

      {/* Elegant Status Bar */}
      <motion.div
        className="fixed bottom-8 left-8 right-8 md:left-auto md:right-8 md:w-80"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
      >
        <div className="relative bg-white/80 backdrop-blur-xl border border-white/50 rounded-2xl px-6 py-4 shadow-xl shadow-violet-100/50">
          <div className="flex items-center gap-3">
            <motion.div 
              className="w-2 h-2 bg-gradient-to-r from-violet-500 to-indigo-500 rounded-full"
              animate={{ 
                scale: [1, 1.3, 1], 
                opacity: [1, 0.7, 1] 
              }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <motion.span
              key={currentFactIndex}
              className="text-sm text-slate-600 font-medium"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
            >
              {funFacts[currentFactIndex]}
            </motion.span>
          </div>
        </div>
      </motion.div>

      {/* Beautiful Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden md:block"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
      >
        <motion.div
          className="flex flex-col items-center gap-2 text-slate-400"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <span className="text-xs uppercase tracking-wider font-medium">Explore</span>
          <div className="w-0.5 h-8 bg-gradient-to-b from-violet-300 to-indigo-300 rounded-full">
            <motion.div
              className="w-full bg-gradient-to-b from-violet-500 to-blue-500 rounded-full"
              animate={{ height: ["0%", "70%", "0%"] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </motion.div>

      {/* Sidebar Components */}
      <motion.div
        className="absolute top-1/4 right-8 md:right-12 w-72 hidden lg:block space-y-4"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 2 }}
      >
        <LocationStatus />
        <TerminalThemeToggle />
      </motion.div>
    </main>
  );
}