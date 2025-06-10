'use client';

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const links = [
  { name: "ABOUT", href: "/" },            
  { name: "EXPERIENCE", href: "/#experience" },
  { name: "SKILLS", href: "/#skills" },
  { name: "PROJECTS", href: "/#projects" },
  { name: "CONTACT", href: "/#contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [shufflingText, setShufflingText] = useState({});

  // Get active link based on current pathname
  const getActiveLinkName = () => {
    const currentLink = links.find(link => link.href === pathname);
    return currentLink ? currentLink.name : "ABOUT";
  };

  const [active, setActive] = useState(getActiveLinkName());

  // Update active state when pathname changes
  useEffect(() => {
    setActive(getActiveLinkName());
  }, [pathname]);

  const shuffleText = (text, linkName) => {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let iterations = 0;
    const maxIterations = 40;
    
    const interval = setInterval(() => {
      setShufflingText(prev => ({
        ...prev,
        [linkName]: text
          .split("")
          .map((char, index) => {
            if (iterations > index) {
              return text[index];
            }
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join("")
      }));
      
      iterations += 1;
      
      if (iterations > maxIterations) {
        clearInterval(interval);
        setShufflingText(prev => ({ ...prev, [linkName]: text }));
      }
    }, 50);
  };

  return (
    <nav className="fixed top-6 right-4 md:right-6 z-50">
      {/* Desktop Navigation */}
      <div className="hidden lg:flex items-center rounded-2xl bg-gradient-to-br from-zinc-200/70 to-zinc-100/90 backdrop-blur-xl shadow-lg border border-zinc-300 px-8 py-3 gap-8 min-w-[440px]">
        {/* Spiky Double Asterisk Icon SVG */}
        <motion.span 
          className="flex items-center mr-2"
          whileHover={{ rotate: 180, scale: 1.1 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          <svg width="36" height="36" fill="none" viewBox="0 0 36 36">
            <g stroke="#222" strokeWidth="2" strokeLinecap="round">
              {[...Array(12)].map((_, i) => {
                const angle = (i * 360) / 12;
                const rads = (angle * Math.PI) / 180;
                return (
                  <line
                    key={i}
                    x1="18"
                    y1="6"
                    x2="18"
                    y2="18"
                    transform={`rotate(${angle} 18 18)`}
                  />
                );
              })}
            </g>
            <circle cx="18" cy="18" r="3" fill="#222" />
          </svg>
          <svg width="36" height="36" fill="none" viewBox="0 0 36 36" className="ml-[-8px]">
            <g stroke="#222" strokeWidth="2" strokeLinecap="round">
              {[...Array(12)].map((_, i) => {
                const angle = (i * 360) / 12;
                return (
                  <line
                    key={i}
                    x1="18"
                    y1="6"
                    x2="18"
                    y2="18"
                    transform={`rotate(${angle} 18 18)`}
                  />
                );
              })}
            </g>
            <circle cx="18" cy="18" r="3" fill="#222" />
          </svg>
        </motion.span>
        
        {/* Nav Links */}
        <div className="flex gap-6 relative">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`relative font-bold tracking-wider text-lg px-2 py-1 rounded 
                transition-all duration-150
                ${active === link.name ? "text-black" : "text-gray-600/70"}
                `}
              style={{ fontFamily: "inherit" }}
              onMouseEnter={() => shuffleText(link.name, link.name)}
            >
              {active === link.name && (
                <motion.span
                  layoutId="underline"
                  className="absolute inset-0 bg-black/10 rounded transition-all"
                  style={{ zIndex: -1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
              <span className="font-mono">
                {shufflingText[link.name] || link.name}
              </span>
            </Link>
          ))}
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="lg:hidden">
        {/* Mobile Menu Button */}
        <motion.button
          className="flex items-center justify-center rounded-2xl bg-gradient-to-br from-zinc-200/70 to-zinc-100/90 backdrop-blur-xl shadow-lg border border-zinc-300 w-14 h-14"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          whileTap={{ scale: 0.95 }}
        >
          <motion.div className="flex flex-col justify-center items-center w-6 h-6">
            <motion.span
              className="block w-5 h-0.5 bg-gray-700 rounded-full"
              animate={{
                rotate: isMenuOpen ? 45 : 0,
                y: isMenuOpen ? 0 : -3,
              }}
              transition={{ duration: 0.2 }}
            />
            <motion.span
              className="block w-5 h-0.5 bg-gray-700 rounded-full mt-1"
              animate={{
                opacity: isMenuOpen ? 0 : 1,
              }}
              transition={{ duration: 0.2 }}
            />
            <motion.span
              className="block w-5 h-0.5 bg-gray-700 rounded-full mt-1"
              animate={{
                rotate: isMenuOpen ? -45 : 0,
                y: isMenuOpen ? -8 : 0,
              }}
              transition={{ duration: 0.2 }}
            />
          </motion.div>
        </motion.button>

        {/* Mobile Menu Dropdown */}
        <motion.div
          className="absolute top-16 right-0 w-48 rounded-2xl bg-gradient-to-br from-zinc-200/70 to-zinc-100/90 backdrop-blur-xl shadow-lg border border-zinc-300 overflow-hidden"
          initial={false}
          animate={{
            opacity: isMenuOpen ? 1 : 0,
            scale: isMenuOpen ? 1 : 0.95,
            y: isMenuOpen ? 0 : -10,
          }}
          transition={{ duration: 0.2 }}
          style={{ display: isMenuOpen ? 'block' : 'none' }}
        >
          <div className="py-3">
            {links.map((link, index) => (
              <Link
                key={link.name}
                href={link.href}
                className={`relative w-full text-left px-6 py-3 font-bold tracking-wider transition-all duration-150 block
                  ${active === link.name ? "text-black bg-black/5" : "text-gray-600/70"}
                  hover:bg-black/5`}
                style={{ fontFamily: "inherit" }}
                onClick={() => setIsMenuOpen(false)}
                onTouchStart={() => shuffleText(link.name, `mobile-${link.name}`)}
              >
                <motion.div
                  initial={{ x: -20, opacity: 0 }}
                  animate={{
                    x: isMenuOpen ? 0 : -20,
                    opacity: isMenuOpen ? 1 : 0,
                  }}
                  transition={{
                    duration: 0.2,
                    delay: isMenuOpen ? index * 0.05 : 0,
                  }}
                >
                  {active === link.name && (
                    <motion.div
                      className="absolute left-0 top-0 bottom-0 w-1 bg-black/30 rounded-r-full"
                      layoutId="mobileActiveIndicator"
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 30,
                      }}
                    />
                  )}
                  <span className="font-mono">
                    {shufflingText[`mobile-${link.name}`] || link.name}
                  </span>
                </motion.div>
              </Link>
            ))}
          </div>
        </motion.div>
      </div>
    </nav>
  );
}