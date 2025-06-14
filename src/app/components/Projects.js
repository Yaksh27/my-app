"use client";
import React, { useState, useEffect } from 'react';
import { ExternalLink, Github, Code, Sparkles, Zap, Rocket, Star } from 'lucide-react';
import { motion } from 'framer-motion';

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Updated project data with multiple categories support
  const projects = [
    {
      id: 1,
      title: "Chat AI",
      description: "Full-stack AI chat application with real-time messaging and image generation using Google Gemini API, featuring mobile-first design and secure backend architecture with tRPC and Supabase.",
      categories: ["ai-ml", "web-app"],
      technologies: ["Next.js", "TypeScript", "React", "Google Gemini API", "tRPC", "Supabase", "Auth0"],
      image: "https://images.unsplash.com/photo-1587560699334-cc4ff634909a?w=600&h=400&fit=crop",
      liveUrl: "#",
      githubUrl: "#",
      featured: true
    },
    {
      id: 2,
      title: "Diabese",
      description: "RAG-powered chatbot designed to assist elderly users managing chronic conditions with conversational UX, utilizing LLMs and advanced retrieval pipelines for enhanced clarity and support.",
      categories: ["ai-ml", "web-app"],
      technologies: ["Python", "React.js", "OpenAI API", "OCR", "Node.js", "MongoDB", "Express.js"],
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=400&fit=crop",
      githubUrl: "#",
      featured: true
    },
    {
      id: 3,
      title: "Network Security",
      description: "Enhanced community detection algorithm optimizing Greedy Modularity methods with 15-20% improved accuracy, featuring interactive data visualization platform for complex network analysis.",
      categories: ["other"],
      technologies: ["Python", "NetworkX", "Streamlit", "Graph Algorithms", "Data Visualization"],
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop",
      githubUrl: "#",
      featured: false
    },
    {
      id: 4,
      title: "Training Recommender",
      description: "Personalized workout and nutrition engine applying IR ranking + ML/NLP to match users with optimal routines and meal plans, exposed via RESTful APIs for seamless web integration.",
      categories: ["web-app", "ai-ml"],
      technologies: ["React.js", "Machine Learning", "NLP", "RESTful APIs", "JSON", "CSS", "MySQL"],
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop",
      liveUrl: "#",
      githubUrl: "#",
      featured: true
    },
    {
      id: 5,
      title: "Dyslexia Screening",
      description: "Four mobile-based AR checks in Unity for early dyslexia screening in children, featuring CNN trained on EMNIST dataset for on-screen alphabet drawing and identification.",
      categories: ["ai-ml", "other"],
      technologies: ["Unity3D", "C#", "Machine Learning", "CNN", "EMNIST", "AR"],
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&h=400&fit=crop",
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    },
    {
      id: 6,
      title: "Tank Stars",
      description: "Replica of the popular Tankstars mobile game built with libGDX and Java, implementing Object-Oriented Programming principles, fluid GUI, and comprehensive JUnit testing.",
      categories: ["other"],
      technologies: ["Java", "libGDX", "OOP", "JUnit", "GUI"],
      image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=600&h=400&fit=crop",
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    },
    {
      id: 7,
      title: "NewsNet",
      description: "Data-driven news aggregator providing users with preferred news articles in real-time, integrating multiple APIs and databases to fetch personalized content based on user preferences.",
      categories: ["other"],
      technologies: ["Python", "SQL", "APIs", "JSON", "Real-time Data"],
      image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=600&h=400&fit=crop",
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    }
  ];

  const categories = [
    { id: 'all', label: 'All Projects', icon: Sparkles },
    { id: 'web-app', label: 'Web Apps', icon: Code },
    { id: 'ai-ml', label: 'AI/ML', icon: Zap },
    { id: 'other', label: 'Other', icon: Rocket },
  ];

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.categories.includes(selectedCategory));

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 30 },
    visible: i => ({
      opacity: 1, 
      scale: 1, 
      y: 0, 
      transition: { 
        delay: i * 0.1, 
        type: "spring", 
        stiffness: 400, 
        damping: 20 
      }
    })
  };

  // Background matching homepage style
  const ProjectsBackground = () => {
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
                <pattern id="projectsGrid" width="60" height="60" patternUnits="userSpaceOnUse">
                  <path d="M 60 0 L 0 0 0 60" fill="none" stroke="currentColor" strokeWidth="1" className="text-cyan-600"/>
                  <circle cx="0" cy="0" r="1.5" fill="currentColor" className="text-cyan-500" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#projectsGrid)" />
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
              <pattern id="projectsGrid" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M 60 0 L 0 0 0 60" fill="none" stroke="currentColor" strokeWidth="1" className="text-cyan-600"/>
                <circle cx="0" cy="0" r="1.5" fill="currentColor" className="text-cyan-500" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#projectsGrid)" />
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

  return (
    <section
      id="projects"
      className="relative min-h-screen flex flex-col justify-center items-center px-2 md:px-0 py-20 bg-gradient-to-br from-gray-900 via-black to-gray-800"
    >
      {/* Background matching homepage */}
      <ProjectsBackground />
      
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
            PROJECTS
          </span>
        </h2>
        <p className="text-lg md:text-xl text-gray-300 font-medium">
          Crafting digital experiences that push boundaries.
        </p>
      </motion.div>

      {/* Category Filter */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className="flex flex-wrap justify-center gap-3 mb-12 relative z-20"
      >
        {categories.map((category) => {
          const IconComponent = category.icon;
          return (
            <motion.button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`group relative px-5 py-2.5 rounded-full font-medium transition-all duration-300 border backdrop-blur-sm ${
                selectedCategory === category.id
                  ? 'bg-cyan-600 text-white border-cyan-500 shadow-lg shadow-cyan-500/25'
                  : 'bg-gray-800/60 text-gray-300 border-gray-600/50 hover:border-cyan-500/50 hover:text-cyan-300 hover:bg-gray-700/60'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="flex items-center space-x-2">
                <IconComponent className="w-4 h-4" />
                <span className="text-sm">{category.label}</span>
              </div>
            </motion.button>
          );
        })}
      </motion.div>

      {/* Projects Grid */}
      <motion.div
        className="relative w-full max-w-6xl bg-gray-800/60 backdrop-blur-lg rounded-3xl p-6 md:p-8 shadow-xl border border-gray-700/50"
        initial={{ opacity: 0, y: 50, scale: 0.98 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <div className="absolute -inset-1 rounded-3xl bg-gradient-to-tr from-cyan-500/10 via-blue-500/8 to-cyan-400/10 blur-lg pointer-events-none" />
        
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              className="group relative bg-gray-900/60 backdrop-blur-sm rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 border border-gray-700/60"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={index}
              variants={cardVariants}
              whileHover={{ 
                scale: 1.02,
                boxShadow: "0 10px 25px rgba(6,182,212,0.15)"
              }}
            >
              {/* Featured Badge */}
              {project.featured && (
                <div className="absolute top-3 left-3 z-20 px-2.5 py-1 bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-xs font-semibold rounded-full shadow-sm">
                  FEATURED
                </div>
              )}

              {/* Project Image */}
              <div className="relative h-40 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                
                {/* Action Button */}
                <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                  <motion.a
                    href={project.liveUrl}
                    className="flex items-center justify-center w-8 h-8 bg-gray-800/90 backdrop-blur-sm rounded-full hover:bg-gray-700 transition-colors duration-200 shadow-lg"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ExternalLink className="w-4 h-4 text-cyan-400" />
                  </motion.a>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-5 relative z-10">
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                {/* Technologies */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.technologies.map((tech, techIndex) => {
                    // Define neon color variants
                    const neonColors = [
                      'bg-green-500/20 text-green-400 border-green-500/40 hover:bg-green-500/30 hover:text-green-300 hover:shadow-green-500/25',
                      'bg-yellow-500/20 text-yellow-400 border-yellow-500/40 hover:bg-yellow-500/30 hover:text-yellow-300 hover:shadow-yellow-500/25',
                      'bg-red-500/20 text-red-400 border-red-500/40 hover:bg-red-500/30 hover:text-red-300 hover:shadow-red-500/25',
                      'bg-cyan-500/20 text-cyan-400 border-cyan-500/40 hover:bg-cyan-500/30 hover:text-cyan-300 hover:shadow-cyan-500/25',
                      'bg-purple-500/20 text-purple-400 border-purple-500/40 hover:bg-purple-500/30 hover:text-purple-300 hover:shadow-purple-500/25',
                      'bg-orange-500/20 text-orange-400 border-orange-500/40 hover:bg-orange-500/30 hover:text-orange-300 hover:shadow-orange-500/25',
                    ];
                    
                    const colorClass = neonColors[techIndex % neonColors.length];
                    
                    return (
                      <motion.span
                        key={techIndex}
                        className={`px-2.5 py-1 text-xs rounded-full border transition-all duration-200 backdrop-blur-sm font-medium hover:shadow-lg ${colorClass}`}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {tech}
                      </motion.span>
                    );
                  })}
                </div>

                {/* Action Bar */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-700/50">
                  <div className="flex items-center">
                    <a
                      href={project.githubUrl}
                      className="flex items-center space-x-1.5 text-sm text-gray-400 hover:text-cyan-400 transition-colors duration-200 font-medium"
                    >
                      <Github className="w-3.5 h-3.5" />
                      <span>Code</span>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-8">
          <motion.button 
            className="group relative px-6 py-3 bg-cyan-600 text-white rounded-full font-medium text-sm overflow-hidden transition-all duration-300 hover:shadow-lg shadow-cyan-500/25 border border-cyan-500"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="relative z-10">Load More Projects</span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
          </motion.button>
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;