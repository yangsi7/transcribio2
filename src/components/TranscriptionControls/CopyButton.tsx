// src/components/TranscriptionControls/CopyButton.tsx
import React from 'react';
import { Copy } from 'lucide-react';

interface CopyButtonProps {
  onCopy: () => Promise<void>;
}

export function CopyButton({ onCopy }: CopyButtonProps) {
  return (
    <button
      onClick={onCopy}
      className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-200 bg-gray-700 border border-gray-600 rounded-md hover:bg-gray-600"
    >
      <Copy className="w-4 h-4" />
      Copy
    </button>
  );
}