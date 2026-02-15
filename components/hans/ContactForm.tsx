'use client';

import React, { useState } from 'react';
import { Input, Textarea, Button } from '@/components/hans';
import { Mail, Phone, MapPin } from 'lucide-react';

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  });
  
  const [errors, setErrors] = useState<Record<string, string>>({});
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple validation
    const newErrors: Record<string, string> = {};
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    if (!formData.message) newErrors.message = 'Message is required';
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    
    // Handle form submission
    console.log('Form submitted:', formData);
    alert('Thank you! We will get back to you soon.');
    setFormData({ name: '', email: '', phone: '', company: '', message: '' });
    setErrors({});
  };
  
  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };
  
  return (
    <section className="py-16 bg-hans-grey">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h2 className="mb-4">Get In Touch</h2>
            <p className="text-xl text-gray-600 mb-8">
              Have a project in mind? Let's discuss how we can help you achieve your business goals.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-hans-teal/10 p-3 rounded-lg">
                  <Mail className="text-hans-teal" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Email</h4>
                  <p className="text-gray-600">contact@hansconsulting.com</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-hans-teal/10 p-3 rounded-lg">
                  <Phone className="text-hans-teal" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Phone</h4>
                  <p className="text-gray-600">+60 3 1234 5678</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-hans-teal/10 p-3 rounded-lg">
                  <MapPin className="text-hans-teal" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Office</h4>
                  <p className="text-gray-600">123 Business Plaza, Suite 100<br />Tech City, TC 12345, Malaysia</p>
                </div>
              </div>
            </div>
            
            <div className="mt-12 p-6 bg-white rounded-xl shadow-md">
              <h4 className="font-semibold mb-3">Business Hours</h4>
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
          </div>
          
          {/* Contact Form */}
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h3 className="mb-6">Send Us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                label="Full Name *"
                placeholder="John Doe"
                value={formData.name}
                onChange={(e) => handleChange('name', e.target.value)}
                error={errors.name}
              />
              
              <Input
                label="Email Address *"
                type="email"
                placeholder="john@company.com"
                value={formData.email}
                onChange={(e) => handleChange('email', e.target.value)}
                error={errors.email}
              />
              
              <Input
                label="Phone Number"
                type="tel"
                placeholder="+60 12 345 6789"
                value={formData.phone}
                onChange={(e) => handleChange('phone', e.target.value)}
              />
              
              <Input
                label="Company Name"
                placeholder="Your Company"
                value={formData.company}
                onChange={(e) => handleChange('company', e.target.value)}
              />
              
              <Textarea
                label="Message *"
                placeholder="Tell us about your project..."
                rows={5}
                value={formData.message}
                onChange={(e) => handleChange('message', e.target.value)}
                error={errors.message}
              />
              
              <Button variant="teal" type="submit" className="w-full">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

