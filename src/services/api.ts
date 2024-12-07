import { API_CONFIG } from '../config/api';

export class APIError extends Error {
  constructor(
    message: string,
    public status?: number,
    public code?: string
  ) {
    super(message);
    this.name = 'APIError';
  }
}

async function handleResponse(response: Response) {
  if (!response.ok) {
    const error = await response.json().catch(() => ({}));
    throw new APIError(
      error.message || 'An error occurred',
      response.status,
      error.code
    );
  }
  return response.json();
}

import { API_CONFIG } from '../config/api';

async function fetchWithTimeout(
  resource: string,
  options: RequestInit,
  timeout = API_CONFIG.timeout // Use the configured timeout
): Promise<Response> {
  const controller = new AbortController();
  const id = setTimeout(() => controller.abort(), timeout);
  const response = await fetch(resource, { ...options, signal: controller.signal });
  clearTimeout(id);
  return response;
}

export async function generateUploadUrl(filename: string) {
  const response = await fetchWithTimeout(API_CONFIG.endpoints.generateUploadUrl(filename), {
    method: 'POST',
    headers: API_CONFIG.headers.base,
  });
  const data = await handleResponse(response);

  if (!data.upload_url || !data.file_id) {
    throw new APIError('Invalid response from upload URL generation endpoint');
  }

  return data;
}

export async function uploadFile(url: string, file: File) {
  const response = await fetchWithTimeout(url, {
    method: 'PUT',
    body: file,
    headers: API_CONFIG.headers.upload,
  });
  if (!response.ok) {
    throw new APIError('Failed to upload file', response.status);
  }
}

export async function requestTranscription(fileId: string) {
  const response = await fetchWithTimeout(API_CONFIG.endpoints.processFile, {
    method: 'POST',
    headers: { ...API_CONFIG.headers.base, ...API_CONFIG.headers.json },
    body: JSON.stringify({ file_id: fileId }),
  });
  return handleResponse(response);
}

export async function checkHealth() {
  const response = await fetchWithTimeout(API_CONFIG.endpoints.ready, {
    method: 'GET',
    headers: API_CONFIG.headers.base,
  });
  if (!response.ok) {
    throw new APIError('Health check failed', response.status);
  }
  return response.status === 200;
}