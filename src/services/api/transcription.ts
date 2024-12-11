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
    logger.error('Invalid transcription response', new Error('Invalid transcription response'), {
      responseData: data
    });
    throw new Error('Invalid transcription response');
  }
  
  logger.debug('Transcription received', {
    fileId,
    speakerCount: data.transcription.speakers.length,
  });
  
  return data;
}

export async function getTranscriptionResult(fileId: string, signal?: AbortSignal): Promise<TranscriptionResponse> {
  logger.debug('Getting transcription result', { fileId });
  const response = await fetch(
    API_CONFIG.endpoints.getTranscriptionResult(fileId),
    {
      method: 'GET',
      headers: API_CONFIG.headers.base,
      signal,
      credentials: 'omit',
    }
  );
  const data = await handleResponse<TranscriptionResponse>(response);
  logger.debug('Transcription result received', {
    fileId,
    speakerCount: data.transcription.speakers.length
  });
  return data;
}
