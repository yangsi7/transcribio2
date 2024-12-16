// src/components/BackButton.tsx
import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export function BackButton() {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => navigate(-1)}
      className="flex items-center gap-2 px-4 py-2 bg-gray-700 text-white rounded hover:bg-gray-600 transition-colors text-sm"
    >
      <ArrowLeft className="w-4 h-4" />
      Back
    </button>
  );
}