// src/components/MeetingCard.tsx
import React from 'react';
import { Calendar, Clock, Users, Tag, BarChart, Link as LinkIcon } from 'lucide-react';

interface MeetingProps {
  title: string;
  date: string;
  time?: string;
  duration: string;
  participants: string[];
  summary: string;
  tags?: string[];
  relationships?: {
    source: string;
    target: string;
    description: string;
    keywords: string[];
    strength: number;
  }[];
  isWeeklySummary?: boolean;
  onClick?: () => void;
}

export function MeetingCard({
  title,
  date,
  time,
  duration,
  participants,
  summary,
  tags = [],
  relationships = [],
  isWeeklySummary = false,
  onClick
}: MeetingProps) {
  return (
    <div 
      className={`p-6 hover:bg-gray-700/50 transition-colors cursor-pointer ${
        isWeeklySummary ? 'bg-purple-900/20' : 'bg-gray-800/30'
      }`}
      onClick={onClick}
    >
      <div className="flex justify-between items-start mb-4">
        <div className="flex items-center gap-3">
          {isWeeklySummary ? (
            <BarChart className="w-5 h-5 text-purple-400" />
          ) : (
            <Calendar className="w-5 h-5 text-blue-400" />
          )}
          <div>
            <h4 className="text-lg font-semibold text-gray-200">{title}</h4>
            {time && (
              <div className="flex items-center gap-2 text-sm text-gray-400 mt-1">
                <Clock className="w-4 h-4" />
                <span>{time}</span>
                <span className="mx-1">•</span>
                <span>{duration}</span>
              </div>
            )}
          </div>
        </div>
      </div>

      {summary && summary.trim().length > 0 && (
        <p className="text-gray-300 mb-4 whitespace-pre-line">{summary}</p>
      )}

      {relationships.length > 0 && (
        <div className="mb-4">
          <h5 className="text-sm font-semibold text-gray-300 flex items-center gap-1 mb-2">
            <LinkIcon className="w-4 h-4" /> Relationships
          </h5>
          <ul className="text-sm text-gray-400 list-disc list-inside space-y-1">
            {relationships.map((r, idx) => (
              <li key={idx}>
                <span className="text-gray-200 font-medium">{r.source}</span> → <span className="text-gray-200 font-medium">{r.target}</span>: {r.description} (strength: {r.strength})
              </li>
            ))}
          </ul>
        </div>
      )}

      {tags.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map(tag => (
            <span
              key={tag}
              className="px-2 py-1 rounded-full text-sm font-medium flex items-center bg-gray-700 text-gray-300"
            >
              <Tag className="w-3 h-3 mr-1" />
              {tag}
            </span>
          ))}
        </div>
      )}

      <div className="flex justify-between items-center">
        <div className="flex -space-x-2">
          {participants.map((participant, index) => (
            <div
              key={index}
              className="w-8 h-8 rounded-full bg-gray-700 border-2 border-gray-800 flex items-center justify-center"
              title={participant}
            >
              <span className="text-xs font-medium text-gray-300">
                {participant.split(' ').map(n => n[0]).join('')}
              </span>
            </div>
          ))}
        </div>
        <div className="flex items-center text-sm text-gray-400">
          <Users className="w-4 h-4 mr-1" />
          {participants.length} participants
        </div>
      </div>
    </div>
  );
}