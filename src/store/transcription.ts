// src/store/transcription.ts
import { create } from 'zustand';
import type { TranscriptionState, ProcessError, ProcessStatus, KnowledgeGraph } from '../types';
import { logger } from '../utils/logger/core';

interface ExtendedTranscriptionState extends TranscriptionState {
  apiTestKnowledgeGraph: KnowledgeGraph | null;
  apiTestSummary: string | null;

  setApiTestKnowledgeGraph: (kg: KnowledgeGraph | null) => void;
  setApiTestSummary: (summary: string | null) => void;
}

export const useTranscriptionStore = create<ExtendedTranscriptionState>((set, get) => ({
  file: null,
  fileId: null,
  status: 'idle',
  error: null,
  transcription: null,
  speakerMap: {},
  knowledgeGraph: null,
  summary: null,

  apiTestKnowledgeGraph: null,
  apiTestSummary: null,

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
  setKnowledgeGraph: (kg: KnowledgeGraph | null) => {
    if (kg) {
      logger.info('Setting knowledge graph', {
        entities: kg.entities?.length || 0,
        relationships: kg.relationships?.length || 0
      });
    } else {
      logger.info('Setting knowledge graph to null');
    }
    set({ knowledgeGraph: kg });
  },
  setSummary: (summary: string | null) => {
    logger.info('Setting summary', {
      length: summary?.length || 0
    });
    set({ summary });
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
      knowledgeGraph: null,
      summary: null,
      apiTestKnowledgeGraph: null,
      apiTestSummary: null,
    });
  },

  setApiTestKnowledgeGraph: (kg) => {
    if (kg) {
      logger.info('Setting API Test knowledge graph', {
        entities: kg.entities?.length || 0,
        relationships: kg.relationships?.length || 0
      });
    } else {
      logger.info('Setting API Test knowledge graph to null');
    }
    set({ apiTestKnowledgeGraph: kg });
  },

  setApiTestSummary: (summary: string | null) => {
    logger.info('Setting API Test summary', {
      length: summary?.length || 0
    });
    set({ apiTestSummary: summary });
  },
}));