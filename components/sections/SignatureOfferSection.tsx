'use client';

import React from 'react';
import Link from 'next/link';
import { CheckCircle } from 'lucide-react';
import { Button } from '@/components/hans';
import { ScrollReveal } from '@/components/animations/ScrollReveal';
import { motion } from 'framer-motion';

export function SignatureOfferSection() {
  const features = [
    {
      title: 'Know where revenue comes from',
      description: 'Track every revenue stream, product line, and customer segment with precision.',
    },
    {
      title: 'Track sales performance in real time',
      description: 'Live dashboards show you exactly how your team is performing, updated instantly.',
    },
    {
      title: 'Forecast growth with confidence',
      description: 'AI-powered predictions help you plan resources and set realistic targets.',
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-16">
            <p className="text-hans-teal font-semibold mb-2 tracking-wide uppercase text-sm">Signature Product</p>
            <h2 className="mb-4">Revenue Visibility System™</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The complete solution for modern businesses who want to stop guessing and start growing.
            </p>
          </div>
        </ScrollReveal>
        
        <div className="bg-gradient-to-br from-hans-navy to-[#0a1a35] rounded-2xl p-12 lg:p-16 text-white mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal delay={0.1}>
              <div>
                <h3 className="text-white mb-8">What You Get:</h3>
                
                <div className="space-y-6">
                  {features.map((feature, index) => (
                    <motion.div
                      key={index}
                      className="flex items-start space-x-4"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <CheckCircle className="text-hans-teal flex-shrink-0 mt-1" size={24} />
                      <div>
                        <h4 className="text-white font-semibold mb-1">{feature.title}</h4>
                        <p className="text-gray-300">{feature.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
                
                <div className="mt-10">
                  <Link href="/contact">
                    <Button variant="teal" size="default">
                      Get Your Revenue Assessment
                    </Button>
                  </Link>
                </div>
              </div>
            </ScrollReveal>
            
            {/* Dashboard Mockup */}
            <ScrollReveal delay={0.2} direction="right">
              <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm border border-white/20">
                <div className="space-y-4">
                  <div className="flex items-center justify-between mb-4">
                    <div className="h-4 w-32 bg-white/30 rounded"></div>
                    <div className="h-4 w-20 bg-hans-teal/50 rounded"></div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <motion.div 
                      className="bg-white/10 rounded-lg p-4"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3, type: "spring" }}
                    >
                      <div className="text-3xl font-bold text-hans-teal mb-1">$124K</div>
                      <div className="text-sm text-gray-300">Monthly Revenue</div>
                    </motion.div>
                    <motion.div 
                      className="bg-white/10 rounded-lg p-4"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4, type: "spring" }}
                    >
                      <div className="text-3xl font-bold text-hans-orange mb-1">+32%</div>
                      <div className="text-sm text-gray-300">Growth Rate</div>
                    </motion.div>
                  </div>
                  
                  <div className="bg-white/10 rounded-lg p-4">
                    <div className="h-24 flex items-end justify-between space-x-2">
                      {[50, 70, 60, 85, 100].map((height, index) => (
                        <motion.div
                          key={index}
                          className="w-full bg-hans-teal/40 rounded-t"
                          initial={{ height: 0 }}
                          whileInView={{ height: `${height}%` }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.5 + index * 0.1, duration: 0.8, ease: "easeOut" }}
                        />
                      ))}
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="h-2 w-24 bg-white/30 rounded"></div>
                      <div className="h-2 w-16 bg-white/30 rounded"></div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="h-2 w-32 bg-white/30 rounded"></div>
                      <div className="h-2 w-12 bg-white/30 rounded"></div>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}

