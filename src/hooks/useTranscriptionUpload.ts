import { useState, useCallback, useRef, useEffect } from 'react';
import { useTranscriptionStore } from '../store/transcription';
import { generateUploadUrl, uploadFile, requestTranscription } from '../services/api';
import { logger } from '../utils/logger';
import type { ProcessError } from '../types';

export function useTranscriptionUpload() {
  const [uploadProgress, setUploadProgress] = useState(0);
  const { setStatus, setError, setFileId, setTranscription } = useTranscriptionStore();
  const abortControllerRef = useRef<AbortController | null>(null);

  useEffect(() => {
    return () => {
      logger.debug('Cleaning up upload resources');
      abortControllerRef.current?.abort();
    };
  }, []);

  const cancel = useCallback(async () => {
    logger.info('Cancelling upload process');
    abortControllerRef.current?.abort();
    setStatus('idle');
    setError(null);
    setUploadProgress(0);
  }, [setStatus, setError]);

  const upload = useCallback(async (file: File) => {
    logger.info('Starting upload process', { 
      fileName: file.name,
      fileSize: file.size,
      fileType: file.type
    });

    const abortController = new AbortController();
    abortControllerRef.current = abortController;
    const signal = abortController.signal;

    try {
      setStatus('generating-url');
      setError(null);
      setUploadProgress(0);

      const { upload_url, file_id } = await generateUploadUrl(file.name, signal);
      logger.debug('Generated upload URL', { file_id });
      setFileId(file_id);

      setStatus('uploading');
      await uploadFile(upload_url, file, {
        signal,
        onProgress: (progress) => {
          setUploadProgress(progress.percentage);
          logger.debug('Upload progress', { progress });
        }
      });

      setStatus('requesting-transcription');
      const transcriptionData = await requestTranscription(file_id, signal);
      setTranscription(transcriptionData);
      setStatus('completed');
      
      logger.info('Upload and transcription process completed', { file_id });
    } catch (error) {
      if (signal.aborted) {
        logger.info('Operation cancelled by user');
        setStatus('idle');
        return;
      }

      const processError: ProcessError = {
        code: 'UPLOAD_ERROR',
        message: error instanceof Error ? error.message : 'Upload failed',
        details: { fileName: file.name }
      };
      
      logger.error('Upload process failed', 
        error instanceof Error ? error : new Error(processError.message),
        { fileName: file.name }
      );
      
      setStatus('error');
      setError(processError);
    } finally {
      setUploadProgress(0);
      abortControllerRef.current = null;
    }
  }, [setStatus, setError, setFileId, setTranscription]);

  return { 
    upload, 
    uploadProgress,
    cancel 
  };
}