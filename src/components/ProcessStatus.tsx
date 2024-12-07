import React from 'react';
import { Loader2 } from 'lucide-react';
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

interface ProcessStatusProps {
  status: ProcessStatus;
}

export function ProcessStatus({ status }: ProcessStatusProps) {
  const message = statusMessages[status];
  const isProcessing = status !== 'completed' && status !== 'error' && status !== 'idle';

  return (
    <div className="flex items-center gap-2">
      {isProcessing && (
        <Loader2 className="w-4 h-4 animate-spin text-blue-600" />
      )}
      <span className="text-sm font-medium text-gray-700">{message}</span>
    </div>
  );
}