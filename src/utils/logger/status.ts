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