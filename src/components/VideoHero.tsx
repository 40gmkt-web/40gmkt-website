import React, { useRef, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';

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

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  }, []);

  return (
    <section className="pt-4 sm:pt-6 pb-6 px-4 sm:px-6">
      <div className="max-w-[1300px] mx-auto relative rounded-3xl md:rounded-[44px] overflow-hidden min-h-[520px] sm:min-h-[580px] md:min-h-[640px] flex flex-col justify-end pt-32 sm:pt-36 p-6 sm:p-10 md:p-14 lg:p-16 shadow-2xl">
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
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/45 to-black/25 pointer-events-none" />
        <div className="absolute inset-0 bg-[#024873]/15 mix-blend-overlay pointer-events-none" />

        {/* Content Container */}
        <div className="relative z-10 max-w-4xl">
          {subtitlePill && (
            <div className="inline-block bg-white/10 backdrop-blur-md border border-white/20 text-white/95 text-xs sm:text-sm font-light px-4 py-1.5 rounded-full mb-4 md:mb-6 leading-relaxed">
              {subtitlePill}
            </div>
          )}

          <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal leading-[1.08] tracking-tight mb-4 md:mb-6">
            {title}
          </h1>

          {subtitleText && (
            <p className="text-white/85 text-base sm:text-lg md:text-xl font-light mb-6 md:mb-8 max-w-2xl leading-relaxed">
              {subtitleText}
            </p>
          )}

          <div className="flex items-center gap-4">
            <a
              href={ctaLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 bg-brand-orange hover:bg-brand-orangeHover text-white text-sm sm:text-base font-medium py-3 px-7 rounded-full shadow-glow-orange transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0"
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
