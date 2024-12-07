import { create } from 'zustand';
import type { TranscriptionState, ProcessError, ProcessStatus } from '../types';
import { logger } from '../utils/logger';

export const useTranscriptionStore = create<TranscriptionState>((set, get) => ({
  file: null,
  fileId: null,
  status: 'idle',
  error: null,
  transcription: null,
  speakerMap: {},
  setSpeakerName: (speaker, name) => {
    logger.debug('Updating speaker name', { speaker, name });
    set((state) => ({
      speakerMap: { ...state.speakerMap, [speaker]: name },
    }));
  },
  setFile: (file) => {
    logger.info('Setting file', { 
      name: file.name, 
      size: file.size, 
      type: file.type 
    });
    set({ file });
  },
  setFileId: (fileId) => {
    logger.info('Setting file ID', { fileId });
    set({ fileId });
  },
  setStatus: (status: ProcessStatus) => {
    const prevStatus = get().status;
    logger.info('Status change', { 
      from: prevStatus, 
      to: status 
    });
    set({ status });
  },
  setError: (error: ProcessError | null) => {
    if (error) {
      logger.error('Error occurred', new Error(error.message), {
        code: error.code,
        details: error.details
      });
    }
    set({ error });
  },
  setTranscription: (transcription) => {
    logger.info('Setting transcription result', {
      speakers: transcription.transcription.speakers.length,
      totalText: transcription.transcription.text.length
    });
    set({ transcription });
  },
  reset: () => {
    logger.info('Resetting transcription state');
    set({
      file: null,
      fileId: null,
      status: 'idle',
      error: null,
      transcription: null,
      speakerMap: {},
    });
  },
}));