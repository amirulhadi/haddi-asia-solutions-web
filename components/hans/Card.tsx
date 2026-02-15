'use client';

import React from 'react';
import Image from 'next/image';

interface CardProps {
  variant?: 'portfolio' | 'service' | 'dashboard';
  title?: string;
  description?: string;
  icon?: React.ReactNode;
  image?: string;
  stats?: { label: string; value: string }[];
  className?: string;
  children?: React.ReactNode;
  onClick?: () => void;
}

export function Card({ 
  variant = 'service', 
  title, 
  description, 
  icon, 
  image,
  stats,
  className = '', 
  children,
  onClick 
}: CardProps) {
  const baseStyles = 'bg-white rounded-xl transition-all duration-300 overflow-hidden';
  
  const variantStyles = {
    portfolio: 'shadow-md hover:shadow-2xl hover:-translate-y-2 cursor-pointer',
    service: 'shadow-md hover:shadow-lg p-8',
    dashboard: 'shadow-lg p-6 border border-gray-100',
  };
  
  if (variant === 'portfolio') {
    return (
      <div 
        className={`${baseStyles} ${variantStyles.portfolio} ${className}`}
        onClick={onClick}
      >
        {image && (
          <div className="w-full h-48 bg-gray-200 overflow-hidden relative">
            <Image 
              src={image} 
              alt={title || 'Portfolio image'} 
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        )}
        <div className="p-6">
          {title && <h3 className="mb-2">{title}</h3>}
          {description && <p className="text-gray-600">{description}</p>}
          {children}
        </div>
      </div>
    );
  }
  
  if (variant === 'service') {
    return (
      <div className={`${baseStyles} ${variantStyles.service} ${className}`}>
        {icon && (
          <div className="mb-4 text-hans-teal">
            {icon}
          </div>
        )}
        {title && <h3 className="mb-3">{title}</h3>}
        {description && <p className="text-gray-600">{description}</p>}
        {children}
      </div>
    );
  }
  
  if (variant === 'dashboard') {
    return (
      <div className={`${baseStyles} ${variantStyles.dashboard} ${className}`}>
        {title && <h4 className="mb-4 text-gray-500 uppercase tracking-wide text-sm">{title}</h4>}
        {stats && (
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, index) => (
              <div key={index}>
                <div className="text-3xl font-bold text-hans-navy mb-1">{stat.value}</div>
                <div className="text-sm text-gray-500">{stat.label}</div>
              </div>
            ))}
          </div>
        )}
        {children}
      </div>
    );
  }
  
  return (
    <div className={`${baseStyles} ${className}`}>
      {children}
    </div>
  );
}

