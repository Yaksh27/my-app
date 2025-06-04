"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Mail, Phone, Github, Linkedin, Send, User, MessageSquare } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
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
      label: "Connect with me on LinkedIn",
      href: "https://linkedin.com/in/yaksh",
      icon: Linkedin,
      color: "#0077B5",
      hoverColor: "hover:text-[#0077B5] hover:border-[#0077B5]"
    },
    {
      label: "Check out my GitHub",
      href: "https://github.com/yaksh",
      icon: Github,
      color: "#333",
      hoverColor: "hover:text-gray-900 hover:border-gray-900"
    },
    {
      label: "yaksh@example.com",
      href: "mailto:yaksh@example.com",
      icon: Mail,
      color: "#EA4335",
      hoverColor: "hover:text-red-500 hover:border-red-500"
    },
    {
      label: "+1 (555) 123-4567",
      href: "tel:+15551234567",
      icon: Phone,
      color: "#10B981",
      hoverColor: "hover:text-emerald-500 hover:border-emerald-500"
    }
  ];

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute w-[800px] h-[800px] bg-gradient-to-r from-indigo-100/30 to-purple-100/20 rounded-full blur-3xl"
          animate={{
            x: [0, 120, -80, 0],
            y: [0, -100, 60, 0],
            scale: [1, 1.3, 0.8, 1],
          }}
          transition={{
            duration: 45,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{ top: "-20%", right: "-25%" }}
        />
        <motion.div
          className="absolute w-[600px] h-[600px] bg-gradient-to-tr from-blue-100/25 to-cyan-100/15 rounded-full blur-3xl"
          animate={{
            x: [0, -100, 80, 0],
            y: [0, 80, -60, 0],
            scale: [1, 1.2, 0.9, 1],
          }}
          transition={{
            duration: 50,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 10,
          }}
          style={{ bottom: "-25%", left: "-20%" }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        {/* Header Section */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-8"
          >
            <p className="text-sm uppercase tracking-wider text-gray-500 mb-4 font-semibold">
              Ready to collaborate?
            </p>
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tight leading-[0.9] text-gray-900">
              LET'S<span className="text-indigo-600">*</span>BUILD
            </h1>
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tight leading-[0.9] text-gray-900 mb-6">
              SOMETHING
            </h1>
            <div className="relative inline-block">
              <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tight leading-[0.9] text-gray-900">
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-gray-200/60">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Send me a message</h2>
              
              <div className="space-y-6">
                <div className="relative">
                  <User className="absolute left-4 top-4 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all duration-200 bg-white/50"
                  />
                </div>

                <div className="relative">
                  <Mail className="absolute left-4 top-4 w-5 h-5 text-gray-400" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                    className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all duration-200 bg-white/50"
                  />
                </div>

                <div className="relative">
                  <MessageSquare className="absolute left-4 top-4 w-5 h-5 text-gray-400" />
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project..."
                    rows={5}
                    className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all duration-200 resize-none bg-white/50"
                  />
                </div>

                <motion.button
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className="w-full bg-gray-900 text-white py-4 px-6 rounded-xl font-semibold flex items-center justify-center gap-3 hover:bg-gray-800 transition-all duration-200 disabled:opacity-50"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {isSubmitting ? (
                    <motion.div
                      className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    />
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Send Message
                    </>
                  )}
                </motion.button>
              </div>

              <AnimatePresence>
                {submitted && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="mt-4 p-4 bg-green-50 text-green-800 rounded-xl border border-green-200"
                  >
                    ✅ Message sent! I'll get back to you soon.
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>

          {/* Contact Links */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Let's connect</h2>
            
            {contactLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className={`group flex items-center gap-4 p-6 bg-white/60 backdrop-blur-sm rounded-2xl border border-gray-200/60 hover:bg-white/80 transition-all duration-300 ${link.hoverColor}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + index * 0.1 }}
                whileHover={{ scale: 1.02, y: -2 }}
              >
                <div className="flex-shrink-0 w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center group-hover:bg-gray-50 transition-colors duration-300">
                  <link.icon className="w-6 h-6 text-gray-600 group-hover:scale-110 transition-all duration-300" />
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-gray-900 group-hover:scale-105 transition-transform duration-200">
                    {link.label}
                  </p>
                </div>
                <div className="flex-shrink-0">
                  <motion.div
                    className="w-8 h-8 flex items-center justify-center"
                    initial={{ x: 0 }}
                    whileHover={{ x: 4 }}
                  >
                    <span className="text-gray-400 group-hover:text-gray-600">→</span>
                  </motion.div>
                </div>
              </motion.a>
            ))}

            {/* Additional Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
              className="mt-12 p-6 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl border border-indigo-100"
            >
              <h3 className="font-bold text-gray-900 mb-3">Quick Response</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                I typically respond within 24 hours. For urgent inquiries, feel free to reach out via phone or LinkedIn.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent" />
    </section>
  );
}