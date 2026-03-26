import React from 'react'
import { motion } from 'framer-motion'
import TrainerCard from '../components/TrainerCard'

const trainers = [
    {
        name: 'Alex Morgan',
        role: 'Head Strength Coach',
        image: '/trainer_1.jfif',
        bio: '10+ years of experience in powerlifting and functional training.',
    },
    {
        name: 'Sofia Chen',
        role: 'Cardio & HIIT Expert',
        image: '/trainer_2.jfif',
        bio: 'Certified nutritionist and endurance specialist.',
    },
    {
        name: 'Marcus Ray',
        role: 'Bodybuilding Pro',
        image: '/trainer_3.jfif',
        bio: 'IFBB pro with focus on hypertrophy and contest prep.',
    },
]

const Trainers = () => {
    return (
        <section id="trainers" className="py-24 bg-gradient-to-b from-black to-gray-950">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="text-lime-400 font-semibold tracking-wider text-sm uppercase">MEET THE TEAM</span>
                    <h2 className="text-4xl md:text-5xl font-bold mt-2 text-white">Elite Fitness Trainers</h2>
                    <div className="w-20 h-1 bg-lime-400 mx-auto mt-4 rounded-full"></div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {trainers.map((trainer, idx) => (
                        <TrainerCard key={idx} trainer={trainer} index={idx} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Trainers