import React from 'react'
import { motion } from 'framer-motion'
import { Star } from 'lucide-react'

const TestimonialCard = ({ testimonial, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -5 }}
            className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-2xl border border-gray-700"
        >
            <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={18} className="fill-lime-400 text-lime-400" />
                ))}
            </div>
            <p className="text-gray-300 italic mb-6">"{testimonial.text}"</p>
            <div className="flex items-center gap-4">
                <img src={testimonial.image} alt={testimonial.name} className="w-12 h-12 rounded-full object-cover" />
                <div>
                    <h4 className="font-bold text-white">{testimonial.name}</h4>
                    <p className="text-gray-400 text-sm">{testimonial.role}</p>
                </div>
            </div>
        </motion.div>
    )
}

export default TestimonialCard