import React from 'react'
import { motion } from 'framer-motion'
import { Star } from 'lucide-react'
import TestimonialCard from '../components/TestimonialCard'

const testimonials = [
    {
        name: 'Jessica Walsh',
        role: 'Member since 2023',
        text: 'FusionFit completely transformed my fitness journey. The trainers are world-class and the community keeps me motivated every day!',
        rating: 5,
        image: '/member_1.jpg',
    },
    {
        name: 'David Kim',
        role: 'Marathon Runner',
        text: 'Best gym I’ve ever been to. The equipment is top-notch and the HIIT classes are intense but effective. Lost 20lbs in 3 months!',
        rating: 5,
        image: '/member_2.jpg',
    },
    {
        name: 'Emily Carter',
        role: 'Yoga & Strength',
        text: 'I love the variety of programs. From strength to recovery, FusionFit has everything. Highly recommend the premium plan!',
        rating: 5,
        image: '/member_3.jpg',
    },
]

const Testimonials = () => {
    return (
        <section className="py-24 bg-gray-950">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="text-lime-400 font-semibold tracking-wider text-sm uppercase">TESTIMONIALS</span>
                    <h2 className="text-4xl md:text-5xl font-bold mt-2 text-white">What Members Say</h2>
                    <div className="w-20 h-1 bg-lime-400 mx-auto mt-4 rounded-full"></div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((t, idx) => (
                        <TestimonialCard key={idx} testimonial={t} index={idx} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Testimonials