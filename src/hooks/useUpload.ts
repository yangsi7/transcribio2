import { useState, useCallback } from 'react';
import { generateUploadUrl, requestTranscription } from '../services/api';
import { uploadWithXHR } from '../services/upload/xhr';
import { validateFile } from '../services/upload/validation';
import { logger } from '../utils/logger';
import type { UploadState } from '../services/upload/types';

export function useUpload() {
  const [state, setState] = useState<UploadState>({
    progress: 0,
    status: 'idle',
    error: null
  });

  const upload = useCallback(async (file: File) => {
    setState({ progress: 0, status: 'preparing', error: null });

    try {
      logger.debug('Starting upload process', { fileName: file.name });

      // Validate file
      const validation = validateFile(file);
      if (!validation.isValid) {
        throw new Error(validation.error);
      }

      // Get upload URL
      setState(s => ({ ...s, status: 'preparing' }));
      const { upload_url, file_id } = await generateUploadUrl(file.name);

      // Upload file
      setState(s => ({ ...s, status: 'uploading' }));
      await uploadWithXHR(upload_url, file, {
        onProgress: (progress) => {
          setState(s => ({ ...s, progress: progress.percentage }));
        }
      });

      // Request transcription
      setState(s => ({ ...s, status: 'processing' }));
      await requestTranscription(file_id);

      setState({ progress: 100, status: 'completed', error: null });
      return file_id;
    } catch (error) {
      logger.error(
        'Upload failed',
        error instanceof Error ? error : new Error('Unknown error'),
        { fileName: file.name }
      );
      setState({
        progress: 0,
        status: 'error',
        error: error instanceof Error ? error : new Error('Upload failed')
      });
      throw error;
    }
  }, []);

  return {
    upload,
    progress: state.progress,
    status: state.status,
    error: state.error
  };
}