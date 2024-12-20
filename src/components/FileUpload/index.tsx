import React, { useCallback } from 'react';
import { toast } from 'sonner';
import { useTranscriptionStore } from '../../store/transcription';
import { useTranscriptionUpload } from '../../hooks/useTranscriptionUpload';
import { AUDIO_CONFIG } from '../../config/audio';
import { DropZone } from './DropZone';
import { UploadProgress } from './UploadProgress';
import { logger } from '../../utils/logger';

interface FileUploadProps {
  onDataLoad?: (data: any) => void; // Make this optional if not always needed
}

export function FileUpload({ onDataLoad }: FileUploadProps) {
  const { setFile, status } = useTranscriptionStore();
  const { upload, uploadProgress, cancel } = useTranscriptionUpload();

  const handleFile = useCallback(async (selectedFile: File) => {
    if (!selectedFile) return;

    const fileName = selectedFile.name.toLowerCase();
    if (fileName.endsWith('.json') && onDataLoad) {
      // Handle JSON file scenario
      const reader = new FileReader();
      reader.onload = (e) => {
        try {
          const result = e.target?.result;
          if (typeof result === 'string') {
            const data = JSON.parse(result);
            onDataLoad(data);
          } else {
            toast.error('Invalid file content.');
          }
        } catch (err) {
          toast.error('Failed to parse JSON file.');
        }
      };
      reader.readAsText(selectedFile);
      return;
    }

    // Otherwise, handle audio upload
    logger.debug('File selected', {
      name: selectedFile.name,
      size: selectedFile.size,
      type: selectedFile.type
    });

    setFile(selectedFile);
    try {
      await upload(selectedFile);
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Upload failed';
      logger.error('File upload failed', error instanceof Error ? error : new Error(message));
      toast.error(message);
    }
  }, [setFile, upload, onDataLoad]);

  const handleDrop = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const droppedFile = e.dataTransfer.files[0];
    if (droppedFile) {
      handleFile(droppedFile);
    }
  }, [handleFile]);

  const handleFileSelect = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      handleFile(selectedFile);
    }
  }, [handleFile]);

  const acceptedTypes = Object.entries(AUDIO_CONFIG.FORMATS)
    .flatMap(([mime, exts]) => [mime, ...exts])
    .concat('.json') // Add json if you want to allow json uploads
    .join(',');

  const showProgress = ['uploading', 'requesting-transcription', 'generating-url'].includes(status);

  return (
    <div className="space-y-4">
      <DropZone
        onDrop={handleDrop}
        onFileSelect={handleFileSelect}
        acceptedTypes={acceptedTypes}
        isUploading={showProgress}
      />
      
      {showProgress && (
        <UploadProgress
          progress={uploadProgress}
          status={status}
          onCancel={cancel}
        />
      )}
    </div>
  );
}