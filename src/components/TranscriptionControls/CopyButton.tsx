import React from 'react';
import { Copy } from 'lucide-react';

interface CopyButtonProps {
  onCopy: () => Promise<void>;
}

export function CopyButton({ onCopy }: CopyButtonProps) {
  return (
    <button
      onClick={onCopy}
      className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
    >
      <Copy className="w-4 h-4" />
      Copy
    </button>
  );
}