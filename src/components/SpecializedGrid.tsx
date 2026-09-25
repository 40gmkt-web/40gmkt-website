import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface CardItem {
  id: string;
  title: string;
  image: string;
  link: string;
  isExternal?: boolean;
}

const cards: CardItem[] = [
  {
    id: 'marketplace',
    title: 'Marketplace Business',
    image: '/assets/images/specialized-marketplace.png',
    link: '/marketplace'
  },
  {
    id: 'localbusiness',
    title: 'Local Business',
    image: '/assets/images/specialized-localbusiness.png',
    link: '/localbusiness'
  },
  {
    id: 'branding',
    title: 'Branding',
    image: '/assets/images/specialized-branding.png',
    link: '/branding'
  },
  {
    id: 'products',
    title: 'Products Development',
    image: '/assets/images/specialized-products.png',
    link: '/localbusiness'
  }
];

export const SpecializedGrid: React.FC = () => {
  return (
    <section id="specialized" className="py-14 md:py-24 px-4 sm:px-6">
      <div className="max-w-[1260px] mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-10 md:mb-14">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-brand-navy tracking-tight">
            We're <span className="font-semibold">Specialized in...</span>
          </h2>
        </div>

        {/* 2x2 Grid of Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {cards.map((card) => {
            const isInternal = card.link.startsWith('/');
            const content = (
              <div
                id={card.id === 'branding' ? 'branding' : undefined}
                className="group relative rounded-3xl md:rounded-[36px] overflow-hidden min-h-[260px] sm:min-h-[300px] md:min-h-[340px] flex items-end p-6 sm:p-8 md:p-10 shadow-lg cursor-pointer transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                {/* Background Image */}
                <img
                  src={card.image}
                  alt={card.title}
                  className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="lazy"
                />

                {/* Dark Vignette Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10 group-hover:from-black/85 transition-colors" />

                {/* Card Title & Button */}
                <div className="relative z-10 w-full flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <h3 className="text-white text-2xl sm:text-3xl md:text-4xl font-normal leading-tight">
                    {card.title}
                  </h3>

                  <span className="inline-flex items-center gap-1.5 bg-brand-orange hover:bg-brand-orangeHover text-white text-xs sm:text-sm font-medium py-2 px-5 rounded-full shadow-glow-orange shrink-0 transition-transform group-hover:scale-105">
                    <span>Learn more</span>
                    <ArrowRight size={14} />
                  </span>
                </div>
              </div>
            );

            return isInternal ? (
              <Link key={card.id} to={card.link}>
                {content}
              </Link>
            ) : (
              <a key={card.id} href={card.link}>
                {content}
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};
