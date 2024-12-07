import { logger } from '../../utils/logger';
import type { UploadOptions, UploadProgress } from './types';

export function uploadWithXHR(url: string, file: File, options: UploadOptions = {}): Promise<void> {
  const requestId = Math.random().toString(36).substring(7);
  
  logger.debug('Starting XHR upload', {
    requestId,
    fileName: file.name,
    fileSize: file.size,
    fileType: file.type
  });

  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();

    if (options.signal) {
      options.signal.addEventListener('abort', () => xhr.abort());
    }

    xhr.upload.addEventListener('progress', (event) => {
      if (event.lengthComputable) {
        const progress: UploadProgress = {
          loaded: event.loaded,
          total: event.total,
          percentage: Math.round((event.loaded / event.total) * 100)
        };
        
        logger.debug('Upload progress', {
          requestId,
          ...progress
        });
        
        options.onProgress?.(progress);
      }
    });

    xhr.addEventListener('load', () => {
      if (xhr.status >= 200 && xhr.status < 300) {
        logger.debug('Upload completed successfully', {
          requestId,
          status: xhr.status
        });
        options.onComplete?.();
        resolve();
      } else {
        const error = new Error(`Upload failed with status ${xhr.status}`);
        logger.error('Upload failed', error, {
          requestId,
          status: xhr.status,
          response: xhr.responseText
        });
        options.onError?.(error);
        reject(error);
      }
    });

    xhr.addEventListener('error', () => {
      const error = new Error('Network error during upload');
      logger.error('Upload network error', error, { requestId });
      options.onError?.(error);
      reject(error);
    });

    xhr.addEventListener('abort', () => {
      const error = new Error('Upload was aborted');
      logger.error('Upload aborted', error, { requestId });
      options.onError?.(error);
      reject(error);
    });

    xhr.open('PUT', url);
    xhr.setRequestHeader('Content-Type', 'application/octet-stream');
    xhr.send(file);
  });
}