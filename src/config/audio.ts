// src/config/audio.ts
export const AUDIO_CONFIG = {
  FORMATS: {
    'audio/mpeg': ['.mp3'],
    'audio/wav': ['.wav'],
    'audio/wave': ['.wav'],
    'audio/x-wav': ['.wav'],
    'audio/mp4': ['.m4a', '.mp4a'],
    'audio/x-m4a': ['.m4a'],
    'audio/aac': ['.aac'],
    'audio/ogg': ['.ogg', '.oga'],
    'audio/webm': ['.weba'],
    'audio/x-aiff': ['.aif', '.aiff'],
    'audio/flac': ['.flac'],
    'audio/x-flac': ['.flac']
  },
  MAX_FILE_SIZE: 500 * 1024 * 1024, // 500MB
  MIN_FILE_SIZE: 1024, // 1KB
  PREVIEW_CHUNK_SIZE: 256 * 1024, // 256KB
} as const;