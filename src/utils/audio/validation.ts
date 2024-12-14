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