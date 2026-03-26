import React from 'react'
import { motion } from 'framer-motion'

const ProgramCard = ({ program, index }) => {
    const Icon = program.icon

    return (
        <motion.div
            variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: index * 0.1 } },
            }}
            whileHover={{ y: -10, scale: 1.02 }}
            className="group bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-800 hover:border-lime-400/50 transition-all duration-300"
        >
            <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${program.color} p-3 mb-5 group-hover:scale-110 transition-transform duration-300`}>
                <Icon className="w-full h-full text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">{program.title}</h3>
            <p className="text-gray-400 text-sm leading-relaxed">{program.description}</p>
            <div className="mt-5 opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-lime-400 text-sm font-medium inline-flex items-center gap-1">
                    Learn more →
                </span>
            </div>
        </motion.div>
    )
}

export default ProgramCard