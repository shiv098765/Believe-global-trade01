import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import FeedbackSlider from "../components/feedbackslider";

export default function Feedback() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })

    return (
        <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="mt-18 mb-8"
        id="feedback"
        >
            <hr className="border border-slate-200 w-full mb-4"></hr>
          <h1 className="text-center text-3xl font-semibold mb-4">Feedback</h1>
          <p className="text-center text-slate-500 mb-4">Your feedback is valuable to us. Please share your thoughts and experiences with our services.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 w-full bg-white gap-6 px-6">
            
          <div className="shadow-xl rounded-lg p-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 animate-pulse">
            <div className="bg-white rounded-lg p-3 border border-slate-400">
              <p className="text-center font-semibold">What customers says about us.</p>
              <FeedbackSlider />
            </div>
          </div>


          <div className="shadow-xl rounded-lg p-4 border border-slate-400">
              <p className="text-center font-bold">Give Feedback</p>
             <div className="flex flex-col">
              <label className="mb-2 font-semibold">Name</label>
              <input type="text" placeholder="Enter your name" className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500" />
              <label className="mb-2 font-semibold">Email</label>
              <input type="email" placeholder="Enter your email" className="px-3 py-2 mb-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500" />
              <textarea placeholder="Your Feedback" className="p-3 min-h-24 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500" />
            </div>
          <div className="text-center mt-6">
            <button type="submit" className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 active:scale-95 transition-colors">Submit</button>
          </div>
          </div>
            
          </div>
        </motion.div>
    )
}