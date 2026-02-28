import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Instagram, Facebook, Twitter,Phone, Mail, ArrowUp } from 'lucide-react'
import Logo from '../assets/bgt-logo-new.png'
import WhatsappLogo from '../assets/whatsapp_logo.png'

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
}

const Footer = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <motion.footer
      ref={ref}
      id="footer"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8 }}
      className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white py-16 overflow-hidden"
    >
      {/* Floating background shapes */}
      <div className="absolute inset-0 opacity-20">
        <motion.div
          className="absolute top-20 left-10 w-40 h-40 bg-blue-500/20 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-32 h-32 bg-purple-500/20 rounded-full blur-3xl"
          animate={{
            x: [0, -80, 0],
            y: [0, 40, 0],
            scale: [1, 0.9, 1]
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 w-24 h-24 bg-pink-500/20 rounded-full blur-3xl"
          animate={{
            x: [-50, 50, -50],
            y: [30, -30, 30],
            scale: [0.8, 1.2, 0.8]
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4
          }}
        />
      </div>

      {/* Top gradient border */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Logo + Description */}
          <motion.div variants={itemVariants} className="lg:col-span-2">
            <img src={Logo} alt="Believe Global Trade Logo" className="h-16 mb-6" />
            <p className="text-gray-300 leading-relaxed text-sm">
              Believe's vision is "to create the world's leading trade company with highly selling, interactive and insights-filling demands."
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => scrollToSection('hero')}
                  className="text-gray-300 hover:text-white transition-all duration-300 relative group"
                >
                  Home
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300 group-hover:w-full"></span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('about')}
                  className="text-gray-300 hover:text-white transition-all duration-300 relative group"
                >
                  About
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300 group-hover:w-full"></span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('feedback')}
                  className="text-gray-300 hover:text-white transition-all duration-300 relative group"
                >
                  Feedback
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300 group-hover:w-full"></span>
                </button>
              </li>
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-semibold mb-6">Services</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-all duration-300 relative group"
                >
                  Import Services
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-all duration-300 relative group"
                >
                  Export Solutions
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-all duration-300 relative group"
                >
                  Logistic Support
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-semibold mb-6">Contact Us</h3>
            <div className="space-y-3 text-gray-300 text-sm">
              <p className="flex items-center">
                <span className="mr-2"><Phone /></span>
                +91 74055 62532
              </p>
              <p className="flex items-center">
                <span className="mr-2"><Mail /></span>
                believeglobaltrade@gmail.com
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Newsletter Subscription */}
        <motion.div
          variants={itemVariants}
          className="mt-12 pt-8 border-t border-gray-700"
        >
          <div className="max-w-md mx-auto text-center">
            <h3 className="text-lg font-semibold mb-4">Stay Updated</h3>
            <div className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-gray-800/50 backdrop-blur-sm border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-white placeholder-gray-400"
              />
              <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-lg transition-all duration-300 font-medium shadow-lg hover:shadow-xl">
                Subscribe
              </button>
            </div>
          </div>
        </motion.div>

        {/* Social Icons and Copyright */}
        <motion.div
          variants={itemVariants}
          className="mt-8 pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center"
        >
          <div className="flex space-x-6 mb-4 md:mb-0">
            <motion.a
              href="#"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              className="text-gray-300 hover:text-white transition-colors duration-300"
            >
              <Instagram size={24} />
            </motion.a>
            <motion.a
              href="#"
              whileHover={{ scale: 1.2, rotate: -5 }}
              whileTap={{ scale: 0.9 }}
              className="text-gray-300 hover:text-white transition-colors duration-300"
            >
              <Facebook size={24} />
            </motion.a>
            <motion.a
              href="#"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              className="text-gray-300 hover:text-white transition-colors duration-300"
            >
              <Twitter size={24} />
            </motion.a>
          </div>
          <p className="text-gray-400 text-sm text-center md:text-right">
            &copy; {new Date().getFullYear()} Dexton Technology. All rights reserved.
          </p>
        </motion.div>
      </div>

      {/* Whatsapp Button */}
      <motion.button
        onClick={() => window.open('https://wa.me/7405562532', '_blank')}
        className="fixed bottom-4 right-4 p-2 bg-white/70 hover:bg-white rounded-full shadow-lg hover:scale-110 hover:shadow-xl transition-all duration-300 z-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <img src={WhatsappLogo} alt="Whatsapp Logo" className="w-10 h-10 md:w-12 md:h-12"/>
      </motion.button>
    </motion.footer>
  )
}

export default Footer
