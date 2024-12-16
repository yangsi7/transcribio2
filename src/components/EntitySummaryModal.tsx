// src/components/EntitySummaryModal.tsx
import React from 'react';
import { X } from 'lucide-react';
import type { KnowledgeGraph } from '../types';

interface EntitySummaryModalProps {
  isOpen: boolean;
  onClose: () => void;
  summary?: string | null;
  knowledgeGraph?: KnowledgeGraph | null;
}

export function EntitySummaryModal({ isOpen, onClose, summary, knowledgeGraph }: EntitySummaryModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-gray-800 w-full max-w-2xl rounded-lg shadow-lg p-6 relative text-gray-200">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1 text-gray-400 hover:bg-gray-700 rounded-full"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        <h2 className="text-xl font-bold mb-4">Extracted Summary & Entities</h2>
        
        {summary && (
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-2 text-gray-200">Summary</h3>
            <p className="text-gray-300 whitespace-pre-line">
              {summary}
            </p>
          </div>
        )}
        
        {knowledgeGraph?.entities && knowledgeGraph.entities.length > 0 && (
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-2 text-gray-200">Entities</h3>
            <ul className="list-disc list-inside text-gray-300 space-y-1">
              {knowledgeGraph.entities.map((e, i) => (
                <li key={i}>
                  <span className="font-semibold text-gray-200">{e.name}</span> ({e.type}): {e.description}
                </li>
              ))}
            </ul>
          </div>
        )}

        {knowledgeGraph?.relationships && knowledgeGraph.relationships.length > 0 && (
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-2 text-gray-200">Relationships</h3>
            <ul className="list-disc list-inside text-gray-300 space-y-1">
              {knowledgeGraph.relationships.map((r, i) => (
                <li key={i}>
                  <span className="font-semibold text-gray-200">{r.source}</span> → <span className="font-semibold text-gray-200">{r.target}</span>: {r.description} (Keywords: {r.keywords.join(', ')}, Strength: {r.strength})
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="text-right">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
