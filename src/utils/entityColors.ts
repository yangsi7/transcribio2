import { ENTITY_COLORS, DEFAULT_COLOR } from './colors';
import { ProcessedNode } from '../types/graph';

export const getEntityColorMap = (nodes: ProcessedNode[]) => {
  const typeCounts = nodes.reduce((acc, node) => {
    acc[node.type] = (acc[node.type] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  const sortedTypes = Object.entries(typeCounts)
    .sort(([, a], [, b]) => b - a)
    .map(([type]) => type);

  const colorMap = new Map<string, string>();
  sortedTypes.forEach((type, index) => {
    colorMap.set(type, index < ENTITY_COLORS.length ? ENTITY_COLORS[index] : DEFAULT_COLOR);
  });

  return colorMap;
};