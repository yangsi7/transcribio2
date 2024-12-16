// src/pages/UploadPage.tsx
import React from 'react';
import { Toaster } from 'sonner';
import { FileUpload } from '../components/FileUpload';
import { ProcessStatus } from '../components/ProcessStatus';
import { TranscriptionControls } from '../components/TranscriptionControls';
import { TranscriptionViewer } from '../components/TranscriptionViewer';
import { DebugPanel } from '../components/DebugPanel';
import { useTranscriptionStore } from '../store/transcription';

export function UploadPage() {
  const { status, error } = useTranscriptionStore();

  return (
    <div className="max-w-4xl mx-auto">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-white">Upload your Audio</h1>
        <p className="mt-2 text-gray-400">
          Easily upload audio files and transcribe them.
        </p>
      </header>
      <main className="space-y-8">
        <div className="bg-gray-800 p-4 rounded-lg shadow text-gray-200">
          <FileUpload />
        </div>

        {(status !== 'idle' && status !== 'completed') && (
          <div className="bg-gray-800 p-4 rounded-lg shadow text-gray-200">
            <ProcessStatus status={status} />
            {error && (
              <div className="mt-2 text-sm text-red-400">
                {error.message}
              </div>
            )}
          </div>
        )}

        {status === 'completed' && (
          <>
            <div className="bg-gray-800 p-4 rounded-lg shadow text-gray-200">
              <TranscriptionControls />
            </div>
            <div className="bg-gray-800 p-4 rounded-lg shadow text-gray-200">
              <TranscriptionViewer />
            </div>
          </>
        )}
      </main>
      <Toaster position="top-right" />
      <DebugPanel />
    </div>
  );
}
