import React from 'react'
import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import PricingCard from '../components/PricingCard'

const plans = [
    {
        name: 'Basic',
        price: 29,
        period: 'month',
        features: ['Access to gym floor', 'Locker room access', '1 group class/week', 'Mobile app access'],
        recommended: false,
        color: 'gray',
    },
    {
        name: 'Standard',
        price: 59,
        period: 'month',
        features: ['All Basic features', 'Unlimited group classes', '1 personal training session', 'Nutrition guide'],
        recommended: true,
        color: 'lime',
    },
    {
        name: 'Premium',
        price: 99,
        period: 'month',
        features: ['All Standard features', '4 personal training sessions', 'Sauna & recovery zone', 'Guest passes'],
        recommended: false,
        color: 'purple',
    },
]

const Pricing = () => {
    return (
        <section id="pricing" className="py-24 bg-black relative">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-lime-900/20 via-black to-black"></div>
            <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="text-lime-400 font-semibold tracking-wider text-sm uppercase">PRICING</span>
                    <h2 className="text-4xl md:text-5xl font-bold mt-2 text-white">Choose Your Membership</h2>
                    <div className="w-20 h-1 bg-lime-400 mx-auto mt-4 rounded-full"></div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {plans.map((plan, idx) => (
                        <PricingCard key={idx} plan={plan} index={idx} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Pricing