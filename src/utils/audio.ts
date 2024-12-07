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