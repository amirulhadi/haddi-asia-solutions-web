'use client'

import { motion } from 'framer-motion'

export default function MissionVision() {
  return (
    <section className="section-container bg-white">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="section-title gradient-text">
          Mission & Vision
        </h2>
      </motion.div>
      
      <div className="grid md:grid-cols-2 gap-8 md:gap-12 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="card border-l-4 border-primary"
        >
          <h3 className="text-3xl font-bold mb-4 text-primary">Mission</h3>
          <p className="text-lg leading-relaxed text-gray-700">
            To empower businesses across Asia with world-class digital solutions that drive growth,
            efficiency, and competitive advantage. We deliver scalable, AI-enabled platforms and
            systems that transform how organizations operate, compete, and serve their customers.
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="card border-l-4 border-secondary"
        >
          <h3 className="text-3xl font-bold mb-4 text-secondary">Vision</h3>
          <p className="text-lg leading-relaxed text-gray-700">
            To become the region's most trusted technology partner, recognized for excellence in
            digital transformation, AI enablement, and sustainable business growth. We envision a
            future where every organization we serve achieves unprecedented scalability and innovation
            through intelligent, purpose-built technology solutions.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

