export interface Entity {
    name: string;
    type: string;
    description: string;
    meeting_id: string;
    created_at: number;
  }
  
  export interface Relationship {
    source: string;
    target: string;
    description: string;
    keywords: string[];
    strength: number;
    meeting_id: string;
    created_at: number;
  }
  
  export interface GraphData {
    graph: {
      entities: Entity[];
      relationships: Relationship[];
    };
  }
  
  export interface ProcessedNode extends Entity {
    id: string;
    connections: number;
  }
  
  export interface ProcessedLink extends Omit<Relationship, 'source' | 'target'> {
    id: string;
    source: ProcessedNode;
    target: ProcessedNode;
  }