'use client';

import React from 'react';

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  helperText?: string;
}

export function Textarea({ 
  label, 
  error, 
  helperText, 
  className = '', 
  rows = 4,
  ...props 
}: TextareaProps) {
  return (
    <div className="w-full">
      {label && (
        <label className="block mb-2 text-hans-navy font-medium">
          {label}
        </label>
      )}
      <textarea
        rows={rows}
        className={`w-full px-4 py-3 bg-hans-grey border border-transparent rounded-lg transition-all duration-200 
          focus:outline-none focus:ring-2 focus:ring-hans-teal focus:border-transparent focus:shadow-md
          placeholder:text-gray-400 resize-vertical
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

