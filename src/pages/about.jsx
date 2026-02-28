import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { 
  Shield, 
  Award, 
  Globe, 
  Truck, 
  Phone,
  Mail,
  MapPin,
  CheckCircle,
  ArrowRight
} from "lucide-react";
import Logo from '../assets/bgt-logo-new.png'
import AboutBackgroundPic from '../assets/bgt-background.jpg'

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

export default function AboutUs() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const values = [
    {
      icon: Shield,
      title: "Trust & Reliability",
      description: "Building lasting partnerships through transparent and ethical business practices."
    },
    {
      icon: Award,
      title: "Quality Excellence",
      description: "Maintaining highest standards in every product we export and service we provide."
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Connecting businesses across borders with seamless international trade solutions."
    },
    {
      icon: Truck,
      title: "Timely Delivery",
      description: "Ensuring your shipments reach their destination safely and on schedule."
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-50 to-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-indigo-200 rounded-full filter blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-200 rounded-full filter blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-4 py-2 mb-6 bg-gradient-to-r from-indigo-100 to-cyan-100 rounded-full border border-indigo-200"
          >
            <Shield className="w-4 h-4 text-indigo-600" />
            <span className="text-indigo-600 text-sm font-semibold">About Our Company</span>
          </motion.div>
          
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
          >
            Connecting India to the
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-cyan-600">
              Global Marketplace
            </span>
          </motion.h2>
          
          <motion.p
            variants={itemVariants}
            className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            <strong>Believe Global Trade</strong> is a dynamic export company driven by trust, quality, and global connectivity. 
            We specialize in sourcing and supplying premium products from India to international markets, 
            ensuring every shipment reflects reliability and excellence.
          </motion.p>
        </motion.div>

        {/* Main Content - Split Layout */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Left Column - Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="space-y-8"
          >
            <motion.div variants={itemVariants} className="space-y-4">
              <h3 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                <div className="w-1 h-8 bg-gradient-to-b from-indigo-600 to-cyan-600" />
                Our Story
              </h3>
              <p className="text-gray-600 leading-relaxed">
                As a newly established export company, we bring fresh energy and innovation to international trade. 
                Our focus is on building strong relationships with both producers and global buyers, 
                ensuring quality products reach international markets efficiently. We're committed to transparent 
                business practices and creating value for all our partners.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-4">
              <h3 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                <div className="w-1 h-8 bg-gradient-to-b from-indigo-600 to-cyan-600" />
                Why Choose Us
              </h3>
              <ul className="space-y-3">
                {[
                  "Premium quality products sourced directly from trusted manufacturers",
                  "Competitive pricing with transparent cost structures",
                  "Complete documentation and customs clearance support",
                  "Reliable logistics and timely delivery guarantees",
                  "Personalized customer service and dedicated account management"
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    variants={itemVariants}
                    className="flex items-start gap-3 p-3 rounded-lg bg-gray-50 hover:bg-indigo-50 transition-colors"
                  >
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              variants={itemVariants}
              className="bg-gradient-to-r from-indigo-600 to-cyan-600 rounded-2xl p-8 text-white shadow-2xl"
            >
              <h4 className="text-xl font-bold mb-6 flex items-center gap-2">
                <div className="w-2 h-2 bg-white rounded-full" />
                Get in Touch
              </h4>
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-3 bg-white/10 rounded-lg backdrop-blur-sm">
                  <Phone className="w-5 h-5" />
                  <span className="font-medium">+91 74055 62532</span>
                </div>
                <div className="flex items-center gap-4 p-3 bg-white/10 rounded-lg backdrop-blur-sm">
                  <Mail className="w-5 h-5" />
                  <span className="font-medium">believeglobaltrade@gmail.com</span>
                </div>
                <div className="flex items-center gap-4 p-3 bg-white/10 rounded-lg backdrop-blur-sm">
                  <MapPin className="w-5 h-5" />
                  <span className="font-medium">Surat, India</span>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Image & Mission */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="space-y-8"
          >
            {/* Image */}
            <motion.div
              variants={itemVariants}
              className="relative rounded-2xl overflow-hidden shadow-2xl group"
            >
              <img
                src={AboutBackgroundPic}
                alt="About Believe Global Trade"
                className="w-full h-96 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/10 backdrop-blur-md rounded-lg p-4 border border-white/20">
                  <p className="text-white font-semibold text-lg">
                    Your Trusted Partner in Global Trade
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Mission Statement */}
            <motion.div
              variants={itemVariants}
              className="bg-white rounded-xl p-6 shadow-lg border border-gray-100"
            >
              <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Award className="w-6 h-6 text-indigo-600" />
                Our Mission
              </h4>
              <p className="text-gray-600 leading-relaxed">
                To bridge the gap between Indian manufacturers and global markets by providing 
                reliable export services, ensuring quality products reach international buyers efficiently 
                while building lasting partnerships based on trust and mutual growth.
              </p>
            </motion.div>

            {/* Vision Statement */}
            <motion.div
              variants={itemVariants}
              className="bg-gradient-to-br from-indigo-50 to-cyan-50 rounded-xl p-6 border border-indigo-100"
            >
              <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Globe className="w-6 h-6 text-indigo-600" />
                Our Vision
              </h4>
              <p className="text-gray-600 leading-relaxed">
                To become the preferred export partner for businesses seeking quality Indian products, 
                known for our reliability, transparency, and commitment to excellence in global trade.
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* Values Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mt-20"
        >
          <motion.div
            variants={itemVariants}
            className="text-center mb-12"
          >
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do and define our commitment to excellence.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className="bg-white rounded-xl p-6 text-center shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 group"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-indigo-50 to-cyan-50 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <value.icon className="w-8 h-8 text-indigo-600" />
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">
                  {value.title}
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-indigo-600 via-cyan-600 to-indigo-600 rounded-2xl p-12 text-white relative overflow-hidden shadow-2xl">
            <div className="relative z-10">
              <h3 className="text-3xl font-bold mb-4">
                Start Your Global Trade Journey With Us
              </h3>
              <p className="text-xl mb-8 text-white/90">
                Let's build a successful partnership and grow your business together.
              </p>
              <motion.button
                onClick={() => document.getElementById('footer')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-white text-indigo-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center gap-2 shadow-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Partner With Us
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </div>
            
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full -ml-24 -mb-24" />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white/5 rounded-full" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}