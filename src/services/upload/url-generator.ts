import { API_CONFIG } from '../../config/api';
import { logger } from '../../utils/logger';
import type { UploadUrlResponse } from './types';

export async function generateUploadUrl(
  filename: string,
  signal?: AbortSignal
): Promise<UploadUrlResponse> {
  logger.debug('Generating upload URL', { 
    filename,
    apiUrl: API_CONFIG.baseUrl 
  });

  try {
    const response = await fetch(
      API_CONFIG.endpoints.generateUploadUrl(filename),
      {
        method: 'POST',
        headers: {
          ...API_CONFIG.headers.base,
          'Content-Type': 'application/json'
        },
        signal
      }
    );

    if (!response.ok) {
      const error = await response.json().catch(() => ({}));
      logger.error('Failed to generate upload URL', new Error(error.message || 'Network error'), {
        status: response.status,
        filename,
        endpoint: API_CONFIG.endpoints.generateUploadUrl(filename)
      });
      throw new Error(error.message || 'Failed to generate upload URL');
    }

    const data = await response.json();
    
    if (!data.upload_url || !data.file_id) {
      logger.error('Invalid upload URL response', new Error('Missing required fields'), { 
        data,
        endpoint: API_CONFIG.endpoints.generateUploadUrl(filename)
      });
      throw new Error('Invalid response from server');
    }

    logger.info('Upload URL generated successfully', {
      fileId: data.file_id,
      uploadUrlLength: data.upload_url.length,
      endpoint: API_CONFIG.endpoints.generateUploadUrl(filename)
    });

    return data;
  } catch (error) {
    logger.error(
      'Error generating upload URL',
      error instanceof Error ? error : new Error('Unknown error'),
      { filename, apiUrl: API_CONFIG.baseUrl }
    );
    throw error;
  }
}