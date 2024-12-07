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