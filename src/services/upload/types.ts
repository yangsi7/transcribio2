import type { APIError } from '../api/errors';

export interface UploadProgress {
  loaded: number;
  total: number;
  percentage: number;
}

export interface UploadOptions {
  onStart?: () => void;
  onProgress?: (progress: UploadProgress) => void;
  onComplete?: () => void;
  onError?: (error: APIError) => void;
  signal?: AbortSignal;
}

export interface UploadUrlResponse {
  upload_url: string;
  file_id: string;
}

export interface UploadState {
  progress: number;
  status: 'idle' | 'preparing' | 'uploading' | 'processing' | 'completed' | 'error';
  error: Error | null;
}