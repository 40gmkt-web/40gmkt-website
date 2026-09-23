import React, { useRef, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';

interface VideoBannerProps {
  videoSrc?: string;
  posterSrc?: string;
  title?: React.ReactNode;
  buttonText?: string;
  buttonLink?: string;
}

export const VideoBanner: React.FC<VideoBannerProps> = ({
  videoSrc = '/assets/videos/footer-banner.mp4',
  posterSrc = '/assets/images/hero-home-poster.jpg',
  title = (
    <>
      Our goal is to make your <br />
      <span className="font-semibold">business grow even more</span>
    </>
  ),
  buttonText = 'Learn More',
  buttonLink = '#specialized',
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  }, []);

  return (
    <section className="py-12 md:py-16 px-4 sm:px-6">
      <div className="max-w-[1260px] mx-auto relative rounded-3xl md:rounded-[40px] overflow-hidden min-h-[300px] sm:min-h-[360px] md:min-h-[420px] flex items-center p-8 sm:p-12 md:p-16 shadow-2xl">
        {/* Background Video */}
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

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/30 pointer-events-none" />

        {/* Content */}
        <div className="relative z-10 w-full flex flex-col md:flex-row md:items-center justify-between gap-8">
          <h2 className="text-white text-3xl sm:text-4xl md:text-5xl font-light leading-[1.1] tracking-tight max-w-2xl">
            {title}
          </h2>

          <a
            href={buttonLink}
            className="inline-flex items-center gap-2 bg-brand-orange hover:bg-brand-orangeHover text-white text-xs sm:text-sm font-medium py-3 px-8 rounded-full shadow-glow-orange shrink-0 transition-all duration-200 transform hover:-translate-y-0.5"
          >
            <span>{buttonText}</span>
            <ArrowRight size={15} />
          </a>
        </div>
      </div>
    </section>
  );
};
