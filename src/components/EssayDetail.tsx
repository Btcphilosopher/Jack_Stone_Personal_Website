import { useState, useEffect } from 'react';
import { Essay, ViewState } from '../types';
import { ArrowLeft, Share2, Clock, Calendar, Bookmark, Printer, Check } from 'lucide-react';

interface EssayDetailProps {
  essay: Essay;
  onBack: () => void;
  allEssays: Essay[];
  onSelectEssay: (id: string) => void;
}

export default function EssayDetail({ essay, onBack, allEssays, onSelectEssay }: EssayDetailProps) {
  const [activeSection, setActiveSection] = useState<string>('');
  const [copied, setCopied] = useState(false);

  // Scroll spy mechanism for table of contents
  useEffect(() => {
    const handleScroll = () => {
      if (!essay.tableOfContents) return;
      const scrollPos = window.scrollY + 200;

      for (const item of essay.tableOfContents) {
        const el = document.getElementById(item.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(item.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [essay]);

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  const nextEssay = allEssays.find(e => e.id !== essay.id);

  return (
    <div className="bg-[#F5F2ED] paper-grain min-h-screen text-[#0F1112] py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Action Bar */}
        <div className="flex items-center justify-between border-b border-[#0F1112]/20 pb-4 mb-12">
          
          <button
            onClick={onBack}
            className="group flex items-center space-x-2 text-xs font-mono tracking-wider text-[#0F1112]/60 hover:text-[#602020] transition-colors cursor-pointer"
          >
            <ArrowLeft size={14} className="transform group-hover:-translate-x-0.5 transition-transform" />
            <span>RETURN TO ARCHIVE</span>
          </button>

          <div className="flex items-center space-x-6">
            <button
              onClick={handleShare}
              className="flex items-center space-x-1.5 text-xs font-mono text-[#0F1112]/60 hover:text-[#602020] transition-colors cursor-pointer"
            >
              {copied ? (
                <>
                  <Check size={12} className="text-emerald-700 animate-pulse" />
                  <span className="text-emerald-700 font-bold">URI LINK COPIED</span>
                </>
              ) : (
                <>
                  <Share2 size={12} />
                  <span>DISSEMINATE</span>
                </>
              )}
            </button>
            <button
              onClick={() => window.print()}
              className="flex items-center space-x-1.5 text-xs font-mono text-[#0F1112]/60 hover:text-[#602020] transition-colors"
            >
              <Printer size={12} />
              <span>COLLECT PRINT</span>
            </button>
          </div>

        </div>

        {/* Master Essay Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* LEFT COLUMN: Sticky Table of Contents (Desktop Only) */}
          <aside className="hidden lg:block lg:col-span-3 sticky top-28 space-y-8 pr-4">
            <div className="border-l border-[#0F1112]/20 pl-4 space-y-4">
              <h4 className="text-[10px] font-mono tracking-[0.2em] text-[#B8860B] uppercase font-bold">
                TRACT INDEX
              </h4>
              <nav className="flex flex-col space-y-2.5">
                {essay.tableOfContents?.map((item) => {
                  const isActive = activeSection === item.id;
                  return (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      onClick={(e) => {
                        e.preventDefault();
                        document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth' });
                        setActiveSection(item.id);
                      }}
                      className={`text-xs text-left tracking-wider font-space transition-all block ${
                        isActive 
                          ? 'text-[#602020] font-semibold pl-2 border-l border-[#602020] -ml-[17px]' 
                          : 'text-[#0F1112]/60 hover:text-[#0F1112]'
                      }`}
                    >
                      {item.title}
                    </a>
                  );
                })}
              </nav>
            </div>

            <div className="bg-[#1A1D1E]/5 border border-[#B8860B]/15 p-4 text-[11px] font-mono space-y-2 text-[#0F1112]/80">
              <p className="font-semibold text-[#602020]">IMPRINT METADATA</p>
              <p className="flex justify-between"><span>VOLUME:</span> <span className="font-bold font-semibold">IX / MMXXVI</span></p>
              <p className="flex justify-between"><span>IMPACT:</span> <span className="font-bold font-semibold">CUSTODIAN</span></p>
              <p className="flex justify-between"><span>TYPE:</span> <span className="font-bold font-semibold">LONG-FORM</span></p>
            </div>
          </aside>

          {/* CENTER & RIGHT COLUMN: The Essay Body & Pull Quotes */}
          <main className="lg:col-span-9 grid grid-cols-1 md:grid-cols-12 gap-10">
            
            {/* The Text Body */}
            <article className="md:col-span-8 space-y-8 text-left">
              
              {/* Essay Meta Information */}
              <div className="space-y-4">
                <div className="flex items-center space-x-3 text-[10px] font-mono text-[#B8860B]">
                  <span className="px-2 py-0.5 border border-[#B8860B]/30 bg-[#B8860B]/5 font-bold">{essay.category}</span>
                  <span className="flex items-center space-x-1"><Calendar size={10} /><span>{essay.date}</span></span>
                  <span className="flex items-center space-x-1"><Clock size={10} /><span>{essay.readTime}</span></span>
                </div>
                
                <h1 className="text-4xl sm:text-5xl font-serif text-[#0F1112] tracking-tight leading-tight">
                  {essay.title}
                </h1>
                
                <p className="text-lg font-reading text-[#0F1112]/80 leading-relaxed italic border-l-2 border-[#B8860B] pl-4">
                  {essay.subtitle}
                </p>
              </div>

              {/* Large Atmospheric Graphic Frame */}
              <div className="relative aspect-[16/9] w-full bg-[#0F1112] overflow-hidden border border-[#0F1112]/10 my-8">
                <img
                  src={essay.image}
                  alt="Architectural visualization of the essay core theme"
                  className="w-full h-full object-cover filter grayscale scale-100 ease-in-out contrast-115 hover:contrast-125"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-2 right-2 px-1.5 py-0.5 bg-[#000]/60 text-[#B8860B] text-[8px] font-mono tracking-wider font-bold">
                  ARCHIVAL FIGURE 1.2
                </div>
              </div>

              {/* Main reading content with drop cap */}
              <div className="font-reading text-base leading-relaxed text-[#0F1112]/90 space-y-6">
                
                {essay.sections.map((section, sIndex) => (
                  <section 
                    key={sIndex} 
                    id={section.id} 
                    className="space-y-4 pt-4 first:pt-0"
                  >
                    {section.heading && (
                      <h2 className="text-xl font-serif font-bold text-[#0F1112] border-b border-[#0F1112]/10 pb-1 mt-8 mb-4 tracking-tight">
                        {section.heading}
                      </h2>
                    )}
                    
                    {section.paragraphs.map((p, pIndex) => {
                      // Apply illuminated drop cap on first paragraph of first section
                      if (sIndex === 0 && pIndex === 0) {
                        const firstChar = p.charAt(0);
                        const restOfP = p.slice(1);
                        return (
                          <p key={pIndex} className="relative first-letter:float-left first-letter:text-5xl sm:first-letter:text-6xl first-letter:font-serif first-letter:mr-2 sm:first-letter:mr-3 first-letter:font-bold first-letter:text-[#602020] first-letter:lh-none mt-2 first-letter:pt-1">
                            {restOfP}
                          </p>
                        );
                      }
                      
                      return (
                        <p key={pIndex} className="text-[#0F1112]/85 text-sm sm:text-base whitespace-pre-wrap font-light">
                          {p}
                        </p>
                      );
                    })}
                  </section>
                ))}

              </div>

              {/* Footnotes Section */}
              {essay.notes && essay.notes.length > 0 && (
                <div className="pt-12 mt-12 border-t border-[#0F1112]/15 space-y-4">
                  <div className="flex items-center space-x-1.5 text-xs font-mono text-[#B8860B] font-bold">
                    <Bookmark size={12} />
                    <span>NOTES & COLLATERAL REFLECTIONS</span>
                  </div>
                  <ol className="list-decimal pl-5 space-y-2 text-xs font-reading text-[#0F1112]/70 leading-relaxed font-light">
                    {essay.notes.map((note, idx) => (
                      <li key={idx}>
                        {note}
                      </li>
                    ))}
                  </ol>
                </div>
              )}

              {/* Bibliography References */}
              {essay.references && essay.references.length > 0 && (
                <div className="pt-8 mt-6 border-t border-[#0F1112]/10 space-y-4">
                  <p className="text-xs font-mono text-[#0F1112]/40 tracking-wider font-bold">BIBLIOGRAPHY / SOURCES</p>
                  <ul className="space-y-1.5 text-xs font-mono text-[#0F1112]/60 select-all">
                    {essay.references.map((ref, idx) => (
                      <li key={idx} className="hover:text-[#602020] transition-colors leading-relaxed">
                        [{idx + 1}] — {ref}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

            </article>

            {/* Pull Quote column (Responsive flow) */}
            <aside className="md:col-span-4 space-y-8 flex flex-col justify-center border-t md:border-t-0 md:border-l border-[#0F1112]/10 pt-8 md:pt-0 md:pl-6">
              
              {essay.pullQuote && (
                <div className="space-y-3">
                  <p className="text-xs font-mono text-[#B8860B] tracking-wider font-bold">CORE APHORISM</p>
                  <blockquote className="font-serif italic text-lg sm:text-xl text-[#602020] leading-relaxed relative font-light">
                    &ldquo;{essay.pullQuote}&rdquo;
                  </blockquote>
                  <p className="text-[10px] font-mono text-[#0F1112]/40">— J. STONE, MS COLLECTION</p>
                </div>
              )}

              <hr className="border-[#0F1112]/10" />

              {/* Read Next Navigation option */}
              {nextEssay && (
                <div 
                  onClick={() => {
                    onSelectEssay(nextEssay.id);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="bg-[#1A1D1E]/5 hover:bg-[#B8860B]/10 border border-[#B8860B]/15 p-6 space-y-3 transition-all duration-300 cursor-pointer block text-left group"
                >
                  <span className="text-[9px] font-mono tracking-widest text-[#B8860B] font-bold">SEQUENT ARTICLE</span>
                  <h4 className="text-base font-serif font-medium text-[#0F1112] group-hover:text-[#602020] transition-colors line-clamp-2">
                    {nextEssay.title}
                  </h4>
                  <p className="text-xs text-[#0F1112]/60 line-clamp-2 font-reading">
                    {nextEssay.subtitle}
                  </p>
                  <span className="text-[10px] font-mono text-[#602020] font-bold inline-block pt-1 group-hover:translate-x-1 transition-transform">
                    NEXT TRACT →
                  </span>
                </div>
              )}

            </aside>

          </main>

        </div>

      </div>
    </div>
  );
}
