'use client';

import React from 'react';
import { CheckCircle, Users } from 'lucide-react';
import { Button } from '@/components/hans';
import { ScrollReveal } from '@/components/animations/ScrollReveal';
import { motion } from 'framer-motion';

export function FounderSection() {
  const credentials = [
    '15+ years in data analytics & business intelligence',
    'Certified in advanced analytics & AI solutions',
    'Helped 50+ companies transform their operations',
  ];

  return (
    <section className="py-24 bg-hans-grey">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
            {/* Photo */}
            <ScrollReveal delay={0.1} direction="left">
              <div className="lg:col-span-1 bg-gradient-to-br from-hans-navy to-[#0a1a35] flex items-center justify-center p-12">
                <div className="w-48 h-48 bg-hans-teal/20 rounded-full flex items-center justify-center border-4 border-hans-teal/30">
                  <Users className="text-hans-teal" size={80} />
                </div>
              </div>
            </ScrollReveal>
            
            {/* Content */}
            <ScrollReveal delay={0.2} direction="right">
              <div className="lg:col-span-2 p-12">
                <p className="text-hans-teal font-semibold mb-2 tracking-wide uppercase text-sm">Founder & Hybrid Consultant</p>
                <h2 className="mb-4">Mohd Amirulhadi</h2>
                
                <p className="text-xl text-gray-700 mb-6 font-medium italic">
                  "Bridging technology and business to turn data into actionable growth."
                </p>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  With a unique blend of technical expertise and business acumen, Hadi founded HANS to help companies navigate the complex intersection of data, technology, and revenue operations. His hybrid approach combines hands-on technical implementation with strategic consulting to deliver real, measurable results.
                </p>
                
                <div className="space-y-3">
                  {credentials.map((credential, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center space-x-3"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + index * 0.1 }}
                    >
                      <CheckCircle className="text-hans-teal" size={20} />
                      <span className="text-gray-700">{credential}</span>
                    </motion.div>
                  ))}
                </div>
                
                <div className="mt-8">
                  <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                    <Button variant="secondary" size="small">
                      Connect on LinkedIn
                    </Button>
                  </a>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}

