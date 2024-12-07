import React from 'react';
import { Toaster } from 'sonner';
import { FileUpload } from './components/FileUpload';
import { TranscriptionViewer } from './components/TranscriptionViewer';
import { TranscriptionControls } from './components/TranscriptionControls';
import { ProcessStatus } from './components/ProcessStatus';
import { DebugPanel } from './components/DebugPanel';
import { useTranscriptionStore } from './store/transcription';

function App() {
  const { status, error } = useTranscriptionStore();

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto py-12 px-4">
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Transcribio</h1>
          <p className="mt-2 text-gray-600">
            Upload your audio files and get accurate transcriptions with speaker detection
          </p>
        </header>

        <main className="space-y-8">
          <FileUpload />

          {status !== 'idle' && status !== 'completed' && (
            <div className="bg-white p-4 rounded-lg shadow">
              <ProcessStatus status={status} />
              {error && (
                <div className="mt-2 text-sm text-red-600">
                  {error.message}
                </div>
              )}
            </div>
          )}

          {status === 'completed' && (
            <>
              <TranscriptionControls />
              <TranscriptionViewer />
            </>
          )}
        </main>
      </div>
      <Toaster position="top-right" />
      <DebugPanel />
    </div>
  );
}

export default App;