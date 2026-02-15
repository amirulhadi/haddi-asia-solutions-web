'use client';

import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helperText?: string;
}

export function Input({ 
  label, 
  error, 
  helperText, 
  className = '', 
  ...props 
}: InputProps) {
  return (
    <div className="w-full">
      {label && (
        <label className="block mb-2 text-hans-navy font-medium">
          {label}
        </label>
      )}
      <input
        className={`w-full px-4 py-3 bg-hans-grey border border-transparent rounded-lg transition-all duration-200 
          focus:outline-none focus:ring-2 focus:ring-hans-teal focus:border-transparent focus:shadow-md
          placeholder:text-gray-400
          disabled:bg-gray-200 disabled:cursor-not-allowed
          ${error ? 'border-red-500 focus:ring-red-500' : ''}
          ${className}`}
        {...props}
      />
      {error && (
        <p className="mt-2 text-sm text-red-600">{error}</p>
      )}
      {helperText && !error && (
        <p className="mt-2 text-sm text-gray-500">{helperText}</p>
      )}
    </div>
  );
}

