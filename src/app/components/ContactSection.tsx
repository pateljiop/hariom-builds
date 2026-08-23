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
  website: string;
}

export default function ContactSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [form, setForm] = useState<FormState>({ name: '', business: '', email: '', services: [], message: '', website: '' });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.querySelectorAll('.reveal-up, .reveal-fade').forEach((el, i) => {
            setTimeout(() => el.classList.add('revealed'), i * 100);
          });
        }
      });
    }, { threshold: 0.1 });
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const toggleService = (id: string) => {
    setForm((prev) => ({ ...prev, services: prev.services.includes(id) ? prev.services.filter((s) => s !== id) : [...prev.services, id] }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError('');

    const name = form.name.trim();
    const email = form.email.trim();
    const business = form.business.trim();
    const message = form.message.trim();

    // Honeypot: real visitors never see or fill this field.
    if (form.website) {
      setSubmitting(false);
      return;
    }

    if (!name || !email) {
      setError('Please add your name and email before sending.');
      setSubmitting(false);
      return;
    }

    try {
      const response = await fetch('https://formsubmit.co/ajax/hariompatel.dev@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name,
          business: business || 'Not provided',
          email,
          services: form.services.length
            ? form.services.map((id) => SERVICE_OPTIONS.find((s) => s.id === id)?.label || id).join(', ')
            : 'Not specified',
          message: message || 'No additional message provided.',
          _subject: `New Hariom Builds enquiry from ${name}`,
          _template: 'table',
          _captcha: 'true',
          _honey: form.website,
        }),
      });

      if (!response.ok) throw new Error('Submission failed');
      const result = await response.json().catch(() => ({ success: true }));
      if (result.success === false) throw new Error('Submission failed');

      setForm({ name: '', business: '', email: '', services: [], message: '', website: '' });
      setSubmitted(true);
    } catch {
      setError('We could not send your message right now. Please email hariompatel.dev@gmail.com directly.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" ref={sectionRef} className="py-24 px-6 relative overflow-hidden" aria-labelledby="contact-heading">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] blob-cyan opacity-20 pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] blob-red opacity-15 pointer-events-none" aria-hidden="true" />
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-16 reveal-up">
          <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-primary mb-4 block">Start Here</span>
          <h2 id="contact-heading" className="text-section-title font-extrabold uppercase text-foreground mb-4">
            HAVE A PROBLEM <span className="text-gradient-cyan">WORTH BUILDING?</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Tell me what you&apos;re trying to improve. I&apos;ll figure out what can be built.
          </p>
        </div>

        <div className="glass-card rounded-3xl p-8 md:p-12 gradient-border reveal-up delay-100 relative overflow-hidden">
          <div className="absolute top-6 right-6 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" aria-hidden="true" />
            <span className="text-[9px] font-bold uppercase tracking-widest text-primary">System Ready</span>
          </div>

          {submitted ? (
            <div className="text-center py-16 space-y-6" role="status" aria-live="polite">
              <div className="w-20 h-20 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center mx-auto glow-cyan">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true"><path d="M6 16l7 7 13-13" stroke="#00D2FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </div>
              <h3 className="text-2xl font-extrabold text-foreground">Message Received.</h3>
              <p className="text-muted-foreground">Your enquiry has been sent to Hariom. Expect a thoughtful reply within 24–48 hours.</p>
              <button onClick={() => setSubmitted(false)} className="px-6 py-3 border border-border text-muted-foreground rounded-full text-xs font-bold uppercase tracking-widest hover:border-primary hover:text-primary transition-all">Send Another</button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate aria-label="Project inquiry form">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="contact-name" className="block text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground mb-2">Name <span className="text-accent" aria-hidden="true">*</span></label>
                  <input id="contact-name" type="text" required autoComplete="name" value={form.name} onChange={(e) => setForm((p) => ({ ...p, name: e.target.value }))} placeholder="Your name" className="w-full px-4 py-3 bg-muted border border-border rounded-xl text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:border-primary transition-colors" aria-required="true" />
                </div>
                <div>
                  <label htmlFor="contact-business" className="block text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground mb-2">Business</label>
                  <input id="contact-business" type="text" autoComplete="organization" value={form.business} onChange={(e) => setForm((p) => ({ ...p, business: e.target.value }))} placeholder="Your business name" className="w-full px-4 py-3 bg-muted border border-border rounded-xl text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:border-primary transition-colors" />
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="contact-email" className="block text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground mb-2">Email <span className="text-accent" aria-hidden="true">*</span></label>
                <input id="contact-email" type="email" required autoComplete="email" value={form.email} onChange={(e) => setForm((p) => ({ ...p, email: e.target.value }))} placeholder="your@email.com" className="w-full px-4 py-3 bg-muted border border-border rounded-xl text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:border-primary transition-colors" aria-required="true" />
              </div>

              <div className="mb-6">
                <fieldset>
                  <legend className="block text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground mb-3">What do you need?</legend>
                  <div className="flex flex-wrap gap-2">
                    {SERVICE_OPTIONS.map((opt) => (
                      <button key={opt.id} type="button" onClick={() => toggleService(opt.id)} className="px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-primary" style={{ background: form.services.includes(opt.id) ? 'rgba(0,210,255,0.15)' : 'rgba(255,255,255,0.04)', border: `1px solid ${form.services.includes(opt.id) ? 'rgba(0,210,255,0.5)' : 'rgba(255,255,255,0.08)'}`, color: form.services.includes(opt.id) ? '#00D2FF' : 'rgba(255,255,255,0.5)' }} aria-pressed={form.services.includes(opt.id)}>{opt.label}</button>
                    ))}
                  </div>
                </fieldset>
              </div>

              <div className="mb-8">
                <label htmlFor="contact-message" className="block text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground mb-2">Tell me about the problem</label>
                <textarea id="contact-message" rows={5} value={form.message} onChange={(e) => setForm((p) => ({ ...p, message: e.target.value }))} placeholder="Describe the problem you&apos;re trying to solve..." className="w-full px-4 py-3 bg-muted border border-border rounded-xl text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:border-primary transition-colors resize-none" />
              </div>

              <div className="absolute -left-[9999px]" aria-hidden="true">
                <label htmlFor="contact-website">Website</label>
                <input id="contact-website" tabIndex={-1} autoComplete="off" value={form.website} onChange={(e) => setForm((p) => ({ ...p, website: e.target.value }))} />
              </div>

              {error && (
                <p className="mb-6 text-sm text-accent" role="alert">{error}</p>
              )}

              <div className="flex flex-col sm:flex-row items-center gap-6">
                <button type="submit" disabled={submitting || !form.name.trim() || !form.email.trim()} className="magnetic-btn w-full sm:w-auto flex items-center justify-center gap-3 px-10 py-4 bg-primary text-primary-foreground rounded-full font-bold text-sm uppercase tracking-widest hover:bg-secondary transition-all glow-cyan disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus-visible:ring-2 focus-visible:ring-primary" aria-label="Submit project inquiry">
                  {submitting ? (<><svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" strokeDasharray="31.4" strokeDashoffset="10" /></svg>Sending...</>) : (<>START THE CONVERSATION →</>)}
                </button>
                <p className="text-muted-foreground text-xs text-center sm:text-left">Or email <a href="mailto:hariompatel.dev@gmail.com" className="text-primary hover:underline">hariompatel.dev@gmail.com</a></p>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
