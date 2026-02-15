'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button, Card } from '@/components/hans';
import { 
  TrendingUp,
  ArrowRight
} from 'lucide-react';
import { ScrollReveal } from '@/components/animations/ScrollReveal';
import { StaggerContainer, StaggerItem } from '@/components/animations/StaggerContainer';

export default function Portfolio() {
  const additionalProjects = [
    {
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80',
      title: 'Financial Services Dashboard',
      description: 'Reduced reporting time by 78% for a wealth management firm with automated KPI tracking and client portfolio analytics.',
    },
    {
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80',
      title: 'Healthcare Analytics',
      description: 'Improved patient outcomes and reduced costs by 31% through predictive analytics and operational intelligence platform.',
    },
    {
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
      title: 'Manufacturing Operations',
      description: 'Increased production efficiency by 45% with real-time monitoring, predictive maintenance, and quality control analytics.',
    },
    {
      image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&q=80',
      title: 'SaaS Company Growth',
      description: 'Scaled revenue 3x in 18 months through customer analytics, churn prediction, and expansion opportunity identification.',
    },
    {
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80',
      title: 'Real Estate Platform',
      description: 'Enhanced property matching accuracy by 67% using AI-powered recommendation engine and market trend analysis.',
    },
    {
      image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&q=80',
      title: 'Education Technology',
      description: 'Increased student engagement by 56% through learning analytics platform and personalized recommendation system.',
    },
  ];

  const testimonials = [
    {
      quote: "HANS transformed our revenue operations. We went from flying blind to having complete visibility in just 8 weeks. The ROI has been incredible.",
      author: "Sarah Johnson",
      role: "CEO, RetailCo",
    },
    {
      quote: "The pipeline visibility system has been a game-changer. Our win rate improved dramatically and forecasting is now actually reliable.",
      author: "Michael Chen",
      role: "VP Sales, ConsultPro",
    },
    {
      quote: "Finally, a partner who understands both technology and business. The customer intelligence platform they built has driven significant growth.",
      author: "Emily Rodriguez",
      role: "Founder, ShopElite",
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-hans-navy to-[#0a1a35] text-white py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <ScrollReveal>
            <p className="text-hans-teal font-semibold mb-4 tracking-wide uppercase text-sm">
              Our Portfolio
            </p>
            <h1 className="text-white mb-6 max-w-4xl mx-auto">
              Real businesses, real results
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Explore how we've helped companies across industries transform their revenue operations and achieve measurable growth.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: '50+', label: 'Projects Delivered' },
              { value: '95%', label: 'Client Satisfaction' },
              { value: '$2.4M', label: 'Avg. Revenue Impact' },
              { value: '12 wks', label: 'Avg. Implementation' },
            ].map((stat, index) => (
              <StaggerItem key={index}>
                <div className="text-center">
                  <div className="text-4xl font-bold text-hans-teal mb-2">{stat.value}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Featured Case Study - Retail */}
      <section className="py-24 bg-hans-grey">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              <div className="h-64 lg:h-auto relative">
                <Image 
                  src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200&q=80" 
                  alt="Retail Analytics" 
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <ScrollReveal delay={0.1} direction="right">
                <div className="p-12">
                  <div className="inline-block bg-hans-teal/10 text-hans-teal px-4 py-1 rounded-full text-sm font-semibold mb-4">
                    Retail
                  </div>
                  <h2 className="mb-4">Multi-Location Retail Chain</h2>
                  <p className="text-xl text-gray-700 mb-6">
                    Increased revenue visibility by 85% and reduced inventory costs by 23% with real-time sales tracking across 24 locations.
                  </p>
                  
                  <div className="space-y-4 mb-8">
                    <div>
                      <h4 className="font-semibold mb-2">The Challenge</h4>
                      <p className="text-gray-600">
                        Sales data was siloed across multiple POS systems. Management had no real-time visibility into performance, leading to overstocking in some locations and stockouts in others.
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold mb-2">The Solution</h4>
                      <p className="text-gray-600">
                        Unified Revenue Visibility System that consolidated all POS data into a single dashboard, with real-time inventory tracking, automated reordering, and predictive demand forecasting.
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold mb-2">The Results</h4>
                      <div className="grid grid-cols-2 gap-4 mt-3">
                        <Card variant="dashboard" stats={[{ label: 'Revenue Visibility', value: '+85%' }]} />
                        <Card variant="dashboard" stats={[{ label: 'Cost Reduction', value: '23%' }]} />
                        <Card variant="dashboard" stats={[{ label: 'Stock Accuracy', value: '98%' }]} />
                        <Card variant="dashboard" stats={[{ label: 'Time Saved', value: '15hrs/wk' }]} />
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Case Study - Service Business */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="bg-hans-grey rounded-2xl shadow-xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              <ScrollReveal delay={0.1} direction="left">
                <div className="p-12 order-2 lg:order-1">
                  <div className="inline-block bg-hans-orange/10 text-hans-orange px-4 py-1 rounded-full text-sm font-semibold mb-4">
                    Professional Services
                  </div>
                  <h2 className="mb-4">Consulting Firm Pipeline Transformation</h2>
                  <p className="text-xl text-gray-700 mb-6">
                    Improved deal closure rate by 41% and forecasting accuracy by 67% through automated pipeline management and AI-powered insights.
                  </p>
                  
                  <div className="space-y-4 mb-8">
                    <div>
                      <h4 className="font-semibold mb-2">The Challenge</h4>
                      <p className="text-gray-600">
                        The firm's sales team was managing opportunities across email, spreadsheets, and CRM. Deals fell through cracks, forecasts were inaccurate, and leadership lacked visibility.
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold mb-2">The Solution</h4>
                      <p className="text-gray-600">
                        Implemented Pipeline Visibility System with automated deal tracking, health scoring, and predictive win probability. Integrated with existing CRM and communication tools.
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold mb-2">The Results</h4>
                      <div className="grid grid-cols-2 gap-4 mt-3">
                        <Card variant="dashboard" stats={[{ label: 'Win Rate', value: '+41%' }]} />
                        <Card variant="dashboard" stats={[{ label: 'Forecast Accuracy', value: '+67%' }]} />
                        <Card variant="dashboard" stats={[{ label: 'Deal Velocity', value: '-28%' }]} />
                        <Card variant="dashboard" stats={[{ label: 'Revenue Growth', value: '+34%' }]} />
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
              
              <div className="h-64 lg:h-auto relative order-1 lg:order-2">
                <Image 
                  src="https://images.unsplash.com/photo-1556761175-b413da4baf72?w=1200&q=80" 
                  alt="Service Business" 
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Case Study - E-commerce */}
      <section className="py-24 bg-hans-grey">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              <div className="h-64 lg:h-auto relative">
                <Image 
                  src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=1200&q=80" 
                  alt="E-commerce" 
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <ScrollReveal delay={0.1} direction="right">
                <div className="p-12">
                  <div className="inline-block bg-hans-teal/10 text-hans-teal px-4 py-1 rounded-full text-sm font-semibold mb-4">
                    E-commerce
                  </div>
                  <h2 className="mb-4">Online Retailer Customer Intelligence</h2>
                  <p className="text-xl text-gray-700 mb-6">
                    Unified data from 5 platforms to achieve 360° customer view, boosting repeat purchases by 34% and customer lifetime value by 52%.
                  </p>
                  
                  <div className="space-y-4 mb-8">
                    <div>
                      <h4 className="font-semibold mb-2">The Challenge</h4>
                      <p className="text-gray-600">
                        Customer data was scattered across Shopify, email marketing, social ads, analytics, and support tickets. No unified view of customer behavior or preferences.
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold mb-2">The Solution</h4>
                      <p className="text-gray-600">
                        Built Customer Intelligence Platform that integrated all data sources, created customer segments, automated personalized marketing, and predicted churn risk.
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold mb-2">The Results</h4>
                      <div className="grid grid-cols-2 gap-4 mt-3">
                        <Card variant="dashboard" stats={[{ label: 'Repeat Purchases', value: '+34%' }]} />
                        <Card variant="dashboard" stats={[{ label: 'Customer LTV', value: '+52%' }]} />
                        <Card variant="dashboard" stats={[{ label: 'Churn Reduction', value: '-45%' }]} />
                        <Card variant="dashboard" stats={[{ label: 'Marketing ROI', value: '+89%' }]} />
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Case Studies Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="mb-4">More success stories</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                See how we've helped businesses across industries achieve their goals.
              </p>
            </div>
          </ScrollReveal>
          
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {additionalProjects.map((project, index) => (
              <StaggerItem key={index}>
                <Card
                  variant="portfolio"
                  image={project.image}
                  title={project.title}
                  description={project.description}
                  onClick={() => {}}
                />
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-hans-grey">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="mb-4">What our clients say</h2>
            </div>
          </ScrollReveal>
          
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <StaggerItem key={index}>
                <div className="bg-white rounded-xl p-8 shadow-md">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-hans-orange fill-current" viewBox="0 0 20 20">
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4 italic">
                    "{testimonial.quote}"
                  </p>
                  <div className="font-semibold">{testimonial.author}</div>
                  <div className="text-sm text-gray-500">{testimonial.role}</div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-hans-navy to-[#0a1a35] text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="text-white mb-6">Ready to write your success story?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how we can help you achieve similar results for your business.
            </p>
            <Link href="/contact">
              <Button variant="teal" className="group">
                Book Your Strategy Call
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </Button>
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}

