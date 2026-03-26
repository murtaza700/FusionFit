import React from 'react'
import { motion } from 'framer-motion'
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube, FaDumbbell } from "react-icons/fa";

const Footer = () => {
    const quickLinks = ['Programs', 'Trainers', 'Pricing', 'Contact']
    const socials = [
        { icon: <FaFacebookF />, href: '#' },
        { icon: <FaInstagram />, href: '#' },
        { icon: <FaTwitter />, href: '#' },
        { icon: <FaYoutube />, href: '#' },
    ]

    return (
        <footer className="bg-gradient-to-t from-gray-950 to-black border-t border-white/10 pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12">

                    <div className="col-span-1 md:col-span-1">
                        <div className="flex items-center gap-2 mb-4">
                            <FaDumbbell className="w-8 h-8 text-lime-400" />
                            <span className="text-2xl font-bold bg-gradient-to-r from-white to-lime-400 bg-clip-text text-transparent">
                                FusionFit
                            </span>
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Elevate your fitness journey with expert trainers, premium equipment, and a community that pushes you beyond limits.
                        </p>
                    </div>


                    <div>
                        <h4 className="text-white font-semibold text-lg mb-4">Quick Links</h4>
                        <ul className="space-y-2">
                            {quickLinks.map((link) => (
                                <li key={link}>
                                    <a
                                        href={`#${link.toLowerCase()}`}
                                        className="text-gray-400 hover:text-lime-400 transition-colors text-sm"
                                    >
                                        {link}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>


                    <div>
                        <h4 className="text-white font-semibold text-lg mb-4">Contact</h4>
                        <ul className="space-y-2 text-gray-400 text-sm">
                            <li>123 Fitness Ave, Los Angeles, CA</li>
                            <li>+1 (555) 123-4567</li>
                            <li>hello@fusionfit.com</li>
                        </ul>
                    </div>


                    <div>
                        <h4 className="text-white font-semibold text-lg mb-4">Follow Us</h4>
                        <div className="flex gap-4">
                            {socials.map((social, idx) => (
                                <motion.a
                                    key={idx}
                                    href={social.href}
                                    whileHover={{ y: -3, scale: 1.1 }}
                                    className="bg-gray-800 p-2 rounded-full hover:bg-lime-400 hover:text-black transition-all duration-300 text-gray-300"
                                >
                                    {social.icon}
                                </motion.a>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="border-t border-white/10 mt-12 pt-6 text-center text-gray-500 text-sm">
                    <p>&copy; {new Date().getFullYear()} FusionFit. All rights reserved. | Built for champions</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer