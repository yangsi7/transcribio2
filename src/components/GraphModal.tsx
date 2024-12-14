// src/components/GraphModal.tsx
import React, { useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import { Graph } from './Graph';
import { NodeSidebar } from './NodeSidebar';
import type { ProcessedNode, ProcessedLink } from '../types/graph';
import { getEntityColorMap } from '../utils/entityColors';

interface GraphModalProps {
  isOpen: boolean;
  onClose: () => void;
  nodes: ProcessedNode[];
  links: ProcessedLink[];
}

export function GraphModal({ isOpen, onClose, nodes, links }: GraphModalProps) {
  if (!isOpen) return null;

  const colorMap = getEntityColorMap(nodes);
  const [selectedNode, setSelectedNode] = useState<ProcessedNode | null>(null);

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="relative w-full h-full bg-gray-900 flex flex-col">
        {/* Top bar */}
        <div className="flex items-center p-4 border-b border-gray-700 bg-gray-800">
          <button
            onClick={onClose}
            className="flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
          >
            <ArrowLeft className="w-4 h-4" />
            Back
          </button>
          <div className="flex-1 text-center">
            <h2 className="text-lg font-semibold text-gray-200">Graph Visualization</h2>
          </div>
          <div className="w-16" />
        </div>

        {/* Main content area */}
        <div className="relative flex-1 overflow-hidden">
          {/* Reserve space for the sidebar on the right */}
          <div className="relative w-full h-full pr-96">
            <Graph
              nodes={nodes}
              links={links}
              onNodeClick={setSelectedNode}
              colorMap={colorMap}
              selectedNode={selectedNode}
            />
          </div>
          <NodeSidebar
            selectedNode={selectedNode}
            onClose={() => setSelectedNode(null)}
            links={links}
            nodes={nodes}
            colorMap={colorMap}
          />
        </div>
      </div>
    </div>
  );
}