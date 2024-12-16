import { GraphData, ProcessedNode, ProcessedLink } from '../types/graph';

export const processGraphData = (data: GraphData) => {
  const nodes = new Map<string, ProcessedNode>();
  const links: ProcessedLink[] = [];

  data.graph.entities.forEach((entity) => {
    nodes.set(entity.name, {
      ...entity,
      id: entity.name,
      connections: 0,
    });
  });

  data.graph.relationships.forEach((rel) => {
    const sourceNode = nodes.get(rel.source);
    const targetNode = nodes.get(rel.target);

    if (sourceNode && targetNode) {
      sourceNode.connections++;
      targetNode.connections++;

      links.push({
        ...rel,
        id: `${rel.source}-${rel.target}`,
        source: sourceNode,
        target: targetNode,
      });
    }
  });

  return {
    nodes: Array.from(nodes.values()),
    links,
  };
};