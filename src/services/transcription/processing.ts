import { logger } from '../../utils/logger';
import type { TranscriptionResponse, Speaker } from '../../types';

export interface ProcessedTranscription {
  speakers: Speaker[];
  text: string;
  duration: number;
  speakerStats: {
    [speaker: string]: {
      wordCount: number;
      duration: number;
      segments: number;
    };
  };
}

export function processTranscriptionResponse(
  response: TranscriptionResponse
): ProcessedTranscription {
  logger.debug('Processing transcription response');

  const speakerStats: ProcessedTranscription['speakerStats'] = {};
  let totalDuration = 0;

  // Process speaker statistics
  response.transcription.speakers.forEach(speaker => {
    const duration = speaker.timestamp[1] - speaker.timestamp[0];
    const wordCount = speaker.text.split(/\s+/).length;

    if (!speakerStats[speaker.speaker]) {
      speakerStats[speaker.speaker] = {
        wordCount: 0,
        duration: 0,
        segments: 0
      };
    }

    speakerStats[speaker.speaker].wordCount += wordCount;
    speakerStats[speaker.speaker].duration += duration;
    speakerStats[speaker.speaker].segments += 1;

    totalDuration = Math.max(totalDuration, speaker.timestamp[1]);
  });

  const processed: ProcessedTranscription = {
    speakers: response.transcription.speakers,
    text: response.transcription.text,
    duration: totalDuration,
    speakerStats
  };

  logger.info('Transcription processing complete', {
    duration: totalDuration,
    speakerCount: Object.keys(speakerStats).length,
    totalSegments: response.transcription.speakers.length
  });

  return processed;
}