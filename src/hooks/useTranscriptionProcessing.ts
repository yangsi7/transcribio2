import { useState, useCallback } from 'react';
import { getTranscriptionResult } from '../services/api/transcription';
import { logger } from '../utils/logger';
import { API_CONFIG } from '../config/api';
import type { TranscriptionResponse, ProcessError } from '../types';

interface ProcessingState {
  isProcessing: boolean;
  error: ProcessError | null;
  data: TranscriptionResponse | null;
  progress: number;
}

export function useTranscriptionProcessing() {
  const [state, setState] = useState<ProcessingState>({
    isProcessing: false,
    error: null,
    data: null,
    progress: 0,
  });

  const processTranscription = useCallback(async (fileId: string) => {
    setState(prev => ({ ...prev, isProcessing: true, error: null, progress: 0 }));
    logger.debug('Starting transcription processing', { fileId });

    let attempts = 0;
    const maxAttempts = API_CONFIG.polling.maxAttempts;

    while (attempts < maxAttempts) {
      try {
        const data = await getTranscriptionResult(fileId);

        if (data.transcription.speakers.length > 0) {
          logger.info('Transcription completed', {
            fileId,
            speakerCount: data.transcription.speakers.length,
          });

          setState({
            isProcessing: false,
            error: null,
            data,
            progress: 100,
          });

          return data;
        }

        // Transcription in progress
        const progress = Math.min(90, ((attempts + 1) / maxAttempts) * 100);
        setState(prev => ({ ...prev, progress }));

        logger.debug('Transcription in progress', {
          fileId,
          attempt: attempts + 1,
          maxAttempts,
          progress,
        });

      } catch (error) {
        if (error instanceof APIError && error.status === 404) {
          // Transcription not ready yet, continue polling
          logger.debug('Transcription not ready yet (404)', { fileId, attempts });

          // Update progress
          const progress = Math.min(90, ((attempts + 1) / maxAttempts) * 100);
          setState(prev => ({ ...prev, progress }));

        } else {
          // Other errors
          const processError: ProcessError = {
            code: 'TRANSCRIPTION_PROCESSING_ERROR',
            message: error instanceof Error ? error.message : 'Processing failed',
          };

          logger.error(
            'Transcription processing failed',
            error instanceof Error ? error : new Error(processError.message),
            { fileId, attempts }
          );

          setState({
            isProcessing: false,
            error: processError,
            data: null,
            progress: 0,
          });

          throw processError;
        }
      }

      attempts++;
      await new Promise(resolve =>
        setTimeout(resolve, API_CONFIG.polling.interval)
      );
    }

    // If maximum attempts reached
    const timeoutError: ProcessError = {
      code: 'TRANSCRIPTION_TIMEOUT',
      message: 'Transcription processing timed out',
    };

    logger.error(
      'Transcription processing timed out',
      new Error(timeoutError.message),
      { fileId, attempts }
    );

    setState({
      isProcessing: false,
      error: timeoutError,
      data: null,
      progress: 0,
    });

    throw timeoutError;
  }, []);

  return {
    ...state,
    processTranscription,
  };
}