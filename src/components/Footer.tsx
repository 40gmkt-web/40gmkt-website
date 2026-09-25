import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Phone, Instagram, Mail, X } from 'lucide-react';

export const Footer: React.FC = () => {
  const [privacyOpen, setPrivacyOpen] = useState(false);

  return (
    <footer className="pt-10 pb-16 px-4 sm:px-6 border-t border-slate-100 bg-white">
      <div className="max-w-[1260px] mx-auto space-y-8">
        {/* Top Row: Logo, Links, Book a Call CTA */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <img
              src="/assets/images/logo-black.png"
              alt="40g Marketing Agency"
              className="h-8 md:h-9 w-auto object-contain"
            />
          </Link>

          {/* Links */}
          <nav className="flex items-center space-x-6 sm:space-x-8 text-sm font-medium text-slate-700">
            <Link to="/marketplace" className="hover:text-brand-orange transition-colors">
              Marketplace
            </Link>
            <Link to="/localbusiness" className="hover:text-brand-orange transition-colors">
              Local Business
            </Link>
            <Link to="/branding" className="hover:text-brand-orange transition-colors">
              Branding
            </Link>
          </nav>

          {/* CTA */}
          <div>
            <a
              href="https://api.whatsapp.com/send?phone=13213176615"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-brand-orange hover:bg-brand-orangeHover text-white text-xs sm:text-sm font-medium py-2.5 px-6 rounded-full shadow-glow-orange transition-all duration-200 hover:-translate-y-0.5"
            >
              <span>Book a Call</span>
              <ArrowRight size={14} />
            </a>
          </div>
        </div>

        {/* Bottom Row: Privacy Policy, Copyright, Social Icons */}
        <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm text-slate-400">
          {/* Privacy Policy */}
          <button
            onClick={() => setPrivacyOpen(true)}
            className="hover:text-slate-600 transition-colors underline-offset-2 hover:underline"
          >
            Privacy Policy
          </button>

          {/* Copyright */}
          <div>
            <span>© {new Date().getFullYear()} by 40g Marketing Group</span>
          </div>

          {/* Social Icons */}
          <div className="flex items-center space-x-4 text-slate-500">
            <a
              href="https://api.whatsapp.com/send?phone=13213176615"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center hover:bg-brand-orange hover:text-white hover:border-brand-orange transition-all"
              aria-label="WhatsApp"
            >
              <Phone size={14} />
            </a>
            <a
              href="https://www.instagram.com/40gmkt/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center hover:bg-brand-orange hover:text-white hover:border-brand-orange transition-all"
              aria-label="Instagram"
            >
              <Instagram size={14} />
            </a>
            <a
              href="mailto:victor@40gmkt.com"
              className="w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center hover:bg-brand-orange hover:text-white hover:border-brand-orange transition-all"
              aria-label="Email"
            >
              <Mail size={14} />
            </a>
          </div>
        </div>
      </div>

      {/* Privacy Policy Modal */}
      {privacyOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 space-y-4 shadow-2xl relative">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <h3 className="text-xl font-semibold text-brand-navy">Privacy Policy</h3>
              <button
                onClick={() => setPrivacyOpen(false)}
                className="p-1 rounded-full text-slate-400 hover:text-slate-700"
              >
                <X size={20} />
              </button>
            </div>
            <div className="text-xs sm:text-sm text-slate-600 space-y-3 max-h-[60vh] overflow-y-auto pr-2">
              <p>
                At 40g Marketing Group, we are committed to protecting your privacy. This policy outlines how we collect, use, and safeguard your personal information when you use our website or services.
              </p>
              <h4 className="font-semibold text-brand-navy">Information Collection</h4>
              <p>
                We may collect contact information such as name, email address, and phone number when you fill out our contact form or contact us via WhatsApp.
              </p>
              <h4 className="font-semibold text-brand-navy">SMS Communications</h4>
              <p>
                By providing your phone number, you consent to receive text messages from 40g Marketing Group regarding inquiries, updates, and marketing solutions. You can opt out at any time by replying STOP.
              </p>
              <h4 className="font-semibold text-brand-navy">Security</h4>
              <p>
                We implement appropriate security measures to maintain the safety of your personal information.
              </p>
            </div>
            <div className="pt-2 text-right">
              <button
                onClick={() => setPrivacyOpen(false)}
                className="bg-brand-navy text-white text-xs font-medium py-2 px-5 rounded-full hover:bg-brand-navyDark transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};
