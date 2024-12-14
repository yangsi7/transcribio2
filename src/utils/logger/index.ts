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