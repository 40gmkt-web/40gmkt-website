import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, ArrowRight } from 'lucide-react';

interface NavbarProps {
  onOpenMobileMenu: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenMobileMenu }) => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 sm:px-6 pt-4 sm:pt-6">
      <div
        className={`max-w-[1260px] mx-auto rounded-full px-6 py-3 flex items-center justify-between transition-all duration-300 ${
          scrolled
            ? 'bg-brand-navy/95 shadow-xl backdrop-blur-xl border border-white/15'
            : 'bg-black/40 shadow-lg backdrop-blur-md border border-white/25'
        }`}
      >
        {/* Brand Logo */}
        <Link to="/" className="flex items-center gap-2 group" aria-label="40g Home">
          <img
            src="/assets/images/logo-white.png"
            alt="40g Marketing Agency"
            className="h-8 md:h-9 w-auto object-contain transition-transform duration-200 group-hover:scale-105"
          />
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center space-x-8 text-[15px] font-medium text-white/95">
          <Link
            to="/marketplace"
            className={`transition-colors duration-200 hover:text-brand-orange ${
              isActive('/marketplace') ? 'text-brand-orange font-semibold' : 'text-white'
            }`}
          >
            Marketplace
          </Link>
          <Link
            to="/localbusiness"
            className={`transition-colors duration-200 hover:text-brand-orange ${
              isActive('/localbusiness') ? 'text-brand-orange font-semibold' : 'text-white'
            }`}
          >
            Local Business
          </Link>
          <a
            href="/#branding"
            className="transition-colors duration-200 hover:text-brand-orange text-white"
          >
            Branding
          </a>
        </nav>

        {/* CTA Button & Mobile Trigger */}
        <div className="flex items-center gap-3">
          <a
            href="https://api.whatsapp.com/send?phone=13213176615"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-2 bg-brand-orange hover:bg-brand-orangeHover text-white text-[13px] tracking-wide font-medium py-2 px-5 rounded-full shadow-glow-orange transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0"
          >
            <span>Book a Call</span>
            <ArrowRight size={14} />
          </a>

          {/* Mobile hamburger button */}
          <button
            onClick={onOpenMobileMenu}
            className="md:hidden p-2 rounded-full text-white/90 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Toggle menu"
          >
            <Menu size={24} />
          </button>
        </div>
      </div>
    </header>
  );
};
