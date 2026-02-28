import React from "react";
import { motion, useInView, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import TurmericImage from "../assets/Turmeric-Finger.webp"
import RedChilliImage from "../assets/red-chilli.webp"
import RedChilliPowder from "../assets/red-chilli-powder.png"
import GreenChilliPng from "../assets/green-chilli-noback.png"
import TurmericPowder from "../assets/turmeric-powder.png"
import GreenChilliImage from "../assets/green-chilli.webp"
import OnionsImage from "../assets/onions.webp"
import OnionPowderImage from "../assets/onion-powder-png.png"
import KabuliChanaImage from "../assets/kabuli-chana.webp"
import KabuliChanaPng from "../assets/kabuli-chana-png.png"
import GarlicImage from "../assets/garlic.avif"
import GarlicPowder from "../assets/garlic-powder-png.png"

const productData = [
    {
        id: 1,
        name: "Turmeric Fingers & Turmeric Powder",
        description: "Premium Turmeric Fingers with High Curicumin and Rich Color. Naturally Processed Turmeric Powder meeting international standards.",
        bgImage: TurmericImage,
        productImage: TurmericPowder,
        align: "right"
    },
    {
        id: 2,
        name: "Red Chilli & Powder",
        description: "Naturally Grown Red Chillies with Bold Flavor. Naturally Red Chilli Powder with authentic taste and freshness.",
        bgImage: RedChilliImage,
        productImage: RedChilliPowder,
        align: "left"
    },
    {
        id: 3,
        name: "Green Chilli",
        description: "Naturally Grown Green Chillies with Crisp Texture and Bold Flavor. The chillies meetings international quality and export standards.",
        bgImage: GreenChilliImage,
        productImage: GreenChilliPng,
        align: "right"
    },
    {
        id: 4,
        name: "Onions & Powder",
        description: "Hand Picked Fresh Onions meetings International Standards. And Carefully Processed Onion Powder Retaining Authentic Taste.",
        bgImage: OnionsImage,
        productImage: OnionPowderImage,
        align: "left"
    },
    {
        id: 5,
        name: "Kabuli Chana",
        description: "High Quality Kabuli Chana for Global Markets. Clean, Consistent and Trusted.",
        bgImage: KabuliChanaImage,
        productImage: KabuliChanaPng,
        align: "right"
    },
    {
        id: 6,
        name: "Garlic & Powder",
        description: "Finely Grown Garlic. And Finely Ground Garlic Powder Retaining Natural Flavor and Freshness.",
        bgImage: GarlicImage,
        productImage: GarlicPowder,
        align: "left"
    }
];

function ProductCard({ product, index }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });
    
    const y = useTransform(scrollYProgress, [0, 1], [0, -50]);
    const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0.8]);

    const cardVariants = {
        hidden: { 
            opacity: 0, 
            x: product.align === "right" ? 100 : -100,
            scale: 0.8
        },
        visible: {
            opacity: 1,
            x: 0,
            scale: 1,
            transition: {
                duration: 0.8,
                ease: "easeOut",
                delay: index * 0.2
            }
        }
    };

    const floatingVariants = {
        initial: { y: 0 },
        animate: {
            y: [-10, 10, -10],
            transition: {
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
            }
        }
    };

    const isLeft = product.align === "left";
    
    return (
        <motion.div
            ref={ref}
            className={`relative w-full min-h-80 mb-12`}
            variants={cardVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
        >
            {/* Parallax Background Image */}
            <motion.div 
                className="absolute inset-0 h-96 overflow-hidden rounded-2xl"
                style={{ y }}
            >
                <img 
                    src={product.bgImage} 
                    alt={product.name} 
                    className="w-full h-full object-cover" 
                />
                {/* Enhanced gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </motion.div>

            {/* Glassmorphism content card */}
            <motion.div
                className={`absolute top-1/2 ${isLeft ? 'left-0' : 'right-0'} transform -translate-y-1/2 w-2/3 md:w-2/5 backdrop-blur-md bg-white/10 border border-white/20 rounded-3xl p-4 md:p-6 shadow-2xl`}
                style={{ opacity }}
                whileHover={{
                    scale: isLeft ? 1.05 : 0.95,
                    boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)"
                }}
                transition={{ duration: 0.3 }}
            >
                <div className="hidden md:block">
                    {/* Product name and image in proper ratio */}
                    <div className={`grid grid-cols-[${isLeft ? '2fr_1fr' : '1fr_2fr'}] items-center gap-4 mb-4`}>
                        <div className={isLeft ? "order-1" : "order-1 flex items-center justify-center"}>
                            <motion.h3 
                                className="text-lg md:text-xl font-bold text-white text-center"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5 }}
                            >
                                {product.name}
                            </motion.h3>
                        </div>
                        <div className={`flex ${isLeft ? 'justify-end' : 'justify-start'} order-${isLeft ? '2' : '2'}`}>
                            <motion.div
                                variants={floatingVariants}
                                initial="initial"
                                animate="animate"
                                className="relative"
                            >
                                <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full blur-xl opacity-50" />
                                <img 
                                    src={product.productImage} 
                                    alt={product.name} 
                                    className="w-16 h-16 md:w-20 md:h-20 object-cover rounded-full relative border-4 border-white/30 shadow-2xl" 
                                />
                            </motion.div>
                        </div>
                    </div>
                    
                    {/* Description and button below */}
                    <div className="space-y-3">
                        <motion.p 
                            className="text-white/90 text-sm leading-relaxed"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.7 }}
                        >
                            {product.description}
                        </motion.p>
                        <motion.button
                            className="px-4 py-2 bg-gradient-to-r from-amber-500 to-orange-600 text-white font-semibold rounded-full hover:from-amber-600 hover:to-orange-700 transform hover:scale-105 active:scale-95 transition-all duration-300 shadow-lg hover:shadow-xl text-sm"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.9 }}
                            whileHover={{ y: -2 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Know More
                        </motion.button>
                    </div>
                </div>

                {/* Mobile version */}
                <div className="block md:hidden">
                    <div className="text-center">
                        {/* Product name and image in 2:1 ratio */}
                        <div className="grid grid-cols-[2fr_1fr] items-center gap-3 mb-3">
                            <div className="text-left">
                                <motion.h3 
                                    className="text-base font-bold text-white"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.3 }}
                                >
                                    {product.name}
                                </motion.h3>
                            </div>
                            <div className="flex justify-end">
                                <motion.div
                                    variants={floatingVariants}
                                    initial="initial"
                                    animate="animate"
                                    className="relative"
                                >
                                    <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full blur-lg opacity-40" />
                                    <img 
                                        src={product.productImage} 
                                        alt={product.name} 
                                        className="w-12 h-12 object-cover rounded-full relative border-3 border-white/30 shadow-xl" 
                                    />
                                </motion.div>
                            </div>
                        </div>
                        
                        {/* Description and button below */}
                        <div className="space-y-2">
                            <motion.p 
                                className="text-white/90 text-xs leading-relaxed text-left"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5 }}
                            >
                                {product.description}
                            </motion.p>
                            <motion.button
                                className="px-3 py-1.5 bg-gradient-to-r from-amber-500 to-orange-600 text-white font-semibold rounded-full hover:from-amber-600 hover:to-orange-700 transform hover:scale-105 active:scale-95 transition-all duration-300 shadow-lg text-xs"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.7 }}
                                whileHover={{ y: -2 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Know More
                            </motion.button>
                        </div>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
}

export default function Products() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3,
                delayChildren: 0.2
            }
        }
    };

    return (
        <motion.div
            id="products"
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="mt-18 mb-8 text-center relative"
        >
            {/* Animated background decoration */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <motion.div
                    className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-amber-400/20 to-orange-500/20 rounded-full blur-3xl"
                    animate={{
                        x: [0, 100, 0],
                        y: [0, -50, 0],
                    }}
                    transition={{
                        duration: 15,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />
                <motion.div
                    className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-red-400/20 to-pink-500/20 rounded-full blur-3xl"
                    animate={{
                        x: [0, -100, 0],
                        y: [0, 50, 0],
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />
            </div>

            {/* Header with enhanced animation */}
            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                className="relative z-10"
            >
                <motion.div 
                    className="w-full mb-8"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                >
                    <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent" />
                </motion.div>
                
                <motion.h1 
                    className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-amber-600 via-orange-600 to-red-600 bg-clip-text text-transparent mb-4"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.7 }}
                >
                    Our Products
                </motion.h1>
                
                <motion.p 
                    className="text-gray-600 text-lg max-w-2xl mx-auto mb-8"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.9 }}
                >
                    Explore our diverse range of products, carefully curated to meet your needs.
                </motion.p>
            </motion.div>

            {/* Product Grid with staggered animation */}
            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                className="relative z-10"
            >
                {productData.map((product, index) => (
                    <ProductCard key={product.id} product={product} index={index} />
                ))}
            </motion.div>
        </motion.div>
    );
}
