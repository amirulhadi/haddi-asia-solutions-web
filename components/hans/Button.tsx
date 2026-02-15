'use client';

import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'teal' | 'orange';
  size?: 'default' | 'small';
  children: React.ReactNode;
}

export function Button({ 
  variant = 'primary', 
  size = 'default', 
  children, 
  className = '',
  disabled,
  ...props 
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center rounded-lg font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2';
  
  const variants = {
    primary: 'bg-hans-navy text-white hover:bg-opacity-90 hover:shadow-lg focus:ring-hans-teal disabled:bg-gray-300 disabled:cursor-not-allowed disabled:hover:shadow-none',
    secondary: 'border-2 border-hans-navy text-hans-navy bg-transparent hover:bg-hans-navy hover:text-white focus:ring-hans-navy disabled:border-gray-300 disabled:text-gray-300 disabled:cursor-not-allowed disabled:hover:bg-transparent disabled:hover:text-gray-300',
    teal: 'bg-hans-teal text-white hover:bg-opacity-90 hover:shadow-lg focus:ring-hans-teal disabled:bg-gray-300 disabled:cursor-not-allowed disabled:hover:shadow-none',
    orange: 'bg-hans-orange text-white hover:bg-opacity-90 hover:shadow-lg focus:ring-hans-orange disabled:bg-gray-300 disabled:cursor-not-allowed disabled:hover:shadow-none',
  };
  
  const sizes = {
    default: 'px-8 py-3 text-lg',
    small: 'px-5 py-2 text-base',
  };
  
  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
}

