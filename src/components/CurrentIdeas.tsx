import { useState } from 'react';
import { Lightbulb, Layers, ShieldCheck, Milestone } from 'lucide-react';

interface IdeaItem {
  id: string;
  title: string;
  description: string;
  status: string;
  focus: string;
  phase: string;
}

export default function CurrentIdeas() {
  const [activeIdea, setActiveIdea] = useState<string | null>('idea-1');

  const ideas: IdeaItem[] = [
    {
      id: 'idea-1',
      title: 'On the Idea of Britain',
      description: 'Notes toward a philosophical account of national character, landscape, constitutional memory, and future civic confidence.',
      status: 'DRAFTING CH. 4',
      focus: 'POLITICAL CULTURE',
      phase: '75% Complete'
    },
    {
      id: 'idea-2',
      title: 'The Ethics of Long-Termism',
      description: 'An analysis of our moral responsibility to future populations in an age of ecological and technological deep time. Contesting mechanical utilitarian calculations.',
      status: 'COLLABORATIVE RESEARCH',
      focus: 'ETHICS',
      phase: '45% Complete'
    },
    {
      id: 'idea-3',
      title: 'Education and the Formation of Judgment',
      description: 'Reclaiming the classic humanities model of judgment cultivation as the primary architecture of the university, resisting corporate-industrial skill automation.',
      status: 'SYNOPSIS COMPLETE',
      focus: 'EPISTEMOLOGY',
      phase: '90% Complete'
    }
  ];

  return (
    <section className="py-24 bg-[#0F1112] text-[#F5F2ED] border-b border-[#B8860B]/15 paper-grain-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column: Context & Interactive Diagrams */}
          <div className="lg:col-span-5 flex flex-col justify-between h-full space-y-10">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <span className="text-xs font-mono text-[#B8860B] tracking-wider font-bold">[ SEC. 03 ]</span>
                <h2 className="text-xs font-space tracking-[0.25em] font-semibold text-white uppercase">
                  CURRENT IDEAS & HORIZONS
                </h2>
              </div>
              <p className="font-reading text-base text-[#F5F2ED]/70 max-w-sm leading-relaxed font-light">
                A curated selection of books, monographs, and investigative guidelines currently in progress. These serve as raw frameworks for upcoming publications.
              </p>
            </div>

            {/* Geometric Vector Diagram (SVG) - interactive node highlights */}
            <div className="relative w-full aspect-square max-w-[320px] mx-auto lg:mx-0 flex items-center justify-center p-8 bg-[#1A1D1E]/40 border border-[#B8860B]/10">
              
              <svg className="w-full h-full diagram-glow" viewBox="0 0 100 100" fill="none">
                {/* Concentric subtle circles */}
                <circle cx="50" cy="50" r="35" stroke="#B8860B" strokeWidth="0.25" strokeDasharray="2 3" opacity="0.3" />
                <circle cx="50" cy="50" r="22" stroke="#B8860B" strokeWidth="0.5" opacity="0.2" />
                <circle cx="50" cy="50" r="45" stroke="#B8860B" strokeWidth="0.25" opacity="0.1" />

                {/* Star-shaped grid lines */}
                <line x1="50" y1="5" x2="50" y2="95" stroke="#B8860B" strokeWidth="0.25" opacity="0.4" />
                <line x1="5" y1="50" x2="95" y2="50" stroke="#B8860B" strokeWidth="0.25" opacity="0.4" />
                <line x1="18.2" y1="18.2" x2="81.8" y2="81.8" stroke="#B8860B" strokeWidth="0.25" opacity="0.2" strokeDasharray="1 2" />
                <line x1="18.2" y1="81.8" x2="81.8" y2="18.2" stroke="#B8860B" strokeWidth="0.25" opacity="0.2" strokeDasharray="1 2" />

                {/* Overlapping offset triangles */}
                <polygon points="50,15 80,68 20,68" stroke="#B8860B" strokeWidth="0.5" strokeDasharray="3 3" opacity="0.2" />
                <polygon points="50,85 80,32 20,32" stroke="#B8860B" strokeWidth="0.5" opacity="0.15" />

                {/* Connecting nodes */}
                {/* Node 1: Top (Idea 1) */}
                <circle cx="50" cy="15" r="3" fill={activeIdea === 'idea-1' ? '#B8860B' : '#1A1D1E'} stroke="#B8860B" strokeWidth="1" className="cursor-pointer transition-all duration-300" onClick={() => setActiveIdea('idea-1')} />
                <line x1="50" y1="15" x2="50" y2="50" stroke="#B8860B" strokeWidth="0.5" opacity={activeIdea === 'idea-1' ? 0.8 : 0.2} />

                {/* Node 2: Bottom Right (Idea 2) */}
                <circle cx="80" cy="68" r="3" fill={activeIdea === 'idea-2' ? '#B8860B' : '#1A1D1E'} stroke="#B8860B" strokeWidth="1" className="cursor-pointer transition-all duration-300" onClick={() => setActiveIdea('idea-2')} />
                <line x1="80" y1="68" x2="50" y2="50" stroke="#B8860B" strokeWidth="0.5" opacity={activeIdea === 'idea-2' ? 0.8 : 0.2} />

                {/* Node 3: Bottom Left (Idea 3) */}
                <circle cx="20" cy="68" r="3" fill={activeIdea === 'idea-3' ? '#B8860B' : '#1A1D1E'} stroke="#B8860B" strokeWidth="1" className="cursor-pointer transition-all duration-300" onClick={() => setActiveIdea('idea-3')} />
                <line x1="20" y1="68" x2="50" y2="50" stroke="#B8860B" strokeWidth="0.5" opacity={activeIdea === 'idea-3' ? 0.8 : 0.2} />

                {/* Center Core node */}
                <circle cx="50" cy="50" r="4" fill="#B8860B" />
                <circle cx="50" cy="50" r="8" stroke="#B8860B" strokeWidth="0.5" className="animate-ping" opacity="0.4" />
              </svg>

              <div className="absolute bottom-2 left-2 text-[8px] font-mono tracking-wider text-[#B8860B]/60">
                DIAGRAM 04: CORE MATRICES
              </div>
            </div>
          </div>

          {/* Right Column: Ideas List with Custom Highlight State */}
          <div className="lg:col-span-7 flex flex-col space-y-6">
            {ideas.map((idea) => {
              const isSelected = activeIdea === idea.id;
              return (
                <div
                  key={idea.id}
                  onMouseEnter={() => setActiveIdea(idea.id)}
                  className={`p-6 border transition-all duration-500 rounded-none cursor-pointer text-left ${
                    isSelected 
                      ? 'border-[#B8860B] bg-[#1A1D1E]/40 shadow-lg translate-x-1' 
                      : 'border-[#B8860B]/10 bg-transparent hover:border-[#B8860B]/30'
                  }`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                    <h3 className="text-xl font-serif text-white hover:text-[#B8860B] transition-colors">
                      {idea.title}
                    </h3>
                    <div className="flex items-center space-x-2">
                      <span className="text-[10px] font-mono px-2 py-0.5 bg-[#B8860B]/10 text-[#B8860B] border border-[#B8860B]/20 rounded-none font-bold">
                        {idea.focus}
                      </span>
                    </div>
                  </div>

                  <p className={`text-sm leading-relaxed font-reading transition-colors duration-300 ${
                    isSelected ? 'text-[#F5F2ED]/90' : 'text-[#F5F2ED]/60'
                  }`}>
                    {idea.description}
                  </p>

                  <div className="mt-4 pt-4 border-t border-[#B8860B]/10 flex flex-wrap items-center justify-between text-[10px] font-mono text-[#F5F2ED]/40 gap-2">
                    <div className="flex items-center space-x-1.5">
                      <span className="w-1.5 h-1.5 bg-[#B8860B] rounded-none animate-pulse" />
                      <span>{idea.status}</span>
                    </div>
                    <div>{idea.phase}</div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
