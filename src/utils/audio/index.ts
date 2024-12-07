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