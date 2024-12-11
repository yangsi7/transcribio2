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

export interface SignedUrlResponse {
  upload_url: string;
  file_id: string;
}

export interface UploadState {
  progress: number;
  status: 'idle' | 'validating' | 'generating-url' | 'uploading' | 'requesting-transcription' | 'processing' | 'completed' | 'error';
  error: Error | null;
}
