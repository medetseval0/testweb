import React from 'react';
import { Routes, Route, Navigate, useNavigate, useLocation } from 'react-router-dom';
import KSOLayout from './components/layout/KSOLayout';
import KSOHeader from './components/layout/KSOHeader';
import KSOHomepage from './pages/Homepage';

export default function KSOApp() {
  const navigate = useNavigate();
  const location = useLocation();

  // Check if current route is user panel or auth page
  const isUserPanel = location.pathname.includes('/user/');
  const isAuthPage = location.pathname.includes('/auth/');

  // Show KSO Header on all pages except user panel pages
  const showKSOHeader = !isUserPanel;

  const handleCategoryClick = (categoryId: string) => {
    console.log('KSO Category clicked:', categoryId);
  };

  const handleSearchSubmit = (query: string) => {
    console.log('KSO Search:', query);
  };

  const handleUserMenuClick = () => {
    console.log('KSO User menu clicked');
  };

  const handleAddListingClick = () => {
    console.log('KSO Add listing clicked');
  };

  // Calculate header height based on screen size and content
  // Desktop: 118px (full header with navigation)
  // Tablet: 72px (header without navigation)
  // Mobile: 72px (compact header)
  const getHeaderHeight = () => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth <= 1024) {
        return 72; // Tablet/Mobile - no navigation menu
      }
      return 118; // Desktop - full header with navigation
    }
    return 118; // Default to desktop
  };

  const headerHeight = showKSOHeader ? getHeaderHeight() : 0;

  return (
    <KSOLayout 
      showHeader={showKSOHeader}
      showUserPanel={isUserPanel}
      onCategoryClick={handleCategoryClick}
      onSearchSubmit={handleSearchSubmit}
      onUserMenuClick={handleUserMenuClick}
      onAddListingClick={handleAddListingClick}
    >
      {/* KSO Global Header - fixed positioned below Eloxu HeadFix */}
      {showKSOHeader && <KSOHeader className="kso-header" />}
      
      {/* Content wrapper with padding for fixed header */}
      <div 
        className="transition-all duration-300"
        style={{
          paddingTop: `${headerHeight}px`
        }}
      >
        <Routes>
          {/* KSO Homepage - Root ve /home */}
          <Route index element={
            <KSOHomepage 
              onCategoryClick={handleCategoryClick}
              onSearchSubmit={handleSearchSubmit}
            />
          } />
          
          <Route path="home" element={
            <KSOHomepage 
              onCategoryClick={handleCategoryClick}
              onSearchSubmit={handleSearchSubmit}
            />
          } />
          
          {/* Empty Category Pages */}
          <Route path="category" element={
            <div className="kso-app">
              {/* Empty category page */}
            </div>
          } />
          
          {/* Empty Product Pages */}
          <Route path="products/*" element={
            <div className="kso-app">
              {/* Empty product pages */}
            </div>
          } />
          
          {/* Empty User Panel - no header */}
          <Route path="user/*" element={
            <div className="kso-app">
              {/* Empty user panel */}
            </div>
          } />
          
          {/* Empty Auth Pages */}
          <Route path="auth/*" element={
            <div className="kso-app">
              {/* Empty auth pages */}
            </div>
          } />
          
          {/* Default redirect to home */}
          <Route path="*" element={<Navigate to="/kso/site/home" replace />} />
        </Routes>
      </div>
    </KSOLayout>
  );
}