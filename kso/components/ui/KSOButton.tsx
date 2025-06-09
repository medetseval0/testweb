import React, { ButtonHTMLAttributes, ReactNode } from 'react';

interface KSOButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  loading?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  children: ReactNode;
}

export default function KSOButton({
  variant = 'primary',
  size = 'md',
  loading = false,
  leftIcon,
  rightIcon,
  children,
  className = '',
  disabled,
  ...props
}: KSOButtonProps) {
  const baseClass = 'kso-btn';
  const variantClass = `kso-btn-${variant}`;
  
  const sizeStyles = {
    sm: { fontSize: 'var(--kso-font-size-xs)', padding: '0.25rem 0.5rem' },
    md: { fontSize: 'var(--kso-font-size-sm)', padding: '0.5rem 1rem' },
    lg: { fontSize: 'var(--kso-font-size-base)', padding: '0.75rem 1.5rem' }
  };

  return (
    <button
      className={`${baseClass} ${variantClass} ${className}`}
      style={sizeStyles[size]}
      disabled={disabled || loading}
      {...props}
    >
      {loading && (
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          style={{ marginRight: '0.5rem', animation: 'spin 1s linear infinite' }}
        >
          <path d="M21 12a9 9 0 11-6.219-8.56"/>
        </svg>
      )}
      {leftIcon && <span style={{ marginRight: '0.5rem' }}>{leftIcon}</span>}
      {children}
      {rightIcon && <span style={{ marginLeft: '0.5rem' }}>{rightIcon}</span>}
    </button>
  );
}