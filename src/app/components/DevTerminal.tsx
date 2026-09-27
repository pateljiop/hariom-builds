'use client';

import { useMemo, useState } from 'react';
import { TerminalSquare } from 'lucide-react';

const commands = ['help', 'rig', 'stack', 'certs', 'socials', 'channel', 'contact', 'clear'];

const outputs: Record<string, string[]> = {
  rig: ['RIG STATUS: ACTIVE', 'DISPLAY ARRAY: 5 MONITORS', 'WORKFLOW: CODE / TERMINAL / BROWSER', 'EDGE: CLOUDFLARE'],
  stack: ['LANG: Python, TypeScript, JavaScript, SQL', 'FRAMEWORKS: Next.js, React, FastAPI, Django, Flask', 'TOOLS: Three.js, Framer Motion, Tailwind, Pandas, NumPy, Docker'],
  certs: ['CodSoft — Python Development', 'InternPe — Python Development', 'Udemy — Generative AI for Data Analytics'],
  socials: ['GitHub: github.com/pateljiop', 'LinkedIn: linkedin.com/in/pateljiop', 'Instagram: instagram.com/hariompatel.dev', 'Telegram: t.me/hariompatel.dev'],
  channel: ['YouTube: TechMind Central', 'AI tools • automated workflows • developer productivity'],
  contact: ['EMAIL: ahuzahariom@gmail.com', 'TYPE: direct engineering enquiry'],
};

export default function DevTerminal() {
  const [history, setHistory] = useState<string[]>(['HARIOMBUILDS CLI v2.6', 'Type “help” to inspect available commands.']);
  const [input, setInput] = useState('');

  const help = useMemo(() => commands.map((command) => `  ${command}`).join('\n'), []);

  const run = (value: string) => {
    const command = value.trim().toLowerCase();
    if (!command) return;
    if (command === 'clear') {
      setHistory([]);
      return;
    }
    if (command === 'help') {
      setHistory((h) => [...h, `$ ${command}`, help]);
      return;
    }
    const result = outputs[command] ?? [`command not found: ${command}`, 'Type “help” for available commands.'];
    setHistory((h) => [...h, `$ ${command}`, ...result]);
  };

  return (
    <section className="studio-section" id="terminal">
      <div className="studio-shell">
        <div className="section-heading">
          <div className="eyebrow">05 / DEVELOPER TERMINAL</div>
          <h2>ASK THE SYSTEM.</h2>
        </div>

        <div className="dev-terminal">
          <div className="terminal-header"><TerminalSquare size={16} /> hariombuilds@studio:~ <span>interactive</span></div>
          <div className="terminal-body">
            {history.map((line, index) => <div key={`${index}-${line}`} className={line.startsWith('$') ? 'terminal-command' : 'terminal-output'}>{line}</div>)}
            <form
              onSubmit={(event) => {
                event.preventDefault();
                run(input);
                setInput('');
              }}
              className="terminal-form"
            >
              <span>$</span>
              <input value={input} onChange={(event) => setInput(event.target.value)} aria-label="Terminal command" autoComplete="off" spellCheck={false} />
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
