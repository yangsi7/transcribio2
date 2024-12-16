### vite.config.ts

```typescript
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
import { UploadPage } from './pages/UploadPage';
import { MeetingHistory } from './pages/MeetingHistory';
import { ChatPage } from './pages/ChatPage';
import { APITestPage } from './pages/APITestPage';
import { Sidebar } from './components/Sidebar'; // Navigation Sidebar
import { DebugPanel } from './components/DebugPanel';

function App() {
  return (
    <div className="min-h-screen bg-[#1A1A1A] text-white flex">
      {/* Navigation Sidebar */}
      <Sidebar />

      {/* Main Content Area */}
      <div className="flex-1 relative">
        <Routes>
          <Route path="/upload" element={<UploadPage />} />
          <Route path="/history" element={<MeetingHistory />} />
          <Route path="/chat" element={<ChatPage />} />
          <Route path="/api-test" element={<APITestPage />} />
          <Route path="*" element={<Navigate to="/upload" replace />} />
        </Routes>
        <DebugPanel />
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
@tailwind base;
@tailwind components;
@tailwind utilities;

html {
  color-scheme: dark;
}
body {
  @apply bg-gray-900 text-gray-100;
  margin: 0;
  padding: 0;
  font-family: sans-serif;
}

::-webkit-scrollbar {
  width: 8px;
}
::-webkit-scrollbar-thumb {
  background: #4b5563;
  border-radius: 4px;
}
```

### src/vite-env.d.ts

```typescript
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

### src/types/graph.ts

```typescript
export interface Entity {
    name: string;
    type: string;
    description: string;
    meeting_id: string;
    created_at: number;
  }
  
  export interface Relationship {
    source: string;
    target: string;
    description: string;
    keywords: string[];
    strength: number;
    meeting_id: string;
    created_at: number;
  }
  
  export interface GraphData {
    graph: {
      entities: Entity[];
      relationships: Relationship[];
    };
  }
  
  export interface ProcessedNode extends Entity {
    id: string;
    connections: number;
  }
  
  export interface ProcessedLink extends Omit<Relationship, 'source' | 'target'> {
    id: string;
    source: ProcessedNode;
    target: ProcessedNode;
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

export interface KnowledgeGraphEntity {
  name: string;
  type: string;
  description: string;
}

export interface KnowledgeGraphRelationship {
  source: string;
  target: string;
  description: string;
  keywords: string[];
  strength: number;
}

export interface KnowledgeGraph {
  entities: KnowledgeGraphEntity[];
  relationships: KnowledgeGraphRelationship[];
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
  knowledgeGraph: KnowledgeGraph | null;
  summary: string | null;

  setSpeakerName: (speaker: string, name: string) => void;
  setFile: (file: File) => void;
  setFileId: (id: string) => void;
  setStatus: (status: ProcessStatus) => void;
  setError: (error: ProcessError | null) => void;
  setTranscription: (transcription: TranscriptionResponse) => void;
  setKnowledgeGraph: (kg: KnowledgeGraph | null) => void;
  setSummary: (summary: string | null) => void;
  reset: () => void;
}

export interface EntityMapResponse {
  graph: KnowledgeGraph;
}

export interface EntityMapRequest {
  text: string;
}

export interface SummarizeRequest {
  text: string;
  knowledge_graph: KnowledgeGraph;
  system_prompt: string;
}

export interface SummarizeResponse {
  summary: string;
}

```

### src/config/audio.ts

```typescript
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
  MAX_FILE_SIZE: 500 * 1024 * 1024,
  MIN_FILE_SIZE: 1024,
  PREVIEW_CHUNK_SIZE: 256 * 1024,
} as const;
```

### src/config/api.ts

```typescript
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
    progress: 'Validation in progress', // Added this line
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
import { logger } from '../utils/logger/core';

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
  API_URL_SECONDARY: import.meta.env.VITE_API_URL_SECONDARY || 'https://meeting-minutes-service-1040094048579.us-central1.run.app',
  API_KEY: getEnvVar('VITE_API_KEY'),
  API_KEY_SECONDARY: getEnvVar('VITE_API_KEY_SECONDARY'),
  IS_DEV: import.meta.env.DEV,
} as const;

logger.info('Environment configuration loaded', {
  API_URL: ENV.API_URL,
  API_URL_SECONDARY: ENV.API_URL_SECONDARY,
  IS_DEV: ENV.IS_DEV,
  HAS_API_KEY: !!ENV.API_KEY,
  HAS_API_KEY_SECONDARY: !!ENV.API_KEY_SECONDARY
});

```

### src/utils/colors.ts

```typescript
export const ENTITY_COLORS = [
    '#FF6B6B',
    '#4ECDC4',
    '#45B7D1',
    '#96CEB4',
    '#FFEEAD',
    '#D4A5A5',
    '#9ED2C6',
    '#FFD93D',
    '#FF9A8B',
    '#98DDCA',
    '#D4A5FF',
    '#FF8B94',
    '#91A6FF',
    '#88D8B0',
    '#FFAAA5',
    '#B5EAD7',
    '#C7CEEA',
    '#E2F0CB',
    '#FFDAC1',
    '#E0BBE4',
  ];
  
  export const DEFAULT_COLOR = '#607D8B';
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

### src/utils/entityColors.ts

```typescript
import { ENTITY_COLORS, DEFAULT_COLOR } from './colors';
import { ProcessedNode } from '../types/graph';

export const getEntityColorMap = (nodes: ProcessedNode[]) => {
  const typeCounts = nodes.reduce((acc, node) => {
    acc[node.type] = (acc[node.type] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  const sortedTypes = Object.entries(typeCounts)
    .sort(([, a], [, b]) => b - a)
    .map(([type]) => type);

  const colorMap = new Map<string, string>();
  sortedTypes.forEach((type, index) => {
    colorMap.set(type, index < ENTITY_COLORS.length ? ENTITY_COLORS[index] : DEFAULT_COLOR);
  });

  return colorMap;
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

### src/utils/processGraphData.ts

```typescript
import { GraphData, ProcessedNode, ProcessedLink } from '../types/graph';

export const processGraphData = (data: GraphData) => {
  const nodes = new Map<string, ProcessedNode>();
  const links: ProcessedLink[] = [];

  data.graph.entities.forEach((entity) => {
    nodes.set(entity.name, {
      ...entity,
      id: entity.name,
      connections: 0,
    });
  });

  data.graph.relationships.forEach((rel) => {
    const sourceNode = nodes.get(rel.source);
    const targetNode = nodes.get(rel.target);

    if (sourceNode && targetNode) {
      sourceNode.connections++;
      targetNode.connections++;

      links.push({
        ...rel,
        id: `${rel.source}-${rel.target}`,
        source: sourceNode,
        target: targetNode,
      });
    }
  });

  return {
    nodes: Array.from(nodes.values()),
    links,
  };
};
```

### src/utils/keywords.ts

```typescript
import { ProcessedLink } from '../types/graph';

interface KeywordCount {
  keyword: string;
  count: number;
}

export const extractKeywords = (links: ProcessedLink[]): KeywordCount[] => {
  const keywordCounts = new Map<string, number>();
  
  links.forEach(link => {
    link.keywords.forEach(keyword => {
      keywordCounts.set(keyword, (keywordCounts.get(keyword) || 0) + 1);
    });
  });
  
  return Array.from(keywordCounts.entries())
    .map(([keyword, count]) => ({ keyword, count }))
    .sort((a, b) => b.count - a.count);
};
```

### src/utils/logger/status.ts

```typescript
// src/utils/logger/status.ts
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
  // After updating PROCESS_STEPS so all steps have all keys (start, progress, success, error):
  const message = PROCESS_STEPS[step][status]; // Now safe, as all keys exist

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
      isDevelopment: true // For consistent logging in dev
    };
    this.info('Logger initialized', { forcedLogging: true });
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
      message
    };

    if (error) entry.error = error;
    if (data !== undefined) entry.data = data;
    if (context !== undefined) entry.context = context;

    return entry;
  }

  private addLog(entry: LogEntry): void {
    try {
      this.logs.unshift(entry);
      if (this.logs.length > this.config.maxLogs) {
        this.logs.pop();
      }
      formatLogEntry(entry);
    } catch (err) {
      console.error('Failed to add log entry:', err);
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
    console.log(`[DEBUG STDOUT] ${message}`, data, context);
    this.addLog(this.createEntry(LOG_CONFIG.LEVELS.DEBUG, message, undefined, data, context));
  }

  info(message: string, data?: unknown, context?: Record<string, unknown>): void {
    console.log(`[INFO STDOUT] ${message}`, data, context);
    this.addLog(this.createEntry(LOG_CONFIG.LEVELS.INFO, message, undefined, data, context));
  }

  warn(message: string, data?: unknown, context?: Record<string, unknown>): void {
    console.warn(`[WARN STDOUT] ${message}`, data, context);
    this.addLog(this.createEntry(LOG_CONFIG.LEVELS.WARN, message, undefined, data, context));
  }

  error(message: string, error: unknown, context?: Record<string, unknown>): void {
    const normalizedError = error instanceof Error ? error : new Error(String(error));
    console.error(`[ERROR STDOUT] ${message}`, normalizedError, context);
    this.addLog(this.createEntry(LOG_CONFIG.LEVELS.ERROR, message, normalizedError, undefined, context));
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

### src/utils/logger/index.ts

```typescript
import type { LOG_CONFIG } from '../../config/constants';
import { logger } from './core';
export { logger };
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

### src/utils/logger/formatter.ts

```typescript
import { LOG_CONFIG } from '../../config/constants';
import type { LogEntry } from './types';

function stringifyValue(value: unknown): string {
  try {
    return JSON.stringify(value, null, 2);
  } catch {
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
    console.log('%cData:%c\n', 'color: #4B5563; font-weight: bold', 'color: inherit', stringifyValue(entry.data));
  }

  if (entry.context) {
    console.log('%cContext:%c\n', 'color: #4B5563; font-weight: bold', 'color: inherit', stringifyValue(entry.context));
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
// src/utils/audio/validation.ts
import { AUDIO_CONFIG } from '../../config/audio';
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
// src/utils/audio/processing.ts
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

  const audioContext = new (window.AudioContext || window.webkitAudioContext)();
  try {
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
    await audioContext.close();
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

### src/components/NodeConnections.tsx

```typescript
import React from 'react';
import { ProcessedLink, ProcessedNode } from '../types/graph';

interface NodeConnectionsProps {
  node: ProcessedNode;
  links: ProcessedLink[];
  nodes: ProcessedNode[];
  colorMap: Map<string, string>;
}

export const NodeConnections: React.FC<NodeConnectionsProps> = ({
  node,
  links,
  nodes,
  colorMap,
}) => {
  const nodeConnections = links.filter(
    (link) => link.source.id === node.id || link.target.id === node.id
  );

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold border-b border-gray-700 pb-2">
        Connections ({nodeConnections.length})
      </h3>
      <div className="space-y-3 max-h-[calc(100vh-400px)] overflow-y-auto pr-2">
        {nodeConnections.map((connection) => {
          const isSource = connection.source.id === node.id;
          const connectedNode = isSource ? connection.target : connection.source;
          const connectionKey = `${connection.id}-${isSource ? 'source' : 'target'}`;

          return (
            <div
              key={connectionKey}
              className="bg-gray-800 rounded-lg p-4 space-y-2"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: colorMap.get(connectedNode.type) }}
                  />
                  <span className="font-medium">{connectedNode.name}</span>
                </div>
                <span className="text-sm text-gray-400 capitalize">
                  {connectedNode.type}
                </span>
              </div>
              
              <div className="flex items-center text-sm text-gray-400 mt-1">
                <span className="flex-1 text-center">
                  {isSource ? 'Connects to' : 'Connected from'}
                </span>
              </div>
              
              <p className="text-sm text-gray-300">{connection.description}</p>
              
              <div className="flex flex-wrap gap-2 mt-2">
                {connection.keywords.map((keyword) => (
                  <span
                    key={`${connectionKey}-${keyword}`}
                    className="px-2 py-1 text-xs bg-gray-700 rounded-full"
                  >
                    {keyword}
                  </span>
                ))}
              </div>
              
              <div className="flex justify-between text-sm text-gray-400 mt-2">
                <span>Strength: {connection.strength}</span>
                <span>{new Date(connection.created_at).toLocaleDateString()}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
```

### src/components/EntitySummaryModal.tsx

```typescript
// src/components/EntitySummaryModal.tsx
import React from 'react';
import { X } from 'lucide-react';
import type { KnowledgeGraph } from '../types';

interface EntitySummaryModalProps {
  isOpen: boolean;
  onClose: () => void;
  summary?: string | null;
  knowledgeGraph?: KnowledgeGraph | null;
}

export function EntitySummaryModal({ isOpen, onClose, summary, knowledgeGraph }: EntitySummaryModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-gray-800 w-full max-w-2xl rounded-lg shadow-lg p-6 relative text-gray-200">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1 text-gray-400 hover:bg-gray-700 rounded-full"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        <h2 className="text-xl font-bold mb-4">Extracted Summary & Entities</h2>
        
        {summary && (
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-2 text-gray-200">Summary</h3>
            <p className="text-gray-300 whitespace-pre-line">
              {summary}
            </p>
          </div>
        )}
        
        {knowledgeGraph?.entities && knowledgeGraph.entities.length > 0 && (
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-2 text-gray-200">Entities</h3>
            <ul className="list-disc list-inside text-gray-300 space-y-1">
              {knowledgeGraph.entities.map((e, i) => (
                <li key={i}>
                  <span className="font-semibold text-gray-200">{e.name}</span> ({e.type}): {e.description}
                </li>
              ))}
            </ul>
          </div>
        )}

        {knowledgeGraph?.relationships && knowledgeGraph.relationships.length > 0 && (
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-2 text-gray-200">Relationships</h3>
            <ul className="list-disc list-inside text-gray-300 space-y-1">
              {knowledgeGraph.relationships.map((r, i) => (
                <li key={i}>
                  <span className="font-semibold text-gray-200">{r.source}</span> → <span className="font-semibold text-gray-200">{r.target}</span>: {r.description} (Keywords: {r.keywords.join(', ')}, Strength: {r.strength})
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="text-right">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

```

### src/components/ProcessStatus.tsx

```typescript
// src/components/ProcessStatus.tsx
import React from 'react';
import { Loader2, CheckCircle, AlertCircle } from 'lucide-react';
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

export function ProcessStatus({ status }: { status: ProcessStatus }) {
  const message = statusMessages[status];
  const isProcessing = !['completed', 'error', 'idle'].includes(status);

  return (
    <div className="flex items-center gap-2 text-gray-200">
      {isProcessing && (
        <Loader2 className="w-4 h-4 animate-spin text-blue-400" />
      )}
      {status === 'completed' && (
        <CheckCircle className="w-4 h-4 text-green-400" />
      )}
      {status === 'error' && (
        <AlertCircle className="w-4 h-4 text-red-400" />
      )}
      <span className="text-sm font-medium">
        {message}
      </span>
    </div>
  );
}
```

### src/components/DebugPanel.tsx

```typescript
// src/components/DebugPanel.tsx
import React, { useState, useEffect, useCallback } from 'react';
import { Terminal, X, ChevronUp, ChevronDown, RefreshCw } from 'lucide-react';
import { logger } from '../utils/logger/index';
import { LOG_CONFIG } from '../config/constants';
import type { LogEntry } from '../utils/logger/types';

function LogDisplay({ id, timestamp, level, message, data, error, context }: LogEntry) {
  const [isExpanded, setIsExpanded] = useState(false);
  const hasDetails = data !== undefined || error !== undefined || context !== undefined;

  const colorClass = {
    [LOG_CONFIG.LEVELS.ERROR]: 'text-red-500',
    [LOG_CONFIG.LEVELS.WARN]: 'text-yellow-400',
    [LOG_CONFIG.LEVELS.INFO]: 'text-blue-400',
    [LOG_CONFIG.LEVELS.DEBUG]: 'text-gray-400'
  }[level] || 'text-gray-400';

  return (
    <div className="border-b border-gray-700 py-2">
      <div className="flex items-start gap-2">
        <span className="text-xs text-gray-500 whitespace-nowrap">
          {new Date(timestamp).toLocaleTimeString()}
        </span>
        <span className={`text-xs font-medium ${colorClass}`}>
          {level.toUpperCase()}
        </span>
        <span className="text-xs text-gray-200 break-all flex-1">{message}</span>
        {hasDetails && (
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="ml-auto p-1 hover:bg-gray-600 rounded shrink-0"
            aria-label={isExpanded ? 'Collapse details' : 'Expand details'}
          >
            {isExpanded ? (
              <ChevronUp className="w-3 h-3 text-gray-300" />
            ) : (
              <ChevronDown className="w-3 h-3 text-gray-300" />
            )}
          </button>
        )}
      </div>
      {isExpanded && hasDetails && (
        <div className="mt-2 space-y-2 text-xs text-gray-200">
          {context && (
            <details className="bg-gray-700 rounded p-2" open>
              <summary className="font-medium text-gray-300 cursor-pointer">Context</summary>
              <pre className="mt-1 overflow-x-auto whitespace-pre-wrap text-gray-200">
                {JSON.stringify(context, null, 2)}
              </pre>
            </details>
          )}
          {data !== undefined && (
            <details className="bg-gray-700 rounded p-2" open>
              <summary className="font-medium text-gray-300 cursor-pointer">Data</summary>
              <pre className="mt-1 overflow-x-auto whitespace-pre-wrap text-gray-200">
                {JSON.stringify(data, null, 2)}
              </pre>
            </details>
          )}
          {error && (
            <details className="bg-red-900 rounded p-2" open>
              <summary className="font-medium text-red-400 cursor-pointer">Error</summary>
              <div className="mt-1 text-gray-200">
                <div className="font-medium">Message:</div>
                <pre className="text-red-300 overflow-x-auto whitespace-pre-wrap">
                  {error.message}
                </pre>
                {error.stack && (
                  <>
                    <div className="font-medium mt-2">Stack:</div>
                    <pre className="text-red-300 overflow-x-auto whitespace-pre-wrap">
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

export const DebugPanel = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [logs, setLogs] = useState<LogEntry[]>([]);
  const [autoRefresh, setAutoRefresh] = useState(true);

  const refreshLogs = useCallback(() => {
    setLogs(logger.getLogs());
  }, []);

  useEffect(() => {
    logger.debug('Debug panel initialized', { timestamp: new Date().toISOString() });
    refreshLogs();
  }, [refreshLogs]);

  useEffect(() => {
    if (!isOpen) return;

    refreshLogs();
    if (autoRefresh) {
      const interval = setInterval(refreshLogs, LOG_CONFIG.UPDATE_INTERVAL || 1000);
      return () => clearInterval(interval);
    }
  }, [isOpen, autoRefresh, refreshLogs]);

  if (!import.meta.env.DEV) {
    logger.warn('Debug panel disabled in production');
    return null;
  }

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {isOpen ? (
        <div className="bg-gray-800 rounded-lg shadow-lg border border-gray-700 w-[32rem] max-h-[600px] flex flex-col text-gray-200">
          <div className="p-2 border-b border-gray-700 flex items-center justify-between bg-gray-700 sticky top-0">
            <div className="flex items-center gap-2">
              <Terminal className="w-4 h-4 text-gray-300" />
              <span className="text-sm font-medium">Debug Logs</span>
              <span className="text-xs text-gray-400">({logs.length})</span>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => {
                  refreshLogs();
                  setAutoRefresh(!autoRefresh);
                }}
                className={`p-1 rounded hover:bg-gray-600 ${
                  autoRefresh ? 'text-blue-400' : 'text-gray-500'
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
                className="text-xs text-gray-400 hover:text-gray-200 px-2 py-1 hover:bg-gray-600 rounded"
              >
                Clear
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 hover:bg-gray-600 rounded"
                aria-label="Close debug panel"
              >
                <X className="w-4 h-4 text-gray-300" />
              </button>
            </div>
          </div>
          <div className="overflow-y-auto flex-1 p-2 text-gray-200">
            {logs.length === 0 ? (
              <div className="text-center py-4 text-sm text-gray-400">
                No logs yet
              </div>
            ) : (
              logs.map((log) => <LogDisplay key={log.id} {...log} />)
            )}
          </div>
        </div>
      ) : (
        <button
          onClick={() => {
            setIsOpen(true);
            refreshLogs();
          }}
          className="bg-gray-800 text-gray-200 p-2 rounded-full shadow-lg hover:bg-gray-700"
          title="Open Debug Panel"
        >
          <Terminal className="w-5 h-5" />
        </button>
      )}
    </div>
  );
};
```

### src/components/Graph.tsx

```typescript
import React, { useCallback, useRef, useState } from 'react';
import ForceGraph2D from 'react-force-graph-2d';
import { ProcessedNode, ProcessedLink } from '../types/graph';

interface GraphProps {
  nodes: ProcessedNode[];
  links: ProcessedLink[];
  onNodeClick: (node: ProcessedNode) => void;
  colorMap: Map<string, string>;
  selectedNode: ProcessedNode | null;
  filteredNodeIds?: Set<string>;
}

export const Graph: React.FC<GraphProps> = ({
  nodes,
  links,
  onNodeClick,
  colorMap,
  selectedNode,
  filteredNodeIds,
}) => {
  const fgRef = useRef<any>();
  const [hoveredNode, setHoveredNode] = useState<ProcessedNode | null>(null);

  const getNodeColor = useCallback((node: ProcessedNode) => {
    const baseColor = colorMap.get(node.type) || '#607D8B';
    if (filteredNodeIds && !filteredNodeIds.has(node.id)) {
      return `${baseColor}33`;
    }
    
    const isSelected = selectedNode?.id === node.id;
    const isConnected = selectedNode && links.some(
      link => 
        (link.source.id === selectedNode.id && link.target.id === node.id) ||
        (link.target.id === selectedNode.id && link.source.id === node.id)
    );
    
    if (isSelected) return `${baseColor}FF`;
    if (isConnected) return `${baseColor}EE`;
    return selectedNode ? `${baseColor}44` : `${baseColor}CC`;
  }, [colorMap, selectedNode, links, filteredNodeIds]);

  const getLinkColor = useCallback((link: ProcessedLink) => {
    if (filteredNodeIds && (!filteredNodeIds.has(link.source.id) || !filteredNodeIds.has(link.target.id))) {
      return '#88ccff22';
    }
    
    if (selectedNode) {
      const isConnected = link.source.id === selectedNode.id || link.target.id === selectedNode.id;
      return isConnected ? '#88ccffFF' : '#88ccff22';
    }
    return '#88ccffAA';
  }, [selectedNode, filteredNodeIds]);

  const paintNode = useCallback((node: any, ctx: CanvasRenderingContext2D) => {
    const size = 6 + (node.connections * 2);
    const finalSize = Math.min(size, 20);
    const nodeColor = getNodeColor(node);
    
    if (selectedNode && (node.id === selectedNode.id || links.some(
      link => 
        (link.source.id === selectedNode.id && link.target.id === node.id) ||
        (link.target.id === selectedNode.id && link.source.id === node.id)
    ))) {
      ctx.beginPath();
      ctx.arc(node.x, node.y, finalSize * 1.4, 0, 2 * Math.PI);
      ctx.fillStyle = '#ffffff22';
      ctx.fill();
    }
    
    ctx.beginPath();
    ctx.arc(node.x, node.y, finalSize * 1.1, 0, 2 * Math.PI);
    ctx.fillStyle = '#ffffff33';
    ctx.fill();
    
    ctx.beginPath();
    ctx.arc(node.x, node.y, finalSize, 0, 2 * Math.PI);
    ctx.fillStyle = nodeColor;
    ctx.fill();
    
    ctx.strokeStyle = '#ffffff44';
    ctx.lineWidth = 1;
    ctx.stroke();
  }, [getNodeColor, selectedNode, links]);

  return (
<ForceGraph2D
  ref={fgRef}
  graphData={{ nodes, links }}
  nodeId="id"
  nodeCanvasObject={paintNode}
  nodeRelSize={6}
  linkWidth={(link) => {
    const strength = (link as ProcessedLink).strength;
    return 0.5 + (strength * 2.5);
  }}
  linkColor={getLinkColor}
  linkDirectionalParticles={2}
  linkDirectionalParticleWidth={2}
  // REMOVE linkOpacity={0.6}
  backgroundColor="#1A1A1A"
  linkDirectionalArrowLength={4}
  linkDirectionalArrowRelPos={1}
  linkDirectionalArrowColor={getLinkColor}
  d3VelocityDecay={0.3}
  cooldownTicks={100}
  onNodeClick={(node) => onNodeClick(node as ProcessedNode)}
  onNodeHover={setHoveredNode}
  onEngineStop={() => {
    if (fgRef.current) {
      fgRef.current.zoomToFit(400, 50);
    }
  }}
/>
  );
};
```

### src/components/InputSection.tsx

```typescript
import React, { useState } from 'react';
import { FileUpload } from './FileUpload';

interface InputSectionProps {
  onDataLoad: (data: any) => void;
}

export const InputSection: React.FC<InputSectionProps> = ({ onDataLoad }) => {
  const [jsonInput, setJsonInput] = useState('');

  const handleJsonSubmit = () => {
    try {
      const data = JSON.parse(jsonInput);
      onDataLoad(data);
    } catch (error) {
      console.error('Invalid JSON:', error);
    }
  };

  return (
    <div className="space-y-6 p-6 bg-gray-900 rounded-lg">
      <div className="space-y-4">
        <h2 className="text-xl font-bold text-white">Upload Graph Data</h2>
        {/* Pass onDataLoad here if you want FileUpload to handle JSON uploads */}
        <FileUpload onDataLoad={onDataLoad} />
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-bold text-white">Or Paste JSON</h2>
        <textarea
          value={jsonInput}
          onChange={(e) => setJsonInput(e.target.value)}
          className="w-full h-40 p-3 bg-gray-800 text-white rounded-lg border border-gray-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
          placeholder="Paste your JSON here..."
        />
        <button
          onClick={handleJsonSubmit}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          Load Graph
        </button>
      </div>
    </div>
  );
};
```

### src/components/MeetingCard.tsx

```typescript
// src/components/MeetingCard.tsx
import React from 'react';
import { Calendar, Clock, Users, Tag, BarChart, Link as LinkIcon } from 'lucide-react';

interface MeetingProps {
  title: string;
  date: string;
  time?: string;
  duration: string;
  participants: string[];
  summary: string;
  tags?: string[];
  relationships?: {
    source: string;
    target: string;
    description: string;
    keywords: string[];
    strength: number;
  }[];
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
  relationships = [],
  isWeeklySummary = false,
  onClick
}: MeetingProps) {
  return (
    <div 
      className={`p-6 hover:bg-gray-700/50 transition-colors cursor-pointer ${
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
            <h4 className="text-lg font-semibold text-gray-200">{title}</h4>
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

      {summary && summary.trim().length > 0 && (
        <p className="text-gray-300 mb-4 whitespace-pre-line">{summary}</p>
      )}

      {relationships.length > 0 && (
        <div className="mb-4">
          <h5 className="text-sm font-semibold text-gray-300 flex items-center gap-1 mb-2">
            <LinkIcon className="w-4 h-4" /> Relationships
          </h5>
          <ul className="text-sm text-gray-400 list-disc list-inside space-y-1">
            {relationships.map((r, idx) => (
              <li key={idx}>
                <span className="text-gray-200 font-medium">{r.source}</span> → <span className="text-gray-200 font-medium">{r.target}</span>: {r.description} (strength: {r.strength})
              </li>
            ))}
          </ul>
        </div>
      )}

      {tags.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map(tag => (
            <span
              key={tag}
              className="px-2 py-1 rounded-full text-sm font-medium flex items-center bg-gray-700 text-gray-300"
            >
              <Tag className="w-3 h-3 mr-1" />
              {tag}
            </span>
          ))}
        </div>
      )}

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
import { Upload, List, MessageSquare, Server } from 'lucide-react';

export function Sidebar() {
  return (
    <div className="w-64 bg-gray-800 flex flex-col text-gray-100 border-r border-gray-700">
      <div className="p-4 border-b border-gray-700">
        <h1 className="text-2xl font-bold text-white">Transcribio</h1>
      </div>
      <nav className="flex-1 p-4 space-y-2">
        <NavLink
          to="/upload"
          className={({ isActive }) =>
            `flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium ${
              isActive ? 'bg-gray-700 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white'
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
              isActive ? 'bg-gray-700 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white'
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
              isActive ? 'bg-gray-700 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white'
            }`
          }
        >
          <MessageSquare className="w-4 h-4" />
          Chat
        </NavLink>
        <NavLink
          to="/api-test"
          className={({ isActive }) =>
            `flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium ${
              isActive ? 'bg-gray-700 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white'
            }`
          }
        >
          <Server className="w-4 h-4" />
          API Test
        </NavLink>
      </nav>
    </div>
  );
}
```

### src/components/SummaryViewer.tsx

```typescript
// src/components/SummaryViewer.tsx
import React from 'react';

interface SummaryViewerProps {
  summary: string;
}

export function SummaryViewer({ summary }: SummaryViewerProps) {
  const lines = summary.split('\n').map(l => l.trim()).filter(l => l.length > 0);

  const recognizedSections = ["Action Items:", "Decisions:", "Timeline:", "Summary:", "Key Points:"];

  return (
    <div className="bg-gray-800 text-gray-200 rounded p-4 shadow space-y-2">
      <h2 className="text-lg font-semibold mb-2">Meeting Summary</h2>
      {lines.map((line, i) => {
        const isSectionTitle = recognizedSections.some(sec => line.toLowerCase().startsWith(sec.toLowerCase()));
        return (
          <div key={i}>
            {isSectionTitle ? (
              <h3 className="font-bold text-blue-400 mt-2">{line}</h3>
            ) : (
              <p className="text-sm text-gray-300 leading-relaxed">{line}</p>
            )}
          </div>
        );
      })}
      {lines.length === 0 && (
        <p className="text-sm text-gray-400 italic">No summary returned or summary is empty.</p>
      )}
    </div>
  );
}
```

### src/components/NodeSidebar.tsx

```typescript
// src/components/NodeSidebar.tsx
import React from 'react';
import { X } from 'lucide-react';
import { ProcessedNode, ProcessedLink } from '../types/graph';
import { NodeConnections } from './NodeConnections';

interface NodeSidebarProps {
  selectedNode: ProcessedNode | null;
  onClose: () => void;
  links: ProcessedLink[];
  nodes: ProcessedNode[];
  colorMap: Map<string, string>;
}

export const NodeSidebar: React.FC<NodeSidebarProps> = ({
  selectedNode,
  onClose,
  links,
  nodes,
  colorMap,
}) => {
  if (!selectedNode) {
    return (
      <div className="fixed right-0 top-0 h-full w-64 bg-gray-900 text-white p-4 shadow-lg overflow-hidden">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Node Sidebar</h2>
          <button
            onClick={onClose}
            className="p-1 hover:bg-gray-800 rounded-full transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        <p className="text-gray-400">No node selected. Select a node from the graph.</p>
      </div>
    );
  }

  return (
    <div className="fixed right-0 top-0 h-full w-96 bg-gray-900 text-white p-6 shadow-lg transform transition-transform overflow-hidden">
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center space-x-2">
          <div
            className="w-4 h-4 rounded-full"
            style={{ backgroundColor: colorMap.get(selectedNode.type) }}
          />
          <h2 className="text-xl font-bold">Node Details</h2>
        </div>
        <button
          onClick={onClose}
          className="p-1 hover:bg-gray-800 rounded-full transition-colors"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      <div className="space-y-6">
        <div className="space-y-4">
          <div>
            <h3 className="text-sm text-gray-400">Name</h3>
            <p className="text-lg">{selectedNode.name}</p>
          </div>

          <div>
            <h3 className="text-sm text-gray-400">Type</h3>
            <p className="text-lg capitalize">{selectedNode.type}</p>
          </div>

          <div>
            <h3 className="text-sm text-gray-400">Description</h3>
            <p className="text-lg">{selectedNode.description}</p>
          </div>

          <div>
            <h3 className="text-sm text-gray-400">Created</h3>
            <p className="text-lg">
              {new Date(selectedNode.created_at).toLocaleDateString()}
            </p>
          </div>
        </div>

        <NodeConnections
          node={selectedNode}
          links={links}
          nodes={nodes}
          colorMap={colorMap}
        />
      </div>
    </div>
  );
};
```

### src/components/TranscriptionControls/index.tsx

```typescript
// src/components/TranscriptionControls/index.tsx
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
// src/components/TranscriptionControls/ExportButton.tsx
import React from 'react';
import { Download } from 'lucide-react';
import type { ExportFormat } from '../../types';

interface ExportButtonProps {
  onExport: (format: ExportFormat) => Promise<void>;
  formats: readonly ExportFormat[];
}

export function ExportButton({ onExport, formats }: ExportButtonProps) {
  return (
    <div className="relative group">
      <button className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-200 bg-gray-700 rounded-md hover:bg-gray-600">
        <Download className="w-4 h-4" />
        Export
      </button>
      <div className="absolute right-0 z-10 hidden w-48 mt-2 origin-top-right bg-gray-800 rounded-md shadow-lg border border-gray-700 group-hover:block">
        <div className="py-1">
          {formats.map((format) => (
            <button
              key={format}
              onClick={() => onExport(format)}
              className="block w-full px-4 py-2 text-sm text-left text-gray-200 hover:bg-gray-700"
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
// src/components/TranscriptionControls/CopyButton.tsx
import React from 'react';
import { Copy } from 'lucide-react';

interface CopyButtonProps {
  onCopy: () => Promise<void>;
}

export function CopyButton({ onCopy }: CopyButtonProps) {
  return (
    <button
      onClick={onCopy}
      className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-200 bg-gray-700 border border-gray-600 rounded-md hover:bg-gray-600"
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

interface FileUploadProps {
  onDataLoad?: (data: any) => void; // Make this optional if not always needed
}

export function FileUpload({ onDataLoad }: FileUploadProps) {
  const { setFile, status } = useTranscriptionStore();
  const { upload, uploadProgress, cancel } = useTranscriptionUpload();

  const handleFile = useCallback(async (selectedFile: File) => {
    if (!selectedFile) return;

    const fileName = selectedFile.name.toLowerCase();
    if (fileName.endsWith('.json') && onDataLoad) {
      // Handle JSON file scenario
      const reader = new FileReader();
      reader.onload = (e) => {
        try {
          const result = e.target?.result;
          if (typeof result === 'string') {
            const data = JSON.parse(result);
            onDataLoad(data);
          } else {
            toast.error('Invalid file content.');
          }
        } catch (err) {
          toast.error('Failed to parse JSON file.');
        }
      };
      reader.readAsText(selectedFile);
      return;
    }

    // Otherwise, handle audio upload
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
  }, [setFile, upload, onDataLoad]);

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
    .concat('.json') // Add json if you want to allow json uploads
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
// src/components/FileUpload/DropZone.tsx
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
      className="p-8 border-2 border-dashed rounded-lg text-center bg-gray-800 border-gray-700 text-gray-200"
    >
      <Upload className="mx-auto h-12 w-12 text-gray-400" />
      <div className="mt-4">
        <label htmlFor="file-upload" className="cursor-pointer">
          <span className="text-blue-400 hover:text-blue-300">Upload a file</span>
          <input
            id="file-upload"
            type="file"
            className="sr-only"
            accept={acceptedTypes}
            onChange={onFileSelect}
            disabled={isUploading}
          />
        </label>
        <p className="mt-1 text-sm text-gray-400">or drag and drop</p>
      </div>

      <p className="mt-2 text-xs text-gray-400">
        Maximum file size: {formatFileSize(AUDIO_CONFIG.MAX_FILE_SIZE)}
      </p>
    </div>
  );
}
```

### src/components/FileUpload/UploadProgress.tsx

```typescript
// src/components/FileUpload/UploadProgress.tsx
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
    <div className="bg-gray-800 p-4 rounded-lg shadow-sm border border-gray-700 text-gray-200">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <Loader2 className="w-4 h-4 animate-spin text-blue-400" />
          {showProgress && (
            <span className="text-sm font-medium">
              Uploading... {Math.round(progressValue)}%
            </span>
          )}
          {!showProgress && (
            <span className="text-sm font-medium">
              Processing...
            </span>
          )}
        </div>
        <button
          onClick={onCancel}
          className="p-1 hover:bg-gray-600 rounded-full transition-colors"
          aria-label="Cancel upload"
        >
          <X className="w-4 h-4 text-gray-300" />
        </button>
      </div>
      {showProgress && (
        <div className="relative w-full h-2 bg-gray-700 rounded-full overflow-hidden">
          <div
            className="absolute left-0 top-0 h-full bg-blue-500 transition-all duration-300 ease-out"
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
// src/components/TranscriptionViewer/index.tsx
import React, { useState, useMemo } from 'react';
import { useTranscriptionStore } from '../../store/transcription';
import { TranscriptionHeader } from './TranscriptionHeader';
import { SpeakerEntry } from './SpeakerEntry';
import { concatenateTextBlocks } from '../../utils/text/processing';
import { logger } from '../../utils/logger/core';

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
    <div className="bg-gray-800 rounded-lg shadow text-gray-200">
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
// src/components/TranscriptionViewer/TranscriptionHeader.tsx
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
    <div className="p-4 border-b border-gray-700">
      <div className="flex items-center justify-between text-gray-200">
        <h2 className="text-lg font-semibold">Transcription</h2>
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={showTimestamps}
            onChange={(e) => onToggleTimestamps(e.target.checked)}
            className="rounded border-gray-600 bg-gray-800 text-blue-400 focus:ring-1 focus:ring-blue-400"
          />
          <span className="text-sm text-gray-300">Show timestamps</span>
        </label>
      </div>
    </div>
  );
}
```

### src/components/TranscriptionViewer/SpeakerEntry.tsx

```typescript
// src/components/TranscriptionViewer/SpeakerEntry.tsx
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
        <div className="flex items-center gap-2 text-gray-200">
          <User className="w-4 h-4 text-gray-400" />
          {isEditing ? (
            <input
              type="text"
              defaultValue={speakerName}
              className="w-full px-2 py-1 text-sm border border-gray-600 rounded bg-gray-700 text-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-400"
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
              className="flex items-center gap-1 text-sm text-gray-300 hover:text-blue-400"
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
      <p className="flex-1 text-gray-200">{entry.text}</p>
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

### src/components/controls/FilterPanel.tsx

```typescript
import React, { useState } from 'react';
import { Filter, ChevronDown, ChevronUp } from 'lucide-react';

interface KeywordCount {
  keyword: string;
  count: number;
}

interface FilterPanelProps {
  categories: string[];
  keywords: KeywordCount[];
  selectedCategories: string[];
  selectedKeywords: string[];
  onCategoryChange: (category: string) => void;
  onKeywordChange: (keyword: string) => void;
  colorMap: Map<string, string>;
}

export const FilterPanel: React.FC<FilterPanelProps> = ({
  categories,
  keywords,
  selectedCategories,
  selectedKeywords,
  onCategoryChange,
  onKeywordChange,
  colorMap,
}) => {
  const [showAllCategories, setShowAllCategories] = useState(false);
  const [showAllKeywords, setShowAllKeywords] = useState(false);

  const visibleCategories = showAllCategories ? categories : categories.slice(0, 8);
  const visibleKeywords = showAllKeywords ? keywords : keywords.slice(0, 8);

  return (
    <div className="absolute left-4 top-4 bg-gray-900 rounded-lg p-4 w-64 shadow-lg max-h-[calc(100vh-2rem)] overflow-y-auto">
      <div className="flex items-center space-x-2 mb-4">
        <Filter className="w-4 h-4" />
        <h3 className="font-semibold">Filters</h3>
      </div>

      <div className="space-y-4">
        <div>
          <h4 className="text-sm text-gray-400 mb-2">Categories</h4>
          <div className="space-y-2">
            {visibleCategories.map((category) => (
              <label key={category} className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={selectedCategories.includes(category)}
                  onChange={() => onCategoryChange(category)}
                  className="rounded border-gray-600"
                />
                <span className="flex items-center space-x-2">
                  <div
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: colorMap.get(category) }}
                  />
                  <span className="text-sm capitalize">{category}</span>
                </span>
              </label>
            ))}
          </div>
          {categories.length > 8 && (
            <button
              onClick={() => setShowAllCategories(!showAllCategories)}
              className="flex items-center space-x-1 text-sm text-gray-400 mt-2 hover:text-gray-300"
            >
              <span>{showAllCategories ? 'Show Less' : `Show ${categories.length - 8} More`}</span>
              {showAllCategories ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </button>
          )}
        </div>

        <div>
          <h4 className="text-sm text-gray-400 mb-2">Keywords</h4>
          <div className="space-y-2">
            {visibleKeywords.map(({ keyword, count }) => (
              <label key={keyword} className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    checked={selectedKeywords.includes(keyword)}
                    onChange={() => onKeywordChange(keyword)}
                    className="rounded border-gray-600"
                  />
                  <span className="text-sm">{keyword}</span>
                </div>
                <span className="text-xs text-gray-400">{count}</span>
              </label>
            ))}
          </div>
          {keywords.length > 8 && (
            <button
              onClick={() => setShowAllKeywords(!showAllKeywords)}
              className="flex items-center space-x-1 text-sm text-gray-400 mt-2 hover:text-gray-300"
            >
              <span>{showAllKeywords ? 'Show Less' : `Show ${keywords.length - 8} More`}</span>
              {showAllKeywords ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
```

### src/components/controls/TopEntitiesPanel.tsx

```typescript
import React, { useMemo } from 'react';
import { BarChart2 } from 'lucide-react';
import { ProcessedNode } from '../../types/graph';

interface TopEntitiesPanelProps {
  nodes: ProcessedNode[];
  colorMap: Map<string, string>;
  onNodeSelect: (node: ProcessedNode) => void;
}

export const TopEntitiesPanel: React.FC<TopEntitiesPanelProps> = ({
  nodes,
  colorMap,
  onNodeSelect,
}) => {
  const { topNodes, topCategories } = useMemo(() => {
    const sortedNodes = [...nodes]
      .sort((a, b) => b.connections - a.connections)
      .slice(0, 10);

    const categoryStats = nodes.reduce((acc, node) => {
      acc[node.type] = (acc[node.type] || 0) + node.connections;
      return acc;
    }, {} as Record<string, number>);

    const sortedCategories = Object.entries(categoryStats)
      .sort(([, a], [, b]) => b - a)
      .slice(0, 10)
      .map(([category, connections]) => ({ category, connections }));

    return {
      topNodes: sortedNodes,
      topCategories: sortedCategories,
    };
  }, [nodes]);

  return (
    <div className="absolute left-4 bottom-4 bg-gray-900 rounded-lg p-4 w-[400px] shadow-lg">
      <div className="flex items-center space-x-2 mb-4">
        <BarChart2 className="w-4 h-4" />
        <h3 className="font-semibold">Top Entities & Categories</h3>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <h4 className="text-sm text-gray-400 mb-2">Most Connected Entities</h4>
          <div className="space-y-2">
            {topNodes.map((node) => (
              <button
                key={node.id}
                onClick={() => onNodeSelect(node)}
                className="w-full text-left p-2 hover:bg-gray-800 rounded-lg transition-colors"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div
                      className="w-3 h-3 rounded-full"
                      style={{ backgroundColor: colorMap.get(node.type) }}
                    />
                    <span className="text-sm truncate max-w-[120px]">{node.name}</span>
                  </div>
                  <span className="text-sm text-gray-400">{node.connections}</span>
                </div>
              </button>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-sm text-gray-400 mb-2">Top Categories</h4>
          <div className="space-y-2">
            {topCategories.map(({ category, connections }) => (
              <div
                key={category}
                className="flex items-center justify-between p-2"
              >
                <div className="flex items-center space-x-2">
                  <div
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: colorMap.get(category) }}
                  />
                  <span className="text-sm capitalize truncate max-w-[120px]">{category}</span>
                </div>
                <span className="text-sm text-gray-400">{connections}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
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
// src/hooks/useTranscriptionUpload.ts
import { useState, useCallback, useRef, useEffect } from 'react';
import { useTranscriptionStore } from '../store/transcription';
import { generateUploadUrl, uploadFile } from '../services/api/upload';
import { requestTranscription } from '../services/api/transcription';
import { logger } from '../utils/logger';
import { ENV } from '../config/env';
import type { ProcessError } from '../types';

export function useTranscriptionUpload() {
  const [uploadProgress, setUploadProgress] = useState(0);
  const { setStatus, setError, setFileId, setTranscription, setKnowledgeGraph, setSummary } = useTranscriptionStore();
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

      logger.debug('Requesting upload URL from primary API');
      const { upload_url, file_id } = await generateUploadUrl(file.name, signal);
      logger.debug('Received upload URL and file_id', { file_id });
      setFileId(file_id);

      setStatus('uploading');
      logger.debug('Uploading file to signed URL');
      await uploadFile(upload_url, file, {
        signal,
        onProgress: (progress) => {
          setUploadProgress(progress.percentage);
          logger.debug('Upload progress event', { progress: progress.percentage });
        }
      });

      setStatus('requesting-transcription');
      logger.debug('Requesting transcription from primary API');
      const transcriptionData = await requestTranscription(file_id, signal);

      if (!transcriptionData?.transcription?.speakers || !transcriptionData?.transcription?.chunks || !transcriptionData?.transcription?.text) {
        throw new Error('Invalid transcription response structure.');
      }

      logger.info('Transcription retrieved successfully', {
        speakerCount: transcriptionData.transcription.speakers.length,
        textLength: transcriptionData.transcription.text.length
      });

      setTranscription(transcriptionData);
      setStatus('completed');

      if (transcriptionData.transcription.text) {
        const text = transcriptionData.transcription.text;
        logger.debug('Starting entity extraction process with secondary API', {
          textLength: text.length,
          endpoint: `${ENV.API_URL_SECONDARY}/entity_map_new`
        });

        const emResp = await fetch(`${ENV.API_URL_SECONDARY}/entity_map_new`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'X-API-Key': ENV.API_KEY_SECONDARY || ENV.API_KEY
          },
          body: JSON.stringify({ text }),
          signal
        });

        if (!emResp.ok) {
          const errorText = await emResp.text();
          logger.error('Entity map request failed', new Error('Entity map request failed'), { response: errorText });
          throw new Error(`Entity map request failed: ${errorText}`);
        }

        const entity_map_data = await emResp.json();
        logger.info('Entity map retrieved successfully', { 
          entityCount: entity_map_data?.graph?.entities?.length || 0,
          relationshipCount: entity_map_data?.graph?.relationships?.length || 0
        });

        const graph = entity_map_data.graph || { entities: [], relationships: [] };
        const kg = {
          entities: graph.entities || [],
          relationships: graph.relationships || []
        };

        setKnowledgeGraph(kg);

        logger.debug('Starting summarization with secondary API', {
          textLength: text.length,
          entityCount: kg.entities?.length || 0,
          relationshipCount: kg.relationships?.length || 0,
          endpoint: `${ENV.API_URL_SECONDARY}/summarize`
        });

        const summarizePayload = {
          text,
          knowledge_graph: kg,
          system_prompt: "You are an expert assistant skilled at converting raw meeting transcripts into meeting minutes. Include the extracted entities and relationships to produce a coherent summary."
        };

        const summarizeResp = await fetch(`${ENV.API_URL_SECONDARY}/summarize`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'X-API-Key': ENV.API_KEY_SECONDARY || ENV.API_KEY
          },
          body: JSON.stringify(summarizePayload),
          signal
        });

        if (!summarizeResp.ok) {
          const errorText = await summarizeResp.text();
          logger.error('Summarization request failed', new Error('Summarization request failed'), { response: errorText });
          throw new Error(`Summarization request failed: ${errorText}`);
        }

        const summaryData = await summarizeResp.json();
        const summary = summaryData.summary || "No summary returned.";
        logger.info('Summarization completed successfully', { summaryLength: summary.length });

        setSummary(summary);

        logger.info('All processes (upload, transcription, entity extraction, summarization) completed successfully', { file_id });
      } else {
        logger.warn('No transcription text found, skipping entity extraction and summarization');
      }

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
      
      logger.error('Upload process failed', error instanceof Error ? error : new Error(processError.message), {
        fileName: file.name
      });
      
      setStatus('error');
      setError(processError);
    } finally {
      setUploadProgress(0);
      abortControllerRef.current = null;
    }
  }, [setStatus, setError, setFileId, setTranscription, setKnowledgeGraph, setSummary]);

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
        <h1 className="text-3xl font-bold text-white">Upload your Audio</h1>
        <p className="mt-2 text-gray-400">
          Easily upload audio files and transcribe them.
        </p>
      </header>
      <main className="space-y-8">
        <div className="bg-gray-800 p-4 rounded-lg shadow text-gray-200">
          <FileUpload />
        </div>

        {(status !== 'idle' && status !== 'completed') && (
          <div className="bg-gray-800 p-4 rounded-lg shadow text-gray-200">
            <ProcessStatus status={status} />
            {error && (
              <div className="mt-2 text-sm text-red-400">
                {error.message}
              </div>
            )}
          </div>
        )}

        {status === 'completed' && (
          <>
            <div className="bg-gray-800 p-4 rounded-lg shadow text-gray-200">
              <TranscriptionControls />
            </div>
            <div className="bg-gray-800 p-4 rounded-lg shadow text-gray-200">
              <TranscriptionViewer />
            </div>
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
import { Search, Calendar, Filter, ChevronDown, ChevronRight, Clock } from 'lucide-react';
import { format, startOfWeek, endOfWeek } from 'date-fns';
import { MeetingCard } from '../components/MeetingCard';
import { WeekHeader } from '../components/calendar/WeekHeader';
import { FilterDropdown } from '../components/calendar/FilterDropdown';
import { useTranscriptionStore } from '../store/transcription';
import { logger } from '../utils/logger/core';
import { EntitySummaryModal } from '../components/EntitySummaryModal';

export function MeetingHistory() {
  logger.debug('Rendering MeetingHistory page');
  const [searchTerm, setSearchTerm] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const [expandedDates, setExpandedDates] = useState<string[]>(['Today']);
  const [currentWeek, setCurrentWeek] = useState({
    start: startOfWeek(new Date()),
    end: endOfWeek(new Date())
  });

  const { summary, knowledgeGraph } = useTranscriptionStore();
  const [showModal, setShowModal] = useState(false);

  let meetingsByDate: Record<string, any[]> = {};

  // If we have a transcription summary and KG, let's show a "Transcribed Meeting"
  if (summary) {
    const entityTags = knowledgeGraph?.entities.map(e => e.name) || [];
    const relationships = knowledgeGraph?.relationships || [];
    meetingsByDate['Today'] = [{
      id: 'meeting-1',
      title: "Transcribed Meeting",
      date: format(new Date(), 'yyyy-MM-dd'),
      time: "9:00 AM",
      duration: "45m",
      participants: ["John Doe", "Jane Smith"],
      summary: summary,
      tags: entityTags,
      relationships: relationships
    }];
  }

  const filteredMeetings = Object.entries(meetingsByDate).reduce((acc, [date, meetings]) => {
    const filtered = meetings.filter(m => {
      const combinedText = `${m.title} ${m.summary} ${(m.tags || []).join(' ')} ${m.participants.join(' ')}`;
      return combinedText.toLowerCase().includes(searchTerm.toLowerCase());
    });
    if (filtered.length > 0) {
      acc[date] = filtered;
    }
    return acc;
  }, {} as Record<string, any[]>);

  const toggleDate = (date: string) => {
    logger.debug('Toggling date expansion', { date });
    setExpandedDates(prev => 
      prev.includes(date) ? prev.filter(d => d !== date) : [...prev, date]
    );
  };

  return (
    <div className="max-w-6xl mx-auto">
      <div className="sticky top-0 bg-gray-900 z-10 pb-6">
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
                  className="w-64 bg-gray-800 text-gray-200 rounded-lg pl-10 pr-4 py-2 focus:ring-2 focus:ring-blue-400 focus:outline-none"
                />
              </div>
              <FilterDropdown onToggle={() => setShowFilters(!showFilters)} isOpen={showFilters} />
            </div>
          </div>

          <WeekHeader week={currentWeek} />
        </header>
      </div>

      {/* If summary and knowledgeGraph exist, show a button to view Entity Summary */}
      {summary && knowledgeGraph && (
        <div className="mb-4 flex justify-end">
          <button
            onClick={() => setShowModal(true)}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-400"
          >
            View Summary &amp; Entities
          </button>
        </div>
      )}

      <div className="space-y-4">
        {Object.keys(filteredMeetings).length === 0 && (
          <div className="text-gray-300 bg-gray-800 p-4 rounded-md">
            No meetings found. Process a file to see results here.
          </div>
        )}

        {Object.entries(filteredMeetings).map(([date, meetings]) => (
          <div key={date} className="bg-gray-800/30 rounded-xl overflow-hidden backdrop-blur-sm border border-gray-700">
            <button
              onClick={() => toggleDate(date)}
              className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-700 transition-colors text-gray-200"
            >
              <div className="flex items-center gap-3">
                <Calendar className="w-5 h-5 text-blue-400" />
                <span className="font-medium text-gray-200">{date}</span>
                <div className="flex items-center gap-2 text-gray-400 text-sm">
                  <Clock className="w-4 h-4" />
                  <span>
                    {meetings.reduce((acc, m: any) => {
                      return acc + 45; 
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
                    onClick={() => logger.info('Meeting card clicked', { meetingId: meeting.id })}
                  />
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      {summary && knowledgeGraph && (
        <EntitySummaryModal
          isOpen={showModal}
          onClose={() => setShowModal(false)}
          summary={summary}
          knowledgeGraph={knowledgeGraph}
        />
      )}
    </div>
  );
}

```

### src/pages/APITestPage.tsx

```typescript
// src/pages/APITestPage.tsx
import React, { useState, useMemo } from 'react';
import { ENV } from '../config/env';
import { logger } from '../utils/logger/index';
import { toast } from 'sonner';
import { SummaryViewer } from '../components/SummaryViewer';
import { processGraphData } from '../utils/processGraphData';
import { getEntityColorMap } from '../utils/entityColors';
import { Graph } from '../components/Graph';
import { Sidebar } from '../components/Sidebar';
import type { ProcessedNode, ProcessedLink } from '../types/graph';

export function APITestPage() {
  const [testText, setTestText] = useState("This is a sample meeting text about Product and Budget.");
  const [graphData, setGraphData] = useState<{entities: any[], relationships: any[]}|null>(null);
  const [summaryText, setSummaryText] = useState<string>('');
  const [entityError, setEntityError] = useState<string | null>(null);
  const [selectedNode, setSelectedNode] = useState<ProcessedNode | null>(null);
  
  const apiKey = ENV.API_KEY_SECONDARY || ENV.API_KEY;
  const secondaryUrl = ENV.API_URL_SECONDARY;

  const testEntityMap = async () => {
    logger.info('Testing entity map API', { textLength: testText.length });
    if (!apiKey || !secondaryUrl) {
      toast.error('Missing API key or secondary URL. Check logs.');
      logger.error('Entity map test aborted due to missing keys or URL.', new Error('Missing keys or URL'));
      return;
    }

    try {
      const resp = await fetch(`${secondaryUrl}/entity_map_new`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-API-Key': apiKey
        },
        body: JSON.stringify({ text: testText })
      });

      if (!resp.ok) {
        const errorText = await resp.text();
        logger.error('Entity map request failed', new Error('Entity map request failed'), { response: errorText });
        toast.error(`Entity map failed: ${errorText}`);
        setEntityError(`Failed with status ${resp.status}: ${errorText}`);
        return;
      }

      const data = await resp.json();
      logger.info('Entity map success', data);

      const { graph } = data;
      if (!graph || !Array.isArray(graph.entities) || !Array.isArray(graph.relationships)) {
        logger.error('Entity map schema mismatch', new Error('Invalid graph structure'), { data });
        toast.error('Entity map schema mismatch. Check logs.');
        setEntityError('Schema mismatch: graph.entities or graph.relationships missing.');
        return;
      }

      if (graph.entities.length === 0 && graph.relationships.length === 0) {
        logger.warn('Entity map returned empty entities and relationships', { data });
        toast('Entity map is empty, nothing to visualize.');
      }

      setGraphData({ entities: graph.entities, relationships: graph.relationships });
      toast.success('Entity map success! Visualization ready.');
    } catch (error) {
      const errObj = error instanceof Error ? error : new Error(String(error));
      logger.error('Entity map request error', errObj);
      toast.error('Entity map request error. Check logs.');
      setEntityError(errObj.message);
    }
  };

  const testSummarize = async () => {
    logger.info('Testing summarization API', { textLength: testText.length });
    if (!apiKey || !secondaryUrl) {
      toast.error('Missing API key or secondary URL. Check logs.');
      logger.error('Summarization test aborted due to missing keys or URL.', new Error('Missing keys or URL'));
      return;
    }

    try {
      const summarizePayload = {
        text: testText,
        knowledge_graph: { entities: [], relationships: [] },
        system_prompt: "You are an expert assistant skilled at converting raw meeting transcripts into structured meeting minutes. Include extracted entities."
      };

      const resp = await fetch(`${secondaryUrl}/summarize`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-API-Key': apiKey
        },
        body: JSON.stringify(summarizePayload)
      });

      if (!resp.ok) {
        const errorText = await resp.text();
        logger.error('Summarization request failed', new Error('Summarization request failed'), { response: errorText });
        toast.error(`Summarization failed: ${errorText}`);
        return;
      }

      const data = await resp.json();
      logger.info('Summarization success', data);
      const summary = data.summary || 'No summary returned.';
      setSummaryText(summary);
      toast.success('Summarization success! Check logs and visualization.');
    } catch (error) {
      const errObj = error instanceof Error ? error : new Error(String(error));
      logger.error('Summarization request error', errObj);
      toast.error('Summarization request error. Check logs.');
    }
  };

  let processedData: { nodes: ProcessedNode[], links: ProcessedLink[] } | null = null;
  if (graphData) {
    const processed = processGraphData({
      graph: {
        entities: graphData.entities.map(e => ({
          ...e,
          meeting_id: 'unknown',
          created_at: Date.now()
        })),
        relationships: graphData.relationships.map(r => ({
          ...r,
          meeting_id: 'unknown',
          created_at: Date.now()
        }))
      }
    });
    processedData = processed;
  }

  const colorMap = useMemo(() => {
    if (!processedData) return new Map();
    return getEntityColorMap(processedData.nodes);
  }, [processedData]);

  return (
    <div className="max-w-4xl mx-auto space-y-4 text-gray-200">
      <h1 className="text-3xl font-bold text-white">API Test Page</h1>
      <p className="text-gray-400">Enter some text and test the secondary APIs</p>

      <textarea
        className="w-full h-32 p-2 bg-gray-800 text-gray-200 rounded border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        value={testText}
        onChange={(e) => setTestText(e.target.value)}
      />

      <div className="flex gap-4">
        <button
          onClick={testEntityMap}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-400"
        >
          Test Entity Map
        </button>
        <button
          onClick={testSummarize}
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-400"
        >
          Test Summarize
        </button>
      </div>

      {!apiKey && (
        <div className="text-red-400 text-sm mt-4">
          Warning: No API Key found. Please set VITE_API_KEY or VITE_API_KEY_SECONDARY.
        </div>
      )}
      {!secondaryUrl && (
        <div className="text-red-400 text-sm mt-2">
          Warning: No secondary URL found. Please set VITE_API_URL_SECONDARY.
        </div>
      )}

      {summaryText && (
        <SummaryViewer summary={summaryText} />
      )}

      {entityError && (
        <div className="bg-red-800 text-white p-4 rounded">
          <h2 className="font-bold mb-2">Entity Map Error</h2>
          <p className="text-sm">{entityError}</p>
          <p className="text-xs mt-2">Check debug panel for more details.</p>
        </div>
      )}

      {processedData && !entityError && (
        processedData.nodes.length > 0 || processedData.links.length > 0 ? (
          <div className="relative w-full h-[600px] bg-gray-900 rounded-lg p-4">
            <Graph
              nodes={processedData.nodes}
              links={processedData.links}
              onNodeClick={setSelectedNode}
              colorMap={colorMap}
              selectedNode={selectedNode}
            />
            <Sidebar
              selectedNode={selectedNode}
              onClose={() => setSelectedNode(null)}
              links={processedData.links}
              nodes={processedData.nodes}
              colorMap={colorMap}
            />
          </div>
        ) : (
          <div className="bg-gray-700 p-4 rounded text-white">
            <h2 className="font-semibold mb-2">No Entities/Relationships to Show</h2>
            <p className="text-sm">The entity map is empty. Check logs or try different text.</p>
          </div>
        )
      )}
    </div>
  );
}
```

### src/pages/ChatPage.tsx

```typescript
// src/pages/ChatPage.tsx
import React from 'react';

export function ChatPage() {
  return (
    <div className="max-w-4xl mx-auto text-gray-200">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-white">Chat with Your Meetings</h1>
        <p className="mt-2 text-gray-400">
          Interact with past meeting transcriptions and summaries.
        </p>
      </header>
      <main className="space-y-4">
        <div className="bg-gray-800 p-4 rounded-lg shadow">
          <p className="text-sm text-gray-300">User: Hi, can you summarize my last meeting?</p>
        </div>
        <div className="bg-gray-800 p-4 rounded-lg shadow">
          <p className="text-sm text-gray-300">Bot: Sure, your last meeting was about...</p>
        </div>
        <div className="mt-4">
          <input
            type="text"
            placeholder="Type a message..."
            className="w-full px-4 py-2 border border-gray-700 bg-gray-800 text-gray-200 rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
      </main>
    </div>
  );
}
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

### src/services/api/knowledgeGraph.ts

```typescript
import { KnowledgeGraph } from '../../types';
import { ENV } from '../../config/env';
import { logger } from '../../utils/logger';
import { APIError } from './errors';

const SECONDARY_API_URL = ENV.API_URL_SECONDARY;
const API_KEY = ENV.API_KEY_SECONDARY || ENV.API_KEY;

export async function fetchKnowledgeGraph(): Promise<KnowledgeGraph> {
  const response = await fetch('/api/knowledge-graph');
  const data = await response.json();

  console.log('Knowledge Graph API Response:', data);

  // Expecting data to have a graph object
  if (!data.graph || !Array.isArray(data.graph.entities) || !Array.isArray(data.graph.relationships)) {
    throw new Error('Invalid API response: graph.entities or graph.relationships are not arrays');
  }

  return data.graph as KnowledgeGraph;
}

export async function generateEntityMap(text: string): Promise<KnowledgeGraph> {
  if (!SECONDARY_API_URL || !API_KEY) {
    throw new APIError({
      code: 'CONFIG_ERROR',
      message: 'Missing API configuration',
    });
  }

  const payload = { text };

  try {
    const response = await fetch(`${SECONDARY_API_URL}/entity_map_new`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-API-Key': API_KEY,
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      throw new APIError({
        code: `HTTP_${response.status}`,
        message: 'Entity map request failed',
        status: response.status,
      });
    }

    const data = await response.json();

    if (!data.graph || !Array.isArray(data.graph.entities) || !Array.isArray(data.graph.relationships)) {
      throw new APIError({
        code: 'INVALID_RESPONSE',
        message: 'Entity map response missing required arrays in graph',
      });
    }

    return data.graph;
  } catch (error) {
    logger.error('Entity map request failed', error instanceof Error ? error : new Error(String(error)));
    throw error;
  }
}

export async function generateSummary(
  text: string,
  knowledgeGraph: KnowledgeGraph
): Promise<string> {
  if (!SECONDARY_API_URL || !API_KEY) {
    throw new APIError({
      code: 'CONFIG_ERROR',
      message: 'Missing API configuration',
    });
  }

  const payload = {
    text,
    knowledge_graph: knowledgeGraph,
    system_prompt: "You are an expert assistant skilled at converting raw meeting transcripts into meeting minutes. Include the extracted entities and relationships to produce a coherent summary.",
  };

  try {
    const response = await fetch(`${SECONDARY_API_URL}/summarize`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-API-Key': API_KEY,
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      throw new APIError({
        code: `HTTP_${response.status}`,
        message: 'Summarization request failed',
        status: response.status,
      });
    }

    const data = await response.json();
    return data.summary;
  } catch (error) {
    logger.error('Summarization request failed', error instanceof Error ? error : new Error(String(error)));
    throw error;
  }
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
      logger.error('API Error', error, { ...context }); 
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

      logger.error('Request failed', error, { ...context }); 
      throw new APIError({
        message: error.message,
        code: 'REQUEST_FAILED',
        details: context
      });
    }

logger.error('Unknown error', new Error('Unknown error'), { ...context });    throw new APIError({
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
export * from './client';
export * from './knowledgeGraph';

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

### src/store/transcription.ts

```typescript
// src/store/transcription.ts
import { create } from 'zustand';
import type { TranscriptionState, ProcessError, ProcessStatus, KnowledgeGraph } from '../types';
import { logger } from '../utils/logger/core';

export const useTranscriptionStore = create<TranscriptionState>((set, get) => ({
  file: null,
  fileId: null,
  status: 'idle',
  error: null,
  transcription: null,
  speakerMap: {},
  knowledgeGraph: null,
  summary: null,

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
  setKnowledgeGraph: (kg: KnowledgeGraph | null) => {
    if (kg) {
      logger.info('Setting knowledge graph', {
        entities: kg.entities?.length || 0,
        relationships: kg.relationships?.length || 0
      });
    } else {
      logger.info('Setting knowledge graph to null');
    }
    set({ knowledgeGraph: kg });
  },
  setSummary: (summary: string | null) => {
    logger.info('Setting summary', {
      length: summary?.length || 0
    });
    set({ summary });
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
      knowledgeGraph: null,
      summary: null
    });
  },
}));

```

