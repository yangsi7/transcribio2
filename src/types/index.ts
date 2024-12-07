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
  setSpeakerName: (speaker: string, name: string) => void;
  setFile: (file: File) => void;
  setFileId: (id: string) => void;
  setStatus: (status: ProcessStatus) => void;
  setError: (error: ProcessError | null) => void;
  setTranscription: (transcription: TranscriptionResponse) => void;
  reset: () => void;
}