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
