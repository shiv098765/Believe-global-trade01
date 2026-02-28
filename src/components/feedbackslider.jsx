import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'

const testimonials = [
    {
        quote: "Believe Global Trade has revolutionized our import process. Their expertise and reliability are unmatched.",
        name: "Nick Johnson",
        position: "CEO, TechImports Inc.",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face"
    },
    {
        quote: "Exceptional service and seamless logistics. We've seen a 30% improvement in our supply chain efficiency.",
        name: "Michael Chen",
        position: "Operations Director, Global Logistics Ltd.",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
    },
    {
        quote: "Their commitment to quality and timely deliveries has made them our go-to partner for international trade.",
        name: "Emma Rodriguez",
        position: "Procurement Manager, AgriCorp",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
    }
]

export default function FeedbackSlider() {
    const [current, setCurrent] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((prev) => (prev + 1) % testimonials.length)
        }, 5000)
        return () => clearInterval(interval)
    }, [])

    const nextSlide = () => {
        setCurrent((prev) => (prev + 1) % testimonials.length)
    }

    const prevSlide = () => {
        setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    }
    
    return (
        <motion.div className="relative w-full h-80 overflow-hidden rounded-lg bg-gradient-to-br from-indigo-50 to-purple-50 p-8">
            <AnimatePresence mode="wait">
                <motion.div
                    key={current}
                    className="flex flex-col items-center text-center my-auto"
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="flex mb-4">
                        {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                        ))}
                    </div>
                    <blockquote className="text-lg text-gray-700 mb-6 italic">
                        "{testimonials[current].quote}"
                    </blockquote>
                    <div className="flex items-center">
                        <img 
                            src={testimonials[current].image} 
                            alt={testimonials[current].name}
                            className="w-12 h-12 rounded-full mr-4 object-cover"
                        />
                        <div>
                            <p className="font-semibold text-gray-900">{testimonials[current].name}</p>
                            <p className="text-sm text-gray-600">{testimonials[current].position}</p>
                        </div>
                    </div>
                </motion.div>
            </AnimatePresence>
            <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 rounded-full p-3 shadow-lg transition-all hover:scale-110"
            >
                <ChevronLeft className="h-6 w-6" />
            </button>
            <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 rounded-full p-3 shadow-lg transition-all hover:scale-110"
            >
                <ChevronRight className="h-6 w-6" />
            </button>
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {testimonials.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrent(index)}
                        className={`w-3 h-3 rounded-full transition-all ${
                            index === current ? 'bg-indigo-600' : 'bg-gray-300'
                        }`}
                    />
                ))}
            </div>
        </motion.div>
    )
}