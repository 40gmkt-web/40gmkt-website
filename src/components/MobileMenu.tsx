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
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex flex-col justify-between bg-brand-dark/95 backdrop-blur-2xl text-white px-6 py-8 animate-in fade-in duration-200">
      {/* Header */}
      <div className="flex items-center justify-between">
        <img
          src="/assets/images/logo-white.png"
          alt="40g Marketing"
          className="h-8 w-auto"
        />
        <button
          onClick={onClose}
          className="p-2 rounded-full text-white/80 hover:text-white hover:bg-white/10 transition-colors"
          aria-label="Close menu"
        >
          <X size={26} />
        </button>
      </div>

      {/* Nav Links */}
      <nav className="flex flex-col space-y-6 my-auto text-2xl font-semibold tracking-tight">
        <Link
          to="/"
          onClick={onClose}
          className={`transition-colors hover:text-brand-orange ${
            location.pathname === '/' ? 'text-brand-orange' : 'text-white'
          }`}
        >
          Home
        </Link>
        <Link
          to="/marketplace"
          onClick={onClose}
          className={`transition-colors hover:text-brand-orange ${
            location.pathname === '/marketplace' ? 'text-brand-orange' : 'text-white'
          }`}
        >
          Marketplace
        </Link>
        <Link
          to="/localbusiness"
          onClick={onClose}
          className={`transition-colors hover:text-brand-orange ${
            location.pathname === '/localbusiness' ? 'text-brand-orange' : 'text-white'
          }`}
        >
          Local Business
        </Link>
        <a
          href="/#branding"
          onClick={onClose}
          className="transition-colors hover:text-brand-orange text-white"
        >
          Branding
        </a>
        <a
          href="/#about"
          onClick={onClose}
          className="transition-colors hover:text-brand-orange text-white"
        >
          About Us
        </a>
      </nav>

      {/* Bottom CTA & Social Links */}
      <div className="flex flex-col space-y-6 pt-6 border-t border-white/15">
        <a
          href="https://api.whatsapp.com/send?phone=13213176615"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 bg-brand-orange hover:bg-brand-orangeHover text-white py-3.5 px-6 rounded-full font-medium shadow-glow-orange transition-all"
        >
          <span>Book a Call</span>
          <ArrowRight size={18} />
        </a>

        <div className="flex items-center justify-center gap-6 text-white/70 text-sm">
          <a
            href="https://api.whatsapp.com/send?phone=13213176615"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 hover:text-brand-orange transition-colors"
          >
            <Phone size={16} />
            <span>WhatsApp</span>
          </a>
          <a
            href="https://www.instagram.com/40gmkt/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 hover:text-brand-orange transition-colors"
          >
            <Instagram size={16} />
            <span>Instagram</span>
          </a>
          <a
            href="mailto:victor@40gmkt.com"
            className="flex items-center gap-1.5 hover:text-brand-orange transition-colors"
          >
            <Mail size={16} />
            <span>Email</span>
          </a>
        </div>
      </div>
    </div>
  );
};
