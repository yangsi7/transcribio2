export interface APIResponse<T = unknown> {
  data: T;
  status: number;
  headers: Headers;
}

export interface SignedUrlResponse {
  upload_url: string;
  file_id: string;
}

export interface APIRequestContext {
  requestId: string;
  endpoint: string;
  method: string;
  duration?: string;
  error?: unknown;
}

export interface UploadProgress {
  loaded: number;
  total: number;
  percentage: number;
}

export interface UploadOptions {
  onProgress?: (progress: UploadProgress) => void;
  onComplete?: () => void;
  onError?: (error: Error) => void;
  signal?: AbortSignal;
}