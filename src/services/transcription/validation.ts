import { logger } from '../../utils/logger';
import type { TranscriptionResponse } from '../../types';

export interface ValidationResult {
  isValid: boolean;
  error?: string;
}

export function validateTranscriptionResponse(
  response: TranscriptionResponse
): ValidationResult {
  logger.debug('Validating transcription response', {
    speakerCount: response.transcription.speakers.length,
    hasText: !!response.transcription.text
  });

  if (!response.transcription) {
    return {
      isValid: false,
      error: 'Invalid transcription response: missing transcription data'
    };
  }

  if (!Array.isArray(response.transcription.speakers)) {
    return {
      isValid: false,
      error: 'Invalid transcription response: missing speakers data'
    };
  }

  if (!response.transcription.text) {
    return {
      isValid: false,
      error: 'Invalid transcription response: missing text content'
    };
  }

  // Validate individual speaker entries
  for (const speaker of response.transcription.speakers) {
    if (!speaker.speaker || !speaker.text || !Array.isArray(speaker.timestamp)) {
      return {
        isValid: false,
        error: 'Invalid speaker entry in transcription'
      };
    }
  }

  logger.debug('Transcription response validation successful');
  return { isValid: true };
}