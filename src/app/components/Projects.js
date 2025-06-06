"use client";
import React, { useState } from 'react';
import { ExternalLink, Github, Code, Sparkles, Zap, Rocket, Star } from 'lucide-react';
import { motion } from 'framer-motion';

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Mock project data - replace with your actual projects
  const projects = [
    {
      id: 1,
      title: "Neural Network Visualizer",
      description: "Interactive deep learning visualization tool with real-time training animations",
      category: "machine-learning",
      technologies: ["React", "D3.js", "TensorFlow.js", "Python"],
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=600&h=400&fit=crop",
      liveUrl: "#",
      githubUrl: "#",
      featured: true
    },
    {
      id: 2,
      title: "Crypto Trading Dashboard",
      description: "Real-time cryptocurrency trading platform with advanced analytics",
      category: "web-app",
      technologies: ["Next.js", "TypeScript", "WebSocket", "Chart.js"],
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&h=400&fit=crop",
      liveUrl: "#",
      githubUrl: "#",
      featured: true
    },
    {
      id: 3,
      title: "AR Product Showcase",
      description: "Augmented reality product visualization using WebXR",
      category: "ar-vr",
      technologies: ["Three.js", "WebXR", "React", "GSAP"],
      image: "https://images.unsplash.com/photo-1592478411213-6153e4ebc696?w=600&h=400&fit=crop",
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    },
    {
      id: 4,
      title: "Smart Home IoT Hub",
      description: "Centralized control system for IoT devices with voice commands",
      category: "iot",
      technologies: ["Node.js", "MongoDB", "MQTT", "React Native"],
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop",
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    },
    {
      id: 5,
      title: "AI Code Assistant",
      description: "VS Code extension powered by GPT for intelligent code completion",
      category: "ai-tools",
      technologies: ["TypeScript", "OpenAI API", "VS Code API", "Node.js"],
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop",
      liveUrl: "#",
      githubUrl: "#",
      featured: true
    },
    {
      id: 6,
      title: "Blockchain Voting System",
      description: "Decentralized voting platform ensuring transparency and security",
      category: "blockchain",
      technologies: ["Solidity", "Web3.js", "React", "Ethereum"],
      image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=600&h=400&fit=crop",
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    }
  ];

  const categories = [
    { id: 'all', label: 'All Projects', icon: Sparkles },
    { id: 'web-app', label: 'Web Apps', icon: Code },
    { id: 'machine-learning', label: 'ML/AI', icon: Zap },
    { id: 'ar-vr', label: 'AR/VR', icon: Rocket },
    { id: 'blockchain', label: 'Blockchain', icon: Star }
  ];

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

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

  return (
    <section
      id="projects"
      className="relative min-h-screen flex flex-col justify-center items-center px-2 md:px-0 py-20 bg-white"
    >
      {/* Subtle Gradient Glow - matching Skills component */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-2/3 h-1/2 left-1/3 top-0 bg-gradient-to-br from-indigo-100 via-blue-100 to-transparent blur-3xl rounded-full opacity-60" />
        <div className="absolute w-1/2 h-1/2 right-0 bottom-0 bg-gradient-to-tl from-purple-100 via-fuchsia-100 to-transparent blur-2xl rounded-full opacity-60" />
      </div>

      {/* Header - matching Skills component style */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true }}
        className="mb-10 flex flex-col items-center relative z-20"
      >
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-2 select-none">
          <span className="bg-gradient-to-r from-indigo-600 via-purple-500 to-fuchsia-500 bg-clip-text text-transparent animate-gradient-x drop-shadow-[0_1px_1.5px_rgba(80,0,150,0.10)]">
            PROJECTS
          </span>
        </h2>
        <p className="text-lg md:text-xl text-gray-500 font-medium">
          Crafting digital experiences that push boundaries.
        </p>
      </motion.div>

      {/* Category Filter - refined design */}
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
                  ? 'bg-gray-900 text-white border-gray-900 shadow-lg'
                  : 'bg-white/80 text-gray-600 border-gray-200 hover:border-gray-300 hover:text-gray-800 hover:bg-white/90'
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

      {/* Projects Grid - Glass Card Container */}
      <motion.div
        className="relative w-full max-w-6xl bg-white/90 rounded-3xl p-6 md:p-8 shadow-xl border border-gray-200 backdrop-blur-lg"
        initial={{ opacity: 0, y: 50, scale: 0.98 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <div className="absolute -inset-1 rounded-3xl bg-gradient-to-tr from-indigo-300/20 via-fuchsia-300/15 to-purple-200/20 blur-lg pointer-events-none" />
        
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              className="group relative bg-white/60 rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200/50 backdrop-blur-sm"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={index}
              variants={cardVariants}
              whileHover={{ 
                scale: 1.02,
                boxShadow: "0 10px 25px rgba(0,0,0,0.08)"
              }}
            >
              {/* Featured Badge */}
              {project.featured && (
                <div className="absolute top-3 left-3 z-20 px-2.5 py-1 bg-gradient-to-r from-indigo-500 to-purple-500 text-white text-xs font-semibold rounded-full shadow-sm">
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
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
                
                {/* Action Button - Only External Link */}
                <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                  <motion.a
                    href={project.liveUrl}
                    className="flex items-center justify-center w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition-colors duration-200 shadow-lg"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ExternalLink className="w-4 h-4 text-gray-700" />
                  </motion.a>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-5 relative z-10">
                <h3 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-indigo-600 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed line-clamp-2">
                  {project.description}
                </p>
                
                {/* Technologies - Show All */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2.5 py-1 bg-gray-100/80 text-gray-600 text-xs rounded-full border border-gray-200/60 hover:bg-indigo-50 hover:border-indigo-200 hover:text-indigo-600 transition-colors duration-200 backdrop-blur-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Bar - Only GitHub Link */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-200/60">
                  <div className="flex items-center">
                    <a
                      href={project.githubUrl}
                      className="flex items-center space-x-1.5 text-sm text-gray-500 hover:text-gray-700 transition-colors duration-200 font-medium"
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
            className="group relative px-6 py-3 bg-gray-900 text-white rounded-full font-medium text-sm overflow-hidden transition-all duration-300 hover:shadow-lg border border-gray-900"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="relative z-10">Load More Projects</span>
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
          </motion.button>
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;