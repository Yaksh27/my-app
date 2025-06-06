"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Mail, Phone, Github, Linkedin, Send, ArrowUpRight, Check } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [focusedField, setFocusedField] = useState(null);

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
      text: "Connect with me on LinkedIn",
      href: "https://linkedin.com/in/yaksh",
      icon: Linkedin,
      color: "from-blue-500 to-blue-600"
    },
    {
      text: "Follow my work on GitHub", 
      href: "https://github.com/yaksh",
      icon: Github,
      color: "from-gray-700 to-gray-900"
    },
    {
      text: "Drop me an email",
      href: "mailto:yaksh@example.com",
      icon: Mail,
      color: "from-purple-500 to-purple-600"
    },
    {
      text: "Give me a call",
      href: "tel:+15551234567",
      icon: Phone,
      color: "from-green-500 to-green-600"
    }
  ];

  return (
    <section className="relative min-h-screen bg-white">
      {/* Subtle background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-1/3 h-1/3 right-0 top-0 bg-gradient-to-bl from-indigo-50 to-transparent rounded-full blur-3xl opacity-60" />
        <div className="absolute w-1/4 h-1/4 left-0 bottom-0 bg-gradient-to-tr from-purple-50 to-transparent rounded-full blur-2xl opacity-60" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-24">
        {/* Header Section - Keep Original */}
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
                <div className="w-8 h-8 text-indigo-600/40">✦</div>
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
                <span className="text-black font-bold">©</span>
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
          {/* Modern Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:col-span-3"
          >
            <div className="relative">
              {/* Glass morphism background */}
              <div className="absolute inset-0 bg-white/60 backdrop-blur-lg rounded-3xl border border-white/20 shadow-xl"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-white/80 via-white/40 to-white/20 rounded-3xl"></div>
              
              <div className="relative z-10 p-8 md:p-12">
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">Send me a message</h2>
                  <p className="text-gray-600">I'd love to hear from you. Drop me a line below.</p>
                </div>
                
                <div className="space-y-6">
                  {/* Name Field */}
                  <div className="group">
                    <div className="relative">
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('name')}
                        onBlur={() => setFocusedField(null)}
                        placeholder=" "
                        className="peer w-full px-4 py-4 bg-white/80 backdrop-blur-sm border-2 border-gray-200/60 rounded-2xl focus:outline-none focus:border-indigo-500 transition-all duration-300 text-gray-900 placeholder-transparent"
                      />
                      <label className="absolute left-4 -top-2.5 bg-white px-2 text-sm font-medium text-gray-600 transition-all duration-300 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-4 peer-placeholder-shown:bg-transparent peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-indigo-600 peer-focus:bg-white">
                        Full Name
                      </label>
                    </div>
                  </div>

                  {/* Email Field */}
                  <div className="group">
                    <div className="relative">
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('email')}
                        onBlur={() => setFocusedField(null)}
                        placeholder=" "
                        className="peer w-full px-4 py-4 bg-white/80 backdrop-blur-sm border-2 border-gray-200/60 rounded-2xl focus:outline-none focus:border-indigo-500 transition-all duration-300 text-gray-900 placeholder-transparent"
                      />
                      <label className="absolute left-4 -top-2.5 bg-white px-2 text-sm font-medium text-gray-600 transition-all duration-300 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-4 peer-placeholder-shown:bg-transparent peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-indigo-600 peer-focus:bg-white">
                        Email Address
                      </label>
                    </div>
                  </div>

                  {/* Message Field */}
                  <div className="group">
                    <div className="relative">
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('message')}
                        onBlur={() => setFocusedField(null)}
                        placeholder=" "
                        rows={5}
                        className="peer w-full px-4 py-4 bg-white/80 backdrop-blur-sm border-2 border-gray-200/60 rounded-2xl focus:outline-none focus:border-indigo-500 transition-all duration-300 resize-none text-gray-900 placeholder-transparent"
                      />
                      <label className="absolute left-4 -top-2.5 bg-white px-2 text-sm font-medium text-gray-600 transition-all duration-300 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-4 peer-placeholder-shown:bg-transparent peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-indigo-600 peer-focus:bg-white">
                        Your Message
                      </label>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <motion.button
                    onClick={handleSubmit}
                    disabled={isSubmitting || !formData.name || !formData.email || !formData.message}
                    className="relative group w-full bg-gray-900 text-white px-8 py-5 text-lg font-semibold rounded-2xl overflow-hidden transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed mt-8"
                    whileHover={{ scale: isSubmitting || !formData.name || !formData.email || !formData.message ? 1 : 1.01 }}
                    whileTap={{ scale: isSubmitting || !formData.name || !formData.email || !formData.message ? 1 : 0.99 }}
                  >
                    <motion.div 
                      className="absolute inset-0 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
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
                        className="flex items-center gap-3 text-green-600 bg-green-50/80 backdrop-blur-sm p-4 rounded-2xl border border-green-200/60"
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
            </div>
          </motion.div>

          {/* Modern Quick Links */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="lg:col-span-2"
          >
            <div className="space-y-6">
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Let's connect</h3>
                <p className="text-gray-600">Choose your preferred way to reach out</p>
              </div>
              
              <div className="space-y-4">
                {contactLinks.map((link, index) => (
                  <motion.a
                    key={index}
                    href={link.href}
                    target={link.href.startsWith('http') ? '_blank' : undefined}
                    rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="group relative block"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 + index * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-white/80 to-white/40 backdrop-blur-lg border border-white/20 p-5 transition-all duration-300 group-hover:shadow-lg">
                      {/* Gradient overlay on hover */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${link.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                      
                      <div className="relative flex items-center gap-4">
                        {/* Icon */}
                        <div className={`w-12 h-12 bg-gradient-to-br ${link.color} rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                          <link.icon className="w-6 h-6 text-white" />
                        </div>

                        {/* Text */}
                        <div className="flex-1">
                          <span className="text-gray-900 font-medium group-hover:text-gray-700 transition-colors duration-300">
                            {link.text}
                          </span>
                        </div>

                        {/* Arrow */}
                        <ArrowUpRight className="w-5 h-5 text-gray-400 group-hover:text-gray-600 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
                      </div>
                    </div>
                  </motion.a>
                ))}
              </div>

              {/* Status Card - Modern */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 }}
                className="mt-8 relative overflow-hidden rounded-2xl bg-gradient-to-br from-indigo-50/80 to-purple-50/80 backdrop-blur-lg border border-indigo-100/50 p-6"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-purple-500/5"></div>
                <div className="relative flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Available for work</h4>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      Currently accepting new projects and collaborations. I typically respond within 24 hours.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}