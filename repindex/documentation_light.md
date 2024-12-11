### vite.config.ts

```typescript
// vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
```

### src/App.tsx

```typescript
// src/App.tsx
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Sidebar } from './components/Sidebar';
import { UploadPage } from './pages/UploadPage';
import { MeetingHistory } from './pages/MeetingHistory';
import { ChatPage } from './pages/ChatPage';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 flex">
      <Sidebar />
      <div className="flex-1 p-6">
        <Routes>
          <Route path="/" element={<Navigate to="/upload" replace />} />
          <Route path="/upload" element={<UploadPage />} />
          <Route path="/history" element={<MeetingHistory />} />
          <Route path="/chat" element={<ChatPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;

```

### src/main.tsx

```typescript
// src/main.tsx
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
```

### src/index.css

```css
/* src/index.css */
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### src/vite-env.d.ts

```typescript
// src/vite-env.d.ts
/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_API_KEY: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}

interface Window {
  AudioContext: typeof AudioContext
  webkitAudioContext: typeof AudioContext
}
```

### src/types/index.ts

```typescript
// src/types/index.ts
export interface Speaker {
  speaker: string;
  timestamp: [number, number];
  text: string;
}

export interface TranscriptionResponse {
  transcription: {
    speakers: Speaker[];
    chunks: {
      timestamp: [number, number];
      text: string;
    }[];
    text: string;
  };
}

export type ExportFormat = 'txt' | 'md' | 'pdf' | 'docx' | 'rtf';

export type ProcessStatus = 
  | 'idle'
  | 'validating'
  | 'generating-url'
  | 'uploading'
  | 'upload-complete'
  | 'requesting-transcription'
  | 'processing'
  | 'completed'
  | 'error';

export interface ProcessError {
  code: string;
  message: string;
  details?: unknown;
}

export interface TranscriptionState {
  file: File | null;
  fileId: string | null;
  status: ProcessStatus;
  error: ProcessError | null;
  transcription: TranscriptionResponse | null;
  speakerMap: Record<string, string>;
  setSpeakerName: (speaker: string, name: string) => void;
  setFile: (file: File) => void;
  setFileId: (id: string) => void;
  setStatus: (status: ProcessStatus) => void;
  setError: (error: ProcessError | null) => void;
  setTranscription: (transcription: TranscriptionResponse) => void;
  reset: () => void;
}
```

### src/config/audio.ts

```typescript
// src/config/audio.ts
export const AUDIO_CONFIG = {
  FORMATS: {
    'audio/mpeg': ['.mp3'],
    'audio/wav': ['.wav'],
    'audio/wave': ['.wav'],
    'audio/x-wav': ['.wav'],
    'audio/mp4': ['.m4a', '.mp4a'],
    'audio/x-m4a': ['.m4a'],
    'audio/aac': ['.aac'],
    'audio/ogg': ['.ogg', '.oga'],
    'audio/webm': ['.weba'],
    'audio/x-aiff': ['.aif', '.aiff'],
    'audio/flac': ['.flac'],
    'audio/x-flac': ['.flac']
  },
  MAX_FILE_SIZE: 500 * 1024 * 1024, // 500MB
  MIN_FILE_SIZE: 1024, // 1KB
  PREVIEW_CHUNK_SIZE: 256 * 1024, // 256KB
} as const;
```

### src/config/api.ts

```typescript
// src/config/api.ts
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
  timeout: 600000, // 10 minutes
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
```

### src/config/constants.ts

```typescript
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
```

### src/config/env.ts

```typescript
// src/config/env.ts
import { logger } from '../utils/logger';

// Instead of using import.meta.env directly, we can rely on vite to define them as global vars via define or just cast
// Or ensure that tsconfig module is set to esnext and vite is configured properly.
// Given that we've set module to esnext now, import.meta should be allowed.

// After setting "module": "esnext" in tsconfig.json, we can leave this code as is:

const getEnvVar = (key: string): string => {
  const value = import.meta.env[key];
  if (value === undefined) {
    logger.warn(`Environment variable ${key} is not set`);
    return '';
  }
  return value;
};

export const ENV = {
  API_URL: import.meta.env.VITE_API_URL || 'https://api-service-1040094048579.us-central1.run.app',
  API_KEY: getEnvVar('VITE_API_KEY'),
  IS_DEV: import.meta.env.DEV,
} as const;

logger.info('Environment configuration loaded', {
  API_URL: ENV.API_URL,
  IS_DEV: ENV.IS_DEV,
  HAS_API_KEY: !!ENV.API_KEY
});
```

### src/utils/audio.ts

```typescript
// Correct imports
import { AUDIO_CONFIG } from './audio/constants';
import { validateAudioFile, validateAudioContent, getAcceptedFileTypes } from './audio/validation';
import { logger } from './audio/logger';

// Destructure constants from AUDIO_CONFIG for easier access
const { FORMATS: AUDIO_FORMATS, MAX_FILE_SIZE, MIN_FILE_SIZE, PREVIEW_CHUNK_SIZE } = AUDIO_CONFIG;

export {
  // Constants
  AUDIO_FORMATS,
  AUDIO_CONFIG,
  MAX_FILE_SIZE,
  MIN_FILE_SIZE,
  PREVIEW_CHUNK_SIZE,
  // Validation functions
  validateAudioFile,
  validateAudioContent,
  getAcceptedFileTypes,
  // Logger
  logger as audioLogger,
};
```

### src/utils/export.ts

```typescript
import { Document, Packer, Paragraph, TextRun } from 'docx';
import { saveAs } from 'file-saver';
import { jsPDF } from 'jspdf';
import type { Speaker } from '../types';

interface ExportOptions {
  speakers: Speaker[];
  speakerMap: Record<string, string>;
  text: string;
}

export async function exportTranscription(
  format: string,
  options: ExportOptions,
  filename = 'transcription'
) {
  const { speakers, speakerMap, text } = options;

  switch (format.toLowerCase()) {
    case 'txt': {
      const content = speakers
        .map((s) => `${speakerMap[s.speaker] || s.speaker}: ${s.text}`)
        .join('\n\n');
      const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
      saveAs(blob, `${filename}.txt`);
      break;
    }

    case 'md': {
      const content = speakers
        .map((s) => `**${speakerMap[s.speaker] || s.speaker}**: ${s.text}`)
        .join('\n\n');
      const blob = new Blob([content], { type: 'text/markdown;charset=utf-8' });
      saveAs(blob, `${filename}.md`);
      break;
    }

    case 'pdf': {
      const doc = new jsPDF();
      let y = 20;
      const lineHeight = 10;
      const pageHeight = doc.internal.pageSize.height - 20;

      speakers.forEach((s) => {
        const speaker = speakerMap[s.speaker] || s.speaker;
        const lines = doc.splitTextToSize(
          `${speaker}: ${s.text}`,
          doc.internal.pageSize.width - 20
        );

        if (y + lines.length * lineHeight > pageHeight) {
          doc.addPage();
          y = 20;
        }

        doc.setFont('helvetica', 'bold');
        doc.text(`${speaker}:`, 10, y);
        doc.setFont('helvetica', 'normal');
        doc.text(s.text, 10, y + lineHeight);
        y += (lines.length + 1) * lineHeight;
      });

      doc.save(`${filename}.pdf`);
      break;
    }

    case 'docx': {
      const doc = new Document({
        sections: [
          {
            children: speakers.map(
              (s) =>
                new Paragraph({
                  children: [
                    new TextRun({
                      text: `${speakerMap[s.speaker] || s.speaker}: `,
                      bold: true,
                    }),
                    new TextRun(s.text),
                  ],
                  spacing: {
                    after: 200,
                  },
                })
            ),
          },
        ],
      });

      const blob = await Packer.toBlob(doc);
      saveAs(blob, `${filename}.docx`);
      break;
    }

    case 'rtf': {
      const content = speakers
        .map(
          (s) =>
            `{\\b ${speakerMap[s.speaker] || s.speaker}:} ${s.text.replace(
              /[\\{}]/g,
              '\\$&'
            )}`
        )
        .join('\\par\\par ');
      const rtf = `{\\rtf1\\ansi\\deff0{\\fonttbl{\\f0 Times New Roman;}}\n${content}}`;
      const blob = new Blob([rtf], { type: 'text/rtf' });
      saveAs(blob, `${filename}.rtf`);
      break;
    }

    default:
      throw new Error(`Unsupported format: ${format}`);
  }
}
```

### src/utils/logger.ts

```typescript
import { LOG_CONFIG } from '../config/constants';

type LogLevel = typeof LOG_CONFIG.LEVELS[keyof typeof LOG_CONFIG.LEVELS];

interface LogEntry {
  id: string;
  timestamp: string;
  level: LogLevel;
  message: string;
  data?: unknown;
  error?: Error;
  context?: Record<string, unknown>;
}

class Logger {
  private static instance: Logger;
  private logs: LogEntry[] = [];
  private readonly isDevelopment = import.meta.env.DEV;
  private readonly maxLogs = LOG_CONFIG.MAX_LOGS;

  private constructor() {
    this.info('Logger initialized', { isDevelopment: this.isDevelopment });
  }

  static getInstance(): Logger {
    if (!Logger.instance) {
      Logger.instance = new Logger();
    }
    return Logger.instance;
  }

  private generateId(): string {
    return Math.random().toString(36).substring(2, 15);
  }

  private createEntry(
    level: LogLevel,
    message: string,
    error?: Error,
    data?: unknown,
    context?: Record<string, unknown>
  ): LogEntry {
    return {
      id: this.generateId(),
      timestamp: new Date().toISOString(),
      level,
      message,
      error,
      data,
      context
    };
  }

  private addLog(entry: LogEntry): void {
    this.logs.unshift(entry);
    if (this.logs.length > this.maxLogs) {
      this.logs.pop();
    }

    if (this.isDevelopment) {
      const prefix = `[${entry.level.toUpperCase()}]`;
      const style = LOG_CONFIG.COLORS[entry.level];
      
      console.groupCollapsed(
        `%c${prefix} %c${entry.message}`,
        `color: ${style}; font-weight: bold`,
        'color: inherit'
      );
      
      if (entry.data) {
        console.log('Data:', entry.data);
      }
      
      if (entry.context) {
        console.log('Context:', entry.context);
      }
      
      if (entry.error) {
        console.error('Error:', entry.error);
        if (entry.error.stack) {
          console.log('Stack:', entry.error.stack);
        }
      }
      
      console.groupEnd();
    }
  }

  debug(message: string, data?: unknown, context?: Record<string, unknown>): void {
    this.addLog(this.createEntry(LOG_CONFIG.LEVELS.DEBUG, message, undefined, data, context));
  }

  info(message: string, data?: unknown, context?: Record<string, unknown>): void {
    this.addLog(this.createEntry(LOG_CONFIG.LEVELS.INFO, message, undefined, data, context));
  }

  warn(message: string, data?: unknown, context?: Record<string, unknown>): void {
    this.addLog(this.createEntry(LOG_CONFIG.LEVELS.WARN, message, undefined, data, context));
  }

  error(message: string, error: Error, context?: Record<string, unknown>): void {
    this.addLog(this.createEntry(LOG_CONFIG.LEVELS.ERROR, message, error, undefined, context));
  }

  getLogs(): LogEntry[] {
    return [...this.logs];
  }

  getLogsByLevel(level: LogLevel): LogEntry[] {
    return this.logs.filter(log => log.level === level);
  }

  getErrorLogs(): LogEntry[] {
    return this.getLogsByLevel(LOG_CONFIG.LEVELS.ERROR);
  }

  clearLogs(): void {
    this.logs = [];
    this.info('Logs cleared');
  }
}

export const logger = Logger.getInstance();
```

### src/utils/format.ts

```typescript
export function formatTimestamp(seconds: number): string {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = Math.floor(seconds % 60);
  return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
}

export function formatDuration(seconds: number): string {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const remainingSeconds = Math.floor(seconds % 60);

  if (hours > 0) {
    return `${hours}:${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
  }
  return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
}

export function formatFileSize(bytes: number): string {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return `${parseFloat((bytes / Math.pow(k, i)).toFixed(2))} ${sizes[i]}`;
}
```

### src/utils/logger/status.ts

```typescript
import { LOG_CONFIG, PROCESS_STEPS } from '../../config/constants';
import { logger } from './core';
import type { ProcessStatus } from '../../types';

export function logStatusChange(from: ProcessStatus, to: ProcessStatus): void {
  logger.info('Status change', { 
    from, 
    to,
    fromMessage: LOG_CONFIG.STATUS_MESSAGES[from],
    toMessage: LOG_CONFIG.STATUS_MESSAGES[to]
  });
}

export function logProcessStep(
  step: keyof typeof PROCESS_STEPS,
  status: 'start' | 'progress' | 'success' | 'error',
  details?: Record<string, unknown>
): void {
  const message = PROCESS_STEPS[step][status];
  
  switch (status) {
    case 'start':
      logger.info(message, details);
      break;
    case 'progress':
      logger.debug(message, details);
      break;
    case 'success':
      logger.info(message, details);
      break;
    case 'error':
      logger.error(message, new Error(message), details);
      break;
  }
}
```

### src/utils/logger/types.ts

```typescript
import type { LOG_CONFIG } from '../../config/constants';

export type LogLevel = typeof LOG_CONFIG.LEVELS[keyof typeof LOG_CONFIG.LEVELS];

export interface LogEntry {
  id: string;
  timestamp: string;
  level: LogLevel;
  message: string;
  data?: unknown;
  error?: Error;
  context?: Record<string, unknown>;
}

export interface LoggerConfig {
  maxLogs: number;
  isDevelopment: boolean;
}
```

### src/utils/logger/core.ts

```typescript
import { LOG_CONFIG } from '../../config/constants';
import { formatLogEntry } from './formatter';
import type { LogEntry, LogLevel, LoggerConfig } from './types';

class Logger {
  private static instance: Logger;
  private logs: LogEntry[] = [];
  private config: LoggerConfig;

  private constructor() {
    this.config = {
      maxLogs: LOG_CONFIG.MAX_LOGS,
      isDevelopment: import.meta.env.DEV
    };
    // Initialize with a startup log
    this.info('Logger initialized', { isDevelopment: this.config.isDevelopment });
  }

  static getInstance(): Logger {
    if (!Logger.instance) {
      Logger.instance = new Logger();
    }
    return Logger.instance;
  }

  private generateId(): string {
    return Date.now().toString(36) + Math.random().toString(36).substring(2);
  }

  private createEntry(
    level: LogLevel,
    message: string,
    error?: Error,
    data?: unknown,
    context?: Record<string, unknown>
  ): LogEntry {
    const entry: LogEntry = {
      id: this.generateId(),
      timestamp: new Date().toISOString(),
      level,
      message: String(message),
    };

    if (error !== undefined) entry.error = error;
    if (data !== undefined) entry.data = data;
    if (context !== undefined) entry.context = context;

    return entry;
  }

  private addLog(entry: LogEntry): void {
    try {
      // Add to the beginning of the array for chronological order
      this.logs.unshift(entry);
      
      // Trim logs if we exceed the maximum
      if (this.logs.length > this.config.maxLogs) {
        this.logs.pop();
      }

      // Format and display in console if in development
      if (this.config.isDevelopment) {
        formatLogEntry(entry);
      }
    } catch (error) {
      // Fallback error handling if logging fails
      console.error('Failed to add log entry:', error);
      console.error('Problematic entry:', {
        ...entry,
        error: entry.error ? {
          message: entry.error.message,
          stack: entry.error.stack
        } : undefined
      });
    }
  }

  debug(message: string, data?: unknown, context?: Record<string, unknown>): void {
    this.addLog(
      this.createEntry(LOG_CONFIG.LEVELS.DEBUG, message, undefined, data, context)
    );
  }

  info(message: string, data?: unknown, context?: Record<string, unknown>): void {
    this.addLog(
      this.createEntry(LOG_CONFIG.LEVELS.INFO, message, undefined, data, context)
    );
  }

  warn(message: string, data?: unknown, context?: Record<string, unknown>): void {
    this.addLog(
      this.createEntry(LOG_CONFIG.LEVELS.WARN, message, undefined, data, context)
    );
  }

  error(message: string, error: Error | unknown, context?: Record<string, unknown>): void {
    const normalizedError = error instanceof Error ? error : new Error(String(error));
    this.addLog(
      this.createEntry(LOG_CONFIG.LEVELS.ERROR, message, normalizedError, undefined, context)
    );
  }

  getLogs(): LogEntry[] {
    return [...this.logs];
  }

  getLogsByLevel(level: LogLevel): LogEntry[] {
    return this.logs.filter(log => log.level === level);
  }

  getErrorLogs(): LogEntry[] {
    return this.getLogsByLevel(LOG_CONFIG.LEVELS.ERROR);
  }

  clearLogs(): void {
    this.logs = [];
    this.info('Logs cleared');
  }
}

// Export the singleton instance
export const logger = Logger.getInstance();
```

### src/utils/logger/index.ts

```typescript
import { logger } from './core';
import type { LogEntry, LogLevel, LoggerConfig } from './types';

export {
  logger,
  // Types
  LogEntry,
  LogLevel,
  LoggerConfig
};
```

### src/utils/logger/formatter.ts

```typescript
import { LOG_CONFIG } from '../../config/constants';
import type { LogEntry } from './types';

function stringifyValue(value: unknown): string {
  try {
    return JSON.stringify(value, null, 2);
  } catch (error) {
    return String(value);
  }
}

export function formatLogEntry(entry: LogEntry): void {
  const timestamp = new Date(entry.timestamp).toLocaleTimeString();
  const prefix = `[${timestamp}] [${entry.level.toUpperCase()}]`;
  const style = LOG_CONFIG.STYLES[entry.level];
  
  console.groupCollapsed(
    `%c${prefix}%c ${entry.message}`,
    style,
    'color: inherit'
  );
  
  if (entry.data !== undefined) {
    console.log(
      '%cData:%c\n',
      'color: #4B5563; font-weight: bold',
      'color: inherit',
      stringifyValue(entry.data)
    );
  }
  
  if (entry.context) {
    console.log(
      '%cContext:%c\n',
      'color: #4B5563; font-weight: bold',
      'color: inherit',
      stringifyValue(entry.context)
    );
  }
  
  if (entry.error) {
    console.group('%cError Details:', 'color: #DC2626; font-weight: bold');
    console.error(entry.error);
    if (entry.error.cause) {
      console.log('Cause:', entry.error.cause);
    }
    if (entry.error.stack) {
      console.log('Stack Trace:', entry.error.stack);
    }
    console.groupEnd();
  }
  
  console.groupEnd();
}
```

### src/utils/audio/validation.ts

```typescript
import { AUDIO_CONFIG } from './constants';
import { logger } from './logger';
import { handleAudioError } from './error-handler';
import { processAudioChunk } from './processing';
import { formatFileSize } from '../format';

export interface AudioValidationResult {
  isValid: boolean;
  error?: string;
}

export function validateAudioFile(file: File): AudioValidationResult {
  logger.debug('Validating audio file:', { name: file.name, size: file.size, type: file.type });

  try {
    if (!file) {
      return { isValid: false, error: 'No file selected' };
    }

    if (file.size > AUDIO_CONFIG.MAX_FILE_SIZE) {
      return {
        isValid: false,
        error: `File size exceeds maximum limit of ${formatFileSize(AUDIO_CONFIG.MAX_FILE_SIZE)}`,
      };
    }

    if (file.size < AUDIO_CONFIG.MIN_FILE_SIZE) {
      return {
        isValid: false,
        error: `File size is below minimum of ${formatFileSize(AUDIO_CONFIG.MIN_FILE_SIZE)}`,
      };
    }

    const isValidType = Object.keys(AUDIO_CONFIG.FORMATS).includes(file.type);
    if (!isValidType) {
      return {
        isValid: false,
        error: 'Invalid audio format. Please upload a supported audio file.',
      };
    }

    logger.debug('Audio file validation successful');
    return { isValid: true };
  } catch (error) {
    handleAudioError(error as Error, file, { validationType: 'file' });
    return { isValid: false, error: 'Error validating file' };
  }
}

export function getAcceptedFileTypes(): string {
  try {
    const acceptedTypes = Object.entries(AUDIO_CONFIG.FORMATS)
      .flatMap(([mimeType, extensions]) => [
        mimeType,
        ...extensions.map((ext) => ext),
      ])
      .join(',');

    logger.debug('Generated accepted file types:', acceptedTypes);
    return acceptedTypes;
  } catch (error) {
    handleAudioError(error as Error, undefined, { operation: 'getAcceptedFileTypes' });
    return '*'; // Fallback to accept all files if there's an error
  }
}

export async function validateAudioContent(file: File): Promise<AudioValidationResult> {
  logger.debug('Starting audio content validation', { fileName: file.name });

  try {
    const reader = new FileReader();
    
    const result = await new Promise<AudioValidationResult>((resolve, reject) => {
      reader.onload = async () => {
        try {
          const arrayBuffer = reader.result as ArrayBuffer;
          const processResult = await processAudioChunk(arrayBuffer);

          if (processResult.duration < 0.1) {
            resolve({
              isValid: false,
              error: 'Audio file appears to be empty or corrupted',
            });
            return;
          }

          if (processResult.channels === 0) {
            resolve({
              isValid: false,
              error: 'Audio file contains no audio channels',
            });
            return;
          }

          resolve({ isValid: true });
        } catch (error) {
          reject(error);
        }
      };

      reader.onerror = () => reject(reader.error);

      const slice = file.slice(0, AUDIO_CONFIG.PREVIEW_CHUNK_SIZE);
      reader.readAsArrayBuffer(slice);
    });

    return result;
  } catch (error) {
    handleAudioError(error as Error, file, { validationType: 'content' });
    return { isValid: false, error: 'Error validating audio content' };
  }
}
```

### src/utils/audio/error-handler.ts

```typescript
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
```

### src/utils/audio/processing.ts

```typescript
import { logger } from './logger';
import { handleAudioError } from './error-handler';

export interface AudioProcessingResult {
  duration: number;
  channels: number;
  sampleRate: number;
  isValid: boolean;
}

export async function processAudioChunk(chunk: ArrayBuffer): Promise<AudioProcessingResult> {
  logger.debug('Processing audio chunk', { size: chunk.byteLength });

  try {
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    const audioBuffer = await audioContext.decodeAudioData(chunk);

    logger.debug('Audio chunk processed', {
      duration: audioBuffer.duration,
      channels: audioBuffer.numberOfChannels,
      sampleRate: audioBuffer.sampleRate
    });

    return {
      duration: audioBuffer.duration,
      channels: audioBuffer.numberOfChannels,
      sampleRate: audioBuffer.sampleRate,
      isValid: true
    };
  } catch (error) {
    handleAudioError(error as Error, undefined, { chunkSize: chunk.byteLength });
    return {
      duration: 0,
      channels: 0,
      sampleRate: 0,
      isValid: false
    };
  } finally {
    // Clean up AudioContext
    if (window.AudioContext || window.webkitAudioContext) {
      const audioContext = new (window.AudioContext || window.webkitAudioContext)();
      await audioContext.close();
    }
  }
}
```

### src/utils/audio/logger.ts

```typescript
type LogLevel = 'debug' | 'info' | 'warn' | 'error';

class Logger {
  private static instance: Logger;
  private readonly isDevelopment = import.meta.env.DEV;

  private constructor() {}

  static getInstance(): Logger {
    if (!Logger.instance) {
      Logger.instance = new Logger();
    }
    return Logger.instance;
  }

  private log(level: LogLevel, message: string, ...args: unknown[]): void {
    if (!this.isDevelopment) return;

    const timestamp = new Date().toISOString();
    const prefix = `[Audio Utils ${level.toUpperCase()}] ${timestamp}:`;

    switch (level) {
      case 'debug':
        console.debug(prefix, message, ...args);
        break;
      case 'info':
        console.info(prefix, message, ...args);
        break;
      case 'warn':
        console.warn(prefix, message, ...args);
        break;
      case 'error':
        console.error(prefix, message, ...args);
        break;
    }
  }

  debug(message: string, ...args: unknown[]): void {
    this.log('debug', message, ...args);
  }

  info(message: string, ...args: unknown[]): void {
    this.log('info', message, ...args);
  }

  warn(message: string, ...args: unknown[]): void {
    this.log('warn', message, ...args);
  }

  error(message: string, error?: Error, ...args: unknown[]): void {
    this.log('error', message, ...(error ? [error.stack, ...args] : args));
  }
}

export const logger = Logger.getInstance();
```

### src/utils/audio/constants.ts

```typescript
export const AUDIO_CONFIG = {
  FORMATS: {
    // Common formats
    'audio/mpeg': ['.mp3'],
    'audio/wav': ['.wav'],
    'audio/wave': ['.wav'],
    'audio/x-wav': ['.wav'],
    'audio/mp4': ['.m4a', '.mp4a'],
    'audio/x-m4a': ['.m4a'],
    // Additional formats
    'audio/aac': ['.aac'],
    'audio/ogg': ['.ogg', '.oga'],
    'audio/webm': ['.weba'],
    'audio/x-aiff': ['.aif', '.aiff'],
    'audio/flac': ['.flac'],
    'audio/x-flac': ['.flac'],
  },
  MAX_FILE_SIZE: 500 * 1024 * 1024, // 500MB
  MIN_FILE_SIZE: 1024, // 1KB
  PREVIEW_CHUNK_SIZE: 256 * 1024, // 256KB for audio preview validation
} as const;
```

### src/utils/audio/index.ts

```typescript
import { AUDIO_CONFIG } from './constants';
import { validateAudioFile, validateAudioContent, getAcceptedFileTypes } from './validation';
import { processAudioChunk } from './processing';
import { logger } from './logger';
import { handleAudioError } from './error-handler';

export {
  // Constants
  AUDIO_CONFIG,
  // Validation functions
  validateAudioFile,
  validateAudioContent,
  getAcceptedFileTypes,
  // Processing functions
  processAudioChunk,
  // Error handling
  handleAudioError,
  // Logger
  logger as audioLogger,
};
```

### src/utils/text/processing.ts

```typescript
import { logger } from '../logger';
import type { Speaker } from '../../types';

export interface ProcessedBlock extends Speaker {
  originalIndexes: number[];
}

export function concatenateTextBlocks(speakers: Speaker[]): ProcessedBlock[] {
  if (!speakers?.length) {
    logger.warn('No speakers provided for text concatenation');
    return [];
  }

  logger.debug('Starting text block concatenation', { 
    blockCount: speakers.length 
  });

  const processedBlocks: ProcessedBlock[] = [];
  let currentBlock: ProcessedBlock | null = null;

  speakers.forEach((speaker, index) => {
    // Clean up text by removing extra whitespace
    const cleanText = speaker.text.trim();
    if (!cleanText) return;

    if (!currentBlock) {
      currentBlock = {
        ...speaker,
        text: cleanText,
        originalIndexes: [index]
      };
      return;
    }

    const timeDiff = speaker.timestamp[0] - currentBlock.timestamp[1];
    const shouldConcatenate = currentBlock.speaker === speaker.speaker && timeDiff < 2.0;

    if (shouldConcatenate) {
      // Add proper spacing between concatenated text
      const separator = currentBlock.text.endsWith('.') ? ' ' : 
                       currentBlock.text.endsWith(',') ? ' ' : 
                       ' ';
      
      currentBlock.text = `${currentBlock.text}${separator}${cleanText}`;
      currentBlock.timestamp[1] = speaker.timestamp[1];
      currentBlock.originalIndexes.push(index);
    } else {
      // Different speaker or too large time gap, create new block
      processedBlocks.push(currentBlock);
      currentBlock = {
        ...speaker,
        text: cleanText,
        originalIndexes: [index]
      };
    }
  });

  // Add the last block if exists
  if (currentBlock) {
    processedBlocks.push(currentBlock);
  }

  logger.debug('Text block concatenation completed', {
    originalBlocks: speakers.length,
    concatenatedBlocks: processedBlocks.length
  });

  return processedBlocks;
}
```

### src/components/ProcessStatus.tsx

```typescript
import React from 'react';
import { Loader2 } from 'lucide-react';
import type { ProcessStatus } from '../types';

const statusMessages: Record<ProcessStatus, string> = {
  idle: 'Ready to start',
  validating: 'Validating file...',
  'generating-url': 'Preparing upload...',
  uploading: 'Uploading file...',
  'upload-complete': 'Upload complete',
  'requesting-transcription': 'Initiating transcription...',
  processing: 'Processing transcription...',
  completed: 'Transcription complete',
  error: 'An error occurred'
};

interface ProcessStatusProps {
  status: ProcessStatus;
}

export function ProcessStatus({ status }: ProcessStatusProps) {
  const message = statusMessages[status];
  const isProcessing = status !== 'completed' && status !== 'error' && status !== 'idle';

  return (
    <div className="flex items-center gap-2">
      {isProcessing && (
        <Loader2 className="w-4 h-4 animate-spin text-blue-600" />
      )}
      <span className="text-sm font-medium text-gray-700">{message}</span>
    </div>
  );
}
```

### src/components/TranscriptionViewer.tsx

```typescript
import React, { useState } from 'react';
import { Clock, User, Edit2 } from 'lucide-react';
import { useTranscriptionStore } from '../store/transcription';
import { formatTimestamp } from '../utils/format';

export function TranscriptionViewer() {
  const { transcription, speakerMap, setSpeakerName } = useTranscriptionStore();
  const [showTimestamps, setShowTimestamps] = useState(true);
  const [editingSpeaker, setEditingSpeaker] = useState<string | null>(null);

  if (!transcription) return null;

  const handleSpeakerEdit = (speaker: string, newName: string) => {
    setSpeakerName(speaker, newName);
    setEditingSpeaker(null);
  };

  return (
    <div className="bg-white rounded-lg shadow">
      <div className="p-4 border-b">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold">Transcription</h2>
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={showTimestamps}
              onChange={(e) => setShowTimestamps(e.target.checked)}
              className="rounded border-gray-300"
            />
            <span className="text-sm text-gray-600">Show timestamps</span>
          </label>
        </div>
      </div>
      <div className="p-4 space-y-4">
        {transcription.transcription.speakers.map((entry, index) => (
          <div key={index} className="flex gap-4">
            <div className="flex-shrink-0 w-32">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4 text-gray-400" />
                {editingSpeaker === entry.speaker ? (
                  <input
                    type="text"
                    defaultValue={speakerMap[entry.speaker] || entry.speaker}
                    className="w-full px-2 py-1 text-sm border rounded"
                    onBlur={(e) => handleSpeakerEdit(entry.speaker, e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') {
                        handleSpeakerEdit(entry.speaker, e.currentTarget.value);
                      }
                    }}
                    autoFocus
                  />
                ) : (
                  <button
                    onClick={() => setEditingSpeaker(entry.speaker)}
                    className="flex items-center gap-1 text-sm text-gray-700 hover:text-blue-600"
                  >
                    <span>{speakerMap[entry.speaker] || entry.speaker}</span>
                    <Edit2 className="w-3 h-3" />
                  </button>
                )}
              </div>
              {showTimestamps && (
                <div className="flex items-center gap-1 mt-1 text-xs text-gray-400">
                  <Clock className="w-3 h-3" />
                  <span>
                    {formatTimestamp(entry.timestamp[0])}
                  </span>
                </div>
              )}
            </div>
            <p className="flex-1 text-gray-800">{entry.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
```

### src/components/DebugPanel.tsx

```typescript
import React, { useState, useEffect, useCallback } from 'react';
import { Terminal, X, ChevronUp, ChevronDown, RefreshCw } from 'lucide-react';
import { logger } from '../utils/logger';
import { LOG_CONFIG } from '../config/constants';
import type { LogEntry } from '../utils/logger/types';

function LogDisplay({ id, timestamp, level, message, data, error, context }: LogEntry) {
  const [isExpanded, setIsExpanded] = useState(false);
  const hasDetails = data !== undefined || error || context;
  
  const colorClass = {
    [LOG_CONFIG.LEVELS.ERROR]: 'text-red-600',
    [LOG_CONFIG.LEVELS.WARN]: 'text-yellow-600',
    [LOG_CONFIG.LEVELS.INFO]: 'text-blue-600',
    [LOG_CONFIG.LEVELS.DEBUG]: 'text-gray-500'
  }[level] || 'text-gray-500';

  return (
    <div key={id} className="border-b border-gray-200 py-2">
      <div className="flex items-start gap-2">
        <span className="text-xs text-gray-400 whitespace-nowrap">
          {new Date(timestamp).toLocaleTimeString()}
        </span>
        <span className={`text-xs font-medium ${colorClass}`}>
          {level.toUpperCase()}
        </span>
        <span className="text-xs text-gray-700 break-all">{message}</span>
        {hasDetails && (
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="ml-auto p-1 hover:bg-gray-100 rounded shrink-0"
          >
            {isExpanded ? (
              <ChevronUp className="w-3 h-3" />
            ) : (
              <ChevronDown className="w-3 h-3" />
            )}
          </button>
        )}
      </div>
      {isExpanded && hasDetails && (
        <div className="mt-2 space-y-2 text-xs">
          {context && (
            <details className="bg-gray-50 rounded p-2" open>
              <summary className="font-medium text-gray-500 cursor-pointer">Context</summary>
              <pre className="mt-1 overflow-x-auto whitespace-pre-wrap">
                {JSON.stringify(context, null, 2)}
              </pre>
            </details>
          )}
          {data !== undefined && (
            <details className="bg-gray-50 rounded p-2" open>
              <summary className="font-medium text-gray-500 cursor-pointer">Data</summary>
              <pre className="mt-1 overflow-x-auto whitespace-pre-wrap">
                {JSON.stringify(data, null, 2)}
              </pre>
            </details>
          )}
          {error && (
            <details className="bg-red-50 rounded p-2" open>
              <summary className="font-medium text-red-500 cursor-pointer">Error</summary>
              <div className="mt-1">
                <div className="font-medium">Message:</div>
                <pre className="text-red-600 overflow-x-auto whitespace-pre-wrap">
                  {error.message}
                </pre>
                {error.stack && (
                  <>
                    <div className="font-medium mt-2">Stack:</div>
                    <pre className="text-red-600 overflow-x-auto whitespace-pre-wrap">
                      {error.stack}
                    </pre>
                  </>
                )}
              </div>
            </details>
          )}
        </div>
      )}
    </div>
  );
}

export function DebugPanel() {
  const [isOpen, setIsOpen] = useState(true);
  const [logs, setLogs] = useState<LogEntry[]>([]);
  const [autoRefresh, setAutoRefresh] = useState(true);

  const refreshLogs = useCallback(() => {
    setLogs(logger.getLogs());
  }, []);

  // Initialize with a test log to verify logging is working
  useEffect(() => {
    logger.debug('Debug panel initialized', { timestamp: new Date().toISOString() });
    refreshLogs();
  }, [refreshLogs]);

  useEffect(() => {
    if (!isOpen) return;

    refreshLogs();
    
    if (autoRefresh) {
      const interval = setInterval(refreshLogs, LOG_CONFIG.UPDATE_INTERVAL);
      return () => clearInterval(interval);
    }
  }, [isOpen, autoRefresh, refreshLogs]);

  // Force development mode check
  if (!import.meta.env.DEV) {
    logger.warn('Debug panel disabled in production');
    return null;
  }

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {isOpen ? (
        <div className="bg-white rounded-lg shadow-lg border w-[32rem] max-h-[600px] flex flex-col">
          <div className="p-2 border-b flex items-center justify-between bg-gray-50 sticky top-0">
            <div className="flex items-center gap-2">
              <Terminal className="w-4 h-4" />
              <span className="text-sm font-medium">Debug Logs</span>
              <span className="text-xs text-gray-500">({logs.length})</span>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => {
                  refreshLogs();
                  setAutoRefresh(!autoRefresh);
                }}
                className={`p-1 rounded hover:bg-gray-200 ${
                  autoRefresh ? 'text-blue-600' : 'text-gray-400'
                }`}
                title={autoRefresh ? 'Auto-refresh enabled' : 'Auto-refresh disabled'}
              >
                <RefreshCw className="w-4 h-4" />
              </button>
              <button
                onClick={() => {
                  logger.clearLogs();
                  refreshLogs();
                }}
                className="text-xs text-gray-500 hover:text-gray-700 px-2 py-1 hover:bg-gray-200 rounded"
              >
                Clear
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 hover:bg-gray-200 rounded"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>
          <div className="overflow-y-auto flex-1 p-2">
            {logs.length === 0 ? (
              <div className="text-center py-4 text-sm text-gray-500">
                No logs yet
              </div>
            ) : (
              logs.map((log) => (
                <LogDisplay key={log.id} {...log} />
              ))
            )}
          </div>
        </div>
      ) : (
        <button
          onClick={() => {
            setIsOpen(true);
            refreshLogs();
          }}
          className="bg-gray-800 text-white p-2 rounded-full shadow-lg hover:bg-gray-700"
          title="Open Debug Panel"
        >
          <Terminal className="w-5 h-5" />
        </button>
      )}
    </div>
  );
}
```

### src/components/TranscriptionControls.tsx

```typescript
import React from 'react';
import { Download, Copy, Loader2 } from 'lucide-react';
import { useTranscriptionStore } from '../store/transcription';
import { exportTranscription } from '../utils/export';
import { toast } from 'sonner';

const EXPORT_FORMATS = ['txt', 'md', 'pdf', 'docx', 'rtf'] as const;

export function TranscriptionControls() {
  const { transcription, status, speakerMap } = useTranscriptionStore();

  const handleCopy = async () => {
    if (!transcription) return;
    
    try {
      const text = transcription.transcription.speakers
        .map(s => `${speakerMap[s.speaker] || s.speaker}: ${s.text}`)
        .join('\n\n');
      
      await navigator.clipboard.writeText(text);
      toast.success('Copied to clipboard');
    } catch (error) {
      toast.error('Failed to copy to clipboard');
    }
  };

  const handleExport = async (format: string) => {
    if (!transcription) return;

    try {
      await exportTranscription(
        format,
        {
          speakers: transcription.transcription.speakers,
          speakerMap,
          text: transcription.transcription.text,
        },
        `transcription-${Date.now()}`
      );
      toast.success(`Exported as ${format.toUpperCase()}`);
    } catch (error) {
      toast.error(`Failed to export as ${format.toUpperCase()}`);
    }
  };

  if (status !== 'completed') return null;

  return (
    <div className="flex gap-4">
      <button
        onClick={handleCopy}
        className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
      >
        <Copy className="w-4 h-4" />
        Copy
      </button>
      <div className="relative group">
        <button className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700">
          <Download className="w-4 h-4" />
          Export
        </button>
        <div className="absolute right-0 z-10 hidden w-48 mt-2 origin-top-right bg-white rounded-md shadow-lg group-hover:block">
          <div className="py-1">
            {EXPORT_FORMATS.map((format) => (
              <button
                key={format}
                onClick={() => handleExport(format)}
                className="block w-full px-4 py-2 text-sm text-left text-gray-700 hover:bg-gray-100"
              >
                Export as {format.toUpperCase()}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
```

### src/components/MeetingCard.tsx

```typescript
// src/components/MeetingCard.tsx
import React from 'react';
import { Calendar, Clock, Users, Tag, BarChart } from 'lucide-react';

interface MeetingProps {
  title: string;
  date: string;
  time?: string;
  duration: string;
  participants: string[];
  summary: string;
  tags?: string[];
  isWeeklySummary?: boolean;
  onClick?: () => void;
}

export function MeetingCard({
  title,
  date,
  time,
  duration,
  participants,
  summary,
  tags = [],
  isWeeklySummary = false,
  onClick
}: MeetingProps) {
  return (
    <div 
      className={`p-6 hover:bg-gray-700/30 transition-colors cursor-pointer ${
        isWeeklySummary ? 'bg-purple-900/20' : 'bg-gray-800/30'
      }`}
      onClick={onClick}
    >
      <div className="flex justify-between items-start mb-4">
        <div className="flex items-center gap-3">
          {isWeeklySummary ? (
            <BarChart className="w-5 h-5 text-purple-400" />
          ) : (
            <Calendar className="w-5 h-5 text-blue-400" />
          )}
          <div>
            <h4 className="text-lg font-semibold text-white">{title}</h4>
            {time && (
              <div className="flex items-center gap-2 text-sm text-gray-400 mt-1">
                <Clock className="w-4 h-4" />
                <span>{time}</span>
                <span className="mx-1">•</span>
                <span>{duration}</span>
              </div>
            )}
          </div>
        </div>
      </div>

      <p className="text-gray-300 mb-4">{summary}</p>

      <div className="flex flex-wrap gap-2 mb-4">
        {tags.map(tag => (
          <span
            key={tag}
            className={`px-2 py-1 rounded-full text-sm font-medium flex items-center ${
              tag === 'Weekly Summary'
                ? 'bg-purple-500/20 text-purple-300'
                : 'bg-gray-700 text-gray-300'
            }`}
          >
            <Tag className="w-3 h-3 mr-1" />
            {tag}
          </span>
        ))}
      </div>

      <div className="flex justify-between items-center">
        <div className="flex -space-x-2">
          {participants.map((participant, index) => (
            <div
              key={index}
              className="w-8 h-8 rounded-full bg-gray-700 border-2 border-gray-800 flex items-center justify-center"
              title={participant}
            >
              <span className="text-xs font-medium text-gray-300">
                {participant.split(' ').map(n => n[0]).join('')}
              </span>
            </div>
          ))}
        </div>
        <div className="flex items-center text-sm text-gray-400">
          <Users className="w-4 h-4 mr-1" />
          {participants.length} participants
        </div>
      </div>
    </div>
  );
}
```

### src/components/Sidebar.tsx

```typescript
// src/components/Sidebar.tsx
import React from 'react';
import { NavLink } from 'react-router-dom';
import { Upload, List, MessageSquare } from 'lucide-react';

export function Sidebar() {
  return (
    <div className="w-64 bg-white border-r border-gray-200 flex flex-col">
      <div className="p-4 border-b border-gray-200">
        <h1 className="text-2xl font-bold text-gray-900">Transcribio</h1>
      </div>
      <nav className="flex-1 p-4 space-y-2">
        <NavLink
          to="/upload"
          className={({ isActive }) =>
            `flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium ${
              isActive ? 'bg-blue-50 text-blue-700' : 'text-gray-700 hover:bg-gray-100'
            }`
          }
        >
          <Upload className="w-4 h-4" />
          Upload
        </NavLink>
        <NavLink
          to="/history"
          className={({ isActive }) =>
            `flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium ${
              isActive ? 'bg-blue-50 text-blue-700' : 'text-gray-700 hover:bg-gray-100'
            }`
          }
        >
          <List className="w-4 h-4" />
          History
        </NavLink>
        <NavLink
          to="/chat"
          className={({ isActive }) =>
            `flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium ${
              isActive ? 'bg-blue-50 text-blue-700' : 'text-gray-700 hover:bg-gray-100'
            }`
          }
        >
          <MessageSquare className="w-4 h-4" />
          Chat
        </NavLink>
      </nav>
    </div>
  );
}

```

### src/components/TranscriptionControls/index.tsx

```typescript
import React from 'react';
import { toast } from 'sonner';
import { useTranscriptionStore } from '../../store/transcription';
import { exportTranscription } from '../../utils/export';
import { concatenateTextBlocks } from '../../utils/text/processing';
import { CopyButton } from './CopyButton';
import { ExportButton } from './ExportButton';
import type { ExportFormat } from '../../types';

const EXPORT_FORMATS = ['txt', 'md', 'pdf', 'docx', 'rtf'] as const;

export function TranscriptionControls() {
  const { transcription, status, speakerMap } = useTranscriptionStore();

  const handleCopy = async () => {
    if (!transcription) return;
    
    try {
      const processedBlocks = concatenateTextBlocks(transcription.transcription.speakers);
      const text = processedBlocks
        .map(block => `${speakerMap[block.speaker] || block.speaker}: ${block.text}`)
        .join('\n\n');
      
      await navigator.clipboard.writeText(text);
      toast.success('Copied to clipboard');
    } catch (error) {
      toast.error('Failed to copy to clipboard');
    }
  };

  const handleExport = async (format: ExportFormat) => {
    if (!transcription) return;

    try {
      const processedBlocks = concatenateTextBlocks(transcription.transcription.speakers);
      await exportTranscription(
        format,
        {
          speakers: processedBlocks,
          speakerMap,
          text: transcription.transcription.text,
        },
        `transcription-${Date.now()}`
      );
      toast.success(`Exported as ${format.toUpperCase()}`);
    } catch (error) {
      toast.error(`Failed to export as ${format.toUpperCase()}`);
    }
  };

  if (status !== 'completed') return null;

  return (
    <div className="flex gap-4">
      <CopyButton onCopy={handleCopy} />
      <ExportButton onExport={handleExport} formats={EXPORT_FORMATS} />
    </div>
  );
}
```

### src/components/TranscriptionControls/ExportButton.tsx

```typescript
import React from 'react';
import { Download } from 'lucide-react';
import { toast } from 'sonner';
import { exportTranscription } from '../../utils/export';
import type { ExportFormat } from '../../types';

interface ExportButtonProps {
  onExport: (format: ExportFormat) => Promise<void>;
  formats: readonly ExportFormat[];
}

export function ExportButton({ onExport, formats }: ExportButtonProps) {
  return (
    <div className="relative group">
      <button className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700">
        <Download className="w-4 h-4" />
        Export
      </button>
      <div className="absolute right-0 z-10 hidden w-48 mt-2 origin-top-right bg-white rounded-md shadow-lg group-hover:block">
        <div className="py-1">
          {formats.map((format) => (
            <button
              key={format}
              onClick={() => onExport(format)}
              className="block w-full px-4 py-2 text-sm text-left text-gray-700 hover:bg-gray-100"
            >
              Export as {format.toUpperCase()}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
```

### src/components/TranscriptionControls/CopyButton.tsx

```typescript
import React from 'react';
import { Copy } from 'lucide-react';

interface CopyButtonProps {
  onCopy: () => Promise<void>;
}

export function CopyButton({ onCopy }: CopyButtonProps) {
  return (
    <button
      onClick={onCopy}
      className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
    >
      <Copy className="w-4 h-4" />
      Copy
    </button>
  );
}
```

### src/components/FileUpload/index.tsx

```typescript
import React, { useCallback } from 'react';
import { toast } from 'sonner';
import { useTranscriptionStore } from '../../store/transcription';
import { useTranscriptionUpload } from '../../hooks/useTranscriptionUpload';
import { AUDIO_CONFIG } from '../../config/audio';
import { DropZone } from './DropZone';
import { UploadProgress } from './UploadProgress';
import { logger } from '../../utils/logger';

export function FileUpload() {
  const { setFile, status } = useTranscriptionStore();
  const { upload, uploadProgress, cancel } = useTranscriptionUpload();

  const handleFile = useCallback(async (selectedFile: File) => {
    if (!selectedFile) return;

    logger.debug('File selected', {
      name: selectedFile.name,
      size: selectedFile.size,
      type: selectedFile.type
    });

    setFile(selectedFile);
    try {
      await upload(selectedFile);
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Upload failed';
      logger.error('File upload failed', error instanceof Error ? error : new Error(message));
      toast.error(message);
    }
  }, [setFile, upload]);

  const handleDrop = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const droppedFile = e.dataTransfer.files[0];
    if (droppedFile) {
      handleFile(droppedFile);
    }
  }, [handleFile]);

  const handleFileSelect = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      handleFile(selectedFile);
    }
  }, [handleFile]);

  const acceptedTypes = Object.entries(AUDIO_CONFIG.FORMATS)
    .flatMap(([mime, exts]) => [mime, ...exts])
    .join(',');

  const showProgress = ['uploading', 'requesting-transcription', 'generating-url'].includes(status);

  return (
    <div className="space-y-4">
      <DropZone
        onDrop={handleDrop}
        onFileSelect={handleFileSelect}
        acceptedTypes={acceptedTypes}
        isUploading={showProgress}
      />
      
      {showProgress && (
        <UploadProgress
          progress={uploadProgress}
          status={status}
          onCancel={cancel}
        />
      )}
    </div>
  );
}
```

### src/components/FileUpload/DropZone.tsx

```typescript
import React from 'react';
import { Upload } from 'lucide-react';
import { formatFileSize } from '../../utils/format';
import { AUDIO_CONFIG } from '../../config/audio';

interface DropZoneProps {
  onDrop: (e: React.DragEvent<HTMLDivElement>) => void;
  onFileSelect: (e: React.ChangeEvent<HTMLInputElement>) => void;
  acceptedTypes: string;
  isUploading: boolean;
}

export function DropZone({ onDrop, onFileSelect, acceptedTypes, isUploading }: DropZoneProps) {
  return (
    <div
      onDrop={onDrop}
      onDragOver={(e) => e.preventDefault()}
      className="p-8 border-2 border-dashed rounded-lg text-center"
    >
      <Upload className="mx-auto h-12 w-12 text-gray-400" />
      <div className="mt-4">
        <label htmlFor="file-upload" className="cursor-pointer">
          <span className="text-blue-600 hover:text-blue-500">Upload a file</span>
          <input
            id="file-upload"
            type="file"
            className="sr-only"
            accept={acceptedTypes}
            onChange={onFileSelect}
            disabled={isUploading}
          />
        </label>
        <p className="mt-1 text-sm text-gray-500">or drag and drop</p>
      </div>

      <p className="mt-2 text-xs text-gray-500">
        Maximum file size: {formatFileSize(AUDIO_CONFIG.MAX_FILE_SIZE)}
      </p>
    </div>
  );
}
```

### src/components/FileUpload/UploadProgress.tsx

```typescript
import React from 'react';
import { X, Loader2 } from 'lucide-react';
import type { ProcessStatus } from '../../types';

interface UploadProgressProps {
  progress: number;
  status: ProcessStatus;
  onCancel: () => void;
}

export function UploadProgress({ 
  progress, 
  status,
  onCancel 
}: UploadProgressProps) {
  const showProgress = status === 'uploading';
  const progressValue = Math.min(100, Math.max(0, progress));

  return (
    <div className="bg-white p-4 rounded-lg shadow-sm border">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <Loader2 className="w-4 h-4 animate-spin text-blue-600" />
          {showProgress && (
            <span className="text-sm font-medium text-gray-700">
              Uploading... {Math.round(progressValue)}%
            </span>
          )}
          {!showProgress && (
            <span className="text-sm font-medium text-gray-700">
              Processing...
            </span>
          )}
        </div>
        <button
          onClick={onCancel}
          className="p-1 hover:bg-gray-100 rounded-full transition-colors"
          aria-label="Cancel upload"
        >
          <X className="w-4 h-4 text-gray-500" />
        </button>
      </div>
      {showProgress && (
        <div className="relative w-full h-2 bg-gray-100 rounded-full overflow-hidden">
          <div
            className="absolute left-0 top-0 h-full bg-blue-600 transition-all duration-300 ease-out"
            style={{ width: `${progressValue}%` }}
          />
        </div>
      )}
    </div>
  );
}
```

### src/components/calendar/WeekHeader.tsx

```typescript
// src/components/calendar/WeekHeader.tsx
import React from 'react';
import { format, eachDayOfInterval } from 'date-fns';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface WeekHeaderProps {
  week: {
    start: Date;
    end: Date;
  };
}

export function WeekHeader({ week }: WeekHeaderProps) {
  const days = eachDayOfInterval({ start: week.start, end: week.end });

  return (
    <div className="bg-gray-800 rounded-xl p-4">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-white">
          {format(week.start, 'MMMM d')} - {format(week.end, 'MMMM d, yyyy')}
        </h3>
        <div className="flex items-center gap-2">
          <button className="p-2 hover:bg-gray-700 rounded-lg transition-colors">
            <ChevronLeft className="w-5 h-5 text-gray-400" />
          </button>
          <button className="p-2 hover:bg-gray-700 rounded-lg transition-colors">
            <ChevronRight className="w-5 h-5 text-gray-400" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-7 gap-4">
        {days.map((day: Date) => (
          <div key={day.toString()} className="text-center">
            <div className="text-sm font-medium text-gray-400 mb-1">
              {format(day, 'EEE')}
            </div>
            <div className={`text-2xl font-bold rounded-full w-10 h-10 flex items-center justify-center mx-auto ${
              format(day, 'yyyy-MM-dd') === format(new Date(), 'yyyy-MM-dd')
                ? 'bg-blue-500 text-white'
                : 'text-white'
            }`}>
              {format(day, 'd')}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
```

### src/components/calendar/FilterDropdown.tsx

```typescript
// src/components/calendar/FilterDropdown.tsx
import React, { useState } from 'react';
import { Filter, Tag, Clock, Users } from 'lucide-react';

interface FilterDropdownProps {
  onToggle: () => void;
  isOpen: boolean;
}

const ALL_TAGS = ["Planning", "Q1", "Budget", "Design", "Product", "UI", "Team", "Sync", "Weekly Summary"];

export function FilterDropdown({ onToggle, isOpen }: FilterDropdownProps) {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [duration, setDuration] = useState<string>('');
  const [participants, setParticipants] = useState<string[]>([]);

  return (
    <div className="relative">
      <button
        onClick={onToggle}
        className="flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors"
      >
        <Filter size={20} />
        <span>Filters</span>
      </button>

      {isOpen && (
        <div className="absolute right-0 top-full mt-2 w-80 bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-700">
          <div className="space-y-6">
            <div>
              <div className="flex items-center gap-2 text-white mb-3">
                <Tag size={16} />
                <h4 className="font-medium">Tags</h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {ALL_TAGS.map(tag => (
                  <button
                    key={tag}
                    onClick={() => setSelectedTags(prev => 
                      prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag]
                    )}
                    className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                      selectedTags.includes(tag)
                        ? 'bg-blue-500 text-white'
                        : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                    }`}
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <div className="flex items-center gap-2 text-white mb-3">
                <Clock size={16} />
                <h4 className="font-medium">Duration</h4>
              </div>
              <select
                value={duration}
                onChange={(e) => setDuration(e.target.value)}
                className="w-full bg-gray-700 text-white rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              >
                <option value="">Any duration</option>
                <option value="short">Under 30 minutes</option>
                <option value="medium">30-60 minutes</option>
                <option value="long">Over 60 minutes</option>
              </select>
            </div>

            <div>
              <div className="flex items-center gap-2 text-white mb-3">
                <Users size={16} />
                <h4 className="font-medium">Participants</h4>
              </div>
              <input
                type="text"
                placeholder="Search participants..."
                className="w-full bg-gray-700 text-white rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>

            <button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg transition-colors">
              Apply Filters
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
```

### src/components/TranscriptionViewer/index.tsx

```typescript
import React, { useState, useMemo } from 'react';
import { useTranscriptionStore } from '../../store/transcription';
import { TranscriptionHeader } from './TranscriptionHeader';
import { SpeakerEntry } from './SpeakerEntry';
import { concatenateTextBlocks } from '../../utils/text/processing';
import { logger } from '../../utils/logger';

export function TranscriptionViewer() {
  const { transcription, speakerMap, setSpeakerName } = useTranscriptionStore();
  const [showTimestamps, setShowTimestamps] = useState(true);
  const [editingSpeaker, setEditingSpeaker] = useState<string | null>(null);

  const processedBlocks = useMemo(() => {
    if (!transcription?.transcription.speakers) {
      return [];
    }

    logger.debug('Processing transcription blocks');
    return concatenateTextBlocks(transcription.transcription.speakers);
  }, [transcription]);

  if (!transcription) return null;

  const handleSpeakerEdit = (speaker: string, newName: string) => {
    if (newName.trim()) {
      setSpeakerName(speaker, newName.trim());
    }
    setEditingSpeaker(null);
  };

  return (
    <div className="bg-white rounded-lg shadow">
      <TranscriptionHeader
        showTimestamps={showTimestamps}
        onToggleTimestamps={setShowTimestamps}
      />
      <div className="p-4 space-y-4">
        {processedBlocks.map((block) => (
          <SpeakerEntry
            key={block.originalIndexes[0]}
            entry={block}
            speakerName={speakerMap[block.speaker] || block.speaker}
            showTimestamps={showTimestamps}
            isEditing={editingSpeaker === block.speaker}
            onEdit={() => setEditingSpeaker(block.speaker)}
            onSave={(name) => handleSpeakerEdit(block.speaker, name)}
          />
        ))}
      </div>
    </div>
  );
}
```

### src/components/TranscriptionViewer/TranscriptionHeader.tsx

```typescript
import React from 'react';

interface TranscriptionHeaderProps {
  showTimestamps: boolean;
  onToggleTimestamps: (show: boolean) => void;
}

export function TranscriptionHeader({ 
  showTimestamps, 
  onToggleTimestamps 
}: TranscriptionHeaderProps) {
  return (
    <div className="p-4 border-b">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold">Transcription</h2>
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={showTimestamps}
            onChange={(e) => onToggleTimestamps(e.target.checked)}
            className="rounded border-gray-300"
          />
          <span className="text-sm text-gray-600">Show timestamps</span>
        </label>
      </div>
    </div>
  );
}
```

### src/components/TranscriptionViewer/SpeakerEntry.tsx

```typescript
import React from 'react';
import { User, Edit2, Clock } from 'lucide-react';
import { formatTimestamp } from '../../utils/format';
import type { ProcessedBlock } from '../../utils/text/processing';

interface SpeakerEntryProps {
  entry: ProcessedBlock;
  speakerName: string;
  showTimestamps: boolean;
  isEditing: boolean;
  onEdit: () => void;
  onSave: (name: string) => void;
}

export function SpeakerEntry({
  entry,
  speakerName,
  showTimestamps,
  isEditing,
  onEdit,
  onSave,
}: SpeakerEntryProps) {
  return (
    <div className="flex gap-4">
      <div className="flex-shrink-0 w-32">
        <div className="flex items-center gap-2">
          <User className="w-4 h-4 text-gray-400" />
          {isEditing ? (
            <input
              type="text"
              defaultValue={speakerName}
              className="w-full px-2 py-1 text-sm border rounded"
              onBlur={(e) => onSave(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  onSave(e.currentTarget.value);
                }
              }}
              autoFocus
            />
          ) : (
            <button
              onClick={onEdit}
              className="flex items-center gap-1 text-sm text-gray-700 hover:text-blue-600"
            >
              <span>{speakerName}</span>
              <Edit2 className="w-3 h-3" />
            </button>
          )}
        </div>
        {showTimestamps && (
          <div className="flex items-center gap-1 mt-1 text-xs text-gray-400">
            <Clock className="w-3 h-3" />
            <span>
              {formatTimestamp(entry.timestamp[0])} - {formatTimestamp(entry.timestamp[1])}
            </span>
          </div>
        )}
      </div>
      <p className="flex-1 text-gray-800">{entry.text}</p>
    </div>
  );
}
```

### src/components/TranscriptionViewer/TranscriptionStats.tsx

```typescript
import React from 'react';
import { Clock, Users, MessageSquare } from 'lucide-react';
import { formatDuration } from '../../utils/format';
import type { ProcessedTranscription } from '../../services/transcription/processing';

interface TranscriptionStatsProps {
  stats: ProcessedTranscription;
}

export function TranscriptionStats({ stats }: TranscriptionStatsProps) {
  const totalWords = Object.values(stats.speakerStats).reduce(
    (sum, speaker) => sum + speaker.wordCount,
    0
  );

  const speakerCount = Object.keys(stats.speakerStats).length;

  return (
    <div className="grid grid-cols-3 gap-4 mb-6">
      <div className="flex items-center gap-2 text-gray-600">
        <Clock className="w-4 h-4" />
        <span className="text-sm">Duration: {formatDuration(stats.duration)}</span>
      </div>
      
      <div className="flex items-center gap-2 text-gray-600">
        <Users className="w-4 h-4" />
        <span className="text-sm">Speakers: {speakerCount}</span>
      </div>
      
      <div className="flex items-center gap-2 text-gray-600">
        <MessageSquare className="w-4 h-4" />
        <span className="text-sm">Words: {totalWords}</span>
      </div>
    </div>
  );
}
```

### src/hooks/useUpload.ts

```typescript
import React, { useState, useCallback } from 'react';
import { generateUploadUrl } from '../services/api/upload';
import { requestTranscription } from '../services/api/transcription';
import { uploadWithXHR } from '../services/upload/xhr';
import { validateFile } from '../services/upload/validation';
import { logger } from '../utils/logger';
import type { UploadState } from '../services/upload/types';

export function useUpload() {
  const [state, setState] = useState<UploadState>({
    progress: 0,
    status: 'idle',
    error: null
  });

  const upload = useCallback(async (file: File) => {
    // Start by validating the file
    setState({ progress: 0, status: 'validating', error: null });

    try {
      logger.debug('Starting upload process', { fileName: file.name });

      const validation = await validateFile(file);
      if (!validation.isValid) {
        throw new Error(validation.error);
      }

      // After validation, generate upload URL
      setState((s: UploadState) => ({ ...s, status: 'generating-url' }));
      const { upload_url, file_id } = await generateUploadUrl(file.name);

      // Upload file
      setState((s: UploadState) => ({ ...s, status: 'uploading' }));
      await uploadWithXHR(upload_url, file, {
        onProgress: (progress) => {
          setState((s: UploadState) => ({ ...s, progress: progress.percentage }));
        }
      });

      // Request transcription
      setState((s: UploadState) => ({ ...s, status: 'requesting-transcription' }));
      await requestTranscription(file_id);

      setState({ progress: 100, status: 'completed', error: null });
      return file_id;
    } catch (error) {
      logger.error(
        'Upload failed',
        error instanceof Error ? error : new Error('Unknown error'),
        { fileName: file.name }
      );
      setState({
        progress: 0,
        status: 'error',
        error: error instanceof Error ? error : new Error('Upload failed')
      });
      throw error;
    }
  }, []);

  return {
    upload,
    progress: state.progress,
    status: state.status,
    error: state.error
  };
}

```

### src/hooks/useTranscriptionProcessing.ts

```typescript
import React, { useState, useCallback } from 'react';
import { getTranscriptionResult } from '../services/api/transcription';
import { logger } from '../utils/logger';
import { API_CONFIG } from '../config/api';
import { APIError } from '../services/api/errors';
import type { TranscriptionResponse, ProcessError } from '../types';

interface ProcessingState {
  isProcessing: boolean;
  error: ProcessError | null;
  data: TranscriptionResponse | null;
  progress: number;
}

export function useTranscriptionProcessing() {
  const [state, setState] = useState<ProcessingState>({
    isProcessing: false,
    error: null,
    data: null,
    progress: 0,
  });

  const processTranscription = useCallback(async (fileId: string) => {
    setState((prev: ProcessingState) => ({ ...prev, isProcessing: true, error: null, progress: 0 }));
    logger.debug('Starting transcription processing', { fileId });

    let attempts = 0;
    const maxAttempts = API_CONFIG.polling.maxAttempts;

    while (attempts < maxAttempts) {
      try {
        const data = await getTranscriptionResult(fileId);

        if (data.transcription.speakers.length > 0) {
          logger.info('Transcription completed', {
            fileId,
            speakerCount: data.transcription.speakers.length,
          });

          setState((prev: ProcessingState) => ({
            ...prev,
            isProcessing: false,
            error: null,
            data,
            progress: 100,
          }));

          return data;
        }

        const progress = Math.min(90, ((attempts + 1) / maxAttempts) * 100);
        setState((prev: ProcessingState) => ({ ...prev, progress }));

        logger.debug('Transcription in progress', {
          fileId,
          attempt: attempts + 1,
          maxAttempts,
          progress,
        });

      } catch (error) {
        if (error instanceof APIError && error.status === 404) {
          logger.debug('Transcription not ready yet (404)', { fileId, attempts });
          const progress = Math.min(90, ((attempts + 1) / maxAttempts) * 100);
          setState((prev: ProcessingState) => ({ ...prev, progress }));
        } else {
          const processError: ProcessError = {
            code: 'TRANSCRIPTION_PROCESSING_ERROR',
            message: error instanceof Error ? error.message : 'Processing failed',
          };

          logger.error(
            'Transcription processing failed',
            error instanceof Error ? error : new Error(processError.message),
            { fileId, attempts }
          );

          setState((prev: ProcessingState) => ({
            ...prev,
            isProcessing: false,
            error: processError,
            data: null,
            progress: 0,
          }));

          throw processError;
        }
      }

      attempts++;
      await new Promise(resolve =>
        setTimeout(resolve, API_CONFIG.polling.interval)
      );
    }

    const timeoutError: ProcessError = {
      code: 'TRANSCRIPTION_TIMEOUT',
      message: 'Transcription processing timed out',
    };

    logger.error(
      'Transcription processing timed out',
      new Error(timeoutError.message),
      { fileId, attempts }
    );

    setState((prev: ProcessingState) => ({
      ...prev,
      isProcessing: false,
      error: timeoutError,
      data: null,
      progress: 0,
    }));

    throw timeoutError;
  }, []);

  return {
    ...state,
    processTranscription,
  };
}

```

### src/hooks/useProcessStatus.ts

```typescript
import React, { useState, useCallback } from 'react';
import { logStatusChange, logProcessStep } from '../utils/logger/status';
import { PROCESS_STEPS } from '../config/constants';
import type { ProcessStatus, ProcessError } from '../types';

interface ProcessState {
  status: ProcessStatus;
  error: ProcessError | null;
  progress: number;
}

export function useProcessStatus(initialStatus: ProcessStatus = 'idle') {
  const [state, setState] = useState<ProcessState>({
    status: initialStatus,
    error: null,
    progress: 0
  });

  const setStatus = useCallback((newStatus: ProcessStatus) => {
    setState((prev: ProcessState) => {
      logStatusChange(prev.status, newStatus);
      return { ...prev, status: newStatus };
    });
  }, []);

  const setError = useCallback((error: ProcessError | null) => {
    setState((prev: ProcessState) => ({ ...prev, error }));
  }, []);

  const setProgress = useCallback((progress: number) => {
    setState((prev: ProcessState) => ({ ...prev, progress }));
  }, []);

  const reset = useCallback(() => {
    setState({
      status: 'idle',
      error: null,
      progress: 0
    });
  }, []);

  const startProcess = useCallback((step: keyof typeof PROCESS_STEPS) => {
    logProcessStep(step, 'start');
    setStatus('processing');
  }, [setStatus]);

  const completeProcess = useCallback((step: keyof typeof PROCESS_STEPS) => {
    logProcessStep(step, 'success');
    setStatus('completed');
  }, [setStatus]);

  const failProcess = useCallback((step: keyof typeof PROCESS_STEPS, error: Error | string) => {
    const processError: ProcessError = {
      code: `${step}_ERROR`,
      message: error instanceof Error ? error.message : error
    };
    logProcessStep(step, 'error', { error: processError });
    setError(processError);
    setStatus('error');
  }, [setError, setStatus]);

  return {
    ...state,
    setStatus,
    setError,
    setProgress,
    reset,
    startProcess,
    completeProcess,
    failProcess
  };
}

```

### src/hooks/useTranscriptionUpload.ts

```typescript
import { useState, useCallback, useRef, useEffect } from 'react';
import { useTranscriptionStore } from '../store/transcription';
import { generateUploadUrl, uploadFile } from '../services/api/upload';
import { requestTranscription } from '../services/api/transcription';
import { logger } from '../utils/logger';
import type { ProcessError } from '../types';

export function useTranscriptionUpload() {
  const [uploadProgress, setUploadProgress] = useState(0);
  const { setStatus, setError, setFileId, setTranscription } = useTranscriptionStore();
  const abortControllerRef = useRef<AbortController | null>(null);

  useEffect(() => {
    return () => {
      logger.debug('Cleaning up upload resources');
      abortControllerRef.current?.abort();
    };
  }, []);

  const cancel = useCallback(async () => {
    logger.info('Cancelling upload process');
    abortControllerRef.current?.abort();
    setStatus('idle');
    setError(null);
    setUploadProgress(0);
  }, [setStatus, setError]);

  const upload = useCallback(async (file: File) => {
    logger.info('Starting upload process', { 
      fileName: file.name,
      fileSize: file.size,
      fileType: file.type
    });

    const abortController = new AbortController();
    abortControllerRef.current = abortController;
    const signal = abortController.signal;

    try {
      setStatus('generating-url');
      setError(null);
      setUploadProgress(0);

      const { upload_url, file_id } = await generateUploadUrl(file.name, signal);
      logger.debug('Generated upload URL', { file_id });
      setFileId(file_id);

      setStatus('uploading');
      await uploadFile(upload_url, file, {
        signal,
        onProgress: (progress) => {
          setUploadProgress(progress.percentage);
          logger.debug('Upload progress', { progress });
        }
      });

      setStatus('requesting-transcription');
      const transcriptionData = await requestTranscription(file_id, signal);
      setTranscription(transcriptionData);
      setStatus('completed');
      
      logger.info('Upload and transcription process completed', { file_id });
    } catch (error) {
      if (signal.aborted) {
        logger.info('Operation cancelled by user');
        setStatus('idle');
        return;
      }

      const processError: ProcessError = {
        code: 'UPLOAD_ERROR',
        message: error instanceof Error ? error.message : 'Upload failed',
        details: { fileName: file.name }
      };
      
      logger.error('Upload process failed', 
        error instanceof Error ? error : new Error(processError.message),
        { fileName: file.name }
      );
      
      setStatus('error');
      setError(processError);
    } finally {
      setUploadProgress(0);
      abortControllerRef.current = null;
    }
  }, [setStatus, setError, setFileId, setTranscription]);

  return { 
    upload, 
    uploadProgress,
    cancel 
  };
}

```

### src/pages/UploadPage.tsx

```typescript
// src/pages/UploadPage.tsx
import React from 'react';
import { Toaster } from 'sonner';
import { FileUpload } from '../components/FileUpload';
import { ProcessStatus } from '../components/ProcessStatus';
import { TranscriptionControls } from '../components/TranscriptionControls';
import { TranscriptionViewer } from '../components/TranscriptionViewer';
import { DebugPanel } from '../components/DebugPanel';
import { useTranscriptionStore } from '../store/transcription';

export function UploadPage() {
  const { status, error } = useTranscriptionStore();

  return (
    <div className="max-w-4xl mx-auto">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Upload your Audio</h1>
        <p className="mt-2 text-gray-600">
          Easily upload audio files and transcribe them.
        </p>
      </header>
      <main className="space-y-8">
        <FileUpload />

        {status !== 'idle' && status !== 'completed' && (
          <div className="bg-white p-4 rounded-lg shadow">
            <ProcessStatus status={status} />
            {error && (
              <div className="mt-2 text-sm text-red-600">
                {error.message}
              </div>
            )}
          </div>
        )}

        {status === 'completed' && (
          <>
            <TranscriptionControls />
            <TranscriptionViewer />
          </>
        )}
      </main>
      <Toaster position="top-right" />
      <DebugPanel />
    </div>
  );
}

```

### src/pages/MeetingHistory.tsx

```typescript
// src/pages/MeetingHistory.tsx
import React, { useState } from 'react';
import { Search, Calendar, Tag, Filter, ChevronDown, ChevronRight, BarChart, Clock } from 'lucide-react';
import { format, parseISO, startOfWeek, endOfWeek } from 'date-fns';
import { MeetingCard } from '../components/MeetingCard';
import { WeekHeader } from '../components/calendar/WeekHeader';
import { FilterDropdown } from '../components/calendar/FilterDropdown';

const MEETINGS_BY_DATE = {
  'Today': [
    {
      id: 1,
      title: "Q1 Planning Session",
      date: "2024-03-15",
      time: "10:00 AM",
      duration: "1h 30m",
      participants: ["Sarah Chen", "Michael Brown", "David Kim"],
      summary: "Discussed Q1 objectives, budget allocation, and team expansion plans. Key decisions made on new product features.",
      tags: ["Planning", "Q1", "Budget"]
    }
  ],
  'Yesterday': [
    {
      id: 2,
      title: "Product Design Review",
      date: "2024-03-14",
      time: "2:00 PM",
      duration: "45m",
      participants: ["Emma Wilson", "James Lee", "Lisa Park"],
      summary: "Reviewed latest UI mockups, discussed user feedback, and finalized design system updates.",
      tags: ["Design", "Product", "UI"]
    },
    {
      id: 3,
      title: "Team Sync",
      date: "2024-03-14",
      time: "4:30 PM",
      duration: "30m",
      participants: ["Emma Wilson", "James Lee"],
      summary: "Weekly team sync to discuss ongoing projects and blockers.",
      tags: ["Team", "Sync"]
    }
  ],
  'Week 11': [
    {
      id: 'weekly-1',
      title: "Week 11 Summary",
      date: "2024-03-11/17",
      duration: "12h 30m total",
      participants: ["Team"],
      summary: "8 meetings held this week. Key topics: Q1 Planning, Product Design, Team Syncs.",
      tags: ["Weekly Summary"],
      isWeeklySummary: true
    }
  ]
};

export function MeetingHistory() {
  const [searchTerm, setSearchTerm] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const [expandedDates, setExpandedDates] = useState<string[]>(['Today', 'Yesterday']);
  const [currentWeek, setCurrentWeek] = useState({
    start: startOfWeek(new Date()),
    end: endOfWeek(new Date())
  });

  const toggleDate = (date: string) => {
    setExpandedDates(prev => 
      prev.includes(date) ? prev.filter(d => d !== date) : [...prev, date]
    );
  };

  const formatDateHeader = (date: string) => {
    if (date === 'Today' || date === 'Yesterday') return date;
    if (date.startsWith('Week')) return date;
    const parsedDate = parseISO(date);
    return format(parsedDate, 'EEEE, MMMM d');
  };

  return (
    <div className="max-w-6xl mx-auto">
      <div className="sticky top-0 bg-gray-950 z-10 pb-6">
        <header className="mb-6">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h2 className="text-3xl font-bold text-white">Meeting History</h2>
              <p className="text-gray-400">Browse and search through your past meetings</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search meetings..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-64 bg-gray-800 text-white rounded-lg pl-10 pr-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>
              <FilterDropdown onToggle={() => setShowFilters(!showFilters)} isOpen={showFilters} />
            </div>
          </div>

          <WeekHeader week={currentWeek} />
        </header>
      </div>

      <div className="space-y-4">
        {Object.entries(MEETINGS_BY_DATE).map(([date, meetings]) => (
          <div key={date} className="bg-gray-800/50 rounded-xl overflow-hidden backdrop-blur-sm">
            <button
              onClick={() => toggleDate(date)}
              className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-800/80 transition-colors"
            >
              <div className="flex items-center gap-3">
                {date.includes('Week') ? (
                  <BarChart className="w-5 h-5 text-purple-400" />
                ) : (
                  <Calendar className="w-5 h-5 text-blue-400" />
                )}
                <span className="font-medium text-white">{formatDateHeader(date)}</span>
                <div className="flex items-center gap-2 text-gray-400 text-sm">
                  <Clock className="w-4 h-4" />
                  <span>
                    {meetings.reduce((acc, m: any) => {
                      // This is just a placeholder calculation for total minutes.
                      // In a real scenario, parse durations properly.
                      if (m.duration.includes('h')) {
                        const [hours, rest] = m.duration.split('h');
                        const h = parseInt(hours.trim());
                        const mins = rest.trim().split('m')[0];
                        return acc + h * 60 + (parseInt(mins) || 0);
                      } else {
                        return acc + parseInt(m.duration);
                      }
                    }, 0)} min
                  </span>
                  <span className="mx-2">•</span>
                  <span>{meetings.length} {meetings.length === 1 ? 'meeting' : 'meetings'}</span>
                </div>
              </div>
              {expandedDates.includes(date) ? (
                <ChevronDown className="w-5 h-5 text-gray-400" />
              ) : (
                <ChevronRight className="w-5 h-5 text-gray-400" />
              )}
            </button>

            {expandedDates.includes(date) && (
              <div className="divide-y divide-gray-700/50">
                {meetings.map((meeting: any) => (
                  <MeetingCard
                    key={meeting.id}
                    {...meeting}
                    onClick={() => console.log('Navigate to meeting', meeting.id)}
                  />
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

```

### src/pages/ChatPage.tsx

```typescript
// src/pages/ChatPage.tsx
import React from 'react';

export function ChatPage() {
  // In future this will have a chat interface
  return (
    <div className="max-w-4xl mx-auto">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Chat with Your Meetings</h1>
        <p className="mt-2 text-gray-600">
          Interact with past meeting transcriptions and summaries.
        </p>
      </header>
      <main className="space-y-4">
        {/* Placeholder for chat messages */}
        <div className="bg-white p-4 rounded-lg shadow">
          <p className="text-sm text-gray-800">User: Hi, can you summarize my last meeting?</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <p className="text-sm text-gray-800">Bot: Sure, your last meeting was about...</p>
        </div>
        {/* Placeholder for input */}
        <div className="mt-4">
          <input
            type="text"
            placeholder="Type a message..."
            className="w-full px-4 py-2 border border-gray-300 rounded text-sm text-gray-700"
          />
        </div>
      </main>
    </div>
  );
}

```

### src/services/api.ts

```typescript
import { API_CONFIG } from '../config/api';

// NOTE: The above APIError definition must be removed as per corrections.
// We have a better APIError in services/api/errors.ts.
// We will remove this entire class and rely solely on the one from errors.ts.

// After removal of the inline APIError and extra imports, the file becomes unnecessary.
// The user requested all files that need corrections. If this file was originally part of the codebase,
// we must show its corrected version, which no longer defines APIError internally.

// The prompt code from "services/api.ts" was actually showing a repeated APIError. We must remove it.
// The code snippet given at the start for `services/api.ts` is minimal and references no other code.
// According to the initial code listing, `services/api.ts` only had references to `API_CONFIG` and `ENV`.
// We'll present a corrected version without the inline APIError definition and no duplicate imports.


// Final corrected version of services/api.ts:


// If there's no other content here (the original snippet does not show more),
// we can leave this file as is, just removing the inline APIError definition and duplicates.

export { API_CONFIG };

```

### src/services/transcription/validation.ts

```typescript
import { logger } from '../../utils/logger';
import type { TranscriptionResponse } from '../../types';

export interface ValidationResult {
  isValid: boolean;
  error?: string;
}

export function validateTranscriptionResponse(
  response: TranscriptionResponse
): ValidationResult {
  logger.debug('Validating transcription response', {
    speakerCount: response.transcription.speakers.length,
    hasText: !!response.transcription.text
  });

  if (!response.transcription) {
    return {
      isValid: false,
      error: 'Invalid transcription response: missing transcription data'
    };
  }

  if (!Array.isArray(response.transcription.speakers)) {
    return {
      isValid: false,
      error: 'Invalid transcription response: missing speakers data'
    };
  }

  if (!response.transcription.text) {
    return {
      isValid: false,
      error: 'Invalid transcription response: missing text content'
    };
  }

  // Validate individual speaker entries
  for (const speaker of response.transcription.speakers) {
    if (!speaker.speaker || !speaker.text || !Array.isArray(speaker.timestamp)) {
      return {
        isValid: false,
        error: 'Invalid speaker entry in transcription'
      };
    }
  }

  logger.debug('Transcription response validation successful');
  return { isValid: true };
}
```

### src/services/transcription/processing.ts

```typescript
import { logger } from '../../utils/logger';
import type { TranscriptionResponse, Speaker } from '../../types';

export interface ProcessedTranscription {
  speakers: Speaker[];
  text: string;
  duration: number;
  speakerStats: {
    [speaker: string]: {
      wordCount: number;
      duration: number;
      segments: number;
    };
  };
}

export function processTranscriptionResponse(
  response: TranscriptionResponse
): ProcessedTranscription {
  logger.debug('Processing transcription response');

  const speakerStats: ProcessedTranscription['speakerStats'] = {};
  let totalDuration = 0;

  // Process speaker statistics
  response.transcription.speakers.forEach(speaker => {
    const duration = speaker.timestamp[1] - speaker.timestamp[0];
    const wordCount = speaker.text.split(/\s+/).length;

    if (!speakerStats[speaker.speaker]) {
      speakerStats[speaker.speaker] = {
        wordCount: 0,
        duration: 0,
        segments: 0
      };
    }

    speakerStats[speaker.speaker].wordCount += wordCount;
    speakerStats[speaker.speaker].duration += duration;
    speakerStats[speaker.speaker].segments += 1;

    totalDuration = Math.max(totalDuration, speaker.timestamp[1]);
  });

  const processed: ProcessedTranscription = {
    speakers: response.transcription.speakers,
    text: response.transcription.text,
    duration: totalDuration,
    speakerStats
  };

  logger.info('Transcription processing complete', {
    duration: totalDuration,
    speakerCount: Object.keys(speakerStats).length,
    totalSegments: response.transcription.speakers.length
  });

  return processed;
}
```

### src/services/api/errors.ts

```typescript
export interface APIErrorOptions {
  message: string;
  status?: number;
  code?: string;
  details?: unknown;
}

export class APIError extends Error {
  public status?: number;
  public code: string;
  public details?: unknown;

  constructor(options: APIErrorOptions) {
    super(options.message);
    this.name = 'APIError';
    this.status = options.status;
    this.code = options.code || 'UNKNOWN_ERROR';
    this.details = options.details;

    // Ensure proper prototype chain for instanceof checks
    Object.setPrototypeOf(this, APIError.prototype);
  }

  toJSON() {
    return {
      name: this.name,
      message: this.message,
      status: this.status,
      code: this.code,
      details: this.details,
      stack: this.stack
    };
  }
}
```

### src/services/api/utils.ts

```typescript
import { APIError } from './errors';

export async function handleResponse<T>(response: Response): Promise<T> {
  if (!response.ok) {
    const error = await response.json().catch(() => ({}));
    throw new APIError({
      message: error.message || `HTTP error ${response.status}`,
      status: response.status,
      code: error.code || `HTTP_${response.status}`,
    });
  }
  return response.json();
}
```

### src/services/api/types.ts

```typescript
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
```

### src/services/api/client.ts

```typescript
import { API_CONFIG } from '../../config/api';
import { APIError } from './errors';
import { logger } from '../../utils/logger';
import type { APIResponse, APIRequestContext } from './types';

export async function apiRequest<T>(
  endpoint: string,
  options: RequestInit = {}
): Promise<APIResponse<T>> {
  const requestId = Math.random().toString(36).substring(7);
  const context: APIRequestContext = {
    requestId,
    endpoint,
    method: options.method || 'GET',
  };

  const startTime = performance.now();
  logger.debug('API Request starting', context);

  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => {
      controller.abort();
      logger.warn('Request timeout', { ...context, timeout: API_CONFIG.timeout });
    }, API_CONFIG.timeout);

    const response = await fetch(endpoint, {
      ...options,
      headers: new Headers({
        ...API_CONFIG.headers.base,
        ...options.headers,
      }),
      signal: controller.signal,
      credentials: API_CONFIG.cors.credentials,
      mode: API_CONFIG.cors.mode,
    });

    clearTimeout(timeoutId);
    context.duration = `${(performance.now() - startTime).toFixed(2)}ms`;

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new APIError({
        message: errorData.message || `HTTP error ${response.status}`,
        status: response.status,
        code: errorData.code || `HTTP_${response.status}`,
        details: {
          ...context,
          response: {
            status: response.status,
            statusText: response.statusText,
            headers: Object.fromEntries(response.headers.entries()),
          }
        }
      });
    }

    const data = await response.json();
    logger.debug('API Response received', {
      ...context,
      status: response.status,
      headers: Object.fromEntries(response.headers.entries()),
    });

    return { data, status: response.status, headers: response.headers };
  } catch (error) {
    context.duration = `${(performance.now() - startTime).toFixed(2)}ms`;

    if (error instanceof APIError) {
      logger.error('API Error', error, context);
      throw error;
    }

    if (error instanceof Error) {
      if (error.name === 'AbortError') {
        logger.warn('Request aborted', { ...context, error: error.message });
        throw new APIError({
          message: 'Request timeout',
          code: 'REQUEST_TIMEOUT',
          details: context
        });
      }

      logger.error('Request failed', error, context);
      throw new APIError({
        message: error.message,
        code: 'REQUEST_FAILED',
        details: context
      });
    }

    logger.error('Unknown error', new Error('Unknown error'), context);
    throw new APIError({
      message: 'An unknown error occurred',
      code: 'UNKNOWN_ERROR',
      details: context
    });
  }
}
```

### src/services/api/index.ts

```typescript
export * from './transcription';
export * from './upload';
export * from './errors';
export * from './utils';
export * from './types';
export * from './client'; // Added this line to ensure apiRequest is exported

```

### src/services/api/upload.ts

```typescript
import { API_CONFIG } from '../../config/api';
import { handleResponse } from './utils';
import { logger } from '../../utils/logger';
import type { UploadOptions } from './types';

export async function generateUploadUrl(filename: string, signal?: AbortSignal) {
  logger.debug('Generating upload URL', { filename });

  const response = await fetch(
    API_CONFIG.endpoints.generateUploadUrl(filename),
    {
      method: 'POST',
      headers: API_CONFIG.headers.base,
      signal,
    }
  );

  const data = await handleResponse<{ upload_url: string; file_id: string }>(response);
  logger.debug('Upload URL generated', { fileId: data.file_id });
  return data;
}

export async function uploadFile(url: string, file: File, options: UploadOptions = {}) {
  logger.debug('Starting file upload', {
    fileName: file.name,
    fileSize: file.size,
    fileType: file.type
  });

  return new Promise<void>((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.withCredentials = false;
    xhr.timeout = API_CONFIG.timeout;

    if (options.signal) {
      options.signal.addEventListener('abort', () => xhr.abort());
    }

    xhr.upload.addEventListener('loadstart', () => {
      logger.debug('Upload started');
      options.onProgress?.({ loaded: 0, total: file.size, percentage: 0 });
    });

    xhr.upload.addEventListener('progress', (event) => {
      if (event.lengthComputable) {
        const progress = {
          loaded: event.loaded,
          total: event.total,
          percentage: Math.round((event.loaded / event.total) * 100)
        };
        logger.debug('Upload progress', progress);
        options.onProgress?.(progress);
      }
    });

    xhr.addEventListener('load', () => {
      if (xhr.status >= 200 && xhr.status < 300) {
        options.onProgress?.({ loaded: file.size, total: file.size, percentage: 100 });
        logger.debug('Upload completed successfully');
        resolve();
      } else {
        const error = new Error(`Upload failed with status ${xhr.status}`);
        logger.error('Upload failed', error);
        reject(error);
      }
    });

    xhr.addEventListener('error', () => {
      const error = new Error('Network error during upload');
      logger.error('Upload network error', error);
      reject(error);
    });

    xhr.addEventListener('abort', () => {
      const error = new Error('Upload aborted');
      logger.error('Upload aborted', error);
      reject(error);
    });

    xhr.addEventListener('timeout', () => {
      const error = new Error('Upload timed out');
      logger.error('Upload timeout', error);
      reject(error);
    });

    try {
      xhr.open('PUT', url);
      xhr.setRequestHeader('Content-Type', 'application/octet-stream');
      xhr.send(file);
    } catch (error) {
      const err = error instanceof Error ? error : new Error('Failed to initiate upload');
      logger.error('Failed to initiate upload', err);
      reject(err);
    }
  });
}
```

### src/services/api/transcription.ts

```typescript
import { API_CONFIG } from '../../config/api';
import { handleResponse } from './utils';
import { logger } from '../../utils/logger';
import type { TranscriptionResponse } from '../../types';

export async function requestTranscription(fileId: string, signal?: AbortSignal): Promise<TranscriptionResponse> {
  logger.debug('Requesting transcription', { fileId });

  const response = await fetch(
    API_CONFIG.endpoints.processFile,
    {
      method: 'POST',
      headers: {
        ...API_CONFIG.headers.base,
        ...API_CONFIG.headers.json,
      },
      body: JSON.stringify({ file_id: fileId }),
      signal,
      credentials: 'omit'
    }
  );

  const data = await handleResponse<TranscriptionResponse>(response);
  
  if (!data.transcription?.speakers) {
    logger.error('Invalid transcription response', new Error('Invalid transcription response'), {
      responseData: data
    });
    throw new Error('Invalid transcription response');
  }
  
  logger.debug('Transcription received', {
    fileId,
    speakerCount: data.transcription.speakers.length,
  });
  
  return data;
}

export async function getTranscriptionResult(fileId: string, signal?: AbortSignal): Promise<TranscriptionResponse> {
  logger.debug('Getting transcription result', { fileId });
  const response = await fetch(
    API_CONFIG.endpoints.getTranscriptionResult(fileId),
    {
      method: 'GET',
      headers: API_CONFIG.headers.base,
      signal,
      credentials: 'omit',
    }
  );
  const data = await handleResponse<TranscriptionResponse>(response);
  logger.debug('Transcription result received', {
    fileId,
    speakerCount: data.transcription.speakers.length
  });
  return data;
}

```

### src/services/upload/validation.ts

```typescript
import { logger } from '../../utils/logger';
import { AUDIO_CONFIG } from '../../config/audio';
import { formatFileSize } from '../../utils/format';

export interface ValidationResult {
  isValid: boolean;
  error?: string;
}

export function validateFileType(file: File): ValidationResult {
  const acceptedTypes = Object.keys(AUDIO_CONFIG.FORMATS);
  if (!acceptedTypes.includes(file.type)) {
    return {
      isValid: false,
      error: `Invalid file type. Supported formats: ${acceptedTypes.join(', ')}`
    };
  }
  return { isValid: true };
}

export function validateFileSize(file: File): ValidationResult {
  if (file.size > AUDIO_CONFIG.MAX_FILE_SIZE) {
    return {
      isValid: false,
      error: `File size exceeds maximum limit of ${formatFileSize(AUDIO_CONFIG.MAX_FILE_SIZE)}`
    };
  }
  if (file.size < AUDIO_CONFIG.MIN_FILE_SIZE) {
    return {
      isValid: false,
      error: `File size is below minimum of ${formatFileSize(AUDIO_CONFIG.MIN_FILE_SIZE)}`
    };
  }
  return { isValid: true };
}

export async function validateAudioContent(file: File): Promise<ValidationResult> {
  try {
    const chunk = file.slice(0, AUDIO_CONFIG.PREVIEW_CHUNK_SIZE);
    const arrayBuffer = await chunk.arrayBuffer();
    
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    const audioBuffer = await audioContext.decodeAudioData(arrayBuffer);
    
    if (audioBuffer.duration < 0.1) {
      return {
        isValid: false,
        error: 'Audio file appears to be empty or corrupted'
      };
    }
    
    if (audioBuffer.numberOfChannels === 0) {
      return {
        isValid: false,
        error: 'Audio file contains no audio channels'
      };
    }
    
    return { isValid: true };
  } catch (error) {
    logger.error('Audio content validation failed', error instanceof Error ? error : new Error('Unknown error'));
    return {
      isValid: false,
      error: 'Unable to validate audio content. The file may be corrupted.'
    };
  }
}

export async function validateFile(file: File): Promise<ValidationResult> {
  logger.debug('Starting file validation', {
    name: file.name,
    size: file.size,
    type: file.type
  });

  // Check file type
  const typeValidation = validateFileType(file);
  if (!typeValidation.isValid) {
    logger.warn('File type validation failed', { error: typeValidation.error });
    return typeValidation;
  }

  // Check file size
  const sizeValidation = validateFileSize(file);
  if (!sizeValidation.isValid) {
    logger.warn('File size validation failed', { error: sizeValidation.error });
    return sizeValidation;
  }

  // Validate audio content
  const contentValidation = await validateAudioContent(file);
  if (!contentValidation.isValid) {
    logger.warn('Audio content validation failed', { error: contentValidation.error });
    return contentValidation;
  }

  logger.debug('File validation successful');
  return { isValid: true };
}
```

### src/services/upload/url-generator.ts

```typescript
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
```

### src/services/upload/xhr.ts

```typescript
import { logger } from '../../utils/logger';
import type { UploadOptions, UploadProgress } from './types';

export function uploadWithXHR(url: string, file: File, options: UploadOptions = {}): Promise<void> {
  const requestId = Math.random().toString(36).substring(7);
  
  logger.debug('Starting XHR upload', {
    requestId,
    fileName: file.name,
    fileSize: file.size,
    fileType: file.type
  });

  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();

    if (options.signal) {
      options.signal.addEventListener('abort', () => xhr.abort());
    }

    xhr.upload.addEventListener('progress', (event) => {
      if (event.lengthComputable) {
        const progress: UploadProgress = {
          loaded: event.loaded,
          total: event.total,
          percentage: Math.round((event.loaded / event.total) * 100)
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
        const error = new Error(`Upload failed with status ${xhr.status}`);
        logger.error('Upload failed', error, {
          requestId,
          status: xhr.status,
          response: xhr.responseText
        });
        options.onError?.(error);
        reject(error);
      }
    });

    xhr.addEventListener('error', () => {
      const error = new Error('Network error during upload');
      logger.error('Upload network error', error, { requestId });
      options.onError?.(error);
      reject(error);
    });

    xhr.addEventListener('abort', () => {
      const error = new Error('Upload was aborted');
      logger.error('Upload aborted', error, { requestId });
      options.onError?.(error);
      reject(error);
    });

    xhr.open('PUT', url);
    xhr.setRequestHeader('Content-Type', 'application/octet-stream');
    xhr.send(file);
  });
}
```

### src/services/upload/types.ts

```typescript
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

```

### src/services/upload/uploader.ts

```typescript
import { logger } from '../../utils/logger';
import { APIError } from '../api/errors';
import type { UploadOptions, UploadProgress } from './types';

export function uploadToUrl(
  url: string,
  file: File,
  options: UploadOptions = {}
): Promise<void> {
  const requestId = Math.random().toString(36).substring(7);
  
  logger.debug('Starting file upload', {
    requestId,
    fileName: file.name,
    fileSize: file.size,
    fileType: file.type,
    uploadUrlLength: url.length
  });

  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.withCredentials = false;
    xhr.timeout = 300000; // 5 minutes for large files

    if (options.signal) {
      options.signal.addEventListener('abort', () => xhr.abort());
    }

    xhr.upload.addEventListener('loadstart', () => {
      logger.debug('Upload started', { requestId });
      options.onStart?.();
    });

    xhr.upload.addEventListener('progress', (event) => {
      if (event.lengthComputable) {
        const progress: UploadProgress = {
          loaded: event.loaded,
          total: event.total,
          percentage: Math.round((event.loaded / event.total) * 100)
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
        logger.info('Upload completed successfully', {
          requestId,
          status: xhr.status,
          responseLength: xhr.responseText.length
        });
        options.onComplete?.();
        resolve();
      } else {
        const error = new APIError({
          message: `Upload failed with status ${xhr.status}`,
          status: xhr.status,
          code: `UPLOAD_ERROR_${xhr.status}`,
          details: {
            requestId,
            status: xhr.status,
            response: xhr.responseText
          }
        });
        logger.error('Upload failed', error, { requestId });
        options.onError?.(error);
        reject(error);
      }
    });

    xhr.addEventListener('error', () => {
      const error = new APIError({
        message: 'Network error during upload',
        code: 'UPLOAD_NETWORK_ERROR',
        details: {
          requestId,
          readyState: xhr.readyState,
          status: xhr.status
        }
      });
      logger.error('Upload network error', error, { requestId });
      options.onError?.(error);
      reject(error);
    });

    xhr.addEventListener('timeout', () => {
      const error = new APIError({
        message: 'Upload timeout',
        code: 'UPLOAD_TIMEOUT',
        details: {
          requestId,
          timeout: xhr.timeout
        }
      });
      logger.error('Upload timeout', error, { requestId });
      options.onError?.(error);
      reject(error);
    });

    xhr.addEventListener('abort', () => {
      const error = new APIError({
        message: 'Upload was aborted',
        code: 'UPLOAD_ABORTED',
        details: { requestId }
      });
      logger.error('Upload aborted', error, { requestId });
      options.onError?.(error);
      reject(error);
    });

    try {
      xhr.open('PUT', url, true);
      xhr.setRequestHeader('Content-Type', 'application/octet-stream');
      xhr.send(file);
    } catch (error) {
      const err = new APIError({
        message: 'Failed to initiate upload',
        code: 'UPLOAD_INIT_ERROR',
        details: {
          requestId,
          error: error instanceof Error ? error.message : 'Unknown error'
        }
      });
      logger.error('Failed to initiate upload', err, { requestId });
      reject(err);
    }
  });
}
```

### src/services/upload/client.ts

```typescript
import { API_CONFIG } from '../../config/api';
import { APIError } from '../api/errors';
import { logger } from '../../utils/logger';
import type { SignedUrlResponse, UploadOptions } from './types';

export async function generateSignedUrl(filename: string): Promise<SignedUrlResponse> {
  const requestId = Math.random().toString(36).substr(2, 9);

  logger.debug('Generating signed URL', {
    requestId,
    filename,
    endpoint: API_CONFIG.endpoints.generateUploadUrl(filename)
  });

  try {
    const response = await fetch(API_CONFIG.endpoints.generateUploadUrl(filename), {
      method: 'POST',
      headers: API_CONFIG.headers.base
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

```

### src/store/transcription.ts

```typescript
import { create } from 'zustand';
import type { TranscriptionState, ProcessError, ProcessStatus } from '../types';
import { logger } from '../utils/logger';

export const useTranscriptionStore = create<TranscriptionState>((set, get) => ({
  file: null,
  fileId: null,
  status: 'idle',
  error: null,
  transcription: null,
  speakerMap: {},
  setSpeakerName: (speaker, name) => {
    logger.debug('Updating speaker name', { speaker, name });
    set((state) => ({
      speakerMap: { ...state.speakerMap, [speaker]: name },
    }));
  },
  setFile: (file) => {
    logger.info('Setting file', { 
      name: file.name, 
      size: file.size, 
      type: file.type 
    });
    set({ file });
  },
  setFileId: (fileId) => {
    logger.info('Setting file ID', { fileId });
    set({ fileId });
  },
  setStatus: (status: ProcessStatus) => {
    const prevStatus = get().status;
    logger.info('Status change', { 
      from: prevStatus, 
      to: status 
    });
    set({ status });
  },
  setError: (error: ProcessError | null) => {
    if (error) {
      logger.error('Error occurred', new Error(error.message), {
        code: error.code,
        details: error.details
      });
    }
    set({ error });
  },
  setTranscription: (transcription) => {
    logger.info('Setting transcription result', {
      speakers: transcription.transcription.speakers.length,
      totalText: transcription.transcription.text.length
    });
    set({ transcription });
  },
  reset: () => {
    logger.info('Resetting transcription state');
    set({
      file: null,
      fileId: null,
      status: 'idle',
      error: null,
      transcription: null,
      speakerMap: {},
    });
  },
}));
```

