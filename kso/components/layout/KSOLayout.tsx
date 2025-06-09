import React, { ReactNode } from 'react';

interface KSOLayoutProps {
  children: ReactNode;
  showHeader?: boolean;
  showUserPanel?: boolean;
  className?: string;
  onCategoryClick?: (category: string) => void;
  onSearchSubmit?: (query: string) => void;
  onUserMenuClick?: () => void;
  onAddListingClick?: () => void;
}

export default function KSOLayout({ 
  children, 
  className = ''
}: KSOLayoutProps) {
  return (
    <div className={`kso-app relative ${className}`}>
      {/* Content - no wrapper needed, let components handle their own layout */}
      {children}
    </div>
  );
}