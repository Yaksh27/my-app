"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Mail, Phone, Github, Linkedin, Send, ArrowUpRight, Check, AlertCircle } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [focusedField, setFocusedField] = useState(null);

  // Email validation function
  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Form validation
  const validateForm = () => {
    if (!formData.name.trim()) {
      setError('Please enter your name');
      return false;
    }
    if (!formData.email.trim()) {
      setError('Please enter your email');
      return false;
    }
    if (!isValidEmail(formData.email)) {
      setError('Please enter a valid email address');
      return false;
    }
    if (!formData.message.trim()) {
      setError('Please enter your message');
      return false;
    }
    if (formData.message.trim().length < 10) {
      setError('Message should be at least 10 characters long');
      return false;
    }
    return true;
  };

  // Handle form submission using EmailJS
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // Using Formspree as primary method
      const formspreeResponse = await fetch('https://formspree.io/f/xeokkajk', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
        })
      });

      if (formspreeResponse.ok) {
        setSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setSubmitted(false), 5000);
      } else {
        throw new Error('Failed to send email via Formspree');
      }
    } catch (formspreeError) {
      console.log('Formspree failed, using mailto fallback:', formspreeError);
      // Mailto fallback (Always works but opens email client)
      const subject = encodeURIComponent(`Contact Form Message from ${formData.name}`);
      const body = encodeURIComponent(
        `Name: ${formData.name}\n` +
        `Email: ${formData.email}\n\n` +
        `Message:\n${formData.message}`
      );
      window.location.href = `mailto:yaksh2400@gmail.com?subject=${subject}&body=${body}`;
      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setSubmitted(false), 5000);
    }
    setIsSubmitting(false);
  };

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
    // Clear error when user starts typing
    if (error) {
      setError('');
    }
  };

  const contactLinks = [
    {
      text: "Connect with me on LinkedIn",
      href: "https://www.linkedin.com/in/yaksh-patel-iiitd/",
      icon: Linkedin,
      color: "from-blue-500 to-blue-600"
    },
    {
      text: "Follow my work on GitHub", 
      href: "https://github.com/Yaksh27",
      icon: Github,
      color: "from-gray-700 to-gray-900"
    },
    {
      text: "Drop me an email",
      href: "mailto:yaksh2400@gmail.com",
      icon: Mail,
      color: "from-cyan-500 to-cyan-600"
    },
    {
      text: "Give me a call",
      href: "tel:+917779020367",
      icon: Phone,
      color: "from-green-500 to-green-600"
    }
  ];

  // Background matching homepage style
  const ContactBackground = () => {
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
                <pattern id="contactGrid" width="60" height="60" patternUnits="userSpaceOnUse">
                  <path d="M 60 0 L 0 0 0 60" fill="none" stroke="currentColor" strokeWidth="1" className="text-cyan-600"/>
                  <circle cx="0" cy="0" r="1.5" fill="currentColor" className="text-cyan-500" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#contactGrid)" />
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
              <pattern id="contactGrid" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M 60 0 L 0 0 0 60" fill="none" stroke="currentColor" strokeWidth="1" className="text-cyan-600"/>
                <circle cx="0" cy="0" r="1.5" fill="currentColor" className="text-cyan-500" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#contactGrid)" />
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
    <section className="relative min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 overflow-hidden">
      {/* Background matching homepage */}
      <ContactBackground />
      
      {/* Dark theme floating orbs - contained within viewport */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute w-[400px] h-[400px] rounded-full opacity-[0.08]"
          style={{
            background: 'radial-gradient(circle, #06b6d4 0%, transparent 70%)',
            top: '-5%',
            right: '-5%',
          }}
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 20, 0],
            y: [0, -15, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        
        <motion.div
          className="absolute w-[300px] h-[300px] rounded-full opacity-[0.06]"
          style={{
            background: 'radial-gradient(circle, #0891b2 0%, transparent 70%)',
            bottom: '-5%',
            left: '-5%',
          }}
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -15, 0],
            y: [0, 15, 0],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 10,
          }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-24">
        {/* Header Section */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-8"
          >
            <p className="text-sm uppercase tracking-[0.2em] text-gray-400 mb-6 font-medium">
              READY TO COLLABORATE?
            </p>
            <div className="relative inline-block">
              <h1 
                className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tight leading-[0.85] text-white"
                style={{ 
                  filter: 'drop-shadow(0 0 8px rgba(6, 182, 212, 0.2))',
                }}
              >
               LET&apos;S<span className="text-cyan-400">*</span>BUILD
              </h1>
              <motion.div
                className="absolute -right-12 top-0"
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="w-8 h-8 text-cyan-400/40">✦</div>
              </motion.div>
            </div>
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tight leading-[0.85] text-white mb-2">
              SOMETHING
            </h1>
            <div className="relative inline-block">
              <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tight leading-[0.85] text-white">
                GREAT!
              </h1>
              <motion.div
                className="absolute -right-8 -top-4 w-16 h-16 border-4 border-white rounded-full flex items-center justify-center"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <span className="text-cyan-400 font-bold">©</span>
              </motion.div>
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed"
          >
           Have an idea? Let&apos;s bring it to life. I&apos;m always excited to work on new projects and collaborate with fellow creators.
          </motion.p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 items-start max-w-6xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:col-span-3"
          >
            <div className="relative">
              {/* Glass morphism background */}
              <div className="absolute inset-0 bg-gray-800/60 backdrop-blur-lg rounded-3xl border border-gray-700/40 shadow-xl"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-gray-800/80 via-gray-900/40 to-gray-800/20 rounded-3xl"></div>
              
              <div className="relative z-10 p-8 md:p-12">
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-white mb-2">Send me a message</h2>
                 <p className="text-gray-400">I&apos;d love to hear from you. Drop me a line below.</p>
                </div>
                
                <form onSubmit={handleSubmit} autoComplete="off">
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
                          className="peer w-full px-4 py-4 bg-gray-900/80 backdrop-blur-sm border-2 border-gray-600/60 rounded-2xl focus:outline-none focus:border-cyan-500 transition-all duration-300 text-white placeholder-transparent"
                          required
                        />
                        <label className="absolute left-4 -top-2.5 bg-gray-900 px-2 text-sm font-medium text-gray-400 transition-all duration-300 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-4 peer-placeholder-shown:bg-transparent peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-cyan-400 peer-focus:bg-gray-900">
                          Full Name *
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
                          className="peer w-full px-4 py-4 bg-gray-900/80 backdrop-blur-sm border-2 border-gray-600/60 rounded-2xl focus:outline-none focus:border-cyan-500 transition-all duration-300 text-white placeholder-transparent"
                          required
                        />
                        <label className="absolute left-4 -top-2.5 bg-gray-900 px-2 text-sm font-medium text-gray-400 transition-all duration-300 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-4 peer-placeholder-shown:bg-transparent peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-cyan-400 peer-focus:bg-gray-900">
                          Email Address *
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
                          className="peer w-full px-4 py-4 bg-gray-900/80 backdrop-blur-sm border-2 border-gray-600/60 rounded-2xl focus:outline-none focus:border-cyan-500 transition-all duration-300 resize-none text-white placeholder-transparent"
                          required
                          minLength={10}
                        />
                        <label className="absolute left-4 -top-2.5 bg-gray-900 px-2 text-sm font-medium text-gray-400 transition-all duration-300 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-4 peer-placeholder-shown:bg-transparent peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-cyan-400 peer-focus:bg-gray-900">
                          Your Message * (min. 10 characters)
                        </label>
                      </div>
                    </div>

                    {/* Error Message */}
                    <AnimatePresence>
                      {error && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          className="flex items-center gap-3 text-red-400 bg-red-500/10 backdrop-blur-sm p-4 rounded-2xl border border-red-500/30"
                        >
                          <AlertCircle className="w-5 h-5 flex-shrink-0" />
                          <span className="text-sm">{error}</span>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* Submit Button */}
                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      className="relative group w-full bg-cyan-600 text-white px-8 py-5 text-lg font-semibold rounded-2xl overflow-hidden transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed mt-8 hover:shadow-lg hover:shadow-cyan-500/25"
                      whileHover={{ scale: isSubmitting ? 1 : 1.01 }}
                      whileTap={{ scale: isSubmitting ? 1 : 0.99 }}
                    >
                      <motion.div 
                        className="absolute inset-0 bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
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
                          className="flex items-center gap-3 text-green-400 bg-green-500/10 backdrop-blur-sm p-4 rounded-2xl border border-green-500/30"
                        >
                          <div className="flex-shrink-0 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                            <Check className="w-5 h-5 text-white" />
                          </div>
                          <div>
                            <span className="font-semibold">Message sent successfully!</span>
                            <p className="text-sm text-green-400/80 mt-1">I&apos;ll get back to you within 24 hours.</p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </form>
              </div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="lg:col-span-2"
          >
            <div className="space-y-6">
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">Let&apos;s connect.</h3>
                <p className="text-gray-400">Choose your preferred way to reach out:</p>
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
                    <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-800/80 to-gray-900/40 backdrop-blur-lg border border-gray-700/20 p-5 transition-all duration-300 group-hover:shadow-lg">
                      {/* Gradient overlay on hover */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${link.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                      
                      <div className="relative flex items-center gap-4">
                        {/* Icon */}
                        <div className={`w-12 h-12 bg-gradient-to-br ${link.color} rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                          <link.icon className="w-6 h-6 text-white" />
                        </div>

                        {/* Text */}
                        <div className="flex-1">
                          <span className="text-white font-medium group-hover:text-gray-300 transition-colors duration-300">
                            {link.text}
                          </span>
                        </div>

                        {/* Arrow */}
                        <ArrowUpRight className="w-5 h-5 text-gray-400 group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
                      </div>
                    </div>
                  </motion.a>
                ))}
              </div>

              {/* Status Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 }}
                className="mt-8 relative overflow-hidden rounded-2xl bg-gradient-to-br from-cyan-500/10 to-blue-500/10 backdrop-blur-lg border border-cyan-500/20 p-6"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5"></div>
                <div className="relative flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-2">Available for work</h4>
                    <p className="text-gray-300 text-sm leading-relaxed">
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