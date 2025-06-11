'use client';

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const links = [
  { name: "ABOUT", href: "/#about", section: "about" },            
  { name: "EXPERIENCE", href: "/#experience", section: "experience" },
  { name: "SKILLS", href: "/#skills", section: "skills" },
  { name: "PROJECTS", href: "/#projects", section: "projects" },
  { name: "CONTACT", href: "/#contact", section: "contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [shufflingText, setShufflingText] = useState({});
  const [activeSection, setActiveSection] = useState("about");
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Scroll detection to update active section
  useEffect(() => {
    if (!isClient) return;

    const handleScroll = () => {
      const sections = links.map(link => link.section);
      const scrollPosition = window.scrollY + 100; // Offset for better detection

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;
          
          if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    // Initial check
    handleScroll();

    // Add scroll listener
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Cleanup
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isClient]);

  // Handle hash changes (when clicking navbar links)
  useEffect(() => {
    if (!isClient) return;

    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash && links.some(link => link.section === hash)) {
        setActiveSection(hash);
      }
    };

    // Initial check
    handleHashChange();

    // Listen for hash changes
    window.addEventListener('hashchange', handleHashChange);
    
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, [isClient]);

  const shuffleText = (text, linkName) => {
    if (!isClient) return;
    
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZQWERTYUIOPASDFGHJKLZXCVBNM";
    let iterations = 0;
    const maxIterations = 70;
    
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

  const handleLinkClick = (e, sectionName) => {
    e.preventDefault(); // Prevent default anchor behavior
    setActiveSection(sectionName);
    setIsMenuOpen(false);
    
    // Smooth scroll to section
    const section = document.getElementById(sectionName);
    if (section) {
      section.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest'
      });
      
      // Update URL hash without jumping
      history.replaceState(null, null, `#${sectionName}`);
    }
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
                ${activeSection === link.section ? "text-black" : "text-gray-600/70"}
                `}
              style={{ fontFamily: "inherit" }}
              onMouseEnter={() => shuffleText(link.name, link.name)}
              onClick={(e) => handleLinkClick(e, link.section)}
            >
              {activeSection === link.section && (
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
                  ${activeSection === link.section ? "text-black bg-black/5" : "text-gray-600/70"}
                  hover:bg-black/5`}
                style={{ fontFamily: "inherit" }}
                onClick={(e) => handleLinkClick(e, link.section)}
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
                  {activeSection === link.section && (
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