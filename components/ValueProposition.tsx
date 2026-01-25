'use client'

import { motion } from 'framer-motion'

const problems = [
  'Technical Debt & Legacy Systems',
  'AI Integration Challenges',
  'Scalability Bottlenecks',
  'Skill Gaps',
  'Maintenance Overhead',
]

const clients = [
  'Mid-to-Large Enterprises seeking digital transformation',
  'Tech Startups requiring scalable platform development',
  'Organizations looking to integrate AI capabilities',
  'Companies needing ongoing technical support and optimization',
  'Teams requiring upskilling in modern technologies',
]

const advantages = [
  'Proven Expertise',
  'Client-Focused Approach',
  'Scalable Architecture',
  'Comprehensive Support',
  'Regional Expertise',
  'Cutting-Edge Technology',
]

export default function ValueProposition() {
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
          Value Proposition
        </h2>
        <p className="section-subtitle text-gray-400">
          Why organizations choose Haddi Asia Solutions
        </p>
      </motion.div>
      
      <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {/* Problems We Solve */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="card"
        >
          <h3 className="text-2xl font-bold mb-4 text-primary">Problems We Solve</h3>
          <ul className="space-y-3">
            {problems.map((problem, idx) => (
              <li key={idx} className="flex items-start text-gray-700">
                <span className="text-primary mr-2 mt-1">▸</span>
                <span>{problem}</span>
              </li>
            ))}
          </ul>
        </motion.div>
        
        {/* Who We Serve */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="card"
        >
          <h3 className="text-2xl font-bold mb-4 text-secondary">Who We Serve</h3>
          <ul className="space-y-3">
            {clients.map((client, idx) => (
              <li key={idx} className="flex items-start text-gray-700">
                <span className="text-secondary mr-2 mt-1">▸</span>
                <span>{client}</span>
              </li>
            ))}
          </ul>
        </motion.div>
        
        {/* Why Choose Us */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="card"
        >
          <h3 className="text-2xl font-bold mb-4 text-primary">Why Choose Us</h3>
          <ul className="space-y-3">
            {advantages.map((advantage, idx) => (
              <li key={idx} className="flex items-start text-gray-700">
                <span className="text-primary mr-2 mt-1">✓</span>
                <span>{advantage}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  )
}

