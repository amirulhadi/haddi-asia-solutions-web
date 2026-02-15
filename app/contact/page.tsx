'use client';

import React from 'react';
import Link from 'next/link';
import { ContactForm } from '@/components/hans/ContactForm';
import { Button } from '@/components/hans';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Calendar,
  MessageSquare,
  Linkedin,
  Twitter
} from 'lucide-react';
import { ScrollReveal } from '@/components/animations/ScrollReveal';
import { StaggerContainer, StaggerItem } from '@/components/animations/StaggerContainer';

export default function Contact() {
  const contactOptions = [
    {
      icon: <Calendar size={32} />,
      title: 'Book a Strategy Call',
      description: '30-minute free consultation to discuss your needs and explore solutions.',
      buttonText: 'Schedule Now',
      variant: 'teal' as const,
      onClick: () => {},
    },
    {
      icon: <MessageSquare size={32} />,
      title: 'Send a Message',
      description: 'Fill out the form below and we\'ll respond within 24 hours.',
      buttonText: 'Contact Form',
      variant: 'secondary' as const,
      onClick: () => {
        document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
      },
    },
    {
      icon: <Mail size={32} />,
      title: 'Email Us Directly',
      description: 'Prefer email? Send us a note and we\'ll get back to you promptly.',
      buttonText: 'Send Email',
      variant: 'secondary' as const,
      onClick: () => {
        window.location.href = 'mailto:contact@hansconsulting.com';
      },
    },
  ];

  const processSteps = [
    {
      number: '1',
      title: 'Initial Response',
      description: 'We\'ll respond within 24 hours to schedule an introductory call.',
    },
    {
      number: '2',
      title: 'Discovery Call',
      description: '30-minute call to understand your challenges, goals, and current systems.',
    },
    {
      number: '3',
      title: 'Custom Proposal',
      description: 'Tailored solution proposal with timeline, pricing, and expected outcomes.',
    },
    {
      number: '4',
      title: 'Kickoff',
      description: 'Once approved, we start immediately with a detailed discovery phase.',
    },
  ];

  const faqs = [
    {
      question: 'How long does a typical engagement last?',
      answer: 'Most projects are completed in 8-16 weeks, depending on scope and complexity. We focus on rapid deployment to get you results quickly, then provide ongoing optimization support.',
    },
    {
      question: 'What industries do you work with?',
      answer: 'We\'ve successfully implemented revenue intelligence systems across retail, e-commerce, professional services, SaaS, manufacturing, healthcare, and financial services. Our methodology is industry-agnostic and adapts to your specific needs.',
    },
    {
      question: 'What\'s the investment range?',
      answer: 'Projects typically range from $25K to $150K depending on complexity, data sources, and customization requirements. We offer flexible pricing including project-based, retainer, and performance-based models. Every proposal includes a clear ROI projection.',
    },
    {
      question: 'Do you provide ongoing support?',
      answer: 'Yes! All projects include 3 months of post-launch support. We also offer ongoing managed services, training programs, and optimization retainers to ensure your system continues delivering value.',
    },
    {
      question: 'What if we already have analytics tools?',
      answer: 'Perfect! We work with your existing tech stack and integrate everything into a unified intelligence layer. We\'re technology-agnostic and focus on creating cohesive solutions rather than replacing what\'s working.',
    },
    {
      question: 'Can we start with a smaller pilot project?',
      answer: 'Absolutely! We offer pilot programs starting at $15K that focus on a specific use case or department. This allows you to see results and build confidence before expanding to a full implementation.',
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-hans-navy to-[#0a1a35] text-white py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <ScrollReveal>
            <p className="text-hans-teal font-semibold mb-4 tracking-wide uppercase text-sm">
              Get In Touch
            </p>
            <h1 className="text-white mb-6 max-w-4xl mx-auto">
              Let's transform your revenue operations together
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Whether you're ready to start a project or just want to explore possibilities, we're here to help. Book a free strategy call or send us a message.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Contact Options */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contactOptions.map((option, index) => (
              <StaggerItem key={index}>
                <div className="bg-hans-grey rounded-xl p-8 text-center hover:shadow-lg transition-shadow">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full mb-4 ${
                    option.variant === 'teal' ? 'bg-hans-teal/10' : 'bg-hans-orange/10'
                  }`}>
                    <div className={option.variant === 'teal' ? 'text-hans-teal' : 'text-hans-orange'}>
                      {option.icon}
                    </div>
                  </div>
                  <h3 className="mb-3">{option.title}</h3>
                  <p className="text-gray-600 mb-6">
                    {option.description}
                  </p>
                  <Button variant={option.variant} size="small" className="w-full" onClick={option.onClick}>
                    {option.buttonText}
                  </Button>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Main Contact Form */}
      <div id="contact-form">
        <ContactForm />
      </div>

      {/* What Happens Next */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="mb-4">What happens after you contact us?</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Here's what you can expect from our proven engagement process.
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
                  <h4 className="font-semibold mb-3">{step.title}</h4>
                  <p className="text-gray-600">
                    {step.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-hans-grey">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="mb-4">Frequently Asked Questions</h2>
            </div>
          </ScrollReveal>
          
          <StaggerContainer className="space-y-6">
            {faqs.map((faq, index) => (
              <StaggerItem key={index}>
                <div className="bg-white rounded-xl p-8 shadow-md">
                  <h4 className="font-semibold mb-3">{faq.question}</h4>
                  <p className="text-gray-600">
                    {faq.answer}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Office & Contact Info */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Details */}
            <ScrollReveal delay={0.1}>
              <div>
                <h2 className="mb-8">Our Office</h2>
                
                <div className="space-y-6 mb-8">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-12 h-12 bg-hans-teal/10 rounded-lg flex items-center justify-center">
                        <MapPin className="text-hans-teal" size={24} />
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Address</h4>
                      <p className="text-gray-600">
                        HANS Consulting Group<br />
                        123 Business Plaza, Suite 100<br />
                        Tech City, TC 12345<br />
                        Malaysia
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-12 h-12 bg-hans-teal/10 rounded-lg flex items-center justify-center">
                        <Phone className="text-hans-teal" size={24} />
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Phone</h4>
                      <p className="text-gray-600">
                        +60 3 1234 5678<br />
                        +60 12 345 6789 (Mobile)
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-12 h-12 bg-hans-teal/10 rounded-lg flex items-center justify-center">
                        <Mail className="text-hans-teal" size={24} />
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Email</h4>
                      <p className="text-gray-600">
                        contact@hansconsulting.com<br />
                        support@hansconsulting.com
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="mb-8">
                  <h4 className="font-semibold mb-4">Business Hours</h4>
                  <div className="space-y-2 text-gray-600">
                    <div className="flex justify-between">
                      <span>Monday - Friday:</span>
                      <span className="font-medium">9:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Saturday:</span>
                      <span className="font-medium">10:00 AM - 4:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sunday:</span>
                      <span className="font-medium">Closed</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-4">Follow Us</h4>
                  <div className="flex space-x-4">
                    <a 
                      href="https://www.linkedin.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-hans-teal/10 rounded-lg flex items-center justify-center hover:bg-hans-teal hover:text-white transition-colors"
                      aria-label="LinkedIn"
                    >
                      <Linkedin size={24} className="text-hans-teal hover:text-white" />
                    </a>
                    <a 
                      href="https://www.twitter.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-hans-teal/10 rounded-lg flex items-center justify-center hover:bg-hans-teal hover:text-white transition-colors"
                      aria-label="Twitter"
                    >
                      <Twitter size={24} className="text-hans-teal hover:text-white" />
                    </a>
                    <a 
                      href="mailto:contact@hansconsulting.com"
                      className="w-12 h-12 bg-hans-teal/10 rounded-lg flex items-center justify-center hover:bg-hans-teal hover:text-white transition-colors"
                      aria-label="Email"
                    >
                      <Mail size={24} className="text-hans-teal hover:text-white" />
                    </a>
                  </div>
                </div>
              </div>
            </ScrollReveal>
            
            {/* Map Placeholder */}
            <ScrollReveal delay={0.2} direction="right">
              <div className="bg-hans-grey rounded-2xl overflow-hidden h-[500px] flex items-center justify-center">
                <div className="text-center p-8">
                  <MapPin className="text-hans-teal mx-auto mb-4" size={64} />
                  <h3 className="mb-2">Visit Our Office</h3>
                  <p className="text-gray-600 mb-4">
                    123 Business Plaza, Suite 100<br />
                    Tech City, TC 12345
                  </p>
                  <Button variant="secondary" size="small">
                    Get Directions
                  </Button>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-gradient-to-br from-hans-navy to-[#0a1a35] text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="text-white mb-4">Not ready to commit yet?</h2>
            <p className="text-xl text-gray-300 mb-8">
              No problem! Subscribe to our newsletter for insights on revenue intelligence, data analytics, and business growth strategies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Your email address"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-hans-teal"
              />
              <Button variant="teal">
                Subscribe
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}

