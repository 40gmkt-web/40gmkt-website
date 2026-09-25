import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu } from 'lucide-react';
import { useNav } from '../context/NavContext';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { openMobileMenu } = useNav();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 550);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path: string) => location.pathname === path;

  // No topo da página, a barra de navegação fica exclusivamente dentro do Hero
  if (!scrolled) {
    return null;
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 sm:px-6 pt-3 sm:pt-4">
      <div className="max-w-[1260px] mx-auto rounded-full px-6 py-2.5 sm:py-3 flex items-center justify-between bg-[#024873]/90 shadow-xl backdrop-blur-md border border-white/15">
        {/* Brand Logo */}
        <Link to="/" className="flex items-center group" aria-label="40g Home">
          <img
            src="/assets/images/logo-white.png"
            alt="40g Marketing Agency"
            className="h-7 sm:h-8 w-auto object-contain"
          />
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center space-x-8 text-[15px] font-normal text-white">
          <Link
            to="/marketplace"
            className={`transition-colors duration-200 hover:text-brand-orange ${
              isActive('/marketplace') ? 'text-brand-orange font-medium' : 'text-white'
            }`}
          >
            Marketplace
          </Link>
          <Link
            to="/localbusiness"
            className={`transition-colors duration-200 hover:text-brand-orange ${
              isActive('/localbusiness') ? 'text-brand-orange font-medium' : 'text-white'
            }`}
          >
            Local Business
          </Link>
          <Link
            to="/branding"
            className={`transition-colors duration-200 hover:text-brand-orange ${
              isActive('/branding') ? 'text-brand-orange font-medium' : 'text-white'
            }`}
          >
            Branding
          </Link>
        </nav>

        {/* Action button */}
        <div className="flex items-center gap-3">
          <a
            href="https://api.whatsapp.com/send?phone=13213176615"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-brand-orange hover:bg-brand-orangeHover text-white text-xs sm:text-sm font-medium py-2 px-5 rounded-full shadow-glow-orange transition-all duration-200"
          >
            Book a Call
          </a>
          <button
            onClick={openMobileMenu}
            aria-label="Abrir menu"
            className="w-9 h-9 rounded-full bg-[#527d97]/85 hover:bg-[#527d97] flex items-center justify-center text-white transition-all"
          >
            <Menu size={18} strokeWidth={2.2} />
          </button>
        </div>
      </div>
    </header>
  );
};
