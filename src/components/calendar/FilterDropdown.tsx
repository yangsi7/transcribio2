// src/components/calendar/FilterDropdown.tsx
import React, { useState } from 'react';
import { Filter, Tag, Clock, Users } from 'lucide-react';

interface FilterDropdownProps {
  onToggle: () => void;
  isOpen: boolean;
}

const ALL_TAGS = ["Planning", "Q1", "Budget", "Design", "Product", "UI", "Team", "Sync", "Weekly Summary"];

export function FilterDropdown({ onToggle, isOpen }: FilterDropdownProps) {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [duration, setDuration] = useState<string>('');
  const [participants, setParticipants] = useState<string[]>([]);

  return (
    <div className="relative">
      <button
        onClick={onToggle}
        className="flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors"
      >
        <Filter size={20} />
        <span>Filters</span>
      </button>

      {isOpen && (
        <div className="absolute right-0 top-full mt-2 w-80 bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-700">
          <div className="space-y-6">
            <div>
              <div className="flex items-center gap-2 text-white mb-3">
                <Tag size={16} />
                <h4 className="font-medium">Tags</h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {ALL_TAGS.map(tag => (
                  <button
                    key={tag}
                    onClick={() => setSelectedTags(prev => 
                      prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag]
                    )}
                    className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                      selectedTags.includes(tag)
                        ? 'bg-blue-500 text-white'
                        : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                    }`}
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <div className="flex items-center gap-2 text-white mb-3">
                <Clock size={16} />
                <h4 className="font-medium">Duration</h4>
              </div>
              <select
                value={duration}
                onChange={(e) => setDuration(e.target.value)}
                className="w-full bg-gray-700 text-white rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              >
                <option value="">Any duration</option>
                <option value="short">Under 30 minutes</option>
                <option value="medium">30-60 minutes</option>
                <option value="long">Over 60 minutes</option>
              </select>
            </div>

            <div>
              <div className="flex items-center gap-2 text-white mb-3">
                <Users size={16} />
                <h4 className="font-medium">Participants</h4>
              </div>
              <input
                type="text"
                placeholder="Search participants..."
                className="w-full bg-gray-700 text-white rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>

            <button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg transition-colors">
              Apply Filters
            </button>
          </div>
        </div>
      )}
    </div>
  );
}