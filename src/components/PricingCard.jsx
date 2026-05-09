import React from 'react'
import { motion } from 'framer-motion'
import { Check, Sparkles } from 'lucide-react'

const PricingCard = ({ plan, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -12 }}
            className={`relative rounded-2xl overflow-hidden transition-all duration-300 ${plan.recommended
                ? 'bg-linear-to-r from-gray-800 to-gray-900 border-2 border-lime-400 shadow-2xl shadow-lime-400/20'
                : 'bg-gray-900 border border-gray-800'
                }`}
        >
            {plan.recommended && (
                <div className="absolute top-4 right-4 bg-lime-400 text-black text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
                    <Sparkles size={12} /> RECOMMENDED
                </div>
            )}
            <div className="p-8 text-center">
                <h3 className="text-2xl font-bold text-white">{plan.name}</h3>
                <div className="mt-4 mb-6">
                    <span className="text-5xl font-extrabold text-white">${plan.price}</span>
                    <span className="text-gray-400">/{plan.period}</span>
                </div>
                <ul className="space-y-3 text-left mb-8">
                    {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-3 text-gray-300">
                            <Check size={18} className="text-lime-400 shrink-0" />
                            <span className="text-sm">{feature}</span>
                        </li>
                    ))}
                </ul>
                <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                    className={`w-full py-3 cursor-pointer rounded-full font-bold transition-all ${plan.recommended
                        ? 'bg-lime-400 text-black hover:bg-lime-300 shadow-lg'
                        : 'bg-gray-800 text-white hover:bg-lime-400 hover:text-black'
                        }`}
                >
                    Get Started
                </motion.button>
            </div>
        </motion.div>
    )
}

export default PricingCard