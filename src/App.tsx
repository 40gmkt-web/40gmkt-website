import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { NavProvider, useNav } from './context/NavContext';
import { Navbar } from './components/Navbar';
import { MobileMenu } from './components/MobileMenu';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { MarketplacePage } from './pages/MarketplacePage';
import { LocalBusinessPage } from './pages/LocalBusinessPage';
import { BrandingPage } from './pages/BrandingPage';

// Scroll to top automatically on route changes
const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
};

const AppContent: React.FC = () => {
  const { mobileMenuOpen, closeMobileMenu } = useNav();

  return (
    <div className="flex flex-col min-h-screen bg-white text-brand-dark selection:bg-brand-orange selection:text-white">
      <ScrollToTop />
      
      {/* Sticky navbar só visível ao rolar a página para além do Hero */}
      <Navbar />

      {/* Mobile Drawer Menu */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={closeMobileMenu}
      />

      {/* Main Page Content */}
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/marketplace" element={<MarketplacePage />} />
          <Route path="/localbusiness" element={<LocalBusinessPage />} />
          <Route path="/branding" element={<BrandingPage />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
      </main>

      {/* Global Footer */}
      <Footer />
    </div>
  );
};

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <NavProvider>
        <AppContent />
      </NavProvider>
    </BrowserRouter>
  );
};

export default App;
