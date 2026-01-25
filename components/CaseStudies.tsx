'use client'

import { motion } from 'framer-motion'

const caseStudies = [
  {
    title: 'E-Commerce Platform Transformation',
    description: 'A leading retail company in Southeast Asia engaged Haddi Asia Solutions to modernize their legacy e-commerce platform. We architected and deployed a scalable Next.js-based solution with integrated AI-powered recommendation engines, resulting in a 40% increase in conversion rates and 60% reduction in page load times. The new platform handles 10x the traffic volume while maintaining 99.9% uptime.',
    metrics: ['40% increase in conversion', '60% faster load times', '10x traffic capacity'],
    color: 'primary',
  },
  {
    title: 'AI-Powered Analytics Dashboard',
    description: 'A financial services firm needed to integrate AI capabilities into their existing analytics infrastructure. We developed a custom ML pipeline that processes real-time transaction data, providing predictive insights that improved fraud detection by 35%. The solution is built on AWS infrastructure with automated scaling, ensuring consistent performance during peak usage periods.',
    metrics: ['35% fraud detection improvement', 'Real-time processing', 'Automated scaling'],
    color: 'secondary',
  },
  {
    title: 'Corporate Training & Upskilling Program',
    description: 'A technology company partnered with us to upskill 50+ developers in modern web development and AI fundamentals. Through a comprehensive 12-week program covering Next.js, TypeScript, and machine learning basics, the team achieved a 80% improvement in development velocity and successfully launched three new AI-enabled features within six months.',
    metrics: ['80% velocity improvement', '50+ developers trained', '3 AI features launched'],
    color: 'primary',
  },
]

export default function CaseStudies() {
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
          Case Studies
        </h2>
        <p className="section-subtitle">
          Real results from real partnerships
        </p>
      </motion.div>
      
      <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {caseStudies.map((study, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="card relative overflow-hidden"
          >
            <div className={`absolute top-0 left-0 w-full h-1 ${study.color === 'primary' ? 'bg-primary' : 'bg-secondary'}`}></div>
            <h3 className={`text-2xl font-bold mb-4 ${study.color === 'primary' ? 'text-primary' : 'text-secondary'}`}>
              {study.title}
            </h3>
            <p className="text-base leading-relaxed text-gray-700 mb-6">
              {study.description}
            </p>
            <div className="pt-4 border-t border-neutral-light">
              <h4 className="font-semibold mb-2 text-gray-900">Key Results:</h4>
              <ul className="space-y-1">
                {study.metrics.map((metric, idx) => (
                  <li key={idx} className="text-sm text-gray-700 flex items-center">
                    <span className={`mr-2 ${study.color === 'primary' ? 'text-primary' : 'text-secondary'}`}>✓</span>
                    {metric}
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

