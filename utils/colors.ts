/**
 * Color utility functions for consistent color application
 * This ensures Tailwind classes are properly recognized
 */

export const getTextColorClass = (color: 'primary' | 'secondary'): string => {
  return color === 'primary' ? 'text-primary' : 'text-secondary'
}

export const getBgColorClass = (color: 'primary' | 'secondary'): string => {
  return color === 'primary' ? 'bg-primary' : 'bg-secondary'
}

export const getBorderColorClass = (color: 'primary' | 'secondary'): string => {
  return color === 'primary' ? 'border-primary' : 'border-secondary'
}

