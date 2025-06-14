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

export default function Skills() {
  const [hovered, setHovered] = useState(null);

  // Find the max number of icons in any row for grid
  const maxIcons = Math.max(...SKILLS.map(row => row.icons.length));

  return (
    <section
      id="skills"
      className="relative min-h-screen flex flex-col justify-center items-center px-2 md:px-0 py-20 bg-gradient-to-br from-gray-900 via-black to-gray-800"
    >
      {/* Background matching homepage */}
      <SkillsBackground />
      
      {/* Dark theme floating orbs */}
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

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true }}
        className="mb-10 flex flex-col items-center relative z-20"
      >
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-2 select-none">
          <span 
            className="bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-300 bg-clip-text text-transparent"
            style={{ 
              filter: 'drop-shadow(0 0 8px rgba(6, 182, 212, 0.3))',
            }}
          >
            SKILLS
          </span>
        </h2>
        <p className="text-lg md:text-xl text-gray-300 font-medium">
          What I have learnt until now.
        </p>
      </motion.div>

      {/* Glass Card */}
      <motion.div
        className="relative w-full max-w-4xl bg-gray-800/60 backdrop-blur-lg rounded-3xl p-4 md:p-12 shadow-xl border border-gray-700/50"
        initial={{ opacity: 0, y: 50, scale: 0.98 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="absolute -inset-1 rounded-3xl bg-gradient-to-tr from-cyan-500/10 via-blue-500/8 to-cyan-400/10 blur-lg pointer-events-none" />

        <div className="relative z-10 grid grid-cols-7 gap-y-6">
          {/* Category Labels */}
          <div className="flex flex-col gap-10 items-end pt-2 col-span-2">
            {SKILLS.map(({ category }) => (
              <div
                key={category}
                className="min-h-[56px] flex items-center"
              >
                <span className="text-[1.25rem] font-bold tracking-wide text-gray-300 opacity-95 select-none">
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
            {SKILLS.map(({ icons }, rowIdx) => (
              <div
                key={rowIdx}
                className="grid grid-cols-7 gap-x-7 gap-y-3 items-center"
                style={{ minHeight: "56px" }}
              >
                {Array.from({ length: maxIcons }).map((_, i) => {
                  const icon = icons[i];
                  return icon ? (
                    <motion.button
                      key={icon.name}
                      className="relative group rounded-xl focus:outline-none"
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
                        margin: "0 auto",
                        border: `1px solid ${hovered === icon.name ? `${icon.color}40` : 'rgba(75, 85, 99, 0.3)'}`,
                      }}
                      onMouseEnter={() => setHovered(icon.name)}
                      onMouseLeave={() => setHovered(null)}
                      tabIndex={0}
                    >
                      {/* Icon SVG */}
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
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}