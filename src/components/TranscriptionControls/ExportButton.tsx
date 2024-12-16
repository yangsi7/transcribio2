// src/components/TranscriptionControls/ExportButton.tsx
import React from 'react';
import { Download } from 'lucide-react';
import type { ExportFormat } from '../../types';

interface ExportButtonProps {
  onExport: (format: ExportFormat) => Promise<void>;
  formats: readonly ExportFormat[];
}

export function ExportButton({ onExport, formats }: ExportButtonProps) {
  return (
    <div className="relative group">
      <button className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-200 bg-gray-700 rounded-md hover:bg-gray-600">
        <Download className="w-4 h-4" />
        Export
      </button>
      <div className="absolute right-0 z-10 hidden w-48 mt-2 origin-top-right bg-gray-800 rounded-md shadow-lg border border-gray-700 group-hover:block">
        <div className="py-1">
          {formats.map((format) => (
            <button
              key={format}
              onClick={() => onExport(format)}
              className="block w-full px-4 py-2 text-sm text-left text-gray-200 hover:bg-gray-700"
            >
              Export as {format.toUpperCase()}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}