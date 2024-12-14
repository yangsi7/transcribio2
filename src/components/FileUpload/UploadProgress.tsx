// src/components/FileUpload/UploadProgress.tsx
import React from 'react';
import { X, Loader2 } from 'lucide-react';
import type { ProcessStatus } from '../../types';

interface UploadProgressProps {
  progress: number;
  status: ProcessStatus;
  onCancel: () => void;
}

export function UploadProgress({ 
  progress, 
  status,
  onCancel 
}: UploadProgressProps) {
  const showProgress = status === 'uploading';
  const progressValue = Math.min(100, Math.max(0, progress));

  return (
    <div className="bg-gray-800 p-4 rounded-lg shadow-sm border border-gray-700 text-gray-200">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <Loader2 className="w-4 h-4 animate-spin text-blue-400" />
          {showProgress && (
            <span className="text-sm font-medium">
              Uploading... {Math.round(progressValue)}%
            </span>
          )}
          {!showProgress && (
            <span className="text-sm font-medium">
              Processing...
            </span>
          )}
        </div>
        <button
          onClick={onCancel}
          className="p-1 hover:bg-gray-600 rounded-full transition-colors"
          aria-label="Cancel upload"
        >
          <X className="w-4 h-4 text-gray-300" />
        </button>
      </div>
      {showProgress && (
        <div className="relative w-full h-2 bg-gray-700 rounded-full overflow-hidden">
          <div
            className="absolute left-0 top-0 h-full bg-blue-500 transition-all duration-300 ease-out"
            style={{ width: `${progressValue}%` }}
          />
        </div>
      )}
    </div>
  );
}