// src/components/calendar/WeekHeader.tsx
import React from 'react';
import { format, eachDayOfInterval } from 'date-fns';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface WeekHeaderProps {
  week: {
    start: Date;
    end: Date;
  };
}

export function WeekHeader({ week }: WeekHeaderProps) {
  const days = eachDayOfInterval({ start: week.start, end: week.end });

  return (
    <div className="bg-gray-800 rounded-xl p-4">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-white">
          {format(week.start, 'MMMM d')} - {format(week.end, 'MMMM d, yyyy')}
        </h3>
        <div className="flex items-center gap-2">
          <button className="p-2 hover:bg-gray-700 rounded-lg transition-colors">
            <ChevronLeft className="w-5 h-5 text-gray-400" />
          </button>
          <button className="p-2 hover:bg-gray-700 rounded-lg transition-colors">
            <ChevronRight className="w-5 h-5 text-gray-400" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-7 gap-4">
        {days.map((day: Date) => (
          <div key={day.toString()} className="text-center">
            <div className="text-sm font-medium text-gray-400 mb-1">
              {format(day, 'EEE')}
            </div>
            <div className={`text-2xl font-bold rounded-full w-10 h-10 flex items-center justify-center mx-auto ${
              format(day, 'yyyy-MM-dd') === format(new Date(), 'yyyy-MM-dd')
                ? 'bg-blue-500 text-white'
                : 'text-white'
            }`}>
              {format(day, 'd')}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}