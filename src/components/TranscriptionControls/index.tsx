import React from 'react';
import { toast } from 'sonner';
import { useTranscriptionStore } from '../../store/transcription';
import { exportTranscription } from '../../utils/export';
import { concatenateTextBlocks } from '../../utils/text/processing';
import { CopyButton } from './CopyButton';
import { ExportButton } from './ExportButton';
import type { ExportFormat } from '../../types';

const EXPORT_FORMATS = ['txt', 'md', 'pdf', 'docx', 'rtf'] as const;

export function TranscriptionControls() {
  const { transcription, status, speakerMap } = useTranscriptionStore();

  const handleCopy = async () => {
    if (!transcription) return;
    
    try {
      const processedBlocks = concatenateTextBlocks(transcription.transcription.speakers);
      const text = processedBlocks
        .map(block => `${speakerMap[block.speaker] || block.speaker}: ${block.text}`)
        .join('\n\n');
      
      await navigator.clipboard.writeText(text);
      toast.success('Copied to clipboard');
    } catch (error) {
      toast.error('Failed to copy to clipboard');
    }
  };

  const handleExport = async (format: ExportFormat) => {
    if (!transcription) return;

    try {
      const processedBlocks = concatenateTextBlocks(transcription.transcription.speakers);
      await exportTranscription(
        format,
        {
          speakers: processedBlocks,
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
      <CopyButton onCopy={handleCopy} />
      <ExportButton onExport={handleExport} formats={EXPORT_FORMATS} />
    </div>
  );
}