import { logger } from './logger';
import { handleAudioError } from './error-handler';

export interface AudioProcessingResult {
  duration: number;
  channels: number;
  sampleRate: number;
  isValid: boolean;
}

export async function processAudioChunk(chunk: ArrayBuffer): Promise<AudioProcessingResult> {
  logger.debug('Processing audio chunk', { size: chunk.byteLength });

  try {
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    const audioBuffer = await audioContext.decodeAudioData(chunk);

    logger.debug('Audio chunk processed', {
      duration: audioBuffer.duration,
      channels: audioBuffer.numberOfChannels,
      sampleRate: audioBuffer.sampleRate
    });

    return {
      duration: audioBuffer.duration,
      channels: audioBuffer.numberOfChannels,
      sampleRate: audioBuffer.sampleRate,
      isValid: true
    };
  } catch (error) {
    handleAudioError(error as Error, undefined, { chunkSize: chunk.byteLength });
    return {
      duration: 0,
      channels: 0,
      sampleRate: 0,
      isValid: false
    };
  } finally {
    // Clean up AudioContext
    if (window.AudioContext || window.webkitAudioContext) {
      const audioContext = new (window.AudioContext || window.webkitAudioContext)();
      await audioContext.close();
    }
  }
}