'use client'

import { motion } from 'framer-motion'

const services = [
  {
    title: 'Digital Systems & Web Platforms',
    description: 'We design and develop custom web applications and digital platforms tailored to your business needs. Our solutions are built for performance, scalability, and user experience—ensuring your digital presence drives real business value.',
    offerings: [
      'Custom web application development',
      'Enterprise platform architecture',
      'E-commerce and marketplace solutions',
      'Content management systems',
      'API design and integration',
    ],
    color: 'primary',
  },
  {
    title: 'Platform Maintenance & Retainers',
    description: 'Ongoing support and optimization ensure your systems remain secure, performant, and aligned with evolving business requirements. Our retainer programs provide proactive maintenance, updates, and strategic enhancements.',
    offerings: [
      '24/7 monitoring and support',
      'Security updates and patches',
      'Performance optimization',
      'Feature enhancements',
      'Technical consulting',
    ],
    color: 'secondary',
  },
  {
    title: 'AI Stabilization & Scalability',
    description: 'We help organizations integrate and scale AI capabilities effectively. From initial implementation to production deployment, we ensure your AI solutions are stable, scalable, and deliver measurable ROI.',
    offerings: [
      'AI strategy and roadmap development',
      'Machine learning model deployment',
      'AI system optimization and tuning',
      'Scalability architecture for AI workloads',
      'AI performance monitoring and analytics',
    ],
    color: 'primary',
  },
  {
    title: 'Corporate Training & Capability Building',
    description: 'Empower your team with the skills needed to leverage modern technology effectively. Our training programs cover AI, web development, system design, and best practices for building and maintaining digital systems.',
    offerings: [
      'AI and machine learning training',
      'Web development bootcamps (Next.js, React, TypeScript)',
      'System architecture and design patterns',
      'DevOps and cloud infrastructure training',
      'Code reviews and technical mentorship',
    ],
    color: 'secondary',
  },
]

export default function Services() {
  return (
    <section className="section-container bg-gray-50">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="section-title gradient-text">
          Core Services
        </h2>
        <p className="section-subtitle">
          Comprehensive solutions for your digital transformation journey
        </p>
      </motion.div>
      
      <div className="grid md:grid-cols-2 gap-8 max-w-7xl mx-auto">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="card"
          >
            <h3 className={`text-2xl font-bold mb-4 ${service.color === 'primary' ? 'text-primary' : 'text-secondary'}`}>
              {service.title}
            </h3>
            <p className="text-base leading-relaxed text-gray-700 mb-6">
              {service.description}
            </p>
            <div>
              <h4 className="font-semibold mb-3 text-gray-900">Key Offerings:</h4>
              <ul className="space-y-2">
                {service.offerings.map((offering, idx) => (
                  <li key={idx} className="flex items-start text-gray-700">
                    <span className={`mr-2 mt-1 ${service.color === 'primary' ? 'text-primary' : 'text-secondary'}`}>▸</span>
                    <span>{offering}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

