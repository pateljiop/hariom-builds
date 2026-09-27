'use client';

import { useEffect, useState } from 'react';

const lines = [
  '[KERNEL] BOOTING HARIOMBUILDS OS v2.6...',
  '[HARDWARE] 5-DISPLAY RIG SYNCHRONIZED',
  '[PIPELINE] CLOUDFLARE EDGE & PYTHON APIS MOUNTED',
  '[STATUS] WEBGL CANVAS INITIALIZED',
  '>> ACCESS GRANTED.',
];

export default function BootSequence() {
  const [visible, setVisible] = useState(true);
  const [typed, setTyped] = useState<string[]>([]);

  useEffect(() => {
    const key = 'hariombuilds-boot-v2';
    try {
      if (sessionStorage.getItem(key)) {
        setVisible(false);
        return;
      }
      sessionStorage.setItem(key, '1');
    } catch {}

    const timers: ReturnType<typeof setTimeout>[] = [];
    lines.forEach((line, index) => {
      timers.push(setTimeout(() => setTyped((current) => [...current, line]), index * 130));
    });
    timers.push(setTimeout(() => setVisible(false), 1000));

    return () => timers.forEach(clearTimeout);
  }, []);

  if (!visible) return null;

  return (
    <div className="boot-sequence" role="status" aria-label="HariomBuilds system startup">
      <div className="boot-noise" />
      <div className="boot-window">
        <div className="boot-topline">
          <span>HARIOMBUILDS // KERNEL CONSOLE</span>
          <span>ONLINE</span>
        </div>
        <div className="boot-lines">
          {typed.map((line) => (
            <div key={line} className={line.includes('ACCESS') ? 'boot-line boot-success' : 'boot-line'}>
              {line}
            </div>
          ))}
          <span className="boot-cursor">█</span>
        </div>
      </div>
    </div>
  );
}
