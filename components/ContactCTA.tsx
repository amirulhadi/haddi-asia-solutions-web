'use client'

import { motion } from 'framer-motion'

export default function ContactCTA() {
  return (
    <section className="section-container bg-gradient-to-br from-primary via-secondary to-primary text-white">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto text-center"
      >
        <h2 className="section-title text-white mb-6">
          Ready to Transform Your Digital Infrastructure?
        </h2>
        <p className="text-xl md:text-2xl mb-12 text-accent">
          Contact Haddi Asia Solutions today to discuss how we can help you achieve your technology goals.
        </p>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12 text-left">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-4 text-accent">Contact Information</h3>
            <ul className="space-y-3 text-white">
              <li className="flex items-start">
                <span className="mr-3 text-accent">✉</span>
                <span>contact@haddiasiasolutions.com</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-accent">📞</span>
                <span>+60 X-XXXX XXXX</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-accent">📍</span>
                <span>Kuala Lumpur, Malaysia</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-accent">🌐</span>
                <span>www.haddiasiasolutions.com</span>
              </li>
            </ul>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white/10 backdrop-blur-sm rounded-lg p-6"
          >
            <h3 className="text-2xl font-bold mb-4 text-accent">Schedule a Consultation</h3>
            <p className="text-white mb-6">
              Book a free 30-minute discovery call to explore how our solutions can address your specific challenges and opportunities.
            </p>
            <button className="btn-primary bg-accent text-primary hover:bg-accent-dark w-full">
              Book Discovery Call
            </button>
          </motion.div>
        </div>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex justify-center gap-6 text-neutral-light"
        >
          <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
          <span>•</span>
          <a href="#" className="hover:text-white transition-colors">Twitter</a>
        </motion.div>
        
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 text-neutral-light italic text-lg"
        >
          Haddi Asia Solutions — Building Tomorrow's Digital Infrastructure Today
        </motion.p>
      </motion.div>
    </section>
  )
}

