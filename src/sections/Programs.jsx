import React from 'react'
import { motion } from 'framer-motion'
import { Dumbbell, Heart, Flame, Activity } from 'lucide-react'
import ProgramCard from '../components/ProgramCard'

const programsData = [
    {
        title: 'Strength Training',
        description: 'Build raw power and muscle mass with progressive overload techniques.',
        icon: Dumbbell,
        color: 'from-red-500 to-orange-500',
    },
    {
        title: 'Cardio Fitness',
        description: 'Boost endurance, heart health, and burn fat with high-energy sessions.',
        icon: Heart,
        color: 'from-pink-500 to-rose-500',
    },
    {
        title: 'Weight Loss',
        description: 'Structured plans combining HIIT, nutrition, and accountability.',
        icon: Flame,
        color: 'from-orange-500 to-yellow-500',
    },
    {
        title: 'Bodybuilding',
        description: 'Sculpt your physique with specialized hypertrophy workouts.',
        icon: Activity,
        color: 'from-emerald-500 to-teal-500',
    },
]

const Programs = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 },
        },
    }

    return (
        <section id="programs" className="py-24 bg-black relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-black to-black"></div>
            <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="text-lime-400 font-semibold tracking-wider text-sm uppercase">WHAT WE OFFER</span>
                    <h2 className="text-4xl md:text-5xl font-bold mt-2 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                        Elite Training Programs
                    </h2>
                    <div className="w-20 h-1 bg-lime-400 mx-auto mt-4 rounded-full"></div>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-100px' }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
                >
                    {programsData.map((program, idx) => (
                        <ProgramCard key={idx} program={program} index={idx} />
                    ))}
                </motion.div>
            </div>
        </section>
    )
}

export default Programs