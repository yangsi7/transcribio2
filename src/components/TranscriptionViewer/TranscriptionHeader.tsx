// src/components/TranscriptionViewer/TranscriptionHeader.tsx
import React from 'react';

interface TranscriptionHeaderProps {
  showTimestamps: boolean;
  onToggleTimestamps: (show: boolean) => void;
}

export function TranscriptionHeader({ 
  showTimestamps, 
  onToggleTimestamps 
}: TranscriptionHeaderProps) {
  return (
    <div className="p-4 border-b border-gray-700">
      <div className="flex items-center justify-between text-gray-200">
        <h2 className="text-lg font-semibold">Transcription</h2>
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={showTimestamps}
            onChange={(e) => onToggleTimestamps(e.target.checked)}
            className="rounded border-gray-600 bg-gray-800 text-blue-400 focus:ring-1 focus:ring-blue-400"
          />
          <span className="text-sm text-gray-300">Show timestamps</span>
        </label>
      </div>
    </div>
  );
}