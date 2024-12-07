import { API_CONFIG } from '../../config/api';
import { handleResponse } from './utils';
import { logger } from '../../utils/logger';
import type { UploadOptions } from './types';

export async function generateUploadUrl(filename: string, signal?: AbortSignal) {
  logger.debug('Generating upload URL', { filename });

  const response = await fetch(
    API_CONFIG.endpoints.generateUploadUrl(filename),
    {
      method: 'POST',
      headers: API_CONFIG.headers.base,
      signal,
    }
  );

  const data = await handleResponse<{ upload_url: string; file_id: string }>(response);
  logger.debug('Upload URL generated', { fileId: data.file_id });
  return data;
}

export async function uploadFile(url: string, file: File, options: UploadOptions = {}) {
  logger.debug('Starting file upload', {
    fileName: file.name,
    fileSize: file.size,
    fileType: file.type
  });

  return new Promise<void>((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.withCredentials = false;
    xhr.timeout = API_CONFIG.timeout;

    if (options.signal) {
      options.signal.addEventListener('abort', () => xhr.abort());
    }

    xhr.upload.addEventListener('loadstart', () => {
      logger.debug('Upload started');
      options.onProgress?.({ loaded: 0, total: file.size, percentage: 0 });
    });

    xhr.upload.addEventListener('progress', (event) => {
      if (event.lengthComputable) {
        const progress = {
          loaded: event.loaded,
          total: event.total,
          percentage: Math.round((event.loaded / event.total) * 100)
        };
        logger.debug('Upload progress', progress);
        options.onProgress?.(progress);
      }
    });

    xhr.addEventListener('load', () => {
      if (xhr.status >= 200 && xhr.status < 300) {
        options.onProgress?.({ loaded: file.size, total: file.size, percentage: 100 });
        logger.debug('Upload completed successfully');
        resolve();
      } else {
        const error = new Error(`Upload failed with status ${xhr.status}`);
        logger.error('Upload failed', error);
        reject(error);
      }
    });

    xhr.addEventListener('error', () => {
      const error = new Error('Network error during upload');
      logger.error('Upload network error', error);
      reject(error);
    });

    xhr.addEventListener('abort', () => {
      const error = new Error('Upload aborted');
      logger.error('Upload aborted', error);
      reject(error);
    });

    xhr.addEventListener('timeout', () => {
      const error = new Error('Upload timed out');
      logger.error('Upload timeout', error);
      reject(error);
    });

    try {
      xhr.open('PUT', url);
      xhr.setRequestHeader('Content-Type', 'application/octet-stream');
      xhr.send(file);
    } catch (error) {
      const err = error instanceof Error ? error : new Error('Failed to initiate upload');
      logger.error('Failed to initiate upload', err);
      reject(err);
    }
  });
}