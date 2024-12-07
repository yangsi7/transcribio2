import { logger } from '../../utils/logger';
import { APIError } from '../api/errors';
import type { UploadOptions, UploadProgress } from './types';

export function uploadToUrl(
  url: string,
  file: File,
  options: UploadOptions = {}
): Promise<void> {
  const requestId = Math.random().toString(36).substring(7);
  
  logger.debug('Starting file upload', {
    requestId,
    fileName: file.name,
    fileSize: file.size,
    fileType: file.type,
    uploadUrlLength: url.length
  });

  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.withCredentials = false;
    xhr.timeout = 300000; // 5 minutes for large files

    if (options.signal) {
      options.signal.addEventListener('abort', () => xhr.abort());
    }

    xhr.upload.addEventListener('loadstart', () => {
      logger.debug('Upload started', { requestId });
      options.onStart?.();
    });

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
        logger.info('Upload completed successfully', {
          requestId,
          status: xhr.status,
          responseLength: xhr.responseText.length
        });
        options.onComplete?.();
        resolve();
      } else {
        const error = new APIError({
          message: `Upload failed with status ${xhr.status}`,
          status: xhr.status,
          code: `UPLOAD_ERROR_${xhr.status}`,
          details: {
            requestId,
            status: xhr.status,
            response: xhr.responseText
          }
        });
        logger.error('Upload failed', error, { requestId });
        options.onError?.(error);
        reject(error);
      }
    });

    xhr.addEventListener('error', () => {
      const error = new APIError({
        message: 'Network error during upload',
        code: 'UPLOAD_NETWORK_ERROR',
        details: {
          requestId,
          readyState: xhr.readyState,
          status: xhr.status
        }
      });
      logger.error('Upload network error', error, { requestId });
      options.onError?.(error);
      reject(error);
    });

    xhr.addEventListener('timeout', () => {
      const error = new APIError({
        message: 'Upload timeout',
        code: 'UPLOAD_TIMEOUT',
        details: {
          requestId,
          timeout: xhr.timeout
        }
      });
      logger.error('Upload timeout', error, { requestId });
      options.onError?.(error);
      reject(error);
    });

    xhr.addEventListener('abort', () => {
      const error = new APIError({
        message: 'Upload was aborted',
        code: 'UPLOAD_ABORTED',
        details: { requestId }
      });
      logger.error('Upload aborted', error, { requestId });
      options.onError?.(error);
      reject(error);
    });

    try {
      xhr.open('PUT', url, true);
      xhr.setRequestHeader('Content-Type', 'application/octet-stream');
      xhr.send(file);
    } catch (error) {
      const err = new APIError({
        message: 'Failed to initiate upload',
        code: 'UPLOAD_INIT_ERROR',
        details: {
          requestId,
          error: error instanceof Error ? error.message : 'Unknown error'
        }
      });
      logger.error('Failed to initiate upload', err, { requestId });
      reject(err);
    }
  });
}