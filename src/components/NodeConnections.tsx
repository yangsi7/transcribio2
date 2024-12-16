import React from 'react';
import { ProcessedLink, ProcessedNode } from '../types/graph';

interface NodeConnectionsProps {
  node: ProcessedNode;
  links: ProcessedLink[];
  nodes: ProcessedNode[];
  colorMap: Map<string, string>;
}

export const NodeConnections: React.FC<NodeConnectionsProps> = ({
  node,
  links,
  nodes,
  colorMap,
}) => {
  const nodeConnections = links.filter(
    (link) => link.source.id === node.id || link.target.id === node.id
  );

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold border-b border-gray-700 pb-2">
        Connections ({nodeConnections.length})
      </h3>
      <div className="space-y-3 max-h-[calc(100vh-400px)] overflow-y-auto pr-2">
        {nodeConnections.map((connection) => {
          const isSource = connection.source.id === node.id;
          const connectedNode = isSource ? connection.target : connection.source;
          const connectionKey = `${connection.id}-${isSource ? 'source' : 'target'}`;

          return (
            <div
              key={connectionKey}
              className="bg-gray-800 rounded-lg p-4 space-y-2"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: colorMap.get(connectedNode.type) }}
                  />
                  <span className="font-medium">{connectedNode.name}</span>
                </div>
                <span className="text-sm text-gray-400 capitalize">
                  {connectedNode.type}
                </span>
              </div>
              
              <div className="flex items-center text-sm text-gray-400 mt-1">
                <span className="flex-1 text-center">
                  {isSource ? 'Connects to' : 'Connected from'}
                </span>
              </div>
              
              <p className="text-sm text-gray-300">{connection.description}</p>
              
              <div className="flex flex-wrap gap-2 mt-2">
                {connection.keywords.map((keyword) => (
                  <span
                    key={`${connectionKey}-${keyword}`}
                    className="px-2 py-1 text-xs bg-gray-700 rounded-full"
                  >
                    {keyword}
                  </span>
                ))}
              </div>
              
              <div className="flex justify-between text-sm text-gray-400 mt-2">
                <span>Strength: {connection.strength}</span>
                <span>{new Date(connection.created_at).toLocaleDateString()}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};