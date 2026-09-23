import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

interface FaqItem {
  question: string;
  answer: string;
}

const faqs: FaqItem[] = [
  {
    question: 'What services do we offer?',
    answer: 'We offer branding, graphic design, social media management, content creation, SEO, and digital advertising to help your business grow.'
  },
  {
    question: 'How can our agency help your business?',
    answer: 'We create customized marketing strategies to increase your brand visibility, attract customers, and drive sales.'
  },
  {
    question: 'What makes our agency different?',
    answer: 'As a Brazilian agency in Orlando, we understand both markets. Our passionate team provides personalized, high-quality, creative solutions tailored to your needs.'
  }
];

export const FaqAccordion: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div id="about" className="space-y-6">
      <div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-brand-navy tracking-tight">
          About <span className="font-semibold">Us</span>
        </h2>
      </div>

      <div className="space-y-4 pt-2">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={index}
              className="border-b border-slate-200/80 pb-4 transition-colors"
            >
              <button
                type="button"
                onClick={() => toggleItem(index)}
                className="w-full flex items-center justify-between text-left py-3 group focus:outline-none"
                aria-expanded={isOpen}
              >
                <span className="text-base sm:text-lg md:text-xl font-normal text-brand-navy group-hover:text-brand-orange transition-colors pr-4">
                  {faq.question}
                </span>

                <div className="w-7 h-7 rounded-full bg-brand-orange text-white flex items-center justify-center shrink-0 transition-transform duration-200 group-hover:scale-105 shadow-sm">
                  {isOpen ? <Minus size={15} strokeWidth={2.5} /> : <Plus size={15} strokeWidth={2.5} />}
                </div>
              </button>

              <div
                className={`grid transition-all duration-300 ease-in-out ${
                  isOpen ? 'grid-rows-[1fr] opacity-100 mt-2' : 'grid-rows-[0fr] opacity-0'
                }`}
              >
                <div className="overflow-hidden">
                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed pb-2">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
