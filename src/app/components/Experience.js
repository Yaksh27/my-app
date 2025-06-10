"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const experiences = [
  {
    title: "Frontend Engineer",
    company: "Awesome Corp",
    period: "Jan 2022 – Present",
    logo: "🏢",
    description: "Built beautiful, accessible UIs using React, Next.js, and Tailwind. Worked with designers and back-end devs. Helped grow product from 0 to 50k users.",
    details:
      "• Led migration to Next.js App Router.\n• Developed reusable UI components.\n• Optimized performance (TTFB -40%).\n• Mentored 2 junior engineers.",
    tech: ["React", "Next.js", "Tailwind", "Framer Motion"],
  },
  {
    title: "UI/UX Intern",
    company: "Designify",
    period: "Jun 2021 – Dec 2021",
    logo: "🎨",
    description: "Helped design and prototype mobile apps. Turned Figma wireframes into pixel-perfect frontends. Learned design systems and accessibility.",
    details:
      "• Worked on 3 major redesigns.\n• Prototyped in Figma & shipped code.\n• Presented UX ideas to clients.",
    tech: ["Figma", "React", "HTML/CSS"],
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1 },
};

// Simple background matching homepage
const ExperienceBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Simple grid pattern */}
      <div className="absolute inset-0 opacity-[0.06]">
        <svg className="w-full h-full">
          <defs>
            <pattern id="expGrid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="currentColor" strokeWidth="1" className="text-cyan-600"/>
              <circle cx="0" cy="0" r="1.5" fill="currentColor" className="text-cyan-500" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#expGrid)" />
        </svg>
      </div>

      {/* Flowing lines */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.12]">
        <motion.path
          d="M0,200 Q300,150 600,250 T1200,200"
          stroke="#06b6d4"
          strokeWidth="1.5"
          fill="none"
          strokeDasharray="12 6"
          initial={{ strokeDashoffset: 0 }}
          animate={{ strokeDashoffset: -120 }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        />
        <motion.path
          d="M0,400 Q250,350 500,450 T1000,400"
          stroke="#0891b2"
          strokeWidth="1"
          fill="none"
          strokeDasharray="8 4"
          initial={{ strokeDashoffset: 0 }}
          animate={{ strokeDashoffset: -80 }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear", delay: 2 }}
        />
        <motion.path
          d="M0,600 Q400,550 800,650 T1600,600"
          stroke="#67e8f9"
          strokeWidth="1"
          fill="none"
          strokeDasharray="10 5"
          initial={{ strokeDashoffset: 0 }}
          animate={{ strokeDashoffset: -100 }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear", delay: 4 }}
        />
      </svg>

      {/* Floating particles */}
      <div className="absolute inset-0">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={`particle-${i}`}
            className="absolute w-1 h-1 bg-cyan-400/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50],
              opacity: [0.3, 0.8, 0.3],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: Math.random() * 15 + 10,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default function Experience() {
  const [open, setOpen] = useState(null);

  return (
    <main className="relative min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 overflow-hidden">
      {/* Background matching homepage */}
      <ExperienceBackground />
      
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
            x: [0, 80, -30, 0],
            y: [0, -50, 60, 0],
            scale: [1, 1.2, 0.9, 1],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute w-[400px] h-[400px] rounded-full opacity-[0.06]"
          style={{
            background: 'radial-gradient(circle, #0891b2 0%, transparent 70%)',
            bottom: '-15%',
            left: '-8%',
          }}
          animate={{
            x: [0, -60, 40, 0],
            y: [0, 50, -30, 0],
            scale: [1, 1.1, 0.95, 1],
          }}
          transition={{
            duration: 35,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 8,
          }}
        />
        
        {/* Smaller accent elements */}
        <motion.div
          className="absolute w-24 h-24 bg-gradient-to-r from-cyan-400/10 to-blue-400/8 rounded-full blur-2xl"
          animate={{
            x: [0, 30, -15, 0],
            y: [0, -20, 15, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 12,
          }}
          style={{ top: "15%", left: "20%" }}
        />
      </div>

      {/* Main content container */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-12 gap-8 items-start">
          {/* Left side - Title and intro */}
          <div className="col-span-12 lg:col-span-5 sticky top-24">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="mb-8"
            >
              <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-6 text-white">
                Experience
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed mb-8 max-w-md">
                My journey through different roles, learning and growing as a developer.
              </p>
              
              {/* Stats */}
              <div className="flex gap-8 mb-8">
                <div>
                  <div className="text-3xl font-bold text-white">5+</div>
                  <div className="text-sm text-gray-400 uppercase tracking-wide">Projects</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-white">10+</div>
                  <div className="text-sm text-gray-400 uppercase tracking-wide">Technologies</div>
                </div>
              </div>
            </motion.div>

            {/* Decorative line */}
            <motion.div
              className="hidden lg:block w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: 96 }}
              transition={{ duration: 1.2, delay: 0.5 }}
            />
          </div>

          {/* Right side - Experience cards */}
          <div className="col-span-12 lg:col-span-7">
            <div className="relative">
              {/* Connecting line */}
              <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-500/30 via-blue-500/20 to-transparent" />
              
              <div className="space-y-12">
                {experiences.map((exp, i) => (
                  <motion.div
                    key={i}
                    className="relative"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={cardVariants}
                    transition={{ duration: 0.7, delay: i * 0.2, ease: "easeOut" }}
                  >
                    {/* Timeline dot */}
                    <div className="absolute left-6 top-8 w-5 h-5 rounded-full bg-gray-800 shadow-lg border-4 border-cyan-400/60 z-20" />
                    
                    {/* Card */}
                    <motion.div
                      className="ml-20 group bg-gray-800/60 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 shadow-lg hover:shadow-xl hover:bg-gray-800/80 transition-all duration-300 cursor-pointer"
                      whileHover={{ 
                        y: -4,
                        boxShadow: "0 20px 40px rgba(6,182,212,0.1)",
                      }}
                      onClick={() => setOpen(open === i ? null : i)}
                      tabIndex={0}
                      onKeyDown={e => (e.key === "Enter" ? setOpen(open === i ? null : i) : null)}
                    >
                      {/* Header */}
                      <div className="flex items-start justify-between mb-6">
                        <div className="flex items-center gap-4">
                          <motion.div
                            className="w-14 h-14 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center shadow-sm border border-cyan-500/30"
                            whileHover={{ scale: 1.1, rotate: 5 }}
                          >
                            <span className="text-2xl">{exp.logo}</span>
                          </motion.div>
                          <div>
                            <h3 className="text-2xl font-bold text-white mb-1">
                              {exp.title}
                            </h3>
                            <p className="text-lg text-gray-300 mb-1">{exp.company}</p>
                            <p className="text-sm text-gray-400">{exp.period}</p>
                          </div>
                        </div>
                      </div>

                      {/* Tech stack */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {exp.tech.map((tech, techIndex) => (
                          <motion.span
                            key={tech}
                            className="px-3 py-1 bg-cyan-500/10 text-cyan-300 text-sm font-medium rounded-full border border-cyan-500/20"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.1 * techIndex }}
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>

                      {/* Description */}
                      <p className="text-gray-300 leading-relaxed mb-4">
                        {exp.description}
                      </p>

                      {/* Expandable details */}
                      <AnimatePresence>
                        {open === i && (
                          <motion.div
                            className="mt-4 p-4 bg-gray-900/60 rounded-xl border-l-4 border-cyan-500/40"
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.4 }}
                          >
                            <div className="text-gray-400 text-sm leading-relaxed whitespace-pre-line">
                              {exp.details}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>

                      {/* Expand button */}
                      <div className="flex items-center gap-2 text-cyan-400 text-sm mt-4 font-medium">
                        <span>{open === i ? "Show less" : "Learn more"}</span>
                        <motion.span
                          className="inline-block"
                          animate={{ rotate: open === i ? 180 : 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          ↓
                        </motion.span>
                      </div>
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom decorative element */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent" />
    </main>
  );
}