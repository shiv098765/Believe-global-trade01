import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Logo from '../assets/bgt-logo-new.png'
import AboutBackgroundPic from '../assets/bgt-background.jpg'


export default function AboutUs () {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })

    return (
        <motion.div ref={ref} initial={{ opacity: 0, y: 50 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8 }} id="about" className="mt-18">
            <div className="text-center bg-white relative">
            <h1 className="text-3xl md:text-5xl text-indigo-900 font-bold my-6">About Us</h1>
            <p><strong>Believe Global Trade </strong>is a dynamic export company driven by trust, quality, and global connectivity. We specialize in sourcing and supplying premium products from India to international markets, ensuring every shipment reflects reliability and excellence. With a strong focus on quality standards, transparent documentation, and timely deliveries, we bridge the gap between producers and global buyers. Our diverse export portfolio is carefully curated to meet international demands while maintaining competitive pricing and ethical trade practices.</p>
            <div className="mt-4 bg-[#c87f39] p-2 w-full mx-auto px-auto">
              <div className="grid grid-cols-1 md:grid-cols-1 justify-center font-semibold">
                 <button className='active:scale-95 hover:underline'>Tel: +91 74055 62532</button>
                 <button className='active:scale-95 hover:underline'>Email: believeglobaltrade@gmail.com</button>
              </div>
            </div>
            </div>
        </motion.div>
    )
}