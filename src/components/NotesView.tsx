import { useState } from 'react';
import { FragmentNote } from '../types';
import { PencilLine, Info, Search, ListFilter, Tag } from 'lucide-react';

interface NotesViewProps {
  notes: FragmentNote[];
  searchQuery: string;
}

export default function NotesView({ notes, searchQuery }: NotesViewProps) {
  const [activeCategory, setActiveCategory] = useState<string>('ALL');

  const categories = ['ALL', 'EPISTEMOLOGY', 'AESTHETICS', 'POLITICS', 'CULTURE', 'METHODOLOGY'];

  const filteredNotes = notes.filter((note) => {
    const matchesCategory = activeCategory === 'ALL' || note.category === activeCategory;
    const matchesSearch = searchQuery === '' || 
      note.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
      note.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (note.citation && note.citation.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="bg-[#F5F2ED] paper-grain min-h-screen text-[#0F1112] py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Page Heading details */}
        <div className="text-center space-y-3 max-w-2xl mx-auto border-b border-[#0F1112]/20 pb-10">
          <div className="inline-flex items-center space-x-2 text-[10px] font-mono tracking-[0.25em] text-[#B8860B] uppercase font-bold">
            <PencilLine size={12} />
            <span>TRACTS & CHRONICLES</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-serif text-[#0F1112] tracking-tight">
            Notes & Fragments
          </h1>
          <p className="font-reading text-sm sm:text-base text-[#0F1112]/70 leading-relaxed font-light font-light">
            Shorter philosophical reflections, aphorisms, marginalia, and system parameters compiled directly from Jack Stone’s personal research documents.
          </p>
        </div>

        {/* Categories Bar & Filter */}
        <div className="flex flex-col sm:flex-row items-center justify-between border-b border-[#0F1112]/15 pb-4 gap-4">
          <div className="flex items-center space-x-2 text-[#0F1112]/40 text-xs font-mono">
            <ListFilter size={14} />
            <span>FILTER REFLECTIONS:</span>
          </div>
          
          <div className="flex flex-wrap items-center justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1 text-[10px] font-mono tracking-wider transition-all duration-300 rounded-none cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-[#602020] text-white border border-transparent font-bold'
                    : 'bg-transparent text-[#0F1112]/60 hover:text-[#0F1112] border border-[#0F1112]/30'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Index Cards List Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredNotes.length > 0 ? (
            filteredNotes.map((note) => (
              <div
                key={note.id}
                className="group relative bg-[#F5F2ED] border border-[#0F1112]/20 p-8 flex flex-col justify-between space-y-6 transition-all duration-500 hover:border-[#602020] hover:shadow-[5px_5px_15px_rgba(15,17,18,0.1)] text-left hover:-translate-y-0.5"
                style={{
                  backgroundImage: 'linear-gradient(rgba(15, 17, 18, 0.05) 1px, transparent 1px)',
                  backgroundSize: '100% 24px',
                  backgroundPosition: '0 12px'
                }}
              >
                {/* Index card margin line */}
                <div className="absolute left-[24px] top-0 bottom-0 w-[1px] bg-red-200/50 pointer-events-none" />

                {/* Index Card Header */}
                <div className="flex items-center justify-between text-[10px] font-mono text-[#B8860B] pb-2 border-b border-[#0F1112]/10 pl-4">
                  <span>DATE: {note.date}</span>
                  <div className="flex items-center space-x-1 font-bold text-[#602020]">
                    <Tag size={10} />
                    <span>{note.category}</span>
                  </div>
                </div>

                {/* Prose Text (Shifted right of card margin line) */}
                <div className="pl-4 py-2">
                  <p className="font-reading text-base leading-[24px] text-[#0F1112]/80 font-light font-light italic">
                    &ldquo;{note.content}&rdquo;
                  </p>
                </div>

                {/* Card citation details */}
                <div className="flex items-center justify-between text-[9px] font-mono text-[#0F1112]/40 pt-4 border-t border-[#0F1112]/10 pl-4">
                  <span>CUSTODIAN: JACK STONE</span>
                  {note.citation && (
                    <span className="italic font-bold text-[#0F1112]/60">[{note.citation}]</span>
                  )}
                </div>

                {/* Corner highlight line */}
                <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-[#0F1112]/0 group-hover:border-[#B8860B]/80 transition-all duration-300 pointer-events-none" />
              </div>
            ))
          ) : (
            <div className="col-span-2 text-center py-16 space-y-3 bg-[#F5F2ED] border border-[#0F1112]/15">
              <Info size={24} className="mx-auto text-[#B8860B]" />
              <p className="text-sm font-mono text-[#0F1112]/50">No philosophical fragments match your current filters.</p>
              <button 
                onClick={() => { setActiveCategory('ALL'); }}
                className="text-xs text-[#602020] underline font-mono focus:outline-none cursor-pointer font-bold"
              >
                Clear all active filters
              </button>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
