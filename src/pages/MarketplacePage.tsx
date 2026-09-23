import React from 'react';
import { VideoHero } from '../components/VideoHero';
import { FaqAccordion } from '../components/FaqAccordion';
import { ContactForm } from '../components/ContactForm';
import { VideoBanner } from '../components/VideoBanner';
import { ArrowRight } from 'lucide-react';

export const MarketplacePage: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Video Hero */}
      <VideoHero
        videoSrc="/assets/videos/hero-marketplace.mp4"
        posterSrc="/assets/images/hero-home-poster.jpg"
        title={
          <>
            We know that <span className="font-light">your products </span>
            <span className="italic font-normal">are unique</span>
          </>
        }
        subtitleText="That’s why We offer specialized marketplace solutions for you."
        ctaText="Book a Call"
        ctaLink="https://api.whatsapp.com/send?phone=13213176615"
      />

      {/* Why sell on marketplaces - Big Stats */}
      <section className="bg-brand-navy text-white py-16 md:py-24 px-4 sm:px-6 my-10 rounded-3xl md:rounded-[40px] max-w-[1300px] mx-auto shadow-xl">
        <div className="max-w-[1140px] mx-auto text-center space-y-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tight">
            Why sell on <span className="font-semibold">marketplaces?</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 items-start">
            {/* Stat 1 */}
            <div className="space-y-3">
              <div className="text-5xl sm:text-6xl md:text-7xl font-light tracking-tight text-white">
                266.7 <span className="font-normal text-4xl sm:text-5xl">m</span>
              </div>
              <p className="text-white/80 text-sm sm:text-base font-light max-w-xs mx-auto leading-relaxed">
                U.S buyers bought goods and services online in 2022
              </p>
            </div>

            {/* Stat 2 */}
            <div className="space-y-3">
              <div className="text-5xl sm:text-6xl md:text-7xl font-light tracking-tight text-white">
                2.14 <span className="font-normal text-4xl sm:text-5xl">bi</span>
              </div>
              <p className="text-white/80 text-sm sm:text-base font-light max-w-xs mx-auto leading-relaxed">
                was the number of global digital buyers in 2021
              </p>
            </div>

            {/* Stat 3 */}
            <div className="space-y-3">
              <div className="text-5xl sm:text-6xl md:text-7xl font-light tracking-tight text-white">
                $1 <span className="font-normal text-4xl sm:text-5xl">trillion</span>
              </div>
              <p className="text-white/80 text-sm sm:text-base font-light max-w-xs mx-auto leading-relaxed">
                spent online in the U.S in 2022
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Marketplace Platforms Bento Grid */}
      <section className="py-12 md:py-20 px-4 sm:px-6">
        <div className="max-w-[1260px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
          
          {/* Column Left: Amazon card + We're specialized */}
          <div className="md:col-span-5 flex flex-col gap-6">
            {/* Amazon Card */}
            <div className="bg-[#FF9900] rounded-3xl md:rounded-[36px] p-8 sm:p-10 flex flex-col justify-between min-h-[220px] sm:min-h-[260px] shadow-lg group">
              <div className="flex-1 flex items-center justify-center">
                <img
                  src="/assets/images/amazon-logo.png"
                  alt="Amazon"
                  className="h-12 sm:h-14 w-auto object-contain transition-transform group-hover:scale-105"
                />
              </div>
              <div className="text-right">
                <a
                  href="https://api.whatsapp.com/send?phone=13213176615"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 bg-white/20 hover:bg-white/30 text-white text-[11px] font-medium py-1 px-3 rounded-full backdrop-blur-sm transition-colors"
                >
                  <span>Learn more</span>
                  <ArrowRight size={12} />
                </a>
              </div>
            </div>

            {/* We're specialized in marketplaces business */}
            <div className="bg-white border-2 border-slate-100 rounded-3xl md:rounded-[36px] p-8 sm:p-10 flex flex-col justify-center min-h-[180px] shadow-sm">
              <h3 className="text-3xl sm:text-4xl font-light text-brand-navy leading-tight">
                We're <br />
                <span className="font-semibold text-brand-navy">specialized in </span> <br />
                <span className="italic font-normal">marketplaces business</span>
              </h3>
            </div>
          </div>

          {/* Column Right: Top orange wide card + Bottom 3 partner cards */}
          <div className="md:col-span-7 flex flex-col gap-6">
            {/* Wide Orange Card */}
            <div className="bg-brand-orange text-white rounded-3xl md:rounded-[36px] p-8 sm:p-10 shadow-lg flex flex-col justify-center min-h-[160px]">
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-light leading-[1.08] tracking-tight">
                We’re the link <br />
                <span className="italic font-normal">your business </span>
                <span className="font-semibold">needs to sell.</span>
              </h3>
            </div>

            {/* Bottom 3 Cards: Walmart, eBay, Shopify */}
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-stretch">
              {/* Walmart Blue Card */}
              <div className="sm:col-span-7 bg-[#0071DC] rounded-3xl md:rounded-[36px] p-8 flex flex-col justify-between min-h-[220px] shadow-lg group">
                <div className="flex-1 flex items-center justify-center">
                  <img
                    src="/assets/images/walmart-logo_.png"
                    alt="Walmart"
                    className="h-10 sm:h-12 w-auto object-contain transition-transform group-hover:scale-105"
                  />
                </div>
                <div className="text-right">
                  <a
                    href="https://api.whatsapp.com/send?phone=13213176615"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 bg-white/20 hover:bg-white/30 text-white text-[11px] font-medium py-1 px-3 rounded-full backdrop-blur-sm transition-colors"
                  >
                    <span>Learn more</span>
                    <ArrowRight size={12} />
                  </a>
                </div>
              </div>

              {/* Stack of eBay and Shopify */}
              <div className="sm:col-span-5 flex flex-col gap-4">
                {/* eBay Card */}
                <div className="bg-[#E5A823] rounded-2xl md:rounded-[28px] p-6 flex flex-col justify-between min-h-[110px] shadow-md group">
                  <div className="flex items-center justify-center">
                    <img
                      src="/assets/images/ebay-logo.png"
                      alt="eBay"
                      className="h-7 w-auto object-contain transition-transform group-hover:scale-105"
                    />
                  </div>
                  <div className="text-right pt-2">
                    <a
                      href="https://api.whatsapp.com/send?phone=13213176615"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 bg-white/20 hover:bg-white/30 text-white text-[10px] font-medium py-0.5 px-2.5 rounded-full transition-colors"
                    >
                      <span>Learn more</span>
                      <ArrowRight size={10} />
                    </a>
                  </div>
                </div>

                {/* Shopify Card */}
                <div className="bg-[#008060] rounded-2xl md:rounded-[28px] p-6 flex flex-col justify-between min-h-[110px] shadow-md group">
                  <div className="flex items-center justify-center">
                    <img
                      src="/assets/images/shopify-logo.png"
                      alt="Shopify"
                      className="h-8 w-auto object-contain transition-transform group-hover:scale-105"
                    />
                  </div>
                  <div className="text-right pt-2">
                    <a
                      href="https://api.whatsapp.com/send?phone=13213176615"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 bg-white/20 hover:bg-white/30 text-white text-[10px] font-medium py-0.5 px-2.5 rounded-full transition-colors"
                    >
                      <span>Learn more</span>
                      <ArrowRight size={10} />
                    </a>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Segments Showcase Section */}
      <section className="bg-brand-navy text-white py-16 md:py-24 px-4 sm:px-6 my-10 rounded-3xl md:rounded-[40px] max-w-[1300px] mx-auto shadow-2xl">
        <div className="max-w-[1200px] mx-auto space-y-12">
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tight max-w-2xl mx-auto leading-tight">
              We've constantly engaged with <br />
              <span className="font-semibold">all type of segments</span>
            </h2>
          </div>

          {/* Mosaic Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-6 items-stretch">
            {/* Segment Card 1: Makeup brushes */}
            <div className="lg:col-span-4 bg-white/5 rounded-3xl overflow-hidden min-h-[200px] flex items-center justify-center border border-white/10 group p-2">
              <img
                src="/assets/images/teste_.png"
                alt="Health & Beauty"
                className="w-full h-full object-cover object-center max-h-[220px] rounded-2xl transition-transform group-hover:scale-105"
                loading="lazy"
              />
            </div>

            {/* Segment Card 2: Tech / Cables */}
            <div className="lg:col-span-4 bg-white/5 rounded-3xl overflow-hidden min-h-[200px] flex items-center justify-center border border-white/10 group p-2">
              <img
                src="/assets/images/teste-cabos.png"
                alt="Electronics & Tech"
                className="w-full h-full object-cover object-center max-h-[220px] rounded-2xl transition-transform group-hover:scale-105"
                loading="lazy"
              />
            </div>

            {/* Segment Card 3: 40g repeating pattern */}
            <div className="lg:col-span-4 bg-white/5 rounded-3xl overflow-hidden min-h-[200px] p-6 flex items-center justify-center border border-white/10">
              <img
                src="/assets/images/brand-pattern.png"
                alt="40g"
                className="w-auto h-24 object-contain opacity-90"
                loading="lazy"
              />
            </div>

            {/* Segment Card 4: Child playing with toy */}
            <div className="lg:col-span-4 bg-white/5 rounded-3xl overflow-hidden min-h-[200px] flex items-center justify-center border border-white/10 group p-2">
              <img
                src="/assets/images/child.png"
                alt="Toys & Children"
                className="w-full h-full object-cover object-center max-h-[220px] rounded-2xl transition-transform group-hover:scale-105"
                loading="lazy"
              />
            </div>

            {/* Segment Card 5: Link message */}
            <div className="lg:col-span-4 bg-white text-brand-navy rounded-3xl p-8 flex flex-col justify-center shadow-lg">
              <h4 className="text-2xl sm:text-3xl font-light leading-tight">
                We're the link <br />
                <span className="italic font-normal">your business </span>
                <span className="font-semibold">needs to sell.</span>
              </h4>
            </div>

            {/* Segment Card 6: Shoes / Fashion */}
            <div className="lg:col-span-4 bg-white/5 rounded-3xl overflow-hidden min-h-[200px] flex items-center justify-center border border-white/10 group p-2">
              <img
                src="/assets/images/shoes.png"
                alt="Footwear & Fashion"
                className="w-full h-full object-cover object-center max-h-[220px] rounded-2xl transition-transform group-hover:scale-105"
                loading="lazy"
              />
            </div>
          </div>

          {/* Categories Pill Text & Family photo banner */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-6">
            <div className="lg:col-span-6 space-y-4">
              <p className="text-white text-2xl sm:text-3xl font-light leading-relaxed">
                Grocery, electronics, <br />
                health & beauty, <br />
                clothes, personal care, <br />
                toys, home & kitchen
              </p>
            </div>
            <div className="lg:col-span-6 rounded-3xl overflow-hidden shadow-2xl border border-white/15">
              <img
                src="/assets/images/market.png"
                alt="Supermarket grocery"
                className="w-full h-64 sm:h-72 object-cover object-center"
                loading="lazy"
              />
            </div>
          </div>

        </div>
      </section>

      {/* FAQ & Contact Form Section */}
      <section className="py-14 md:py-24 px-4 sm:px-6">
        <div className="max-w-[1260px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-14 items-start">
          <div className="lg:col-span-6">
            <FaqAccordion />
          </div>
          <div className="lg:col-span-6">
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Video Banner */}
      <VideoBanner />
    </div>
  );
};
