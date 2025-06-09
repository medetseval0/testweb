import React, { InputHTMLAttributes, ReactNode } from 'react';

interface KSOInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  helperText?: string;
}

export default function KSOInput({
  label,
  error,
  leftIcon,
  rightIcon,
  helperText,
  className = '',
  style,
  ...props
}: KSOInputProps) {
  const inputClass = `kso-input ${error ? 'kso-input-error' : ''} ${className}`;
  
  const inputStyle = {
    paddingLeft: leftIcon ? '2.5rem' : undefined,
    paddingRight: rightIcon ? '2.5rem' : undefined,
    borderColor: error ? 'var(--kso-error)' : undefined,
    ...style
  };

  return (
    <div className="kso-w-full">
      {label && (
        <label className="kso-body-sm" style={{ 
          display: 'block', 
          marginBottom: '0.5rem', 
          color: 'var(--kso-text-secondary)',
          fontWeight: 600
        }}>
          {label}
        </label>
      )}
      
      <div style={{ position: 'relative' }}>
        {leftIcon && (
          <div style={{
            position: 'absolute',
            left: '0.75rem',
            top: '50%',
            transform: 'translateY(-50%)',
            color: 'var(--kso-text-muted)',
            pointerEvents: 'none'
          }}>
            {leftIcon}
          </div>
        )}
        
        <input
          className={inputClass}
          style={inputStyle}
          {...props}
        />
        
        {rightIcon && (
          <div style={{
            position: 'absolute',
            right: '0.75rem',
            top: '50%',
            transform: 'translateY(-50%)',
            color: 'var(--kso-text-muted)',
            pointerEvents: 'none'
          }}>
            {rightIcon}
          </div>
        )}
      </div>
      
      {(error || helperText) && (
        <div style={{ marginTop: '0.25rem' }}>
          {error && (
            <span className="kso-caption" style={{ color: 'var(--kso-error)' }}>
              {error}
            </span>
          )}
          {helperText && !error && (
            <span className="kso-caption" style={{ color: 'var(--kso-text-muted)' }}>
              {helperText}
            </span>
          )}
        </div>
      )}
    </div>
  );
}