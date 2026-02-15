'use client';

import React from 'react';
import Link from 'next/link';
import { Linkedin, Twitter, Mail, Github } from 'lucide-react';
import { Input, Button } from '@/components/hans';

export function Footer() {
  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter submission
  };
  
  return (
    <footer className="bg-hans-navy text-white py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <div>
            <div className="font-bold text-2xl mb-4">
              HANS <span className="text-hans-teal">Consulting</span>
            </div>
            <p className="text-gray-300 mb-4">
              Haddi Asia Nexus Solutions - Modern tech consulting for data & revenue intelligence.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-hans-teal transition-colors" aria-label="LinkedIn">
                <Linkedin size={24} />
              </a>
              <a href="#" className="hover:text-hans-teal transition-colors" aria-label="Twitter">
                <Twitter size={24} />
              </a>
              <a href="#" className="hover:text-hans-teal transition-colors" aria-label="Email">
                <Mail size={24} />
              </a>
              <a href="#" className="hover:text-hans-teal transition-colors" aria-label="GitHub">
                <Github size={24} />
              </a>
            </div>
          </div>
          
          {/* Services Links */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li><Link href="/services" className="text-gray-300 hover:text-hans-teal transition-colors">Data Intelligence</Link></li>
              <li><Link href="/services" className="text-gray-300 hover:text-hans-teal transition-colors">Revenue Analytics</Link></li>
              <li><Link href="/services" className="text-gray-300 hover:text-hans-teal transition-colors">Tech Consulting</Link></li>
              <li><Link href="/services" className="text-gray-300 hover:text-hans-teal transition-colors">Strategy & Planning</Link></li>
            </ul>
          </div>
          
          {/* Company Links */}
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-gray-300 hover:text-hans-teal transition-colors">About Us</Link></li>
              <li><Link href="/portfolio" className="text-gray-300 hover:text-hans-teal transition-colors">Portfolio</Link></li>
              <li><a href="#" className="text-gray-300 hover:text-hans-teal transition-colors">Careers</a></li>
              <li><Link href="/contact" className="text-gray-300 hover:text-hans-teal transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          {/* Newsletter */}
          <div>
            <h4 className="font-semibold mb-4">Stay Updated</h4>
            <p className="text-gray-300 mb-4">Subscribe to our newsletter for insights and updates.</p>
            <form onSubmit={handleNewsletterSubmit} className="space-y-3">
              <Input 
                type="email" 
                placeholder="Your email" 
                className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                required
              />
              <Button variant="teal" size="small" className="w-full" type="submit">
                Subscribe
              </Button>
            </form>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © 2026 HANS Consulting Group. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-hans-teal text-sm transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-hans-teal text-sm transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-hans-teal text-sm transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

