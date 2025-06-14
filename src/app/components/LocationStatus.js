'use client';

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function LocationStatus() {
  const [currentTime, setCurrentTime] = useState('--:--:--');
  const [blinkVisible, setBlinkVisible] = useState(true);
  const [isClient, setIsClient] = useState(false);
  const [currentStatus, setCurrentStatus] = useState({ text: 'LOADING', color: 'text-gray-500', bgColor: 'bg-gray-500' });

  useEffect(() => {
    setIsClient(true);
  }, []);

  const getStatusFromTime = (timeString) => {
    const [hours, minutes] = timeString.split(':').map(Number);
    const totalMinutes = hours * 60 + minutes;

    // 3 AM to 10 AM - SLEEPING
    if (totalMinutes >= 180 && totalMinutes < 600) {
      return { text: 'SLEEPING', color: 'text-purple-600', bgColor: 'bg-purple-500' };
    }
    // 10 AM to 1 PM - MORNING PRODUCTIVITY
    else if (totalMinutes >= 600 && totalMinutes < 780) {
      return { text: 'MORNING PRODUCTIVITY', color: 'text-red-600', bgColor: 'bg-red-500' };
    }
    // 1 PM to 4 PM - ONLINE
    else if (totalMinutes >= 780 && totalMinutes < 960) {
      return { text: 'ONLINE', color: 'text-green-600', bgColor: 'bg-green-500' };
    }
    // 4 PM to 6 PM - AT THE GYM
    else if (totalMinutes >= 960 && totalMinutes < 1080) {
      return { text: ' PROBABLY AT THE GYM', color: 'text-orange-700', bgColor: 'bg-orange-500' };
    }
    // 6 PM to 10 PM - ONLINE
    else if (totalMinutes >= 1080 && totalMinutes < 1320) {
      return { text: 'ONLINE', color: 'text-green-600', bgColor: 'bg-green-500' };
    }
    // 10 PM to 3 AM - CHILLING
    else {
      return { text: 'CHILLING', color: 'text-blue-600', bgColor: 'bg-blue-500' };
    }
  };

  useEffect(() => {
    if (!isClient) return;

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
      setCurrentStatus(getStatusFromTime(istTime));
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
  }, [isClient]);

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
          <span className={`ml-2 font-bold flex items-center ${currentStatus.color}`}>
            {currentStatus.text}
            <motion.span
              className={`ml-1 w-2 h-2 rounded-full ${currentStatus.bgColor}`}
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