import React from 'react';

export const HomeBento: React.FC = () => {
  return (
    <section className="py-8 md:py-14 px-4 sm:px-6">
      <div className="max-w-[1260px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
        
        {/* Left Column: Save time, money and frustration */}
        <div className="lg:col-span-5 flex flex-col">
          <div className="bg-brand-navy text-white rounded-[32px] sm:rounded-[40px] md:rounded-[44px] p-8 sm:p-10 md:p-12 lg:p-14 shadow-md flex flex-col justify-center min-h-[280px] sm:min-h-[340px] md:min-h-[380px]">
            <h2 className="text-3xl sm:text-4xl md:text-[46px] lg:text-[50px] leading-[1.18] tracking-[-0.03em] font-light">
              <span className="italic">Save your </span>
              <span className="font-normal">time,</span><br />
              <span className="font-normal">money </span>
              <span className="italic">and</span><br />
              <span className="italic">frustration</span>
            </h2>
          </div>
        </div>

        {/* Right Column: Orange Card on top, Woman + 40g Graphic below */}
        <div className="lg:col-span-7 flex flex-col gap-6 sm:gap-8">
          {/* Top Wide Orange Card */}
          <div className="bg-brand-orange text-white rounded-[32px] sm:rounded-[40px] md:rounded-[44px] p-8 sm:p-10 md:p-12 lg:p-14 shadow-md flex flex-col justify-center min-h-[200px] sm:min-h-[230px]">
            <h2 className="text-3xl sm:text-4xl md:text-[46px] lg:text-[50px] leading-[1.18] tracking-[-0.03em] font-light">
              <span className="font-normal">We’re the link</span><br />
              <span className="italic">your business</span><br />
              <span className="italic">needs </span>
              <span className="font-normal">to sell.</span>
            </h2>
          </div>

          {/* Bottom Row: Woman photo + 40g Vector Smart Object */}
          <div className="flex flex-col sm:flex-row items-center sm:items-end justify-between gap-6 sm:gap-4 -mt-4 sm:-mt-8 lg:-mt-12">
            {/* Woman smiling with tablet (pre-cutout graphic with transparent background) */}
            <div className="w-full sm:w-[60%] flex justify-center sm:justify-start">
              <img
                src="/assets/images/mulher-website-1.png"
                alt="Woman working on digital business"
                className="w-full max-w-[440px] h-auto object-contain"
                loading="lazy"
              />
            </div>

            {/* Right: Vector Smart Object (Orange pattern + Black 40g badge) */}
            <div className="w-full sm:w-[38%] flex justify-center sm:justify-end pb-2 sm:pb-6">
              <img
                src="/assets/images/Vector-Smart-Object-copy-2.png"
                alt="40g Pattern and Badge"
                className="w-full max-w-[220px] sm:max-w-[265px] h-auto object-contain"
                loading="lazy"
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
