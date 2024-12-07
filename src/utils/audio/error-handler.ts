import { logger } from './logger';

export interface ErrorLogData {
  message: string;
  stack?: string;
  timestamp: string;
  fileInfo?: {
    name?: string;
    type?: string;
    size?: number;
  };
  context?: Record<string, unknown>;
}

export class AudioProcessingError extends Error {
  constructor(
    message: string,
    public readonly logData: ErrorLogData
  ) {
    super(message);
    this.name = 'AudioProcessingError';
  }
}

export function createErrorLog(error: Error, file?: File, context?: Record<string, unknown>): ErrorLogData {
  const logData: ErrorLogData = {
    message: error.message,
    stack: error.stack,
    timestamp: new Date().toISOString(),
    context
  };

  if (file) {
    logData.fileInfo = {
      name: file.name,
      type: file.type,
      size: file.size
    };
  }

  return logData;
}

export function handleAudioError(error: Error, file?: File, context?: Record<string, unknown>): never {
  const logData = createErrorLog(error, file, context);
  
  logger.error('Audio processing error occurred', error, {
    fileInfo: logData.fileInfo,
    context: logData.context
  });

  throw new AudioProcessingError(
    'An error occurred while processing your audio file. Please try again.',
    logData
  );
}