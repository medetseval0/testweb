import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import HeadFix from "../imports/HeadFix";
import ProjectPortfolio from "../components/ProjectPortfolio";
import PageManagement from "../components/PageManagement";
import KSOPageManagement from "../components/KSOPageManagement";
import RouteInfo from "../components/RouteInfo";

// KSO Project Import
import KSOApp from "../kso/KSOApp";

// Import KSO Styles
import "../kso/styles/kso.css";

// Layout component to handle common header logic
function Layout({ children }: { children: React.ReactNode }) {
  const navigate = useNavigate();
  const location = useLocation();
  const [isHeadFixHidden, setIsHeadFixHidden] = useState(false);
  
  const handlePanelToggle = () => {
    console.log('Panel toggle clicked!', 'Current path:', location.pathname);
    
    // Always navigate to KSO site home for now
    navigate('/kso/site/home');
  };

  const handleAllProjectsClick = () => {
    console.log('All Projects clicked!');
    navigate('/');
  };

  const handleLogoClick = () => {
    console.log('Eloxu Logo clicked!');
    navigate('/');
  };

  const handleProjectClick = () => {
    console.log('KSO Project clicked!');
    // Navigate to KSO admin if not already there, otherwise to KSO site
    if (location.pathname.startsWith('/kso/admin')) {
      navigate('/kso/site/home');
    } else {
      navigate('/kso/admin');
    }
  };

  const handleToggleVisibility = () => {
    setIsHeadFixHidden(!isHeadFixHidden);
  };

  const isProjectPortfolio = location.pathname === '/';
  const isPageManagement = location.pathname === '/admin/pages';
  const isKSOAdmin = location.pathname === '/kso/admin';
  const isKSOProject = location.pathname.startsWith('/kso/site/');
  const isAnyKSOPage = location.pathname.startsWith('/kso/');

  // HeadFix should show in ALL KSO pages (site and admin) - NOT in portfolio or legacy admin pages
  const showHeadFix = isAnyKSOPage;

  // Determine background theme
  const isLightTheme = isProjectPortfolio || isPageManagement || isKSOAdmin;

  // Calculate HeadFix offset - HeadFix height is 58px
  const headFixHeight = (showHeadFix && !isHeadFixHidden) ? 58 : 0;

  return (
    <div className={`min-h-screen ${isLightTheme ? 'bg-white light' : 'bg-[#181A1C]'}`}>
      {/* HeadFix Global Controller - Shown in ALL KSO pages */}
      {showHeadFix && (
        <HeadFix 
          onPanelToggle={handlePanelToggle}
          onAllProjectsClick={handleAllProjectsClick}
          onToggleVisibility={handleToggleVisibility}
          onLogoClick={handleLogoClick}
          onProjectClick={handleProjectClick}
          isHidden={isHeadFixHidden}
        />
      )}
      
      {/* Main Content - All KSO pages get 58px top margin for HeadFix */}
      <main 
        className="transition-all duration-300"
        style={{
          marginTop: `${headFixHeight}px`,
          minHeight: `calc(100vh - ${headFixHeight}px)`
        }}
      >
        {children}
      </main>
      
      {/* Route Info - Development Helper - Hide on KSO project pages */}
      {!isKSOProject && import.meta.env.DEV && <RouteInfo />}
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          {/* Main Project Portfolio */}
          <Route path="/" element={<ProjectPortfolio />} />
          
          {/* Legacy Admin Pages */}
          <Route path="/admin/pages" element={<PageManagement />} />
          
          {/* KSO Project Management */}
          <Route path="/kso/admin" element={<KSOPageManagement />} />
          
          {/* KSO Project - All routes under /kso/site/ */}
          <Route path="/kso/site/*" element={<KSOApp />} />
          
          {/* Fallback - redirect to portfolio */}
          <Route path="*" element={<ProjectPortfolio />} />
        </Routes>
      </Layout>
    </Router>
  );
}