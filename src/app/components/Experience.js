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

export default function Experience() {
  const [open, setOpen] = useState(null);

  return (
    <main className="relative min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Large floating orbs */}
        <motion.div
          className="absolute w-[600px] h-[600px] bg-gradient-to-r from-indigo-200/20 to-purple-200/15 rounded-full blur-3xl"
          animate={{
            x: [0, 100, -50, 0],
            y: [0, -60, 80, 0],
            scale: [1, 1.2, 0.9, 1],
          }}
          transition={{
            duration: 35,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{ top: "-10%", right: "-15%" }}
        />
        <motion.div
          className="absolute w-[500px] h-[500px] bg-gradient-to-tr from-blue-200/15 to-cyan-200/10 rounded-full blur-3xl"
          animate={{
            x: [0, -80, 60, 0],
            y: [0, 70, -40, 0],
            scale: [1, 1.1, 0.95, 1],
          }}
          transition={{
            duration: 40,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 8,
          }}
          style={{ bottom: "-20%", left: "-10%" }}
        />
        
        {/* Smaller accent elements */}
        <motion.div
          className="absolute w-32 h-32 bg-gradient-to-r from-pink-300/30 to-rose-300/25 rounded-full blur-2xl"
          animate={{
            x: [0, 40, -20, 0],
            y: [0, -30, 25, 0],
          }}
          transition={{
            duration: 25,
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
              <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-6 text-gray-900">
                Experience
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed mb-8 max-w-md">
                My journey through different roles, learning and growing as a developer.
              </p>
              
              {/* Stats */}
              <div className="flex gap-8 mb-8">
                <div>
                  <div className="text-3xl font-bold text-gray-900">5+</div>
                  <div className="text-sm text-gray-500 uppercase tracking-wide">Projects</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-gray-900">10+</div>
                  <div className="text-sm text-gray-500 uppercase tracking-wide">Technologies</div>
                </div>
              </div>
            </motion.div>

            {/* Decorative line */}
            <motion.div
              className="hidden lg:block w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: 96 }}
              transition={{ duration: 1.2, delay: 0.5 }}
            />
          </div>

          {/* Right side - Experience cards */}
          <div className="col-span-12 lg:col-span-7">
            <div className="relative">
              {/* Connecting line */}
              <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-indigo-200 via-purple-200 to-transparent" />
              
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
                    <div className="absolute left-6 top-8 w-5 h-5 rounded-full bg-white shadow-lg border-4 border-indigo-300 z-20" />
                    
                    {/* Card */}
                    <motion.div
                      className="ml-20 group bg-white/80 backdrop-blur-sm border border-gray-200/60 rounded-2xl p-8 shadow-sm hover:shadow-xl hover:bg-white/90 transition-all duration-300 cursor-pointer"
                      whileHover={{ 
                        y: -4,
                        boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                      }}
                      onClick={() => setOpen(open === i ? null : i)}
                      tabIndex={0}
                      onKeyDown={e => (e.key === "Enter" ? setOpen(open === i ? null : i) : null)}
                    >
                      {/* Header */}
                      <div className="flex items-start justify-between mb-6">
                        <div className="flex items-center gap-4">
                          <motion.div
                            className="w-14 h-14 rounded-xl bg-gradient-to-br from-indigo-100 to-purple-100 flex items-center justify-center shadow-sm"
                            whileHover={{ scale: 1.1, rotate: 5 }}
                          >
                            <span className="text-2xl">{exp.logo}</span>
                          </motion.div>
                          <div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-1">
                              {exp.title}
                            </h3>
                            <p className="text-lg text-gray-600 mb-1">{exp.company}</p>
                            <p className="text-sm text-gray-500">{exp.period}</p>
                          </div>
                        </div>
                      </div>

                      {/* Tech stack */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {exp.tech.map((tech, techIndex) => (
                          <motion.span
                            key={tech}
                            className="px-3 py-1 bg-indigo-50 text-indigo-700 text-sm font-medium rounded-full border border-indigo-100"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.1 * techIndex }}
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>

                      {/* Description */}
                      <p className="text-gray-700 leading-relaxed mb-4">
                        {exp.description}
                      </p>

                      {/* Expandable details */}
                      <AnimatePresence>
                        {open === i && (
                          <motion.div
                            className="mt-4 p-4 bg-gray-50/80 rounded-xl border-l-4 border-indigo-200"
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.4 }}
                          >
                            <div className="text-gray-600 text-sm leading-relaxed whitespace-pre-line">
                              {exp.details}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>

                      {/* Expand button */}
                      <div className="flex items-center gap-2 text-indigo-600 text-sm mt-4 font-medium">
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
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
    </main>
  );
}