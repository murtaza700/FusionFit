import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, MapPin, Phone, Mail } from 'lucide-react'

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' })
    const [loading, setLoading] = useState(false)
    const [success, setSuccess] = useState(false)

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)
        try {
            await new Promise((resolve) => setTimeout(resolve, 1000))
            setSuccess(true)
            setFormData({ name: '', email: '', message: '' })
            setTimeout(() => setSuccess(false), 3000)
        } catch (error) {
            console.error(error)
        } finally {
            setLoading(false)
        }
    }

    return (
        <section id="contact" className="py-24 bg-black relative">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="text-lime-400 font-semibold tracking-wider text-sm uppercase">GET IN TOUCH</span>
                    <h2 className="text-4xl md:text-5xl font-bold mt-2 text-white">Contact Us</h2>
                    <div className="w-20 h-1 bg-lime-400 mx-auto mt-4 rounded-full"></div>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-800"
                    >
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-300 mb-2">Full Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-lime-400 focus:ring-1 focus:ring-lime-400 text-white transition-all"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-300 mb-2">Email Address</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-lime-400 focus:ring-1 focus:ring-lime-400 text-white"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-300 mb-2">Your Message</label>
                                <textarea
                                    name="message"
                                    rows="5"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-lime-400 focus:ring-1 focus:ring-lime-400 text-white resize-none"
                                ></textarea>
                            </div>
                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                type="submit"
                                disabled={loading}
                                className="w-full cursor-pointer bg-lime-400 text-black font-bold py-3 rounded-lg flex items-center justify-center gap-2 hover:bg-lime-300 transition-all disabled:opacity-70"
                            >
                                {loading ? 'Sending...' : 'Send Message'} <Send size={18} />
                            </motion.button>
                            {success && (
                                <p className="text-green-400 text-center text-sm">Message sent successfully!</p>
                            )}
                        </form>
                    </motion.div>


                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="space-y-6"
                    >
                        <div className="bg-gray-900/50 p-6 rounded-2xl border border-gray-800">
                            <h3 className="text-xl font-bold text-white mb-4">Visit Our Studio</h3>
                            <div className="space-y-4 text-gray-300">
                                <div className="flex items-center gap-3">
                                    <MapPin className="text-lime-400" size={20} />
                                    <span>123 Fitness Avenue, Downtown LA, CA 90028</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Phone className="text-lime-400" size={20} />
                                    <span>+1 (555) 987-6543</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Mail className="text-lime-400" size={20} />
                                    <span>contact@fusionfit.com</span>
                                </div>
                            </div>
                        </div>
                        <div className="rounded-2xl overflow-hidden border border-gray-800 h-64">
                            <iframe
                                title="gym location"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3305.465568322232!2d-118.243683!3d34.052234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c75ddc27da13%3A0xe22fdf6f254608f4!2sLos%20Angeles%2C%20CA!5e0!3m2!1sen!2sus!4v1699999999999!5m2!1sen!2sus"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                className="grayscale contrast-125"
                            ></iframe>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default Contact