import { API_CONFIG } from '../../config/api';
import { apiRequest } from '../api';
import { logger } from '../../utils/logger';
import type { TranscriptionResponse } from '../../types';

export async function requestTranscription(
  fileId: string, 
  signal?: AbortSignal
): Promise<TranscriptionResponse> {
  const requestId = Math.random().toString(36).substring(7);
  
  logger.debug('Initiating transcription request', { 
    requestId,
    fileId 
  });

  try {
    const { data } = await apiRequest<TranscriptionResponse>(
      API_CONFIG.endpoints.processFile,
      {
        method: 'POST',
        headers: API_CONFIG.headers.json,
        body: JSON.stringify({ file_id: fileId }),
        credentials: 'omit'
      },
      signal
    );

    logger.info('Transcription request successful', {
      requestId,
      fileId,
      speakerCount: data.transcription.speakers.length,
      textLength: data.transcription.text.length
    });

    return data;
  } catch (error) {
    logger.error(
      'Transcription request failed',
      error instanceof Error ? error : new Error('Unknown error'),
      { requestId, fileId }
    );
    throw error;
  }
}