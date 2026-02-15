'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/hans';
import { ScrollReveal } from '@/components/animations/ScrollReveal';

interface CTABannerProps {
  title?: string;
  description?: string;
  buttonText?: string;
  buttonHref?: string;
  variant?: 'teal' | 'orange' | 'navy';
}

export function CTABanner({ 
  title = "Ready to gain revenue visibility?",
  description = "Book a free strategy call to discover how our Revenue Visibility System can transform your business.",
  buttonText = "Book Strategy Call",
  buttonHref = "/contact",
  variant = 'navy'
}: CTABannerProps) {
  const gradients = {
    teal: 'from-hans-teal to-hans-teal/80',
    orange: 'from-hans-orange to-hans-orange/80',
    navy: 'from-hans-navy to-[#0a1a35]',
  };
  
  return (
    <section className={`bg-gradient-to-r ${gradients[variant]} text-white py-16 my-16 rounded-2xl mx-6 lg:mx-8`}>
      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <ScrollReveal>
          <h2 className="text-white mb-4">
            {title}
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            {description}
          </p>
          <Link href={buttonHref}>
            <Button 
              variant={variant === 'navy' ? 'teal' : 'primary'}
              className={`group ${variant === 'navy' ? '' : 'bg-white text-hans-navy hover:bg-gray-100'}`}
            >
              {buttonText}
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </Button>
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
}

