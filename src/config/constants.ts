export const RETRY_CONFIG = {
  MAX_RETRIES: 3,
  RETRY_DELAY: 1000, // Base delay in ms
  POLLING_INTERVAL: 2000, // Base polling interval in ms
} as const;

export const LOG_CONFIG = {
  MAX_LOGS: 1000,
  UPDATE_INTERVAL: 1000, // ms
  LEVELS: {
    DEBUG: 'debug',
    INFO: 'info',
    WARN: 'warn',
    ERROR: 'error'
  } as const,
  COLORS: {
    debug: '#6B7280', // gray-500
    info: '#2563EB', // blue-600
    warn: '#D97706', // yellow-600
    error: '#DC2626' // red-600
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
