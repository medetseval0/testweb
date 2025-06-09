import React, { ReactNode } from 'react';

interface KSOCardProps {
  children: ReactNode;
  title?: string;
  subtitle?: string;
  className?: string;
  hoverable?: boolean;
  onClick?: () => void;
  header?: ReactNode;
  footer?: ReactNode;
}

export default function KSOCard({
  children,
  title,
  subtitle,
  className = '',
  hoverable = false,
  onClick,
  header,
  footer
}: KSOCardProps) {
  const cardClass = `kso-card ${hoverable ? 'kso-card-hoverable' : ''} ${onClick ? 'cursor-pointer' : ''} ${className}`;

  return (
    <div className={cardClass} onClick={onClick}>
      {(title || subtitle || header) && (
        <div className="kso-card-header">
          {header || (
            <>
              {title && <h3 className="kso-card-title">{title}</h3>}
              {subtitle && <p className="kso-body-sm" style={{ margin: '0.25rem 0 0 0', color: 'var(--kso-text-muted)' }}>{subtitle}</p>}
            </>
          )}
        </div>
      )}
      
      <div className="kso-card-content">
        {children}
      </div>
      
      {footer && (
        <div style={{ marginTop: 'var(--kso-spacing-md)', paddingTop: 'var(--kso-spacing-md)', borderTop: '1px solid var(--kso-border-light)' }}>
          {footer}
        </div>
      )}
    </div>
  );
}