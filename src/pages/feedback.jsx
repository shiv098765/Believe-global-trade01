import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Star } from "lucide-react";
import FeedbackSlider from "../components/feedbackslider";

export default function Feedback() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })
    const [rating, setRating] = useState(0)
    const [hoverRating, setHoverRating] = useState(0)
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        feedback: ''
    })
    const [errors, setErrors] = useState({})

    const handleInputChange = (e) => {
        const { name, value } = e.target
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
        // Clear error for this field when user starts typing
        if (errors[name]) {
            setErrors(prev => ({
                ...prev,
                [name]: ''
            }))
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const newErrors = {}

        if (!formData.name.trim()) {
            newErrors.name = 'type something'
        }
        if (!formData.email.trim()) {
            newErrors.email = 'type something'
        }
        if (!rating) {
            newErrors.rating = 'type something'
        }
        if (!formData.feedback.trim()) {
            newErrors.feedback = 'type something'
        }

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors)
        } else {
            // Form is valid, handle submission
            console.log('Form submitted:', { ...formData, rating })
            // Reset form
            setFormData({ name: '', email: '', feedback: '' })
            setRating(0)
            setErrors({})
        }
    }

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
            <div className="bg-white h-full rounded-lg p-3 border border-slate-400">
              <p className="text-lg md:text-xl text-center font-semibold mb-6">What customers says about us.</p>
              <FeedbackSlider />
            </div>
          </div>


          <div className="shadow-xl rounded-lg p-4 border border-slate-400">
              <p className="text-center font-bold">Give Feedback</p>
             <form onSubmit={handleSubmit}>
              <div className="flex flex-col">
              <label className="mb-2 font-semibold">Name</label>
              <input 
                type="text" 
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Enter your name" 
                className={`px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
                    errors.name ? 'border-red-500' : 'border-gray-300'
                }`} 
              />
              {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
              
              <label className="mb-2 font-semibold">Email</label>
              <input 
                type="email" 
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Enter your email" 
                className={`px-3 py-2 mb-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
                    errors.email ? 'border-red-500' : 'border-gray-300'
                }`} 
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
              
              <label className="mb-2 font-semibold">Rating</label>
              <div className="flex gap-1 mb-3">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className={`w-8 h-8 cursor-pointer transition-colors ${
                      star <= (hoverRating || rating)
                        ? 'fill-yellow-400 text-yellow-400'
                        : 'text-gray-300'
                    }`}
                    onClick={() => {
                        setRating(star)
                        if (errors.rating) {
                            setErrors(prev => ({ ...prev, rating: '' }))
                        }
                    }}
                    onMouseEnter={() => setHoverRating(star)}
                    onMouseLeave={() => setHoverRating(0)}
                  />
                ))}
              </div>
              {errors.rating && <p className="text-red-500 text-sm mt-1">{errors.rating}</p>}
              
              <textarea 
                name="feedback"
                value={formData.feedback}
                onChange={handleInputChange}
                placeholder="Your Feedback" 
                className={`p-3 min-h-24 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
                    errors.feedback ? 'border-red-500' : 'border-gray-300'
                }`} 
              />
              {errors.feedback && <p className="text-red-500 text-sm mt-1">{errors.feedback}</p>}
            </div>
          <div className="text-center mt-6">
            <button type="submit" className="px-4 py-1 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 active:scale-95 transition-colors">Submit</button>
          </div>
          </form>
          </div>
            
          </div>
        </motion.div>
    )
}