import { API_CONFIG } from '../../config/api';
import { handleResponse } from './utils';
import { logger } from '../../utils/logger';
import type { TranscriptionResponse } from '../../types';

export async function requestTranscription(fileId: string, signal?: AbortSignal): Promise<TranscriptionResponse> {
  logger.debug('Requesting transcription', { fileId });

  const response = await fetch(
    API_CONFIG.endpoints.processFile,
    {
      method: 'POST',
      headers: {
        ...API_CONFIG.headers.base,
        ...API_CONFIG.headers.json,
      },
      body: JSON.stringify({ file_id: fileId }),
      signal,
      credentials: 'omit'
    }
  );

  const data = await handleResponse<TranscriptionResponse>(response);
  
  if (!data.transcription?.speakers) {
    logger.error('Invalid transcription response', { data });
    throw new Error('Invalid transcription response');
  }
  
  logger.debug('Transcription received', {
    fileId,
    speakerCount: data.transcription.speakers.length,
  });
  
  return data;
}