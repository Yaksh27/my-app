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
    <main className="relative flex flex-col items-center min-h-screen px-6 pt-32 bg-white overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute w-96 h-96 bg-gradient-to-r from-indigo-200/40 to-purple-100/30 rounded-full blur-3xl"
          animate={{
            x: [0, 80, -40, 0],
            y: [0, -40, 40, 0],
            scale: [1, 1.15, 0.95, 1],
          }}
          transition={{
            duration: 28,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{ top: "12%", left: "60%" }}
        />
        <motion.div
          className="absolute w-72 h-72 bg-gradient-to-tr from-green-200/30 to-yellow-100/20 rounded-full blur-3xl"
          animate={{
            x: [0, -60, 40, 0],
            y: [0, 50, -20, 0],
            scale: [1, 1.08, 0.93, 1],
          }}
          transition={{
            duration: 32,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4,
          }}
          style={{ top: "70%", left: "6%" }}
        />
      </div>

      {/* Heading */}
      <motion.h1
        className="text-4xl md:text-6xl font-extrabold tracking-tight mb-14 z-10"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
      >
        Experience
      </motion.h1>

      {/* Timeline vertical line */}
      <div className="absolute left-1/2 top-48 bottom-8 -translate-x-1/2 w-1 bg-gradient-to-b from-transparent via-gray-200 to-transparent rounded-full pointer-events-none hidden md:block" />

      {/* Experience Cards */}
      <section className="w-full max-w-2xl flex flex-col gap-14 relative z-10">
        {experiences.map((exp, i) => (
          <motion.div
            key={i}
            className="relative"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            variants={cardVariants}
            transition={{ duration: 0.7, delay: i * 0.2, ease: "easeOut" }}
          >
            {/* Timeline Dot */}
            <div className="hidden md:block absolute -left-9 top-10 w-5 h-5 rounded-full bg-white shadow-lg border-4 border-indigo-300 z-20" />
            <motion.div
              className="group bg-white/90 backdrop-blur-lg border border-gray-200 rounded-3xl px-8 py-8 shadow-lg hover:shadow-2xl hover:-translate-y-1 hover:scale-105 transition-all duration-300 cursor-pointer"
              whileHover={{ boxShadow: "0 8px 32px 0 rgba(128,100,255,0.17)" }}
              onClick={() => setOpen(open === i ? null : i)}
              tabIndex={0}
              onKeyDown={e => (e.key === "Enter" ? setOpen(open === i ? null : i) : null)}
              aria-expanded={open === i}
              aria-controls={`exp-desc-${i}`}
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                {/* Logo with animated ring */}
                <motion.div
                  className="flex-shrink-0 w-16 h-16 rounded-full flex items-center justify-center bg-gradient-to-br from-indigo-100 via-white to-purple-50 border-2 border-indigo-200 shadow-md relative group-hover:scale-110 transition-all duration-200"
                  whileHover={{ scale: 1.12, rotate: 4 }}
                >
                  <span className="text-3xl">{exp.logo}</span>
                  {/* animated gradient ring */}
                  <motion.span
                    className="absolute inset-0 rounded-full border-2 border-transparent group-hover:border-indigo-400"
                    initial={false}
                    animate={open === i ? { borderColor: "#6366f1" } : { borderColor: "transparent" }}
                    transition={{ duration: 0.4 }}
                  />
                </motion.div>

                <div>
                  <h2 className="text-2xl font-bold mb-1">{exp.title}</h2>
                  <p className="text-lg text-gray-700 mb-1">{exp.company}</p>
                  <p className="text-sm text-gray-500">{exp.period}</p>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {exp.tech.map((t) => (
                      <span key={t} className="text-xs bg-indigo-100 text-indigo-800 px-2 py-1 rounded-full font-semibold">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              {/* Description */}
              <p className="mt-4 text-gray-700 text-base leading-relaxed">
                {exp.description}
              </p>
              {/* Expandable details */}
              <AnimatePresence>
                {open === i && (
                  <motion.div
                    id={`exp-desc-${i}`}
                    className="mt-4 pl-2 border-l-4 border-indigo-200 text-gray-600 text-sm whitespace-pre-line"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4 }}
                  >
                    {exp.details}
                  </motion.div>
                )}
              </AnimatePresence>
              {/* Expand/Collapse button */}
              <div className="flex items-center gap-1 text-indigo-600 text-sm mt-2 select-none pointer-events-none">
                <span className="pointer-events-auto">{open === i ? "Show less" : "Show more"}</span>
                <motion.span
                  className="inline-block pointer-events-auto"
                  animate={{ rotate: open === i ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >▼</motion.span>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </section>
    </main>
  );
}
