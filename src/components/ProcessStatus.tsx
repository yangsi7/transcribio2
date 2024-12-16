// src/components/ProcessStatus.tsx
import React from 'react';
import { Loader2, CheckCircle, AlertCircle } from 'lucide-react';
import type { ProcessStatus } from '../types';

const statusMessages: Record<ProcessStatus, string> = {
  idle: 'Ready to start',
  validating: 'Validating file...',
  'generating-url': 'Preparing upload...',
  uploading: 'Uploading file...',
  'upload-complete': 'Upload complete',
  'requesting-transcription': 'Initiating transcription...',
  processing: 'Processing transcription...',
  completed: 'Transcription complete',
  error: 'An error occurred'
};

export function ProcessStatus({ status }: { status: ProcessStatus }) {
  const message = statusMessages[status];
  const isProcessing = !['completed', 'error', 'idle'].includes(status);

  return (
    <div className="flex items-center gap-2 text-gray-200">
      {isProcessing && (
        <Loader2 className="w-4 h-4 animate-spin text-blue-400" />
      )}
      {status === 'completed' && (
        <CheckCircle className="w-4 h-4 text-green-400" />
      )}
      {status === 'error' && (
        <AlertCircle className="w-4 h-4 text-red-400" />
      )}
      <span className="text-sm font-medium">
        {message}
      </span>
    </div>
  );
}