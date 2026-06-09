import { useState } from 'react';
import { InfluenceBook, ViewState } from '../types';
import { Bookmark, ArrowUpRight, Award } from 'lucide-react';

interface IntellectualInfluencesProps {
  books: InfluenceBook[];
  setView: (view: ViewState) => void;
}

export default function IntellectualInfluences({ books, setView }: IntellectualInfluencesProps) {
  const [selectedBook, setSelectedBook] = useState<InfluenceBook>(books[0]);

  return (
    <section className="py-24 bg-[#0F1112] text-[#F5F2ED] border-b border-[#B8860B]/15 paper-grain-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex items-baseline justify-between mb-16 border-b border-[#B8860B]/15 pb-4">
          <div className="flex items-center space-x-3">
            <span className="text-xs font-mono text-[#B8860B] tracking-wider font-bold">[ SEC. 04 ]</span>
            <h2 className="text-xs font-space tracking-[0.25em] font-semibold text-white uppercase">
              INTELLECTUAL INFLUENCES
            </h2>
          </div>
          <button 
            onClick={() => setView('bookshelf')}
            className="group flex items-center space-x-2 text-xs font-mono tracking-wider text-[#F5F2ED]/70 hover:text-[#B8860B] transition-colors cursor-pointer"
          >
            <span>VIEW FULL BOOKSHELF</span>
            <ArrowUpRight size={14} className="transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

        {/* Bookshelf Shelf visualizer */}
        <div className="relative mb-16 pb-12 pt-6 border-b border-[#B8860B]/40 flex flex-wrap justify-between items-end gap-y-12">
          
          {/* Subtle shelf base reflection line */}
          <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#B8860B]/40 to-transparent" />
          <div className="absolute bottom-[-4px] left-0 right-0 h-[10px] bg-gradient-to-b from-[#B8860B]/15 to-transparent blur-xs pointer-events-none" />

          {/* Render Book Covers */}
          <div className="w-full flex justify-around items-end space-x-4 md:space-x-8 overflow-x-auto pb-4 px-2 scrollbar-none">
            {books.map((book) => {
              const isSelected = selectedBook.id === book.id;
              
              return (
                <button
                  key={book.id}
                  onClick={() => setSelectedBook(book)}
                  className="group relative flex flex-col items-center flex-shrink-0 focus:outline-none transition-all duration-500 transform origin-bottom cursor-pointer select-none"
                  style={{
                    transform: isSelected ? 'scale(1.08) translateY(-12px)' : 'scale(1) translateY(0)',
                  }}
                >
                  
                  {/* Book Spine Shadow / Spine structure */}
                  <div 
                    className="relative w-28 h-40 sm:w-36 sm:h-52 md:w-44 md:h-64 shadow-[10px_15px_25px_rgba(0,0,0,0.6)] flex flex-col justify-between p-4 border transition-all duration-500 overflow-hidden text-left"
                    style={{
                      backgroundColor: book.color,
                      color: book.textColor,
                      borderColor: book.borderColor || 'rgba(197,168,128,0.2)'
                    }}
                  >
                    
                    {/* Spine highlighting */}
                    <div className="absolute left-0 top-0 bottom-0 w-[4px] bg-white/10" />
                    <div className="absolute left-[4px] top-0 bottom-0 w-[1px] bg-black/30" />

                    {/* Book Year / Volume */}
                    <div className="text-[8px] font-mono tracking-widest opacity-65 flex justify-between items-center">
                      <span>MCMXCIX</span>
                      <span>{book.year}</span>
                    </div>

                    {/* Book Title & Author inside cover */}
                    <div className="space-y-2 my-auto">
                      <div className="w-6 h-[1px] bg-current opacity-40 mb-1" />
                      <h4 className="text-sm sm:text-base md:text-lg font-serif font-medium leading-tight tracking-wide balance">
                        {book.title}
                      </h4>
                      <p className="text-[10px] sm:text-xs font-space tracking-widest opacity-75">
                        {book.author}
                      </p>
                    </div>

                    {/* Emblem / Seal stamp */}
                    <div className="flex justify-between items-end opacity-50">
                      <Award size={12} className="stroke-[1.5]" />
                      <span className="text-[7px] font-mono">B.L.C.</span>
                    </div>

                    {/* Elegant Border overlay inside cover */}
                    <div className="absolute inset-2 border border-current/15 pointer-events-none" />

                  </div>

                  {/* Active selector arrow / marker */}
                  {isSelected && (
                    <div className="absolute bottom-[-16px] w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-b-[6px] border-b-[#F5F2ED]" />
                  )}

                  {/* Highlight aura under selected book */}
                  {isSelected && (
                    <div 
                      className="absolute inset-0 bg-[#B8860B]/10 filter blur-xl -z-10 transition-all duration-500 rounded-full scale-125"
                    />
                  )}

                </button>
              );
            })}
          </div>

        </div>

        {/* Selected Book Presentation Details Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pt-8 items-start bg-[#1A1D1E]/40 border border-[#B8860B]/10 p-8 sm:p-12 animate-fadeIn text-left">
          
          {/* Left: Scholar details & coordinates */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="space-y-2">
              <span className="text-[10px] font-mono text-[#B8860B] tracking-widest uppercase font-bold">[ AUTHOR ARCHIVE ]</span>
              <h3 className="text-3xl font-serif text-white leading-tight">
                {selectedBook.title}
              </h3>
              <p className="text-xs font-mono text-[#B8860B]/80">
                by {selectedBook.author} (Published {selectedBook.year})
              </p>
            </div>

            <div className="border-l-2 border-[#B8860B]/30 pl-4 py-1 italic font-reading text-[#F5F2ED]/75 text-sm sm:text-base leading-relaxed">
              &ldquo;{selectedBook.excerpt}&rdquo;
            </div>

            {/* Vintage layout Coordinate Dial (SVG) */}
            <div className="hidden sm:flex items-center space-x-4 pt-4 border-t border-[#B8860B]/10">
              <svg className="w-12 h-12 text-[#B8860B]/40" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="0.5" />
                <circle cx="50" cy="50" r="30" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 2" />
                <line x1="50" y1="5" x2="50" y2="95" stroke="currentColor" strokeWidth="0.5" />
                <line x1="5" y1="50" x2="95" y2="50" stroke="currentColor" strokeWidth="0.5" />
                <circle cx="68" cy="32" r="3" fill="#B8860B" />
              </svg>
              <div>
                <p className="text-[9px] font-mono text-[#B8860B]/60 tracking-wider font-bold">SEXTANT LOC.</p>
                <p className="text-[10px] font-mono text-[#F5F2ED]/50">LAT. 51.5074° N, LONG. 0.1278° W</p>
              </div>
            </div>

          </div>

          {/* Right: Jack Stone's Academic Review */}
          <div className="lg:col-span-7 space-y-4">
            <div className="flex items-center space-x-2 text-[10px] font-mono tracking-widest text-[#B8860B]/80 uppercase font-bold">
              <Bookmark size={12} />
              <span>MY CORE REFLECTION</span>
            </div>
            
            <p className="font-reading text-sm sm:text-base text-[#F5F2ED]/85 leading-relaxed font-light">
              {selectedBook.review}
            </p>

            <div className="pt-4 border-t border-[#B8860B]/15 flex items-center justify-between text-xs font-mono text-[#F5F2ED]/30">
              <span>REFERENCE CLASSIFICATION: CLASSIC</span>
              <span className="text-[#B8860B] font-semibold">J. S.</span>
            </div>
          </div>

        </div>

        {/* Centralised worldview line at bottom */}
        <div className="mt-16 pt-8 border-t border-[#B8860B]/10 flex flex-col md:flex-row justify-between items-center text-[#F5F2ED]/40 text-xs text-center gap-4">
          <p className="font-serif italic text-sm sm:text-base tracking-wide text-white/80">
            &ldquo;Ideas shape institutions. Institutions shape destiny.&quot;
          </p>
          <span className="text-[10px] font-mono tracking-widest text-[#B8860B]/50 uppercase font-bold">
            REGISTRUM ANGLO-FUTURISTICUM
          </span>
        </div>

      </div>
    </section>
  );
}
