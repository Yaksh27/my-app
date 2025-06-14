'use client';

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function TerminalThemeToggle() {
  const [isDark, setIsDark] = useState(true); // Default to dark
  const [isTyping, setIsTyping] = useState(false);
  const [displayText, setDisplayText] = useState('> toggle-theme --mode=dark'); // Default dark
  const [cursorVisible, setCursorVisible] = useState(true);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient) return;
    
    // Set dark theme as default on mount - only on client
    document.documentElement.classList.add('dark');
    document.documentElement.style.setProperty('--background', '#0a0a0a');
    document.documentElement.style.setProperty('--foreground', '#ededed');
    setDisplayText('> toggle-theme --mode=dark');
  }, [isClient]);

  useEffect(() => {
    if (!isClient) return;
    
    // Cursor blinking effect - only on client
    const interval = setInterval(() => {
      setCursorVisible(prev => !prev);
    }, 600);

    return () => clearInterval(interval);
  }, [isClient]);

  const typewriterEffect = (newText) => {
    if (!isClient) return;
    
    setIsTyping(true);
    let currentIndex = 0;
    const typingSpeed = 80;
    
    const typeInterval = setInterval(() => {
      if (currentIndex <= newText.length) {
        setDisplayText(newText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typeInterval);
        setIsTyping(false);
      }
    }, typingSpeed);
  };

  const toggleTheme = () => {
    if (isTyping || !isClient) return;
    
    const newTheme = !isDark;
    setIsDark(newTheme);
    
    // Apply theme to document - only on client
    if (newTheme) {
      document.documentElement.classList.add('dark');
      document.documentElement.style.setProperty('--background', '#0a0a0a');
      document.documentElement.style.setProperty('--foreground', '#ededed');
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.style.setProperty('--background', '#ffffff');
      document.documentElement.style.setProperty('--foreground', '#171717');
    }
    
    const newText = `> toggle-theme --mode=${newTheme ? 'dark' : 'light'}`;
    typewriterEffect(newText);
  };

  return (
    <motion.div
      className="rounded-2xl bg-gradient-to-br from-zinc-200/70 to-zinc-100/90 backdrop-blur-xl shadow-lg border border-zinc-300 p-6 font-mono text-sm cursor-pointer select-none"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      onClick={toggleTheme}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <div className="space-y-3">
        <div className="flex items-center text-gray-600">
          <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
          <span className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></span>
          <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
          <span className="text-xs font-bold tracking-wider">TERMINAL</span>
        </div>
        
        <div className="border-t border-gray-300"></div>
        
        <div className="flex items-center">
          <span className="text-black font-bold">
            {displayText}
          </span>
          {!isTyping && cursorVisible && isClient && (
            <motion.span
              className="ml-1 text-black font-bold"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              _
            </motion.span>
          )}
        </div>
        
        <div className="text-xs text-gray-500 mt-2">
          <span className="text-green-600">✓</span> Click to toggle theme (coming soon...) 
        </div>
      </div>
    </motion.div>
  );
}