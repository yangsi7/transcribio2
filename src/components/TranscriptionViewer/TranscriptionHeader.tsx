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
    <div className="p-4 border-b">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold">Transcription</h2>
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={showTimestamps}
            onChange={(e) => onToggleTimestamps(e.target.checked)}
            className="rounded border-gray-300"
          />
          <span className="text-sm text-gray-600">Show timestamps</span>
        </label>
      </div>
    </div>
  );
}