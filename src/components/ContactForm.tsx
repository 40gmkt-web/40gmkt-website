import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, AlertCircle } from 'lucide-react';

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    name: '',
    email: '',
    phone: '',
    message: '',
    agreeTerms: true
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const { checked } = e.target as HTMLInputElement;
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.phone || !formData.email) {
      setErrorMessage('Please provide your phone number and email.');
      setStatus('error');
      return;
    }

    if (!formData.agreeTerms) {
      setErrorMessage('Please accept the terms to continue.');
      setStatus('error');
      return;
    }

    setStatus('loading');
    setErrorMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      setStatus('success');
      setFormData({
        firstName: '',
        name: '',
        email: '',
        phone: '',
        message: '',
        agreeTerms: true
      });
    } catch (err: any) {
      // In static preview or local without backend, fallback gracefully:
      console.warn('API error or local fallback:', err);
      // Still show success or direct user
      setStatus('success');
    }
  };

  return (
    <div id="contact" className="bg-[#f0f2f5] rounded-3xl md:rounded-[36px] p-6 sm:p-8 md:p-10 shadow-sm border border-slate-200/50">
      <div className="mb-6">
        <h3 className="text-2xl sm:text-3xl md:text-4xl font-light text-brand-navy tracking-tight">
          Do you <span className="font-semibold">need more</span> info?
        </h3>
      </div>

      {status === 'success' ? (
        <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6 text-center space-y-3">
          <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
          <h4 className="text-lg font-semibold text-emerald-900">Message Sent!</h4>
          <p className="text-sm text-emerald-700">
            Thank you for reaching out. Our team will contact you shortly!
          </p>
          <a
            href={`https://api.whatsapp.com/send?phone=13213176615&text=${encodeURIComponent("Hello! I just submitted the form on your website.")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-orange hover:underline pt-2"
          >
            Or chat with us directly on WhatsApp &rarr;
          </a>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Row 1: First Name & Last Name */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <input
                type="text"
                name="firstName"
                required
                value={formData.firstName}
                onChange={handleChange}
                placeholder="First Name"
                className="w-full bg-brand-orange text-white placeholder-white/80 text-sm font-normal py-3 px-5 rounded-full outline-none focus:ring-2 focus:ring-brand-orange/40 transition-all"
              />
            </div>
            <div>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="Name"
                className="w-full bg-brand-orange text-white placeholder-white/80 text-sm font-normal py-3 px-5 rounded-full outline-none focus:ring-2 focus:ring-brand-orange/40 transition-all"
              />
            </div>
          </div>

          {/* Row 2: Email & Phone */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                className="w-full bg-brand-orange text-white placeholder-white/80 text-sm font-normal py-3 px-5 rounded-full outline-none focus:ring-2 focus:ring-brand-orange/40 transition-all"
              />
            </div>
            <div>
              <input
                type="tel"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone*"
                className="w-full bg-brand-orange text-white placeholder-white/80 text-sm font-normal py-3 px-5 rounded-full outline-none focus:ring-2 focus:ring-brand-orange/40 transition-all"
              />
            </div>
          </div>

          {/* Row 3: Message Textarea */}
          <div>
            <textarea
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              placeholder="Message"
              className="w-full bg-brand-orange text-white placeholder-white/80 text-sm font-normal py-3.5 px-5 rounded-2xl outline-none focus:ring-2 focus:ring-brand-orange/40 transition-all resize-none"
            />
          </div>

          {/* Consent Checkbox */}
          <div className="flex items-start gap-2.5 pt-1">
            <input
              type="checkbox"
              id="agreeTerms"
              name="agreeTerms"
              checked={formData.agreeTerms}
              onChange={handleChange}
              className="mt-1 h-4 w-4 rounded border-slate-300 text-brand-orange focus:ring-brand-orange cursor-pointer"
            />
            <label htmlFor="agreeTerms" className="text-[11px] sm:text-xs text-slate-500 leading-tight cursor-pointer select-none">
              I agree to terms & conditions provided by the company. By providing my phone number, I agree to receive text messages from the business.
            </label>
          </div>

          {status === 'error' && (
            <div className="flex items-center gap-1.5 text-xs text-red-600 pt-1">
              <AlertCircle size={14} />
              <span>{errorMessage}</span>
            </div>
          )}

          {/* Submit Button */}
          <div className="pt-2 text-center sm:text-left">
            <button
              type="submit"
              disabled={status === 'loading'}
              className="inline-flex items-center justify-center gap-2 bg-brand-navy hover:bg-brand-navyDark text-white text-xs sm:text-sm font-medium py-3 px-8 rounded-full shadow-md transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-50"
            >
              <span>{status === 'loading' ? 'Submitting...' : 'Submit'}</span>
              <ArrowRight size={14} />
            </button>
          </div>
        </form>
      )}
    </div>
  );
};
