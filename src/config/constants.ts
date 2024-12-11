// src/config/constants.ts
export const RETRY_CONFIG = {
  MAX_RETRIES: 3,
  RETRY_DELAY: 1000,
  POLLING_INTERVAL: 2000,
} as const;

export const LOG_CONFIG = {
  MAX_LOGS: 1000,
  UPDATE_INTERVAL: 1000,
  LEVELS: {
    DEBUG: 'debug',
    INFO: 'info',
    WARN: 'warn',
    ERROR: 'error'
  } as const,
  COLORS: {
    debug: '#6B7280', 
    info: '#2563EB',
    warn: '#D97706',
    error: '#DC2626'
  } as const,
  STYLES: {
    debug: 'color: #6B7280; font-weight: bold',
    info: 'color: #2563EB; font-weight: bold',
    warn: 'color: #D97706; font-weight: bold',
    error: 'color: #DC2626; font-weight: bold'
  } as const,
  STATUS_MESSAGES: {
    idle: 'Ready to start',
    validating: 'Validating file...',
    'generating-url': 'Preparing upload...',
    uploading: 'Uploading file...',
    'upload-complete': 'Upload complete',
    'requesting-transcription': 'Initiating transcription...',
    processing: 'Processing transcription...',
    completed: 'Transcription complete',
    error: 'An error occurred'
  } as const
} as const;

export const PROCESS_STEPS = {
  VALIDATION: {
    start: 'Starting file validation',
    success: 'File validation successful',
    error: 'File validation failed'
  },
  UPLOAD: {
    start: 'Starting file upload',
    progress: 'Upload in progress',
    success: 'Upload completed successfully',
    error: 'Upload failed'
  },
  TRANSCRIPTION: {
    start: 'Starting transcription process',
    progress: 'Transcription in progress',
    success: 'Transcription completed successfully',
    error: 'Transcription failed'
  }
} as const;