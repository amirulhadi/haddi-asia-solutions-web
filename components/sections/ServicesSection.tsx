'use client';

import React from 'react';
import { BarChart3, LineChart, PieChart, Activity } from 'lucide-react';
import { Card } from '@/components/hans';
import { ScrollReveal } from '@/components/animations/ScrollReveal';
import { StaggerContainer, StaggerItem } from '@/components/animations/StaggerContainer';

export function ServicesSection() {
  const services = [
    {
      icon: <BarChart3 size={40} />,
      title: 'Sales Dashboard',
      description: 'Track team performance, deal velocity, and win rates in real-time with intuitive visualizations.',
    },
    {
      icon: <LineChart size={40} />,
      title: 'Pipeline Visibility',
      description: 'See every lead and deal at a glance. Identify bottlenecks before they cost you revenue.',
    },
    {
      icon: <PieChart size={40} />,
      title: 'Revenue Forecasting',
      description: 'Predict future revenue with confidence using AI-powered projections and historical trends.',
    },
    {
      icon: <Activity size={40} />,
      title: 'Decision Intelligence',
      description: 'Turn data into actionable insights. Know exactly what to do next to hit your targets.',
    },
  ];

  return (
    <section className="py-24 bg-hans-grey">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-16">
            <p className="text-hans-teal font-semibold mb-2 tracking-wide uppercase text-sm">The Solution</p>
            <h2 className="mb-4">We build your revenue intelligence layer.</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A unified platform that brings all your business data together, giving you real-time insights to drive growth.
            </p>
          </div>
        </ScrollReveal>
        
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <StaggerItem key={index}>
              <Card
                variant="service"
                icon={service.icon}
                title={service.title}
                description={service.description}
              />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}

