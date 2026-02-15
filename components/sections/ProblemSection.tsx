'use client';

import React from 'react';
import { AlertCircle } from 'lucide-react';
import { ScrollReveal } from '@/components/animations/ScrollReveal';
import { StaggerContainer, StaggerItem } from '@/components/animations/StaggerContainer';

export function ProblemSection() {
  const problems = [
    {
      title: 'Sales and revenue data scattered across tools',
      description: 'No single source of truth. Teams waste hours compiling reports manually.',
    },
    {
      title: 'Lack of pipeline visibility',
      description: "Can't see which deals are stalling or which reps need support.",
    },
    {
      title: 'Leadership relying on Excel',
      description: 'Outdated spreadsheets lead to errors and missed opportunities.',
    },
    {
      title: 'Slow decision-making based on assumptions',
      description: 'Gut feelings replace data, leading to costly mistakes.',
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="mb-6">Most companies are flying blind.</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Without clear visibility into revenue and performance data, businesses struggle to make confident decisions.
            </p>
          </div>
        </ScrollReveal>
        
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {problems.map((problem, index) => (
            <StaggerItem key={index}>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-12 h-12 bg-red-50 rounded-lg flex items-center justify-center">
                    <AlertCircle className="text-red-500" size={24} />
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">{problem.title}</h4>
                  <p className="text-gray-600">{problem.description}</p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}

