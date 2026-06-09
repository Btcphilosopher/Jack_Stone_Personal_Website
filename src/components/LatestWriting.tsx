import { Essay, ViewState } from '../types';
import { ArrowUpRight } from 'lucide-react';

interface LatestWritingProps {
  essays: Essay[];
  onSelectEssay: (id: string) => void;
  setView: (view: ViewState) => void;
}

export default function LatestWriting({ essays, onSelectEssay, setView }: LatestWritingProps) {
  return (
    <section className="py-24 bg-[#F5F2ED] paper-grain border-b border-[#0F1112]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex items-baseline justify-between mb-16 border-b border-[#0F1112]/20 pb-4">
          <div className="flex items-center space-x-3">
            <span className="text-xs font-mono text-[#602020] tracking-wider font-bold">[ SEC. 02 ]</span>
            <h2 className="text-xs font-space tracking-[0.25em] font-semibold text-[#0F1112] uppercase">
              LATEST WRITING
            </h2>
          </div>
          <button 
            onClick={() => setView('essays')}
            className="group flex items-center space-x-2 text-xs font-mono tracking-wider text-[#0F1112]/70 hover:text-[#602020] transition-colors cursor-pointer"
          >
            <span>VIEW ALL ESSAYS</span>
            <ArrowUpRight size={14} className="transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

        {/* Editorial Essay Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {essays.map((essay, index) => {
            const num = (index + 1).toString().padStart(2, '0');
            return (
              <article 
                key={essay.id}
                onClick={() => onSelectEssay(essay.id)}
                className="group flex flex-col space-y-5 cursor-pointer block text-left"
              >
                
                {/* Numeric Plate with slim top line */}
                <div className="flex items-center justify-between border-t border-[#0F1112]/20 pt-4 text-xs font-mono text-[#602020]">
                  <span className="font-bold">{num}</span>
                  <span className="text-[10px] tracking-widest text-[#0F1112]/40 font-semibold">{essay.category}</span>
                </div>

                {/* Monochromatic Feature Image with frame border */}
                <div className="relative aspect-[16/10] overflow-hidden bg-[#0F1112] border border-[#0F1112]/10">
                  <img
                    src={essay.image}
                    alt={essay.title}
                    className="w-full h-full object-cover filter grayscale hover:grayscale-0 contrast-110 brightness-95 scale-100 group-hover:scale-[1.03] transition-all duration-700"
                    referrerPolicy="no-referrer"
                  />
                  {/* Subtle hover gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F1112]/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Essay Titles & Prose */}
                <div className="space-y-2 flex-grow">
                  <h3 className="text-2xl font-serif text-[#0F1112] group-hover:text-[#602020] hover:underline decoration-1 underline-offset-4 decoration-[#602020]/40 transition-colors tracking-tight leading-snug">
                    {essay.title}
                  </h3>
                  <p className="text-sm font-reading text-[#0F1112]/70 leading-relaxed font-light line-clamp-3">
                    {essay.subtitle}
                  </p>
                </div>

                {/* Card footer details with rail line indicator */}
                <div className="pt-2 flex items-center justify-between text-[11px] font-mono text-[#0F1112]/50 border-b border-[#0F1112]/10 pb-2 group-hover:border-[#602020] transition-colors">
                  <span>{essay.readTime}</span>
                  <span className="flex items-center space-x-1 font-semibold group-hover:text-[#602020] transition-colors">
                    <span>READ ARTICLE</span>
                    <span className="transform group-hover:translate-x-0.5 transition-transform">→</span>
                  </span>
                </div>

              </article>
            );
          })}
        </div>

      </div>
    </section>
  );
}
