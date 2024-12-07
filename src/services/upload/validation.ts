import { logger } from '../../utils/logger';
import { AUDIO_CONFIG } from '../../config/audio';
import { formatFileSize } from '../../utils/format';

export interface ValidationResult {
  isValid: boolean;
  error?: string;
}

export function validateFileType(file: File): ValidationResult {
  const acceptedTypes = Object.keys(AUDIO_CONFIG.FORMATS);
  if (!acceptedTypes.includes(file.type)) {
    return {
      isValid: false,
      error: `Invalid file type. Supported formats: ${acceptedTypes.join(', ')}`
    };
  }
  return { isValid: true };
}

export function validateFileSize(file: File): ValidationResult {
  if (file.size > AUDIO_CONFIG.MAX_FILE_SIZE) {
    return {
      isValid: false,
      error: `File size exceeds maximum limit of ${formatFileSize(AUDIO_CONFIG.MAX_FILE_SIZE)}`
    };
  }
  if (file.size < AUDIO_CONFIG.MIN_FILE_SIZE) {
    return {
      isValid: false,
      error: `File size is below minimum of ${formatFileSize(AUDIO_CONFIG.MIN_FILE_SIZE)}`
    };
  }
  return { isValid: true };
}

export async function validateAudioContent(file: File): Promise<ValidationResult> {
  try {
    const chunk = file.slice(0, AUDIO_CONFIG.PREVIEW_CHUNK_SIZE);
    const arrayBuffer = await chunk.arrayBuffer();
    
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    const audioBuffer = await audioContext.decodeAudioData(arrayBuffer);
    
    if (audioBuffer.duration < 0.1) {
      return {
        isValid: false,
        error: 'Audio file appears to be empty or corrupted'
      };
    }
    
    if (audioBuffer.numberOfChannels === 0) {
      return {
        isValid: false,
        error: 'Audio file contains no audio channels'
      };
    }
    
    return { isValid: true };
  } catch (error) {
    logger.error('Audio content validation failed', error instanceof Error ? error : new Error('Unknown error'));
    return {
      isValid: false,
      error: 'Unable to validate audio content. The file may be corrupted.'
    };
  }
}

export async function validateFile(file: File): Promise<ValidationResult> {
  logger.debug('Starting file validation', {
    name: file.name,
    size: file.size,
    type: file.type
  });

  // Check file type
  const typeValidation = validateFileType(file);
  if (!typeValidation.isValid) {
    logger.warn('File type validation failed', { error: typeValidation.error });
    return typeValidation;
  }

  // Check file size
  const sizeValidation = validateFileSize(file);
  if (!sizeValidation.isValid) {
    logger.warn('File size validation failed', { error: sizeValidation.error });
    return sizeValidation;
  }

  // Validate audio content
  const contentValidation = await validateAudioContent(file);
  if (!contentValidation.isValid) {
    logger.warn('Audio content validation failed', { error: contentValidation.error });
    return contentValidation;
  }

  logger.debug('File validation successful');
  return { isValid: true };
}