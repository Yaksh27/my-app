"use client";
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

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

  // Fun facts that rotate
  const funFacts = [
    "🎵 Currently vibing to lo-fi beats",
    "☕ Coffee consumed today: 3 cups",
    "🌙 Night owl, best ideas at 2 AM",
    "📚 Reading: Atomic Habits",
    "🎯 Focus mode: Deep work session",
    "🚀 Building the future, one pixel at a time"
  ];

  const [currentFactIndex, setCurrentFactIndex] = useState(0);

  useEffect(() => {
    const factInterval = setInterval(() => {
      setCurrentFactIndex((prev) => (prev + 1) % funFacts.length);
    }, 3000);
    return () => clearInterval(factInterval);
  }, []);

  return (
    <main className="relative flex flex-col items-start justify-center min-h-screen px-8 pt-32 bg-white overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Floating Gradient Orbs */}
        <motion.div
          className="absolute w-96 h-96 bg-gradient-to-r from-blue-100/30 to-purple-100/30 rounded-full blur-3xl"
          animate={{
            x: [0, 100, -50, 0],
            y: [0, -80, 50, 0],
            scale: [1, 1.2, 0.8, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{ top: '10%', left: '60%' }}
        />
        
        <motion.div
          className="absolute w-64 h-64 bg-gradient-to-r from-green-100/20 to-yellow-100/20 rounded-full blur-3xl"
          animate={{
            x: [0, -80, 60, 0],
            y: [0, 60, -40, 0],
            scale: [0.8, 1.1, 0.9, 0.8],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 5
          }}
          style={{ top: '70%', left: '10%' }}
        />

        {/* Floating Particles */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-gray-300/40 rounded-full"
            animate={{
              y: [-20, -100, -20],
              x: [0, Math.sin(i) * 30, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 1.5,
            }}
            style={{
              left: `${10 + i * 12}%`,
              top: `${60 + (i % 3) * 15}%`,
            }}
          />
        ))}

        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="w-full h-full" style={{
            backgroundImage: `
              linear-gradient(90deg, #000 1px, transparent 1px),
              linear-gradient(180deg, #000 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px'
          }} />
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10">
        {/* Big Bold Intro */}
        <motion.h1 
            className="text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.1] mb-4"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            >
            <ShuffleText text="HELLO, I'M " duration={1600} />
            <span className="text-black/70">
                <ShuffleText text="YAKSH" duration={1200} />
            </span>
            </motion.h1>


        {/* Animated Subheading */}
        <motion.p 
          className="max-w-xl text-lg md:text-2xl text-gray-700 mb-8 leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {displayText}
        </motion.p>

        {/* Call to Action */}
        <motion.a
          href="#contact"
          className="inline-block bg-black text-white text-lg font-semibold px-8 py-3 rounded-2xl shadow hover:bg-gray-900 transition-all duration-300 hover:shadow-lg hover:scale-105"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Get in Touch
        </motion.a>
      </div>

      {/* Fun Status Bar */}
      <motion.div
        className="fixed bottom-8 left-8 right-8 md:left-auto md:right-8 md:w-80"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
      >
        <div className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-2xl px-6 py-4 shadow-lg">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <motion.span
              key={currentFactIndex}
              className="text-sm text-gray-600 font-medium"
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

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden md:block"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
      >
        <motion.div
          className="flex flex-col items-center gap-2 text-gray-400"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <span className="text-xs uppercase tracking-wider">Scroll</span>
          <div className="w-0.5 h-8 bg-gray-300 rounded-full">
            <motion.div
              className="w-full bg-gray-600 rounded-full"
              animate={{ height: ["0%", "100%", "0%"] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </motion.div>

      {/* Floating Quote Section */}
      <motion.div
        className="absolute top-1/3 right-8 md:right-16 max-w-xs hidden lg:block"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 2 }}
      >
        <div className="bg-gray-50/50 backdrop-blur-sm border border-gray-100 rounded-3xl p-6 shadow-sm">
          <motion.blockquote
            className="text-sm text-gray-600 italic leading-relaxed"
            animate={{ opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            "The best way to predict the future is to create it."
          </motion.blockquote>
          <cite className="text-xs text-gray-400 mt-2 block">— Peter Drucker</cite>
        </div>
      </motion.div>

      
    </main>
  );
}