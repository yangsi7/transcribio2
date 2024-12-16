// src/types/index.ts
export interface Speaker {
  speaker: string;
  timestamp: [number, number];
  text: string;
}

export interface TranscriptionResponse {
  transcription: {
    speakers: Speaker[];
    chunks: {
      timestamp: [number, number];
      text: string;
    }[];
    text: string;
  };
}

export interface KnowledgeGraphEntity {
  name: string;
  type: string;
  description: string;
}

export interface KnowledgeGraphRelationship {
  source: string;
  target: string;
  description: string;
  keywords: string[];
  strength: number;
}

export interface KnowledgeGraph {
  entities: KnowledgeGraphEntity[];
  relationships: KnowledgeGraphRelationship[];
}

export type ExportFormat = 'txt' | 'md' | 'pdf' | 'docx' | 'rtf';

export type ProcessStatus = 
  | 'idle'
  | 'validating'
  | 'generating-url'
  | 'uploading'
  | 'upload-complete'
  | 'requesting-transcription'
  | 'processing'
  | 'completed'
  | 'error';

export interface ProcessError {
  code: string;
  message: string;
  details?: unknown;
}

export interface TranscriptionState {
  file: File | null;
  fileId: string | null;
  status: ProcessStatus;
  error: ProcessError | null;
  transcription: TranscriptionResponse | null;
  speakerMap: Record<string, string>;
  knowledgeGraph: KnowledgeGraph | null;
  summary: string | null;

  setSpeakerName: (speaker: string, name: string) => void;
  setFile: (file: File) => void;
  setFileId: (id: string) => void;
  setStatus: (status: ProcessStatus) => void;
  setError: (error: ProcessError | null) => void;
  setTranscription: (transcription: TranscriptionResponse) => void;
  setKnowledgeGraph: (kg: KnowledgeGraph | null) => void;
  setSummary: (summary: string | null) => void;
  reset: () => void;
}

export interface EntityMapResponse {
  graph: KnowledgeGraph;
}

export interface EntityMapRequest {
  text: string;
}

export interface SummarizeRequest {
  text: string;
  knowledge_graph: KnowledgeGraph;
  system_prompt: string;
}

export interface SummarizeResponse {
  summary: string;
}
