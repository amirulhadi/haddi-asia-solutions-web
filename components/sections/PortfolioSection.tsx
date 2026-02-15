'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Card, Button } from '@/components/hans';
import { ScrollReveal } from '@/components/animations/ScrollReveal';
import { StaggerContainer, StaggerItem } from '@/components/animations/StaggerContainer';

export function PortfolioSection() {
  const projects = [
    {
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80',
      title: 'Retail Analytics Platform',
      description: 'Multi-location retail chain increased revenue visibility by 85% and reduced inventory costs by 23% with real-time sales tracking.',
    },
    {
      image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&q=80',
      title: 'Service Business Dashboard',
      description: 'Professional services firm streamlined pipeline management, improving deal closure rate by 41% and forecasting accuracy by 67%.',
    },
    {
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&q=80',
      title: 'E-commerce Intelligence',
      description: 'Online retailer unified data from 5 platforms, achieving 360° customer view and boosting repeat purchases by 34%.',
    },
  ];

  return (
    <section className="py-24 bg-hans-grey">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-16">
            <p className="text-hans-teal font-semibold mb-2 tracking-wide uppercase text-sm">Success Stories</p>
            <h2 className="mb-4">See our systems in action</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real businesses, real results. Explore how we've helped companies transform their revenue operations.
            </p>
          </div>
        </ScrollReveal>
        
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <StaggerItem key={index}>
              <Card
                variant="portfolio"
                image={project.image}
                title={project.title}
                description={project.description}
                onClick={() => window.location.href = '/portfolio'}
              />
            </StaggerItem>
          ))}
        </StaggerContainer>
        
        <ScrollReveal delay={0.3}>
          <div className="text-center mt-12">
            <Link href="/portfolio">
              <Button variant="secondary">View All Case Studies</Button>
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

