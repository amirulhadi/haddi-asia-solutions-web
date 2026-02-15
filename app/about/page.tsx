'use client';

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/hans';
import { 
  Target,
  Heart,
  CheckCircle,
  TrendingUp,
  Lightbulb,
  Shield,
  ArrowRight
} from 'lucide-react';
import { ScrollReveal } from '@/components/animations/ScrollReveal';
import { StaggerContainer, StaggerItem } from '@/components/animations/StaggerContainer';
import { motion } from 'framer-motion';

export default function About() {
  const values = [
    {
      icon: <TrendingUp size={32} />,
      title: 'Results-Driven',
      description: 'We measure success by client outcomes, not hours billed. Every project must deliver measurable ROI.',
      color: 'teal',
    },
    {
      icon: <Heart size={32} />,
      title: 'Client-Centric',
      description: 'Your success is our success. We become an extension of your team, invested in your long-term growth.',
      color: 'orange',
    },
    {
      icon: <Lightbulb size={32} />,
      title: 'Innovation',
      description: 'We stay at the forefront of technology, constantly exploring new tools and approaches to solve problems.',
      color: 'teal',
    },
    {
      icon: <Shield size={32} />,
      title: 'Integrity',
      description: 'Honest advice, transparent pricing, and ethical practices. We do what\'s right for clients, always.',
      color: 'orange',
    },
  ];

  const whyChoose = [
    {
      title: 'Hybrid Expertise',
      description: "We're both strategists and builders. We don't just advise—we roll up our sleeves and implement solutions.",
    },
    {
      title: 'Rapid Deployment',
      description: 'Average implementation time of 12 weeks, not months or years. You see results fast.',
    },
    {
      title: 'Proven Methodology',
      description: 'Battle-tested frameworks refined across 50+ successful implementations.',
    },
    {
      title: 'ROI Guarantee',
      description: "We're so confident in our approach, we tie our success to yours with performance-based pricing options.",
    },
    {
      title: 'Technology Agnostic',
      description: 'We recommend the best tools for your needs, not what pays us the highest commission.',
    },
    {
      title: 'Ongoing Support',
      description: "We don't disappear after launch. Continuous optimization and support are part of every engagement.",
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-hans-navy to-[#0a1a35] text-white py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-hans-teal font-semibold mb-4 tracking-wide uppercase text-sm">
                About HANS
              </p>
              <h1 className="text-white mb-6">
                Bridging technology and business to turn data into actionable growth
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed">
                We're a modern consulting firm that combines deep technical expertise with strategic business thinking to help companies make better decisions through data.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <ScrollReveal delay={0.1}>
              <div>
                <div className="inline-flex items-center justify-center w-16 h-16 bg-hans-teal/10 rounded-xl mb-6">
                  <Target className="text-hans-teal" size={32} />
                </div>
                <h2 className="mb-4">Our Mission</h2>
                <p className="text-xl text-gray-700 mb-4">
                  To empower businesses with revenue intelligence systems that turn complexity into clarity, chaos into confidence, and data into decisions.
                </p>
                <p className="text-gray-600">
                  We believe every business deserves access to enterprise-grade analytics and decision intelligence, regardless of size or industry. Our mission is to democratize data-driven decision making and help companies of all sizes compete and win.
                </p>
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={0.2}>
              <div>
                <div className="inline-flex items-center justify-center w-16 h-16 bg-hans-orange/10 rounded-xl mb-6">
                  <Lightbulb className="text-hans-orange" size={32} />
                </div>
                <h2 className="mb-4">Our Vision</h2>
                <p className="text-xl text-gray-700 mb-4">
                  A world where every business leader has real-time visibility into their revenue operations and the confidence to make bold, data-backed decisions.
                </p>
                <p className="text-gray-600">
                  We envision a future where businesses operate with complete transparency, where gut feelings are validated by data, and where growth is predictable and sustainable. That's the world we're building, one client at a time.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-24 bg-hans-grey">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="mb-4">Our Story</h2>
            </div>
          </ScrollReveal>
          
          <ScrollReveal delay={0.1}>
            <div className="bg-white rounded-2xl shadow-lg p-12">
              <p className="text-xl text-gray-700 mb-6 leading-relaxed">
                HANS Consulting Group was founded on a simple observation: most businesses are drowning in data but starving for insights.
              </p>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                After years of working with companies across industries, our founder Mohd Amirulhadi noticed a common pattern. Sales and revenue data was scattered across dozens of tools. Leadership teams were making critical decisions based on outdated spreadsheets and gut feelings. Talented teams were wasting hours compiling reports instead of driving growth.
              </p>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                The solution wasn't just another dashboard or analytics tool. What businesses needed was a complete revenue intelligence layer—a system that could unify data, surface insights, and recommend actions. But building such systems required both deep technical expertise and an understanding of business operations.
              </p>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                That's why HANS was created as a "hybrid consulting" firm. We don't just advise—we build. We don't just strategize—we implement. We bridge the gap between technology and business, delivering complete solutions that drive real, measurable results.
              </p>
              
              <p className="text-xl text-gray-700 font-medium">
                Today, we've helped over 50 companies transform their revenue operations, delivering an average ROI of 400% within the first year.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-hans-grey">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="text-hans-teal font-semibold mb-2 tracking-wide uppercase text-sm">Our Values</p>
              <h2 className="mb-4">What drives us every day</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                These principles guide how we work with clients and build solutions.
              </p>
            </div>
          </ScrollReveal>
          
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <StaggerItem key={index}>
                <div className="bg-white rounded-xl p-8 text-center shadow-md hover:shadow-lg transition-shadow">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full mb-4 ${
                    value.color === 'teal' ? 'bg-hans-teal/10' : 'bg-hans-orange/10'
                  }`}>
                    <div className={value.color === 'teal' ? 'text-hans-teal' : 'text-hans-orange'}>
                      {value.icon}
                    </div>
                  </div>
                  <h4 className="font-semibold mb-3">{value.title}</h4>
                  <p className="text-gray-600 text-sm">
                    {value.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Why Choose HANS */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="mb-4">Why choose HANS?</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We're not your typical consulting firm. Here's what makes us different.
              </p>
            </div>
          </ScrollReveal>
          
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {whyChoose.map((item, index) => (
              <StaggerItem key={index}>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-hans-teal/10 rounded-lg flex items-center justify-center">
                      <CheckCircle className="text-hans-teal" size={24} />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">{item.title}</h4>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Stats */}
      <section className="py-24 bg-hans-grey">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="mb-4">HANS by the numbers</h2>
            </div>
          </ScrollReveal>
          
          <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: '50+', label: 'Successful Projects' },
              { value: '95%', label: 'Client Satisfaction' },
              { value: '400%', label: 'Average ROI' },
              { value: '12wks', label: 'Avg. Implementation' },
            ].map((stat, index) => (
              <StaggerItem key={index}>
                <div className="text-center">
                  <div className="text-5xl font-bold text-hans-teal mb-2">{stat.value}</div>
                  <div className="text-gray-600">{stat.label}</div>
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
            <h2 className="text-white mb-6">Ready to work together?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how HANS can help transform your revenue operations and drive measurable growth.
            </p>
            <Link href="/contact">
              <Button variant="teal" className="group">
                Schedule a Strategy Call
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </Button>
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}

