import React from 'react';
import { Download, Copy, Loader2 } from 'lucide-react';
import { useTranscriptionStore } from '../store/transcription';
import { exportTranscription } from '../utils/export';
import { toast } from 'sonner';

const EXPORT_FORMATS = ['txt', 'md', 'pdf', 'docx', 'rtf'] as const;

export function TranscriptionControls() {
  const { transcription, status, speakerMap } = useTranscriptionStore();

  const handleCopy = async () => {
    if (!transcription) return;
    
    try {
      const text = transcription.transcription.speakers
        .map(s => `${speakerMap[s.speaker] || s.speaker}: ${s.text}`)
        .join('\n\n');
      
      await navigator.clipboard.writeText(text);
      toast.success('Copied to clipboard');
    } catch (error) {
      toast.error('Failed to copy to clipboard');
    }
  };

  const handleExport = async (format: string) => {
    if (!transcription) return;

    try {
      await exportTranscription(
        format,
        {
          speakers: transcription.transcription.speakers,
          speakerMap,
          text: transcription.transcription.text,
        },
        `transcription-${Date.now()}`
      );
      toast.success(`Exported as ${format.toUpperCase()}`);
    } catch (error) {
      toast.error(`Failed to export as ${format.toUpperCase()}`);
    }
  };

  if (status !== 'completed') return null;

  return (
    <div className="flex gap-4">
      <button
        onClick={handleCopy}
        className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
      >
        <Copy className="w-4 h-4" />
        Copy
      </button>
      <div className="relative group">
        <button className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700">
          <Download className="w-4 h-4" />
          Export
        </button>
        <div className="absolute right-0 z-10 hidden w-48 mt-2 origin-top-right bg-white rounded-md shadow-lg group-hover:block">
          <div className="py-1">
            {EXPORT_FORMATS.map((format) => (
              <button
                key={format}
                onClick={() => handleExport(format)}
                className="block w-full px-4 py-2 text-sm text-left text-gray-700 hover:bg-gray-100"
              >
                Export as {format.toUpperCase()}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}