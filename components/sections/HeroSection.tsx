'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Database, TrendingUp } from 'lucide-react';
import { Button } from '@/components/hans';
import { ScrollReveal } from '@/components/animations/ScrollReveal';
import { motion } from 'framer-motion';

export function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-hans-navy via-hans-navy to-[#0a1a35] text-white py-32 lg:py-40 overflow-hidden">
      {/* Abstract Background Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-10">
        <motion.div 
          className="absolute top-1/4 right-1/4 w-96 h-96 bg-hans-teal rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div 
          className="absolute bottom-1/4 right-1/3 w-72 h-72 bg-hans-orange rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
      </div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <ScrollReveal delay={0.1}>
            <div className="space-y-8">
              <div>
                <p className="text-hans-teal font-semibold mb-4 tracking-wide uppercase text-sm">
                  HANS Consulting Group
                </p>
                <h1 className="text-white mb-6">
                  Turning business chaos into data-driven decisions.
                </h1>
                <p className="text-xl text-gray-300 leading-relaxed">
                  HANS designs Revenue Visibility Systems, analytics platforms, and decision intelligence for modern businesses.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact">
                  <Button 
                    variant="teal"
                    className="group"
                  >
                    Book Strategy Call
                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                  </Button>
                </Link>
                <Link href="/portfolio">
                  <Button 
                    variant="secondary"
                    className="border-white text-white hover:bg-white hover:text-hans-navy"
                  >
                    Explore Demo
                  </Button>
                </Link>
              </div>
            </div>
          </ScrollReveal>
          
          {/* Abstract Data Visualization */}
          <ScrollReveal delay={0.3} direction="right">
            <div className="relative">
              <div className="bg-gradient-to-br from-hans-teal/20 to-hans-orange/20 rounded-2xl p-12 backdrop-blur-sm border border-white/10">
                <div className="space-y-4">
                  {/* Network Nodes */}
                  <div className="flex items-center justify-between mb-6">
                    <motion.div 
                      className="w-16 h-16 bg-hans-teal/30 rounded-full flex items-center justify-center backdrop-blur-sm"
                      animate={{ rotate: [0, 360] }}
                      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    >
                      <Database className="text-white" size={28} />
                    </motion.div>
                    <div className="flex-1 h-0.5 bg-white/20 mx-4"></div>
                    <motion.div 
                      className="w-16 h-16 bg-hans-orange/30 rounded-full flex items-center justify-center backdrop-blur-sm"
                      animate={{ rotate: [360, 0] }}
                      transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                    >
                      <TrendingUp className="text-white" size={28} />
                    </motion.div>
                  </div>
                  
                  {/* Dashboard Preview */}
                  <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
                    <div className="flex items-center justify-between mb-4">
                      <div className="h-3 w-24 bg-white/30 rounded"></div>
                      <div className="h-3 w-16 bg-hans-teal/50 rounded"></div>
                    </div>
                    <div className="space-y-2">
                      <div className="h-2 w-full bg-white/20 rounded"></div>
                      <div className="h-2 w-3/4 bg-white/20 rounded"></div>
                      <div className="h-2 w-5/6 bg-white/20 rounded"></div>
                    </div>
                  </div>
                  
                  {/* Chart Visualization */}
                  <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
                    <div className="h-32 flex items-end justify-between space-x-2">
                      {[60, 80, 100, 70, 90].map((height, index) => (
                        <motion.div
                          key={index}
                          className="w-full bg-hans-teal/30 rounded-t"
                          initial={{ height: 0 }}
                          animate={{ height: `${height}%` }}
                          transition={{ delay: 0.5 + index * 0.1, duration: 0.8, ease: "easeOut" }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

