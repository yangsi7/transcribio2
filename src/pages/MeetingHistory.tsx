// src/pages/MeetingHistory.tsx
import React, { useState } from 'react';
import { Search, Calendar, Filter, ChevronDown, ChevronRight, Clock, ArrowLeft } from 'lucide-react';
import { format, startOfWeek, endOfWeek } from 'date-fns';
import { MeetingCard } from '../components/MeetingCard';
import { WeekHeader } from '../components/calendar/WeekHeader';
import { FilterDropdown } from '../components/calendar/FilterDropdown';
import { useTranscriptionStore } from '../store/transcription';
import { logger } from '../utils/logger/core';
import { EntitySummaryModal } from '../components/EntitySummaryModal';

export function MeetingHistory() {
  logger.debug('Rendering MeetingHistory page');
  const [searchTerm, setSearchTerm] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const [expandedDates, setExpandedDates] = useState<string[]>(['Today']);
  const [currentWeek, setCurrentWeek] = useState({
    start: startOfWeek(new Date()),
    end: endOfWeek(new Date())
  });

  const { summary, knowledgeGraph } = useTranscriptionStore();
  const [showModal, setShowModal] = useState(false);

  let meetingsByDate: Record<string, any[]> = {};

  // If we have a transcription summary and KG, let's show a "Transcribed Meeting"
  if (summary) {
    const entityTags = knowledgeGraph?.entities.map(e => e.name) || [];
    const relationships = knowledgeGraph?.relationships || [];
    meetingsByDate['Today'] = [{
      id: 'meeting-1',
      title: "Transcribed Meeting",
      date: format(new Date(), 'yyyy-MM-dd'),
      time: "9:00 AM",
      duration: "45m",
      participants: ["John Doe", "Jane Smith"],
      summary: summary,
      tags: entityTags,
      relationships: relationships
    }];
  }

  const filteredMeetings = Object.entries(meetingsByDate).reduce((acc, [date, meetings]) => {
    const filtered = meetings.filter(m => {
      const combinedText = `${m.title} ${m.summary} ${(m.tags || []).join(' ')} ${m.participants.join(' ')}`;
      return combinedText.toLowerCase().includes(searchTerm.toLowerCase());
    });
    if (filtered.length > 0) {
      acc[date] = filtered;
    }
    return acc;
  }, {} as Record<string, any[]>);

  const toggleDate = (date: string) => {
    logger.debug('Toggling date expansion', { date });
    setExpandedDates(prev => 
      prev.includes(date) ? prev.filter(d => d !== date) : [...prev, date]
    );
  };

  return (
    <div className="max-w-6xl mx-auto">
      <div className="sticky top-0 bg-gray-900 z-10 pb-6">
        <header className="mb-6">
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center gap-2">
              <a href="/upload" className="text-gray-300 hover:text-white">
                <ArrowLeft className="w-5 h-5" />
              </a>
              <div>
                <h2 className="text-3xl font-bold text-white">Meeting History</h2>
                <p className="text-gray-400">Browse and search through your past meetings</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search meetings..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-64 bg-gray-800 text-gray-200 rounded-lg pl-10 pr-4 py-2 focus:ring-2 focus:ring-blue-400 focus:outline-none"
                />
              </div>
              <FilterDropdown onToggle={() => setShowFilters(!showFilters)} isOpen={showFilters} />
            </div>
          </div>

          <WeekHeader week={currentWeek} />
        </header>
      </div>

      {/* If summary and knowledgeGraph exist, show a button to view Entity Summary */}
      {summary && knowledgeGraph && (
        <div className="mb-4 flex justify-end">
          <button
            onClick={() => setShowModal(true)}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-400"
          >
            View Summary &amp; Entities
          </button>
        </div>
      )}

      <div className="space-y-4">
        {Object.keys(filteredMeetings).length === 0 && (
          <div className="text-gray-300 bg-gray-800 p-4 rounded-md">
            No meetings found. Process a file to see results here.
          </div>
        )}

        {Object.entries(filteredMeetings).map(([date, meetings]) => (
          <div key={date} className="bg-gray-800/30 rounded-xl overflow-hidden backdrop-blur-sm border border-gray-700">
            <button
              onClick={() => toggleDate(date)}
              className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-700 transition-colors text-gray-200"
            >
              <div className="flex items-center gap-3">
                <Calendar className="w-5 h-5 text-blue-400" />
                <span className="font-medium text-gray-200">{date}</span>
                <div className="flex items-center gap-2 text-gray-400 text-sm">
                  <Clock className="w-4 h-4" />
                  <span>
                    {meetings.reduce((acc: number) => acc + 45, 0)} min
                  </span>
                  <span className="mx-2">•</span>
                  <span>{meetings.length} {meetings.length === 1 ? 'meeting' : 'meetings'}</span>
                </div>
              </div>
              {expandedDates.includes(date) ? (
                <ChevronDown className="w-5 h-5 text-gray-400" />
              ) : (
                <ChevronRight className="w-5 h-5 text-gray-400" />
              )}
            </button>

            {expandedDates.includes(date) && (
              <div className="divide-y divide-gray-700/50">
                {meetings.map((meeting: any) => (
                  <MeetingCard
                    key={meeting.id}
                    {...meeting}
                    onClick={() => logger.info('Meeting card clicked', { meetingId: meeting.id })}
                  />
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      {summary && knowledgeGraph && (
        <EntitySummaryModal
          isOpen={showModal}
          onClose={() => setShowModal(false)}
          summary={summary}
          knowledgeGraph={knowledgeGraph}
        />
      )}
    </div>
  );
}
