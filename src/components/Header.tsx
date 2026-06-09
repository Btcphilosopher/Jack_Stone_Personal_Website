import { useState } from 'react';
import { ViewState } from '../types';
import { Search, Sparkles, X, Terminal, AlignJustify } from 'lucide-react';

interface HeaderProps {
  currentView: ViewState;
  setView: (view: ViewState) => void;
  onSearch: (query: string) => void;
  searchQuery: string;
}

export default function Header({ currentView, setView, onSearch, searchQuery }: HeaderProps) {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { label: string; view: ViewState }[] = [
    { label: 'ESSAYS', view: 'essays' },
    { label: 'NOTES & FRAGMENTS', view: 'notes' },
    { label: 'BOOKSHELF', view: 'bookshelf' },
    { label: 'TALKS', view: 'talks' },
    { label: 'ABOUT', view: 'about' }
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#0F1112]/95 border-b border-[#B8860B]/10 text-[#F5F2ED] backdrop-blur-md transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          
          {/* Logo / Scholar Plate */}
          <button 
            onClick={() => { setView('home'); setIsSearchOpen(false); }}
            className="flex items-center space-x-2 tracking-[0.25em] text-lg font-space font-medium hover:text-[#B8860B] transition-colors focus:outline-none cursor-pointer group"
          >
            <span className="border border-[#B8860B]/40 px-2 py-1 text-xs group-hover:border-[#B8860B] transition-colors text-brass">J . S</span>
            <span className="text-sm font-semibold sm:inline ml-1 font-space">JACK STONE</span>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.view}
                onClick={() => setView(item.view)}
                className={`text-xs font-space tracking-widest font-medium transition-all duration-300 relative py-1 hover:text-[#B8860B] cursor-pointer ${
                  currentView === item.view 
                    ? 'text-[#B8860B]' 
                    : 'text-[#F5F2ED]/70'
                }`}
              >
                {item.label}
                {currentView === item.view && (
                  <span className="absolute bottom-0 left-0 w-full h-[1px] bg-[#B8860B] animate-pulse" />
                )}
              </button>
            ))}
          </nav>

          {/* UI Utilities */}
          <div className="flex items-center space-x-4">
            <div className="relative">
              {isSearchOpen ? (
                <div className="flex items-center bg-[#1A1D1E] border border-[#B8860B]/40 px-3 py-1 text-xs text-[#F5F2ED] rounded-none focus-within:border-[#B8860B] transition-all duration-300">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => {
                      onSearch(e.target.value);
                      if (currentView !== 'essays' && currentView !== 'notes') {
                        setView('essays');
                      }
                    }}
                    placeholder="Search ideas..."
                    className="bg-transparent focus:outline-none w-36 sm:w-48 placeholder-white/30 font-mono text-xs pr-2"
                    autoFocus
                  />
                  <button 
                    onClick={() => {
                      setIsSearchOpen(false);
                      onSearch('');
                    }}
                    className="hover:text-[#B8860B]"
                  >
                    <X size={12} />
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => setIsSearchOpen(true)}
                  className="p-1 text-[#F5F2ED]/70 hover:text-[#B8860B] transition-colors focus:outline-none cursor-pointer"
                  title="Search ideas"
                >
                  <Search size={16} />
                </button>
              )}
            </div>

            {/* Micro-Interaction Indicator (Signaling Clockwork/System) */}
            <div className="hidden sm:flex items-center space-x-1.5 px-2 py-1 bg-[#1A1D1E] border border-[#B8860B]/15 text-[10px] font-mono tracking-wider text-[#B8860B]">
              <Terminal size={10} className="text-[#B8860B]" />
              <span className="animate-pulse">SYS_ACTIVE</span>
            </div>

            {/* Mobile Menu Icon */}
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-1 text-[#F5F2ED]/70 hover:text-[#B8860B] transition-colors focus:outline-none"
            >
              <AlignJustify size={18} />
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pt-4 border-t border-[#B8860B]/10 flex flex-col space-y-3 animate-fadeIn">
            {navItems.map((item) => (
              <button
                key={item.view}
                onClick={() => {
                  setView(item.view);
                  setMobileMenuOpen(false);
                }}
                className={`text-[11px] font-space tracking-widest text-left py-2 border-b border-[#B8860B]/5 ${
                  currentView === item.view ? 'text-[#B8860B] pl-2 font-semibold' : 'text-[#F5F2ED]/80'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}
