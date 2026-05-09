import React from 'react'
import { motion } from 'framer-motion'

const TrainerCard = ({ trainer, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -8 }}
            className="group relative rounded-2xl overflow-hidden bg-gray-900 shadow-xl"
        >
            <div className="relative h-80 overflow-hidden">
                <img
                    src={trainer.image}
                    alt={trainer.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black via-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                    <p className="text-gray-200 text-sm">{trainer.bio}</p>
                </div>
            </div>
            <div className="p-5 text-center border-t border-gray-800">
                <h3 className="text-xl font-bold text-white">{trainer.name}</h3>
                <p className="text-lime-400 text-sm font-medium mt-1">{trainer.role}</p>
            </div>
        </motion.div>
    )
}

export default TrainerCard