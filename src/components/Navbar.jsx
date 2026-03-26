import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Dumbbell } from 'lucide-react'

const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Programs', href: '#programs' },
    { name: 'Trainers', href: '#trainers' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Contact', href: '#contact' },
]

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const handleLinkClick = (e, href) => {
        e.preventDefault()
        setIsOpen(false)
        const element = document.querySelector(href)
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
        }
    }

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, type: 'spring', stiffness: 100 }}
            className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black/90 backdrop-blur-xl border-b border-white/10' : 'bg-transparent'
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">

                    <a href="#home" onClick={(e) => handleLinkClick(e, '#home')} className="flex items-center gap-2 group">
                        <Dumbbell className="w-8 h-8 text-lime-400 group-hover:rotate-12 transition-transform duration-300" />
                        <span className="text-2xl font-bold bg-gradient-to-r from-white to-lime-400 bg-clip-text text-transparent">
                            FusionFit
                        </span>
                    </a>


                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={(e) => handleLinkClick(e, link.href)}
                                className="text-gray-300 hover:text-lime-400 transition-colors duration-300 font-medium text-sm uppercase tracking-wide"
                            >
                                {link.name}
                            </a>
                        ))}
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={(e) => handleLinkClick(e, '#pricing')}
                            className="bg-lime-400 cursor-pointer text-black px-5 py-2 rounded-full font-semibold text-sm hover:bg-lime-300 transition-all shadow-lg shadow-lime-400/20"
                        >
                            Join Now
                        </motion.button>
                    </div>


                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden text-gray-200 focus:outline-none"
                        aria-label="Toggle menu"
                    >
                        {isOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>


            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="md:hidden bg-black/95 backdrop-blur-xl border-b border-white/10"
                    >
                        <div className="px-6 py-6 flex flex-col gap-4">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={(e) => handleLinkClick(e, link.href)}
                                    className="text-gray-300 hover:text-lime-400 py-2 text-lg font-medium transition-colors"
                                >
                                    {link.name}
                                </a>
                            ))}
                            <motion.button
                                whileTap={{ scale: 0.95 }}
                                onClick={(e) => handleLinkClick(e, '#pricing')}
                                className="bg-lime-400 text-black px-6 py-3 rounded-full font-semibold mt-2 text-center"
                            >
                                Join Now
                            </motion.button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    )
}

export default Navbar