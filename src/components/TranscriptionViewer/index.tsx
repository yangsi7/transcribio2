// src/components/TranscriptionViewer/index.tsx
import React, { useState, useMemo } from 'react';
import { useTranscriptionStore } from '../../store/transcription';
import { TranscriptionHeader } from './TranscriptionHeader';
import { SpeakerEntry } from './SpeakerEntry';
import { concatenateTextBlocks } from '../../utils/text/processing';
import { logger } from '../../utils/logger/core';

export function TranscriptionViewer() {
  const { transcription, speakerMap, setSpeakerName } = useTranscriptionStore();
  const [showTimestamps, setShowTimestamps] = useState(true);
  const [editingSpeaker, setEditingSpeaker] = useState<string | null>(null);

  const processedBlocks = useMemo(() => {
    if (!transcription?.transcription.speakers) {
      return [];
    }

    logger.debug('Processing transcription blocks');
    return concatenateTextBlocks(transcription.transcription.speakers);
  }, [transcription]);

  if (!transcription) return null;

  const handleSpeakerEdit = (speaker: string, newName: string) => {
    if (newName.trim()) {
      setSpeakerName(speaker, newName.trim());
    }
    setEditingSpeaker(null);
  };

  return (
    <div className="bg-gray-800 rounded-lg shadow text-gray-200">
      <TranscriptionHeader
        showTimestamps={showTimestamps}
        onToggleTimestamps={setShowTimestamps}
      />
      <div className="p-4 space-y-4">
        {processedBlocks.map((block) => (
          <SpeakerEntry
            key={block.originalIndexes[0]}
            entry={block}
            speakerName={speakerMap[block.speaker] || block.speaker}
            showTimestamps={showTimestamps}
            isEditing={editingSpeaker === block.speaker}
            onEdit={() => setEditingSpeaker(block.speaker)}
            onSave={(name) => handleSpeakerEdit(block.speaker, name)}
          />
        ))}
      </div>
    </div>
  );
}