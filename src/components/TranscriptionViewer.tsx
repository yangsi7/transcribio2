import React, { useState } from 'react';
import { Clock, User, Edit2 } from 'lucide-react';
import { useTranscriptionStore } from '../store/transcription';
import { formatTimestamp } from '../utils/format';

export function TranscriptionViewer() {
  const { transcription, speakerMap, setSpeakerName } = useTranscriptionStore();
  const [showTimestamps, setShowTimestamps] = useState(true);
  const [editingSpeaker, setEditingSpeaker] = useState<string | null>(null);

  if (!transcription) return null;

  const handleSpeakerEdit = (speaker: string, newName: string) => {
    setSpeakerName(speaker, newName);
    setEditingSpeaker(null);
  };

  return (
    <div className="bg-white rounded-lg shadow">
      <div className="p-4 border-b">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold">Transcription</h2>
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={showTimestamps}
              onChange={(e) => setShowTimestamps(e.target.checked)}
              className="rounded border-gray-300"
            />
            <span className="text-sm text-gray-600">Show timestamps</span>
          </label>
        </div>
      </div>
      <div className="p-4 space-y-4">
        {transcription.transcription.speakers.map((entry, index) => (
          <div key={index} className="flex gap-4">
            <div className="flex-shrink-0 w-32">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4 text-gray-400" />
                {editingSpeaker === entry.speaker ? (
                  <input
                    type="text"
                    defaultValue={speakerMap[entry.speaker] || entry.speaker}
                    className="w-full px-2 py-1 text-sm border rounded"
                    onBlur={(e) => handleSpeakerEdit(entry.speaker, e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') {
                        handleSpeakerEdit(entry.speaker, e.currentTarget.value);
                      }
                    }}
                    autoFocus
                  />
                ) : (
                  <button
                    onClick={() => setEditingSpeaker(entry.speaker)}
                    className="flex items-center gap-1 text-sm text-gray-700 hover:text-blue-600"
                  >
                    <span>{speakerMap[entry.speaker] || entry.speaker}</span>
                    <Edit2 className="w-3 h-3" />
                  </button>
                )}
              </div>
              {showTimestamps && (
                <div className="flex items-center gap-1 mt-1 text-xs text-gray-400">
                  <Clock className="w-3 h-3" />
                  <span>
                    {formatTimestamp(entry.timestamp[0])}
                  </span>
                </div>
              )}
            </div>
            <p className="flex-1 text-gray-800">{entry.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}