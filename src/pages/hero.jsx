import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import HeroBackground from '../assets/true-background.jpg'
import cargoImage from '../assets/cargo-pic.jpeg'
import parcelImage from '../assets/bgt-parcel.jpeg'
import mapImage from '../assets/bgt-map.jpeg'

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
}

// const handleMouseMove = (e) => {
//   const card = e.currentTarget
//   const rect = card.getBoundingClientRect()
//   const x = e.clientX - rect.left
//   const y = e.clientY - rect.top
//   const centerX = rect.width / 2
//   const centerY = rect.height / 2
//   const rotateX = (y - centerY) / 10
//   const rotateY = (centerX - x) / 10
//   card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
// }

// const handleMouseLeave = (e) => {
//   e.currentTarget.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)'
// }

export default function Hero() {
    const [clients, setClients] = useState(0)
    const [countries, setCountries] = useState(0)
    const [years, setYears] = useState(0)

    useEffect(() => {
        const animateCounter = (setter, target) => {
            const increment = target / 100
            const timer = setInterval(() => {
                setter(prev => {
                    if (prev >= target) {
                        clearInterval(timer)
                        return target
                    }
                    return prev + increment
                })
            }, 20)
        }
        animateCounter(setClients, 1500)
        animateCounter(setCountries, 50)
        animateCounter(setYears, 10)
    }, [])

    return (
        <motion.div className="overflow-x-hidden mt-18" id="hero">
            <div>
            <img src={HeroBackground} alt="Hero Background" className="relative w-full h-screen object-cover" />
                <div className="absolute inset-0 bg-black opacity-20 mt-18 h-screen"></div>
            <motion.div
             className="absolute top-3/5 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center w-8/10"
             initial={{ scale: 1.2, opacity: 0 }}
             animate={{ scale: 1, opacity: 1 }}
             transition={{ type: "spring", stiffness: 100, duration: 5 }}>
            <p className="text-left md:text-center font-semibold text-white text-shadow-lg mb-2 md:mb-4">Believe Global Trade</p>
            <h1 className="text-3xl text-left md:text-5xl md:text-center font-bold text-white text-shadow-lg mb-2">Connecting Business to the World.</h1>
            <h1 className="text-3xl text-left md:text-5xl md:text-center font-bold text-white text-shadow-lg mb-2 md:mb-4">Through Trusted Global Trade.</h1>
            <p className="text-left md:text-center font-semibold text-white pt-1 text-shadow-lg">We specialize in seamless international trade, ensuring quality products, smooth logistics, and trusted global partnerships...</p>
            <div className="mt-5 flex gap-4 justify-center">
                <button
                 onClick={() => document.getElementById('footer').scrollIntoView({ behavior: 'smooth' })}
                 className="px-3 py-2 sm:px-4 sm:py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 hover:shadow-2xl hover:shadow-indigo-500/50 transition-all text-sm sm:text-base">
                    Contact Us
                </button>
                <button onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })} className="px-3 py-2 sm:px-4 sm:py-2 bg-slate-100 text-slate-900 rounded-lg hover:bg-slate-200 hover:shadow-2xl hover:shadow-slate-500/50 transition-all text-sm sm:text-base">
                    Know More
                </button>
            </div>
            </motion.div>
            </div>

            {/* <motion.div className="w-full bg-indigo-600 text-white py-12" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 1 }}>
                <div className="text-center">
                    <h2 className="text-3xl font-bold mb-8">Our Achievements</h2>
                    <div className="flex justify-center gap-8">
                        <div>
                            <motion.h3 className="text-3xl md:text-4xl font-bold">{Math.floor(clients)}</motion.h3>
                            <p>Clients Served</p>
                        </div>
                        <div>
                            <motion.h3 className="text-3xl md:text-4xl font-bold">{Math.floor(countries)}</motion.h3>
                            <p>Countries</p>
                        </div>
                        <div>
                            <motion.h3 className="text-3xl md:text-4xl font-bold">{Math.floor(years)}</motion.h3>
                            <p>Years Experience</p>
                        </div>
                    </div>
                </div>
            </motion.div> */}
        </motion.div>
    )
}