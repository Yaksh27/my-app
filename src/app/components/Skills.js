"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const cdnIcon = (name, color = "") =>
  `https://cdn.simpleicons.org/${name.toLowerCase().replace(/\s|\./g, "")}${color ? "/" + color.replace("#", "") : ""}`;

const SKILLS = [
  {
    category: "Languages",
    icons: [
      { name: "html5", label: "HTML5", color: "#orange-400" },
      { name: "css", label: "CSS3", color: "#2196f3" },
      { name: "javascript", label: "JavaScript", color: "#ffd600" },
      { name: "python", label: "Python", color: "#3766ab" },
    ]
  },
  {
    category: "Frameworks",
    icons: [
      { name: "tailwindcss", label: "Tailwind CSS", color: "#38bdf8" },
      { name: "express", label: "Express.js", color: "white" },
    ]
  },
  {
    category: "Libraries",
    icons: [
      { name: "react", label: "React.js", color: "#61dafb" },
      { name: "nextdotjs", label: "Next.js", color: "#gray-900" },
      { name: "framer", label: "Framer Motion", color: "#06b6d4" },
    ]
  },
  {
    category: "Databases",
    icons: [
      { name: "mysql", label: "MySQL", color: "#f89820" },
      { name: "mongodb", label: "MongoDB", color: "#47a248" },
    ]
  },
  {
    category: "Tools",
    icons: [
      { name: "git", label: "Git", color: "#e94e31" },
      { name: "github", label: "GitHub", color: "#white" },
      { name: "figma", label: "Figma", color: "#a259ff" },
      { name: "vite", label: "Vite", color: "#646cff" },
    ]
  },
  {
    category: "Environments",
    icons: [
      { name: "nodedotjs", label: "Node.js", color: "#3c873a" },
    ]
  },
  {
    category: "Deployment",
    icons: [
      { name: "Vercel", label: "Vercel", color: "black" },
      { name: "Render", label: "Render", color: "grey" },
    ]
  }
];

const iconVariants = {
  hidden: { opacity: 0, scale: 0.5, y: 30 },
  visible: i => ({
    opacity: 1, scale: 1, y: 0, transition: { delay: i * 0.06, type: "spring", stiffness: 400, damping: 20 }
  })
};

// Background matching homepage style
const SkillsBackground = () => {
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

export default function Skills() {
  const [hovered, setHovered] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <section
      id="skills"
      className="relative min-h-screen flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-gray-900 via-black to-gray-800"
    >
      {/* Background matching homepage */}
      <SkillsBackground />
      
      {/* Dark theme floating orbs - adjusted for mobile */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute w-[300px] sm:w-[400px] lg:w-[500px] h-[300px] sm:h-[400px] lg:h-[500px] rounded-full opacity-[0.08]"
          style={{
            background: 'radial-gradient(circle, #06b6d4 0%, transparent 70%)',
            top: '-10%',
            right: '-15%',
          }}
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 20, 0],
            y: [0, -15, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        
        <motion.div
          className="absolute w-[250px] sm:w-[350px] lg:w-[400px] h-[250px] sm:h-[350px] lg:h-[400px] rounded-full opacity-[0.06]"
          style={{
            background: 'radial-gradient(circle, #0891b2 0%, transparent 70%)',
            bottom: '-8%',
            left: '-15%',
          }}
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -15, 0],
            y: [0, 15, 0],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 10,
          }}
        />
      </div>

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true }}
        className="mb-6 sm:mb-8 lg:mb-10 flex flex-col items-center relative z-20 text-center"
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-2 select-none">
          <span 
            className="bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-300 bg-clip-text text-transparent"
            style={{ 
              filter: 'drop-shadow(0 0 8px rgba(6, 182, 212, 0.3))',
            }}
          >
            SKILLS
          </span>
        </h2>
        <p className="text-base sm:text-lg md:text-xl text-gray-300 font-medium px-4">
          What I have learnt until now.
        </p>
      </motion.div>

      {/* Skills Container */}
      <motion.div
        className="relative w-full max-w-7xl"
        initial={{ opacity: 0, y: 50, scale: 0.98 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Desktop Layout (md and up) */}
        <div className="hidden md:block">
          <div className="bg-gray-800/60 backdrop-blur-lg rounded-3xl p-6 lg:p-12 shadow-xl border border-gray-700/50">
            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-tr from-cyan-500/10 via-blue-500/8 to-cyan-400/10 blur-lg pointer-events-none" />

            <div className="relative z-10 grid grid-cols-7 gap-y-6">
              {/* Category Labels */}
              <div className="flex flex-col gap-10 items-end pt-2 col-span-2">
                {SKILLS.map(({ category }) => (
                  <div
                    key={category}
                    className="min-h-[56px] flex items-center"
                  >
                    <span className="text-lg lg:text-xl font-bold tracking-wide text-gray-300 opacity-95 select-none">
                      {category}
                    </span>
                  </div>
                ))}
              </div>

              {/* Divider */}
              <div className="col-span-1 flex flex-col justify-center">
                <div className="h-full w-px bg-gradient-to-b from-transparent via-cyan-500/30 to-transparent mx-auto" />
              </div>

              {/* Icon Grid */}
              <div className="flex flex-col gap-10 col-span-4">
                {SKILLS.map(({ icons }, rowIdx) => {
                  const maxIcons = Math.max(...SKILLS.map(row => row.icons.length));
                  return (
                    <div
                      key={rowIdx}
                      className="grid grid-cols-4 lg:grid-cols-7 gap-x-4 lg:gap-x-7 gap-y-3 items-center"
                      style={{ minHeight: "56px" }}
                    >
                      {Array.from({ length: maxIcons }).map((_, i) => {
                        const icon = icons[i];
                        return icon ? (
                          <motion.button
                            key={icon.name}
                            className="relative group rounded-xl focus:outline-none mx-auto"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            custom={i}
                            variants={iconVariants}
                            whileHover={{ scale: 1.18, boxShadow: `0 4px 20px ${icon.color}33` }}
                            whileFocus={{ scale: 1.12 }}
                            transition={{ type: "spring", stiffness: 380, damping: 18 }}
                            style={{
                              background: hovered === icon.name ? `${icon.color}15` : "rgba(55, 65, 81, 0.3)",
                              transition: "background 0.18s",
                              minWidth: 48,
                              minHeight: 48,
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              border: `1px solid ${hovered === icon.name ? `${icon.color}40` : 'rgba(75, 85, 99, 0.3)'}`,
                            }}
                            onMouseEnter={() => setHovered(icon.name)}
                            onMouseLeave={() => setHovered(null)}
                            tabIndex={0}
                          >
                            <img
                              src={cdnIcon(icon.name, icon.color)}
                              alt={icon.label}
                              width={38}
                              height={38}
                              style={{
                                filter: hovered === icon.name ? `drop-shadow(0 0 8px ${icon.color}66)` : undefined,
                                transition: "filter 0.15s",
                                borderRadius: "10px",
                                background: hovered === icon.name ? "rgba(255,255,255,0.1)" : "rgba(255,255,255,0.05)",
                                padding: 3,
                              }}
                              onError={e => {
                                e.target.onerror = null;
                                e.target.src =
                                  "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='38' height='38'><rect width='100%' height='100%' rx='8' fill='%23374151'/><text x='50%' y='54%' font-size='17' fill='%23d1d5db' text-anchor='middle' dominant-baseline='middle'>?</text></svg>";
                              }}
                            />
                            {/* Tooltip */}
                            <motion.span
                              initial={{ opacity: 0, y: 10 }}
                              animate={hovered === icon.name ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                              transition={{ duration: 0.18 }}
                              className="pointer-events-none absolute bottom-[-2.3rem] left-1/2 -translate-x-1/2 px-3 py-1 rounded-xl text-xs font-semibold text-white bg-gray-800/90 shadow-md whitespace-nowrap border border-gray-600/50"
                              style={{ zIndex: 10 }}
                            >
                              {icon.label}
                            </motion.span>
                          </motion.button>
                        ) : (
                          <div key={i} />
                        );
                      })}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Layout (sm and below) */}
        <div className="block md:hidden space-y-6">
          {SKILLS.map(({ category, icons }, categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-800/60 backdrop-blur-lg rounded-2xl p-4 sm:p-6 shadow-xl border border-gray-700/50"
            >
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-tr from-cyan-500/10 via-blue-500/8 to-cyan-400/10 blur-lg pointer-events-none" />
              
              <div className="relative z-10">
                {/* Category Title */}
                <h3 className="text-lg sm:text-xl font-bold text-center mb-4 text-gray-200 tracking-wide">
                  {category}
                </h3>
                
                {/* Icons Grid */}
                <div className="grid grid-cols-3 sm:grid-cols-4 gap-3 sm:gap-4">
                  {icons.map((icon, iconIndex) => (
                    <motion.button
                      key={icon.name}
                      className="relative group rounded-xl focus:outline-none"
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      custom={iconIndex}
                      variants={iconVariants}
                      whileTap={{ scale: 0.95 }}
                      style={{
                        background: hovered === icon.name ? `${icon.color}15` : "rgba(55, 65, 81, 0.4)",
                        transition: "background 0.18s",
                        minHeight: "64px",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        padding: "12px 8px",
                        border: `1px solid ${hovered === icon.name ? `${icon.color}40` : 'rgba(75, 85, 99, 0.3)'}`,
                      }}
                      onTouchStart={() => setHovered(icon.name)}
                      onTouchEnd={() => setTimeout(() => setHovered(null), 1500)}
                      onMouseEnter={() => !isMobile && setHovered(icon.name)}
                      onMouseLeave={() => !isMobile && setHovered(null)}
                      tabIndex={0}
                    >
                      <img
                        src={cdnIcon(icon.name, icon.color)}
                        alt={icon.label}
                        width={32}
                        height={32}
                        className="mb-2"
                        style={{
                          filter: hovered === icon.name ? `drop-shadow(0 0 6px ${icon.color}66)` : undefined,
                          transition: "filter 0.15s",
                          borderRadius: "8px",
                          background: hovered === icon.name ? "rgba(255,255,255,0.1)" : "rgba(255,255,255,0.05)",
                          padding: 2,
                        }}
                        onError={e => {
                          e.target.onerror = null;
                          e.target.src =
                            "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='32' height='32'><rect width='100%' height='100%' rx='6' fill='%23374151'/><text x='50%' y='54%' font-size='14' fill='%23d1d5db' text-anchor='middle' dominant-baseline='middle'>?</text></svg>";
                        }}
                      />
                      
                      {/* Label always visible on mobile */}
                      <span className="text-xs font-medium text-gray-300 text-center leading-tight">
                        {icon.label}
                      </span>
                    </motion.button>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}