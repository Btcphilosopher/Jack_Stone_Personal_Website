import { ViewState } from '../types';
import { Compass, MoveDown, ArrowRight } from 'lucide-react';

interface HeroProps {
  onLatestClick: () => void;
  setView: (view: ViewState) => void;
}

export default function Hero({ onLatestClick, setView }: HeroProps) {
  return (
    <div className="relative min-h-[85vh] flex items-center bg-[#0F1112] overflow-hidden border-b border-[#B8860B]/15 paper-grain-dark text-[#F5F2ED]">
      
      {/* Background imagery with overlay */}
      <div className="absolute inset-0 z-0 opacity-40">
        <img 
          src="/src/assets/images/london_skyline_dusk_1780990902422.png" 
          alt="London St Paul's Cathedral dusk silhouette" 
          className="w-full h-full object-cover filter brightness-50 contrast-125 select-none"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0F1112] via-[#0F1112]/70 to-[#0F1112]/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0F1112] via-transparent to-[#0F1112]/95" />
      </div>

      {/* Decorative Blueprint Grid Lines */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-20">
        <div className="absolute left-[10%] top-0 bottom-0 w-[1px] bg-gradient-to-b from-[#B8860B]/30 via-[#B8860B]/10 to-transparent" />
        <div className="absolute left-[30%] top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-[#B8860B]/10 to-[#B8860B]/20" />
        <div className="absolute right-[25%] top-0 bottom-0 w-[1px] bg-gradient-to-b from-[#B8860B]/20 to-transparent" />
        <div className="absolute top-[20%] left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#B8860B]/10 to-transparent" />
        <div className="absolute top-[60%] left-0 right-0 h-[1px] bg-gradient-to-r from-[#B8860B]/5 via-[#B8860B]/10 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left: Text & Brand Presentation */}
        <div className="lg:col-span-7 flex flex-col justify-center space-y-8 animate-fadeIn">
          
          {/* Subheading / Categorization Label */}
          <div className="flex items-center space-x-3 text-[10px] font-space tracking-[0.3em] text-[#B8860B] uppercase font-semibold">
            <span className="w-1.5 h-1.5 bg-[#B8860B] rounded-none animate-ping" />
            <span>PHILOSOPHER . ESSAYIST . PUBLIC THINKER</span>
          </div>

          {/* Heading Name */}
          <div className="space-y-4">
            <h1 className="text-6xl sm:text-7xl lg:text-8xl font-serif tracking-tight leading-none text-white font-normal selection:bg-white selection:text-black">
              Jack Stone
            </h1>
            <p className="max-w-xl text-lg sm:text-xl font-reading text-[#F5F2ED]/85 leading-relaxed font-light">
              Exploring the ideas, institutions, and possibilities that shape our future. Reclaiming intergenerational stewardship in a short-term world.
            </p>
          </div>

          {/* CTA Group with elegant precision lines */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-6 pt-4">
            <button
              onClick={onLatestClick}
              className="group flex items-center space-x-3 bg-transparent text-[#B8860B] border border-[#B8860B]/50 hover:border-[#602020] hover:bg-[#602020] hover:text-[#F5F2ED] px-6 py-3.5 text-xs font-mono tracking-widest font-medium transition-all duration-300 rounded-none cursor-pointer"
            >
              <span>READ THE LATEST ESSAY</span>
              <ArrowRight size={14} className="transform group-hover:translate-x-1 transition-transform" />
            </button>
            
            <button
              onClick={() => setView('about')}
              className="text-[#F5F2ED]/70 hover:text-white transition-colors text-xs font-mono tracking-widest py-3 hover:underline underline-offset-4 cursor-pointer"
            >
              VIEW ACADEMIC DISCIPLINE
            </button>
          </div>

          {/* Core Philosophy Pillar badges */}
          <div className="pt-8 border-t border-[#B8860B]/10 grid grid-cols-3 gap-4 max-w-lg text-left">
            <div>
              <p className="text-[10px] font-mono text-[#B8860B]">01 / THEORY</p>
              <p className="text-xs font-space text-[#F5F2ED]/60 mt-1 font-medium">Intergenerational Contract</p>
            </div>
            <div>
              <p className="text-[10px] font-mono text-[#B8860B]">02 / HABITAT</p>
              <p className="text-xs font-space text-[#F5F2ED]/60 mt-1 font-medium">Physical Permanence</p>
            </div>
            <div>
              <p className="text-[10px] font-mono text-[#B8860B]">03 / MEDIUM</p>
              <p className="text-xs font-space text-[#F5F2ED]/60 mt-1 font-medium">Epistemic Custodianship</p>
            </div>
          </div>

        </div>

        {/* Right: The Scholarly Radial / System Diagram */}
        <div className="lg:col-span-5 flex justify-center items-center relative py-10 lg:py-0">
          
          <div className="relative w-72 h-72 sm:w-96 sm:h-96 flex items-center justify-center select-none">
            
            {/* Concentric Circle Rings (Precision Radar-style) */}
            <div className="absolute inset-0 border border-[#B8860B]/10 rounded-full animate-pulse" />
            <div className="absolute inset-6 border border-[#B8860B]/20 rounded-full" />
            <div className="absolute inset-16 border border-[#B8860B]/10 rounded-full" />
            <div className="absolute inset-28 border border-[#B8860B]/30 rounded-full" />
            <div className="absolute inset-40 border border-[#B8860B]/15 rounded-full" />
            
            {/* Axis grid crosshair vectors */}
            <div className="absolute top-0 bottom-0 left-1/2 w-[1px] bg-gradient-to-b from-[#B8860B]/40 via-[#B8860B]/10 to-[#B8860B]/40" />
            <div className="absolute left-0 right-0 top-1/2 h-[1px] bg-gradient-to-r from-[#B8860B]/40 via-[#B8860B]/10 to-[#B8860B]/40" />

            {/* Angular ticks / markings resembling surveyor tools */}
            <div className="absolute top-4 left-1/2 w-3 h-[1px] bg-[#B8860B]/40 -translate-x-1/2" />
            <div className="absolute bottom-4 left-1/2 w-3 h-[1px] bg-[#B8860B]/40 -translate-x-1/2" />
            <div className="absolute left-4 top-1/2 w-[1px] h-3 bg-[#B8860B]/40 -translate-y-1/2" />
            <div className="absolute right-4 top-1/2 w-[1px] h-3 bg-[#B8860B]/40 -translate-y-1/2" />

            {/* Central Node / Flame */}
            <div className="absolute w-4 h-4 bg-[#B8860B] rounded-none rotate-45 flex items-center justify-center shadow-[0_0_15px_rgba(184,134,11,0.5)]">
              <div className="w-1.5 h-1.5 bg-[#0F1112] rounded-none" />
            </div>

            {/* Node markers (Reason, Culture, Institutions, Future) */}
            
            {/* Reasoning Dial - North */}
            <div className="absolute top-[15%] left-[75%] flex flex-col items-start transform translate-x-2 -translate-y-6 group">
              <span className="w-2 h-2 bg-[#F5F2ED] rounded-full ring-2 ring-[#B8860B] relative">
                <span className="absolute inset-0 bg-[#B8860B] rounded-full animate-ping opacity-75" />
              </span>
              <span className="text-[10px] font-mono tracking-widest text-[#B8860B] mt-1 font-bold">REASON</span>
              <span className="text-[9px] text-[#F5F2ED]/40 max-w-[80px] leading-tight mt-0.5">Integrity & Dialectic</span>
            </div>

            {/* Culture Dial - East */}
            <div className="absolute top-[35%] left-[83%] flex flex-col items-start translate-x-2 group">
              <span className="w-2 h-2 bg-[#F5F2ED] rounded-full ring-2 ring-[#B8860B] relative">
                <span className="absolute inset-0 bg-[#B8860B] rounded-full animate-ping opacity-50" />
              </span>
              <span className="text-[10px] font-mono tracking-widest text-[#B8860B] mt-1 font-bold">CULTURE</span>
              <span className="text-[9px] text-[#F5F2ED]/40 max-w-[80px] leading-tight mt-0.5">Memory & Ritual</span>
            </div>

            {/* Institutions Dial - South East */}
            <div className="absolute top-[63%] left-[73%] flex flex-col items-start translate-x-2 translate-y-3 group">
              <span className="w-2 h-2 bg-[#F5F2ED] rounded-full ring-2 ring-[#B8860B]" />
              <span className="text-[10px] font-mono tracking-widest text-[#B8860B] mt-1 font-bold">INSTITUTIONS</span>
              <span className="text-[9px] text-[#F5F2ED]/40 max-w-[80px] leading-tight mt-0.5">Vessels of Value</span>
            </div>

            {/* Future Dial - South */}
            <div className="absolute top-[82%] left-[45%] flex flex-col items-center -translate-x-12 translate-y-2 group">
              <span className="w-2 h-2 bg-[#F5F2ED] rounded-full ring-2 ring-[#B8860B] relative">
                <span className="absolute inset-0 bg-[#B8860B] rounded-full animate-ping opacity-30" />
              </span>
              <span className="text-[10px] font-mono tracking-widest text-[#B8860B] mt-1 font-bold">FUTURE</span>
              <span className="text-[9px] text-[#F5F2ED]/40 text-center max-w-[100px] leading-tight mt-0.5">Intergenerational Legacy</span>
            </div>

            {/* Subtle rotating track */}
            <svg className="absolute inset-[-10px] w-[calc(100%+20px)] h-[calc(100%+20px)] animate-[spin_120s_linear_infinite] opacity-30 pointer-events-none" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="48" fill="none" stroke="#B8860B" strokeWidth="0.25" strokeDasharray="1, 8" />
              <circle cx="50" cy="50" r="43" fill="none" stroke="#B8860B" strokeWidth="0.25" strokeDasharray="4, 15" />
            </svg>

          </div>
        </div>

      </div>

      {/* Slide down arrow */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-10 flex flex-col items-center space-y-1 opacity-60">
        <span className="text-[9px] font-mono tracking-[0.25em] text-[#B8860B]">SCROLL TO READ</span>
        <MoveDown size={12} className="animate-bounce text-[#B8860B]" />
      </div>
    </div>
  );
}
