'use client';
import React, { useRef, useEffect, useState } from 'react';

const SERVICE_OPTIONS = [
  { id: 'website', label: 'Website' },
  { id: 'redesign', label: 'Website Redesign' },
  { id: 'landing', label: 'Landing Page' },
  { id: 'automation', label: 'Automation' },
  { id: 'software', label: 'Custom Software' },
  { id: 'ai', label: 'AI System' },
  { id: 'notsure', label: 'Not Sure' },
];

interface FormState {
  name: string;
  business: string;
  email: string;
  services: string[];
  message: string;
}

export default function ContactSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [form, setForm] = useState<FormState>({
    name: '',
    business: '',
    email: '',
    services: [],
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.reveal-up, .reveal-fade').forEach((el, i) => {
              setTimeout(() => el.classList.add('revealed'), i * 100);
            });
          }
        });
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const toggleService = (id: string) => {
    setForm((prev) => ({
      ...prev,
      services: prev.services.includes(id)
        ? prev.services.filter((s) => s !== id)
        : [...prev.services, id],
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    // Mock submission — backend integration point
    await new Promise((res) => setTimeout(res, 1500));
    setSubmitting(false);
    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-24 px-6 relative overflow-hidden"
      aria-labelledby="contact-heading"
    >
      {/* Background blobs */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] blob-cyan opacity-20 pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] blob-red opacity-15 pointer-events-none" aria-hidden="true" />

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16 reveal-up">
          <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-primary mb-4 block">Start Here</span>
          <h2
            id="contact-heading"
            className="text-section-title font-extrabold uppercase text-foreground mb-4"
          >
            HAVE A PROBLEM{' '}
            <span className="text-gradient-cyan">WORTH BUILDING?</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Tell us what you&apos;re trying to improve. We&apos;ll figure out what can be built.
          </p>
        </div>

        {/* Form card */}
        <div className="glass-card rounded-3xl p-8 md:p-12 gradient-border reveal-up delay-100 relative overflow-hidden">
          {/* Assembled system indicator */}
          <div className="absolute top-6 right-6 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" aria-hidden="true" />
            <span className="text-[9px] font-bold uppercase tracking-widest text-primary">System Ready</span>
          </div>

          {submitted ? (
            <div className="text-center py-16 space-y-6">
              <div className="w-20 h-20 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center mx-auto glow-cyan">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
                  <path d="M6 16l7 7 13-13" stroke="#00D2FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3 className="text-2xl font-extrabold text-foreground">Message Received.</h3>
              <p className="text-muted-foreground">
                We&apos;ll look at your business before we respond. Expect a thoughtful reply within 24–48 hours.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="px-6 py-3 border border-border text-muted-foreground rounded-full text-xs font-bold uppercase tracking-widest hover:border-primary hover:text-primary transition-all"
              >
                Send Another
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate aria-label="Project inquiry form">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                {/* Name */}
                <div>
                  <label htmlFor="contact-name" className="block text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground mb-2">
                    Name <span className="text-accent" aria-hidden="true">*</span>
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm((p) => ({ ...p, name: e.target.value }))}
                    placeholder="Your name"
                    className="w-full px-4 py-3 bg-muted border border-border rounded-xl text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:border-primary transition-colors"
                    aria-required="true"
                  />
                </div>

                {/* Business */}
                <div>
                  <label htmlFor="contact-business" className="block text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground mb-2">
                    Business
                  </label>
                  <input
                    id="contact-business"
                    type="text"
                    value={form.business}
                    onChange={(e) => setForm((p) => ({ ...p, business: e.target.value }))}
                    placeholder="Your business name"
                    className="w-full px-4 py-3 bg-muted border border-border rounded-xl text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:border-primary transition-colors"
                  />
                </div>
              </div>

              {/* Email */}
              <div className="mb-6">
                <label htmlFor="contact-email" className="block text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground mb-2">
                  Email <span className="text-accent" aria-hidden="true">*</span>
                </label>
                <input
                  id="contact-email"
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm((p) => ({ ...p, email: e.target.value }))}
                  placeholder="your@email.com"
                  className="w-full px-4 py-3 bg-muted border border-border rounded-xl text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:border-primary transition-colors"
                  aria-required="true"
                />
              </div>

              {/* Services */}
              <div className="mb-6">
                <fieldset>
                  <legend className="block text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground mb-3">
                    What do you need?
                  </legend>
                  <div className="flex flex-wrap gap-2">
                    {SERVICE_OPTIONS.map((opt) => (
                      <button
                        key={opt.id}
                        type="button"
                        onClick={() => toggleService(opt.id)}
                        className="px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                        style={{
                          background: form.services.includes(opt.id) ? 'rgba(0,210,255,0.15)' : 'rgba(255,255,255,0.04)',
                          border: `1px solid ${form.services.includes(opt.id) ? 'rgba(0,210,255,0.5)' : 'rgba(255,255,255,0.08)'}`,
                          color: form.services.includes(opt.id) ? '#00D2FF' : 'rgba(255,255,255,0.5)',
                        }}
                        aria-pressed={form.services.includes(opt.id)}
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>
                </fieldset>
              </div>

              {/* Message */}
              <div className="mb-8">
                <label htmlFor="contact-message" className="block text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground mb-2">
                  Tell us about the problem
                </label>
                <textarea
                  id="contact-message"
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm((p) => ({ ...p, message: e.target.value }))}
                  placeholder="Describe the problem you're trying to solve..."
                  className="w-full px-4 py-3 bg-muted border border-border rounded-xl text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:border-primary transition-colors resize-none"
                />
              </div>

              {/* Submit */}
              <div className="flex flex-col sm:flex-row items-center gap-6">
                <button
                  type="submit"
                  disabled={submitting || !form.name || !form.email}
                  className="magnetic-btn w-full sm:w-auto flex items-center justify-center gap-3 px-10 py-4 bg-primary text-primary-foreground rounded-full font-bold text-sm uppercase tracking-widest hover:bg-secondary transition-all glow-cyan disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                  aria-label="Submit project inquiry"
                >
                  {submitting ? (
                    <>
                      <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" strokeDasharray="31.4" strokeDashoffset="10" />
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>START THE CONVERSATION →</>
                  )}
                </button>
                <p className="text-muted-foreground text-xs text-center sm:text-left">
                  Or email directly:{' '}
                  <a
                    href="mailto:hello@hariombuilds.run.place"
                    className="text-primary hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded"
                  >
                    hello@hariombuilds.run.place
                  </a>
                </p>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}