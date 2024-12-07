import React from 'react';
import { User, Edit2, Clock } from 'lucide-react';
import { formatTimestamp } from '../../utils/format';
import type { ProcessedBlock } from '../../utils/text/processing';

interface SpeakerEntryProps {
  entry: ProcessedBlock;
  speakerName: string;
  showTimestamps: boolean;
  isEditing: boolean;
  onEdit: () => void;
  onSave: (name: string) => void;
}

export function SpeakerEntry({
  entry,
  speakerName,
  showTimestamps,
  isEditing,
  onEdit,
  onSave,
}: SpeakerEntryProps) {
  return (
    <div className="flex gap-4">
      <div className="flex-shrink-0 w-32">
        <div className="flex items-center gap-2">
          <User className="w-4 h-4 text-gray-400" />
          {isEditing ? (
            <input
              type="text"
              defaultValue={speakerName}
              className="w-full px-2 py-1 text-sm border rounded"
              onBlur={(e) => onSave(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  onSave(e.currentTarget.value);
                }
              }}
              autoFocus
            />
          ) : (
            <button
              onClick={onEdit}
              className="flex items-center gap-1 text-sm text-gray-700 hover:text-blue-600"
            >
              <span>{speakerName}</span>
              <Edit2 className="w-3 h-3" />
            </button>
          )}
        </div>
        {showTimestamps && (
          <div className="flex items-center gap-1 mt-1 text-xs text-gray-400">
            <Clock className="w-3 h-3" />
            <span>
              {formatTimestamp(entry.timestamp[0])} - {formatTimestamp(entry.timestamp[1])}
            </span>
          </div>
        )}
      </div>
      <p className="flex-1 text-gray-800">{entry.text}</p>
    </div>
  );
}