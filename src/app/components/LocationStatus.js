'use client';

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function LocationStatus() {
  const [currentTime, setCurrentTime] = useState('');
  const [blinkVisible, setBlinkVisible] = useState(true);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const istTime = new Intl.DateTimeFormat('en-US', {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
      }).format(now);
      setCurrentTime(istTime);
    };

    updateTime();
    const timeInterval = setInterval(updateTime, 1000);

    // Blinking cursor effect
    const blinkInterval = setInterval(() => {
      setBlinkVisible(prev => !prev);
    }, 800);

    return () => {
      clearInterval(timeInterval);
      clearInterval(blinkInterval);
    };
  }, []);

  return (
    <motion.div
      className="rounded-2xl bg-gradient-to-br from-zinc-200/70 to-zinc-100/90 backdrop-blur-xl shadow-lg border border-zinc-300 p-6 font-mono text-sm"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="space-y-2">
        <div className="flex items-center">
          <span className="text-gray-600 font-bold tracking-wider">LOCATION:</span>
          <span className="ml-2 text-black font-bold">INDIA</span>
        </div>
        
        <div className="flex items-center">
          <span className="text-gray-600 font-bold tracking-wider">TIMEZONE:</span>
          <span className="ml-2 text-black font-bold">UTC+5:30</span>
        </div>
        
        <div className="flex items-center">
          <span className="text-gray-600 font-bold tracking-wider">TIME:</span>
          <span className="ml-2 text-black font-bold">{currentTime}</span>
        </div>
        
        <div className="flex items-center">
          <span className="text-gray-600 font-bold tracking-wider">STATUS:</span>
          <span className="ml-2 text-green-600 font-bold flex items-center">
            ONLINE
            <motion.span
              className="ml-1 w-2 h-2 bg-green-500 rounded-full"
              animate={{ opacity: blinkVisible ? 1 : 0.3 }}
              transition={{ duration: 0.2 }}
            />
          </span>
          <motion.span
            className="ml-1 text-black font-bold"
            animate={{ opacity: blinkVisible ? 1 : 0 }}
            transition={{ duration: 0.2 }}
          >
            _
          </motion.span>
        </div>
      </div>
    </motion.div>
  );
}