import React from 'react';
import { Download } from 'lucide-react';
import { toast } from 'sonner';
import { exportTranscription } from '../../utils/export';
import type { ExportFormat } from '../../types';

interface ExportButtonProps {
  onExport: (format: ExportFormat) => Promise<void>;
  formats: readonly ExportFormat[];
}

export function ExportButton({ onExport, formats }: ExportButtonProps) {
  return (
    <div className="relative group">
      <button className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700">
        <Download className="w-4 h-4" />
        Export
      </button>
      <div className="absolute right-0 z-10 hidden w-48 mt-2 origin-top-right bg-white rounded-md shadow-lg group-hover:block">
        <div className="py-1">
          {formats.map((format) => (
            <button
              key={format}
              onClick={() => onExport(format)}
              className="block w-full px-4 py-2 text-sm text-left text-gray-700 hover:bg-gray-100"
            >
              Export as {format.toUpperCase()}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}