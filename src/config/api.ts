import { ENV } from './env';

export const API_CONFIG = {
  baseUrl: ENV.API_URL,
  endpoints: {
    generateUploadUrl: (filename: string) =>
      `${ENV.API_URL}/generate_upload_url/?filename=${encodeURIComponent(filename)}`,
    processFile: `${ENV.API_URL}/process_file/`,
    getTranscriptionResult: (fileId: string) =>
      `${ENV.API_URL}/get_transcription_result/${fileId}`,
    ready: `${ENV.API_URL}/ready`,
  },
  headers: {
    base: {
      'X-API-Key': ENV.API_KEY,
      'Accept': 'application/json',
      'Origin': window.location.origin,
    },
    json: {
      'Content-Type': 'application/json',
    },
    upload: {
      'Content-Type': 'application/octet-stream',
    },
  },
  timeout: 600000,
  polling: {
    interval: 5000,
    maxAttempts: 60,
  },
  retries: {
    max: 3,
    delay: 1000,
    backoff: 2,
  },
  cors: {
    credentials: 'omit' as RequestCredentials,
    mode: 'cors' as RequestMode,
  }
} as const;