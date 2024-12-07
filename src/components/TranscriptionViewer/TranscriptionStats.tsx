import React from 'react';
import { Clock, Users, MessageSquare } from 'lucide-react';
import { formatDuration } from '../../utils/format';
import type { ProcessedTranscription } from '../../services/transcription/processing';

interface TranscriptionStatsProps {
  stats: ProcessedTranscription;
}

export function TranscriptionStats({ stats }: TranscriptionStatsProps) {
  const totalWords = Object.values(stats.speakerStats).reduce(
    (sum, speaker) => sum + speaker.wordCount,
    0
  );

  const speakerCount = Object.keys(stats.speakerStats).length;

  return (
    <div className="grid grid-cols-3 gap-4 mb-6">
      <div className="flex items-center gap-2 text-gray-600">
        <Clock className="w-4 h-4" />
        <span className="text-sm">Duration: {formatDuration(stats.duration)}</span>
      </div>
      
      <div className="flex items-center gap-2 text-gray-600">
        <Users className="w-4 h-4" />
        <span className="text-sm">Speakers: {speakerCount}</span>
      </div>
      
      <div className="flex items-center gap-2 text-gray-600">
        <MessageSquare className="w-4 h-4" />
        <span className="text-sm">Words: {totalWords}</span>
      </div>
    </div>
  );
}