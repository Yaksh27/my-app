"use client";
import { useState } from "react";
import { motion } from "framer-motion";

const cdnIcon = (name, color = "") =>
  `https://cdn.simpleicons.org/${name.toLowerCase().replace(/\s|\./g, "")}${color ? "/" + color.replace("#", "") : ""}`;

const SKILLS = [
  {
    category: "Languages",
    icons: [
      { name: "html5", label: "HTML5", color: "#ff5722" },
      { name: "css", label: "CSS3", color: "#2196f3" },
      { name: "javascript", label: "JavaScript", color: "#ffd600" },
      { name: "python", label: "Python", color: "#3776ab" },
    ]
  },
  {
    category: "Frameworks",
    icons: [
      { name: "tailwindcss", label: "Tailwind CSS", color: "#38bdf8" },
      { name: "express", label: "Express.js", color: "#444444" },
    ]
  },
  {
    category: "Libraries",
    icons: [
      { name: "react", label: "React", color: "#61dafb" },
      { name: "nextdotjs", label: "Next.js", color: "#000000" },
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
      { name: "github", label: "GitHub", color: "#24292f" },
      { name: "figma", label: "Figma", color: "#a259ff" },
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

export default function Skills() {
  const [hovered, setHovered] = useState(null);

  // Find the max number of icons in any row for grid
  const maxIcons = Math.max(...SKILLS.map(row => row.icons.length));

  return (
    <section
      id="skills"
      className="relative min-h-screen flex flex-col justify-center items-center px-2 md:px-0 py-20 bg-white"
    >
      {/* Subtle Gradient Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-2/3 h-1/2 left-1/3 top-0 bg-gradient-to-br from-indigo-100 via-blue-100 to-transparent blur-3xl rounded-full opacity-60" />
        <div className="absolute w-1/2 h-1/2 right-0 bottom-0 bg-gradient-to-tl from-purple-100 via-fuchsia-100 to-transparent blur-2xl rounded-full opacity-60" />
      </div>

            <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true }}
        className="mb-10 flex flex-col items-center relative z-20"
        >
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-2 select-none">
            <span className="bg-gradient-to-r from-indigo-600 via-purple-500 to-fuchsia-500 bg-clip-text text-transparent animate-gradient-x drop-shadow-[0_1px_1.5px_rgba(80,0,150,0.10)]">
            SKILLS
            </span>
        </h2>
        <p className="text-lg md:text-xl text-gray-500 font-medium">
            What I have learnt until now.
        </p>
        </motion.div>



      {/* Glass Card */}
      <motion.div
        className="relative w-full max-w-4xl bg-white/90 rounded-3xl p-4 md:p-12 shadow-xl border border-gray-200 backdrop-blur-lg"
        initial={{ opacity: 0, y: 50, scale: 0.98 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="absolute -inset-1 rounded-3xl bg-gradient-to-tr from-indigo-300/20 via-fuchsia-300/15 to-purple-200/20 blur-lg pointer-events-none" />

        <div className="relative z-10 grid grid-cols-7 gap-y-6">
          {/* Category Labels */}
          <div className="flex flex-col gap-10 items-end pt-2 col-span-2">
            {SKILLS.map(({ category }) => (
              <div
                key={category}
                className="min-h-[56px] flex items-center"
              >
                <span className="text-[1.25rem] font-bold tracking-wide text-gray-500 opacity-95 select-none">
                  {category}
                </span>
              </div>
            ))}
          </div>

          {/* Divider */}
          <div className="col-span-1 flex flex-col justify-center">
            <div className="h-full w-px bg-gradient-to-b from-transparent via-gray-200 to-transparent mx-auto" />
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
                      whileHover={{ scale: 1.18, boxShadow: `0 2px 14px ${icon.color}33` }}
                      whileFocus={{ scale: 1.12 }}
                      transition={{ type: "spring", stiffness: 380, damping: 18 }}
                      style={{
                        background: hovered === icon.name ? `${icon.color}18` : "transparent",
                        transition: "background 0.18s",
                        minWidth: 48,
                        minHeight: 48,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        margin: "0 auto"
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
                          filter: hovered === icon.name ? "drop-shadow(0 0 12px #b8c3f5)" : undefined,
                          transition: "filter 0.15s",
                          borderRadius: "10px",
                          background: "#f6f7fa",
                          padding: 3,
                        }}
                        onError={e => {
                          e.target.onerror = null;
                          e.target.src =
                            "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='38' height='38'><rect width='100%' height='100%' rx='8' fill='%23e2e8f0'/><text x='50%' y='54%' font-size='17' fill='%23999' text-anchor='middle' dominant-baseline='middle'>?</text></svg>";
                        }}
                      />
                      {/* Tooltip */}
                      <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        animate={hovered === icon.name ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                        transition={{ duration: 0.18 }}
                        className="pointer-events-none absolute bottom-[-2.3rem] left-1/2 -translate-x-1/2 px-3 py-1 rounded-xl text-xs font-semibold text-gray-700 bg-white/90 shadow-md whitespace-nowrap border border-gray-200"
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
