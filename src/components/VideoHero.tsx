import React, { useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowRight, Menu } from 'lucide-react';
import { useNav } from '../context/NavContext';

interface VideoHeroProps {
  videoSrc: string;
  posterSrc: string;
  subtitlePill?: string;
  title: React.ReactNode;
  subtitleText?: string;
  ctaText?: string;
  ctaLink?: string;
}

export const VideoHero: React.FC<VideoHeroProps> = ({
  videoSrc,
  posterSrc,
  subtitlePill,
  title,
  subtitleText,
  ctaText = 'Book a Call',
  ctaLink = 'https://api.whatsapp.com/send?phone=13213176615',
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const location = useLocation();
  const { openMobileMenu } = useNav();

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  }, []);

  const isActive = (path: string) => location.pathname === path;

  return (
    <section className="pt-3 sm:pt-5 pb-6 px-3 sm:px-6">
      <div className="max-w-[1300px] mx-auto relative rounded-3xl md:rounded-[44px] overflow-hidden min-h-[580px] sm:min-h-[640px] md:min-h-[690px] lg:min-h-[720px] flex flex-col justify-between p-6 sm:p-10 md:p-12 lg:p-16 shadow-2xl">
        {/* Background Video with Poster Fallback */}
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          poster={posterSrc}
          className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none"
        >
          <source src={videoSrc} type="video/mp4" />
        </video>

        {/* Cinematic Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/40 pointer-events-none" />
        <div className="absolute inset-0 bg-[#024873]/15 mix-blend-overlay pointer-events-none" />

        {/* TOP BAR: Inside the Hero block */}
        <div className="relative z-20 flex items-center justify-between w-full">
          {/* Logo */}
          <Link to="/" className="flex items-center group" aria-label="40g Home">
            <img
              src="/assets/images/logo-white.png"
              alt="40g Marketing Agency"
              className="h-8 sm:h-9 md:h-10 w-auto object-contain transition-transform duration-200 group-hover:scale-105"
            />
          </Link>

          {/* Desktop Nav Menu */}
          <nav className="hidden md:flex items-center space-x-8 lg:space-x-10 text-[15px] lg:text-[17px] font-normal text-white">
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

          {/* Circular Hamburger Menu Button */}
          <button
            onClick={openMobileMenu}
            aria-label="Abrir menu"
            className="w-10 h-10 md:w-11 md:h-11 rounded-full bg-[#527d97]/85 hover:bg-[#527d97] flex items-center justify-center text-white transition-all shadow-md hover:scale-105 active:scale-95"
          >
            <Menu size={20} strokeWidth={2.2} />
          </button>
        </div>

        {/* BOTTOM CONTENT: Subtitle, Title & Book a Call on bottom-right */}
        <div className="relative z-10 flex flex-col md:flex-row items-start md:items-end justify-between gap-6 pt-16 sm:pt-24">
          {/* Left Side: Pill and Title */}
          <div className="max-w-3xl">
            {subtitlePill && (
              <div className="inline-block bg-white/15 backdrop-blur-md border border-white/20 text-white/95 text-xs sm:text-sm font-light px-5 py-2 rounded-full mb-4 md:mb-6 leading-relaxed shadow-sm">
                {subtitlePill}
              </div>
            )}

            <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-[62px] font-light leading-[1.06] tracking-tight">
              {title}
            </h1>

            {subtitleText && (
              <p className="text-white/85 text-base sm:text-lg md:text-xl font-light mt-4 max-w-2xl leading-relaxed">
                {subtitleText}
              </p>
            )}
          </div>

          {/* Right Side: Orange CTA Button at Bottom-Right */}
          <div className="shrink-0 pb-1 sm:pb-2 self-start md:self-end">
            <a
              href={ctaLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 bg-brand-orange hover:bg-brand-orangeHover text-white text-sm sm:text-base font-medium py-3 sm:py-3.5 px-7 sm:px-8 rounded-full shadow-glow-orange transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>{ctaText}</span>
              <ArrowRight size={16} />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
