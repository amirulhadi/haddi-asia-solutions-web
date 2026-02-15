'use client';

import React from 'react';
import Link from 'next/link';
import { Button, Card } from '@/components/hans';
import { 
  Database, 
  TrendingUp, 
  Target, 
  Lightbulb,
  BarChart3,
  LineChart,
  PieChart,
  Activity,
  Bot,
  Settings,
  CheckCircle,
  ArrowRight
} from 'lucide-react';
import { ScrollReveal } from '@/components/animations/ScrollReveal';
import { StaggerContainer, StaggerItem } from '@/components/animations/StaggerContainer';

export default function Services() {
  const coreServices = [
    {
      icon: <BarChart3 size={32} />,
      title: 'Sales Performance Dashboard',
      description: 'Real-time visibility into your sales team\'s performance, deal pipeline, and conversion metrics. Track what matters and make data-driven decisions instantly.',
      features: [
        'Live performance tracking by rep, team, and region',
        'Custom KPIs and goal tracking',
        'Automated daily/weekly reports',
        'Mobile access for on-the-go insights',
      ],
      color: 'teal',
    },
    {
      icon: <LineChart size={32} />,
      title: 'Pipeline Visibility System',
      description: 'Never lose track of opportunities again. See your entire sales pipeline from lead to close, with automatic alerts for deals that need attention.',
      features: [
        'Visual pipeline stages and deal flow',
        'Bottleneck identification and alerts',
        'Win/loss analysis and insights',
        'Integration with CRM and sales tools',
      ],
      color: 'orange',
    },
    {
      icon: <PieChart size={32} />,
      title: 'Revenue Forecasting',
      description: 'Predict future revenue with AI-powered models that learn from your historical data and market trends. Plan with confidence.',
      features: [
        'AI-driven predictive modeling',
        'Scenario planning and what-if analysis',
        'Seasonal trend identification',
        'Accuracy tracking and model improvement',
      ],
      color: 'teal',
    },
    {
      icon: <Activity size={32} />,
      title: 'Decision Intelligence Platform',
      description: 'Turn insights into action. Our platform doesn\'t just show you data—it tells you exactly what to do next to maximize revenue.',
      features: [
        'Automated recommendations and alerts',
        'Priority-ranked action items',
        'Impact scoring for initiatives',
        'Executive briefings and summaries',
      ],
      color: 'orange',
    },
  ];

  const expertisePillars = [
    {
      icon: <Database size={40} />,
      title: 'Data & Analytics',
      items: [
        'Data warehouse design & implementation',
        'Business intelligence dashboards',
        'Advanced analytics & reporting',
        'Data governance & quality',
      ],
    },
    {
      icon: <Bot size={40} />,
      title: 'AI & Automation',
      items: [
        'Process automation & RPA',
        'Machine learning model development',
        'Predictive analytics solutions',
        'Natural language processing',
      ],
    },
    {
      icon: <Settings size={40} />,
      title: 'Digital Systems',
      items: [
        'Platform architecture & design',
        'System integration & APIs',
        'Cloud migration & optimization',
        'Custom software development',
      ],
    },
    {
      icon: <Lightbulb size={40} />,
      title: 'Strategic Advisory',
      items: [
        'Technology roadmap planning',
        'Digital transformation strategy',
        'Vendor selection & management',
        'Change management & training',
      ],
    },
  ];

  const processSteps = [
    {
      number: '1',
      title: 'Discovery',
      description: 'We analyze your current systems, data, and processes to identify opportunities.',
    },
    {
      number: '2',
      title: 'Design',
      description: 'Custom solution design tailored to your business needs and goals.',
    },
    {
      number: '3',
      title: 'Implementation',
      description: 'Rapid deployment with minimal disruption to your operations.',
    },
    {
      number: '4',
      title: 'Optimization',
      description: 'Ongoing support, training, and continuous improvement.',
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-hans-navy to-[#0a1a35] text-white py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <ScrollReveal>
            <p className="text-hans-teal font-semibold mb-4 tracking-wide uppercase text-sm">
              Our Services
            </p>
            <h1 className="text-white mb-6 max-w-4xl mx-auto">
              Comprehensive solutions for data-driven growth
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              From revenue analytics to AI automation, we provide end-to-end consulting services that transform how modern businesses operate and grow.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Core Services - Revenue Intelligence */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="text-hans-teal font-semibold mb-2 tracking-wide uppercase text-sm">Core Services</p>
              <h2 className="mb-4">Revenue Intelligence & Analytics</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our flagship services designed to give you complete visibility and control over your revenue operations.
              </p>
            </div>
          </ScrollReveal>
          
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            {coreServices.map((service, index) => (
              <StaggerItem key={index}>
                <div className="bg-hans-grey rounded-2xl p-10">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl mb-6 ${
                    service.color === 'teal' ? 'bg-hans-teal' : 'bg-hans-orange'
                  }`}>
                    <div className="text-white">
                      {service.icon}
                    </div>
                  </div>
                  <h3 className="mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start space-x-3">
                        <CheckCircle className="text-hans-teal flex-shrink-0 mt-1" size={20} />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href="/contact">
                    <Button variant={service.color === 'teal' ? 'teal' : 'orange'} size="small">
                      Learn More
                    </Button>
                  </Link>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Consulting Pillars */}
      <section className="py-24 bg-hans-grey">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="text-hans-teal font-semibold mb-2 tracking-wide uppercase text-sm">Extended Services</p>
              <h2 className="mb-4">Four pillars of expertise</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Beyond revenue intelligence, we offer comprehensive consulting across all aspects of modern business technology.
              </p>
            </div>
          </ScrollReveal>
          
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {expertisePillars.map((pillar, index) => (
              <StaggerItem key={index}>
                <Card 
                  variant="service"
                  icon={pillar.icon}
                  title={pillar.title}
                >
                  <ul className="space-y-2 text-gray-600 mt-4">
                    {pillar.items.map((item, idx) => (
                      <li key={idx}>• {item}</li>
                    ))}
                  </ul>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="mb-4">Our proven process</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                A structured approach that delivers results in weeks, not months.
              </p>
            </div>
          </ScrollReveal>
          
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <StaggerItem key={index}>
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-hans-teal text-white rounded-full font-bold text-2xl mb-4">
                    {step.number}
                  </div>
                  <h4 className="font-semibold mb-2">{step.title}</h4>
                  <p className="text-gray-600 text-sm">
                    {step.description}
                  </p>
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
            <h2 className="text-white mb-6">Ready to transform your business?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Book a free strategy call to discover which solutions are right for your business.
            </p>
            <Link href="/contact">
              <Button variant="teal" className="group">
                Schedule Your Strategy Call
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </Button>
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}

