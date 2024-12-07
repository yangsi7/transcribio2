import { API } from '../../config/api';
import { APIError } from '../api/errors';
import { logger } from '../../utils/logger';
import type { SignedUrlResponse, UploadOptions } from './types';

export async function generateSignedUrl(filename: string): Promise<SignedUrlResponse> {
  const requestId = Math.random().toString(36).substr(2, 9);
  
  logger.debug('Generating signed URL', {
    requestId,
    filename,
    endpoint: API.endpoints.generateUploadUrl(filename)
  });

  try {
    const response = await fetch(API.endpoints.generateUploadUrl(filename), {
      method: 'POST',
      headers: API.headers.base
    });

    if (!response.ok) {
      const error = await response.json().catch(() => ({}));
      throw new APIError({
        code: error.code || `HTTP_${response.status}`,
        message: error.message || 'Failed to generate signed URL',
        status: response.status,
        details: { filename, requestId }
      });
    }

    const data = await response.json();
    
    logger.debug('Successfully generated signed URL', {
      requestId,
      fileId: data.file_id,
      urlLength: data.upload_url.length
    });

    return data;
  } catch (error) {
    logger.error(
      'Failed to generate signed URL',
      error instanceof Error ? error : new Error('Unknown error'),
      { requestId, filename }
    );
    throw error;
  }
}

export async function uploadToSignedUrl(
  url: string,
  file: File,
  options: UploadOptions = {}
): Promise<void> {
  const requestId = Math.random().toString(36).substr(2, 9);
  
  logger.debug('Starting file upload', {
    requestId,
    fileName: file.name,
    fileSize: file.size,
    fileType: file.type
  });

  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();

    xhr.upload.addEventListener('progress', (event) => {
      if (event.lengthComputable) {
        const progress = {
          loaded: event.loaded,
          total: event.total,
          percentage: (event.loaded / event.total) * 100
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
        const error = new APIError({
          code: `UPLOAD_ERROR_${xhr.status}`,
          message: `Upload failed with status ${xhr.status}`,
          status: xhr.status
        });
        logger.error('Upload failed', error, { requestId });
        options.onError?.(error);
        reject(error);
      }
    });

    xhr.addEventListener('error', () => {
      const error = new APIError({
        code: 'UPLOAD_NETWORK_ERROR',
        message: 'Network error during upload'
      });
      logger.error('Upload network error', error, { requestId });
      options.onError?.(error);
      reject(error);
    });

    xhr.addEventListener('abort', () => {
      const error = new APIError({
        code: 'UPLOAD_ABORTED',
        message: 'Upload was aborted'
      });
      logger.error('Upload aborted', error, { requestId });
      options.onError?.(error);
      reject(error);
    });

    xhr.open('PUT', url);
    xhr.setRequestHeader('Content-Type', 'application/octet-stream');
    xhr.send(file);
  });
}