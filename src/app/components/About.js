"use client";
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Sparkles, MousePointer, Code2, Star } from 'lucide-react';
import LocationStatus from './LocationStatus';
import TerminalThemeToggle from './TerminalThemeToggle';

// Shuffle/decode effect component - Fixed for hydration
function ShuffleText({ text, duration = 2000, className = "" }) {
  const [display, setDisplay] = useState(text); // Start with final text
  const [isClient, setIsClient] = useState(false);
  const chars = "ABCDEFGHIJKLMNO@#$%^&*PQRSTUVWXYZ0123456789!";

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient) return; // Only run on client
    
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
  }, [text, duration, isClient]);

  return <span className={className}>{display}</span>;
}

// Matrix-style background - Fixed for hydration
const MatrixBackground = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    // Static server version
    return (
      <div className="absolute inset-0 overflow-hidden">
        <svg className="absolute inset-0 w-full h-full opacity-[0.15]" viewBox="0 0 1000 1000">
          <defs>
            <pattern id="circuitGrid" width="120" height="120" patternUnits="userSpaceOnUse">
              <path d="M 120 0 L 0 0 0 120 M 60 0 L 60 120 M 0 60 L 120 60" fill="none" stroke="#06b6d4" strokeWidth="1"/>
              <circle cx="0" cy="0" r="3" fill="#06b6d4"/>
              <circle cx="60" cy="60" r="2" fill="#0891b2"/>
              <circle cx="120" cy="120" r="3" fill="#06b6d4"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#circuitGrid)" />
        </svg>
      </div>
    );
  }

  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Animated circuit board pattern */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.15]" viewBox="0 0 1000 1000">
        <defs>
          <pattern id="circuitGrid" width="120" height="120" patternUnits="userSpaceOnUse">
            <motion.path 
              d="M 120 0 L 0 0 0 120 M 60 0 L 60 120 M 0 60 L 120 60" 
              fill="none" 
              stroke="url(#circuitGradient)" 
              strokeWidth="1"
              initial={{ pathLength: 0, opacity: 0.3 }}
              animate={{ pathLength: 1, opacity: [0.3, 0.8, 0.3] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.circle 
              cx="0" cy="0" r="3" fill="url(#circuitGradient)"
              animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
            />
            <motion.circle 
              cx="60" cy="60" r="2" fill="url(#nodeGradient)"
              animate={{ scale: [1, 1.3, 1], opacity: [0.4, 0.9, 0.4] }}
              transition={{ duration: 1.5, repeat: Infinity, delay: 1 }}
            />
            <motion.circle 
              cx="120" cy="120" r="3" fill="url(#circuitGradient)"
              animate={{ scale: [1, 1.4, 1], opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2.5, repeat: Infinity, delay: 1.5 }}
            />
          </pattern>
          <linearGradient id="circuitGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#06b6d4" />
            <stop offset="50%" stopColor="#0891b2" />
            <stop offset="100%" stopColor="#67e8f9" />
          </linearGradient>
          <linearGradient id="nodeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0284c7" />
            <stop offset="100%" stopColor="#0891b2" />
          </linearGradient>
        </defs>
        <rect width="100%" height="100%" fill="url(#circuitGrid)" />
      </svg>

      {/* Flowing data streams */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.12]">
        <motion.path
          d="M0,100 Q200,50 400,150 T800,100 Q1000,80 1200,120"
          stroke="url(#streamGradient1)"
          strokeWidth="2"
          fill="none"
          strokeDasharray="10 5"
          initial={{ strokeDashoffset: 0 }}
          animate={{ strokeDashoffset: -100 }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        />
        <motion.path
          d="M0,300 Q300,250 600,350 T1200,300"
          stroke="url(#streamGradient2)"
          strokeWidth="1.5"
          fill="none"
          strokeDasharray="8 4"
          initial={{ strokeDashoffset: 0 }}
          animate={{ strokeDashoffset: -80 }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear", delay: 2 }}
        />
        <motion.path
          d="M0,500 Q250,450 500,550 T1000,500"
          stroke="url(#streamGradient3)"
          strokeWidth="1"
          fill="none"
          strokeDasharray="6 3"
          initial={{ strokeDashoffset: 0 }}
          animate={{ strokeDashoffset: -60 }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear", delay: 4 }}
        />
        <motion.path
          d="M0,700 Q200,650 400,750 T800,700"
          stroke="url(#streamGradient4)"
          strokeWidth="1.5"
          fill="none"
          strokeDasharray="12 6"
          initial={{ strokeDashoffset: 0 }}
          animate={{ strokeDashoffset: -120 }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear", delay: 6 }}
        />
        <defs>
          <linearGradient id="streamGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#06b6d4" />
            <stop offset="50%" stopColor="#0891b2" />
            <stop offset="100%" stopColor="#67e8f9" />
          </linearGradient>
          <linearGradient id="streamGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#0284c7" />
            <stop offset="100%" stopColor="#06b6d4" />
          </linearGradient>
          <linearGradient id="streamGradient3" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#0891b2" />
            <stop offset="100%" stopColor="#67e8f9" />
          </linearGradient>
          <linearGradient id="streamGradient4" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#67e8f9" />
            <stop offset="100%" stopColor="#0284c7" />
          </linearGradient>
        </defs>
      </svg>

      {/* Complex geometric morphing shapes */}
      <motion.div
        className="absolute top-20 right-20 w-96 h-96 opacity-[0.08]"
        animate={{
          rotate: [0, 360],
          scale: [1, 1.3, 1],
          x: [0, -50, 50, 0],
          y: [0, 30, -30, 0],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          background: 'conic-gradient(from 0deg, #06b6d4, #0891b2, #67e8f9, #0284c7, #06b6d4)',
          clipPath: 'polygon(50% 0%, 80% 10%, 100% 35%, 100% 70%, 80% 90%, 50% 100%, 20% 90%, 0% 70%, 0% 35%, 20% 10%)',
        }}
      />

      {/* Matrix-style falling code */}
      <motion.div
        className="absolute bottom-32 left-32 w-80 h-80 opacity-[0.06]"
        animate={{
          rotate: [0, -180, -360],
          scale: [1, 1.4, 1],
          x: [0, 40, -40, 0],
          y: [0, -20, 20, 0],
        }}
        transition={{
          duration: 35,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 5,
        }}
        style={{
          background: 'radial-gradient(circle, #0891b2 10%, #06b6d4 30%, transparent 70%)',
          clipPath: 'polygon(25% 0%, 75% 0%, 100% 25%, 100% 75%, 75% 100%, 25% 100%, 0% 75%, 0% 25%)',
        }}
      />

      {/* Digital particles - Fixed positions */}
      <motion.div
        className="absolute top-1/3 left-1/5 w-6 h-6 bg-cyan-400/40 rounded-sm"
        animate={{
          x: [0, 100, -50, 80, 0],
          y: [0, -80, 60, -40, 0],
          rotate: [0, 90, 180, 270, 360],
          scale: [1, 1.5, 0.8, 1.2, 1],
          opacity: [0.4, 0.8, 0.3, 0.7, 0.4],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute bottom-1/4 right-1/4 w-4 h-4 border-2 border-blue-400/30"
        style={{ clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)' }}
        animate={{
          rotate: [0, 360],
          x: [0, -60, 40, 0],
          y: [0, 50, -30, 0],
          scale: [1, 1.3, 0.7, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 3,
        }}
      />

      {/* Hexagonal tech elements */}
      <motion.div
        className="absolute top-1/2 right-1/3 w-8 h-8 opacity-[0.1]"
        style={{
          background: 'linear-gradient(135deg, #0891b2, #06b6d4)',
          clipPath: 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)',
        }}
        animate={{
          rotate: [0, 120, 240, 360],
          x: [0, 60, -30, 0],
          y: [0, -40, 70, 0],
          scale: [1, 1.6, 0.6, 1],
        }}
        transition={{
          duration: 28,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 8,
        }}
      />

      {/* Glowing orbs with complex motion */}
      <motion.div
        className="absolute top-1/4 left-2/3 w-32 h-32 rounded-full opacity-[0.06]"
        style={{
          background: 'radial-gradient(circle, #67e8f9 20%, #06b6d4 60%, transparent 80%)',
        }}
        animate={{
          scale: [1, 1.8, 1.2, 1],
          x: [0, -80, 60, 0],
          y: [0, 40, -60, 0],
          opacity: [0.06, 0.12, 0.04, 0.06],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 10,
        }}
      />
    </div>
  );
};

// Fixed Floating particles component - No more Math.random() during render
const FloatingParticles = () => {
  const [isClient, setIsClient] = useState(false);
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    setIsClient(true);
    
    // Generate deterministic particles after client mount
    const particleData = Array.from({ length: 12 }, (_, i) => ({
      id: i,
      initialX: (i * 100) % 1200, // Deterministic positioning
      initialY: (i * 67) % 800,
      targetX: ((i + 5) * 100) % 1200,
      targetY: ((i + 3) * 67) % 800,
      duration: 30 + (i * 5),
      delay: i * 0.5,
    }));
    
    setParticles(particleData);
  }, []);

  if (!isClient) {
    return <div className="absolute inset-0 overflow-hidden pointer-events-none" />;
  }

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute w-2 h-2 bg-cyan-400/25 rounded-full"
          initial={{
            x: particle.initialX,
            y: particle.initialY,
          }}
          animate={{
            x: particle.targetX,
            y: particle.targetY,
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            ease: "linear",
            delay: particle.delay,
          }}
        />
      ))}
    </div>
  );
};

export default function About() {
  const [displayText, setDisplayText] = useState('');
  const [isClient, setIsClient] = useState(false);
  const fullText = "I build bold, thoughtful digital products.";

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
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient) return;
    
    let index = 0;
    const interval = setInterval(() => {
      setDisplayText(fullText.slice(0, index));
      index++;
      if (index > fullText.length) clearInterval(interval);
    }, 100);
    return () => clearInterval(interval);
  }, [isClient]);

  useEffect(() => {
    if (!isClient) return;
    
    const factInterval = setInterval(() => {
      setCurrentFactIndex((prev) => (prev + 1) % funFacts.length);
    }, 3000);
    return () => clearInterval(factInterval);
  }, [isClient]);

  return (
    <main className="min-h-screen relative overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-800">
      
      {/* Sophisticated Dark Animated Background */}
      <MatrixBackground />
      
      {/* Dark theme floating orbs */}
      <motion.div
        className="absolute w-[700px] h-[700px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(6, 182, 212, 0.12) 0%, rgba(8, 145, 178, 0.06) 40%, transparent 70%)',
          top: '-20%',
          right: '-15%',
        }}
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 50, 0],
          y: [0, -40, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      <motion.div
        className="absolute w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(14, 116, 144, 0.1) 0%, rgba(6, 182, 212, 0.05) 40%, transparent 70%)',
          bottom: '-15%',
          left: '-12%',
        }}
        animate={{
          scale: [1, 1.3, 1],
          x: [0, -30, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 12,
        }}
      />

      <FloatingParticles />

      {/* Content Container */}
      <div className="relative z-10 min-h-screen flex items-center">
        <div className="container mx-auto px-8 py-20">
          
          {/* Main Content */}
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              
              {/* Left - Hero Content */}
              <div className="space-y-8">
                
                {/* Status Badge */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gray-800/80 backdrop-blur-lg border border-gray-700/50 shadow-lg">
                    <motion.div 
                      className="w-3 h-3 bg-emerald-400 rounded-full"
                      animate={{ 
                        scale: [1, 1.2, 1],
                        opacity: [1, 0.7, 1] 
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                    <span className="text-sm font-semibold text-gray-200 tracking-wide">Available to Work</span>
                    <Star className="w-4 h-4 text-amber-400" />
                  </div>
                </motion.div>

                {/* Main Heading */}
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-[0.85] text-white">
                    <div className="mb-4">
                      <span className="inline-block">
                        <ShuffleText text="HELLO" duration={1200} />
                      </span>
                      <motion.span
                        className="inline-block ml-4 text-4xl"
                        animate={{ rotate: [0, 14, -14, 0] }}
                        transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                      >
                        👋
                      </motion.span>
                    </div>
                    <div className="relative">
                      <span className="text-white">I'M </span>
                      <span className="relative">
                        <span 
                          className="bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-300 bg-clip-text text-transparent"
                          style={{ 
                            filter: 'drop-shadow(0 0 8px rgba(6, 182, 212, 0.3))',
                          }}
                        >
                          <ShuffleText text="YAKSH" duration={1600} />
                        </span>
                      </span>
                    </div>
                  </h1>
                </motion.div>

                {/* Subtitle with typewriter */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  className="relative"
                >
                  <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-2xl">
                    {isClient ? displayText : fullText}
                    {isClient && (
                      <motion.span
                        className="inline-block w-1 h-6 bg-cyan-400 ml-1"
                        animate={{ opacity: [0, 1, 0] }}
                        transition={{ duration: 1, repeat: Infinity }}
                      />
                    )}
                  </p>
                </motion.div>

                {/* CTA Buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                  className="flex flex-col sm:flex-row gap-4 pt-4"
                >
                  <motion.a
                    href="#contact"
                    className="group relative overflow-hidden inline-flex items-center gap-3 bg-white text-black px-8 py-5 rounded-2xl font-bold text-lg transition-all duration-500"
                    whileHover={{ 
                      scale: 1.02, 
                      y: -3,
                      boxShadow: "0 20px 40px rgba(255,255,255,0.1)"
                    }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <motion.div 
                      className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-300"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: "0%" }}
                      transition={{ duration: 0.5 }}
                    />
                    <span className="relative z-10">Let's Create Magic</span>
                    <ArrowRight className="relative z-10 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </motion.a>

                  <motion.a
                    href="#projects"
                    className="group inline-flex items-center gap-3 bg-gray-800/60 backdrop-blur-lg text-gray-200 px-8 py-5 rounded-2xl font-bold text-lg border border-gray-700/60 shadow-lg transition-all duration-300"
                    whileHover={{ 
                      scale: 1.02, 
                      y: -3,
                      backgroundColor: "rgba(31,41,55,0.8)",
                      boxShadow: "0 20px 40px rgba(6,182,212,0.15)"
                    }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Code2 className="w-5 h-5 text-cyan-400" />
                    <span>Explore Work</span>
                    <motion.div
                      className="w-2 h-2 bg-cyan-400 rounded-full"
                      animate={{ scale: [1, 1.5, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                  </motion.a>
                </motion.div>
              </div>

              {/* Right - Status Cards */}
              <div className="space-y-6 lg:pl-8">
                
                <motion.div
                  initial={{ opacity: 0, x: 50, scale: 0.95 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  transition={{ duration: 0.8, delay: 1 }}
                  className="transform hover:scale-105 transition-all duration-300"
                >
                  <LocationStatus />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 50, scale: 0.95 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  transition={{ duration: 0.8, delay: 1.2 }}
                  className="transform hover:scale-105 transition-all duration-300"
                >
                  <TerminalThemeToggle />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 50, scale: 0.95 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  transition={{ duration: 0.8, delay: 1.4 }}
                  className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-800/80 to-gray-900/95 backdrop-blur-xl shadow-xl border border-gray-700/60 p-6 transform hover:scale-105 transition-all duration-300 group"
                >
                  {/* Animated border glow */}
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-purple-500/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm" />
                  
                  {/* Background gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/[0.02] via-blue-500/[0.03] to-purple-500/[0.02]" />
                  
                  {/* Matrix-style grid overlay */}
                  <div className="absolute inset-0 opacity-[0.03]">
                    <svg className="w-full h-full">
                      <defs>
                        <pattern id="statusGrid" width="20" height="20" patternUnits="userSpaceOnUse">
                          <path d="M 20 0 L 0 0 0 20" fill="none" stroke="currentColor" strokeWidth="1" className="text-cyan-400"/>
                        </pattern>
                      </defs>
                      <rect width="100%" height="100%" fill="url(#statusGrid)" />
                    </svg>
                  </div>
                  
                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-5">
                      {/* Enhanced icon with multiple effects */}
                      <div className="relative">
                        <motion.div
                          className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center border border-cyan-500/30"
                          animate={{ 
                            boxShadow: [
                              "0 0 0px rgba(6, 182, 212, 0.3)",
                              "0 0 20px rgba(6, 182, 212, 0.5)",
                              "0 0 0px rgba(6, 182, 212, 0.3)"
                            ]
                          }}
                          transition={{ 
                            duration: 2, 
                            repeat: Infinity,
                            ease: "easeInOut"
                          }}
                        >
                          <motion.div
                            animate={{ 
                              rotate: [0, 360],
                              scale: [1, 1.1, 1]
                            }}
                            transition={{ 
                              duration: 4, 
                              repeat: Infinity,
                              ease: "easeInOut"
                            }}
                          >
                            <Sparkles className="w-4 h-4 text-cyan-400" />
                          </motion.div>
                        </motion.div>
                        
                        {/* Orbiting particles */}
                        <motion.div
                          className="absolute inset-0"
                          animate={{ rotate: 360 }}
                          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                        >
                          <div className="absolute w-1 h-1 bg-cyan-400/60 rounded-full" style={{ top: '-2px', left: '50%', transform: 'translateX(-50%)' }} />
                          <div className="absolute w-1 h-1 bg-blue-400/60 rounded-full" style={{ bottom: '-2px', left: '50%', transform: 'translateX(-50%)' }} />
                        </motion.div>
                      </div>

                      {/* Enhanced header text */}
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-gray-300 tracking-wider text-sm">CURRENTLY</span>
                        <motion.div
                          className="w-2 h-2 bg-cyan-400 rounded-full"
                          animate={{ 
                            scale: [1, 1.3, 1],
                            opacity: [0.7, 1, 0.7] 
                          }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                        />
                      </div>
                    </div>
                    
                    {/* Enhanced fact display */}
                    <div className="relative">
                      <AnimatePresence mode="wait">
                        <motion.div
                          key={currentFactIndex}
                          initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
                          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                          exit={{ opacity: 0, y: -20, filter: "blur(4px)" }}
                          transition={{ duration: 0.6, ease: "easeOut" }}
                          className="relative"
                        >
                          <p className="text-white font-bold text-lg leading-relaxed">
                            {funFacts[currentFactIndex]}
                          </p>
                          
                          {/* Subtle text glow */}
                          <p 
                            className="absolute inset-0 text-cyan-400/20 font-bold text-lg leading-relaxed blur-sm"
                            aria-hidden="true"
                          >
                            {funFacts[currentFactIndex]}
                          </p>
                        </motion.div>
                      </AnimatePresence>
                      
                      {/* Progress indicator */}
                      <div className="mt-4 flex gap-1">
                        {funFacts.map((_, index) => (
                          <motion.div
                            key={index}
                            className={`h-1 rounded-full transition-all duration-300 ${
                              index === currentFactIndex 
                                ? 'bg-cyan-400 w-8' 
                                : 'bg-gray-600/50 w-2'
                            }`}
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: index * 0.1 }}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden md:block"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
      >
        <motion.div
          className="flex flex-col items-center gap-3 text-gray-400"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          <span className="text-xs uppercase tracking-widest font-semibold">Discover More</span>
          <div className="w-px h-12 bg-gradient-to-b from-gray-600 via-cyan-400 to-transparent relative">
            <motion.div
              className="absolute top-0 w-full bg-gradient-to-b from-cyan-400 to-blue-400 rounded-full"
              animate={{ height: ["0%", "80%", "0%"] }}
              transition={{ duration: 3, repeat: Infinity }}
            />
          </div>
          <motion.div
            animate={{ y: [0, 4, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <MousePointer className="w-4 h-4" />
          </motion.div>
        </motion.div>
      </motion.div>
    </main>
  );
}