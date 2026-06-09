import React, { useState } from 'react';
import { Mail, Check, AlertCircle } from 'lucide-react';
import { ViewState } from '../types';

interface FooterProps {
  setView: (view: ViewState) => void;
}

export default function Footer({ setView }: FooterProps) {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      setStatus('error');
      return;
    }
    setStatus('success');
    setEmail('');
    setTimeout(() => setStatus('idle'), 6000);
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#F5F2ED] text-[#0F1112] border-t border-[#0F1112]/20 py-20 px-4 sm:px-6 lg:px-8 paper-grain text-left">
      <div className="max-w-7xl mx-auto">
        
        {/* Core Layout Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16">
          
          {/* Column 1: Scholarly Profile Imprint */}
          <div className="lg:col-span-4 space-y-6">
            <div className="flex items-center space-x-2">
              <span className="border border-[#B8860B] px-2 py-0.5 text-[10px] font-mono text-[#0F1112] tracking-widest font-bold">J.&nbsp;S</span>
              <span className="text-sm font-space tracking-[0.2em] font-semibold">JACK STONE</span>
            </div>
            <p className="font-reading text-sm text-[#0F1112]/75 leading-relaxed font-light font-light">
              Philosopher, Essayist, and Public Thinker. Researching the long-term horizons of human civilization, constitutional memory, and the physical architecture of public trust.
            </p>
            <p className="text-xs font-mono text-[#B8860B] font-semibold">
              STATIONED IN OXFORD, UK . ACTIVE GLOBALLY
            </p>
          </div>

          {/* Column 2: Scholarly Directories */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-space tracking-widest font-semibold text-[#0F1112]/50 uppercase">
              EXPLORE
            </h4>
            <div className="flex flex-col space-y-2.5 text-xs font-mono text-[#0F1112]/70">
              <button onClick={() => setView('essays')} className="hover:text-[#602020] text-left hover:underline cursor-pointer">Essays Archive</button>
              <button onClick={() => setView('notes')} className="hover:text-[#602020] text-left hover:underline cursor-pointer">Notes & Fragments</button>
              <button onClick={() => setView('bookshelf')} className="hover:text-[#602020] text-left hover:underline cursor-pointer">Bookshelf</button>
              <button onClick={() => setView('talks')} className="hover:text-[#602020] text-left hover:underline cursor-pointer">Lectures & Events</button>
              <button onClick={() => setView('about')} className="hover:text-[#602020] text-left hover:underline cursor-pointer font-bold select-none cursor:pointer">About & Bio</button>
            </div>
          </div>

          {/* Column 3: Communication / Connect links */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-space tracking-widest font-semibold text-[#0F1112]/50 uppercase">
              CONNECT
            </h4>
            <div className="flex flex-col space-y-2.5 text-xs font-mono text-[#0F1112]/70">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#602020] hover:underline">X / Twitter</a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#602020] hover:underline">LinkedIn</a>
              <a href="https://scholar.google.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#602020] hover:underline">Google Scholar</a>
              <a href="mailto:jack.stone@oxon.org" className="hover:text-[#602020] hover:underline">E-Mail Channel</a>
            </div>
          </div>

          {/* Column 4: Newsletter registry list */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-xs font-space tracking-widest font-semibold text-[#0F1112]/50 uppercase">
              THE REGISTER (NEWSLETTER)
            </h4>
            <p className="font-reading text-xs text-[#0F1112]/70 leading-relaxed font-light">
              Receive scholarly dispatches, essays in progress, and announcements of upcoming lectures. Deliberately timed, twice quarterly.
            </p>
            
            <form onSubmit={handleSubscribe} className="space-y-2">
              <div className="flex items-center border border-[#B8860B]/50 focus-within:border-[#602020] bg-white transition-all duration-300 p-1">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your academic email address..."
                  className="bg-transparent border-none text-xs flex-grow py-2 px-2.5 text-[#0F1112] focus:outline-none placeholder-stone-400 font-mono"
                  disabled={status === 'success'}
                />
                <button
                  type="submit"
                  className="bg-[#0F1112] hover:bg-[#602020] text-[#F5F2ED] p-2 transition-all duration-300 cursor-pointer"
                  disabled={status === 'success'}
                >
                  <Mail size={14} />
                </button>
              </div>

              {status === 'success' && (
                <div className="flex items-center space-x-2 text-[10px] font-mono text-emerald-700 bg-emerald-50 border border-emerald-200/50 p-2 animate-fadeIn rounded-none">
                  <Check size={12} />
                  <span>Recorded. You have been added to the register.</span>
                </div>
              )}

              {status === 'error' && (
                <div className="flex items-center space-x-2 text-[10px] font-mono text-red-700 bg-red-50 border border-red-200/50 p-2 animate-fadeIn rounded-none">
                  <AlertCircle size={12} />
                  <span>Please provide a valid email structure.</span>
                </div>
              )}
            </form>
          </div>

        </div>

        {/* Bottom Imprint Area */}
        <div className="pt-8 border-t border-[#0F1112]/20 flex flex-col sm:flex-row items-center justify-between gap-6">
          
          {/* Logo / Scholarly seal SVG */}
          <div className="flex items-center space-x-4">
            <svg className="w-10 h-10 text-[#B8860B]" viewBox="0 0 100 100" fill="none">
              <circle cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="1" />
              <circle cx="50" cy="50" r="38" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 3" />
              {/* Crossing swords/quills silhouette inside seal */}
              <line x1="30" y1="30" x2="70" y2="70" stroke="currentColor" strokeWidth="1" />
              <line x1="30" y1="70" x2="70" y2="30" stroke="currentColor" strokeWidth="1" />
              {/* Small stars */}
              <circle cx="50" cy="20" r="1.5" fill="currentColor" />
              <circle cx="50" cy="80" r="1.5" fill="currentColor" />
              <circle cx="20" cy="50" r="1.5" fill="currentColor" />
              <circle cx="80" cy="50" r="1.5" fill="currentColor" />
              {/* Inner core */}
              <rect x="46" y="46" width="8" height="8" transform="rotate(45 50 50)" fill="currentColor" />
            </svg>
            <div>
              <p className="text-[10px] font-mono text-[#0F1112]/40 tracking-wider font-bold">SCHOLARLY PRINT</p>
              <p className="text-[11px] font-mono text-[#0F1112]/60">&copy; {currentYear} JACK STONE. ALL RIGHTS RESERVED.</p>
            </div>
          </div>

          {/* Central message */}
          <div className="font-serif italic text-base text-[#602020] select-none text-center">
            &ldquo;The future is not inherited. It is built.&rdquo;
          </div>

          {/* Privacy and Sub-links */}
          <div className="flex items-center space-x-6 text-[10px] font-mono text-[#0F1112]/40">
            <a href="#privacy" className="hover:text-[#602020] hover:underline">PRIVACY DIRECTIVE</a>
            <a href="#terms" className="hover:text-[#602020] hover:underline">TERMS OF CUSTODY</a>
            <a href="#feed" className="hover:text-[#602020] hover:underline">XML FEED</a>
          </div>

        </div>

      </div>
    </footer>
  );
}
