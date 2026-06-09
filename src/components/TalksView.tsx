import { useState } from 'react';
import { SpeakingEvent } from '../types';
import { Calendar, MapPin, ChevronDown, ChevronUp, Bell, Clock, Compass } from 'lucide-react';

interface TalksViewProps {
  events: SpeakingEvent[];
}

export default function TalksView({ events }: TalksViewProps) {
  const [expandedEvent, setExpandedEvent] = useState<string | null>('talk-1');

  const upcomingEvents = events.filter(e => e.status === 'upcoming');
  const pastEvents = events.filter(e => e.status === 'past');

  const toggleEvent = (id: string) => {
    setExpandedEvent(expandedEvent === id ? null : id);
  };

  const renderEventRow = (event: SpeakingEvent, idx: number) => {
    const isExpanded = expandedEvent === event.id;
    
    return (
      <div 
        key={event.id}
        className="border-b border-[#0F1112]/10 last:border-0"
      >
        {/* Main Row summary */}
        <button
          onClick={() => toggleEvent(event.id)}
          className="w-full py-6 flex flex-col md:flex-row md:items-center justify-between text-left gap-4 hover:bg-[#F5F2ED]/30 px-4 transition-colors cursor-pointer focus:outline-none group"
        >
          {/* Layout Left: Time and Topic */}
          <div className="flex items-center space-x-6">
            <span className="font-mono text-xs text-[#602020] font-bold min-w-[90px]">
              {event.date}
            </span>
            <span className="text-[10px] font-mono border border-[#B8860B]/30 px-2 py-0.5 bg-[#B8860B]/5 text-[#B8860B] tracking-widest uppercase font-bold">
              {event.topic}
            </span>
          </div>

          {/* Layout Center: Title and Venue */}
          <div className="flex-grow space-y-1">
            <h3 className="text-lg font-serif text-[#0F1112] group-hover:text-[#602020] transition-colors leading-snug">
              {event.title}
            </h3>
            <div className="flex items-center space-x-2 text-xs font-mono text-[#0F1112]/50">
              <MapPin size={11} />
              <span>{event.venue}, {event.location}</span>
            </div>
          </div>

          {/* Layout Right: Expansion Toggle */}
          <div className="flex items-center space-x-4 self-end md:self-auto">
            <span className="text-[10px] font-mono text-[#B8860B] tracking-widest font-semibold hidden sm:inline">
              {isExpanded ? 'COLLAPSE BRIEF' : 'EXPAND BRIEF'}
            </span>
            {isExpanded ? (
              <ChevronUp size={16} className="text-[#602020]" />
            ) : (
              <ChevronDown size={16} className="text-[#0F1112]/40 group-hover:text-[#602020]" />
            )}
          </div>

        </button>

        {/* Abstract Expandable Content container */}
        {isExpanded && (
          <div className="px-6 pb-8 pt-2 pl-4 md:pl-[140px] text-left animate-fadeIn space-y-4">
            <div className="prose text-sm line text-[#0F1112]/80 font-reading leading-relaxed max-w-2xl font-light font-light">
              {event.description}
            </div>

            {/* Simulated registration / recording notice */}
            <div className="flex items-center space-x-2 pt-4 text-[10px] font-mono text-[#0F1112]/40 uppercase border-t border-[#0F1112]/10 max-w-sm">
              <Compass size={11} className="text-[#B8860B]" />
              {event.status === 'upcoming' ? (
                <span>REGISTRATION OPEN via venue portals</span>
              ) : (
                <span>RECORDED DISCOURSE AVAILABLE IN ARCHIVE</span>
              )}
            </div>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="bg-[#F5F2ED] paper-grain min-h-screen text-[#0F1112] py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Page Header */}
        <div className="text-center space-y-3 max-w-2xl mx-auto border-b border-[#0F1112]/20 pb-10">
          <div className="inline-flex items-center space-x-2 text-[10px] font-mono tracking-[0.25em] text-[#B8860B] uppercase font-bold">
            <Clock size={12} />
            <span>ORAL DISCOURSES & LECTURES</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-serif text-[#0F1112] tracking-tight">
            Academic Appearances
          </h1>
          <p className="font-reading text-sm sm:text-base text-[#0F1112]/70 leading-relaxed font-light font-light">
            An overview of upcoming public addresses, theoretical symposia, and historical conference paper archives presented by Jack Stone.
          </p>
        </div>

        {/* Section 1: Upcoming Timetable with Rail design lines */}
        <div className="space-y-6">
          <div className="flex items-center space-x-3 text-xs font-mono text-[#B8860B] font-bold pl-4 border-l-2 border-[#602020]">
            <Bell size={13} className="animate-pulse" />
            <span>UPCOMING CONVOCATIONS & EVENTS</span>
          </div>

          <div className="bg-[#F5F2ED]/50 border border-[#0F1112]/20 shadow-xs">
            {upcomingEvents.length > 0 ? (
              upcomingEvents.map((evt, idx) => renderEventRow(evt, idx))
            ) : (
              <p className="p-8 text-center text-xs font-mono text-[#0F1112]/40">No current academic dates are scheduled.</p>
            )}
          </div>
        </div>

        {/* Section 2: Historical Archive */}
        <div className="space-y-6">
          <div className="flex items-center space-x-3 text-xs font-mono text-[#0F1112]/40 font-bold pl-4 border-l-2 border-[#B8860B]">
            <Calendar size={13} />
            <span>HISTORIC ADDRESS CABINET</span>
          </div>

          <div className="bg-[#F5F2ED]/50 border border-[#0F1112]/20">
            {pastEvents.length > 0 ? (
              pastEvents.map((evt, idx) => renderEventRow(evt, idx))
            ) : (
              <p className="p-8 text-center text-xs font-mono text-[#0F1112]/40">No past appearance entries found.</p>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}
