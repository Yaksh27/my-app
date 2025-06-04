"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Mail, Phone, Github, Linkedin, Send, ArrowUpRight, Check, Sparkles } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [focusedField, setFocusedField] = useState(null);
  const [hoveredField, setHoveredField] = useState(null);

  const handleSubmit = async () => {
    if (!formData.name || !formData.email || !formData.message) {
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
    
    // Reset success message after 3 seconds
    setTimeout(() => setSubmitted(false), 3000);
  };

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactLinks = [
    {
      label: "LinkedIn",
      href: "https://linkedin.com/in/yaksh",
      icon: Linkedin,
      color: "from-blue-500 to-blue-600"
    },
    {
      label: "GitHub", 
      href: "https://github.com/yaksh",
      icon: Github,
      color: "from-gray-700 to-gray-900"
    },
    {
      label: "Email",
      href: "mailto:yaksh@example.com",
      icon: Mail,
      color: "from-purple-500 to-purple-600"
    },
    {
      label: "Phone",
      href: "tel:+15551234567",
      icon: Phone,
      color: "from-green-500 to-green-600"
    }
  ];

  return (
    <section className="relative min-h-screen bg-white overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute w-[600px] h-[600px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(99, 102, 241, 0.05) 0%, transparent 70%)",
            top: "-20%",
            right: "-10%",
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute w-[400px] h-[400px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(168, 85, 247, 0.05) 0%, transparent 70%)",
            bottom: "-10%",
            left: "-5%",
          }}
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24">
        {/* Header Section */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-8"
          >
            <p className="text-sm uppercase tracking-[0.2em] text-gray-500 mb-6 font-medium">
              READY TO COLLABORATE?
            </p>
            <div className="relative inline-block">
              <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tight leading-[0.85] text-gray-900">
                LET'S<span className="text-indigo-600">*</span>BUILD
              </h1>
              <motion.div
                className="absolute -right-12 top-0"
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <Sparkles className="w-8 h-8 text-indigo-600/40" />
              </motion.div>
            </div>
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tight leading-[0.85] text-gray-900 mb-2">
              SOMETHING
            </h1>
            <div className="relative inline-block">
              <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tight leading-[0.85] text-gray-900">
                GREAT!
              </h1>
              <motion.div
                className="absolute -right-8 -top-4 w-16 h-16 border-4 border-gray-900 rounded-full flex items-center justify-center"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <span className="text-sm font-bold">©</span>
              </motion.div>
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed"
          >
            Have an idea? Let's bring it to life. I'm always excited to work on new projects and collaborate with fellow creators.
          </motion.p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 items-start max-w-6xl mx-auto">
          {/* Contact Form - Wider column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:col-span-3"
          >
            <div className="bg-gray-50/50 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-gray-100/50 shadow-sm hover:shadow-lg transition-all duration-500">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Send me a message</h2>
              <p className="text-gray-500 mb-8">I'd love to hear from you. Drop me a line below.</p>
              
              <div className="space-y-8">
                {/* Name Field */}
                <div 
                  className="relative"
                  onMouseEnter={() => setHoveredField('name')}
                  onMouseLeave={() => setHoveredField(null)}
                >
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Name
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('name')}
                      onBlur={() => setFocusedField(null)}
                      placeholder="John Doe"
                      className="w-full px-4 py-4 bg-white border border-gray-200 rounded-xl focus:outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 transition-all duration-300 text-gray-900 placeholder-gray-400"
                    />
                    <motion.div
                      className="absolute inset-0 rounded-xl pointer-events-none"
                      style={{
                        background: "linear-gradient(90deg, #6366f1 0%, #8b5cf6 100%)",
                        opacity: 0,
                        zIndex: -1,
                      }}
                      animate={{
                        opacity: focusedField === 'name' ? 0.05 : hoveredField === 'name' ? 0.02 : 0,
                      }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>
                </div>

                {/* Email Field */}
                <div 
                  className="relative"
                  onMouseEnter={() => setHoveredField('email')}
                  onMouseLeave={() => setHoveredField(null)}
                >
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('email')}
                      onBlur={() => setFocusedField(null)}
                      placeholder="john@example.com"
                      className="w-full px-4 py-4 bg-white border border-gray-200 rounded-xl focus:outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 transition-all duration-300 text-gray-900 placeholder-gray-400"
                    />
                    <motion.div
                      className="absolute inset-0 rounded-xl pointer-events-none"
                      style={{
                        background: "linear-gradient(90deg, #6366f1 0%, #8b5cf6 100%)",
                        opacity: 0,
                        zIndex: -1,
                      }}
                      animate={{
                        opacity: focusedField === 'email' ? 0.05 : hoveredField === 'email' ? 0.02 : 0,
                      }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>
                </div>

                {/* Message Field */}
                <div 
                  className="relative"
                  onMouseEnter={() => setHoveredField('message')}
                  onMouseLeave={() => setHoveredField(null)}
                >
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <div className="relative">
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('message')}
                      onBlur={() => setFocusedField(null)}
                      placeholder="Tell me about your project, ideas, or just say hello..."
                      rows={5}
                      className="w-full px-4 py-4 bg-white border border-gray-200 rounded-xl focus:outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 transition-all duration-300 resize-none text-gray-900 placeholder-gray-400"
                    />
                    <motion.div
                      className="absolute inset-0 rounded-xl pointer-events-none"
                      style={{
                        background: "linear-gradient(90deg, #6366f1 0%, #8b5cf6 100%)",
                        opacity: 0,
                        zIndex: -1,
                      }}
                      animate={{
                        opacity: focusedField === 'message' ? 0.05 : hoveredField === 'message' ? 0.02 : 0,
                      }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <motion.button
                  onClick={handleSubmit}
                  disabled={isSubmitting || !formData.name || !formData.email || !formData.message}
                  className="relative group w-full bg-gray-900 text-white px-8 py-5 text-lg font-semibold rounded-xl overflow-hidden transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  whileHover={{ scale: isSubmitting || !formData.name || !formData.email || !formData.message ? 1 : 1.01 }}
                  whileTap={{ scale: isSubmitting || !formData.name || !formData.email || !formData.message ? 1 : 0.99 }}
                >
                  {/* Animated gradient background */}
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    animate={{
                      backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    style={{
                      backgroundSize: "200% 100%",
                    }}
                  />
                  
                  <div className="relative flex items-center justify-center gap-3">
                    {isSubmitting ? (
                      <>
                        <motion.div
                          className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        />
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                      </>
                    )}
                  </div>
                </motion.button>

                {/* Success Message */}
                <AnimatePresence>
                  {submitted && (
                    <motion.div
                      initial={{ opacity: 0, y: 20, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -20, scale: 0.95 }}
                      className="flex items-center gap-3 text-green-600 bg-green-50 p-4 rounded-xl border border-green-200"
                    >
                      <div className="flex-shrink-0 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                        <Check className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <span className="font-semibold">Message sent successfully!</span>
                        <p className="text-sm text-green-600/80 mt-1">I'll get back to you within 24 hours.</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>

          {/* Contact Links - Narrower column */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="lg:col-span-2 space-y-4"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Quick Links</h2>
            
            <div className="space-y-3">
              {contactLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="group relative flex items-center gap-4 p-4 bg-gray-50/50 hover:bg-white rounded-2xl border border-gray-100/50 hover:border-gray-200 transition-all duration-300 hover:shadow-md"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                  whileHover={{ x: 4 }}
                >
                  {/* Icon with dynamic gradient */}
                  <div className="relative">
                    <div className={`w-12 h-12 bg-gradient-to-br ${link.color} rounded-xl flex items-center justify-center shadow-sm group-hover:shadow-md transition-all duration-300 group-hover:scale-110`}>
                      <link.icon className="w-5 h-5 text-white" />
                    </div>
                  </div>

                  <div className="flex-1">
                    <span className="text-base font-medium text-gray-900">
                      {link.label}
                    </span>
                  </div>

                  <ArrowUpRight className="w-4 h-4 text-gray-400 group-hover:text-gray-600 transition-all duration-300 opacity-0 group-hover:opacity-100" />
                </motion.a>
              ))}
            </div>

            {/* Response Time Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
              className="mt-8 p-6 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl border border-indigo-100/50"
            >
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 animate-pulse" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Available for work</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    I typically respond within 24 hours. Currently accepting new projects and collaborations.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}