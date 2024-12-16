import React, { useMemo } from 'react';
import { BarChart2 } from 'lucide-react';
import { ProcessedNode } from '../../types/graph';

interface TopEntitiesPanelProps {
  nodes: ProcessedNode[];
  colorMap: Map<string, string>;
  onNodeSelect: (node: ProcessedNode) => void;
}

export const TopEntitiesPanel: React.FC<TopEntitiesPanelProps> = ({
  nodes,
  colorMap,
  onNodeSelect,
}) => {
  const { topNodes, topCategories } = useMemo(() => {
    const sortedNodes = [...nodes]
      .sort((a, b) => b.connections - a.connections)
      .slice(0, 10);

    const categoryStats = nodes.reduce((acc, node) => {
      acc[node.type] = (acc[node.type] || 0) + node.connections;
      return acc;
    }, {} as Record<string, number>);

    const sortedCategories = Object.entries(categoryStats)
      .sort(([, a], [, b]) => b - a)
      .slice(0, 10)
      .map(([category, connections]) => ({ category, connections }));

    return {
      topNodes: sortedNodes,
      topCategories: sortedCategories,
    };
  }, [nodes]);

  return (
    <div className="absolute left-4 bottom-4 bg-gray-900 rounded-lg p-4 w-[400px] shadow-lg">
      <div className="flex items-center space-x-2 mb-4">
        <BarChart2 className="w-4 h-4" />
        <h3 className="font-semibold">Top Entities & Categories</h3>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <h4 className="text-sm text-gray-400 mb-2">Most Connected Entities</h4>
          <div className="space-y-2">
            {topNodes.map((node) => (
              <button
                key={node.id}
                onClick={() => onNodeSelect(node)}
                className="w-full text-left p-2 hover:bg-gray-800 rounded-lg transition-colors"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div
                      className="w-3 h-3 rounded-full"
                      style={{ backgroundColor: colorMap.get(node.type) }}
                    />
                    <span className="text-sm truncate max-w-[120px]">{node.name}</span>
                  </div>
                  <span className="text-sm text-gray-400">{node.connections}</span>
                </div>
              </button>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-sm text-gray-400 mb-2">Top Categories</h4>
          <div className="space-y-2">
            {topCategories.map(({ category, connections }) => (
              <div
                key={category}
                className="flex items-center justify-between p-2"
              >
                <div className="flex items-center space-x-2">
                  <div
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: colorMap.get(category) }}
                  />
                  <span className="text-sm capitalize truncate max-w-[120px]">{category}</span>
                </div>
                <span className="text-sm text-gray-400">{connections}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};