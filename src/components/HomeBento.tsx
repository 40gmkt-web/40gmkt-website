import React from 'react';

export const HomeBento: React.FC = () => {
  return (
    <section className="py-8 md:py-16 px-4 sm:px-6">
      <div className="max-w-[1260px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        
        {/* Left Column (Save time, money and frustration) */}
        <div className="lg:col-span-4 flex flex-col justify-end">
          <div className="bg-brand-navy text-white rounded-3xl md:rounded-[36px] p-8 sm:p-10 md:p-12 shadow-lg flex flex-col justify-center min-h-[220px] sm:min-h-[260px] md:min-h-[300px]">
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-light leading-[1.08] tracking-tight">
              <span className="font-semibold">Save your time,</span> <br />
              <span className="italic font-normal">money and</span> <br />
              <span className="font-semibold">frustration</span>
            </h3>
          </div>
        </div>

        {/* Right Column (We're the link + Photo + 40g Logo stack) */}
        <div className="lg:col-span-8 flex flex-col gap-6">
          {/* Top Wide Orange Card */}
          <div className="bg-brand-orange text-white rounded-3xl md:rounded-[36px] p-8 sm:p-10 md:p-12 shadow-lg flex flex-col justify-center min-h-[160px] sm:min-h-[180px]">
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-light leading-[1.08] tracking-tight">
              We’re the link <br />
              <span className="italic font-normal">your business </span>
              <span className="font-semibold">needs to sell.</span>
            </h3>
          </div>

          {/* Bottom Row: Girl with tablet + 40g Stack */}
          <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-stretch">
            {/* Girl photo card */}
            <div className="sm:col-span-7 bg-[#EFEFEF] rounded-3xl md:rounded-[36px] overflow-hidden shadow-md flex items-center justify-center relative min-h-[220px] sm:min-h-[260px]">
              <img
                src="/assets/images/bento-girl.png"
                alt="Woman working on digital business"
                className="w-full h-full object-cover object-center max-h-[300px]"
                loading="lazy"
              />
            </div>

            {/* Right stacked cards: Pattern & Black Badge */}
            <div className="sm:col-span-5 flex flex-col gap-4 justify-between">
              {/* Pattern card */}
              <div className="bg-brand-orange/5 rounded-2xl md:rounded-[28px] overflow-hidden p-3 flex items-center justify-center border border-brand-orange/20 min-h-[110px]">
                <img
                  src="/assets/images/brand-pattern.png"
                  alt="40g Pattern"
                  className="w-full h-auto object-contain max-h-24"
                  loading="lazy"
                />
              </div>

              {/* Black 40g badge */}
              <div className="bg-brand-dark rounded-2xl md:rounded-[28px] p-6 flex items-center justify-center shadow-lg min-h-[110px]">
                <img
                  src="/assets/images/logo-white.png"
                  alt="40g"
                  className="h-10 w-auto object-contain"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
