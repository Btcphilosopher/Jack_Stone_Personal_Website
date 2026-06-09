import { Landmark, Compass, Contact, Heart, GraduationCap, ArrowUpRight } from 'lucide-react';

export default function AboutView() {
  return (
    <div className="bg-[#F5F2ED] paper-grain min-h-screen text-[#0F1112] py-20 text-left">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Core Profile Header */}
        <div className="text-center space-y-3 max-w-2xl mx-auto border-b border-[#0F1112]/20 pb-10">
          <div className="inline-flex items-center space-x-2 text-[10px] font-mono tracking-[0.25em] text-[#B8860B] uppercase font-bold">
            <GraduationCap size={12} />
            <span>CURRICULUM VITAE ET INTELLECTUS</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-serif text-[#0F1112] tracking-tight">
            About Jack Stone
          </h1>
          <p className="font-reading text-sm sm:text-base text-[#0F1112]/70 leading-relaxed font-light font-light">
            An overview of investigative methodologies, institutional affiliations, and the philosophical inquiries driving my current research pathways.
          </p>
        </div>

        {/* Biography Row */}
        <section className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
          
          <div className="md:col-span-8 space-y-6 font-reading text-base text-[#0F1112]/80 leading-relaxed font-light font-light">
            <p>
              I am a contemporary philosopher, essayist, and public thinker. My work is situated at the intersection of political theory, aesthetics, and the philosophy of history, with a particular focus on reclaiming long-term horizons of intergenerational custodianship in an increasingly fragmented, present-obsessed culture.
            </p>
            <p>
              Currently based in Oxford, UK, my research questions how modern democratic republics can design physical architecture, educational channels, and linguistic modes sturdy enough to carry our core civilisational treasures through deep epochs of time. I refer to this framework as <strong className="text-[#602020] font-medium font-bold">Anglo-Futurism</strong>&mdash;a synthesis of British institutional traditionalism, rigorous material design, and civic confidence.
            </p>
            <p>
              Previously, I took degrees in Philosophy and Classics, focusing on Oakeshott’s civil association critique and ancient environmental conservancy principles. I divide my active days between drafting monographs and lecturing at civic panels worldwide.
            </p>
          </div>

          <div className="md:col-span-4 bg-[#1A1D1E]/5 border border-[#B8860B]/30 p-6 space-y-4">
            <h3 className="text-xs font-mono tracking-widest text-[#B8860B] uppercase font-bold border-b border-[#B8860B]/20 pb-2">
              AFFILIATIONS
            </h3>
            <div className="text-xs font-mono space-y-3 text-[#0F1112]/80">
              <div>
                <p className="font-bold text-[#602020]">VISITING SCHOLAR</p>
                <p>Faculty of Philosophy, Oxford</p>
              </div>
              <div>
                <p className="font-bold text-[#602020]">FELLOW CUSTODIAN</p>
                <p>Society for Long-Term Planning</p>
              </div>
              <div>
                <p className="font-bold text-[#602020]">CONTRIBUTING EDITOR</p>
                <p>The Michaelmas Review</p>
              </div>
            </div>
          </div>

        </section>

        {/* Pillars of Inquiry Diagram / Bento Grid */}
        <section className="space-y-8">
          <div className="flex items-center space-x-2 text-xs font-mono text-[#B8860B] tracking-wider font-bold">
            <Compass size={14} />
            <span>THREE PATHWAYS OF PHILOSOPHICAL INQUIRY</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            <div className="border border-[#B8860B]/30 p-6 bg-[#F5F2ED] space-y-4 rounded-none hover:border-[#602020] transition-colors duration-300">
              <span className="font-mono text-xl text-[#B8860B] block font-semibold border-b border-[#B8860B]/20 pb-2">I .</span>
              <h4 className="text-lg font-serif text-[#0F1112]">Intergenerational Responsibility</h4>
              <p className="text-xs text-[#0F1112]/70 leading-relaxed font-reading font-light font-light">
                Rejecting short-term financialized chronophilia to re-establish the social partnership between the deceased, the living, and the unborn.
              </p>
            </div>

            <div className="border border-[#B8860B]/30 p-6 bg-[#F5F2ED] space-y-4 rounded-none hover:border-[#602020] transition-colors duration-300">
              <span className="font-mono text-xl text-[#B8860B] block font-semibold border-b border-[#B8860B]/20 pb-2">II .</span>
              <h4 className="text-lg font-serif text-[#0F1112]">Aesthetics of Permanence</h4>
              <p className="text-xs text-[#0F1112]/70 leading-relaxed font-reading font-light font-light">
                Investigating why modern civic architecture has collapsed into disposable forms, and proposing a return to classical proportions utilizing future structural science.
              </p>
            </div>

            <div className="border border-[#B8860B]/30 p-6 bg-[#F5F2ED] space-y-4 rounded-none hover:border-[#602020] transition-colors duration-300">
              <span className="font-mono text-xl text-[#B8860B] block font-semibold border-b border-[#B8860B]/20 pb-2">III .</span>
              <h4 className="text-lg font-serif text-[#0F1112]">Epistemic Custodianship</h4>
              <p className="text-xs text-[#0F1112]/70 leading-relaxed font-reading font-light font-light">
                Evaluating the impact of automated generation engines on human memory preservation, defending traditional textual literacy as a tool of intellectual sovereignty.
              </p>
            </div>

          </div>
        </section>

        {/* Contact Deck */}
        <section className="bg-[#1A1D1E]/5 border border-[#B8860B]/30 p-8 sm:p-12 space-y-8">
          <div className="flex items-center space-x-2 text-xs font-mono text-[#602020] font-bold">
            <Contact size={14} />
            <span>SECURE CONTACT COORDINATES</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-xs font-mono">
            <div className="space-y-4 text-[#0F1112]/80">
              <p className="text-sm font-serif italic text-[#0F1112]/60">
                &ldquo;Let us engage in continuous, slow-form correspondence.&rdquo;
              </p>
              <div className="space-y-1.5">
                <p><strong className="text-[#0F1112]">DIRECT MAIL:</strong> <a href="mailto:jack.stone@oxon.org" className="text-[#602020] underline hover:text-[#602020]/80">jack.stone@oxon.org</a></p>
                <p><strong className="text-[#0F1112]">SECURE PIN:</strong> JS_STARCHAMBER_OXON</p>
                <p><strong className="text-[#0F1112]">ADDRESS:</strong> Radcliffe Camera Quad, Oxford, OX1 3BG</p>
              </div>
            </div>

            <div className="p-6 bg-white border border-[#B8860B]/20 space-y-3">
              <p className="font-bold text-[#602020] text-[10px] tracking-wider">OFFICE HOURS</p>
              <p className="text-[#0F1112]/70 leading-relaxed">
                Available to postgraduate students, planning architects, and publishers on alternate Tuesdays during Michaelmas term. Please coordinate in advance.
              </p>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
