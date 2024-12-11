// src/pages/MeetingHistory.tsx
import React, { useState } from 'react';
import { Search, Calendar, Tag, Filter, ChevronDown, ChevronRight, BarChart, Clock } from 'lucide-react';
import { format, parseISO, startOfWeek, endOfWeek } from 'date-fns';
import { MeetingCard } from '../components/MeetingCard';
import { WeekHeader } from '../components/calendar/WeekHeader';
import { FilterDropdown } from '../components/calendar/FilterDropdown';

const MEETINGS_BY_DATE = {
  'Today': [
    {
      id: 1,
      title: "Q1 Planning Session",
      date: "2024-03-15",
      time: "10:00 AM",
      duration: "1h 30m",
      participants: ["Sarah Chen", "Michael Brown", "David Kim"],
      summary: "Discussed Q1 objectives, budget allocation, and team expansion plans. Key decisions made on new product features.",
      tags: ["Planning", "Q1", "Budget"]
    }
  ],
  'Yesterday': [
    {
      id: 2,
      title: "Product Design Review",
      date: "2024-03-14",
      time: "2:00 PM",
      duration: "45m",
      participants: ["Emma Wilson", "James Lee", "Lisa Park"],
      summary: "Reviewed latest UI mockups, discussed user feedback, and finalized design system updates.",
      tags: ["Design", "Product", "UI"]
    },
    {
      id: 3,
      title: "Team Sync",
      date: "2024-03-14",
      time: "4:30 PM",
      duration: "30m",
      participants: ["Emma Wilson", "James Lee"],
      summary: "Weekly team sync to discuss ongoing projects and blockers.",
      tags: ["Team", "Sync"]
    }
  ],
  'Week 11': [
    {
      id: 'weekly-1',
      title: "Week 11 Summary",
      date: "2024-03-11/17",
      duration: "12h 30m total",
      participants: ["Team"],
      summary: "8 meetings held this week. Key topics: Q1 Planning, Product Design, Team Syncs.",
      tags: ["Weekly Summary"],
      isWeeklySummary: true
    }
  ]
};

export function MeetingHistory() {
  const [searchTerm, setSearchTerm] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const [expandedDates, setExpandedDates] = useState<string[]>(['Today', 'Yesterday']);
  const [currentWeek, setCurrentWeek] = useState({
    start: startOfWeek(new Date()),
    end: endOfWeek(new Date())
  });

  const toggleDate = (date: string) => {
    setExpandedDates(prev => 
      prev.includes(date) ? prev.filter(d => d !== date) : [...prev, date]
    );
  };

  const formatDateHeader = (date: string) => {
    if (date === 'Today' || date === 'Yesterday') return date;
    if (date.startsWith('Week')) return date;
    const parsedDate = parseISO(date);
    return format(parsedDate, 'EEEE, MMMM d');
  };

  return (
    <div className="max-w-6xl mx-auto">
      <div className="sticky top-0 bg-gray-950 z-10 pb-6">
        <header className="mb-6">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h2 className="text-3xl font-bold text-white">Meeting History</h2>
              <p className="text-gray-400">Browse and search through your past meetings</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search meetings..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-64 bg-gray-800 text-white rounded-lg pl-10 pr-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>
              <FilterDropdown onToggle={() => setShowFilters(!showFilters)} isOpen={showFilters} />
            </div>
          </div>

          <WeekHeader week={currentWeek} />
        </header>
      </div>

      <div className="space-y-4">
        {Object.entries(MEETINGS_BY_DATE).map(([date, meetings]) => (
          <div key={date} className="bg-gray-800/50 rounded-xl overflow-hidden backdrop-blur-sm">
            <button
              onClick={() => toggleDate(date)}
              className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-800/80 transition-colors"
            >
              <div className="flex items-center gap-3">
                {date.includes('Week') ? (
                  <BarChart className="w-5 h-5 text-purple-400" />
                ) : (
                  <Calendar className="w-5 h-5 text-blue-400" />
                )}
                <span className="font-medium text-white">{formatDateHeader(date)}</span>
                <div className="flex items-center gap-2 text-gray-400 text-sm">
                  <Clock className="w-4 h-4" />
                  <span>
                    {meetings.reduce((acc, m: any) => {
                      // This is just a placeholder calculation for total minutes.
                      // In a real scenario, parse durations properly.
                      if (m.duration.includes('h')) {
                        const [hours, rest] = m.duration.split('h');
                        const h = parseInt(hours.trim());
                        const mins = rest.trim().split('m')[0];
                        return acc + h * 60 + (parseInt(mins) || 0);
                      } else {
                        return acc + parseInt(m.duration);
                      }
                    }, 0)} min
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
                    onClick={() => console.log('Navigate to meeting', meeting.id)}
                  />
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
