// src/components/SummaryViewer.tsx
import React from 'react';

interface SummaryViewerProps {
  summary: string;
}

export function SummaryViewer({ summary }: SummaryViewerProps) {
  const lines = summary.split('\n').map(l => l.trim()).filter(l => l.length > 0);

  const recognizedSections = ["Action Items:", "Decisions:", "Timeline:", "Summary:", "Key Points:"];

  return (
    <div className="bg-gray-800 text-gray-200 rounded p-4 shadow space-y-2">
      <h2 className="text-lg font-semibold mb-2">Meeting Summary</h2>
      {lines.map((line, i) => {
        const isSectionTitle = recognizedSections.some(sec => line.toLowerCase().startsWith(sec.toLowerCase()));
        return (
          <div key={i}>
            {isSectionTitle ? (
              <h3 className="font-bold text-blue-400 mt-2">{line}</h3>
            ) : (
              <p className="text-sm text-gray-300 leading-relaxed">{line}</p>
            )}
          </div>
        );
      })}
      {lines.length === 0 && (
        <p className="text-sm text-gray-400 italic">No summary returned or summary is empty.</p>
      )}
    </div>
  );
}