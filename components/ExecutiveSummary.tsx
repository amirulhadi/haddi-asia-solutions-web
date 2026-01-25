'use client'

import { motion } from 'framer-motion'

export default function ExecutiveSummary() {
  return (
    <section className="section-container bg-gray-50">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto text-center"
      >
        <h2 className="section-title gradient-text">
          Executive Summary
        </h2>
        <p className="text-lg md:text-xl leading-relaxed text-gray-700">
          Haddi Asia Solutions is a premier technology consultancy specializing in digital transformation, 
          AI-enabled platforms, and scalable web systems. We partner with forward-thinking organizations 
          to build robust digital infrastructure that drives measurable business outcomes. Our expertise 
          spans custom web development, AI integration, platform maintenance, and comprehensive capability 
          building—delivering end-to-end solutions that combine cutting-edge technology with strategic 
          business insight. With a proven track record of transforming complex challenges into scalable, 
          maintainable systems, we empower businesses to thrive in an increasingly digital landscape.
        </p>
      </motion.div>
    </section>
  )
}

