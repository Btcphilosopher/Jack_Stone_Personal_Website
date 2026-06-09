import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { ViewState } from './types';
import { ESSAYS, FRAGMENT_NOTES, INFLUENCES, SPEAKING_EVENTS } from './data';

// Import sub-components
import Header from './components/Header';
import Hero from './components/Hero';
import LatestWriting from './components/LatestWriting';
import CurrentIdeas from './components/CurrentIdeas';
import IntellectualInfluences from './components/IntellectualInfluences';
import EssayDetail from './components/EssayDetail';
import NotesView from './components/NotesView';
import BookshelfView from './components/BookshelfView';
import TalksView from './components/TalksView';
import AboutView from './components/AboutView';
import Footer from './components/Footer';

import { Sparkles, Calendar, Clock, Bookmark, ListFilter } from 'lucide-react';

export default function App() {
  const [view, setView] = useState<ViewState>('home');
  const [selectedEssayId, setSelectedEssayId] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Scroll to top on view changes
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [view, selectedEssayId]);

  const handleSelectEssay = (id: string) => {
    setSelectedEssayId(id);
    setView('essays');
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  // Helper filter for essays search
  const filteredEssaysList = ESSAYS.filter(essay => {
    if (!searchQuery) return true;
    return essay.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
           essay.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
           essay.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
           essay.sections.some(s => s.heading?.toLowerCase().includes(searchQuery.toLowerCase()));
  });

  return (
    <div className="flex flex-col min-h-screen bg-[#F5F2ED] selection:bg-[#B8860B]/40 text-[#0F1112]">
      
      {/* Universal Sticky Header */}
      <Header 
        currentView={view} 
        setView={(v) => {
          setView(v);
          setSelectedEssayId(null); // Clear selected essay when clicking main folder links
        }} 
        onSearch={handleSearch}
        searchQuery={searchQuery}
      />

      {/* Main Content Area with Seamless Transitions */}
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          
          {/* HOME VIEW */}
          {view === 'home' && (
            <motion.div
              key="home"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
              className="space-y-0"
            >
              <Hero 
                onLatestClick={() => handleSelectEssay('civilisational-renewal')} 
                setView={setView} 
              />
              <LatestWriting 
                essays={ESSAYS} 
                onSelectEssay={handleSelectEssay} 
                setView={setView} 
              />
              <CurrentIdeas />
              <IntellectualInfluences 
                books={INFLUENCES} 
                setView={setView} 
              />
            </motion.div>
          )}

          {/* ESSAYS VIEW CABINET */}
          {view === 'essays' && (
            <motion.div
              key="essays"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
            >
              {selectedEssayId ? (
                // Detailed Reader Page
                <EssayDetail 
                  essay={ESSAYS.find(e => e.id === selectedEssayId)!} 
                  onBack={() => setSelectedEssayId(null)}
                  allEssays={ESSAYS}
                  onSelectEssay={setSelectedEssayId}
                />
              ) : (
                // Essays Catalog Index
                <div className="bg-[#F5F2ED] paper-grain py-20 min-h-[75vh] text-left">
                  <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
                     
                     {/* Catalog Header */}
                    <div className="text-center space-y-3 max-w-2xl mx-auto border-b border-[#0F1112]/20 pb-10">
                      <div className="inline-flex items-center space-x-2 text-[10px] font-mono tracking-[0.25em] text-[#B8860B] uppercase font-bold">
                        <Bookmark size={12} />
                        <span>SACRED DEPOSITORY</span>
                      </div>
                      <h1 className="text-4xl sm:text-5xl font-serif text-[#0F1112] tracking-tight font-medium">
                        Essays Archive
                      </h1>
                      <p className="font-reading text-sm sm:text-base text-[#0F1112]/70 leading-relaxed font-light">
                        Long-form investigative monographs mapping historical context, architectural theories, and epistemic pathways.
                      </p>
                    </div>

                    {/* Catalog Grid */}
                    <div className="space-y-12">
                      {filteredEssaysList.length > 0 ? (
                        filteredEssaysList.map((essay, idx) => (
                          <article 
                            key={essay.id}
                            onClick={() => setSelectedEssayId(essay.id)}
                            className="group block p-8 border border-[#0F1112]/20 hover:border-[#602020] bg-[#F5F2ED] hover:shadow-[5px_5px_15px_rgba(15,17,18,0.1)] transition-all duration-300 cursor-pointer grid grid-cols-1 md:grid-cols-12 gap-8 items-center"
                          >
                            
                            {/* Graphic Frame and category */}
                            <div className="md:col-span-4 relative aspect-[14/9] bg-[#0F1112] overflow-hidden border border-[#0F1112]/10">
                              <img
                                src={essay.image}
                                alt={essay.title}
                                className="w-full h-full object-cover filter grayscale scale-100 ease-in group-hover:scale-[1.03] transition-transform duration-500"
                                referrerPolicy="no-referrer"
                              />
                            </div>

                            {/* Content descriptions snippet */}
                            <div className="md:col-span-8 space-y-4">
                              <div className="flex items-center space-x-2.5 text-[10px] font-mono text-[#B8860B]">
                                <span>{(idx + 1).toString().padStart(2, '0')} //</span>
                                <span className="font-bold tracking-widest">{essay.category}</span>
                                <span>•</span>
                                <span>{essay.date}</span>
                              </div>
                              
                              <h2 className="text-2xl font-serif text-[#0F1112] group-hover:text-[#602020] transition-colors tracking-tight font-medium">
                                {essay.title}
                              </h2>

                              <p className="font-reading text-sm text-[#0F1112]/75 leading-relaxed font-light">
                                {essay.excerpt}
                              </p>

                              <div className="pt-2 flex items-center justify-between text-xs font-mono text-[#0F1112]/40 border-t border-[#0F1112]/10 max-w-md">
                                <span>READ TIME: {essay.readTime}</span>
                                <span className="text-[#602020] font-semibold group-hover:translate-x-1 transition-transform">READ TRACT →</span>
                              </div>
                            </div>

                          </article>
                        ))
                      ) : (
                        <div className="text-center py-20 text-xs font-mono text-[#0F1112]/40 bg-[#F5F2ED] border border-[#0F1112]/15">
                          NO ESSAYS FOUND FOR THE ACTIVE SEARCH QUERY.
                        </div>
                      )}
                    </div>

                  </div>
                </div>
              )}
            </motion.div>
          )}

          {/* NOTES & FRAGMENTS VIEW */}
          {view === 'notes' && (
            <motion.div
              key="notes"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
            >
              <NotesView notes={FRAGMENT_NOTES} searchQuery={searchQuery} />
            </motion.div>
          )}

          {/* BOOKSHELF VIEW */}
          {view === 'bookshelf' && (
            <motion.div
              key="bookshelf"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
            >
              <BookshelfView books={INFLUENCES} />
            </motion.div>
          )}

          {/* TALKS VIEW */}
          {view === 'talks' && (
            <motion.div
              key="talks"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
            >
              <TalksView events={SPEAKING_EVENTS} />
            </motion.div>
          )}

          {/* ABOUT VIEW */}
          {view === 'about' && (
            <motion.div
              key="about"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
            >
              <AboutView />
            </motion.div>
          )}

        </AnimatePresence>
      </main>

      {/* Universal Publications Imprint Footer */}
      <Footer setView={(v) => { setView(v); setSelectedEssayId(null); }} />

    </div>
  );
}
