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