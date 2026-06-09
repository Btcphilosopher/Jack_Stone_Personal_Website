import { useState } from 'react';
import { InfluenceBook } from '../types';
import { BookOpen, Bookmark, Star, Calendar, MessageSquareQuote } from 'lucide-react';

interface BookshelfViewProps {
  books: InfluenceBook[];
}

export default function BookshelfView({ books }: BookshelfViewProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');

  const categories = ['ALL', 'POLITICAL PHILOSOPHY', 'HIGH MODERNISM', 'CLASSICAL REALISM', 'MORAL REALISM', 'EPISTEMIC REALISM'];

  // Categories helper
  const getBookCategory = (id: string) => {
    switch (id) {
      case 'burke': return 'POLITICAL PHILOSOPHY';
      case 'kirk': return 'HIGH MODERNISM';
      case 'newman': return 'CLASSICAL REALISM';
      case 'murdoch': return 'MORAL REALISM';
      case 'hayek': return 'EPISTEMIC REALISM';
      default: return 'POLITICAL PHILOSOPHY';
    }
  };

  const filteredBooks = books.filter(book => {
    if (selectedCategory === 'ALL') return true;
    return getBookCategory(book.id) === selectedCategory;
  });

  return (
    <div className="bg-[#F5F2ED] paper-grain min-h-screen text-[#0F1112] py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Page Header */}
        <div className="text-center space-y-3 max-w-2xl mx-auto border-b border-[#0F1112]/20 pb-10">
          <div className="inline-flex items-center space-x-2 text-[10px] font-mono tracking-[0.25em] text-[#B8860B] uppercase font-bold">
            <BookOpen size={12} />
            <span>THE BIBLIOTHECA</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-serif text-[#0F1112] tracking-tight">
            Scholarly Bookshelf
          </h1>
          <p className="font-reading text-sm sm:text-base text-[#0F1112]/70 leading-relaxed font-light font-light">
            An extensive index of literary and philosophical reference texts that guide Jack Stone’s systematic outlook, annotated with individual reflections.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 border-b border-[#0F1112]/15 pb-6">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 text-[10px] font-mono tracking-wider transition-all duration-300 rounded-none cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-[#602020] text-white border border-transparent font-bold'
                  : 'bg-transparent text-[#0F1112]/60 hover:text-[#0F1112] border border-[#0F1112]/20'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Bookshelf Review Cards */}
        <div className="space-y-16">
          {filteredBooks.map((book, idx) => {
            const cat = getBookCategory(book.id);
            const isEven = idx % 2 === 0;

            return (
              <section 
                key={book.id}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-12 items-center border-b border-[#0F1112]/15 pb-12 last:border-b-0`}
              >
                
                {/* 1. Spine Cover Visual Frame */}
                <div className={`col-span-1 lg:col-span-4 flex justify-center ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                  
                  <div 
                    className="relative w-48 h-72 shadow-[12px_18px_30px_rgba(0,0,0,0.5)] border flex flex-col justify-between p-6 transition-transform duration-500 hover:scale-[1.03] select-none text-left"
                    style={{
                      backgroundColor: book.color,
                      color: book.textColor,
                      borderColor: book.borderColor || '#F5F2ED'
                    }}
                  >
                    {/* Cover textures */}
                    <div className="absolute left-0 top-0 bottom-0 w-[5px] bg-white/10" />
                    <div className="absolute left-[5px] top-0 bottom-0 w-[1px] bg-black/30" />
                    <div className="absolute inset-3 border border-current/10 pointer-events-none" />

                    <div className="text-[9px] font-mono tracking-widest opacity-60 flex justify-between">
                      <span>FOLIO SERIES</span>
                      <span>{book.year}</span>
                    </div>

                    <div className="space-y-3 my-auto">
                      <div className="w-8 h-[1px] bg-current opacity-30" />
                      <h3 className="text-xl font-serif leading-tight font-medium tracking-wide">
                        {book.title}
                      </h3>
                      <p className="text-xs font-space tracking-widest opacity-80">
                        {book.author}
                      </p>
                    </div>

                    <div className="text-[10px] font-mono opacity-50 tracking-[0.2em]">
                      INDEX REFERENCE
                    </div>
                  </div>

                </div>

                {/* 2. Review and Annotation Panels */}
                <div className={`col-span-1 lg:col-span-8 space-y-6 text-left ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                  
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2 text-[10px] font-mono text-[#B8860B]">
                      <Bookmark size={10} />
                      <span className="font-bold">{cat}</span>
                      <span>•</span>
                      <span>PUBLISHED {book.year}</span>
                    </div>
                    
                    <h2 className="text-3xl font-serif text-[#0F1112] tracking-tight leading-tight">
                      {book.title}
                    </h2>
                    
                    <p className="text-xs text-[#0F1112]/50 font-mono">
                      PRIMARY INVESTIGATION BY &mdash; {book.author.toUpperCase()}
                    </p>
                  </div>

                  {/* Book Blockquote citation */}
                  <div className="bg-[#1A1D1E]/5 border-l-2 border-[#602020] p-5 italic font-reading text-[#0F1112]/80 text-sm leading-relaxed">
                    <div className="flex items-start">
                      <MessageSquareQuote size={16} className="text-[#602020] mr-2 flex-shrink-0 mt-0.5" />
                      <p>&ldquo;{book.excerpt}&rdquo;</p>
                    </div>
                  </div>

                  {/* Complete Editorial Review */}
                  <div className="space-y-4">
                    <p className="font-reading text-sm sm:text-base text-[#0F1112]/80 leading-relaxed font-light font-light">
                      {book.review}
                    </p>
                  </div>

                  {/* Scholarly classification rating */}
                  <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-[#0F1112]/15 text-xs font-mono text-[#0F1112]/40">
                    <div className="flex items-center space-x-1.5">
                      <span>INFLUENCE INDEX:</span>
                      <div className="flex text-[#B8860B]">
                        <Star size={11} fill="currentColor" />
                        <Star size={11} fill="currentColor" />
                        <Star size={11} fill="currentColor" />
                        <Star size={11} fill="currentColor" />
                        <Star size={11} fill="currentColor" />
                      </div>
                    </div>
                    <span>CUSTODIAL APPROVAL SYSTEM &bull; VERIFIED</span>
                  </div>

                </div>

              </section>
            );
          })}
        </div>

      </div>
    </div>
  );
}
