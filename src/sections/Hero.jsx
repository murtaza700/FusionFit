import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Play } from 'lucide-react'

const Hero = () => {
    const scrollToSection = (id) => {
        const element = document.querySelector(id)
        if (element) element.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">

            <div className="absolute inset-0 z-0">
                <img
                    src="/hero_image.avif"
                    alt="Gym background"
                    className="w-full h-full object-cover brightness-50"
                />
                <div className="absolute inset-0 bg-linear-to-r from-black via-black/80 to-transparent"></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center lg:text-left">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="max-w-3xl"
                >
                    <motion.span
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 }}
                        className="inline-block text-lime-400 font-semibold tracking-wider text-sm uppercase mb-4 border-l-4 border-lime-400 pl-3"
                    >
                        Elite Fitness Center
                    </motion.span>
                    <h1 className="text-5xl md:text-7xl font-extrabold leading-tight text-white mb-6">
                        Transform Your Body, <br />
                        <span className="bg-linear-to-r from-lime-400 to-emerald-400 bg-clip-text text-transparent">
                            Transform Your Life
                        </span>
                    </h1>
                    <p className="text-gray-300 text-lg md:text-xl mb-8 max-w-2xl">
                        World-class trainers, state-of-the-art equipment, and a supportive community to help you achieve your fitness goals.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => scrollToSection('#pricing')}
                            className="bg-lime-400 cursor-pointer text-black px-8 py-4 rounded-full font-bold text-lg flex items-center justify-center gap-2 hover:bg-lime-300 transition-all shadow-xl shadow-lime-400/30"
                        >
                            Join Now <ArrowRight size={20} />
                        </motion.button>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => scrollToSection('#programs')}
                            className="border-2 cursor-pointer border-white/30 text-white px-8 py-4 rounded-full font-bold text-lg flex items-center justify-center gap-2 hover:bg-white/10 hover:border-lime-400 transition-all"
                        >
                            View Plans <Play size={18} />
                        </motion.button>
                    </div>
                </motion.div>
            </div>


            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 1.5, delay: 1 }}
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
            >
                <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center">
                    <div className="w-1 h-2 bg-lime-400 rounded-full mt-2 animate-bounce"></div>
                </div>
            </motion.div>
        </section>
    )
}

export default Hero