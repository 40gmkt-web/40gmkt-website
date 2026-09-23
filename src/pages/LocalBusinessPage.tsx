import React, { useState } from 'react';
import { VideoHero } from '../components/VideoHero';
import { FaqAccordion } from '../components/FaqAccordion';
import { ContactForm } from '../components/ContactForm';
import { VideoBanner } from '../components/VideoBanner';
import { ArrowDown } from 'lucide-react';

export const LocalBusinessPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'ongoing' | 'onetime'>('ongoing');

  return (
    <div className="min-h-screen">
      {/* Video Hero */}
      <VideoHero
        videoSrc="/assets/videos/hero-localbusiness.mp4"
        posterSrc="/assets/images/hero-localbusiness-poster.png"
        title={
          <>
            We know that <span className="font-light">your services </span>
            <span className="italic font-normal">are essential</span>
          </>
        }
        subtitleText="That’s why We offer specialized local business solutions for you."
        ctaText="Book a Call"
        ctaLink="https://api.whatsapp.com/send?phone=13213176615"
      />

      {/* Why does your company need to have an online presence? - Orange Stats */}
      <section className="bg-brand-orange text-white py-16 md:py-24 px-4 sm:px-6 my-10 rounded-3xl md:rounded-[40px] max-w-[1300px] mx-auto shadow-xl">
        <div className="max-w-[1140px] mx-auto text-center space-y-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tight max-w-2xl mx-auto leading-tight">
            Why does your <span className="font-semibold">company need to </span>
            <span className="italic font-normal">have an online presence?</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 items-start">
            {/* Stat 1 */}
            <div className="space-y-3">
              <div className="text-5xl sm:text-6xl md:text-7xl font-semibold tracking-tight text-white">
                86%
              </div>
              <p className="text-white/90 text-sm sm:text-base font-light max-w-xs mx-auto leading-relaxed">
                of customers use Google Maps to find local business
              </p>
            </div>

            {/* Stat 2 */}
            <div className="space-y-3">
              <div className="text-5xl sm:text-6xl md:text-7xl font-semibold tracking-tight text-white">
                84%
              </div>
              <p className="text-white/90 text-sm sm:text-base font-light max-w-xs mx-auto leading-relaxed">
                of people use Google 3+ times per day.
              </p>
            </div>

            {/* Stat 3 */}
            <div className="space-y-3">
              <div className="text-5xl sm:text-6xl md:text-7xl font-semibold tracking-tight text-white">
                80%
              </div>
              <p className="text-white/90 text-sm sm:text-base font-light max-w-xs mx-auto leading-relaxed">
                of local searches on mobile devices result in a conversion
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Local Business Bento Grid */}
      <section className="py-10 md:py-16 px-4 sm:px-6">
        <div className="max-w-[1260px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Left Column: 4-Way Method & We're specialized */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {/* 4-Way Method (Royal Blue) */}
            <div className="bg-brand-royalBlue text-white rounded-3xl md:rounded-[36px] p-8 sm:p-10 flex flex-col justify-center min-h-[180px] sm:min-h-[200px] shadow-lg">
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight">
                4-Way <br />
                <span className="font-semibold">Method®</span>
              </h3>
            </div>

            {/* We're specialized in local business (Deep Navy) */}
            <div className="bg-brand-navy text-white rounded-3xl md:rounded-[36px] p-8 sm:p-10 flex flex-col justify-center min-h-[180px] sm:min-h-[200px] shadow-lg">
              <h3 className="text-3xl sm:text-4xl font-light leading-tight">
                We're <br />
                <span className="font-semibold">specialized in </span> <br />
                <span className="italic font-normal">local business</span>
              </h3>
            </div>
          </div>

          {/* Right Column: We're the link + 40g Platform + Pattern & Badge */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            {/* We're the link your business needs to sell (White card with Orange text) */}
            <div className="bg-white border-2 border-slate-100 rounded-3xl md:rounded-[36px] p-8 sm:p-10 flex flex-col justify-center min-h-[180px] sm:min-h-[200px] shadow-sm">
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-light text-brand-orange leading-[1.08] tracking-tight">
                We’re the link <br />
                <span className="italic font-normal">your business </span>
                <span className="font-semibold">needs to sell.</span>
              </h3>
            </div>

            {/* Bottom Row: 40g Platform (Sky Blue) + Pattern/Badge Stack */}
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-stretch">
              {/* 40g Platform */}
              <div className="sm:col-span-7 bg-brand-skyBlue text-white rounded-3xl md:rounded-[36px] p-8 sm:p-10 flex flex-col justify-center min-h-[180px] sm:min-h-[200px] shadow-md">
                <h3 className="text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight">
                  40g <br />
                  <span className="font-semibold">Platform®</span>
                </h3>
              </div>

              {/* Pattern & Black Badge */}
              <div className="sm:col-span-5 flex flex-col gap-4 justify-between">
                <div className="bg-brand-orange/10 rounded-2xl md:rounded-[28px] overflow-hidden p-3 flex items-center justify-center border border-brand-orange/20 min-h-[90px]">
                  <img
                    src="/assets/images/brand-pattern.png"
                    alt="40g Pattern"
                    className="w-full h-auto object-contain max-h-20 opacity-90"
                    loading="lazy"
                  />
                </div>
                <div className="bg-brand-dark rounded-2xl md:rounded-[28px] p-5 flex items-center justify-center shadow-lg min-h-[90px]">
                  <img
                    src="/assets/images/logo-white.png"
                    alt="40g"
                    className="h-9 w-auto object-contain"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Diverse Service Offerings - Interactive Tabs */}
      <section className="bg-brand-orange text-white py-16 md:py-24 px-4 sm:px-6 my-10 rounded-3xl md:rounded-[40px] max-w-[1300px] mx-auto shadow-2xl">
        <div className="max-w-[1200px] mx-auto space-y-10">
          <div className="text-center space-y-6">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tight max-w-2xl mx-auto leading-tight">
              Accelerate your business with our <br />
              <span className="font-semibold">diverse service offerings.</span>
            </h2>

            {/* Tab Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
              <button
                type="button"
                onClick={() => setActiveTab('ongoing')}
                className={`inline-flex items-center gap-2 text-xs sm:text-sm font-medium py-2.5 px-6 rounded-full transition-all duration-200 ${
                  activeTab === 'ongoing'
                    ? 'bg-brand-navy text-white shadow-lg'
                    : 'bg-white/20 text-white hover:bg-white/30 backdrop-blur-sm'
                }`}
              >
                <span>Ongoing Solutions</span>
                <ArrowDown size={14} />
              </button>

              <button
                type="button"
                onClick={() => setActiveTab('onetime')}
                className={`inline-flex items-center gap-2 text-xs sm:text-sm font-medium py-2.5 px-6 rounded-full transition-all duration-200 ${
                  activeTab === 'onetime'
                    ? 'bg-brand-navy text-white shadow-lg'
                    : 'bg-white/20 text-white hover:bg-white/30 backdrop-blur-sm'
                }`}
              >
                <span>One-time Solutions</span>
                <ArrowDown size={14} />
              </button>
            </div>
          </div>

          {/* TAB 1: ONGOING SOLUTIONS */}
          {activeTab === 'ongoing' && (
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch animate-in fade-in duration-300">
              {/* Card 1: Visual Communication (Royal Blue) */}
              <div className="md:col-span-7 bg-brand-royalBlue text-white rounded-3xl md:rounded-[36px] p-8 sm:p-10 flex flex-col justify-center min-h-[220px] shadow-lg">
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-normal leading-tight">
                  <span className="font-semibold">Visual Communication</span> <br />
                  <span className="font-light">Design with </span>
                  <span className="italic font-normal">Expert Designers</span>
                </h3>
              </div>

              {/* Card 2: Paid Marketing Solutions (White Card) */}
              <div className="md:col-span-5 bg-white text-brand-orange rounded-3xl md:rounded-[36px] p-8 sm:p-10 flex flex-col justify-center min-h-[220px] shadow-lg">
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold leading-tight">
                  Paid Marketing <br />
                  <span className="text-brand-orange font-normal">Solutions</span> <br />
                  <span className="text-xs sm:text-sm font-normal italic text-slate-500 block pt-2">
                    with Expert Managers
                  </span>
                </h3>
              </div>

              {/* Card 3: CRM (Deep Navy) */}
              <div className="md:col-span-4 bg-brand-navy text-white rounded-3xl md:rounded-[36px] p-8 sm:p-10 flex flex-col justify-center min-h-[200px] shadow-lg">
                <h3 className="text-3xl sm:text-4xl font-bold tracking-tight">
                  CRM <br />
                  <span className="text-xs sm:text-sm font-normal text-white/80 block pt-2">
                    with Marchinbird Platform®
                  </span>
                </h3>
              </div>

              {/* Card 4: Marketing Strategy Solutions (Amber) */}
              <div className="md:col-span-4 bg-brand-amber text-white rounded-3xl md:rounded-[36px] p-8 sm:p-10 flex flex-col justify-center min-h-[200px] shadow-lg">
                <h3 className="text-2xl sm:text-3xl font-semibold leading-tight">
                  Marketing <br />
                  Strategy <br />
                  Solutions <br />
                  <span className="text-xs sm:text-sm font-normal italic text-white/80 block pt-1">
                    with 4-Way Method®
                  </span>
                </h3>
              </div>

              {/* Card 5: Social Media Solutions (Sky Blue) */}
              <div className="md:col-span-4 bg-brand-skyBlue text-white rounded-3xl md:rounded-[36px] p-8 sm:p-10 flex flex-col justify-center min-h-[200px] shadow-lg">
                <h3 className="text-2xl sm:text-3xl font-semibold leading-tight">
                  Social Media <br />
                  Solutions <br />
                  <span className="text-xs sm:text-sm font-normal italic text-white/80 block pt-2">
                    with 4-Way Method®
                  </span>
                </h3>
              </div>
            </div>
          )}

          {/* TAB 2: ONE-TIME SOLUTIONS */}
          {activeTab === 'onetime' && (
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch animate-in fade-in duration-300">
              {/* Card 1: Brand Development (Deep Navy) */}
              <div className="md:col-span-6 bg-brand-navy text-white rounded-3xl md:rounded-[36px] p-8 sm:p-10 flex flex-col justify-center min-h-[200px] shadow-lg">
                <h3 className="text-3xl sm:text-4xl font-light leading-tight">
                  Brand <br />
                  <span className="font-semibold">Development</span>
                </h3>
              </div>

              {/* Card 2: Products Development (Sky Blue) */}
              <div className="md:col-span-6 bg-brand-skyBlue text-white rounded-3xl md:rounded-[36px] p-8 sm:p-10 flex flex-col justify-center min-h-[200px] shadow-lg">
                <h3 className="text-3xl sm:text-4xl font-light leading-tight">
                  Products <br />
                  <span className="font-semibold">Development</span>
                </h3>
              </div>

              {/* Card 3: Website Development (Royal Blue) */}
              <div className="md:col-span-4 bg-brand-royalBlue text-white rounded-3xl md:rounded-[36px] p-8 sm:p-10 flex flex-col justify-center min-h-[190px] shadow-lg">
                <h3 className="text-2xl sm:text-3xl font-light leading-tight">
                  Website <br />
                  <span className="font-semibold">Development</span>
                </h3>
              </div>

              {/* Card 4: Video Production (White Card) */}
              <div className="md:col-span-4 bg-white text-brand-navy rounded-3xl md:rounded-[36px] p-8 sm:p-10 flex flex-col justify-center min-h-[190px] shadow-lg">
                <h3 className="text-2xl sm:text-3xl font-light leading-tight">
                  Video <br />
                  <span className="font-semibold text-brand-orange">Production</span>
                </h3>
              </div>

              {/* Card 5: Photography & Photo Editing (Amber) */}
              <div className="md:col-span-4 bg-brand-amber text-white rounded-3xl md:rounded-[36px] p-8 sm:p-10 flex flex-col justify-center min-h-[190px] shadow-lg">
                <h3 className="text-2xl sm:text-3xl font-light leading-tight">
                  Photography and <br />
                  <span className="font-semibold">Photo Editing</span>
                </h3>
              </div>
            </div>
          )}

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
