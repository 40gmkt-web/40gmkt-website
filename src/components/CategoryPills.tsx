import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export const CategoryPills: React.FC = () => {
  return (
    <section className="py-12 md:py-20 px-4 sm:px-6">
      <div className="max-w-[1260px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        {/* Left Column: Heading & Copy */}
        <div className="lg:col-span-6 space-y-6">
          <h2 className="text-3xl sm:text-4xl md-text-5xl font-light text-brand-navy leading-tight tracking-tight">
            Your business <br className="hidden sm:inline" />
            <span className="font-semibold text-brand-navy">growth begins here...</span>
          </h2>
          
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-xl">
            Our passion is understanding your business, working quickly and with high-quality solutions. 
            Join forces with us, and watch the growth of both your business and ours. 
            We're here to be your indispensable partners on the pathway to success.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href="#specialized"
              className="bg-brand-orange hover:bg-brand-orangeHover text-white text-xs sm:text-sm font-medium py-2.5 px-6 rounded-full shadow-glow-orange transition-all duration-200 hover:-translate-y-0.5"
            >
              Learn more
            </a>
            <a
              href="https://api.whatsapp.com/send?phone=13213176615"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 border border-brand-orange text-brand-orange hover:bg-brand-orange/5 text-xs sm:text-sm font-medium py-2.5 px-6 rounded-full transition-all duration-200"
            >
              <span>Book a Call</span>
              <ArrowRight size={14} />
            </a>
          </div>
        </div>

        {/* Right Column: Intersecting Circles Graphic (teste40g-website.png) with clickable hotspots */}
        <div className="lg:col-span-6 relative flex items-center justify-center pt-4 lg:pt-0">
          <div className="relative w-full max-w-[560px]">
            <img
              src="/assets/images/teste40g-website.png"
              alt="40g Services: Local Business, Marketplace Business, Branding"
              className="w-full h-auto object-contain transition-transform duration-300 hover:scale-[1.02]"
              loading="lazy"
            />
            {/* Clickable hotspots over the Venn circles */}
            <Link
              to="/localbusiness"
              className="absolute left-0 top-0 w-[38%] h-full rounded-full cursor-pointer z-10"
              title="Local Business"
            />
            <Link
              to="/marketplace"
              className="absolute left-[31%] top-0 w-[38%] h-full rounded-full cursor-pointer z-10"
              title="Marketplace Business"
            />
            <a
              href="#specialized"
              className="absolute right-0 top-0 w-[38%] h-full rounded-full cursor-pointer z-10"
              title="Branding"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
