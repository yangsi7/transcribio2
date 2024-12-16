// src/components/NodeSidebar.tsx
import React from 'react';
import { X } from 'lucide-react';
import { ProcessedNode, ProcessedLink } from '../types/graph';
import { NodeConnections } from './NodeConnections';

interface NodeSidebarProps {
  selectedNode: ProcessedNode | null;
  onClose: () => void;
  links: ProcessedLink[];
  nodes: ProcessedNode[];
  colorMap: Map<string, string>;
}

export const NodeSidebar: React.FC<NodeSidebarProps> = ({
  selectedNode,
  onClose,
  links,
  nodes,
  colorMap,
}) => {
  // If no selected node, show minimal instructions.  
  if (!selectedNode) {
    return (
      <div className="absolute right-0 top-0 h-full w-96 bg-gray-900 text-white p-4 shadow-lg overflow-hidden border-l border-gray-700">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Node Sidebar</h2>
          <button
            onClick={onClose}
            className="p-1 hover:bg-gray-800 rounded-full transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        <p className="text-gray-400">No node selected. Click a node on the graph to view details.</p>
      </div>
    );
  }

  return (
    <div className="absolute right-0 top-0 h-full w-96 bg-gray-900 text-white p-6 shadow-lg transform transition-transform overflow-hidden border-l border-gray-700">
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center space-x-2">
          <div
            className="w-4 h-4 rounded-full"
            style={{ backgroundColor: colorMap.get(selectedNode.type) }}
          />
          <h2 className="text-xl font-bold">Node Details</h2>
        </div>
        <button
          onClick={onClose}
          className="p-1 hover:bg-gray-800 rounded-full transition-colors"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      <div className="space-y-6">
        <div className="space-y-4">
          <div>
            <h3 className="text-sm text-gray-400">Name</h3>
            <p className="text-lg">{selectedNode.name}</p>
          </div>

          <div>
            <h3 className="text-sm text-gray-400">Type</h3>
            <p className="text-lg capitalize">{selectedNode.type}</p>
          </div>

          <div>
            <h3 className="text-sm text-gray-400">Description</h3>
            <p className="text-lg">{selectedNode.description}</p>
          </div>

          <div>
            <h3 className="text-sm text-gray-400">Created</h3>
            <p className="text-lg">
              {new Date(selectedNode.created_at).toLocaleDateString()}
            </p>
          </div>
        </div>

        <NodeConnections
          node={selectedNode}
          links={links}
          nodes={nodes}
          colorMap={colorMap}
        />
      </div>
    </div>
  );
};