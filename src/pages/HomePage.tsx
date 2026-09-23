import React from 'react';
import { VideoHero } from '../components/VideoHero';
import { CategoryPills } from '../components/CategoryPills';
import { HomeBento } from '../components/HomeBento';
import { SpecializedGrid } from '../components/SpecializedGrid';
import { FaqAccordion } from '../components/FaqAccordion';
import { ContactForm } from '../components/ContactForm';
import { VideoBanner } from '../components/VideoBanner';

export const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Hero with High-Definition Background Video */}
      <VideoHero
        videoSrc="/assets/videos/hero-home.mp4"
        posterSrc="/assets/images/hero-home-poster.jpg"
        subtitlePill="Say goodbye to the past with traditional agencies and hello to the future with your visionary new partner"
        title={
          <>
            Our goal is to make your <br />
            <span className="font-semibold">business grow even more</span>
          </>
        }
        ctaText="Book a Call"
        ctaLink="https://api.whatsapp.com/send?phone=13213176615"
      />

      {/* Category Pills & Growth Pitch */}
      <CategoryPills />

      {/* Bento Grid */}
      <HomeBento />

      {/* Specialized In Section */}
      <SpecializedGrid />

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

      {/* Bottom Video Banner */}
      <VideoBanner />
    </div>
  );
};
