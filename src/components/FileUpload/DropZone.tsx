// src/components/FileUpload/DropZone.tsx
import React from 'react';
import { Upload } from 'lucide-react';
import { formatFileSize } from '../../utils/format';
import { AUDIO_CONFIG } from '../../config/audio';

interface DropZoneProps {
  onDrop: (e: React.DragEvent<HTMLDivElement>) => void;
  onFileSelect: (e: React.ChangeEvent<HTMLInputElement>) => void;
  acceptedTypes: string;
  isUploading: boolean;
}

export function DropZone({ onDrop, onFileSelect, acceptedTypes, isUploading }: DropZoneProps) {
  return (
    <div
      onDrop={onDrop}
      onDragOver={(e) => e.preventDefault()}
      className="p-8 border-2 border-dashed rounded-lg text-center bg-gray-800 border-gray-700 text-gray-200"
    >
      <Upload className="mx-auto h-12 w-12 text-gray-400" />
      <div className="mt-4">
        <label htmlFor="file-upload" className="cursor-pointer">
          <span className="text-blue-400 hover:text-blue-300">Upload a file</span>
          <input
            id="file-upload"
            type="file"
            className="sr-only"
            accept={acceptedTypes}
            onChange={onFileSelect}
            disabled={isUploading}
          />
        </label>
        <p className="mt-1 text-sm text-gray-400">or drag and drop</p>
      </div>

      <p className="mt-2 text-xs text-gray-400">
        Maximum file size: {formatFileSize(AUDIO_CONFIG.MAX_FILE_SIZE)}
      </p>
    </div>
  );
}