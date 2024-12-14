import React, { useState } from 'react';
import { FileUpload } from './FileUpload';

interface InputSectionProps {
  onDataLoad: (data: any) => void;
}

export const InputSection: React.FC<InputSectionProps> = ({ onDataLoad }) => {
  const [jsonInput, setJsonInput] = useState('');

  const handleJsonSubmit = () => {
    try {
      const data = JSON.parse(jsonInput);
      onDataLoad(data);
    } catch (error) {
      console.error('Invalid JSON:', error);
    }
  };

  return (
    <div className="space-y-6 p-6 bg-gray-900 rounded-lg">
      <div className="space-y-4">
        <h2 className="text-xl font-bold text-white">Upload Graph Data</h2>
        {/* Pass onDataLoad here if you want FileUpload to handle JSON uploads */}
        <FileUpload onDataLoad={onDataLoad} />
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-bold text-white">Or Paste JSON</h2>
        <textarea
          value={jsonInput}
          onChange={(e) => setJsonInput(e.target.value)}
          className="w-full h-40 p-3 bg-gray-800 text-white rounded-lg border border-gray-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
          placeholder="Paste your JSON here..."
        />
        <button
          onClick={handleJsonSubmit}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          Load Graph
        </button>
      </div>
    </div>
  );
};