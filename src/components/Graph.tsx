import React, { useCallback, useRef, useState } from 'react';
import ForceGraph2D from 'react-force-graph-2d';
import { ProcessedNode, ProcessedLink } from '../types/graph';

interface GraphProps {
  nodes: ProcessedNode[];
  links: ProcessedLink[];
  onNodeClick: (node: ProcessedNode) => void;
  colorMap: Map<string, string>;
  selectedNode: ProcessedNode | null;
  filteredNodeIds?: Set<string>;
}

export const Graph: React.FC<GraphProps> = ({
  nodes,
  links,
  onNodeClick,
  colorMap,
  selectedNode,
  filteredNodeIds,
}) => {
  const fgRef = useRef<any>();
  const [hoveredNode, setHoveredNode] = useState<ProcessedNode | null>(null);

  const getNodeColor = useCallback((node: ProcessedNode) => {
    const baseColor = colorMap.get(node.type) || '#607D8B';
    if (filteredNodeIds && !filteredNodeIds.has(node.id)) {
      return `${baseColor}33`;
    }
    
    const isSelected = selectedNode?.id === node.id;
    const isConnected = selectedNode && links.some(
      link => 
        (link.source.id === selectedNode.id && link.target.id === node.id) ||
        (link.target.id === selectedNode.id && link.source.id === node.id)
    );
    
    if (isSelected) return `${baseColor}FF`;
    if (isConnected) return `${baseColor}EE`;
    return selectedNode ? `${baseColor}44` : `${baseColor}CC`;
  }, [colorMap, selectedNode, links, filteredNodeIds]);

  const getLinkColor = useCallback((link: ProcessedLink) => {
    if (filteredNodeIds && (!filteredNodeIds.has(link.source.id) || !filteredNodeIds.has(link.target.id))) {
      return '#88ccff22';
    }
    
    if (selectedNode) {
      const isConnected = link.source.id === selectedNode.id || link.target.id === selectedNode.id;
      return isConnected ? '#88ccffFF' : '#88ccff22';
    }
    return '#88ccffAA';
  }, [selectedNode, filteredNodeIds]);

  const paintNode = useCallback((node: any, ctx: CanvasRenderingContext2D) => {
    const size = 6 + (node.connections * 2);
    const finalSize = Math.min(size, 20);
    const nodeColor = getNodeColor(node);
    
    if (selectedNode && (node.id === selectedNode.id || links.some(
      link => 
        (link.source.id === selectedNode.id && link.target.id === node.id) ||
        (link.target.id === selectedNode.id && link.source.id === node.id)
    ))) {
      ctx.beginPath();
      ctx.arc(node.x, node.y, finalSize * 1.4, 0, 2 * Math.PI);
      ctx.fillStyle = '#ffffff22';
      ctx.fill();
    }
    
    ctx.beginPath();
    ctx.arc(node.x, node.y, finalSize * 1.1, 0, 2 * Math.PI);
    ctx.fillStyle = '#ffffff33';
    ctx.fill();
    
    ctx.beginPath();
    ctx.arc(node.x, node.y, finalSize, 0, 2 * Math.PI);
    ctx.fillStyle = nodeColor;
    ctx.fill();
    
    ctx.strokeStyle = '#ffffff44';
    ctx.lineWidth = 1;
    ctx.stroke();
  }, [getNodeColor, selectedNode, links]);

  return (
<ForceGraph2D
  ref={fgRef}
  graphData={{ nodes, links }}
  nodeId="id"
  nodeCanvasObject={paintNode}
  nodeRelSize={6}
  linkWidth={(link) => {
    const strength = (link as ProcessedLink).strength;
    return 0.5 + (strength * 2.5);
  }}
  linkColor={getLinkColor}
  linkDirectionalParticles={2}
  linkDirectionalParticleWidth={2}
  // REMOVE linkOpacity={0.6}
  backgroundColor="#1A1A1A"
  linkDirectionalArrowLength={4}
  linkDirectionalArrowRelPos={1}
  linkDirectionalArrowColor={getLinkColor}
  d3VelocityDecay={0.3}
  cooldownTicks={100}
  onNodeClick={(node) => onNodeClick(node as ProcessedNode)}
  onNodeHover={setHoveredNode}
  onEngineStop={() => {
    if (fgRef.current) {
      fgRef.current.zoomToFit(400, 50);
    }
  }}
/>
  );
};