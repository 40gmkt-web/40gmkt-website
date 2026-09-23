import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export const CategoryPills: React.FC = () => {
  return (
    <section className="py-12 md:py-20 px-4 sm:px-6">
      <div className="max-w-[1260px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        {/* Left Column: Heading & Copy */}
        <div className="lg:col-span-6 space-y-6">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal text-brand-navy leading-tight tracking-tight">
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

        {/* Right Column: 3 Overlapping or Side-by-side Circular Badges */}
        <div className="lg:col-span-6 flex flex-wrap sm:flex-nowrap items-center justify-center gap-4 sm:gap-6 pt-4 lg:pt-0">
          {/* Local Business Circle */}
          <Link
            to="/localbusiness"
            className="group w-32 h-32 sm:w-36 sm:h-36 md:w-44 md:h-44 rounded-full border-2 border-brand-orange flex items-center justify-center p-4 text-center transition-all duration-300 hover:scale-105 hover:bg-brand-orange/5 hover:shadow-lg"
          >
            <span className="text-brand-orange text-sm sm:text-base md:text-lg font-medium leading-tight group-hover:font-semibold">
              local <br />business
            </span>
          </Link>

          {/* Marketplace Business Circle */}
          <Link
            to="/marketplace"
            className="group w-32 h-32 sm:w-36 sm:h-36 md:w-44 md:h-44 rounded-full border-2 border-brand-navy flex items-center justify-center p-4 text-center transition-all duration-300 hover:scale-105 hover:bg-brand-navy/5 hover:shadow-lg"
          >
            <span className="text-brand-navy text-sm sm:text-base md:text-lg font-medium leading-tight group-hover:font-semibold">
              marketplace <br />business
            </span>
          </Link>

          {/* Branding Circle */}
          <a
            href="#branding"
            className="group w-32 h-32 sm:w-36 sm:h-36 md:w-44 md:h-44 rounded-full border-2 border-[#DECEB9] flex items-center justify-center p-4 text-center transition-all duration-300 hover:scale-105 hover:bg-[#DECEB9]/15 hover:shadow-lg"
          >
            <span className="text-[#BCA389] text-sm sm:text-base md:text-lg font-medium leading-tight group-hover:font-semibold">
              branding
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};
