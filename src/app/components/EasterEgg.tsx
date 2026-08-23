'use client';
import React, { useEffect, useState, useCallback } from 'react';

const SECRET_SEQUENCE = ['h', 'a', 'r', 'i', 'o', 'm'];

export default function EasterEgg() {
  const [sequence, setSequence] = useState<string[]>([]);
  const [active, setActive] = useState(false);
  const [message, setMessage] = useState('');

  const triggerEgg = useCallback((msg: string) => {
    setMessage(msg);
    setActive(true);
    setTimeout(() => setActive(false), 4000);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const key = e.key.toLowerCase();
      setSequence((prev) => {
        const next = [...prev, key].slice(-SECRET_SEQUENCE.length);
        if (next.join('') === SECRET_SEQUENCE.join('')) {
          triggerEgg('🚀 SYSTEM UNLOCKED — KEEP BUILDING.');
          return [];
        }
        return next;
      });
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [triggerEgg]);

  if (!active) return null;

  return (
    <div
      className="fixed inset-0 z-[9998] flex items-center justify-center pointer-events-none"
      role="alert"
      aria-live="polite"
    >
      <div
        className="glass rounded-3xl px-10 py-8 text-center border border-primary/30 glow-cyan"
        style={{
          animation: 'easterEgg 0.6s cubic-bezier(0.23, 1, 0.32, 1) forwards',
          background: 'rgba(13,15,26,0.95)',
        }}
      >
        <p className="text-primary font-extrabold text-xl tracking-widest uppercase mb-2">{message}</p>
        <p className="text-muted-foreground text-xs tracking-[0.3em] uppercase">
          Code • Create • Automate
        </p>
      </div>
    </div>
  );
}