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