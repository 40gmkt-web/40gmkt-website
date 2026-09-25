import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { X, ArrowRight, Phone, Mail, Instagram } from 'lucide-react';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  const location = useLocation();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') onClose();
      };
      window.addEventListener('keydown', handleKeyDown);
      return () => {
        document.body.style.overflow = '';
        window.removeEventListener('keydown', handleKeyDown);
      };
    } else {
      document.body.style.overflow = '';
    }
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      {/* Semi-transparent Dim Backdrop Overlay */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/65 backdrop-blur-sm transition-opacity duration-300 animate-in fade-in"
        aria-hidden="true"
      />

      {/* Elegant Side Drawer Panel (Max-w 380px, properly proportioned) */}
      <div className="relative z-10 w-full max-w-[380px] h-full bg-[#07131b]/95 backdrop-blur-2xl text-white p-6 sm:p-8 flex flex-col justify-between shadow-2xl border-l border-white/15 animate-in slide-in-from-right duration-300">
        
        {/* Top Header */}
        <div className="flex items-center justify-between pb-6 border-b border-white/10">
          <Link to="/" onClick={onClose} className="flex items-center gap-2">
            <img
              src="/assets/images/logo-white.png"
              alt="40g Marketing"
              className="h-8 w-auto object-contain"
            />
          </Link>
          <button
            onClick={onClose}
            className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
            aria-label="Fechar menu"
          >
            <X size={20} />
          </button>
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-col space-y-5 my-auto py-6">
          <span className="text-xs uppercase tracking-widest text-white/40 font-semibold mb-2">
            Navegação
          </span>

          <Link
            to="/"
            onClick={onClose}
            className={`text-xl font-normal transition-all duration-200 hover:text-brand-orange hover:translate-x-1 ${
              location.pathname === '/' ? 'text-brand-orange font-medium' : 'text-white/90'
            }`}
          >
            Home
          </Link>

          <Link
            to="/marketplace"
            onClick={onClose}
            className={`text-xl font-normal transition-all duration-200 hover:text-brand-orange hover:translate-x-1 ${
              location.pathname === '/marketplace' ? 'text-brand-orange font-medium' : 'text-white/90'
            }`}
          >
            Marketplace
          </Link>

          <Link
            to="/localbusiness"
            onClick={onClose}
            className={`text-xl font-normal transition-all duration-200 hover:text-brand-orange hover:translate-x-1 ${
              location.pathname === '/localbusiness' ? 'text-brand-orange font-medium' : 'text-white/90'
            }`}
          >
            Local Business
          </Link>

          <Link
            to="/branding"
            onClick={onClose}
            className={`text-xl font-normal transition-all duration-200 hover:text-brand-orange hover:translate-x-1 ${
              location.pathname === '/branding' ? 'text-brand-orange font-medium' : 'text-white/90'
            }`}
          >
            Branding
          </Link>

          <a
            href="/#specialized"
            onClick={onClose}
            className="text-xl font-normal text-white/90 transition-all duration-200 hover:text-brand-orange hover:translate-x-1"
          >
            Sobre Nós
          </a>
        </nav>

        {/* Bottom CTA Button & Social Links */}
        <div className="flex flex-col space-y-5 pt-6 border-t border-white/15">
          <a
            href="https://api.whatsapp.com/send?phone=13213176615"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2.5 bg-brand-orange hover:bg-brand-orangeHover text-white py-3.5 px-6 rounded-full font-medium shadow-glow-orange transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0 text-sm sm:text-base"
          >
            <span>Book a Call</span>
            <ArrowRight size={16} />
          </a>

          <div className="flex items-center justify-between text-white/70 text-xs sm:text-sm pt-2">
            <a
              href="https://api.whatsapp.com/send?phone=13213176615"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-brand-orange transition-colors"
            >
              <Phone size={14} />
              <span>WhatsApp</span>
            </a>
            <a
              href="https://www.instagram.com/40gmkt/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-brand-orange transition-colors"
            >
              <Instagram size={14} />
              <span>Instagram</span>
            </a>
            <a
              href="mailto:victor@40gmkt.com"
              className="flex items-center gap-1.5 hover:text-brand-orange transition-colors"
            >
              <Mail size={14} />
              <span>Email</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};
