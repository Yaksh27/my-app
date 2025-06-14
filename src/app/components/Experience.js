"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { ChevronDown, Calendar, MapPin, Users, TrendingUp, FileText } from "lucide-react";

const experiences = [
  {
    title: "Frontend Developer",
    company: "Speaking Warrior",
    period: "April 2024 – June 2024",
    logo: "🗣️",
    description: "Built and launched the Speaking Warrior website using React, Vite, Tailwind CSS, and Framer Motion. Integrated APIs, developed an admin dashboard, and handled full-stack features for a seamless user and admin experience.",
    details:
      `• Built the entire website for Speaking Warrior using React, Vite, Tailwind CSS, and Framer Motion
• Integrated and handled REST APIs for dynamic content and user management
• Designed and implemented a custom admin dashboard for content and user control
• Collaborated in a 2-member team to deliver the project end-to-end
• Ensured responsive, accessible UI and smooth animations throughout the site`,
    tech: ["React.js", "Vite", "Tailwind CSS", "Framer Motion", "REST API"],
    impact: "50k+ users",
    location: "Remote",
    team: "2 members",
    featured: false
  },
  {
       title: "Student Researcher",
    company: "Creative Interfaces Lab, IIIT Delhi",
    period: "Sept 2023 – April 2024",
    logo: "🎓",
    description: " Contributed to R&D on AR/VR Tools and Technologies, co-authoring a paper published at IEEE VR 2024 in Orlando, Florida, USA.",
    details: `
- Developed mobile AR tool for dyslexia screening using ML to analyze interaction patterns
- Created immersive AR/VR educational experiences for enhanced cognitive engagement
- Built VR training environments simulating real-world scenarios
- Collaborated with research team on AR/VR application design and implementation
    `,
    tech: ["Machine Learning", "Unity", "C#", "AR/VR", "Research"],
    impact: "Published paper",
    location: "Delhi, India",
    team: "3 members",
    featured: false
  },
];

// Background matching skills component style
const ExperienceBackground = () => {
  const [isClient, setIsClient] = useState(false);
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    setIsClient(true);
    
    // Generate fixed positions for particles to avoid hydration mismatch
    const particleData = Array.from({ length: 6 }, (_, i) => ({
      id: i,
      left: (i * 16.67) % 100, // Deterministic positioning
      top: (i * 25) % 100,
      duration: 10 + (i * 2.5),
      delay: i * 0.8,
      xMovement: 25 - (i * 8.33),
      yMovement: 25 - (i * 8.33)
    }));
    
    setParticles(particleData);
  }, []);

  if (!isClient) {
    return (
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.06]">
          <svg className="w-full h-full">
            <defs>
              <pattern id="skillsGrid" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M 60 0 L 0 0 0 60" fill="none" stroke="currentColor" strokeWidth="1" className="text-cyan-600"/>
                <circle cx="0" cy="0" r="1.5" fill="currentColor" className="text-cyan-500" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#skillsGrid)" />
          </svg>
        </div>
      </div>
    );
  }

  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Simple grid pattern */}
      <div className="absolute inset-0 opacity-[0.06]">
        <svg className="w-full h-full">
          <defs>
            <pattern id="skillsGrid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="currentColor" strokeWidth="1" className="text-cyan-600"/>
              <circle cx="0" cy="0" r="1.5" fill="currentColor" className="text-cyan-500" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#skillsGrid)" />
        </svg>
      </div>

      {/* Flowing lines */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.12]">
        <motion.path
          d="M0,150 Q300,100 600,200 T1200,150"
          stroke="#06b6d4"
          strokeWidth="1.5"
          fill="none"
          strokeDasharray="12 6"
          initial={{ strokeDashoffset: 0 }}
          animate={{ strokeDashoffset: -120 }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        />
        <motion.path
          d="M0,350 Q250,300 500,400 T1000,350"
          stroke="#0891b2"
          strokeWidth="1"
          fill="none"
          strokeDasharray="8 4"
          initial={{ strokeDashoffset: 0 }}
          animate={{ strokeDashoffset: -80 }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear", delay: 2 }}
        />
        <motion.path
          d="M0,550 Q400,500 800,600 T1600,550"
          stroke="#67e8f9"
          strokeWidth="1"
          fill="none"
          strokeDasharray="10 5"
          initial={{ strokeDashoffset: 0 }}
          animate={{ strokeDashoffset: -100 }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear", delay: 4 }}
        />
      </svg>

      {/* Floating particles - now deterministic */}
      <div className="absolute inset-0">
        {particles.map((particle) => (
          <motion.div
            key={`particle-${particle.id}`}
            className="absolute w-1 h-1 bg-cyan-400/30 rounded-full"
            style={{
              left: `${particle.left}%`,
              top: `${particle.top}%`,
            }}
            animate={{
              x: [0, particle.xMovement],
              y: [0, particle.yMovement],
              opacity: [0.3, 0.8, 0.3],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              delay: particle.delay,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default function Experience() {
  const [selectedCard, setSelectedCard] = useState(null);
  const [hoveredCard, setHoveredCard] = useState(null);

  const handleCardClick = (index) => {
    setSelectedCard(selectedCard === index ? null : index);
  };

  return (
    <main className="relative min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 overflow-hidden">
      <ExperienceBackground />
      
      {/* Floating ambient orbs matching skills component */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute w-[500px] h-[500px] rounded-full opacity-[0.08]"
          style={{
            background: 'radial-gradient(circle, #06b6d4 0%, transparent 70%)',
            top: '-10%',
            right: '-10%',
          }}
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 30, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        
        <motion.div
          className="absolute w-[400px] h-[400px] rounded-full opacity-[0.06]"
          style={{
            background: 'radial-gradient(circle, #0891b2 0%, transparent 70%)',
            bottom: '-8%',
            left: '-8%',
          }}
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -20, 0],
            y: [0, 20, 0],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 10,
          }}
        />
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-24">
        
        {/* Header Section - Centered */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.div
            className="inline-block mb-6"
            whileHover={{ scale: 1.05 }}
          >
            <span className="px-4 py-2 bg-cyan-500/10 text-cyan-400 text-sm font-bold rounded-full border border-cyan-500/20">
              PROFESSIONAL JOURNEY
            </span>
          </motion.div>
          
          <h1 className="text-6xl md:text-8xl font-black tracking-tight mb-6 text-white">
            Experience
          </h1>
          
          <p className="text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto mb-12">
            Building digital experiences and growing through impactful roles in the tech industry.
          </p>

          {/* Global stats */}
          <div className="flex justify-center gap-12">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-center"
            >
              <div className="text-4xl font-black text-white mb-2">2+</div>
              <div className="text-sm text-gray-400 uppercase tracking-wider">Years</div>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-center"
            >
              <div className="text-4xl font-black text-white mb-2">8+</div>
              <div className="text-sm text-gray-400 uppercase tracking-wider">Projects Built</div>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-center"
            >
              <div className="text-4xl font-black text-white mb-2">15+</div>
              <div className="text-sm text-gray-400 uppercase tracking-wider">Technologies</div>
            </motion.div>
          </div>
        </motion.div>

        {/* Experience Cards - Masonry Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`relative ${index === 0 ? 'lg:row-span-2' : ''}`}
            >
              {/* Featured badge */}
              {exp.featured && (
                <motion.div
                  initial={{ scale: 0, rotate: -10 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ delay: 0.8, type: "spring" }}
                  className="absolute -top-3 -right-3 z-30 bg-gradient-to-r from-amber-400 to-orange-500 text-black px-3 py-1 rounded-full text-xs font-bold shadow-lg"
                >
                  ⭐ FEATURED
                </motion.div>
              )}

              <motion.div
                className="group relative bg-gray-800/40 backdrop-blur-xl border border-gray-700/50 rounded-3xl p-8 shadow-2xl transition-all duration-500 cursor-pointer overflow-hidden"
                whileHover={{ 
                  y: -8,
                  scale: 1.02,
                  boxShadow: "0 30px 60px rgba(6,182,212,0.15)",
                }}
                onHoverStart={() => setHoveredCard(index)}
                onHoverEnd={() => setHoveredCard(null)}
                onClick={() => handleCardClick(index)}
              >
                {/* Animated background gradient */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  animate={{
                    background: hoveredCard === index ? 
                      "linear-gradient(135deg, rgba(6,182,212,0.1) 0%, rgba(59,130,246,0.05) 50%, transparent 100%)" :
                      "linear-gradient(135deg, transparent 0%, transparent 50%, transparent 100%)"
                  }}
                />

                {/* Content */}
                <div className="relative z-10">
                  {/* Header with logo and period */}
                  <div className="flex items-start justify-between mb-6">
                    <motion.div
                      className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-blue-500/30 flex items-center justify-center shadow-lg border border-cyan-500/30"
                      whileHover={{ rotate: 10, scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      <span className="text-3xl">{exp.logo}</span>
                    </motion.div>
                    
                    <div className="text-right">
                      <div className="flex items-center gap-2 text-cyan-400 text-sm mb-1">
                        <Calendar className="w-3 h-3" />
                        {exp.period}
                      </div>
                      <div className="text-xs text-gray-400">
                        {selectedCard === index ? 'Click to collapse' : 'Click to expand'}
                      </div>
                    </div>
                  </div>

                  {/* Title and company */}
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                      {exp.title}
                    </h3>
                    <p className="text-lg text-gray-300 font-medium">{exp.company}</p>
                  </div>

                  {/* Quick stats */}
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="text-center p-3 bg-gray-900/50 rounded-xl">
                      <TrendingUp className="w-4 h-4 text-cyan-400 mx-auto mb-1" />
                      <div className="text-xs text-gray-400">Impact</div>
                      <div className="text-sm font-bold text-white">{exp.impact}</div>
                    </div>
                    <div className="text-center p-3 bg-gray-900/50 rounded-xl">
                      <MapPin className="w-4 h-4 text-cyan-400 mx-auto mb-1" />
                      <div className="text-xs text-gray-400">Location</div>
                      <div className="text-sm font-bold text-white">{exp.location}</div>
                    </div>
                    <div className="text-center p-3 bg-gray-900/50 rounded-xl">
                      <Users className="w-4 h-4 text-cyan-400 mx-auto mb-1" />
                      <div className="text-xs text-gray-400">Team</div>
                      <div className="text-sm font-bold text-white">{exp.team}</div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-300 leading-relaxed mb-6">
                    {exp.description}
                  </p>

                  {/* Tech stack with neon colors */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {exp.tech.map((tech, techIndex) => {
                      const neonColors = [
                        'from-red-500/20 to-red-600/20 border-red-500/40 text-red-400 shadow-red-500/25',
                        'from-yellow-500/20 to-yellow-600/20 border-yellow-500/40 text-yellow-400 shadow-yellow-500/25',
                        'from-green-500/20 to-green-600/20 border-green-500/40 text-green-400 shadow-green-500/25',
                        'from-orange-500/20 to-orange-600/20 border-orange-500/40 text-orange-400 shadow-orange-500/25'
                      ];
                      const colorClass = neonColors[techIndex % neonColors.length];
                      
                      return (
                        <motion.span
                          key={tech}
                          className={`px-3 py-1 bg-gradient-to-r ${colorClass} text-sm font-medium rounded-full border backdrop-blur-sm`}
                          initial={{ opacity: 0, scale: 0.8, y: 10 }}
                          whileInView={{ opacity: 1, scale: 1, y: 0 }}
                          transition={{ delay: 0.1 * techIndex, type: "spring" }}
                          whileHover={{ 
                            scale: 1.05,
                            boxShadow: `0 4px 20px var(--tw-shadow-color)`
                          }}
                        >
                          {tech}
                        </motion.span>
                      );
                    })}
                  </div>

                  {/* Expandable details with enhanced animation */}
                  <AnimatePresence>
                    {selectedCard === index && (
                      <motion.div
                        initial={{ 
                          height: 0, 
                          opacity: 0,
                          y: -20
                        }}
                        animate={{ 
                          height: "auto", 
                          opacity: 1,
                          y: 0
                        }}
                        exit={{ 
                          height: 0, 
                          opacity: 0,
                          y: -20
                        }}
                        transition={{ 
                          duration: 0.5,
                          ease: "easeInOut"
                        }}
                        className="overflow-hidden"
                      >
                        <motion.div
                          className="mt-6 p-6 bg-gradient-to-r from-gray-900/80 to-gray-800/80 rounded-2xl border border-cyan-500/20 shadow-inner"
                          initial={{ scale: 0.95 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: 0.2 }}
                        >
                          <h4 className="text-cyan-400 font-bold mb-3 flex items-center gap-2">
                            <TrendingUp className="w-4 h-4" />
                            Key Achievements
                          </h4>
                          <div className="text-gray-300 text-sm leading-relaxed whitespace-pre-line">
                            {exp.details}
                          </div>
                        </motion.div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Expand indicator */}
                  <div className="flex items-center justify-center mt-4">
                    <motion.button
                      className="flex items-center gap-2 text-cyan-400 text-sm font-medium hover:text-cyan-300 transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <span>{selectedCard === index ? "Show less" : "Learn more"}</span>
                      <motion.div
                        animate={{ rotate: selectedCard === index ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <ChevronDown className="w-4 h-4" />
                      </motion.div>
                    </motion.button>
                  </div>
                </div>

                {/* Hover effect border */}
                <motion.div
                  className="absolute inset-0 rounded-3xl border-2 border-cyan-500/0 group-hover:border-cyan-500/30 transition-all duration-500"
                  animate={{
                    borderColor: hoveredCard === index ? "rgba(6,182,212,0.3)" : "rgba(6,182,212,0)"
                  }}
                />
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA with expanding resume button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <div className="flex flex-col items-center gap-3">
            {/* Animated file icon button - completely rewritten */}
            <motion.button
              className="group relative bg-gradient-to-r from-cyan-600 to-blue-600 rounded-2xl shadow-lg transition-all duration-500 flex items-center justify-center px-4 py-4"
              initial={{ width: 64 }}
              whileHover={{ 
                width: 200,
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(6,182,212,0.3)"
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              {/* File icon */}
              <motion.div
                animate={{ 
                  y: [0, -3, 0],
                  rotate: [0, 3, -3, 0]
                }}
                transition={{ 
                  duration: 3, 
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="flex-shrink-0"
              >
                <FileText className="w-7 h-7 text-white" />
              </motion.div>
              
              {/* Text that appears on hover */}
              <motion.span
                className="text-white font-bold text-sm ml-3 overflow-hidden whitespace-nowrap"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 0, x: -10 }} // Add this to ensure it starts hidden
                whileHover={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.2 }} // Remove the delay
              >
                View Resume →
              </motion.span>
              {/* Floating particles */}
              <motion.div
                className="absolute -top-1 -right-1 w-2 h-2 bg-white/50 rounded-full"
                animate={{
                  scale: [0, 1, 0],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: 0
                }}
              />
              <motion.div
                className="absolute -bottom-1 -left-1 w-1.5 h-1.5 bg-white/40 rounded-full"
                animate={{
                  scale: [0, 1, 0],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: 1
                }}
              />
            </motion.button>
            
            {/* Helper text */}
            <motion.p
              className="text-gray-500 text-xs font-medium tracking-wide"
              initial={{ opacity: 0.6 }}
              whileHover={{ opacity: 0.8 }}
              transition={{ duration: 0.3 }}
            >
              hover to view and click on my resume.
            </motion.p>
          </div>
        </motion.div>
      </div>

      {/* Animated bottom border */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent"
        animate={{
          scaleX: [0, 1, 0],
          opacity: [0, 1, 0]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </main>
  );
}