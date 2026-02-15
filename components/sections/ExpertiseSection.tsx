'use client';

import React from 'react';
import Link from 'next/link';
import { Database, Bot, Settings, Lightbulb } from 'lucide-react';
import { Button } from '@/components/hans';
import { ScrollReveal } from '@/components/animations/ScrollReveal';
import { StaggerContainer, StaggerItem } from '@/components/animations/StaggerContainer';

export function ExpertiseSection() {
  const pillars = [
    {
      icon: <Database size={40} />,
      title: 'Data & Analytics',
      description: 'Transform raw data into strategic insights with advanced analytics and visualization.',
      color: 'teal',
    },
    {
      icon: <Bot size={40} />,
      title: 'AI & Automation',
      description: 'Leverage artificial intelligence to automate processes and predict outcomes.',
      color: 'orange',
    },
    {
      icon: <Settings size={40} />,
      title: 'Digital Systems',
      description: 'Build scalable platforms and integrate tools for seamless operations.',
      color: 'teal',
    },
    {
      icon: <Lightbulb size={40} />,
      title: 'Strategic Advisory',
      description: 'Get expert guidance on technology strategy, roadmaps, and execution.',
      color: 'orange',
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-16">
            <p className="text-hans-teal font-semibold mb-2 tracking-wide uppercase text-sm">Our Expertise</p>
            <h2 className="mb-4">Four pillars of modern business consulting</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive solutions that cover every aspect of your digital transformation journey.
            </p>
          </div>
        </ScrollReveal>
        
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pillars.map((pillar, index) => (
            <StaggerItem key={index}>
              <div className="text-center">
                <div className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl mb-6 ${
                  pillar.color === 'teal' ? 'bg-hans-teal/10' : 'bg-hans-orange/10'
                }`}>
                  <div className={pillar.color === 'teal' ? 'text-hans-teal' : 'text-hans-orange'}>
                    {pillar.icon}
                  </div>
                </div>
                <h3 className="mb-3">{pillar.title}</h3>
                <p className="text-gray-600">
                  {pillar.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
        
        <ScrollReveal delay={0.3}>
          <div className="text-center mt-12">
            <Link href="/services">
              <Button variant="teal">Explore All Services</Button>
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

