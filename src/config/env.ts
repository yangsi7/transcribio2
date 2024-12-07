import { logger } from '../utils/logger';

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

// Log environment configuration on startup
logger.info('Environment configuration loaded', {
  API_URL: ENV.API_URL,
  IS_DEV: ENV.IS_DEV,
  HAS_API_KEY: !!ENV.API_KEY
});