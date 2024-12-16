// src/hooks/useTranscriptionUpload.ts
import { useState, useCallback, useRef, useEffect } from 'react';
import { useTranscriptionStore } from '../store/transcription';
import { generateUploadUrl, uploadFile } from '../services/api/upload';
import { requestTranscription } from '../services/api/transcription';
import { logger } from '../utils/logger';
import { ENV } from '../config/env';
import type { ProcessError } from '../types';

export function useTranscriptionUpload() {
  const [uploadProgress, setUploadProgress] = useState(0);
  const { setStatus, setError, setFileId, setTranscription, setKnowledgeGraph, setSummary } = useTranscriptionStore();
  const abortControllerRef = useRef<AbortController | null>(null);

  useEffect(() => {
    return () => {
      logger.debug('Cleaning up upload resources');
      abortControllerRef.current?.abort();
    };
  }, []);

  const cancel = useCallback(async () => {
    logger.info('Cancelling upload process');
    abortControllerRef.current?.abort();
    setStatus('idle');
    setError(null);
    setUploadProgress(0);
  }, [setStatus, setError]);

  const upload = useCallback(async (file: File) => {
    logger.info('Starting upload process', { 
      fileName: file.name,
      fileSize: file.size,
      fileType: file.type
    });

    const abortController = new AbortController();
    abortControllerRef.current = abortController;
    const signal = abortController.signal;

    try {
      setStatus('generating-url');
      setError(null);
      setUploadProgress(0);

      logger.debug('Requesting upload URL from primary API');
      const { upload_url, file_id } = await generateUploadUrl(file.name, signal);
      logger.debug('Received upload URL and file_id', { file_id });
      setFileId(file_id);

      setStatus('uploading');
      logger.debug('Uploading file to signed URL');
      await uploadFile(upload_url, file, {
        signal,
        onProgress: (progress) => {
          setUploadProgress(progress.percentage);
          logger.debug('Upload progress event', { progress: progress.percentage });
        }
      });

      setStatus('requesting-transcription');
      logger.debug('Requesting transcription from primary API');
      const transcriptionData = await requestTranscription(file_id, signal);

      if (!transcriptionData?.transcription?.speakers || !transcriptionData?.transcription?.chunks || !transcriptionData?.transcription?.text) {
        throw new Error('Invalid transcription response structure.');
      }

      logger.info('Transcription retrieved successfully', {
        speakerCount: transcriptionData.transcription.speakers.length,
        textLength: transcriptionData.transcription.text.length
      });

      setTranscription(transcriptionData);
      setStatus('completed');

      if (transcriptionData.transcription.text) {
        const text = transcriptionData.transcription.text;
        logger.debug('Starting entity extraction process with secondary API', {
          textLength: text.length,
          endpoint: `${ENV.API_URL_SECONDARY}/entity_map_new`
        });

        const emResp = await fetch(`${ENV.API_URL_SECONDARY}/entity_map_new`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'X-API-Key': ENV.API_KEY_SECONDARY || ENV.API_KEY
          },
          body: JSON.stringify({ text }),
          signal
        });

        if (!emResp.ok) {
          const errorText = await emResp.text();
          logger.error('Entity map request failed', new Error('Entity map request failed'), { response: errorText });
          throw new Error(`Entity map request failed: ${errorText}`);
        }

        const entity_map_data = await emResp.json();
        logger.info('Entity map retrieved successfully', { 
          entityCount: entity_map_data?.graph?.entities?.length || 0,
          relationshipCount: entity_map_data?.graph?.relationships?.length || 0
        });

        const graph = entity_map_data.graph || { entities: [], relationships: [] };
        const kg = {
          entities: graph.entities || [],
          relationships: graph.relationships || []
        };

        setKnowledgeGraph(kg);

        logger.debug('Starting summarization with secondary API', {
          textLength: text.length,
          entityCount: kg.entities?.length || 0,
          relationshipCount: kg.relationships?.length || 0,
          endpoint: `${ENV.API_URL_SECONDARY}/summarize`
        });

        const summarizePayload = {
          text,
          knowledge_graph: kg,
          system_prompt: "You are an expert assistant skilled at converting raw meeting transcripts into meeting minutes. Include the extracted entities and relationships to produce a coherent summary."
        };

        const summarizeResp = await fetch(`${ENV.API_URL_SECONDARY}/summarize`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'X-API-Key': ENV.API_KEY_SECONDARY || ENV.API_KEY
          },
          body: JSON.stringify(summarizePayload),
          signal
        });

        if (!summarizeResp.ok) {
          const errorText = await summarizeResp.text();
          logger.error('Summarization request failed', new Error('Summarization request failed'), { response: errorText });
          throw new Error(`Summarization request failed: ${errorText}`);
        }

        const summaryData = await summarizeResp.json();
        const summary = summaryData.summary || "No summary returned.";
        logger.info('Summarization completed successfully', { summaryLength: summary.length });

        setSummary(summary);

        logger.info('All processes (upload, transcription, entity extraction, summarization) completed successfully', { file_id });
      } else {
        logger.warn('No transcription text found, skipping entity extraction and summarization');
      }

    } catch (error) {
      if (signal.aborted) {
        logger.info('Operation cancelled by user');
        setStatus('idle');
        return;
      }

      const processError: ProcessError = {
        code: 'UPLOAD_ERROR',
        message: error instanceof Error ? error.message : 'Upload failed',
        details: { fileName: file.name }
      };
      
      logger.error('Upload process failed', error instanceof Error ? error : new Error(processError.message), {
        fileName: file.name
      });
      
      setStatus('error');
      setError(processError);
    } finally {
      setUploadProgress(0);
      abortControllerRef.current = null;
    }
  }, [setStatus, setError, setFileId, setTranscription, setKnowledgeGraph, setSummary]);

  return { 
    upload, 
    uploadProgress,
    cancel 
  };
}